import request from "supertest";
import express from "express";
import router from "../routes/ActionRouterHandler";

// ✅ Setup
const app = express();
app.use(express.json());
app.use("/integrator/actions", router);

const jwt =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIyYWMyMDYxZS1jNjBkLTRhNTEtOWViMS1lNGM1ZTMxMDNlYjEiLCJhY2Nlc3N0b2tlbiI6InlhMjkuYTBBWllrTlppYXpxRnp0R2VhOXQ5aTRFSzBlc2VsOGlKNzA3ODJKdGJrelgwM09VNVJaTWt2ZVBteVJJOVg2VnpKQXFkeVRuMkpYOHhoSndGbjBzREpoT05Bb2Y1aXlMY0VUMHc0eDlfSGlrZFZBUDc1cXVrc2h2R00temVhS05FSFBPWUkza0FMYWJnckp0Tnp0WWZ2NzN2dHRPT1ZMbHRzNk5hbHpPbW1sUWFDZ1lLQVM4U0FSQVNGUUhHWDJNaUdJcFZTVG1va1ZHSHhiSkN6bHZ1VVEwMTc3IiwiaWF0IjoxNzQ0MDUwNjU2fQ.RFUR6p2IGnuo2AzuJTM0wYKh8YWi7q51B-u9mGr9iCs";

// ✅ Mock Prisma Client
jest.mock("@prisma/client", () => {
  const mockFindUnique = jest.fn();
  const mockFindMany = jest.fn();
  const mockCreate = jest.fn();
  const mockUpdate = jest.fn();
  const mockDelete = jest.fn();
  const mockFindFirst = jest.fn();

  return {
    PrismaClient: jest.fn(() => ({
      user: {
        findUnique: mockFindUnique, // Mock findUnique for UserSession
      },
      availableActions: {
        findMany: mockFindMany,
        create: mockCreate,
        update: mockUpdate,
        delete: mockDelete,
      },
      app: {
        findFirst: mockFindFirst,
      },
    })),
  };
});

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

afterEach(() => {
  jest.clearAllMocks();
});

describe("ActionRouteHandler", () => {
  // ✅ GET /
  describe("GET /integrator/actions", () => {
    it("should return all actions", async () => {
      (prisma.availableActions.findMany as jest.Mock).mockResolvedValue([
        { id: "1", name: "Action 1", availableActionId: "245400ea-4cd7-48c9-8888-54d733a5d960" },
        { id: "2", name: "Action 2", availableActionId: "245400ea-4cd7-48c9-8888-54d733a5d960" },
      ]);

      const res = await request(app).get("/integrator/actions").set("Authorization", jwt);

      expect(res.status).toBe(200);
      expect(res.body).toEqual({
        message: "Actions fetched successfully",
        data: [
          { id: "1", name: "Action 1", availableActionId: "245400ea-4cd7-48c9-8888-54d733a5d960" },
          { id: "2", name: "Action 2", availableActionId: "245400ea-4cd7-48c9-8888-54d733a5d960" },
        ],
      });
    });

    it("should return 404 if no actions are found", async () => {
      (prisma.availableActions.findMany as jest.Mock).mockResolvedValue([]);

      const res = await request(app).get("/integrator/actions").set("Authorization", jwt);

      expect(res.status).toBe(404);
      expect(res.body).toEqual({ message: "No actions found", data: {} });
    });
  });

  // ✅ GET /:appId
  describe("GET /integrator/actions/:appId", () => {
    it("should return actions for valid appId", async () => {
      (prisma.app.findFirst as jest.Mock).mockResolvedValue({
        id: "f4f8fe67-3129-4d6e-934e-b32dce3d0029",
        actions: [
          { id: "1", name: "Action 1", availableActionId: "245400ea-4cd7-48c9-8888-54d733a5d960" },
        ],
      });

      const res = await request(app)
        .get("/integrator/actions/f4f8fe67-3129-4d6e-934e-b32dce3d0029")
        .set("Authorization", jwt);

      expect(res.status).toBe(200);
      expect(res.body).toEqual({
        message: "Actions fetched successfully",
        data: [
          { id: "1", name: "Action 1", availableActionId: "245400ea-4cd7-48c9-8888-54d733a5d960" },
        ],
      });
    });
  });

  // ✅ POST /:appId
  describe("POST /integrator/actions/:appId", () => {
    it("should create a new action", async () => {
      const actionData = {
        name: "New Action",
        description: "Testing",
        metadata: {},
        configMetadata: {},
        type: "testType",
        availableActionId: "245400ea-4cd7-48c9-8888-54d733a5d960",
      };

      (prisma.availableActions.create as jest.Mock).mockResolvedValue({
        id: "1",
        ...actionData,
        appId: "f4f8fe67-3129-4d6e-934e-b32dce3d0029",
      });

      const res = await request(app)
        .post("/integrator/actions/f4f8fe67-3129-4d6e-934e-b32dce3d0029")
        .set("Authorization", jwt)
        .send(actionData);

      expect(res.status).toBe(201);
      expect(res.body).toEqual({
        message: "Action created successfully",
        data: {
          id: "1",
          ...actionData,
          appId: "f4f8fe67-3129-4d6e-934e-b32dce3d0029",
        },
      });
    });
  });

  // ✅ PUT /:appId/:id
  describe("PUT /integrator/actions/:appId/:id", () => {
    it("should update an action", async () => {
      (prisma.availableActions.update as jest.Mock).mockResolvedValue({
        id: "1",
        name: "Updated Action",
        availableActionId: "245400ea-4cd7-48c9-8888-54d733a5d960",
      });

      const res = await request(app)
        .put("/integrator/actions/f4f8fe67-3129-4d6e-934e-b32dce3d0029/1")
        .set("Authorization", jwt)
        .send({ name: "Updated Action" });

      expect(res.status).toBe(200);
      expect(res.body).toEqual({
        message: "Action updated successfully",
        data: {
          id: "1",
          name: "Updated Action",
          availableActionId: "245400ea-4cd7-48c9-8888-54d733a5d960",
        },
      });
    });
  });

  // ✅ DELETE /:id
  describe("DELETE /integrator/actions/:id", () => {
    it("should delete an action", async () => {
      (prisma.availableActions.delete as jest.Mock).mockResolvedValue({});

      const res = await request(app)
        .delete("/integrator/actions/245400ea-4cd7-48c9-8888-54d733a5d960")
        .set("Authorization", jwt);

      expect(res.status).toBe(200);
      expect(res.body).toEqual({ message: "Action deleted successfully", data: {} });
    });
  });
});