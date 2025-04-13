import express, { Router } from "express";
import { ZapSchema } from "../utils/zodSchema";
import { AuthUser } from "../middlewares/userAuthMiddleware";
import { ZapHandler } from "../handlers/zapHandler";
import { response } from "../utils/Response";
import { PrismaClient } from "@prisma/client/extension";

const router: Router = express.Router();
router.use(express.json());
const prisma=new PrismaClient();

router.get("/", AuthUser, async (req, res) => {
  const user = req.user;
  if (!user)  {
    response(res, 401, "User not authenticated");
  }
  else{
    try {
      const userZaps = await prisma.zap.findMany({
        where: { userId: user.id },
        include: {
          actions: { include: { available: true } },
          trigger: { include: { available: true } },
        },
      });
  
      if (!userZaps.length)  response(res, 203, "No zaps found. Create one!");
      {
        response(res, 200, "Zaps fetched successfully", userZaps);
      }
    } catch (err) {
       response(res, 500, "Error fetching zaps", err);
    }

  }
});

router.post("/newzap", AuthUser, async (req, res) => {
  const user = req.user;
  if (!user) { 
    response(res, 401, "User not authenticated");
  }
  else{
    const { trigId, triggername, description, actions } = req.body;
    if (!trigId || !triggername || !description || !actions)
       response(res, 400, "Missing required fields", { body: req.body });
  
     ZapHandler.createZap(String(user.id), req.body, res);

  }
});

router.put("/:zapId", AuthUser, async (req, res) => {
  const zapId = req.params.zapId;
  if (!zapId)  response(res, 400, "Missing zap ID");
  else{
    try {
      ZapSchema.partial().parse(req.body);
       ZapHandler.updateZap(zapId, req.body, res);
    } catch (err) {
       response(res, 400, "Validation error", err);
    }

  }
});

router.delete("/:zapId", AuthUser, async (req, res) => {
  const zapId = req.params.zapId;
  if (!zapId)  response(res, 400, "Missing zap ID");
  else{
    ZapHandler.deleteZap(zapId, res);
  }
});

export default router;
