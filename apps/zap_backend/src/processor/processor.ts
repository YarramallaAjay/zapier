import { PrismaClient } from "@prisma/client";
import { Kafka, Producer } from "kafkajs";

export class kafkaProducer {
    private client: PrismaClient;
    private kafka: Kafka;
    private producer: Producer;
    private TOPIC_NAME: string;

    constructor(clientId: string, brokers: string[]) {
        this.client = new PrismaClient();
        this.TOPIC_NAME = "zapsTopic";
        this.kafka = new Kafka({
            clientId: clientId??"zapProducer",
            brokers: brokers[0]!==" " ? brokers : ["localhost:9092", "localhost:9093"],
        });
        this.producer = this.kafka.producer();

        this.initializeProducer();
    }

    async initializeProducer() {
        try {
            await this.producer.connect();
            console.log("Kafka producer connected"+this.producer);

            while (true) {
                const zaps = await this.client.zapRunOutBox.findMany({
                    where: {},
                    take: 10,
                });

                if (zaps.length === 0) {
                    console.log("No zaps found");
                    await new Promise((resolve) => setTimeout(resolve, 5000)); // Prevents busy looping
                    continue;
                }

                console.log("Sending messages:", zaps);

                await this.producer.send({
                    topic: this.TOPIC_NAME,
                    messages: zaps.map((z) => ({
                        value: z.zaprunId.toString(),
                    })),
                });

                // Delete processed records
                await this.client.zapRunOutBox.deleteMany({
                    where: {
                        id: {
                            in: zaps.map((z) => z.id),
                        },
                    },
                });
                await new Promise(r=> setTimeout(r,1000))
                
            }
        } catch (e) {
            console.error("Error in producer:", e);
        }
    }
}
