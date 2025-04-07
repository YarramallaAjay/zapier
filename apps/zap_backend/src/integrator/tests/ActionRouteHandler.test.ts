import request from "supertest";
import express from "express";
import router from "../routes/ActionRouterHandler";

const app = express();
app.use(express.json());
app.use("/integrator/actions", router);

describe("ActionRouteHandler", () => {
  // Mock Prisma Client
  jest.mock("@prisma/client", () => {
    const mockPrisma = {
      action: {
        findMany: jest.fn(),
        create: jest.fn(),
        update: jest.fn(),
        delete: jest.fn(),
      },
    };
    return { PrismaClient: jest.fn(() => mockPrisma) };
  });

  const prisma = require("@prisma/client").PrismaClient();

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("GET /integrator/actions", () => {
    it("should return all actions", async () => {
      (prisma.action.findMany as jest.Mock).mockResolvedValue([
        { id: 1, name: "Action 1" },
        { id: 2, name: "Action 2" },
      ]);

      const res = await request(app).get("/integrator/actions");

      expect(res.status).toBe(200);
      expect(res.body).toEqual([
        { id: 1, name: "Action 1" },
        { id: 2, name: "Action 2" },
      ]);
    });

    it("should return 404 if no actions are found", async () => {
      (prisma.action.findMany as jest.Mock).mockResolvedValue([]);

      const res = await request(app).get("/integrator/actions");

      expect(res.status).toBe(404);
      expect(res.body).toEqual({ message: "No actions found" });
    });

    it("should handle database errors gracefully", async () => {
      (prisma.action.findMany as jest.Mock).mockRejectedValue(new Error("Database error"));

      const res = await request(app).get("/integrator/actions");

      expect(res.status).toBe(500);
      expect(res.body).toEqual({ error: "Internal server error" });
    });
  });

  describe("GET /integrator/actions/:appId", () => {
    it("should return actions for a valid appId", async () => {
      (prisma.app.findFirst as jest.Mock).mockResolvedValue({
        id: 3,
        actions: [{ id: 1, name: "Action 1" }],
      });

      const res = await request(app).get("/integrator/actions/3");

      expect(res.status).toBe(200);
      expect(res.body).toEqual([{ id: 1, name: "Action 1" }]);
    });

    it("should return 400 for an invalid appId", async () => {
      const res = await request(app).get("/integrator/actions/invalid");

      expect(res.status).toBe(400);
      expect(res.body).toEqual({ error: "Invalid appId parameter" });
    });

    it("should return 404 if no actions are found for the appId", async () => {
      (prisma.app.findFirst as jest.Mock).mockResolvedValue(null);

      const res = await request(app).get("/integrator/actions/3");

      expect(res.status).toBe(404);
      expect(res.body).toEqual({ message: "No actions found for this application" });
    });

    it("should handle database errors gracefully", async () => {
      (prisma.app.findFirst as jest.Mock).mockRejectedValue(new Error("Database error"));

      const res = await request(app).get("/integrator/actions/3");

      expect(res.status).toBe(500);
      expect(res.body).toEqual({ error: "Internal server error" });
    });
  });

  describe("POST /integrator/actions", () => {
    it("should create a new action", async () => {
      const newAction = { name: "Action 1", description: "Test", zapId: "zap1", actionType: "type1" };
      (prisma.action.create as jest.Mock as jest.Mock).mockResolvedValue({ id: 1, ...newAction });

      const res = await request(app).post("/integrator/actions").send(newAction);

      expect(res.status).toBe(201);
      expect(res.body).toEqual({ id: 1, ...newAction });
    });

    it("should return 400 if required fields are missing", async () => {
      const res = await request(app).post("/integrator/actions").send({});

      expect(res.status).toBe(400);
      expect(res.body).toEqual({ error: "Missing required fields" });
    });

    it("should handle database errors gracefully", async () => {
      (prisma.action.create as jest.Mock).mockRejectedValue(new Error("Database error"));

      const res = await request(app).post("/integrator/actions").send({
        name: "Action 1",
        description: "Test",
        zapId: "zap1",
        actionType: "type1",
      });

      expect(res.status).toBe(400);
      expect(res.body).toEqual({ error: "Invalid data or database error" });
    });
  });

  describe("PUT /integrator/actions/:id", () => {
    it("should update an action", async () => {
      const updatedAction = { name: "Updated Action" };
      (prisma.action.update as jest.Mock).mockResolvedValue({ id: 1, ...updatedAction });

      const res = await request(app).put("/integrator/actions/1").send(updatedAction);

      expect(res.status).toBe(200);
      expect(res.body).toEqual({ id: 1, ...updatedAction });
    });

    it("should return 404 if action is not found", async () => {
      (prisma.action.update as jest.Mock).mockRejectedValue({ code: "P2025" });

      const res = await request(app).put("/integrator/actions/1").send({ name: "Updated Action" });

      expect(res.status).toBe(404);
      expect(res.body).toEqual({ error: "Action not found" });
    });
  });

  describe("DELETE /integrator/actions/:id", () => {
    it("should delete an action", async () => {
      (prisma.action.delete as jest.Mock).mockResolvedValue({});

      const res = await request(app).delete("/integrator/actions/1");

      expect(res.status).toBe(200);
      expect(res.body).toEqual({ message: "Action deleted" });
    });

    it("should return 404 if action is not found", async () => {
      (prisma.action.delete as jest.Mock).mockRejectedValue({ code: "P2025" });

      const res = await request(app).delete("/integrator/actions/1");

      expect(res.status).toBe(404);
      expect(res.body).toEqual({ error: "Action not found" });
    });
  });
});