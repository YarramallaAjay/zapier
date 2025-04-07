import express, { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { Auth } from "../middlewares/Auth";

const router: Router = express.Router();
const prisma = new PrismaClient();

router.use(Auth);

// Get all triggers
router.get("/", async (req, res) => {
  try {
    const triggers = await prisma.availableTriggers.findMany();
    if (triggers.length === 0) {
      res.status(404).json({ message: "No triggers found", data: {} });
      return;
    }
    res.status(200).json({ message: "Triggers fetched successfully", data: triggers });
  } catch (err) {
    console.error("Error fetching triggers:", err);
    res.status(500).json({ error: "Internal server error", data: {} });
  }
});

// Get triggers by appId
router.get("/:appId", async (req, res) => {
  try {
    const appId = req.params.appId;

    if (typeof appId !== "string") {
      res.status(400).json({ message: "Invalid appId parameter", data: {} });
      return;
    }

    const app = await prisma.app.findFirst({
      where: { id: appId },
      include: { triggers: true },
    });

    if (!app || app.triggers.length === 0) {
      res.status(404).json({
        message: "No triggers created by the team for this application",
        data: {},
      });
      return;
    }

    res.status(200).json({ message: "Triggers fetched successfully", data: app.triggers });
  } catch (err) {
    console.error("Error fetching triggers:", err);
    res.status(500).json({ error: "Internal server error", data: {} });
  }
});

// Add a new trigger
router.post("/", async (req, res) => {
  const { name, description, appId, metadata, configMetadata, type } = req.body;

  if (!name || !description || !appId || !configMetadata || !metadata || !type) {
    res.status(400).json({ message: "Missing required fields", data: {} });
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

    res.status(201).json({ message: "Trigger created successfully", data: trigger });
  } catch (err) {
    console.error("Error creating trigger:", err);
    res.status(400).json({ error: "Invalid data or database error", data: {} });
  }
});

// Update a trigger
router.put("/:appId/:id", async (req, res) => {
  const { id, appId } = req.params;

  if (!id || !appId) {
    res.status(400).json({ message: "Trigger ID and appId are required", data: {} });
    return;
  }

  try {
    const updated = await prisma.availableTriggers.update({
      where: { id, appId },
      data: { ...req.body },
    });

    res.status(200).json({ message: "Trigger updated successfully", data: updated });
  } catch (err) {
    if (err instanceof PrismaClientKnownRequestError && err.code === "P2025") {
      res.status(404).json({ message: "Trigger not found", data: {} });
      return;
    }
    console.error("Error updating trigger:", err);
    res.status(400).json({ error: "Invalid data or database error", data: {} });
  }
});

// Delete a trigger
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  if (!id) {
    res.status(400).json({ message: "Trigger ID is required", data: {} });
    return;
  }

  try {
    await prisma.availableTriggers.delete({ where: { id } });
    res.status(200).json({ message: "Trigger deleted successfully", data: {} });
  } catch (err) {
    if (err instanceof PrismaClientKnownRequestError && err.code === "P2025") {
      res.status(404).json({ message: "Trigger not found", data: {} });
      return;
    }
    console.error("Error deleting trigger:", err);
    res.status(400).json({ error: "Invalid data or database error", data: {} });
  }
});

export default router;
