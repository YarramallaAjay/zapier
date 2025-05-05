import express, { Router } from "express";
import {  PrismaClient } from "@repo/db/src";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { Auth } from "../middlewares/Auth";
import { Apiresponse } from "@/utils/Response";
// import { TriggerBase } from "@repo/types/src/Trigger";

const router: Router = express.Router();
const prisma = new PrismaClient();

router.use(Auth);

// Get all triggers
router.get("/", async (req, res) => {
  try {
    console.log(req);
    const triggers = await prisma.availableTriggers.findMany();
    if (triggers.length === 0) {
      Apiresponse.error(res, "No triggers found", 404, []);
      return;
    }
    Apiresponse.success(res, { triggers }, "Triggers fetched successfully", 200);
  } catch (err) {
    console.error("Error fetching triggers:", err);
    Apiresponse.error(res, "Internal server error", 500, []);
  }
});

// Get triggers by appId
router.get("/:appId", async (req, res) => {
  try {
    const appId = req.params.appId;

    if (typeof appId !== "string") {
      Apiresponse.error(res, "Invalid appId parameter", 400, []);
      return;
    }

    const app = await prisma.app.findFirst({
      where: { id: appId },
      include: { triggers: true },
    });

    if (!app || app.triggers.length === 0) {
      Apiresponse.error(res, "No triggers created by the team for this application", 404, []);
      return;
    }

    Apiresponse.success(res, { data: app.triggers }, "Triggers fetched successfully", 200);
  } catch (err) {
    console.error("Error fetching triggers:", err);
    Apiresponse.error(res, "Internal server error", 500, []);
  }
});

// Add a new trigger
router.post("/", async (req, res) => {
  const { name, description, appId, metadata, configMetadata, type } = req.body;

  if (!name || !description || !appId || !configMetadata || !metadata || !type) {
    Apiresponse.error(res, "Missing required fields", 400, {});
    return;
  }

  try {
    const trigger = await prisma.availableTriggers.create({
      data: {
        name,
        description,
        metadata,
        configMetadata,
        type,
        appId,
      },
    });

    Apiresponse.success(res, { data: trigger }, "Trigger created successfully", 201);
  } catch (err) {
    console.error("Error creating trigger:", err);
    Apiresponse.error(res, "Invalid data or database error", 400, {});
  }
});

// Update a trigger
router.put("/:appId/:id", async (req, res) => {
  const { id, appId } = req.params;

  if (!id || !appId) {
    Apiresponse.error(res, "Trigger ID and appId are required", 400, {});
    return;
  }

  try {
    const updated = await prisma.availableTriggers.update({
      where: { id, appId },
      data: { ...req.body },
    });

    Apiresponse.success(res, { data: updated }, "Trigger updated successfully", 200);
  } catch (err) {
    if (err instanceof PrismaClientKnownRequestError && err.code === "P2025") {
      Apiresponse.error(res, "Trigger not found", 404, {});
      return;
    }
    console.error("Error updating trigger:", err);
    Apiresponse.error(res, "Invalid data or database error", 400, {});
  }
});

// Delete a trigger
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  if (!id) {
    Apiresponse.error(res, "Trigger ID is required", 400, {});
    return;
  }

  try {
    await prisma.availableTriggers.delete({ where: { id } });
    Apiresponse.success(res, {}, "Trigger deleted successfully", 200);
  } catch (err) {
    if (err instanceof PrismaClientKnownRequestError && err.code === "P2025") {
      Apiresponse.error(res, "Trigger not found", 404, {});
      return;
    }
    console.error("Error deleting trigger:", err);
    Apiresponse.error(res, "Invalid data or database error", 400, {});
  }
});

export default router;
