import request from "supertest";
import express from "express";
import router from "../routes/TriggerRouterHandler";

const app = express();
app.use(express.json());
app.use("/integrator/triggers", router);




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

describe("TriggerRouterHandler", () => {
  describe("GET /integrator/triggers", () => {
    it("should return all triggers", async () => {
      (prisma.availableTriggers.findMany as jest.Mock).mockResolvedValue([
        { id: 1, name: "Trigger 1" },
        { id: 2, name: "Trigger 2" },
      ]);

      const res = await request(app).get("/integrator/triggers");

      expect(res.status).toBe(200);
      expect(res.body).toEqual([
        { id: 1, name: "Trigger 1" },
        { id: 2, name: "Trigger 2" },
      ]);
    });

    it("should return 404 if no triggers are found", async () => {
      (prisma.availableTriggers.findMany as jest.Mock).mockResolvedValue([]);

      const res = await request(app).get("/integrator/triggers");

      expect(res.status).toBe(404);
      expect(res.body).toEqual({ message: "No triggers found" });
    });

    it("should handle database errors gracefully", async () => {
      (prisma.availableTriggers.findMany as jest.Mock).mockRejectedValue(new Error("Database error"));

      const res = await request(app).get("/integrator/triggers");

      expect(res.status).toBe(500);
      expect(res.body).toEqual({ error: "Internal server error" });
    });
  });

  describe("GET /integrator/triggers/:appId", () => {
    it("should return triggers for a valid appId", async () => {
      (prisma.app.findFirst as jest.Mock).mockResolvedValue({
        id: 3,
        triggers: [{ id: 1, name: "Trigger 1" }],
      });

      const res = await request(app).get("/integrator/triggers/3");

      expect(res.status).toBe(200);
      expect(res.body).toEqual([{ id: 1, name: "Trigger 1" }]);
    });

    it("should return 400 for an invalid appId", async () => {
      const res = await request(app).get("/integrator/triggers/invalid");

      expect(res.status).toBe(400);
      expect(res.body).toEqual({ error: "Invalid appId parameter" });
    });

    it("should return 404 if no triggers are found for the appId", async () => {
      (prisma.app.findFirst as jest.Mock).mockResolvedValue(null);

      const res = await request(app).get("/integrator/triggers/3");

      expect(res.status).toBe(404);
      expect(res.body).toEqual({ message: "No triggers created by the team for this application" });
    });

    it("should handle database errors gracefully", async () => {
      (prisma.app.findFirst as jest.Mock).mockRejectedValue(new Error("Database error"));

      const res = await request(app).get("/integrator/triggers/3");

      expect(res.status).toBe(500);
      expect(res.body).toEqual({ error: "Internal server error" });
    });
  });

  describe("POST /integrator/triggers", () => {
    it("should create a new trigger", async () => {
      const newTrigger = { name: "Trigger 1", description: "Test", zapId: "zap1", availableTriggerId: "available1" };
      (prisma.trigger.create as jest.Mock).mockResolvedValue({ id: 1, ...newTrigger });

      const res = await request(app).post("/integrator/triggers").send(newTrigger);

      expect(res.status).toBe(201);
      expect(res.body).toEqual({ id: 1, ...newTrigger });
    });

    it("should return 400 if required fields are missing", async () => {
      const res = await request(app).post("/integrator/triggers").send({});

      expect(res.status).toBe(400);
      expect(res.body).toEqual({ error: "Missing required fields" });
    });

    it("should handle database errors gracefully", async () => {
      (prisma.trigger.create as jest.Mock).mockRejectedValue(new Error("Database error"));

      const res = await request(app).post("/integrator/triggers").send({
        name: "Trigger 1",
        description: "Test",
        zapId: "zap1",
        availableTriggerId: "available1",
      });

      expect(res.status).toBe(400);
      expect(res.body).toEqual({ error: "Invalid data or database error" });
    });
  });

  describe("PUT /integrator/triggers/:id", () => {
    it("should update a trigger", async () => {
      const updatedTrigger = { name: "Updated Trigger" };
      (prisma.trigger.update as jest.Mock).mockResolvedValue({ id: 1, ...updatedTrigger });

      const res = await request(app).put("/integrator/triggers/1").send(updatedTrigger);

      expect(res.status).toBe(200);
      expect(res.body).toEqual({ id: 1, ...updatedTrigger });
    });

    it("should return 404 if trigger is not found", async () => {
      (prisma.trigger.update as jest.Mock).mockRejectedValue({ code: "P2025" });

      const res = await request(app).put("/integrator/triggers/1").send({ name: "Updated Trigger" });

      expect(res.status).toBe(404);
      expect(res.body).toEqual({ error: "Trigger not found" });
    });
  });

  describe("DELETE /integrator/triggers/:id", () => {
    it("should delete a trigger", async () => {
      (prisma.trigger.delete as jest.Mock).mockResolvedValue({});

      const res = await request(app).delete("/integrator/triggers/1");

      expect(res.status).toBe(200);
      expect(res.body).toEqual({ message: "Trigger deleted" });
    });

    it("should return 404 if trigger is not found", async () => {
      (prisma.trigger.delete as jest.Mock).mockRejectedValue({ code: "P2025" });

      const res = await request(app).delete("/integrator/triggers/1");

      expect(res.status).toBe(404);
      expect(res.body).toEqual({ error: "Trigger not found" });
    });
  });
});
});