import { app } from "./app";
import { env } from "./config/env";

app.listen(env.port, () => {
  console.log(`Task manager API is running on port ${env.port}`);
});
