import { UserBase } from "@repo/types/src/UserSession";
declare global {
  namespace Express {
    interface Request {
      user?: UserBase; 
    }
  }
}