import express, { Router } from "express";
import {  PrismaClient } from "@repo/db/src";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/client";
import { AuthUser } from "@/middlewares/userAuthMiddleware";
import { Apiresponse } from "@/utils/Response";
// import { ActionBase } from "@repo/types/src/Actions";

const router: Router = express.Router();
const prisma = new PrismaClient();
router.use(AuthUser)
// Get all available actions
router.get("/", async (req, res) => {
  try {
    console.log(req);

    const actions = await prisma.availableActions.findMany({});

    if (actions.length === 0) {
      Apiresponse.error(res, "No actions found", 404, {});
      return;
    }
    Apiresponse.success(res, { data: actions }, "Actions fetched successfully", 200);
  } catch (err) {
    console.error("Error fetching actions:", err);
    Apiresponse.error(res, "Internal server error", 500, {});
  }
});

// Get available actions by appId
router.get("/:appId", async (req, res) => {
  try {
    const { appId } = req.params;

    if (!appId) {
      Apiresponse.error(res, "Invalid appId parameter", 400, {});
      return;
    }

    const app = await prisma.app.findFirst({
      where: { id: appId },
      include: { actions: true },
    });

    if (!app || app.actions.length === 0) {
      Apiresponse.error(res, "No actions found for this application", 404, {});
      return;
    }

    Apiresponse.success(res, { data: app.actions }, "Actions fetched successfully", 200);
  } catch (err) {
    console.error("Error fetching actions:", err);
    Apiresponse.error(res, "Internal server error", 500, {});
  }
});

// Add a new available action
router.post("/:appId", async (req, res) => {
  const { name, description, metadata, configMetadata, type } = await req.body;
  const appId = await req.params.appId;
  if (!name || !description || !appId || !configMetadata || !type) {
    Apiresponse.error(res, "Missing required fields", 400, {});
    return;
  }

  try {
    const action = await prisma.availableActions.create({
      data: {
        name,
        description,
        appId,
        metadata: metadata || {},
        configMetadata,
        type
      },
    });
    Apiresponse.success(res, { data: action }, "Action created successfully", 201);
  } catch (err) {
    console.error("Error creating action:", err);
    Apiresponse.error(res, "Invalid data or database error", 400, {});
  }
});

// Update an available action
router.put("/:appId/:id", async (req, res) => {
  const { id, appId } = req.params;

  if (!id || !appId) {
    Apiresponse.error(res, "Action ID and appId are required", 400, {});
    return;
  }

  try {
    const updated = await prisma.availableActions.update({
      where: { id, appId },
      data: { ...req.body },
    });
    Apiresponse.success(res, { data: updated }, "Action updated successfully", 200);
  } catch (err) {
    if (err instanceof PrismaClientKnownRequestError && err.code === "P2025") {
      Apiresponse.error(res, "Action not found", 404, {});
      return;
    }
    console.error("Error updating action:", err);
    Apiresponse.error(res, "Invalid data or database error", 400, {});
  }
});

// Delete an available action
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  if (!id) {
    Apiresponse.error(res, "Action ID is required", 400, {});
    return;
  }

  try {
    await prisma.availableActions.delete({ where: { id } });
    Apiresponse.success(res, {}, "Action deleted successfully", 200);
  } catch (err) {
    if (err instanceof PrismaClientKnownRequestError && err.code === "P2025") {
      Apiresponse.error(res, "Action not found", 404, {});
      return;
    }
    console.error("Error deleting action:", err);
    Apiresponse.error(res, "Invalid data or database error", 400, {});
  }
});

export default router;