import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { useAuthStore } from '@/store/userStore';
import { useRouter } from 'next/navigation';

const router=useRouter()

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
        router.push("/login");
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
        message: response.statusText,
        config:response.config,
        headers:response.headers,
        statusText:response.statusText
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
