import request from "supertest";
import express from "express";
import router from "../routes/TriggerRouterHandler";

const app = express();
app.use(express.json());
app.use("/triggers", router);

describe("TriggerRouterHandler", () => {
  // Mock Prisma Client
  jest.mock("@prisma/client", () => {
    const mockPrisma = {
      trigger: {
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

  describe("GET /triggers", () => {
    it("should return all triggers with available and zap relations", async () => {
      prisma.trigger.findMany.mockResolvedValue([
        {
          id: "1",
          name: "Test Trigger",
          description: "Test Description",
          metadata: {},
          zapId: "zap1",
          availableTriggerId: "available1",
          available: { id: "available1", name: "Available Trigger" },
          zap: { id: "zap1", name: "Test Zap" },
        },
      ]);

      const res = await request(app).get("/triggers");

      expect(res.status).toBe(200);
      expect(res.body).toEqual([
        {
          id: "1",
          name: "Test Trigger",
          description: "Test Description",
          metadata: {},
          zapId: "zap1",
          availableTriggerId: "available1",
          available: { id: "available1", name: "Available Trigger" },
          zap: { id: "zap1", name: "Test Zap" },
        },
      ]);
    });

    it("should return 404 if no triggers are found", async () => {
      prisma.trigger.findMany.mockResolvedValue([]);

      const res = await request(app).get("/triggers");

      expect(res.status).toBe(404);
      expect(res.body).toEqual({ message: "No triggers found" });
    });

    it("should handle database errors gracefully", async () => {
      prisma.trigger.findMany.mockRejectedValue(new Error("Database error"));

      const res = await request(app).get("/triggers");

      expect(res.status).toBe(500);
      expect(res.body).toEqual({ error: "Internal server error" });
    });
  });

  describe("POST /triggers", () => {
    it("should create a new trigger", async () => {
      const newTrigger = {
        name: "New Trigger",
        description: "Test Description",
        metadata: {},
        zapId: "zap1",
        availableTriggerId: "available1",
      };
      prisma.trigger.create.mockResolvedValue({ id: "1", ...newTrigger });

      const res = await request(app).post("/triggers").send(newTrigger);

      expect(res.status).toBe(201);
      expect(res.body).toEqual({ id: "1", ...newTrigger });
    });

    it("should return 400 if required fields are missing", async () => {
      const res = await request(app).post("/triggers").send({});

      expect(res.status).toBe(400);
      expect(res.body).toEqual({ error: "Missing required fields" });
    });

    it("should handle database errors gracefully", async () => {
      prisma.trigger.create.mockRejectedValue(new Error("Database error"));

      const res = await request(app).post("/triggers").send({
        name: "New Trigger",
        description: "Test Description",
        zapId: "zap1",
        availableTriggerId: "available1",
      });

      expect(res.status).toBe(400);
      expect(res.body).toEqual({ error: "Invalid data or database error" });
    });
  });

  describe("PUT /triggers/:id", () => {
    it("should update a trigger", async () => {
      const updatedTrigger = { name: "Updated Trigger" };
      prisma.trigger.update.mockResolvedValue({ id: "1", ...updatedTrigger });

      const res = await request(app).put("/triggers/1").send(updatedTrigger);

      expect(res.status).toBe(200);
      expect(res.body).toEqual({ id: "1", ...updatedTrigger });
    });

    it("should return 400 if trigger ID is not provided", async () => {
      const res = await request(app).put("/triggers/").send({ name: "Updated Trigger" });

      expect(res.status).toBe(400);
      expect(res.body).toEqual({ error: "Trigger ID is required" });
    });

    it("should return 404 if trigger is not found", async () => {
      prisma.trigger.update.mockRejectedValue({ code: "P2025" });

      const res = await request(app).put("/triggers/1").send({ name: "Updated Trigger" });

      expect(res.status).toBe(404);
      expect(res.body).toEqual({ error: "Trigger not found" });
    });

    it("should handle database errors gracefully", async () => {
      prisma.trigger.update.mockRejectedValue(new Error("Database error"));

      const res = await request(app).put("/triggers/1").send({ name: "Updated Trigger" });

      expect(res.status).toBe(400);
      expect(res.body).toEqual({ error: "Invalid data or database error" });
    });
  });

  describe("DELETE /triggers/:id", () => {
    it("should delete a trigger", async () => {
      prisma.trigger.delete.mockResolvedValue({});

      const res = await request(app).delete("/triggers/1");

      expect(res.status).toBe(200);
      expect(res.body).toEqual({ message: "Trigger deleted" });
    });

    it("should return 400 if trigger ID is not provided", async () => {
      const res = await request(app).delete("/triggers/");

      expect(res.status).toBe(400);
      expect(res.body).toEqual({ error: "Trigger ID is required" });
    });

    it("should return 404 if trigger is not found", async () => {
      prisma.trigger.delete.mockRejectedValue({ code: "P2025" });

      const res = await request(app).delete("/triggers/1");

      expect(res.status).toBe(404);
      expect(res.body).toEqual({ error: "Trigger not found" });
    });

    it("should handle database errors gracefully", async () => {
      prisma.trigger.delete.mockRejectedValue(new Error("Database error"));

      const res = await request(app).delete("/triggers/1");

      expect(res.status).toBe(400);
      expect(res.body).toEqual({ error: "Invalid data or database error" });
    });
  });
});
