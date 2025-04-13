import jwt, { JwtPayload } from 'jsonwebtoken';
import { UserDetails } from "@repo/types/dist/UserSession";
import { NextFunction, Request, Response } from 'express';
import { JWT_SECRET } from '../../config';

// Replace with your secret key
const jwtSecret = JWT_SECRET || "jwtSecret";

export async function Auth(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers['authorization'];
  console.log("token: "+authHeader)
  
  if (!authHeader ) {
     res.status(401).json({ message: 'Authorization token missing or malformed' });
     return;
  }

  const token = authHeader.split(" ")[1]?.trim(); // Ensure the token exists and trim spaces

  if (!token) {
     res.status(401).json({ message: 'Token missing from Authorization header' });
     return;
  }

  try {
    const decoded = jwt.verify(token, jwtSecret) as JwtPayload;

    if (!decoded?.userId) {
       res.status(401).json({ message: 'Invalid token payload' });
       return;
    }

    try {
      const user = await UserDetails.getUser(decoded.userId);
      if (!user) {
         res.status(404).json({ message: 'User not found' });
         return;

      }

      req.user = user; 
      next();
    } catch (error) {
      console.error("Session Load Error:", error);
       res.status(500).json({ error: "Failed to load user session." });
       return;

    }

  } catch (err) {
    console.error("JWT Verification Error:", err);
     res.status(401).json({ message: 'Invalid or expired token' });
     return;

  }
}
