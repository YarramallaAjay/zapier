import { Request, Response } from "express";
import { Apiresponse } from "@/utils/Response";
import { PrismaClient } from "@repo/db/src";

const prisma=new PrismaClient()
export class ZapHandler {
  static async createZap(req: Request, res: Response) {
    try {
      const { name, triggerId, actionIds, userId, description,metadata,image } = req.body;

      // Validate trigger exists
      const trigger = await prisma.trigger.findUnique({
        where: { id: triggerId },
      });

      if (!trigger) {
        Apiresponse.error(res, "Trigger not found", 404, null);
        return;
      }

      // Validate all actions exist
      const actions = await prisma.action.findMany({
        where: { id: { in: actionIds } },
      });

      if (actions.length !== actionIds.length) {
        Apiresponse.error(res, "Some actions not found", 400, null);
        return;
      }

      // Create the zap
      const result = await prisma.zap.create({
        data: {
          name,
          userId,
          description,
          metadata,
          image,
          actions: {
            connect: actionIds.map((id) => ({ id })),
          },
        },
        include: {
          trigger: true,
          actions: true,
        },
      });

      Apiresponse.success(res, result, "Zap created successfully", 201);
    } catch (error) {
      Apiresponse.error(res, "Failed to create zap", 500, error);
    }
  }

  static async updateZap(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { name, actionIds } = req.body;

      const updatedZap = await prisma.zap.update({
        where: { id },
        data: {
          name,
          actions: {
            set: actionIds.map((id) => ({ id })),
          },
        },
        include: {
          trigger: true,
          actions: true,
        },
      });

      Apiresponse.success(res, updatedZap, "Zap updated successfully");
    } catch (error) {
      Apiresponse.error(res, "Failed to update zap", 500, error);
    }
  }

  static async deleteZap(req: Request, res: Response) {
    try {
      const { id } = req.params;

      await prisma.zap.delete({
        where: { id },
      });

      Apiresponse.success(res, {}, "Zap deleted successfully");
    } catch (error) {
      Apiresponse.error(res, "Failed to delete zap", 500, error);
    }
  }
}
