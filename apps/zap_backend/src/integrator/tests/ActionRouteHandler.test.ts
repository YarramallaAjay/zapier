import request from "supertest";
import express from "express";
import router from "../routes/ActionRouterHandler";

const app = express();
app.use(express.json());
app.use("/actions", router);

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

  describe("GET /actions", () => {
    it("should return all actions with available and zap relations", async () => {
      prisma.action.findMany.mockResolvedValue([
        {
          id: "1",
          name: "Test Action",
          description: "Test Description",
          metadata: {},
          zapId: "zap1",
          sortingOrder: 0,
          actionType: "type1",
          available: { id: "type1", name: "Available Action" },
          zap: { id: "zap1", name: "Test Zap" },
        },
      ]);

      const res = await request(app).get("/actions");

      expect(res.status).toBe(200);
      expect(res.body).toEqual([
        {
          id: "1",
          name: "Test Action",
          description: "Test Description",
          metadata: {},
          zapId: "zap1",
          sortingOrder: 0,
          actionType: "type1",
          available: { id: "type1", name: "Available Action" },
          zap: { id: "zap1", name: "Test Zap" },
        },
      ]);
    });

    it("should return 404 if no actions are found", async () => {
      prisma.action.findMany.mockResolvedValue([]);

      const res = await request(app).get("/actions");

      expect(res.status).toBe(404);
      expect(res.body).toEqual({ message: "No actions found" });
    });

    it("should handle database errors gracefully", async () => {
      prisma.action.findMany.mockRejectedValue(new Error("Database error"));

      const res = await request(app).get("/actions");

      expect(res.status).toBe(500);
      expect(res.body).toEqual({ error: "Internal server error" });
    });
  });

  describe("POST /actions", () => {
    it("should create a new action", async () => {
      const newAction = {
        name: "New Action",
        description: "Test Description",
        metadata: {},
        zapId: "zap1",
        sortingOrder: 1,
        actionType: "type1",
      };
      prisma.action.create.mockResolvedValue({ id: "1", ...newAction });

      const res = await request(app).post("/actions").send(newAction);

      expect(res.status).toBe(201);
      expect(res.body).toEqual({ id: "1", ...newAction });
    });

    it("should return 400 if required fields are missing", async () => {
      const res = await request(app).post("/actions").send({});

      expect(res.status).toBe(400);
      expect(res.body).toEqual({ error: "Missing required fields" });
    });

    it("should handle database errors gracefully", async () => {
      prisma.action.create.mockRejectedValue(new Error("Database error"));

      const res = await request(app).post("/actions").send({
        name: "New Action",
        description: "Test Description",
        zapId: "zap1",
        actionType: "type1",
      });

      expect(res.status).toBe(400);
      expect(res.body).toEqual({ error: "Invalid data or database error" });
    });
  });

  describe("PUT /actions/:id", () => {
    it("should update an action", async () => {
      const updatedAction = { name: "Updated Action", sortingOrder: 2 };
      prisma.action.update.mockResolvedValue({ id: "1", ...updatedAction });

      const res = await request(app).put("/actions/1").send(updatedAction);

      expect(res.status).toBe(200);
      expect(res.body).toEqual({ id: "1", ...updatedAction });
    });

    it("should return 400 if action ID is not provided", async () => {
      const res = await request(app).put("/actions/").send({ name: "Updated Action" });

      expect(res.status).toBe(400);
      expect(res.body).toEqual({ error: "Action ID is required" });
    });

    it("should return 404 if action is not found", async () => {
      prisma.action.update.mockRejectedValue({ code: "P2025" });

      const res = await request(app).put("/actions/1").send({ name: "Updated Action" });

      expect(res.status).toBe(404);
      expect(res.body).toEqual({ error: "Action not found" });
    });

    it("should handle database errors gracefully", async () => {
      prisma.action.update.mockRejectedValue(new Error("Database error"));

      const res = await request(app).put("/actions/1").send({ name: "Updated Action" });

      expect(res.status).toBe(400);
      expect(res.body).toEqual({ error: "Invalid data or database error" });
    });
  });

  describe("DELETE /actions/:id", () => {
    it("should delete an action", async () => {
      prisma.action.delete.mockResolvedValue({});

      const res = await request(app).delete("/actions/1");

      expect(res.status).toBe(200);
      expect(res.body).toEqual({ message: "Action deleted" });
    });

    it("should return 400 if action ID is not provided", async () => {
      const res = await request(app).delete("/actions/");

      expect(res.status).toBe(400);
      expect(res.body).toEqual({ error: "Action ID is required" });
    });

    it("should return 404 if action is not found", async () => {
      prisma.action.delete.mockRejectedValue({ code: "P2025" });

      const res = await request(app).delete("/actions/1");

      expect(res.status).toBe(404);
      expect(res.body).toEqual({ error: "Action not found" });
    });

    it("should handle database errors gracefully", async () => {
      prisma.action.delete.mockRejectedValue(new Error("Database error"));

      const res = await request(app).delete("/actions/1");

      expect(res.status).toBe(400);
      expect(res.body).toEqual({ error: "Invalid data or database error" });
    });
  });
});
