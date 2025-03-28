import { PrismaClient } from "@prisma/client";
import { Kafka, Consumer, KafkaMessage } from "kafkajs";
import { sendEmailHandler } from "../handlers/EmailHandler";
import { sendSolTransactionHandler } from "../handlers/SolTransaction";
import { zapStatusWebhook } from "../handlers/WebhookHandler";

export type ActionType = "SEND_EMAIL" | "SEND_SOL_TRANSACTION";

export class KafkaConsumer {
  private kafka: Kafka;
  private consumer: Consumer;
  private TOPIC_NAME = "zap-execution-topic";
  private client: PrismaClient;

  constructor(clientId: string = "zap-consumer", brokers: string[] = ["localhost:9092"]) {
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
        eachMessage: async ({ topic, partition, message }: { topic: string; partition: number; message: KafkaMessage }) => {
          const value = message.value?.toString();
          if (!value) return;

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
    // Retrieve the zap run details and associated zap & actions
    const zapRun = await this.client.zapRun.findUnique({
      where: { id: zapRunId },
      include: { zap: { include: { actions: true } } },
    });

    if (!zapRun || !zapRun.zap) {
      throw new Error("ZapRun or Zap not found");
    }

    // Execute all actions in parallel; we assume each action has a field 'type' and optional 'inputData'
    const actions = zapRun.zap.actions;
    const actionPromises = actions.map((action) =>
      this.executeAction(zapRunId, action.id, action.actionType as ActionType, action.metadata) // using metadata or a dedicated field for input
    );

    await Promise.allSettled(actionPromises);

    // Optionally, update the final status of the zap run after all actions complete
    // e.g. if any action failed, mark as "PARTIAL", otherwise "SUCCESS"
    // This update might also be triggered by a separate Kafka consumer
    console.log(`[KafkaConsumer] Finished processing zapRun ${zapRunId}`);
  }

  async executeAction(zapRunId: string, actionId: string, type: ActionType, inputData: any) {
    try {
      let result: any;
      switch (type) {
        case "SEND_EMAIL":
          result = await sendEmailHandler(inputData);
          break;
        case "SEND_SOL_TRANSACTION":
          result = await sendSolTransactionHandler(inputData);
          break;
        default:
          throw new Error("Unsupported action type: " + type);
      }

      // Notify webhook handler with success status
      await this.notifyWebhook({ zapRunId, actionId, status: "SUCCESS", result });
    } catch (err: any) {
      console.error(`[KafkaConsumer] Action ${actionId} failed:`, err);
      // Notify webhook handler with failure status
      await this.notifyWebhook({ zapRunId, actionId, status: "FAILED", result: { error: err.message } });
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
