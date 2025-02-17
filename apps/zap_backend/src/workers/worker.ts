import { PrismaClient } from "@prisma/client";
import { Consumer, Kafka } from "kafkajs";

export class kafkaConsumer{

    private kafka:Kafka;
    private consumer:Consumer;
    private TOPIC_NAME:string;
    private client:PrismaClient;


    constructor(
        clientId:string, brokers:string[]
    ){
        this.TOPIC_NAME="zapsTopic"
        this.client=new PrismaClient();
        this.kafka = new Kafka({
            clientId: clientId?? "zapProducer",
            brokers: brokers[0]!==" "?brokers : ["localhost:9092", "localhost:9093"],
        });
        this.consumer=this.kafka.consumer({
            groupId: "zapConsumers",
            
        }) 
        this.initConsumer()
           
        

    }
    async initConsumer() {
        try{
              
            await this.consumer.connect()
            await this.consumer.subscribe({
                topic: this.TOPIC_NAME,
                fromBeginning:true
            })  
            console.log("subscribed successfully",this.consumer)

                await this.consumer.run({
                    autoCommit:false,
                    eachMessage:async ({topic,partition, message})=>{
                        console.log({
                            topic:this.TOPIC_NAME,
                            message:message.value?.toString(),
                            partition:partition,
                            offset:message.offset
                        })
                        await new Promise((resolve)=>setTimeout(resolve,1000))
                 
                    await this.consumer.commitOffsets([{
                        topic: this.TOPIC_NAME,
                        partition: partition,
                        offset: (parseInt(message.offset) + 1).toString() // 5
                      }])
                    },
                })
               
            }
        
        catch(e){
            console.log(e)
            throw new Error("Issue with Kafka initilization:"+e);
        }

    }
}