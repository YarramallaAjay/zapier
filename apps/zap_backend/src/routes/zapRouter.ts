import express, { Router } from "express";
import { ZapSchema } from "@/utils/zodSchema";
import { AuthUser } from "@/middlewares/userAuthMiddleware";
import { ZapHandler } from "@/handlers/zapHandler";
import { Apiresponse } from "@/utils/Response";
import { PrismaClient } from "@repo/db/src";
import { UserDetails } from "@repo/types/src/UserSession";

const router: Router = express.Router();
router.use(express.json());
const prisma=new PrismaClient();


router.get("/", AuthUser, async (req, res) => {
  console.log("came...")
  try {
    if (!req.user) {
      Apiresponse.error(res, "User not authenticated", 401, null);
      return;
    }

    const userZaps = await prisma.zap.findMany({
      where: { userId: (req.user as UserDetails).id},
      include: {
        actions: { include: { available: true } },
        trigger: { include: { available: true } },
      },
    });
    console.log("after DB call: "+userZaps)

    if (userZaps.length===0) {
      Apiresponse.success(res, userZaps, "No zaps found. Create one!");
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
