# EXPRESS TS

Express web framework using Typescript

This framework uses:

- [Express-js](https://github.com/expressjs/express)
- [Typescript](https://github.com/microsoft/TypeScript)

> [!WARNING]
> THIS LIBRARY IS A WORK IN PROGRESS! ANYTHING CAN CHANGE AT ANY MOMENT WITHOUT ANY NOTICE! PLEASE DO NOT USE IN PRODUCTION!

```ts
// src/app.ts
/** Routes */
import { helloWorldRoutes } from "./routes/helloworld.routes";
app.use("/helloworld", helloWorldRoutes)

// src/routes/helloworld.routes.ts
import { Router, Request, Response } from "express";

export const helloWorldRoutes = Router()
  .get(
    "/",
    async (req: Request, res: Response) => {
      res.json({ message: "Hello, World!" });
    },
  )
```

```bash
npm install express @types/express typescript ts-node @types/node
```

```bash
npm run dev
```
View the website at: http://localhost:3000