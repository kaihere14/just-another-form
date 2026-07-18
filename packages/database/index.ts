import "dotenv/config";

import { env } from "./env";
import { logger } from "@repo/logger"
import mongoose from "mongoose";

export class Database {
  public async connectDb() {
    try {
      await mongoose.connect(env.DATABASE_URI);
      logger.info("Connected to MongoDB");
    } catch (error) {
      logger.error("Failed to connect to MongoDB", error);
    }
  }
}
