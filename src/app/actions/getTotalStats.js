"use server";
import pool from "@/lib/db";
import { getUserId } from "@/lib/getUserId";

export async function getTotalStats() {
  const user_id = await getUserId();

  const { rows } = await pool.query(
    `
    SELECT 
      COUNT(DISTINCT el.date) as total_workouts,
      COUNT(DISTINCT el.exercise_id) as total_exercises,
      COALESCE(SUM(s.weight * s.reps), 0) as total_volume
    FROM exercise_logs el
    LEFT JOIN sets s ON s.log_id = el.id
    WHERE el.user_id = $1
      AND EXTRACT(YEAR FROM el.date) = EXTRACT(YEAR FROM CURRENT_DATE)
    `,
    [user_id]
  );

  return {
    totalWorkouts: parseInt(rows[0]?.total_workouts || 0),
    totalExercises: parseInt(rows[0]?.total_exercises || 0),
    totalVolume: parseFloat(rows[0]?.total_volume || 0),
  };
}
