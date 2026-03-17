import { Router } from "express";

export default function camisaRoutes(controller) {
  const router = Router();

  router.post("/camisas", (req, res) => controller.create(req, res));
  router.get("/camisas",  (req, res) => controller.getAll(req, res));

  return router;
}
