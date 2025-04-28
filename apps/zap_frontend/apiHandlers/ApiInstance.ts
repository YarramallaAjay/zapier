import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { useAuthStore } from '@/store/userStore';
import { useRouter } from 'next/navigation';

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
      const { tokens, isAuthenticated } = useAuthStore.getState();
      const basicToken = tokens.find(t => t.provider === 'basic');

      if (basicToken && isAuthenticated) {
        config.headers = config.headers || {};
        config.headers['Authorization'] = `Bearer ${basicToken.accessToken}`;
      } else if (!isAuthenticated && !config.url?.includes('/auth/')) {
        console.warn('User not authenticated. Redirecting to login...');
        window.location.href = "/login";
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
        success: true,
        data: response.data,
        status: response.status,
        statusText: response.data.message,
        config: response.config,
        headers: response.headers,
      };
    },
    (error) => {
      const response = error.response;
      const message = response?.data?.message || 'Something went wrong';

      console.error('[Response Error]', message);

      if (response?.status === 401) {
        useAuthStore.getState().clearToken();
        window.location.href = "/login";
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
