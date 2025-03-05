import express from 'express';
import zod from 'zod';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';

const updateRouter:express.Router=express.Router();

const client=new PrismaClient();

updateRouter.use(express.json());
updateRouter.use(cors({
    origin:['http://localhost:3000'],
    credentials:true
}))

updateRouter.post("/update",async (req,res)=>{})
updateRouter.post("/delete",async (req,res)=>{})
updateRouter.post("/get",async (req,res)=>{})


export default updateRouter;