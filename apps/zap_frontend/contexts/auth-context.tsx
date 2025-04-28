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
import dotenv from "dotenv";
import { NEXT_PUBLIC_BACKEND_URL } from '@/config';
dotenv.config();
interface AuthContextType {
  user: UserBase | null;
  loading: boolean;
  isAuthenticated: boolean;
  signIn: (credentials: { email: string; password: string }) => Promise<void>;
  signOut: () => Promise<void>;
  googleLogin: () => void;
  githubLogin: () => void;
  signUp: (credentials: SignupCredentials) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);
  const clearUser = useUserStore((state) => state.clearUser);

  const { tokens, isAuthenticated, setTokens, setToken, clearToken, getTokenByType } = useAuthStore();

  useEffect(() => {
    checkSession();
  }, []);

  const checkSession = async () => {
    try {
      const res = await axios.get<UserSession>('/');
      if (res.data.user) {
        setUser(res.data.user);
        if(res.data.user.tokens){}
        setTokens(res.data.user.tokens as TokenBase[]);
      }
    } catch (err) {
      console.error('Session check failed', err);
      clearToken();
      clearUser();
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (credentials: SignupCredentials): Promise<void> => {
    try {
      const res = await axios.post<ApiResponse>(`${NEXT_PUBLIC_BACKEND_URL}/auth/signup`, credentials);
      if (res.data.success) {
        toast({
          title: "Success",
          description: "Account created successfully. Please login.",
        });
        router.push("/login");
      }
    } catch (err) {
      console.error('Signup failed', err);
      toast({
        title: "Error",
        description: "Failed to create account. Please try again.",
        variant: "destructive",
      });
      throw err;
    }
  };

  const signIn = async (credentials: LoginCredentials) => {
    try {
      const res = await axios.post<{ user: UserBase }>(`${NEXT_PUBLIC_BACKEND_URL}/auth/signin`, credentials);
      const { user } = res.data;

      if (user) {
        setUser(user);
        setTokens(user.tokens as TokenBase[]);
        toast({
          title: "Success",
          description: "Logged in successfully",
        });
        router.push("/dashboard");
      }
    } catch (err) {
      console.error('Login failed', err);
      toast({
        title: "Error",
        description: "Invalid credentials. Please try again.",
        variant: "destructive",
      });
      throw err;
    }
  };

  const signOut = async () => {
    try {
      await axiosInstance.get('/auth/logout');
      clearToken();
      clearUser();
      toast({
        title: "Success",
        description: "Logged out successfully",
      });
      router.push("/login");
    } catch (err) {
      console.error('Logout failed', err);
      toast({
        title: "Error",
        description: "Failed to logout. Please try again.",
        variant: "destructive",
      });
    }
  };

  const googleLogin = () => {
    window.location.href = `${NEXT_PUBLIC_BACKEND_URL || "http://localhost:3001"}/auth/google`;
  };

  const githubLogin = () => {
    window.location.href = `${NEXT_PUBLIC_BACKEND_URL || "http://localhost:3001"}/auth/github`;
  };

  const value = {
    user,
    loading,
    isAuthenticated,
    signIn,
    signOut,
    googleLogin,
    githubLogin,
    signUp,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
