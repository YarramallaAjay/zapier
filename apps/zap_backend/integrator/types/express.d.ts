import { UserBase } from "@repo/types/dist/UserSession";

declare global {
  namespace Express {
    interface Request {
      user?: UserBase & { token?: string };
    }
    interface User extends UserBase {
      token?: string;
    }
  }
} 