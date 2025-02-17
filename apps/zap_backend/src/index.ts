import hooksRouter from "./hooks/routes/hooksRouter";
import { kafkaProducer, } from "./processor/processor";
import { kafkaConsumer } from "./workers/worker";
import express from 'express'
import cors from 'cors'

export async function main(){

    const producer=await new kafkaProducer(" ",[" "])
    const consumer=await new kafkaConsumer(" ",[" "])

    const app=express()
    app.use(cors())
    app.use(express.json())

    app.use("/hooks", hooksRouter);

    app.listen(3000,()=>{
        console.log("server is running on port 3000")
    });
}
main()