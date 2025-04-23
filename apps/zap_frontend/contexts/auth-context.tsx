'use client';

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useRouter } from 'next/navigation';
import { TokenBase, UserBase, UserSession } from '@repo/types/src/UserSession';
import { useAuthStore, useUserStore } from '@/store/userStore';
import { axiosInstance } from '@/apiHandlers/ApiInstance';
import { ApiResponse, LoginCredentials, SignupCredentials } from '@/lib/types';
import { toast } from '@/hooks/use-toast';
import axios from 'axios';

interface AuthContextType {
  user: UserBase | null;
  loading: boolean;
  signIn: (credentials: { email: string; password: string }) => Promise<void>;
  signOut: () => Promise<void>;
  googleLogin: () => void;
  githubLogin: () => void;
  signUp:(credentials:SignupCredentials)=>Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);
  const clearUser = useUserStore((state) => state.clearUser);

  const tokens = useAuthStore((state) => state.tokens);
  const setTokens = useAuthStore((state) => state.setTokens);
  const setToken = useAuthStore((state) => state.setToken);
  const clearToken = useAuthStore((state) => state.clearToken);
  const getTokenByProvider = useAuthStore((state) => state.getTokenByType);

  useEffect(() => {
    checkSession();
  }, []);

  const checkSession = async () => {
    const storedToken = getTokenByProvider('basic') || getTokenByProvider('google') || getTokenByProvider('github');
    if (!storedToken) {
      clearToken();
      clearUser();
      // router.push('/login');
      setLoading(false);
      return;
    }

    try {
      const res = await axiosInstance.get<UserSession>('/');
      setUser(res.data.user);
      setTokens(res.data.user.tokens as TokenBase[]);
      console.log(res.data.user)
    } catch (err) {
      console.error('Session check failed', err);
      clearToken();
      clearUser();
      router.push('/login');
    } finally {
      setLoading(false);
    }
  };

  const signUp=async(Credentials:SignupCredentials):Promise<void>=>{

    return new Promise((resolve, reject)=>{
      axios.post<{response:ApiResponse}>(
        `${process.env.NEXT_PUBLIC_BACKEND_URL|| "http://localhost:3001"}/auth/signup`,
        Credentials
      ).then((res)=>{
        console.log("Successfully signup..login")
        router.push("/login")
        resolve()
      }).catch(err=>{
        console.log(`Error creatimg user. refresh and retry...`)
        console.log(err)
        reject()
      })
    })

  }

  const signIn = async (credentials: LoginCredentials) => {
    try {
      const res = await axiosInstance.post<{ token: string; user: UserBase }>(
        '/auth/login',
        credentials
      );

      const { user } = res.data;

      const basicToken = (user.tokens as TokenBase[]).find((token) => token.provider === 'basic');
      if (basicToken) setToken(basicToken);

      setUser(user);
      router.push('/dashboard');
    } catch (err) {
      console.error('Login failed', err);
    }
  };

  const signOut = async () => {
    try {
      await axiosInstance.post('/auth/logout');
    } catch (err) {
      console.error('Logout failed', err);
    } finally {
      clearToken();
      clearUser();
      router.push('/login');
    }
  };

  const googleLogin = () => {
    router.push('http://localhost:3001/auth/google');
  };

  const githubLogin = () => {
    router.push('http://localhost:3001/auth/github');
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, signIn,signUp, signOut, googleLogin, githubLogin }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
