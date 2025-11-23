"use server";
import pool from "@/lib/db";
import { getUserId } from "@/lib/getUserId";

export async function getTrainingsByMonth() {
  const user_id = await getUserId();

  const { rows } = await pool.query(
    `
    SELECT 
      TO_CHAR(date, 'Mon') as month,
      EXTRACT(MONTH FROM date) as month_num,
      COUNT(DISTINCT date) as trainings
    FROM exercise_logs
    WHERE user_id = $1 
      AND EXTRACT(YEAR FROM date) = EXTRACT(YEAR FROM CURRENT_DATE)
    GROUP BY month_num, month
    ORDER BY month_num
    `,
    [user_id]
  );

  // Create full year data with 0 for months without training
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const monthData = months.map((month, index) => {
    const found = rows.find((r) => parseInt(r.month_num) === index + 1);
    return {
      month,
      trainings: found ? parseInt(found.trainings) : 0,
    };
  });

  return monthData;
}

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
