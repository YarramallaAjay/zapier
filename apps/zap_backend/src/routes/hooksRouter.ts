import express from "express";
// import { PrismaClient } from "@prisma/client";
import { WebhookHandler } from "@/handlers/WebhookHandler";

const router: express.Router = express.Router();



router.post("/catch/:userId/:zapId", WebhookHandler.handleWebhook);

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
