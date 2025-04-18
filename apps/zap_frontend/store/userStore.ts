import { TokenBase, UserBase } from '@repo/types/src/UserSession';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  tokens: TokenBase[];
  setToken: (token: TokenBase) => void;
  clearToken: () => void;
  getTokenByType: (provider: string) => TokenBase | undefined;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      tokens: [],
      setToken: (newToken) => {
        const existingTokens = get().tokens.filter(t => t.provider !== newToken.provider);
        set({ tokens: [...existingTokens, newToken] });
      },
      clearToken: () => set({ tokens: [] }),
      getTokenByType: (type: string) => get().tokens.find(t => t.provider === type),
    }),
    {
      name: 'zapper_user_auth', 
    }
  )
);

interface UserState {
  user: UserBase | null;
  setUser: (user: UserBase) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      clearUser: () => set({ user: null }),
    }),
    {
      name: 'zapper_user_session',
    }
  )
);
