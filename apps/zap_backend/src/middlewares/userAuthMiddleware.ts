import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import { reqProps } from "../types/express";
import {Request, NextFunction,Response } from "express";

dotenv.config();

const client = new PrismaClient();

export async function AuthUser(req:Request, res:Response,next:NextFunction) {
    const JWT_SECRET = process.env.JWT_SECRET || "jwtsecret";
    console.log(req.headers.cookie)

    // Extract token from cookies
    const token = req.headers.cookie
    console.log(token)

    if (!token) {
        console.log("Token not found in cookie");
        
         res.status(401).json({ message: "Token not found in cookie" });
         return
    }

    try {
        // Verify JWT token
        const decodedToken = await jwt.verify(token, JWT_SECRET) as { id: string };

        if (!decodedToken || !decodedToken.id) {
            console.log("Invalid token");
            res.status(401).json({ message: "Token not valid" });
            return
        }

        // Check if user exists in DB
        const userExists = await client.user.findUnique({
            where: { id: parseInt(decodedToken.id) },
            select:{
                id:true,
                name:true,
                email:true
            }
        });

        if (!userExists) {
            console.log("User not found");
             res.status(404).json({ message: "User not found" });
             return
        }

        // Attach user ID to request body
        (req as reqProps).user = await userExists;

        // Proceed to next middleware or route handler
        next();
    } catch (error) {
        console.error("Error verifying token:", error);
        res.status(500).json({ message: "Internal Server Error", error });
    }
}
