import express, { Router } from "express";
import {  PrismaClient } from "@repo/db/src";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/client";
import { Auth } from "@integrator/middlewares/Auth";
// import { ActionBase } from "@repo/types/src/Actions";

const router: Router = express.Router();
const prisma = new PrismaClient();
router.use(Auth)
// Get all available actions
router.get("/", async (req, res) => {
  try {
    console.log(req)

    const actions = await prisma.availableActions.findMany({

    });
    if (actions.length === 0) {
      res.status(404).json({ message: "No actions found", data: {} });
      return;
    }
    res.status(200).json({ message: "Actions fetched successfully", data: actions });
  } catch (err) {
    console.error("Error fetching actions:", err);
    res.status(500).json({ error: "Internal server error", data: {} });
  }
});

// Get available actions by appId
router.get("/:appId", async (req, res) => {
  try {
    const { appId } = req.params;

    if (!appId) {
      res.status(400).json({ message: "Invalid appId parameter", data: {} });
      return;
    }

    const app = await prisma.app.findFirst({
      where: { id: appId },
      include: { actions: true },
    });

    if (!app || app.actions.length === 0) {
      res.status(404).json({ message: "No actions found for this application", data: {} });
      return;
    }

    res.status(200).json({ message: "Actions fetched successfully", data: app.actions });
  } catch (err) {
    console.error("Error fetching actions:", err);
    res.status(500).json({ error: "Internal server error", data: {} });
  }
});

// Add a new available action
router.post("/:appId", async (req, res) => {
  const { name, description, metadata,configMetadata,type } =await  req.body;
  const appId= await req.params.appId
  if (!name || !description || !appId  || !configMetadata || !type) {
    res.status(400).json({ message: "Missing required fields", data: {} });
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
    res.status(201).json({ message: "Action created successfully", data: action });
  } catch (err) {
    console.error("Error creating action:", err);
    res.status(400).json({ error: "Invalid data or database error", data: {} });
  }
});

// Update an available action
router.put("/:appId/:id", async (req, res) => {
  const { id, appId } = req.params;

  if (!id || !appId) {
    res.status(400).json({ message: "Action ID and appId are required", data: {} });
    return;
  }

  try {
    const updated = await prisma.availableActions.update({
      where: { id, appId },
      data: { ...req.body },
    });
    res.status(200).json({ message: "Action updated successfully", data: updated });
  } catch (err) {
    if (err instanceof PrismaClientKnownRequestError && err.code === "P2025") {
      res.status(404).json({ message: "Action not found", data: {} });
      return;
    }
    console.error("Error updating action:", err);
    res.status(400).json({ error: "Invalid data or database error", data: {} });
  }
});

// Delete an available action
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  if (!id) {
    res.status(400).json({ message: "Action ID is required", data: {} });
    return;
  }

  try {
    await prisma.availableActions.delete({ where: { id } });
    res.status(200).json({ message: "Action deleted successfully", data: {} });
  } catch (err) {
    if (err instanceof PrismaClientKnownRequestError && err.code === "P2025") {
      res.status(404).json({ message: "Action not found", data: {} });
      return;
    }
    console.error("Error deleting action:", err);
    res.status(400).json({ error: "Invalid data or database error", data: {} });
  }
});

export default router;