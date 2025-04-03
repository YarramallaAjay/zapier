import jwt, { JwtPayload } from 'jsonwebtoken';
import {UserDetails} from "@repo/types/src/UserSession";
import { NextFunction, Request, Response } from 'express';

// Replace with your secret key
const JWT_SECRET = process.env.JWT_SECRET || "jwtSecret";

export async function Auth(req:Request, res:Response, next:NextFunction) {
  console.log(req.headers['authorization'])
  const authHeader = req.headers['authorization'];

  if (!authHeader || !authHeader.startsWith('zapper')) {
     res.status(401).json({ message: 'Authorization token missing or malformed' });
     return
    
  }
  const token=authHeader.split("=")[1] as string;

    console.log(token)
    console.log(JWT_SECRET)

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
    try{
      const user = await UserDetails.getUser(decoded.userId);
      req.user = user; 
      next();
    }
    catch(e){
      console.error("Session Load Error:", e);
      res.status(500).json({ error: "Failed to load user session." });
    }

 

  } catch (err) {
    console.log(err)
     return res.status(401).json({ message: 'Invalid or expired token' });
     
  }
  
}
