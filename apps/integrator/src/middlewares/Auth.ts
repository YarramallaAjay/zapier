import { Request,Response,NextFunction, RequestHandler } from "express";

export const Auth:RequestHandler=(req: Request, res: Response, next: NextFunction)=>{

    console.log("Auth Middleware");
    next();


}