import { PrismaClient } from "@prisma/client"
import { Request, Response } from "express"
import { v4 as uuidv4 } from 'uuid'

const prisma = new PrismaClient()

export const WebhookHandler = async (req: Request, res: Response) => {
  const { userId , zapId } = req.params
  const webhookPayload = req.body

  try {
    // Step 1: Get zap
    const zap = await prisma.zap.findFirst({
      where: {
        id: zapId,
        userId: parseInt(userId as string)
      },
      include: {
        actions: {
          orderBy: { sortingOrder: 'asc' }
        },
        trigger: true,
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
          webhookPayload
        }
      }
    })

    // Step 3: Create ZapRunOutBox for Kafka to pick
    await prisma.zapRunOutBox.create({
      data: {
        zaprunId: zapRunId,
      }
    })

    return res.status(200).json({
      message: "Zap execution initialized",
      zapRunId,
    })

  } catch (error) {
    console.error("Webhook Handler Error:", error)
    return res.status(500).json({ message: "Internal Server Error" })
  }
}


export const zapStatusWebhook=async (payload) => {

  const {zaprunId,actionId,status, result}=await payload

  console.log(`${zaprunId}_${actionId}:${status} with result: ${result}`)
    
};


