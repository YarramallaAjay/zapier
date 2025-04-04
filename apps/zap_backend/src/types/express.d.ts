import { UserBase } from "@repo/types/dist/UserSession";
declare global {
  namespace Express {
    interface Request {
      user?: UserBase; 
    }
    interface User extends UserBase {}
  }
}