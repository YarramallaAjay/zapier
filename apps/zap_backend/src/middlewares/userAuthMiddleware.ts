import jwt, { JwtPayload } from 'jsonwebtoken';
import { NextFunction, Response } from 'express';
import { UserDetails } from '@repo/types/src/UserSession';
import { JWT_SECRET } from '@/config';

// Fallback secret if environment variable is missing
const jwtSecret = JWT_SECRET || 'jwtSecret';

export async function AuthUser(req, res: Response, next: NextFunction) {
  const authHeader = req.headers['authorization'];
  console.log('Token from header:', authHeader);

  if (!authHeader) {
    
     res.status(401).json({ message: 'Authorization token missing or malformed' });
     return;
  }

  const token = authHeader.split(' ')[1]?.trim(); // Bearer <token>
  if (!token) {
     res.status(401).json({ message: 'Token missing from Authorization header' });
     return;
  }

  try {
    const decoded = jwt.verify(token, jwtSecret) as JwtPayload;
    console.log('Decoded JWT:', decoded);

    if (!decoded?.id) {
       res.status(401).json({ message: 'Invalid token payload' });
       return
    }

    const user = await UserDetails.getUser(decoded.id);
    if (!user) {
       res.status(404).json({ message: 'User not found' });
       return
    }

    const tokens = user.tokens ?? [];
    let tokenMatch ;
    if(Array.isArray(tokens) && tokens){
       tokenMatch = Array.isArray(tokens) && tokens.find((t) => t.accessToken === token);
    }
    else if(tokens){
      tokenMatch=tokens.accessToken===token
    }
    if (!tokenMatch) {
       res.status(401).json({ message: 'Token not associated with this user' });
       return;
    }
    

    req.user = user;
    next();
  } catch (err) {
    console.error('JWT Verification Error:', err);
     res.status(401).json({ message: 'Invalid or expired token' });
     return;
  }
}
