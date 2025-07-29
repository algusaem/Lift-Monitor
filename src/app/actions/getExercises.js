"use server";
import pool from "@/lib/db";

export async function getExercises() {
  const exercises = (
    await pool.query("SELECT id, name FROM exercises ORDER BY name ASC")
  ).rows;

  if (!exercises || exercises.length === 0) return null;

  return exercises;
}
