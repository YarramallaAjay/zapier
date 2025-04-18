import { PrismaClient, Zap } from "@prisma/client";
import { TeamBase } from "./Team";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

const prisma = new PrismaClient();

export interface UserBase {
  id: string;
  name: string;
  email: string;
  team: TeamBase | {};
  createdAt: string;
  updatedAt: string;
  Zaps: Zap[] | {};
  tokens:TokenBase | TokenBase[]
}

export interface TokenBase{
  id: string; updatedAt: Date; createdAt: Date; userId: string; provider: string; accessToken: string; refreshToken: string; 
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

export class UserDetails implements UserBase {
  static instance: UserDetails | null = null;
  static cacheTimeout: number = 86400; // Cache timeout in seconds (24 hours)
  static cacheCreatedAt: number | null = null; // Cache creation timestamp

  id: string;
  name: string;
  email: string;
  team: TeamBase | {};
  createdAt: string;
  updatedAt: string;
  Zaps: Zap[] | {};
  tokens:TokenBase|TokenBase[]

  private constructor(userData: UserBase) {
    this.id = userData.id;
    this.name = userData.name;
    this.email = userData.email;
    this.team = userData.team || {};
    this.createdAt = userData.createdAt || new Date().toISOString();
    this.updatedAt = userData.updatedAt || new Date().toISOString();
    this.Zaps = userData.Zaps || {};
    this.tokens=userData.tokens
  }

  // Singleton: Retrieve user details (cached if already fetched)
  static async getUser(userId: string): Promise<UserDetails> {
    try{
      if (
        UserDetails.cacheCreatedAt &&
        (Date.now() - UserDetails.cacheCreatedAt) < UserDetails.cacheTimeout * 1000 &&
        UserDetails.instance &&
        UserDetails.instance.id === userId
      ) {
        return UserDetails.instance;
      }
      const user = await prisma.user.findUnique({
        where: { id: userId },
        include: { team: {
          include:{
            apps:{
              include:{
                actions:true,
                authMethods:true,
                triggers:true,
              }
            },
          },
        }, zaps: true,tokens:true
       },
      });
  
      if (!user) throw new Error("User details not found");
  
      UserDetails.instance = new UserDetails({
        id: user.id,
        name: user.name,
        email: user.email,
        team: user.team || {},
        Zaps: user.zaps || [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        tokens:user.tokens
      });
  
      UserDetails.cacheCreatedAt = Date.now();
      console.log("User details fetched and cached successfully.");
      return UserDetails.instance;

    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError) {
        throw new Error("Prisma error:" + e.code + " : " + e.message);
      }
      console.error("Error fetching user details:", e);
      throw new Error("Failed to fetch user details");
    }
  }

  static setUser(data: UserBase): void {
    try {
      UserDetails.instance = new UserDetails(data);
      UserDetails.cacheCreatedAt = Date.now();
      console.log("User details set and cache updated.");
    } catch (e) {
      console.error("Error setting user details:", e);
    }
  }

  static async updateUserDetails(userId: string): Promise<void> {
    console.log("Updating user details and clearing cache...");
    UserDetails.instance = null;
    UserDetails.cacheCreatedAt = null;

    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: { team: true, zaps: true, tokens:true },
    });

    if (!user) throw new Error("User details not found");

    UserDetails.instance = new UserDetails({
      id: user.id,
      name: user.name,
      email: user.email,
      team: user.team || {},
      Zaps: user.zaps || [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      tokens:user.tokens
    });

    UserDetails.cacheCreatedAt = Date.now();
    console.log("User details updated successfully.");
  }
}
