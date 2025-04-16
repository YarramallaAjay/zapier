export interface User {
  id: string;
  name: string;
  email: string;
  token: string;
  team?: {
    id: string;
    name: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface App {
  id: string;
  name: string;
  description: string;
  icon: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Trigger {
  id: string;
  appId: string;
  name: string;
  description: string;
  type: string;
  config: Record<string, unknown>;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Action {
  id: string;
  appId: string;
  name: string;
  description: string;
  type: string;
  config: Record<string, unknown>;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Zap {
  id: string;
  userId: string;
  name: string;
  description: string;
  triggerId: string;
  trigger?: {
    name: string;
    type: string;
  };
  actionIds: string[];
  actions?: Array<{
    name: string;
    type: string;
  }>;
  status?: 'active' | 'paused';
  lastRun?: string;
  lastRunStatus?: 'success' | 'error';
  runCount?: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignupCredentials {
  name: string;
  email: string;
  password: string;
} 