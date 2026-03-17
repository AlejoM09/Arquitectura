import { Router } from "express";

export default function tallaRoutes(controller) {
  const router = Router();

  router.post("/tallas", (req, res) => controller.create(req, res));
  router.get("/tallas",  (req, res) => controller.getAll(req, res));

  return router;
}
