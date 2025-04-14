import { PrismaClient } from "@prisma/client"
import { Request, Response } from "express"
import { v4 as uuidv4 } from 'uuid'

const zapProgressCache: Map<string, any> = new Map();

const prisma = new PrismaClient()

export const WebhookHandler = async (req, res) => {
  console.log("WebHook Hit")
    console.log(req.body)
  const { userId , zapId } = req.params
  const webhookPayload = req.body

  try {
    // Step 1: Get zap
    const zap = await prisma.zap.findFirst({
      where: {
        id: zapId,
        userId: userId
      },
      include: {
        actions: {
          orderBy: { sortingOrder: 'asc' }
        },
        trigger:true 
      },
    })

    if (!zap) return res.status(404).json({ message: "Zap not found" })

    // Step 2: Create ZapRun
    const zapRunId = uuidv4()

    await prisma.zapRun.create({
      data: {
        id: zapRunId,
        zapId: zap.id,
        metadata: {
          status: "PENDING",
          actions: zap.actions.map(action => ({
            actionId: action.id,
            status: "PENDING",
            order: action.sortingOrder,
          })),
          receivedAt: new Date().toISOString(),
          // webhookPayload
        }
      }
    })

    // Step 3: Create ZapRunOutBox for Kafka to pick
    await prisma.zapRunOutBox.create({
      data: {
        zaprunId: zapRunId,
      }
    })

     res.status(200).json({
      message: "Zap execution initialized",
      zapRunId,
    })
    return

  } catch (error) {
    console.error("Webhook Handler Error:", error)
     res.status(500).json({ message: "Internal Server Error" })
     return
  }
}
 // In-memory cache for zap progress

export const zapStatusWebhook = async (payload: {
  zapRunId: string;
  actionId: string;
  status: "SUCCESS" | "FAILED";
  result: any;
}): Promise<void> => {
  const { zapRunId, actionId, status, result } = payload;

  try {
    console.log(`[zapStatusWebhook] Processing action ${actionId} with status ${status}`);

    // Update the action's status in the database
    await prisma.zapRun.update({
      where: { id: zapRunId },
      data: {
        metadata: {
          update: {
            actions: {
              update: {
                where: { actionId },
                data: {
                   status, result },
              },
            },
          },
        },
      },
    });

    // Check if all actions are processed
    const zapRun = await prisma.zapRun.findUnique({
      where: { id: zapRunId },
      include: { zap: { include: { actions: true } } },
    });

    if (!zapRun || !zapRun.zap) {
      console.error(`[zapStatusWebhook] ZapRun or Zap not found for zapRunId ${zapRunId}`);
      return;
    }

    const allActions = zapRun.zap.actions;
    const processedActions = allActions.filter((action) => (action.metadata as any).status !== "PENDING");

    // If all actions are processed, update the zap's status
    if (processedActions.length === allActions.length) {
      const zapStatus = processedActions.some((action) => (action.metadata as any).status === "FAILED")
        ? "FAILED"
        : "SUCCESS";

      // Update the zap's status in the database
      await prisma.zapRun.update({
        where: { id: zapRunId },
        data: {
          metadata: {
            update: { status: zapStatus },
          },
        },
      });

      // Notify the frontend with the zap's final status
      console.log(`[zapStatusWebhook] All actions processed for zapRunId ${zapRunId}. Final status: ${zapStatus}`);
      // Notify frontend (e.g., via WebSocket or HTTP)
    } else {
      // Cache the zap's progress in memory
      zapProgressCache.set(zapRunId, {
        zapRunId,
        actions: processedActions,
      });
      console.log(`[zapStatusWebhook] Cached progress for zapRunId ${zapRunId}`);
    }
  } catch (error) {
    console.error(`[zapStatusWebhook] Error processing zapRunId ${zapRunId}:`, error);
  }
};


