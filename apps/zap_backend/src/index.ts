import hooksRouter from "./routes/hooksRouter";
import { KafkaProducer } from "./processor/processor";
import { KafkaConsumer } from "./workers/worker";
import express from 'express'
import cors from 'cors'
import zapRouter from "./routes/zapRouter";
import cookieParser from 'cookie-parser';
import session from "express-session";
import integrator from "./routes/ApplicationRoute"
import { UserDetails } from "@repo/types/dist/UserSession";
import authRouter from "./routes/authRouter";


export async function main(){

  await new KafkaProducer("zapConsumers", ["localhost:9092"]);
  await new KafkaConsumer("zapConsumers", ["localhost:9092"]);
  

    const app=express()

    
    app.use(cors({
      origin: ['http://localhost:3000'], // frontend URL
      credentials: true,                 // allow cookies to be sent
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      allowedHeaders: ['Content-Type', 'Authorization'],
    }));
    
    app.use(express.json())
    
    app.use(cookieParser())
    app.use(
        session({
          secret: process.env.SESSION_SECRET || "secret",
          resave: false,
          saveUninitialized: false,
          cookie: { secure: false },
        })
      );
    app.set('trust proxy', 1);
    app.use("/hooks", hooksRouter);
    app.use("/auth",authRouter);
    app.use("/integrator",integrator);
    app.use("/zap",zapRouter)
    app.get("/",async(req,res)=>{
      const userId=await req.body.userId
      console.log("ID:"+userId)
      const user=await UserDetails.getUser(userId)
      res.status(200).json(user)
      return;
    })
   

    app.listen(3001,()=>{
        console.log("server is running on port 3001")
    });
}
main()