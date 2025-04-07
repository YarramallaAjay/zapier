import express, { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/client";

const router: Router = express.Router();
const prisma = new PrismaClient();

// Get all triggers
router.get("/", async (req, res) => {
  try {
    const triggers = await prisma.trigger.findMany({
      include: { available: true, zap: true },
    });
    if (triggers.length === 0) {
       res.status(404).json({ message: "No triggers found" });
       return;
    }
    res.status(200).json(triggers);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Add a new trigger
router.post("/", async (req, res) => {
  const { name, description, zapId, metadata, availableTriggerId } = req.body;

  if (!name || !description || !zapId || !availableTriggerId) {
     res.status(400).json({ error: "Missing required fields" });
     return;
  }

  try {
    const trigger = await prisma.trigger.create({
      data: {
        name,
        description,
        zapId,
        metadata: metadata || {},
        availableTriggerId,
      },
    });
    res.status(201).json(trigger);
  } catch (e) {
    res.status(400).json({ error: "Invalid data or database error" });
  }
});

// Update a trigger
router.put("/:id", async (req, res) => {
  const { id } = req.params;

  if (!id) {
     res.status(400).json({ error: "Trigger ID is required" });
     return;
  }

  try {
    const updated = await prisma.trigger.update({
      where: { id },
      data: { ...req.body },
    });
    res.status(200).json(updated);
  } catch (err) {
    if (err instanceof PrismaClientKnownRequestError&& err.code === "P2025") {
       res.status(404).json({ error: "Trigger not found" });
       return;
    }
    res.status(400).json({ error: "Invalid data or database error" });
  }
});

// Delete a trigger
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  if (!id) {
     res.status(400).json({ error: "Trigger ID is required" });
     return;
  }

  try {
    await prisma.trigger.delete({ where: { id } });
    res.status(200).json({ message: "Trigger deleted" });
  } catch (err) {
    if (err instanceof PrismaClientKnownRequestError&&err.code === "P2025") {
       res.status(404).json({ error: "Trigger not found" });
        return;
    }
    res.status(400).json({ error: "Invalid data or database error" });
  }
});

export default router;
