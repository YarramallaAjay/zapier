import { PrismaClient, Zap, AvailableTriggers, AvailableActions } from "@prisma/client";
import { response } from "../utils/Response";

const prisma = new PrismaClient();

export const ZapHandler = {
  async createZap(userId: string, inputData: any, res: any) {
    try {
        const inputtrigger=await inputData.trigger
        const inputactions=await inputData.actions
      const trigger = await prisma.availableTriggers.findFirst({ where: { name: inputtrigger.name }});
      if (!trigger) return response(res, 404, "Trigger not found");

      const validActions = await prisma.availableActions.findMany({
        where: { id: { in: inputactions } },
      });

      if (validActions.length !== inputactions.length) {
        return response(res, 400, "Some actions not found");
      }

      const result = await prisma.$transaction(async (tx) => {
        const zap = await tx.zap.create({
          data: {
            name: inputData.name || trigger.name,
            description: trigger.description || " ",
            userId,
            actions: {
              create: validActions.map((action, index = 0) => ({
                sortingOrder: index++,
                name: action.name,
                description: action.description,
                metadata: action.metadata || { input: "testInputs" },
                available: { connect: { id: action.id } },
              })),
            },
          },
        });
        
        //TODO: Need to add this if polling is also added.
        // if(trigger.type=="WebHook"){
        //     const webhookUrl = `/hooks/catch/${userId}/${zap.id}`;
        // }
                    const webhookUrl = `/hooks/catch/${userId}/${zap.id}`;


        const createdTrigger = await tx.trigger.create({
          data: {
            name: inputtrigger.name ||trigger.name,
            zapId: zap.id,
            description: inputtrigger.description || trigger.description || " ",
            availableTriggerId: trigger.id,
            metadata: {
                webhookurl:webhookUrl
            },
          },
        });

        return { ...zap, trigger: createdTrigger, webhookUrl };
      });

      return response(res, 201, "Zap created successfully", result);
    } catch (error) {
      return response(res, 500, "Failed to create zap", error);
    }
  },

  async updateZap(zapId: string, body: any, res: any) {
    try {
      const updatedZap = await prisma.zap.update({
        where: { id: zapId },
        data: {
          name: body.name,
          description: body.description,
          image: body.image,
          metadata: body.metadata,
        },
      });

      return response(res, 200, "Zap updated successfully", updatedZap);
    } catch (error) {
      return response(res, 500, "Failed to update zap", error);
    }
  },

  async deleteZap(zapId: string, res: any) {
    try {
      await prisma.zap.delete({ where: { id: zapId } });
      return response(res, 200, "Zap deleted successfully");
    } catch (error) {
      return response(res, 500, "Failed to delete zap", error);
    }
  },
};
