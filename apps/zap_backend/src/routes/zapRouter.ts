import express, { Router } from "express";
import { ZapSchema } from "@/utils/zodSchema";
import { AuthUser } from "@/middlewares/userAuthMiddleware";
import { ZapHandler } from "@/handlers/zapHandler";
import { Apiresponse } from "@/utils/Response";
import { PrismaClient } from "@repo/db/src";
import { UserDetails } from "@repo/types/src/UserSession";

const router: Router = express.Router();
router.use(express.json());
const prisma = new PrismaClient();

router.get("/", AuthUser, async (req, res) => {
  try {
    if (!req.user) {
      Apiresponse.error(res, "User not authenticated", 401, null);
      return;
    }

    const userZaps = await prisma.zap.findMany({
      where: { userId: (req.user as UserDetails).id },
      include: {
        actions: { include: { available: true } },
        trigger: { include: { available: true } },
      },
    });

    Apiresponse.success(res, userZaps, userZaps.length === 0 ? "No zaps found. Create one!" : "Zaps fetched successfully");
  } catch (error) {
    console.error("Error fetching zaps:", error);
    Apiresponse.error(res, "Error fetching zaps", 500, error);
  }
});

router.post("/newzap", AuthUser, async (req, res) => {
  try {
    if (!req.user) {
      Apiresponse.error(res, "User not authenticated", 401, null);
      return;
    }

    const { name, trigger, actions } = req.body;
    
    if (!name || !trigger || !actions) {
      Apiresponse.error(res, "Missing required fields", 400, { body: req.body });
      return;
    }

    // Transform the data to match the handler's expected format
    const zapData = {
      name,
      triggerId: trigger.id,
      actionIds: actions.map((action: any) => action.id),
      userId: (req.user as UserDetails).id,
      description: req.body.description || "",
      metadata: req.body.metadata || {},
      image: req.body.image || null
    };

    await ZapHandler.createZap({ ...req, body: zapData } as any, res);
  } catch (error) {
    console.error("Error creating zap:", error);
    Apiresponse.error(res, "Error creating zap", 500, error);
  }
});

router.put("/:zapId", AuthUser, async (req, res) => {
  try {
    if (!req.user) {
      Apiresponse.error(res, "User not authenticated", 401, null);
      return;
    }

    const zapId = req.params.zapId;
    if (!zapId) {
      Apiresponse.error(res, "Missing zap ID", 400, null);
      return;
    }

    // Validate the zap belongs to the user
    const existingZap = await prisma.zap.findFirst({
      where: {
        id: zapId,
        userId: (req.user as UserDetails).id
      }
    });

    if (!existingZap) {
      Apiresponse.error(res, "Zap not found or unauthorized", 404, null);
      return;
    }

    try {
      ZapSchema.partial().parse(req.body);
      await ZapHandler.updateZap(req, res);
    } catch (err) {
      Apiresponse.error(res, "Validation error", 400, err);
    }
  } catch (error) {
    console.error("Error updating zap:", error);
    Apiresponse.error(res, "Error updating zap", 500, error);
  }
});

router.delete("/:zapId", AuthUser, async (req, res) => {
  try {
    if (!req.user) {
      Apiresponse.error(res, "User not authenticated", 401, null);
      return;
    }

    const zapId = req.params.zapId;
    if (!zapId) {
      Apiresponse.error(res, "Missing zap ID", 400, null);
      return;
    }

    // Validate the zap belongs to the user
    const existingZap = await prisma.zap.findFirst({
      where: {
        id: zapId,
        userId: (req.user as UserDetails).id
      }
    });

    if (!existingZap) {
      Apiresponse.error(res, "Zap not found or unauthorized", 404, null);
      return;
    }

    await ZapHandler.deleteZap(req, res);
  } catch (error) {
    console.error("Error deleting zap:", error);
    Apiresponse.error(res, "Error deleting zap", 500, error);
  }
});

export default router;
