import express, { Router } from "express";
import { ZapSchema } from "src/utils/zodSchema.js";
import { AuthUser } from "src/middlewares/userAuthMiddleware.js";
import { ZapHandler } from "src/handlers/zapHandler.js";
import { Apiresponse } from "src/utils/Response.js";
import { PrismaClient } from "@prisma/client";

const router: Router = express.Router();
router.use(express.json());
const prisma=new PrismaClient();

router.get("/", AuthUser, async (req, res) => {
  try {
    if (!req.user) {
      Apiresponse.error(res, "User not authenticated", 401, null);
      return;
    }

    const userZaps = await prisma.zap.findMany({
      where: { userId: req.user.id },
      include: {
        actions: { include: { available: true } },
        trigger: { include: { available: true } },
      },
    });

    if (!userZaps.length) {
      Apiresponse.success(res, [], "No zaps found. Create one!");
      return;
    }

    Apiresponse.success(res, userZaps, "Zaps fetched successfully");
  } catch (error) {
    Apiresponse.error(res, "Error fetching zaps", 500, error);
  }
});

router.post("/newzap", AuthUser, async (req, res) => {
  const user = req.user;
  if (!user) { 
    Apiresponse.error(res, "User not authenticated", 401, null);
  }
  else{
    const { name, trigger, actions } = req.body;
    if ( !name ||!trigger || !actions)
       Apiresponse.error(res, "Missing required fields", 400, { body: req.body });
  
     ZapHandler.createZap(req, res);

  }
});

router.put("/:zapId", AuthUser, async (req, res) => {
  const zapId = req.params.zapId;
  if (!zapId)  Apiresponse.error(res, "Missing zap ID",400,null);
  else{
    try {
      ZapSchema.partial().parse(req.body);
       ZapHandler.updateZap( req, res);
    } catch (err) {
       Apiresponse.error(res, "Validation error",400, err);
    }

  }
});

router.delete("/:zapId", AuthUser, async (req, res) => {
  const zapId = req.params.zapId;
  if (!zapId)  Apiresponse.error(res, "Missing zap ID",400,null);
  else{
    ZapHandler.deleteZap(req, res);
  }
});

export default router;
