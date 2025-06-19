import { UserBase } from "@repo/types/src/UserSession";

declare global {
  namespace Express {
    export interface Request {
      user?: UserBase & { token?: string };
    }
    interface User extends UserBase {
      token?: string;
    }
  }
} 