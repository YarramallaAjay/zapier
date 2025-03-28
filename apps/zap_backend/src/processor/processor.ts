import { PrismaClient } from "@prisma/client"
import { Kafka, Producer } from "kafkajs"

export class KafkaProducer {
    private client: PrismaClient
    private kafka: Kafka
    private producer: Producer
    private readonly TOPIC_NAME = "zapsTopic"

    constructor(clientId: string = "zapconsumer", brokers: string[] = ["localhost:9092"]) {
        this.client = new PrismaClient()
        this.kafka = new Kafka({
            clientId,
            brokers,
        })
        this.producer = this.kafka.producer()

        this.initializeProducer()
    }

    async initializeProducer() {
        try {
            await this.producer.connect()
            console.log("[Kafka Producer] Connected.")

            while (true) {
                const zaps = await this.client.zapRunOutBox.findMany({
                    take: 10,
                    orderBy: { id: "asc" }, // Replaced with a valid field from the model
                })

                if (zaps.length === 0) {
                    await this.sleep(1500)
                    continue
                }

                console.log(`[Producer] Found ${zaps.length} zap runs to process.`)

                // Fetch zapRun details for metadata enrichment (optional)
                const fullZapRuns = await Promise.all(
                    zaps.map(z =>
                        this.client.zapRun.findUnique({
                            where: { id: z.zaprunId },
                            include: { zap: true }
                        })
                    )
                )

                // Send enriched messages to Kafka
                await this.producer.send({
                    topic: this.TOPIC_NAME,
                    messages: fullZapRuns.map(zapRun => ({
                        key: zapRun?.id,
                        value: JSON.stringify({
                            zapRunId: zapRun?.id,
                            zapId: zapRun?.zapId,
                            userId: zapRun?.zap?.userId,
                            metadata: zapRun?.metadata
                        })
                    }))
                })

                // Clean processed outbox
                await this.client.zapRunOutBox.deleteMany({
                    where: {
                        id: {
                            in: zaps.map(z => z.id)
                        }
                    }
                })

                console.log(`[Producer] Dispatched and cleared ${zaps.length} messages.`)

                await this.sleep(1000)
            }
        } catch (error) {
            console.error("[Kafka Producer Error]", error)
        }
    }

    private sleep(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }
}
