import { 
  ApiResponse, 
  User, 
  App, 
  Trigger, 
  Action, 
  Zap, 
  LoginCredentials, 
  SignupCredentials 
} from './types';

const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3001';

async function fetchApi<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse> {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers,
      credentials: 'include',
    });

    const data = await response.json();
    return {
      code: response.ok,
      data: data.data,
      error: data.error,
      message: data.message,
    };
  } catch (error) {
    return {
      code: false,
      error: 'Network error',
      message: 'Failed to connect to the server',
    };
  }
}

export const authApi = {
  login: async (credentials: LoginCredentials) => {
    return fetchApi<User>('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  },

  signup: async (credentials: SignupCredentials) => {
    return fetchApi<User>('/auth/signup', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  },

  logout: async () => {
    return fetchApi<void>('/auth/logout', {
      method: 'POST',
    });
  },
};

export const appsApi = {
  getApps: async () => {
    return fetchApi<App[]>('/apps');
  },

  getApp: async (appId: string) => {
    return fetchApi<App>(`/apps/${appId}`);
  },

  getAppTriggers: async (appId: string) => {
    return fetchApi<Trigger[]>(`/apps/${appId}/triggers`);
  },

  getAppActions: async (appId: string) => {
    return fetchApi<Action[]>(`/apps/${appId}/actions`);
  },
};

export const zapApi = {
  getZaps: async () => {
    return fetchApi<Zap[]>('/zaps');
  },

  getZap: async (zapId: string) => {
    return fetchApi<Zap>(`/zaps/${zapId}`);
  },

  createZap: async (zap: Omit<Zap, 'id' | 'userId' | 'createdAt' | 'updatedAt'>) => {
    return fetchApi<Zap>('/zaps', {
      method: 'POST',
      body: JSON.stringify(zap),
    });
  },

  updateZap: async (zapId: string, zap: Partial<Zap>) => {
    return fetchApi<Zap>(`/zaps/${zapId}`, {
      method: 'PUT',
      body: JSON.stringify(zap),
    });
  },

  deleteZap: async (zapId: string) => {
    return fetchApi<void>(`/zaps/${zapId}`, {
      method: 'DELETE',
    });
  },
}; 