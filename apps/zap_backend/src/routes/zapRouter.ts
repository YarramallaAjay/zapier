import express, { Router, Response, Request } from 'express';
import { PrismaClient } from '@prisma/client';
import "dotenv/config";
import { AuthUser } from '../middlewares/userAuthMiddleware';
import { UserDetails } from '@repo/types/dist/UserSession';

const router: Router = express.Router();
const client = new PrismaClient();

// Get all zaps for authenticated user
router.get("/zaps", AuthUser, async (req, res) => {
    console.log(req)
    try 
    {
        const user = (req).user;
        if (!user) { 
            res.status(401).json({ message: "User not authenticated" });
            return;
        }

        const userZaps = await client.zap.findMany({ where: { userId:( user.id) as unknown as string },
            include:{
                actions:{
                    include:{
                    available:true
                    }   
                },
                trigger:{
                    include:{
                        available:true 
                    }
                }
            } 
        });

        if (userZaps.length === 0) {
             res.status(203).json({ message: "No zaps found. Create one!" });
             return;
        }

    res.status(200).json({ zaps: userZaps });
    } catch (error) {
        res.status(500).json({ message: "Request failed", error: error });
    }
});

// Get a zap by ID
router.get("/zap/:zapId", AuthUser, async (req: Request, res: Response) => {
    try {
        const zapItem = await client.zap.findUnique({ where: { id: req.params.zapId } });
        if (!zapItem) { res.status(404).json({ message: "Zap not found" });
        return;
    }

        res.status(200).json({ zap: zapItem });
    } catch (error) {
        res.status(500).json({ message: "Request failed", error: error });
    }
});

// Create a new zap
router.post("/newzap", AuthUser, async (req: Request, res: Response) => {
    try {
        const user = (req).user;
        if (!user) {
            res.status(401).json({ message: "User not authenticated" });
            return;
        }

        const { trigId, triggername, description, actions } = req.body;

        console.log(req.body)

        if ( !trigId || !triggername|| !actions || actions.length === 0) {
             res.status(400).json({ message: "Zap details are incomplete", data: req.body });
             return;

        }

        // // Validate trigger before transaction
        const Validtrigger = await client.availableTriggers.findFirst({
            where: { name: triggername },
            select: { id: true }
        });

        if (!Validtrigger) {
             res.status(404).json({ message: "Trigger not found" });
            return;

        }

        // Fetch all available actions in a single query
        const validActions = await client.availableActions.findMany({
            where: { name: { in: actions, mode: 'insensitive' } },
            select: { id: true, name: true, description: true }
        });

        if (validActions.length !== actions.length) {
             res.status(400).json({ message: "Some actions not found" });
             return;

        }

        // Execute transaction
        const newZap = await client.$transaction(async (tx) => {
            // Create the Zap with its trigger
            const zapper = await tx.zap.create({
                data: {
                    name: triggername,
                    description,
                    userId: (user.id) as unknown as string,
                    
                      // Set triggerId directly
                    actions: {
                        create: actions.map((action:any, index: any) => ({
                            actionId: action.actionId,
                            sortingOrder: action.actionIndex,
                            name: action.actionName,
                            description: action.actionDescription,
                            metadata: action.actionMetadata,
                        }))
                    }
                }
            });

            // Create the associated trigger
            const trigger=await tx.trigger.create({
                data: {
                    name: triggername,
                    zapId: zapper.id,
                    description: description || triggername,
                    availableTriggerId:Validtrigger.id,
                    metadata:{}

                }
            });



            return await tx.zap.update({
                where:{
                    id:zapper.id
                },
                data:{
                    id: trigger.id,
                    metadata:zapper
                }
            });
        });

        res.status(201).json({ message: "Zap created successfully", zap: newZap });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Request failed" });
    }
});


// Trigger a zap
router.post("/zap/:zapId", AuthUser, async (req: Request, res: Response) => {
    try {
        const userDetails = await req.user
        const { zapId } = req.params;
        if(!UserDetails){
            console.log("user Details are null")
            res.json("user Details not found").status(400)
            return;
        }
        const zap = await client.zap.findFirst({
            where: { id: zapId, userId: (userDetails?.id) as unknown as string }
        });

        if (!zap) {
             res.status(404).json({ message: "Zap not found" });
             return;

        }

        res.status(200).json({ message: `Zap ${zapId} triggered successfully`, zap });
    } catch (error) {
        res.status(500).json({ message: "Request failed", error: error });
    }
});

// Update a zap
router.put("/zap/:zapId", AuthUser, async (req: Request, res: Response) => {
    try {
        const { zapId } = req.params;
        const { zap } = req.body;

        if (!zap) {
            res.status(400).json({ message: "Provide at least one field to update" });
            return
        } 

        const updatedZap = await client.zap.update({ where: { id: zapId }, data: zap });

        res.status(200).json({ message: "Zap updated successfully", zap: updatedZap });
    } catch (error) {
        res.status(500).json({ message: "Request failed", error: error });
    }
});

// Delete a zap
router.delete("/zap/:zapId", AuthUser, async (req: Request, res: Response) => {
    try {
        await client.zap.delete({ where: { id: req.params.zapId } });
        res.status(200).json({ message: "Zap deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Request failed", error: error });
    }
});

// Get zap catalogue
router.get("/zapcatalogue", AuthUser, async (req: Request, res: Response) => {
    console.log("in zap catalogue")
    try {
        const zapCatalogue = await client.$transaction(async (tx) => ({
            triggers: await tx.availableTriggers.findMany(),
            actions: await tx.availableActions.findMany()
        }));

        console.log(zapCatalogue)

        res.status(200).json({ message: "All triggers & actions", data: zapCatalogue });
    } catch (error) {
        res.status(500).json({ message: "Request failed", error: error });
    }
});

export default router;
