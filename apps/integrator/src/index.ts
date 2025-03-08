import express from 'express';
import zod from 'zod';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';
import IntegrationRoute from './routes/IntegrationRoute';
import RegistrationRoute from './routes/RegistrationRoute';

const app = express();

const client = new PrismaClient();

app.use(express.json());
app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true
}))

app.use("/register",RegistrationRoute);
app.use("/",IntegrationRoute)

app.listen(5000,()=>{})
