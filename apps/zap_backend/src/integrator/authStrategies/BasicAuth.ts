import { Prisma, PrismaClient } from "@prisma/client";
import { AuthenticationBase } from "@repo/types/Authentication";

export class BasicAuth implements AuthenticationBase {
  type: "OAuth" | "Basic" | "JWT" = "Basic";
  provider: string = "BasicAuth";

  constructor() {}

  /**
   * Create a Basic Auth configuration for a given app
   */
  async createAuth(appId: number, data: any, tx?: Prisma.TransactionClient) {
    const prisma = tx ?? new PrismaClient();

    try {
      const availableAuth = await prisma.availableAuthMethods.findFirst({
        where: { provider: this.provider },
      });

      if (!availableAuth) {
        throw new Error(`Available auth method for provider '${this.provider}' not found.`);
      }

      const authMethod = await prisma.authMethods.create({
        data: {
          appId,
          authId: availableAuth.id,
          metadata: {
            username: data.username,
            password: data.password, // Store encrypted/hashed in production
            description: data.description ?? "Basic auth credentials",
          },
        },
      });

      return authMethod;
    } catch (error) {
      console.error(`[BasicAuth][createAuth] Error:`, error);
      throw error;
    }
  }

  /**
   * Delete a Basic Auth configuration
   */
  async deleteAuth(authId: number, tx?: Prisma.TransactionClient) {
    const prisma = tx ?? new PrismaClient();

    try {
      await prisma.authMethods.delete({
        where: { id: authId },
      });
    } catch (error) {
      console.error(`[BasicAuth][deleteAuth] Error:`, error);
      throw error;
    }
  }

  /**
   * Update Basic Auth metadata (e.g., change username/password)
   */
  async updateAuth(authId: number, data: Partial<AuthenticationBase>, tx?: Prisma.TransactionClient) {
    const prisma = tx ?? new PrismaClient();

    try {
      const existing = await prisma.authMethods.findUnique({ where: { id: authId } });
      if (!existing) throw new Error("Auth method not found");

      const updated = await prisma.authMethods.update({
        where: { id: authId },
        data: {
          metadata: {
            ...(typeof existing.metadata === "object" && existing.metadata !== null ? existing.metadata : {}),
            ...(data as any),
          },
        },
      });

      return updated;
    } catch (error) {
      console.error(`[BasicAuth][updateAuth] Error:`, error);
      throw error;
    }
  }

  /**
   * Get all Basic Auth configs for a specific app
   */
  async getAuths(appId: number, tx?: Prisma.TransactionClient) {
    const prisma = tx ?? new PrismaClient();

    try {
      return await prisma.authMethods.findMany({
        where: { appId },
        include: { availableAuth: true },
      });
    } catch (error) {
      console.error(`[BasicAuth][getAuths] Error:`, error);
      throw error;
    }
  }

  /**
   * Get Basic Auth config by ID
   */
  async getAuthById(authId: number, tx?: Prisma.TransactionClient) {
    const prisma = tx ?? new PrismaClient();

    try {
      return await prisma.authMethods.findUnique({
        where: { id: authId },
        include: { availableAuth: true },
      });
    } catch (error) {
      console.error(`[BasicAuth][getAuthById] Error:`, error);
      throw error;
    }
  }
}
