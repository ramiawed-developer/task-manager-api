import request from "supertest";
import { app } from "../../src/app";

describe("App integration tests", () => {
  describe("GET /health", () => {
    it("returns service health status", async () => {
      const response = await request(app).get("/health");

      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        status: "ok",
        service: "task-manager-api",
      });
    });
  });

  describe("GET /api/info", () => {
    it("return API information", async () => {
      const response = await request(app).get("/api/info");

      expect(response.status).toBe(200);
      expect(response.body.name).toBe("task-manager-api");
      expect(response.body.version).toBeDefined();
      expect(response.body.commitSha).toBeDefined();
      expect(response.body.environment).toBeDefined();
      expect(response.body.features).toBeDefined();
      expect(response.body.features.tasksApi).toBeDefined();
    });
  });

  describe("GET /tasks", () => {
    it("return disabled message when tasks API feature flag is off", async () => {
      const response = await request(app).get("/tasks");

      expect(response.status).toBe(404);
      expect(response.body.message).toEqual("Tasks API is disabled");
    });
  });
});
