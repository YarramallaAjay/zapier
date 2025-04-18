// context/AuthContext.tsx
'use client';

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useRouter } from 'next/navigation';
import { UserBase, UserSession } from '@repo/types/src/UserSession';
import { useAuthStore, useUserStore } from '@/store/userStore';
import { axiosInstance } from '@/apiHandlers/ApiInstance';
import axios from 'axios';

interface AuthContextType {
  user: UserBase | null;
  loading: boolean;
  signIn: (credentials: { email: string; password: string }) => Promise<void>;
  signOut: () => Promise<void>;
  googleLogin:()=>void;
  githubLogin:()=>void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);
  const clearUser = useUserStore((state) => state.clearUser);

  const token = useAuthStore((state) => state.token);
  const setToken = useAuthStore((state) => state.setToken);
  const clearToken = useAuthStore((state) => state.clearToken);

  useEffect(() => {
    checkSession();
  }, []);

  const checkSession = async () => {
    try {
      const res = await axiosInstance.get<UserSession>('/');
      console.log(res.data)
      setToken(res.data.user.tokens)
      setUser(res.data.user);
    } catch (err) {
      clearToken();
      clearUser();
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (credentials: { email: string; password: string }) => {
    try {
      const res = await axiosInstance.post<{ token: string; user: UserBase }>(
        '/auth/login',
        credentials
      );

      const { token, user } = res.data;
      setToken(token);
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
      router.push('/');
    }
  };

  const googleLogin=async ()=>{
    try{
      router.push("http://localhost:3001/auth/google")
    }
    catch(e){
      throw new Error;
    }
  }

  const githubLogin=async ()=>{
    try{
      router.push("http://localhost:3001/auth/github")
    }
    catch(e){
      throw new Error;
    }
  }

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut, googleLogin,githubLogin }}>
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
