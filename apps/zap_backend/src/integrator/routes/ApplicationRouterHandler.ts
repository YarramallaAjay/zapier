import express, { Router } from "express";
import { PrismaClient } from "@repo/db/src";
import cookieParser from "cookie-parser";
import { AuthUser } from "@/middlewares/userAuthMiddleware";
import { UserDetails, UserSession } from "@repo/types/src/UserSession";
import { TeamBase } from "@repo/types/src/Team";
import { Apiresponse } from "@/utils/Response";

const prisma = new PrismaClient();
const router: Router = express.Router();

router.use(express.json());
router.use(cookieParser());

// Get team by ID
router.get("/team/:teamId", AuthUser, async (req, res) => {
  try {
    const { teamId } = req.params;
    const team = await prisma.team.findUnique({
      where: { id: teamId },
      include: { apps: true, members: true }
    });

    if (!team) {
       Apiresponse.error(res, "Team not found.", 404, {});
       return;
      }

    Apiresponse.success(res, team, "Team retrieved successfully.", 200);
  } catch (error) {
    console.error("Error fetching team by ID:", error);
    Apiresponse.error(res, "Failed to fetch team.", 500, error);
  }
});

// Get team for user
router.get("/team", AuthUser, async (req, res) => {
  try {
    const user = req.user as unknown as UserSession;
    if (!user)  {Apiresponse.error(res, "User not authenticated", 401, {});
  return}

    const team = await prisma.team.findFirst({
      where: { members: { some: { id: user.id } } },
      include: { apps: true }
    });

    if (!team)  {
      Apiresponse.success(res, null, "User is not part of any team.", 200);
      return
}
    Apiresponse.success(res, team, "Successfully fetched user team.", 200);
  } catch (error) {
    console.error("Error fetching team:", error);
    Apiresponse.error(res, "Failed to fetch team.", 500, error);
  }
});

// Create team
router.post("/team", AuthUser, async (req, res) => {
  try {
    const user = req.user as UserSession;
    const { name, members, metadata, createdById } = req.body;

    if (!user)  {Apiresponse.error(res, "User not authenticated", 401, {});
  return}

    const existingTeam = await prisma.team.findFirst({ where: { createdById: user.id } });
    if (existingTeam)  {
      Apiresponse.error(res, "User can only create one team.", 400, existingTeam);
      return
}
    const memberUsers = await prisma.user.findMany({
      select: { id: true },
      where: { email: { in: [...members] } }
    });

    const newTeam = await prisma.team.create({
      data: {
        name,
        metadata: metadata || {},
        createdById: createdById || user.id,
        members: { connect: memberUsers.map((u) => ({ id: u.id })) }
      }
    });

    await UserDetails.updateUserDetails(user.id);
    Apiresponse.success(res, { team: newTeam }, "Team created successfully.", 201);
  } catch (error) {
    console.error("Error creating team:", error);
    Apiresponse.error(res, "Failed to create team.", 500, error);
  }
});

// Update team
router.put("/team", AuthUser, async (req, res) => {
  try {
    const user = req.user as UserSession;
    const { name, metadata } = req.body;

    if (!(user.team as TeamBase).id)  {Apiresponse.error(res, "User not part of a team.", 400, {});
   return }

    const updatedTeam = await prisma.team.update({
      where: { id: (user.team as TeamBase).id },
      data: { name, metadata: metadata || {} },
    });

    await UserDetails.updateUserDetails(user.id);
    Apiresponse.success(res, { team: updatedTeam }, "Team updated successfully.", 200);
  } catch (error) {
    console.error("Error updating team:", error);
    Apiresponse.error(res, "Failed to update team.", 500, error);
  }
});

// Delete team
router.delete("/team", AuthUser, async (req, res) => {
  try {
    const user = req.user as UserSession;
    if (!user)  {Apiresponse.error(res, "User not authenticated", 401, {});
    return}

    await prisma.team.delete({ where: { createdById: user.id } });
    await UserDetails.updateUserDetails(user.id);

    Apiresponse.success(res, {}, "Team deleted successfully.", 200);
  } catch (error) {
    console.error("Error deleting team:", error);
    Apiresponse.error(res, "Failed to delete team.", 500, error);
  }
});

// Get apps for user's team
router.get("/teamapps", AuthUser, async (req, res) => {
  try {
    const user = req.user as UserSession;

    if (!(user?.team as TeamBase).id)  {Apiresponse.success(res, [], "User not part of a team....create one", 201);
    return}

    const apps = await prisma.app.findMany({
      where: { teamId: (user.team as TeamBase).id },
      include: {
        team: true,
        actions: true,
        triggers: true,
        authMethods: { include: { availableAuth: true } },
      },
    });

    Apiresponse.success(res, apps, "Apps fetched successfully.", 200);
  } catch (error) {
    console.error("Error fetching apps:", error);
    Apiresponse.error(res, "Failed to fetch apps.", 500, error);
  }
});

// Create new app in team
router.post("/newapp", AuthUser, async (req, res) => {
  try {
    const user = req.user as UserSession;
    const { name, description } = req.body;

    if (!(user?.team as TeamBase).id)  {
      Apiresponse.error(res, "User not part of a team.", 400, {});
      return
    }

    const newApp = await prisma.app.create({
      data: { name, description, teamId: (user.team as TeamBase).id },
    });

    Apiresponse.success(res, { app: newApp }, "App created successfully.", 201);
  } catch (error) {
    console.error("Error creating app:", error);
    Apiresponse.error(res, "Failed to create app.", 500, error);
  }
});

// Get all apps
router.get("/allapps", AuthUser, async (req, res) => {
  try {
    console.log(req)
    const apps = await prisma.app.findMany({
      include: {
        team: true,
        actions: true,
        triggers: true,
        authMethods: { include: { availableAuth: true } },
      },
    });

    if (!apps.length)  {Apiresponse.error(res, "Apps not found/mis-fetch", 400, []);
      return
    }

    Apiresponse.success(res, apps, "Apps fetched successfully.", 200);
  } catch (error) {
    console.error("Error fetching apps:", error);
    Apiresponse.error(res, "Failed to fetch apps.", 500, error);
  }
});

// Get app by ID
router.get("/app/:appId", AuthUser, async (req, res) => {
  try {
    const { appId } = req.params;
    const app = await prisma.app.findUnique({
      where: { id: appId },
      include: {
        team: true,
        actions: true,
        triggers: true,
        authMethods: { include: { availableAuth: true } },
      },
    });

    if (!app) { Apiresponse.error(res, "App not found.", 404, {});
  return}

    Apiresponse.success(res, app, "App fetched successfully.", 200);
  } catch (error) {
    console.error("Error fetching app:", error);
    Apiresponse.error(res, "Failed to fetch app.", 500, error);
  }
});

// Update app
router.put("/app/:appId", AuthUser, async (req, res) => {
  try {
    const { appId } = req.params;
    const { name, description } = req.body;

    const updatedApp = await prisma.app.update({
      where: { id: appId },
      data: { name, description },
    });

    Apiresponse.success(res, updatedApp, "App updated successfully.", 200);
  } catch (error) {
    console.error("Error updating app:", error);
    Apiresponse.error(res, "Failed to update app.", 500, error);
  }
});

// Delete app
router.delete("/app/:appId", AuthUser, async (req, res) => {
  try {
    const { appId } = req.params;

    await prisma.app.delete({ where: { id: appId } });
    Apiresponse.success(res, {}, "App deleted successfully.", 200);
  } catch (error) {
    console.error("Error deleting app:", error);
    Apiresponse.error(res, "Failed to delete app.", 500, error);
  }
});

export default router;
