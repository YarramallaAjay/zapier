import { TokenBase, UserBase } from '@repo/types/src/UserSession';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { safeLocalStorage } from '@/lib/client-utils';

interface AuthState {
  tokens: TokenBase[];
  isAuthenticated: boolean;
  setToken: (token: TokenBase) => void;
  clearToken: () => void;
  getTokenByType: (provider: string) => TokenBase | undefined;
  setTokens: (existingTokens: TokenBase[]) => void;
  setAuthenticated: (value: boolean) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      tokens: [],
      isAuthenticated: false,
      setToken: (newToken) => {
        const existingTokens = get().tokens.filter(t => t.provider !== newToken.provider);
        set({ tokens: [...existingTokens, newToken], isAuthenticated: true });
      },
      clearToken: () => set({ tokens: [], isAuthenticated: false }),
      getTokenByType: (type: string) => get().tokens.find(t => t.provider === type),
      setTokens: (existingTokens) => {
        console.log(existingTokens)
        set({ tokens: existingTokens, isAuthenticated: existingTokens.length > 0 });
      },
      setAuthenticated: (value: boolean) => set({ isAuthenticated: value })
    }),
    {
      name: 'zapper_user_auth',
      storage: createJSONStorage(() => ({
        getItem: (name) => safeLocalStorage.getItem(name),
        setItem: (name, value) => safeLocalStorage.setItem(name, value),
        removeItem: (name) => safeLocalStorage.removeItem(name),
      })),
      skipHydration: true,
    }
  )
);

interface UserState {
  user: UserBase | null;
  setUser: (user: UserBase) => void;
  clearUser: () => void;
  updateUser: (updates: Partial<UserBase>) => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set,get) => ({
      user: null,
      setUser: (user) => set({ user }),
      clearUser: () => set({ user: null }),
      updateUser: (updates) => set((state) => ({
        user: state.user ? { ...state.user, ...updates } : null
      }))
    }),
    {
      name: 'zapper_user_session',
      storage: createJSONStorage(() => ({
        getItem: (name) => safeLocalStorage.getItem(name),
        setItem: (name, value) => safeLocalStorage.setItem(name, value),
        removeItem: (name) => safeLocalStorage.removeItem(name),
      })),
      skipHydration: true,
    }
  )
);
