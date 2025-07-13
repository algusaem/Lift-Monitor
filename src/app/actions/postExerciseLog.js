"use server";

import pool from "@/lib/db";
import { randomUUID } from "crypto";
import { getUserId } from "../../lib/getUserId";

export async function logExercise({
  exercise_id,
  date,
  form_quality,
  notes,
  sets,
}) {
  const user_id = await getUserId();

  if (
    !user_id ||
    !exercise_id ||
    !date ||
    typeof form_quality !== "number" ||
    !Array.isArray(sets) ||
    sets.length === 0
  ) {
    throw new Error("Missing or invalid data");
  }

  const client = await pool.connect();

  try {
    await client.query("BEGIN");

    const log_id = randomUUID();

    await client.query(
      `
      INSERT INTO exercise_logs (id, user_id, exercise_id, date, form_quality, notes)
      VALUES ($1, $2, $3, $4, $5, $6)
      `,
      [log_id, user_id, exercise_id, date, form_quality, notes]
    );

    for (let i = 0; i < sets.length; i++) {
      const set = sets[i];

      if (typeof set.reps !== "number" || typeof set.weight !== "number") {
        throw new Error(`Invalid set at index ${i}`);
      }

      await client.query(
        `
        INSERT INTO sets (id, log_id, set_number, weight, reps)
        VALUES ($1, $2, $3, $4, $5)
        `,
        [randomUUID(), log_id, i + 1, set.weight, set.reps]
      );
    }

    await client.query("COMMIT");
    return { success: true, log_id };
  } catch (err) {
    await client.query("ROLLBACK");
    console.error("logExercise error:", err);
    throw err;
  } finally {
    client.release();
  }
}
