"use server";
import pool from "@/lib/db";
import { getUserId } from "@/lib/getUserId";

export async function getExerciseProgress() {
  const user_id = await getUserId();

  const { rows } = await pool.query(
    `
    SELECT 
      ex.name as exercise_name,
      el.date,
      MAX(s.weight) as max_weight,
      SUM(s.weight * s.reps) as total_volume
    FROM exercise_logs el
    INNER JOIN exercises ex ON ex.id = el.exercise_id
    INNER JOIN sets s ON s.log_id = el.id
    WHERE el.user_id = $1
    GROUP BY ex.name, el.date, ex.id
    ORDER BY ex.name, el.date
    `,
    [user_id]
  );

  // Group by exercise and format for charts
  const exerciseMap = {};
  rows.forEach((row) => {
    if (!exerciseMap[row.exercise_name]) {
      exerciseMap[row.exercise_name] = [];
    }
    exerciseMap[row.exercise_name].push({
      date: row.date,
      maxWeight: parseFloat(row.max_weight),
      totalVolume: parseFloat(row.total_volume),
    });
  });

  return exerciseMap;
}
