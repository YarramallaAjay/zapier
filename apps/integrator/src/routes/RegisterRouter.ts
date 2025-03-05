import  express  from "express";
import zod from "zod";
import { PrismaClient } from "@prisma/client";
import cors from "cors";


const registerRouter:express.Router=express.Router();
const prisma = new PrismaClient();



registerRouter.post("/app",async (req,res)=>{})

registerRouter.post("/trigger",async (req,res)=>{})

registerRouter.post("/action",async (req,res)=>{})


export default registerRouter;
