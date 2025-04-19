import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { useAuthStore } from '@/store/userStore';
import { useRouter } from 'next/navigation';


const createAxiosInstance = (): AxiosInstance => {
  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL|| "htpp://localhost:3001",
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  });

  instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = useAuthStore.getState().tokens;

      if (token) {
        config.headers = config.headers || {};
        config.headers['Authorization'] = `Bearer ${token}`;
      } else {
        console.warn('token not found in store..login again');
        window.location.href="/login"
      }

      return config;
    },
    (error) => {
      console.error('[Request Error]', error);
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response:AxiosResponse) => {
      return {
        success: true,
        data: response.data,
        status: response.status,
        statusText: response.data.message,
        config:response.config,
        headers:response.headers,
      };
    },
    (error) => {
      const response = error.response;
      const message = response?.data?.message || 'Something went wrong';

      console.error('[Response Error]', message);

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
