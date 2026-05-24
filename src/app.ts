import express from "express";

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
    version: "1.0.0",
    environment: process.env.NODE_ENV || "development",
  });
});
