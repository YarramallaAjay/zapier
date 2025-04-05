import express, { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router:Router = express.Router();
const prisma = new PrismaClient();

// Get all actions
router.get("/", async (req, res) => {
  const actions = await prisma.action.findMany({
    include: { available: true, zap: true },
    orderBy: { sortingOrder: "asc" },
  });
  res.json(actions);
});

// Add a new action
router.post("/", async (req, res) => {
  const { name, description, zapId, metadata, actionType, sortingOrder } = req.body;

  try {
    const action = await prisma.action.create({
      data: {
        name,
        description,
        zapId,
        metadata,
        actionType,
        sortingOrder: sortingOrder || 0,
      },
    });
    res.status(201).json(action);
  } catch (err) {
    res.status(400).json({ error: err});
  }
});

// Update an action
router.put("/:id", async (req, res) => {
  const { id } = req.params;
//   const { name, description, metadata, actionType, sortingOrder } = req.body;

  try {
    const updated = await prisma.action.update({
      where: { id },
      data: {
        ...req.body
      },
    });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err});
  }
});

// Delete an action
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.action.delete({ where: { id } });
    res.json({ message: "Action deleted" });
  } catch (err) {
    res.status(400).json({ error: err});
  }
});

export default router;
