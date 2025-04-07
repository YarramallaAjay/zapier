import express, { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { PrismaClientKnownRequestError, PrismaClientRustPanicError } from "@prisma/client/runtime/library";

const router: Router = express.Router();
const prisma = new PrismaClient();

// Get all actions
router.get("/", async (req, res) => {
  try {
    const actions = await prisma.action.findMany({
      include: { available: true, zap: true },
      orderBy: { sortingOrder: "asc" },
    });
    if (actions.length === 0) {
       res.status(404).json({ message: "No actions found" });
       return ;
    }
    res.status(200).json(actions);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Add a new action
router.post("/", async (req, res) => {
  const { name, description, zapId, metadata, actionType, sortingOrder } = req.body;

  if (!name || !description || !zapId || !actionType) {
     res.status(400).json({ error: "Missing required fields" });
     return;
  }

  try {
    const action = await prisma.action.create({
      data: {
        name,
        description,
        zapId,
        metadata: metadata || {},
        actionType,
        sortingOrder: sortingOrder || 0,
      },
    });
    res.status(201).json(action);
  } catch (err) {
    res.status(400).json({ error: "Invalid data or database error" });
  }
});

// Update an action
router.put("/:id", async (req, res) => {
  const { id } = req.params;

  if (!id) {
     res.status(400).json({ error: "Action ID is required" });
     return;
  }

  try {
    const updated = await prisma.action.update({
      where: { id },
      data: { ...req.body },
    });
    res.status(200).json(updated);
  } catch (e) {
    if (e instanceof PrismaClientKnownRequestError && e.code === "P2025") {
       res.status(404).json({ error: "Action not found" });
       return;
    }
    res.status(400).json({ error: "Invalid data or database error" });
  }
});

// Delete an action
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  if (!id) {
     res.status(400).json({ error: "Action ID is required" });
     return;
  }

  try {
    await prisma.action.delete({ where: { id } });
    res.status(200).json({ message: "Action deleted" });
  } catch (err ) {
    if (err instanceof PrismaClientKnownRequestError && err.code === "P2025") {
       res.status(404).json({ error: "Action not found" });
       return
    }
    res.status(400).json({ error: "Invalid data or database error" });
  }
});

export default router;
