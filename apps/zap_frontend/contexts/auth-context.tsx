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
import { LoginCredentials, SignupCredentials } from '@/lib/types';
import { toast } from '@/hooks/use-toast';
import axios, { AxiosResponse } from 'axios';
import dotenv from "dotenv";
import { NEXT_PUBLIC_BACKEND_URL } from '@/config';
dotenv.config();

interface AuthContextType {
  user: UserBase | null;
  loading: boolean;
  isAuthenticated: boolean;
  signIn: (credentials: { email: string; password: string }) => Promise<boolean>;
  signOut: () => Promise<void>;
  googleLogin: () => void;
  githubLogin: () => void;
  signUp: (credentials: SignupCredentials) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);
  const clearUser = useUserStore((state) => state.clearUser);

  const { tokens, isAuthenticated, setTokens, setToken, clearToken, getTokenByType } = useAuthStore();

  // Handle hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      // Only check session if we have tokens
      if (tokens.length > 0) {
        checkSession();
      } else {
        setLoading(false);
      }
    }
  }, [mounted]);

  const checkSession = async () => {
    try {
      const res = await axiosInstance.get<AxiosResponse>(`${NEXT_PUBLIC_BACKEND_URL}/auth/me`);
      if (res.data.user) {
        setUser(res.data.user);
        if(res.data.user.tokens) {
          setTokens(res.data.user.tokens as TokenBase[]);
        }
      }
    } catch (err) {
     
      // Only clear if the error is 401 (unauthorized)
      if (err.response?.status === 401) {
        // clearToken();
        // clearUser();
        console.log("session not found..login again")
        router.replace("/login")
      }
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (credentials: SignupCredentials): Promise<void> => {
    try {
      const res = await axiosInstance.post<AxiosResponse>(`${NEXT_PUBLIC_BACKEND_URL}/auth/signup`, credentials);
      if (res.status===200) {
        console.log(res)

        const userData = res.data as UserBase;
        console.log(userData)
        setUser(userData);
        if(userData.tokens) {
          setTokens(userData.tokens as TokenBase[]);
        }
        toast({
          title: "Success",
          description: "Account created successfully. Please login.",
        });
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
      console.log("Attempting sign in with:", credentials.email);
      const res = await axiosInstance.post<AxiosResponse>(`${NEXT_PUBLIC_BACKEND_URL}/auth/signin`, credentials);
      
      if (res.status === 200 && res.data) {
        const userData = res.data.data.user as UserBase;
        console.log(userData)
        console.log("Sign in successful for user:", userData.email);
        if (userData.tokens && userData.tokens.length > 0) {
          setTokens(userData.tokens as TokenBase[]);
        }
        else {
          const cookieToken = document.cookie
          .split('; ')
          .find(row => row.startsWith('zapper='))
          ?.split('=')[1];

        if (cookieToken) {
          const tokenObj: TokenBase = {
            provider: "basic",
            accessToken: cookieToken
          };
          setToken(tokenObj);
        } 

        }
        
        setUser(userData);
        router.push("/dashboard");
        return true;
      }
      
      console.error("Sign in failed: Invalid response format");
      return false;
    } catch (err) {
      console.error('Login failed:', err);
      const errorMessage = err || "Invalid credentials. Please try again.";
      throw new Error(errorMessage);
    }
  };

  const signOut = async () => {
    try {
      await axiosInstance.get('/auth/logout');
      clearToken();
      clearUser();
      // Clear all cookies
      document.cookie.split(";").forEach((c) => {
        document.cookie = c
          .replace(/^ +/, "")
          .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
      });
      toast({
        title: "Success",
        description: "Logged out successfully",
      });
      router.replace("/login");
    } catch (err) {
      console.error('Logout failed', err);
      toast({
        title: "Error",
        description: "Failed to logout. Please try again.",
        variant: "destructive",
      });
    }
  };

  const googleLogin = async () => {
     router.push(`${NEXT_PUBLIC_BACKEND_URL || "http://localhost:3001"}/auth/google`);
  };

  const githubLogin =async () => {
    router.push(`${NEXT_PUBLIC_BACKEND_URL || "http://localhost:3001"}/auth/github`);
  };

  // Only render children when mounted to avoid hydration mismatch
  if (!mounted) {
    return null;
  }

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
