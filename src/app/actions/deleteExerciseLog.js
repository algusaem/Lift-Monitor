"use server";

import pool from "@/lib/db";
import { getUserId } from "../../lib/getUserId";

export async function deleteExerciseLog({ log_id }) {
  const user_id = await getUserId();
  if (!user_id || !log_id) {
    throw new Error("Missing or invalid data");
  }

  const client = await pool.connect();

  try {
    await client.query("BEGIN");

    const { rows } = await client.query(
      `
      SELECT id
      FROM exercise_logs
      WHERE id = $1 AND user_id = $2
      FOR UPDATE
      `,
      [log_id, user_id]
    );

    if (rows.length === 0) {
      throw new Error("Log not found");
    }

    await client.query(
      `
      DELETE FROM sets
      WHERE log_id = $1
      `,
      [log_id]
    );

    const { rowCount } = await client.query(
      `
      DELETE FROM exercise_logs
      WHERE id = $1 AND user_id = $2
      `,
      [log_id, user_id]
    );

    if (rowCount !== 1) {
      throw new Error("Delete failed");
    }

    await client.query("COMMIT");
    return { success: true };
  } catch (err) {
    await client.query("ROLLBACK");
    throw err;
  } finally {
    client.release();
  }
}
