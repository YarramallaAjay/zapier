import request from "supertest";
import express from "express";
import triggerRouter from "../routes/TriggerRouterHandler";

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

const app = express();
app.use(express.json());
app.use("/integrator/triggers", triggerRouter);

const jwt="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIyYWMyMDYxZS1jNjBkLTRhNTEtOWViMS1lNGM1ZTMxMDNlYjEiLCJhY2Nlc3N0b2tlbiI6InlhMjkuYTBBWllrTlppYXpxRnp0R2VhOXQ5aTRFSzBlc2VsOGlKNzA3ODJKdGJrelgwM09VNVJaTWt2ZVBteVJJOVg2VnpKQXFkeVRuMkpYOHhoSndGbjBzREpoT05Bb2Y1aXlMY0VUMHc0eDlfSGlrZFZBUDc1cXVrc2h2R00temVhS05FSFBPWUkza0FMYWJnckp0Tnp0WWZ2NzN2dHRPT1ZMbHRzNk5hbHpPbW1sUWFDZ1lLQVM4U0FSQVNGUUhHWDJNaUdJcFZTVG1va1ZHSHhiSkN6bHZ1VVEwMTc3IiwiaWF0IjoxNzQ0MDUwNjU2fQ.RFUR6p2IGnuo2AzuJTM0wYKh8YWi7q51B-u9mGr9iCs";

describe("TriggerRouterHandler", () => {
  const { PrismaClient } = require("@prisma/client");
  const prisma = new PrismaClient();

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("GET /integrator/triggers", () => {
    it("should return all triggers", async () => {
      (prisma.availableTriggers.findMany as jest.Mock).mockResolvedValue([
        { id: "1", name: "Trigger 1", availableTriggerId: "trigger1" },
        { id: "2", name: "Trigger 2", availableTriggerId: "trigger2" },
      ]);

      const res = await request(app).get("/integrator/triggers").set("Authorization", jwt);

      expect(res.status).toBe(200);
      expect(res.body.data.length).toBe(2);
      expect(res.body.data[0]).toHaveProperty("availableTriggerId");
    });

    it("should return 404 when no triggers found", async () => {
      (prisma.availableTriggers.findMany as jest.Mock).mockResolvedValue([]);

      const res = await request(app).get("/integrator/triggers").set("Authorization", jwt);

      expect(res.status).toBe(404);
    });
  });

  describe("GET /integrator/triggers/:appId", () => {
    it("should return triggers by appId", async () => {
      (prisma.app.findFirst as jest.Mock).mockResolvedValue({
        id: "app1",
        triggers: [{ id: "t1", name: "Test Trigger", availableTriggerId: "trigger1" }],
      });

      const res = await request(app).get("/integrator/triggers/app1").set("Authorization", jwt);

      expect(res.status).toBe(200);
      expect(res.body.data).toHaveLength(1);
      expect(res.body.data[0]).toHaveProperty("availableTriggerId");
    });

    it("should return 404 if no triggers found for appId", async () => {
      (prisma.app.findFirst as jest.Mock).mockResolvedValue(null);

      const res = await request(app).get("/integrator/triggers/app1").set("Authorization", jwt);

      expect(res.status).toBe(404);
    });
  });

  describe("POST /integrator/triggers", () => {
    it("should create a new trigger", async () => {
      (prisma.availableTriggers.create as jest.Mock).mockResolvedValue({
        id: "1",
        name: "Trigger 1",
        availableTriggerId: "trigger1",
      });

      const res = await request(app)
        .post("/integrator/triggers")
        .set("Authorization", jwt)
        .send({
          name: "Trigger 1",
          description: "Desc",
          appId: "app1",
          metadata: {},
          configMetadata: {},
          type: "manual",
        });

      expect(res.status).toBe(201);
      expect(res.body.data).toHaveProperty("availableTriggerId");
    });

    it("should return 400 for missing fields", async () => {
      const res = await request(app).post("/integrator/triggers").send({});
      expect(res.status).toBe(400);
    });
  });

  describe("PUT /integrator/triggers/:appId/:id", () => {
    it("should update a trigger", async () => {
      (prisma.availableTriggers.update as jest.Mock).mockResolvedValue({
        id: "1",
        name: "Updated",
        availableTriggerId: "trigger1",
      });

      const res = await request(app)
        .put("/integrator/triggers/app1/1")
        .set("Authorization", jwt)
        .send({ name: "Updated" });

      expect(res.status).toBe(200);
      expect(res.body.data).toHaveProperty("availableTriggerId");
    });

    it("should return 404 for unknown trigger", async () => {
      (prisma.availableTriggers.update as jest.Mock).mockRejectedValue({ code: "P2025" });

      const res = await request(app)
        .put("/integrator/triggers/app1/1")
        .set("Authorization", jwt)
        .send({ name: "Updated" });

      expect(res.status).toBe(404);
    });
  });

  describe("DELETE /integrator/triggers/:id", () => {
    it("should delete a trigger", async () => {
      (prisma.availableTriggers.delete as jest.Mock).mockResolvedValue({});

      const res = await request(app).delete("/integrator/triggers/1").set("Authorization", jwt);

      expect(res.status).toBe(200);
    });

    it("should return 404 if trigger not found", async () => {
      (prisma.availableTriggers.delete as jest.Mock).mockRejectedValue({ code: "P2025" });

      const res = await request(app).delete("/integrator/triggers/1").set("Authorization", jwt);

      expect(res.status).toBe(404);
    });
  });
});