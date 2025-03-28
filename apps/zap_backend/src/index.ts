import hooksRouter from "./routes/hooksRouter";
import { kafkaProducer, } from "./processor/processor";
import { kafkaConsumer } from "./workers/worker";
import express from 'express'
import cors from 'cors'
import userRouter from "./routes/userRouter";
import zapRouter from "./routes/zapRouter";
import cookieParser from 'cookie-parser';
import session from "express-session";
import google from "./routes/google";

export async function main(){

    await new kafkaProducer(" ",[" "])
    await new kafkaConsumer(" ",[" "])

    const app=express()
    app.use(cors({
        credentials:true,
        origin:"http://localhost:3000"
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
    app.use("/",zapRouter)
    app.use("/auth",google)

    app.listen(3001,()=>{
        console.log("server is running on port 3001")
    });
}
main()