
import { Request } from "express";
export interface reqProps extends Request {
    user:{id: number;
        name: string;
        email: string;
    }
    
}