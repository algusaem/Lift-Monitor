"use server";
import pool from "@/lib/db";
import { getUserId } from "@/lib/getUserId";

export async function getExerciseLog() {
  const user_id = await getUserId();

  const { rows: logs } = await pool.query(
    `
    SELECT 
      el.id,
      el.date,
      el.form_quality,
      el.notes,
      el.created_at,
      el.exercise_id,
      ex.name AS exercise_name,
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
    INNER JOIN exercises ex ON ex.id = el.exercise_id
    WHERE el.user_id = $1
    GROUP BY el.id, el.exercise_id, ex.name
    ORDER BY el.date DESC
    `,
    [user_id]
  );

  return logs;
}
