import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { UserDetails } from "@repo/types/dist/UserSession.js";

export const Auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.cookies.token;
    if (!token) {
       res.status(401).json({ message: "No token provided" });
       return;
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || "secret") as { id: string };
    const user:UserDetails = await UserDetails.getUser(decoded.id);
    
    if (!user) {
       res.status(401).json({ message: "Invalid token" });
       return;
    }
    // Attach user to request
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
    return;
  }
};
