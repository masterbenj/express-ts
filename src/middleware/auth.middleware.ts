import { Request, Response, NextFunction } from "express";

const auth = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.status(401).json({ error: "No authorization header" });
    return;
  }
    
  next();
}