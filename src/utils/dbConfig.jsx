import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

const sql = neon(
  "postgresql://beat_cancer_owner:1zSrscI0Rjly@ep-broad-king-a1ltnuy2.ap-southeast-1.aws.neon.tech/beat_cancer?sslmode=require",
);

export const db = drizzle(sql, { schema });
