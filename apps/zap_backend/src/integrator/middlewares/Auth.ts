import {  Request,Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { UserDetails } from "@repo/types/src/UserSession";
import { Apiresponse } from "@/utils/Response";

export const Auth = async (req:Request, res: Response, next: NextFunction) => {
  try {
    console.log(req)
    const token = req.cookies.token;
    if (!token) {
      Apiresponse.error(res,"cookie not found",401,{})
      return;
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || "secret") as { id: string };
    const user:UserDetails = await UserDetails.getUser(decoded.id);
    
    if (!user) {
      Apiresponse.error(res,"Invalid token",401,{})
       return;
    }
    
    req.user = user;
    next();
  } catch (error) {
    Apiresponse.error(res,"Internal server error",401,error)
  }
};
