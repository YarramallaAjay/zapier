import {  Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { UserDetails } from "@repo/types/src/UserSession";

export const Auth = async (req, res: Response, next: NextFunction) => {
  try {
    const token = req.cookies.token;
    if (!token) {
       res.status(401).json({ message: "cookie token not found.." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || "secret") as { id: string };
    const user:UserDetails = await UserDetails.getUser(decoded.id);
    
    if (!user) {
       res.status(401).json({ message: "Invalid token" });
       return;
    }
    
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
    return;
  }
};
