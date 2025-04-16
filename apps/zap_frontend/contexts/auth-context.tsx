"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, LoginCredentials, SignupCredentials } from '@/lib/types';
import { authApi } from '@/lib/api';
import { useRouter } from 'next/navigation';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (credentials: LoginCredentials) => Promise<void>;
  signup: (credentials: SignupCredentials) => Promise<void>;
  logout: () => void;
  googleLogin: () => void;
  githubLogin: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/auth/me', {
          credentials: 'include',
        });
        if (response.ok) {
          const data = await response.json();
          setUser(data.user);
        }
      } catch (error) {
        console.error('Auth check failed:', error);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (credentials: LoginCredentials) => {
    const response = await authApi.login(credentials);
    if (response.success && response.data) {
      setUser(response.data);
      router.push('/dashboard');
    } else {
      throw new Error(response.error || 'Login failed');
    }
  };

  const signup = async (credentials: SignupCredentials) => {
    const response = await authApi.signup(credentials);
    if (response.success && response.data) {
      setUser(response.data);
      router.push('/dashboard');
    } else {
      throw new Error(response.error || 'Signup failed');
    }
  };

  const logout = async () => {
    try {
      await fetch('/api/auth/logout', {
        method: 'POST',
        credentials: 'include',
      });
      setUser(null);
      router.push('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const googleLogin = () => {
    window.location.href = 'http://localhost:3001/auth/google';
  };

  const githubLogin = () => {
    window.location.href = 'http://localhost:3001/auth/github';
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout, googleLogin, githubLogin }}>
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