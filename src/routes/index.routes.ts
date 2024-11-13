import { Router, Request, Response } from "express";

export const indexRoutes = Router()
  .get(
    "/",
    async (req: Request, res: Response) => {
      res.json({ name: "GIIS API (TIP)", version: "1.0.0" });
    },
  )