import express, { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router:Router = express.Router();
const prisma = new PrismaClient();

// Get all triggers
router.get("/", async (req, res) => {
  const triggers = await prisma.trigger.findMany({
    include: { available: true, zap: true },
  });
  res.json(triggers);
});

// Add a new trigger
router.post("/", async (req, res) => {
  const { name, description, zapId, metadata, availableTriggerId } = req.body;

  try {
    const trigger = await prisma.trigger.create({
      data: {
        name,
        description,
        zapId,
        metadata,
        availableTriggerId,
      },
    });
    res.status(201).json(trigger);
  } catch (e) {
    res.status(400).json({ error: e });
  }
});

// Update a trigger
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, description, metadata, availableTriggerId } = req.body;

  try {
    const updated = await prisma.trigger.update({
      where: { id },
      data: {
        ...req.body,
      },
    });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

// Delete a trigger
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.trigger.delete({ where: { id } });
    res.json({ message: "Trigger deleted" });
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

export default router;
