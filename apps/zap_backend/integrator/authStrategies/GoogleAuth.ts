import { LOCAL_URL } from "@/config";
import { Prisma, PrismaClient } from "@prisma/client";
import { AuthenticationBase } from "@repo/types/dist/Authentication";
import { Status } from "@repo/types/dist/Status";

export class GoogleAuth implements AuthenticationBase {
  type: "OAuth" | "Basic" | "JWT" = "OAuth";
  provider: string = "Google";
  description: string = "Google OAuth2 Authentication";
  authUrl: string = "https://accounts.google.com/o/oauth2/v2/auth";
  tokenUrl: string = "https://oauth2.googleapis.com/token";
  callbackUrl: string = `${LOCAL_URL}/auth/google/callback`;
  clientID: string = "";
  clientSecret: string = "";

  constructor() {}

  async createAuth(appId: string, data: any, tx?: Prisma.TransactionClient): Promise<any> {
    const prisma = tx || new PrismaClient();

    try {
      const availableAuth = await prisma.availableAuthMethods.findFirst({
        where: { provider: this.provider },
      });

      if (!availableAuth) {
        return JSON.stringify({
          messages:`Auth method for provider '${this.provider}' not found.`,
          data:{},
          error:{},
          status:Status.PROCESSED_NOT_SUCCESSFUL
      });
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

      return JSON.stringify({message:"Auth Created Successfully",data: authMethod, error:{},status: Status.SUCCESS});
    } catch (error) {
      console.error("[createAuth] Error:", error);
      return JSON.stringify({message:"Error Occurred", data:{}, error:error,status: Status.FAILED});
    }
  }

  async deleteAuth(authId: string, tx?: Prisma.TransactionClient): Promise<any> {
    const prisma = tx || new PrismaClient();

    try {
      await prisma.authMethods.delete({ where: { id: authId } });

      return JSON.stringify({message:"Auth Deleted Successfully", data:{},error: {}, status:Status.SUCCESS});
    } catch (error) {
      console.error("[deleteAuth] Error:", error);
      return JSON.stringify({message:"Error Occurred", data:{},error: error, status:Status.FAILED});
    }
  }

  async updateAuth(authId: string, data: any, tx?: Prisma.TransactionClient): Promise<any> {
    const prisma = tx || new PrismaClient();

    try {
      const updatedAuth = await prisma.authMethods.update({
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

      return JSON.stringify({message:"Auth Updated Successfully", data:updatedAuth,error: {},status: Status.SUCCESS});
    } catch (error) {
      console.error("[updateAuth] Error:", error);
      return JSON.stringify({message:"Error Occurred", data:{},error: error,status: Status.FAILED});
    }
  }

  async getAuths(appId: string, tx?: Prisma.TransactionClient): Promise<any> {
    const prisma = tx || new PrismaClient();

    try {
      const auths = await prisma.authMethods.findMany({
        where: { appId },
        include: { availableAuth: true },
      });

      if (auths.length === 0) {
        return JSON.stringify({message:`No auth methods found for App ID: ${appId}`,data: {},error: {},status: Status.PROCESSED_NOT_SUCCESSFUL});
      }

      return JSON.stringify({message:"Auths Fetched Successfully",data: auths,error: {},status: Status.SUCCESS});
    } catch (error) {
      console.error("[getAuths] Error:", error);
      return JSON.stringify({message:"Error Occurred", data:{},error: error,status: Status.FAILED});
    }
  }

  async getAuthById(authId: string, tx?: Prisma.TransactionClient): Promise<any> {
    const prisma = tx || new PrismaClient();

    try {
      const auth = await prisma.authMethods.findUnique({
        where: { id: authId },
        include: { availableAuth: true },
      });

      if (!auth) {
        return JSON.stringify({message:`No auth found with ID: ${authId}`, data:{}, error:{},status: Status.PROCESSED_NOT_SUCCESSFUL});
      }

      return JSON.stringify({message:"Auth Fetched Successfully", data:auth,error: {},status: Status.SUCCESS});
    } catch (error) {
      console.error("[getAuthById] Error:", error);
      return JSON.stringify({message:"Error Occurred", data:{}, error:error,status: Status.FAILED});
    }
  }
}
