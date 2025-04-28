import { PrismaClient } from "@repo/db/src"
import { Request, Response } from "express"
import { Apiresponse } from "@/utils/Response"
// import { v4 as uuidv4 } from 'uuid'

const zapProgressCache: Map<string, any> = new Map();

const prisma = new PrismaClient()

export class WebhookHandler {
  static async handleWebhook(req: Request, res: Response) {
    try {
      const { zapId } = req.params;
      const zap = await prisma.zap.findUnique({
        where: { id: zapId },
        include: { actions: true },
      });

      if (!zap) {
        Apiresponse.error(res, "Zap not found", 404, null);
        return;
      }

      // Create a new zap run
      const zapRun = await prisma.zapRun.create({
        data: {
          zapId: zap.id,
          metadata:{
          status: "running",
          startedAt: new Date(),
          }
         
        },
      });

      // Execute the zap's actions
      for (const action of zap.actions) {
        // Execute the action
        // This is a placeholder - implement actual action execution logic
        console.log(`Executing action: ${action.id}`);
      }

      // Update the zap run status
      await prisma.zapRun.update({
        where: { id: zapRun.id },
        data: {
          metadata:{
            status: "completed",
          completedAt: new Date(),
          }
          
        },
      });

      Apiresponse.success(res, { zapRunId: zapRun.id }, "Zap execution initialized");
      return;
    } catch (error) {
      Apiresponse.error(res, "Internal Server Error", 500, error);
      return;
    }
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


