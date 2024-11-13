import express, { Request, Response, NextFunction } from "express";

/** Routes Imports */
import { indexRoutes } from "./routes/index.routes";

const app = express();
const port = 3000;

/** App Middlewares Setup */
app.use(express.json());

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

/** Routes */
app.use("/", indexRoutes);

/** App Start */
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});