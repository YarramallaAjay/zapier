import express from "express";
import { Apiresponse } from "@/utils/Response";
import { PrismaClient } from "@repo/db/src";

const router: express.Router = express.Router();


const prisma=new PrismaClient()

router.post("/catch/:userId/:zapId", async (req, res)=> {
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
);

export default router;


// async (req: Request, res: Response) => {
//     console.log("WebHook Hit")
//     console.log(req.body)
//     const { userId, zapId } = await req.params;
//     const { zap } = req.body;

//     if(!userId||!zapId){
//         console.log("userId Or zapId not found")
//         res.json({
//             message:"zapId or userId not found in URL"
//         })
//         return
//     }

//     try {
//         await client.$transaction(async (tx) => {
//             const runs = await tx.zapRun.create({
//                 data: {
//                     zapId:zapId,
//                     metadata:zap
//                 },
//             });

//             await tx.zapRunOutBox.create({
//                 data: {
//                     zaprunId: runs.id,
//                 },
//             });

//             console.log("Saved to DB");
//         });

//         res.json({
//             message: "Hook caught successfully",
//         });
//     } catch (error) {
//         console.error("Error processing webhook:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// })
