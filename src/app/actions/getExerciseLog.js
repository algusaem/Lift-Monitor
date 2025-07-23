"use server";
import pool from "@/lib/db";
import { getUserId } from "@/lib/getUserId";

export async function getExerciseLog() {
  const user_id = await getUserId();

  const { rows: logs } = await pool.query(
    `
    SELECT 
      el.*, 
      COALESCE(
        json_agg(
          json_build_object(
            'weight', s.weight,
            'reps', s.reps
          )
        ) FILTER (WHERE s.id IS NOT NULL),
        '[]'
      ) AS sets
    FROM exercise_logs el
    LEFT JOIN sets s ON s.log_id = el.id
    WHERE el.user_id = $1
    GROUP BY el.id
    ORDER BY el.date DESC
    `,
    [user_id]
  );

  return logs;
}
