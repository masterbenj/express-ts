import oracledb, { createPool } from "oracledb";
import { ociDbConfig } from "../config/database";

/**
 * OCI Database class for connection
 */
export class OCI {
  private static pool: oracledb.Pool;

  static async intitialize(): Promise<typeof OCI> {
    try {
      this.pool = await createPool(ociDbConfig);
      return this;
    } catch (err) {
      console.error("Error creating pool:", err);
      throw err;
    }
  }

  static async closePool(): Promise<typeof OCI> {
    try {
      await this.pool?.close();
      return this;
    } catch (err) {
      console.error('Error closing pool:', err);
      throw err;
    }
  }

  static async getConnection(): Promise<oracledb.Connection> {
    return await this.pool.getConnection();
  }
}