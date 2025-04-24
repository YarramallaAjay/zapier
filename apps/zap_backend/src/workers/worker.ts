import { PrismaClient } from "../../../../generated/prisma";
import { response } from "express";
import { Kafka, Consumer, KafkaMessage } from "kafkajs";
import { EmailHandler } from "@/handlers/EmailHandler";
import { SolTransactionHandler } from "@/handlers/SolTransaction";
import { zapStatusWebhook } from "@/handlers/WebhookHandler";

export type ActionType = "SEND_EMAIL" | "SEND_SOL_TRANSACTION";

export class KafkaConsumer {
  private kafka: Kafka;
  private consumer: Consumer;
  private TOPIC_NAME = "zapsTopic";
  private client: PrismaClient;

  constructor(clientId: string = "zapConsumers", brokers: string[] = ["localhost:9092"]) {
    this.client = new PrismaClient();
    this.kafka = new Kafka({ clientId, brokers });
    this.consumer = this.kafka.consumer({ groupId: "zapConsumers" });
    this.initConsumer();
  }


  async initConsumer() {
    try {
      await this.consumer.connect();
      await this.consumer.subscribe({ topic: this.TOPIC_NAME, fromBeginning: false });
      console.log(`[KafkaConsumer] Subscribed to topic: ${this.TOPIC_NAME}`);

      await this.consumer.run({
        autoCommit: false,
        eachMessage: async ({ partition, message }: { partition: number; message: KafkaMessage }) => {
          const value = message.value?.toString();
          if (!value) return;
          console.log(this.TOPIC_NAME)
          const payload = JSON.parse(value);
          const zapRunId: string = payload.zapRunId;

          try {
            await this.processZapRun(zapRunId);
            await this.consumer.commitOffsets([
              {
                topic: this.TOPIC_NAME,
                partition,
                offset: (parseInt(message.offset) + 1).toString(),
              },
            ]);
          } catch (err) {
            console.error(`[KafkaConsumer] Error processing zapRunId ${zapRunId}:`, err);
          }
        },
      });
    } catch (err) {
      console.error("[KafkaConsumer] Initialization error:", err);
      throw err;
    }
  }

  async processZapRun(zapRunId: string) {
    const zapRun = await this.client.zapRun.findUnique({
      where: { id: zapRunId },
      include: { zap: { include: { actions: { orderBy: { sortingOrder: "asc" }, include: { available: true } } } } },
    });
  
    if (!zapRun || !zapRun.zap) {
      throw new Error("ZapRun or Zap not found");
    }
  
    const actions = zapRun.zap.actions;
  
    for (const action of actions) {
      try {
        console.log(`[KafkaConsumer] Executing action ${action.id} for zapRunId ${zapRunId}`);
        const result = await this.executeAction(zapRunId, action.id, action.available.type as ActionType, action.metadata);
        console.log(`[KafkaConsumer] Action ${action.id} succeeded with result:`, result);
      } catch (error) {
        console.error(`[KafkaConsumer] Action ${action.id} failed:`, error);
        await this.notifyWebhook({
          zapRunId,
          actionId: action.id,
          status: "FAILED",
          result: { error: error },
        });
      }
    }
  
    console.log(`[KafkaConsumer] Finished processing zapRun ${zapRunId}`);
  }
  
  async executeAction(zapRunId: string, actionId: string, type: ActionType, inputData: any) {
    try {
      let result: any;
      switch (type.toLowerCase()) {
        case "send_email":
          result = await  EmailHandler.sendEmail(inputData, response);
          break;
        case "send_sol_transaction":
          result = await  SolTransactionHandler.executeTransaction(inputData, response);
          break;
        default:
          throw new Error("Unsupported action type: " + type);
      }
  
      await this.notifyWebhook({ zapRunId, actionId, status: "SUCCESS", result });
    } catch (error) {
      console.error(`[executeAction] Action ${actionId} failed:`, error);
      throw error;
    }
  }

      

  async notifyWebhook(payload: { zapRunId: string; actionId: string; status: "SUCCESS" | "FAILED"; result: any; }) {
    try {
      // Send an HTTP request to the webhook handler route to update the zap run status
      await zapStatusWebhook(payload);
      console.log(`[Webhook] Notified for action ${payload.actionId} with status ${payload.status}`);
    } catch (err) {
      console.error("[Webhook] Notification failed:", err);
    }
  }
}
