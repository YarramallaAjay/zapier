import express, { Router, Response, Request } from "express";
import { PrismaClient } from "@prisma/client";
import { string, unknown, z, ZodString } from "zod";
import "dotenv/config";
import { AuthUser } from "../middlewares/userAuthMiddleware";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/client.js";
import { ZapSchema } from "../types/zodSchema";
import { WebhookHandler } from "../handlers/WebhookHandler";
import { TriggerFactory } from "../integrator/Triggers/TriggerFactory";
import { TriggerBase } from "@repo/types/src/Trigger";

const router: Router = express.Router();
const client = new PrismaClient();

router.use(express.json());

// Helper function to handle errors
const handlePrismaError = (error: any, res: Response) => {
  if (error instanceof PrismaClientKnownRequestError) {
    console.error(`Prisma Error [Code: ${error.code}]: ${error.message}`);
    res.status(400).json({ message: "Database error occurred", error: { code: error.code, message: error.message } });
  } else {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error", error: { message: error.message } });
  }
};

let trigger:TriggerBase
router.get("/zaps", AuthUser, async (req, res) => {
  try {
    const user = req.user;
    if (!user) {
      res.status(401).json({ message: "User not authenticated" });
      return;
    }

    const userZaps = await client.zap.findMany({
      where: { userId: (user.id as unknown as string) },
      include: {
        actions: { include: { available: true } },
        trigger: { include: { available: true } },
      },
    });

    if (userZaps.length === 0) {
      res.status(203).json({ message: "No zaps found. Create one!" });
      return;
    }

    res.status(200).json({ message: "Zaps fetched successfully", data: userZaps });
  } catch (error) {
    handlePrismaError(error, res);
  }
});

// Get a zap by ID
router.get("/zap/:zapId", AuthUser, async (req: Request, res: Response) => {
  try {
    const zapId = req.params.zapId

    const zapItem = await client.zap.findUnique({ where: { id: zapId } });
    if (!zapItem) {
      res.status(404).json({ message: "Zap not found" });
      return;
    }

    res.status(200).json({ message: "Zap fetched successfully", data: zapItem });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ message: "Validation error", errors: error.errors });
    } else {
      handlePrismaError(error, res);
    }
  }
});

// Create a new zap
router.post("/newzap", AuthUser, async (req: Request, res: Response) => {
  try {
    const user = req.user;
    if (!user) {
      res.status(401).json({ message: "User not authenticated" });
      return;
    }

    const { trigId, triggername, description, actions } = await req.body

    if(!trigId || !triggername ||!description){
        res.json({
            "message":"Missing inputs",
            data:{
                data:req.body
            }
        })
    }

    const validTrigger = await client.availableTriggers.findFirst({
      where: { name: triggername }
        });

    if (!validTrigger) {
      res.status(404).json({ message: "Trigger not found" });
      return;
    }
    console.log("[trigger found:"+JSON.stringify(validTrigger))

    const validActions = await client.availableActions.findMany({
      where: { id: { in: actions } },
    });

    if (validActions.length !== actions.length) {
      res.status(400).json({ message: "Some actions not found" });
      return;
    }

    console.log(`Actions found : ${JSON.stringify(validActions)}`)

    const newZap = await client.$transaction(async (tx) => {
      const zapper = await tx.zap.create({
        data: {
          name: triggername,
          description:description || " ",
          userId: (user.id as unknown as string),
          actions: {
            create: validActions.map((action, index = 0) => ({
              sortingOrder: index++,
              name: action.name,
              description: action.description,
              metadata: action.metadata || {"input":"testInputs"},
              available: { connect: { id: action.id } }, // Ensure 'available' is properly connected
            })),
          },
        },
      });

      const trigger = await tx.trigger.create({
        data: {
          name: triggername,
          zapId: zapper.id,
          description: description || triggername,
          availableTriggerId: validTrigger.id,
          metadata: {},
        },
      });
      console.log(zapper)

      return { ...zapper, trigger };
    });

    


    res.status(201).json({ message: "Zap created successfully", data: newZap });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ message: "Validation error", errors: error.errors });
    } else {
      handlePrismaError(error, res);
    }
  }
});

// Trigger a zap
router.post("/zap/:zapId", AuthUser, async (req: Request, res: Response) => {
  try {
    const user = req.user;
    const zapId  = ZapSchema.partial().parse(req.params.zapId);

    if (!user) {
      res.status(401).json({ message: "User not authenticated" });
      return;
    }

    const zap = await client.zap.findFirst({
      where: { id: zapId as unknown as string, userId: (user.id as unknown as string) },
    });

    if (!zap) {
      res.status(404).json({ message: "Zap not found" });
      return;
    }

    res.status(200).json({ message: `Zap ${zapId} triggered successfully`, data: zap });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ message: "Validation error", errors: error.errors });
    } else {
      handlePrismaError(error, res);
    }
  }
});

// Update a zap
router.put("/zap/:zapId", AuthUser, async (req: Request, res: Response) => {
  try {
    const zapId =ZapSchema.partial().parse(req.params.zapId);
    const zapData = ZapSchema.partial().parse(req.body);

    const updatedZap = await client.zap.update({
      where: { id: zapId as unknown as string },
      data: { description:zapData.description,
        name:zapData.name,
        metadata:zapData.metadata,
        image:zapData.image
        }
    });

    res.status(200).json({ message: "Zap updated successfully", data: updatedZap });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ message: "Validation error", errors: error.errors });
    } else {
      handlePrismaError(error, res);
    }
  }
});

// Delete a zap
router.delete("/zap/:zapId", AuthUser, async (req: Request, res: Response) => {
  try {
    const zapId  = ZapSchema.partial().parse(req.params.zapId);

    await client.zap.delete({ where: { id: zapId as unknown as string } });
    res.status(200).json({ message: "Zap deleted successfully" });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ message: "Validation error", errors: error.errors });
    } else {
      handlePrismaError(error, res);
    }
  }
});

export default router;