"use server";
import pool from "@/lib/db";
import { getUserId } from "@/lib/getUserId";

export async function getExerciseLog() {
  const user_id = await getUserId(); // User id comes from session

  const { rows: exercise_log } = await pool.query(
    "SELECT * FROM exercise_logs WHERE user_id = $1",
    [user_id]
  );
  if (exercise_log.length === 0) return [];

  return exercise_log;
}
