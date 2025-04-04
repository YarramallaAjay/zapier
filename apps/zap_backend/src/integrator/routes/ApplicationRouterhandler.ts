import express, { Request, Response, Router } from "express";

import cors from "cors";
import cookieParser from "cookie-parser";
import { PrismaClient } from "@prisma/client";
import { Auth } from "../middlewares/Auth";
import { UserDetails } from "@repo/types/dist/UserSession";
import { TeamBase } from "@repo/types/src/Team";

const prisma = new PrismaClient();
const router: Router = express.Router();

// Middlewares
router.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    exposedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
router.use(express.json());
router.use(cookieParser());

// 1. Create Team
router.post("/team", Auth,async (req, res) => {
  try {
    const user = req.user; // Use cached user details
    if (!user) {
       res.status(401).json({ message: "User not authenticated" });
       return;
    }

    // Check if user already has a team
    if (user.team && (user.team as any).id) {
       res.status(400).json({ message: "User can only create one team.",
        team: user.team
        });
       return
    }

    const { name, metadata } = req.body;

    const newTeam = await prisma.team.create({
      data: {
        name,
        metadata: metadata || {},
        createdById: user.id,
        members: { connect: { id: user.id } }, // Add user as team member
      },
    });

    // Update user session to include the new team
    await UserDetails.updateUserDetails(user.id);

    res.status(201).json({ message: "Team created successfully.", team: newTeam });
  } catch (error) {
    console.error("Error creating team:", error);
    res.status(500).json({ error: "Failed to create team." });
  }
});

// 2. Update Team Details
router.put("/team", Auth,async (req, res) => {
  try {
    const user = await req.user; // Use cached user details
    if (!user) {
       res.status(401).json({ message: "User not authenticated" });
       return
    }

    const { name, metadata } = req.body;

    if(!user.team || !(user.team as any).id) {
       res.status(400).json({ error: "User not part of a team." });
       return;
    }

    const updatedTeam = await prisma.team.update({
      where: { id: (user.team as TeamBase).id },
      data: { name, metadata: metadata || {} },
    });

    // Update user session to reflect team changes
    await UserDetails.updateUserDetails(user.id);

    res.json({ message: "Team updated successfully.", team: updatedTeam });
    return;
  } catch (error) {
    console.error("Error updating team:", error);
    res.status(500).json({ error: "Failed to update team." });
    return;
  }
});

// 3. Delete Team
router.delete("/team", async (req, res) => {
  try {
    const user = req.user; // Use cached user details
    if (!user) {
       res.status(401).json({ message: "User not authenticated" });
       return;
    }

    await prisma.team.delete({
      where: { createdById: user.id },
    });

    // Clear user session since team is deleted
    await UserDetails.updateUserDetails(user.id);

    res.json({ message: "Team deleted successfully." });
  } catch (error) {
    console.error("Error deleting team:", error);
    res.status(500).json({ error: "Failed to delete team." });
  }
});

// 4. Get Apps for the User's Team
router.get("/apps", async (req, res) => {
  try {
    const user = req.user; // Use cached user details
    if (!user) {
       res.status(401).json({ message: "User not authenticated" });
       return;

    }

    if (!user.team || !(user.team as any).id) {
       res.status(400).json({ error: "User not part of a team." });
       return;
    }

    const apps = await prisma.app.findMany({
      where: { teamId: (user.team as any).id },
      include: {
        actions: true,
        triggers: true,
        authMethods: { include: { availableAuth: true } },
      },
    });

    res.json({ apps });
  } catch (error) {
    console.error("Error fetching apps:", error);
    res.status(500).json({ error: "Failed to fetch apps." });
  }
});

// 5. Create New App
router.post("/newapp", async (req, res) => {
  try {
    const user = req.user; // Use cached user details
    if (!user) {
       res.status(401).json({ message: "User not authenticated" });
       return;
    }

    const { name, description } = req.body;

    if (!user.team || !(user.team as any).id) {
       res.status(400).json({ error: "User not part of a team." });
       return;
    }

    const newApp = await prisma.app.create({
      data: { name, description, teamId: (user.team as any).id },
    });

    res.json({ app: newApp });
    return;
  } catch (error) {
    console.error("Error creating app:", error);
    res.status(500).json({ error: "Failed to create app." });
    return;
  }
});

// 6. Add Auth Method to an App
router.post("/addauth", async (req, res) => {
  try {
    const { appId, authId, metadata } = req.body;

    const auth = await prisma.authMethods.create({
      data: { appId, authId, metadata },
      include: { app: true, availableAuth: true },
    });

    res.json({ auth });
    return;
  } catch (error) {
    console.error("Error adding auth method:", error);
    res.status(500).json({ error: "Failed to add auth method." });
    return;
  }
});

// 7. Get App by ID
router.get("/apps/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const app = await prisma.app.findUnique({
      where: { id: Number(id) },
      include: { authMethods: true, triggers: true, actions: true },
    });

    if (!app) {
       res.status(404).json({ message: "App not found" });
       return;
    }

    res.json(app);
    return;
  } catch (error) {
    console.error("Error fetching app by ID:", error);
    res.status(500).json({ message: "Server error" });
    return;

  }
});

// 8. Get Available Auth Methods
router.get("/auth-methods", async (req, res) => {
  try {
    const methods = await prisma.availableAuthMethods.findMany();
    res.json({ methods });
    return;
  } catch (error) {
    console.error("Error fetching auth methods:", error);
    res.status(500).json({ error: "Failed to fetch auth methods." });
    return;
  }
});

export default router;