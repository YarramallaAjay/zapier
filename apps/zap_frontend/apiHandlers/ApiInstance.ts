"use client";
import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { useAuthStore } from '@/store/userStore';
import { ApiResponse } from '@/lib/types';

// interface ApiResponse<T = any> {
//   success: boolean;
//   data?: T;
//   message?: string;
//   error?: any;
// }

const createAxiosInstance = (): AxiosInstance => {
  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3001",
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  });

  instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      // First try to get token from cookies

      const cookieToken = document.cookie
        .split('; ')
        .find(row => row.startsWith('zapper='))
        ?.split('=')[1];

      if (cookieToken) {
        config.headers = config.headers || {};
        config.headers['Authorization'] = cookieToken;
      } else {
        // If no cookie token, try to get from store
        const { tokens, isAuthenticated } = useAuthStore.getState();
        const basicToken = tokens.find(t => t.provider === 'basic');

        if (basicToken && isAuthenticated) {
          config.headers = config.headers || {};
          config.headers['Authorization'] = `Bearer ${basicToken.accessToken}`;
        }
      }

      return config;
    },
    (error) => {
      console.error('[Request Error]', error);
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response: AxiosResponse) => {
      return {
        config:response.config,
        headers:response.headers,
        data:response.data,
        status:response.status,
        statusText:response.data.message,
        request:response.request
      };
    },
    (error) => {
      const response = error.response;
      const message = response?.data?.message || 'Something went wrong';

      console.error('[Response Error]', message);

      if (response?.status === 401) {
        const store = useAuthStore.getState();
        // store.clearToken();
        // Clear all cookies
        document.cookie.split(";").forEach((c) => {
          document.cookie = c
            .replace(/^ +/, "")
            .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
        });
      }

      return Promise.reject({
        success: false,
        status: response?.status,
        message,
        error: response?.data || error,
      });
    }
  );

  return instance;
};

export const axiosInstance = createAxiosInstance();
