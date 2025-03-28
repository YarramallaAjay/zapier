import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { PrismaClient } from "@prisma/client";
import { Auth } from "../middlewares/Auth";
import { BasicAuth } from "../authStrategies/BasicAuth"
import { GoogleAuth } from "../authStrategies/GoogleAuth";

const prisma = new PrismaClient();
const router = express.Router();

// Middlewares
router.use(cors({
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  exposedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));
router.use(express.json());
router.use(cookieParser());
router.use(Auth);

// ==================== ROUTES ==================== //


router.get("/apps", Auth,async (req, res) => {
  try {
    //@ts-expect-error
    const userId = req.userId

    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: { team: true }
    });

    if (!user?.teamId) {
       res.status(400).json({ error: "User not part of a team." });
       return;
    }

    const apps = await prisma.app.findMany({
      where: { teamId: user.teamId },
      include: {
        actions: true,
        triggers: true,
        authMethods: {
          include: {
            availableAuth: true
          }
        }
      }
    });

    res.json({ apps });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch apps." });
  }
});

// 2. POST /newapp - Create a New App
router.post("/newapp",Auth, async (req, res) => {
    const { name, description } = req.body;
    //@ts-ignore
    const userId = req.userId;
  
    try {
      const user = await prisma.user.findUnique({ where: { id: userId } });
  
      if (!user?.teamId) {
         res.status(400).json({ error: "User not part of a team." });
         return;
      }
  
      const newApp = await prisma.app.create({
        data: {
          name,
          description,
          teamId: user.teamId
        }
      });
  
      res.json({ app: newApp });
    } catch (error) {
      res.status(500).json({ error: "Failed to create app." });
    }
  });
  

// 3. POST /addauth - Add Auth Method to an App
router.post("/addauth", Auth,async (req, res) => {
    const { appId, authId, metadata } = req.body;
  
    try {
      const auth = await prisma.authMethods.create({
        data: {
          appId,
          authId,
          metadata
        },
        include: {
          app: true,
          availableAuth: true
        }
      });
  
      res.json({ auth });
    } catch (error) {
      res.status(500).json({ error: "Failed to add auth method." });
    }
  });
  

// 4. POST /addtrigger - Add a Trigger to an App
router.post("/addtrigger", async (req, res) => {
    const { name, description, metadata, configMetadata, type, appId } = req.body;
  
    try {
      const trigger = await prisma.availableTriggers.create({
        data: {
          name,
          description,
          metadata,
          configMetadata,
          type,
          appId
        }
      });
  
      res.json({ trigger });
    } catch (error) {
      res.status(500).json({ error: "Failed to add trigger." });
    }
  });
  

// 5. POST /addaction - Add an Action to an App
router.post("/addaction",Auth, async (req, res) => {
    const { name, description, metadata, configMetadata, type, appId } = req.body;
  
    try {
      const action = await prisma.availableActions.create({
        data: {
          name,
          description,
          metadata,
          configMetadata,
          type,
          appId
        }
      });
  
      res.json({ action });
    } catch (error) {
      res.status(500).json({ error: "Failed to add action." });
    }
  });
  

// OPTIONAL: Get App by ID (with details)
router.get("/apps/:id",Auth, async (req, res) => {
  const { id } = req.params;
  try {
    const app = await prisma.app.findUnique({
      where: { id: Number(id) },
      include: {
        authMethods: true,
        triggers: true,
        actions: true
      }
    });
    if (!app) { 
        res.status(404).json({ message: "App not found" });
        return
    }
    res.json(app);
  } catch (error) {
    console.error("Error fetching app:", error);
    res.status(500).json({ message: "Server error" });
  }
});



router.get("/auth-methods", async (req, res) => {
    try {
      const methods = await prisma.availableAuthMethods.findMany();
      res.json({ methods });
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch auth methods." });
    }
  });
  
