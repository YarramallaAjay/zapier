import express, {  Router } from "express";
import {  PrismaClient } from "@repo/db/src";
import cookieParser from "cookie-parser";
import { AuthUser } from "@/middlewares/userAuthMiddleware";
import { UserDetails, UserSession } from "@repo/types/src/UserSession";
import { TeamBase } from "@repo/types/src/Team";
import { Apiresponse } from "@/utils/Response";


const prisma = new PrismaClient();
const router: Router = express.Router();

// Middlewares
// router.use(
//   cors({
//     origin: ["http://localhost:3000"],
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//     exposedHeaders: ["Content-Type", "Authorization"],
//     credentials: true,
//   })
// );
router.use(express.json());
router.use(cookieParser());

router.get("/team", AuthUser, async (req, res) => {
  try {
    const user = req.user as unknown as UserDetails; // Use cached user details

    if (!user) {
      Apiresponse.error(res, "User not authenticated", 401, {});
      return;
    }

    // Retrieve the team where the user is a member
    const team = await prisma.team.findFirst({
      where: {
        members: {
          some: {
            id: user.id, // Check if the user's ID exists in the members array
          },
        },
      },
      include:{apps:true}
    });

    if (!team) {
      Apiresponse.success(res, null, "User is not part of any team.", 200);
      return;
    }

    Apiresponse.success(res, team, "Successfully fetched user team.", 200);
  } catch (error) {
    console.error("Error fetching team:", error);
    Apiresponse.error(res, "Failed to fetch team.", 500, error);
  }
});
// 1. Create Team
router.post("/team", AuthUser, async (req, res) => {
  try {
    const user = await req.user as UserDetails;
    const {name,members,metadata,createdById} = await req.body;
    
    if (!user) {
      Apiresponse.error(res, "User not authenticated", 401, {});
      return;
    }

    // Check if user already has a team
    if (user.team && (user.team as TeamBase).id) {
      Apiresponse.error(res, "User can only create one team.", 400,user.team);
      return;
    }


    // Create the team
    const newTeam = await prisma.team.create({
      data: {
        name,
        metadata: metadata || {},
        createdById: user.id || createdById,
        members: {
          connect: members.map((id: string) => ({
            id
          })),
        },
      },
    });

    // Update user session to include the new team
    await UserDetails.updateUserDetails(user.id);

    Apiresponse.success(res, { team: newTeam }, "Team created successfully.", 201);
  } catch (error) {
    console.error("Error creating team:", error);
    Apiresponse.error(res, "Failed to create team.", 500, error);
  }
});

// 2. Update Team Details
router.put("/team", AuthUser, async (req, res) => {
  try {
    const user = await req.user as unknown as UserDetails; // Use cached user details
    if (!user) {
      Apiresponse.error(res, "User not authenticated", 401, {});
      return;
    }

    const { name, metadata } = req.body;

    if (!user.team || !(user.team as any).id) {
      Apiresponse.error(res, "User not part of a team.", 400, {});
      return;
    }

    const updatedTeam = await prisma.team.update({
      where: { id: (user.team as TeamBase).id },
      data: { name, metadata: metadata || {} },
    });

    // Update user session to reflect team changes
    await UserDetails.updateUserDetails(user.id);

    Apiresponse.success(res, { team: updatedTeam }, "Team updated successfully.", 200);
  } catch (error) {
    console.error("Error updating team:", error);
    Apiresponse.error(res, "Failed to update team.", 500, error);
  }
});

// 3. Delete Team
router.delete("/team", AuthUser, async (req, res) => {
  try {
    const user = req.user as unknown as UserDetails; // Use cached user details
    if (!user) {
      Apiresponse.error(res, "User not authenticated", 401, {});
      return;
    }

    await prisma.team.delete({
      where: { createdById: (user as unknown as UserSession).user.id },
    });

    // Clear user session since team is deleted
    await UserDetails.updateUserDetails(user.id);

    Apiresponse.success(res, {}, "Team deleted successfully.", 200);
  } catch (error) {
    console.error("Error deleting team:", error);
    Apiresponse.error(res, "Failed to delete team.", 500, error);
  }
});

// 4. Get Apps for the User's Team
router.get("/teamapps", AuthUser, async (req, res) => {
  try {
    const user = await req.user as unknown as UserDetails; // Use cached user details
    if (!user) {
      Apiresponse.error(res, "User not authenticated", 401, {});
      return;
    }

    if (!user.team || !(user.team as any).id) {
      Apiresponse.success(res, [],"User not part of a team....create one", 201);
      return;
    }

    const apps = await prisma.app.findMany({
      where: { teamId: (user.team as any).id },
      include: {
        team: true,
        actions: true,
        triggers: true,
        authMethods: { include: { availableAuth: true } },
      },
    });

    Apiresponse.success(res, apps , "Apps fetched successfully.", 200);
  } catch (error) {
    console.error("Error fetching apps:", error);
    Apiresponse.error(res, "Failed to fetch apps.", 500, error);
  }
});

// 5. Create New App
router.post("/newapp", AuthUser, async (req, res) => {
  try {
    const user = await req.user as unknown as UserDetails; // Use cached user details
    if (!user) {
      Apiresponse.error(res, "User not authenticated", 401, {});
      return;
    }

    const { name, description } = req.body;

    if (!user.team || !(user.team as any).id) {
      Apiresponse.error(res, "User not part of a team.", 400, {});
      return;
    }

    const newApp = await prisma.app.create({
      data: { name, description, teamId: (user.team as any).id },
    });

    Apiresponse.success(res, { app: newApp }, "App created successfully.", 201);
  } catch (error) {
    console.error("Error creating app:", error);
    Apiresponse.error(res, "Failed to create app.", 500, error);
  }
});

router.get("/allapps", AuthUser, async (req, res) => {
  try {
    const user = await req.user as unknown as UserDetails; // Use cached user details
    if (!user) {
      Apiresponse.error(res, "User not authenticated", 401, {});
      return;
    }


    const apps = await prisma.app.findMany({
      include: {
        team: true,
        actions: true,
        triggers: true,
        authMethods: { include: { availableAuth: true } },
      },
    });
    if(!apps){
      Apiresponse.error(res, "Apps not found/ mis-fetch",400, []);
    }

    Apiresponse.success(res, apps , "Apps fetched successfully.", 200);
  } catch (error) {
    console.error("Error fetching apps:", error);
    Apiresponse.error(res, "Failed to fetch apps.", 500, error);
  }
});

// 6. Add Auth Method to an App

export default router;