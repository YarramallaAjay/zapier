import { Zap } from "../../../generated/prisma";
import { TeamBase } from "./Team";
export interface UserBase {
    id: string;
    name: string;
    email: string;
    team: TeamBase | {};
    createdAt: string;
    updatedAt: string;
    Zaps: Zap[] | {};
    tokens: TokenBase | TokenBase[];
}
export interface TokenBase {
    id: string;
    updatedAt: Date;
    createdAt: Date;
    userId: string;
    provider: string;
    accessToken: string;
    refreshToken: string;
}
export interface UserDetails {
    id: string;
    email: string;
    name: string;
    image?: string;
}
export interface UserSession {
    user: UserBase;
    expires: string;
}
export declare class UserDetails implements UserBase {
    static instance: UserDetails | null;
    static cacheTimeout: number;
    static cacheCreatedAt: number | null;
    id: string;
    name: string;
    email: string;
    team: TeamBase | {};
    createdAt: string;
    updatedAt: string;
    Zaps: Zap[] | {};
    tokens: TokenBase | TokenBase[];
    private constructor();
    static getUser(userId: string): Promise<UserDetails>;
    static setUser(data: UserBase): void;
    static updateUserDetails(userId: string): Promise<void>;
}
