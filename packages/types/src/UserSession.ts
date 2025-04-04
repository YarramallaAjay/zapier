import { PrismaClient, Zap } from "@prisma/client";
import { TeamBase } from "./Team";

const prisma = new PrismaClient();

export interface UserBase {
  id: number;
  name: string;
  email: string;
  team: TeamBase | {};
  createdAt: string;
  updatedAt: string;
  Zaps: Zap[] | {};
}

export class UserDetails implements UserBase {
  static instance: UserDetails | null = null;
  static cacheTimeout: number = 3600; // Cache timeout in seconds
  static cacheCreatedAt: number | null = null; // Cache creation timestamp

  id: number;
  name: string;
  email: string;
  team: TeamBase | {};
  createdAt: string;
  updatedAt: string;
  Zaps: Zap[] | {};

  private constructor(userData: UserBase) {
    this.id = userData.id;
    this.name = userData.name;
    this.email = userData.email;
    this.team = userData.team || {};
    this.createdAt = userData.createdAt || new Date().toISOString();
    this.updatedAt = userData.updatedAt || new Date().toISOString();
    this.Zaps = userData.Zaps || {};
  }

  // Singleton: Retrieve user details (cached if already fetched)
  static async getUser(userId: number): Promise<UserDetails> {
    if (
      UserDetails.cacheCreatedAt &&
      (Date.now() - UserDetails.cacheCreatedAt) < UserDetails.cacheTimeout * 1000 &&
      UserDetails.instance &&
      UserDetails.instance.id === userId
    ) {
      console.log("Returning cached user details...");
      return UserDetails.instance;
    }

    console.log("Fetching user details from DB...");
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: { team: true, zaps: true },
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
    });

    UserDetails.cacheCreatedAt = Date.now();
    console.log("User details fetched and cached successfully.");
    // Return the user details instance
    return UserDetails.instance;
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

  static async updateUserDetails(userId: number): Promise<void> {
    console.log("Updating user details and clearing cache...");
    UserDetails.instance = null;
    UserDetails.cacheCreatedAt = null;

    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: { team: true, zaps: true },
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
    });

    UserDetails.cacheCreatedAt = Date.now();
    console.log("User details updated successfully.");
  }
}
