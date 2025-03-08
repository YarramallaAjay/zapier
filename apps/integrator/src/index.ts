import express from 'express';
import zod from 'zod';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';
import RegisterRouter from './routes/RegisterRouter';
import UpdateRouter from './routes/UpdateRouter';
const router = express.Router();

const client = new PrismaClient();

router.use(express.json());
router.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true
}))

router.use("/register",RegisterRouter);
router.use("/update",UpdateRouter);
