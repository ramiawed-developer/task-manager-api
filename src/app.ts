import express from "express";
import { env } from "./config/env";

export const app = express();

app.use(express.json());

app.get("/health", (_req, res) => {
  return res.status(200).json({
    status: "ok",
    service: "task-manager-api",
  });
});

app.get("/api/info", (_req, res) => {
  res.status(200).json({
    name: "task-manager-api",
    version: env.appVersion,
    commitSha: env.commitSha,
    environment: env.nodeEnv,
    features: {
      tasksApi: env.enableTasksApi,
    },
  });
});

app.get("/tasks", (_req, res) => {
  if (!env.enableTasksApi) {
    return res.status(404).json({
      message: "Tasks API is disabled",
    });
  }

  return res.status(200).json({
    tasks: [],
  });
});
