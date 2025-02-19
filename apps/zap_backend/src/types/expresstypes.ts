
import { Request } from "express";
export interface reqProps extends Request {
    request:Request,
    user:{id: number;
        name: string;
        email: string;
    }
    
}