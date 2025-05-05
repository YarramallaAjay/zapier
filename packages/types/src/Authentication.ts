import { Prisma } from "@repo/db/src"
import { User } from "@repo/db/src/generated/prisma"

export interface AuthenticationBase{
    type:"OAuth" |"Basic" |"JWT"
    provider:String
    createAuth(appId:any,data:any,tx?:Prisma.TransactionClient):Promise<any>
    deleteAuth(app:any,tx?:Prisma.TransactionClient):Promise<any>
    updateAuth(appId:any,data:any,tx?:Prisma.TransactionClient):Promise<any>
    getAuths(appId:any,tx?:Prisma.TransactionClient):Promise<any>
    getAuthById(authId:any,tx?:Prisma.TransactionClient):Promise<any>
}

export type AuthProvider = "Basic" | "Google"

export interface AuthResponse {
  user: User
  accessToken: string
  refreshToken: string
  provider: AuthProvider
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface SignupCredentials extends LoginCredentials {
  name: string
}

export interface GoogleAuthResponse {
  token: string
  provider: "Google"
}

export interface ResetPasswordData {
  token: string
  newPassword: string
}

export interface ForgotPasswordData {
  email: string
}

export interface AuthState {
  user: User | null
  accessToken: string | null
  refreshToken: string | null
  provider: AuthProvider | null
  isAuthenticated: boolean
  isLoading: boolean
}

export interface AuthStore extends AuthState {
  login: (credentials: LoginCredentials) => Promise<void>
  signup: (credentials: SignupCredentials) => Promise<void>
  googleAuth: (response: GoogleAuthResponse) => Promise<void>
  logout: () => Promise<void>
  forgotPassword: (data: ForgotPasswordData) => Promise<void>
  resetPassword: (data: ResetPasswordData) => Promise<void>
  refreshAuth: () => Promise<void>
}



