export const env = {
  nodeEnv: process.env.NODE_ENV || "development",
  port: process.env.PORT || "3000",
  enableTasksApi: process.env.ENABLE_TASKS_API === "true",
  appVersion: process.env.APP_VERSION || "local",
  commitSha: process.env.COMMIT_SHA || "local",
};
