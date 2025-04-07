import { Prisma, PrismaClient } from '@prisma/client';
import { AuthenticationBase } from '@repo/types/src/Authentication';

export class GoogleAuth implements AuthenticationBase {
  type: 'OAuth' | 'Basic' | 'JWT' = 'OAuth';
  provider: string = 'Google';
  description: string = 'Google OAuth2 Authentication';
  authUrl: string = 'https://accounts.google.com/o/oauth2/v2/auth';
  tokenUrl: string = 'https://oauth2.googleapis.com/token';
  callbackUrl: string = 'https://your-platform.com/auth/google/callback'; // replace with dynamic if needed
  clientID: string = '';
  clientSecret: string = '';

  constructor() {}

  /**
   * Create a new Google OAuth authentication method for an app
   */
  async createAuth(appId: string, data: any, tx?: Prisma.TransactionClient) {
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
            clientID: data.clientID,
            clientSecret: data.clientSecret,
            authUrl: this.authUrl,
            tokenUrl: this.tokenUrl,
            callbackUrl: this.callbackUrl,
          },
        },
      });

      return authMethod;
    } catch (error) {
      console.error(`[GoogleAuth][createAuth] Error:`, error);
      throw error;
    }
  }

  /**
   * Delete an auth method by ID
   */
  async deleteAuth(authId: string, tx?: Prisma.TransactionClient) {
    const prisma = tx ?? new PrismaClient();

    try {
      await prisma.authMethods.delete({ where: { id: authId } });
    } catch (error) {
      console.error(`[GoogleAuth][deleteAuth] Error:`, error);
      throw error;
    }
  }

  /**
   * Update OAuth credentials or metadata
   */
  async updateAuth(authId: string, data: any, tx?: Prisma.TransactionClient) {
    const prisma = tx ?? new PrismaClient();

    try {
      await prisma.authMethods.update({
        where: { id: authId },
        data: {
          metadata: {
            clientID: data.clientID ?? this.clientID,
            clientSecret: data.clientSecret ?? this.clientSecret,
            authUrl: data.authUrl ?? this.authUrl,
            tokenUrl: data.tokenUrl ?? this.tokenUrl,
            callbackUrl: data.callbackUrl ?? this.callbackUrl,
          },
        },
      });
    } catch (error) {
      console.error(`[GoogleAuth][updateAuth] Error:`, error);
      throw error;
    }
  }

  /**
   * Get all auths for an app
   */
  async getAuths(appId: string, tx?: Prisma.TransactionClient) {
    const prisma = tx ?? new PrismaClient();

    try {
      return await prisma.authMethods.findMany({
        where: { appId },
        include: { availableAuth: true },
      });
    } catch (error) {
      console.error(`[GoogleAuth][getAuths] Error:`, error);
      throw error;
    }
  }

  /**
   * Get a single auth config by ID
   */
  async getAuthById(authId: string, tx?: Prisma.TransactionClient) {
    const prisma = tx ?? new PrismaClient();

    try {
      return await prisma.authMethods.findUnique({
        where: { id: authId },
        include: { availableAuth: true },
      });
    } catch (error) {
      console.error(`[GoogleAuth][getAuthById] Error:`, error);
      throw error;
    }
  }
}
