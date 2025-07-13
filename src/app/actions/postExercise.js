"use server";
import pool from "@/lib/db";

export async function postExercise(name) {
  if (!name) throw new Error("No name provided");

  const lower = name.toLowerCase();

  const existing = await pool.query(
    "SELECT 1 FROM exercises WHERE LOWER(name) = $1 LIMIT 1",
    [lower]
  );

  if (existing.rows.length > 0) throw new Error("Exercise already exists");

  await pool.query("INSERT INTO exercises(name) VALUES($1)", [name]);
}
