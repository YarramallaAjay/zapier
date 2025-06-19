import { Request, Response } from "express";
import { Apiresponse } from "@/utils/Response";
import { PrismaClient } from "@repo/db/src";

const prisma = new PrismaClient();

export class ZapHandler {
  static async createZap(req: Request, res: Response) {
    try {
      const { name, triggerId, actionIds, userId, description, metadata, image } = req.body;

      // Validate trigger exists
      const trigger = await prisma.trigger.findUnique({
        where: { id: triggerId },
        include: { available: true }
      });

      if (!trigger) {
        Apiresponse.error(res, "Trigger not found", 404, null);
        return;
      }

      // Validate all actions exist
      const actions = await prisma.action.findMany({
        where: { id: { in: actionIds } },
        include: { available: true }
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
          trigger: {
            connect: { id: triggerId }
          },
          actions: {
            connect: actionIds.map((id:string) => ({ id }))
          }
        },
        include: {
          trigger: { include: { available: true } },
          actions: { include: { available: true } }
        }
      });

      Apiresponse.success(res, result, "Zap created successfully", 201);
    } catch (error) {
      console.error("Failed to create zap:", error);
      Apiresponse.error(res, "Failed to create zap", 500, error);
    }
  }

  static async updateZap(req: Request, res: Response) {
    try {
      const { zapId } = req.params;
      const { name, triggerId, actionIds, description, metadata, image } = req.body;

      // Validate trigger if provided
      if (triggerId) {
        const trigger = await prisma.trigger.findUnique({
          where: { id: triggerId }
        });

        if (!trigger) {
          Apiresponse.error(res, "Trigger not found", 404, null);
          return;
        }
      }

      // Validate actions if provided
      if (actionIds) {
        const actions = await prisma.action.findMany({
          where: { id: { in: actionIds } }
        });

        if (actions.length !== actionIds.length) {
          Apiresponse.error(res, "Some actions not found", 400, null);
          return;
        }
      }

      // Update the zap
      const updatedZap = await prisma.zap.update({
        where: { id: zapId },
        data: {
          name,
          description,
          metadata,
          image,
          ...(triggerId && {
            trigger: {
              connect: { id: triggerId }
            }
          }),
          ...(actionIds && {
            actions: {
              set: actionIds.map((id:string) => ({ id }))
            }
          })
        },
        include: {
          trigger: { include: { available: true } },
          actions: { include: { available: true } }
        }
      });

      Apiresponse.success(res, updatedZap, "Zap updated successfully");
    } catch (error) {
      console.error("Failed to update zap:", error);
      Apiresponse.error(res, "Failed to update zap", 500, error);
    }
  }

  static async deleteZap(req: Request, res: Response) {
    try {
      const { zapId } = req.params;

      // Delete the zap
      await prisma.zap.delete({
        where: { id: zapId }
      });

      Apiresponse.success(res, null, "Zap deleted successfully");
    } catch (error) {
      console.error("Failed to delete zap:", error);
      Apiresponse.error(res, "Failed to delete zap", 500, error);
    }
  }
}
