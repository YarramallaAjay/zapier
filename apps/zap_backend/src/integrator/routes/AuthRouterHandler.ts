import { Auth } from "@integrator/middlewares/Auth";
import {  PrismaClient } from "@repo/db/src";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import Express from "express";
import { Apiresponse } from "@/utils/Response";
// import { AuthenticationBase } from "@repo/types/src/Authentication";

const router: Express.Router = Express.Router();
const prisma = new PrismaClient();

// Add Auth Method to an App
router.post("/newauth/:appId/:authId", Auth, async (req, res) => {
  try {
    const { appId, authId } = req.params;
    const { metadata } = req.body;

    // Manual validation
    if (!appId || !authId) {
      Apiresponse.error(res, "appId and authId are required", 400, {});
      return;
    }

    try {
      const app = await prisma.app.findFirstOrThrow({
        where: { id: appId },
        include: { team: true, authMethods: true },
      });

      if (app?.authMethods.length !== 0) {
        Apiresponse.error(res, "App already has an auth method. Delete the existing Auth method before adding a new one.", 400, { auth: app?.authMethods });
        return;
      }

      const auth = await prisma.authMethods.create({
        data: {
          appId,
          authId,
          metadata,
        },
        include: { app: true, availableAuth: true },
      });

      Apiresponse.success(res, { auth }, "Auth method added successfully", 201);
      return;

    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError && e.code == "P2025") {
        console.log("Error:" + e);
        Apiresponse.error(res, "Error occurred", 404, e);
        return;
      }
      Apiresponse.error(res, "Internal server error", 500, e);
      return;
    }

  } catch (error) {
    console.error("Error adding auth method:", error);
    Apiresponse.error(res, "Failed to add auth method.", 500, error);
    return;
  }
});

// Delete Auth Method from an App
router.delete("/deleteauth/:appId/:authId", Auth, async (req, res) => {
  try {
    const { appId, authId } = req.params;

    // Manual validation
    if (!appId || !authId) {
      res.status(400).json({ error: "appId and authId are required" });
      return;
    }

    const auth = await prisma.authMethods.deleteMany({
      where: {
        appId,
        authId,
      },
    });

    if (auth.count === 0) {
      res.status(404).json({ message: "Auth method not found for the given appId and authId." });
      return;
    }

    res.json({ message: "Auth method deleted successfully." });
  } catch (error) {
    console.error("Error deleting auth method:", error);
    res.status(500).json({ error: "Failed to delete auth method." });
  }
});

// Get Auth Methods for an App
router.get("/authmethods/:appId", Auth, async (req, res) => {
  try {
    const { appId } = req.params;

    // Manual validation
    if (!appId) {
      res.status(400).json({ error: "appId is required" });
      return;
    }

    const authMethods = await prisma.authMethods.findMany({
      where: { appId },
      include: { availableAuth: true },
    });

    res.json({ authMethods });
  } catch (error) {
    console.error("Error fetching auth methods:", error);
    res.status(500).json({ error: "Failed to fetch auth methods." });
  }
});

// Update Auth Method for an App
router.put("/updateauth/:appId/:authId", Auth, async (req, res) => {
  try {
    const { appId, authId } = req.params;
    const { metadata } = req.body;

    // Manual validation
    if (!appId || !authId) {
      res.status(400).json({ error: "appId and authId are required" });
      return;
    }

    const auth = await prisma.authMethods.updateMany({
      where: {
        appId,
        id: authId,
      },
      data: { metadata },
    });

    if (auth.count == 0) {
      res.status(404).json({ message: "Auth method not found for the given appId and authId." });
      return;
    }

    res.json({
      message: "Auth method updated successfully.",
      auth: auth,
    });
  } catch (error) {
    console.error("Error updating auth method:", error);
    res.status(500).json({ error: "Failed to update auth method." });
  }
});

// Get App by ID
router.get("/apps/:id", Auth, async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      res.status(400).json({ error: "id is required" });
      return;
    }

    const app = await prisma.app.findUnique({
      where: { id },
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

// Get Available Auth Methods
router.get("/auth-methods", Auth, async (req, res) => {
  try {
    console.log(req)

    const methods = await prisma.availableAuthMethods.findMany();
    res.json({ methods });
  } catch (error) {
    console.error("Error fetching auth methods:", error);
    res.status(500).json({ error: "Failed to fetch auth methods." });
  }
});

export default router;