import hooksRouter from "./routes/hooksRouter";
import { KafkaProducer } from "./processor/processor";
import { KafkaConsumer } from "./workers/worker";
import express from 'express'
import cors from 'cors'
import userRouter from "./routes/userRouter";
import zapRouter from "./routes/zapRouter";
import cookieParser from 'cookie-parser';
import session from "express-session";
import google from "./routes/google";
import integrator from "./routes/ApplicationRoute"
import { UserDetails } from "@repo/types/dist/UserSession";
import githubrouter from "./routes/githubrouter";


export async function main(){

  await new KafkaProducer("zapConsumers", ["localhost:9092"]);
  await new KafkaConsumer("zapConsumers", ["localhost:9092"]);
  

    const app=express()
    app.use(cors({
        credentials:true,
        // origin:"http://localhost:3000"
    }))
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
    app.use("/hooks", hooksRouter);
    app.use("/user",userRouter);
    app.use("/auth/google",google);
    app.use("/auth/github",githubrouter);
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