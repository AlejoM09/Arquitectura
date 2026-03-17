import express            from "express";
import camisaRoutes       from "./infrastructure/config/routes/camisaRoutes.js";
import tallaRoutes        from "./infrastructure/config/routes/tallaRoutes.js";
import { buildContainer } from "./infrastructure/config/container.js";

const app = express();
app.use(express.json());

export async function createApp() {
  const { camisaController, tallaController } = await buildContainer();
  app.use("/api", camisaRoutes(camisaController));
  app.use("/api", tallaRoutes(tallaController));
  return app;
}

export default app;
