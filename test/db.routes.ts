import { Router, Request, Response } from "express";
import { OCI } from "../src/database/OCI";
import oracledb from "oracledb";

export const dbRoutes = Router()
  .get(
    "/",
    async (req: Request, res: Response) => {
      const db = await OCI.intitialize();
      const connection = await db.getConnection();

      const result = await connection.execute(
        'SELECT * FROM USERS WHERE ROWNUM < 10',
        [],
        { outFormat: oracledb.OUT_FORMAT_OBJECT }
      );

      res.json({ result: result.rows });
      return;
    }
  )