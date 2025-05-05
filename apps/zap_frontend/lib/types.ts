export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  teamId?: string;
  image?: string;
  tokens: TokenStore[];
  team?: Team;
  zaps: Zap[];
  createdAt: string;
  updatedAt: string;
}

export interface Team {
  id: string;
  name: string;
  metadata: Record<string, unknown>;
  updatedAt: string;
  createdAt: string;
  createdById: string;
  apps: App[];
  members: User[];
}

export interface App {
  id: string;
  name: string;
  description: string;
  teamId: string;
  team: Team;
  authMethods: AuthMethods[];
  actions: AvailableActions[];
  triggers: AvailableTriggers[];
}

export interface AuthMethods {
  id: string;
  appId: string;
  authId: string;
  metadata: Record<string, unknown>;
  app: App;
  availableAuth: AvailableAuthMethods;
}

export interface AvailableAuthMethods {
  id: string;
  name: string;
  provider: string;
  description: string;
  metadata: Record<string, unknown>;
  authMethods: AuthMethods[];
}

export interface Zap {
  id: string;
  name: string;
  description: string;
  metadata: Record<string, unknown>;
  userId: string;
  image?: string;
  actions: Action[];
  trigger?: Trigger;
  user: User;
  zapRuns: ZapRun[];
}

export interface Trigger {
  id: string;
  name: string;
  description: string;
  zapId: string;
  metadata: Record<string, unknown>;
  availableTriggerId: string;
  available: AvailableTriggers;
  zap: Zap;
}

export interface Action {
  id: string;
  name: string;
  description: string;
  metadata: Record<string, unknown>;
  zapId: string;
  sortingOrder: number;
  actionType: string;
  available: AvailableActions;
  zap: Zap;
}

export interface AvailableTriggers {
  id: string;
  name: string;
  description: string;
  metadata: Record<string, unknown>;
  configMetadata: Record<string, unknown>;
  type: string;
  appId: string;
  app: App;
  triggers: Trigger[];
}

export interface AvailableActions {
  id: string;
  name: string;
  description: string;
  metadata: Record<string, unknown>;
  configMetadata: Record<string, unknown>;
  type: string;
  appId: string;
  actions: Action[];
  app: App;
}

export interface ZapRun {
  id: string;
  metadata: Record<string, unknown>;
  zapId: string;
  zap: Zap;
  ZapRunOutBox?: ZapRunOutBox;
}

export interface ZapRunOutBox {
  id: string;
  zaprunId: string;
  ZapRun: ZapRun;
}

export interface TokenStore {
  id: string;
  createdAt: string;
  provider: string;
  updatedAt: string;
  accessToken: string;
  refreshToken: string;
  userId: string;
  user: User;
}

export interface ApiResponse {
  success: boolean;
  data?: any;
  error?: any;
  message: string;
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