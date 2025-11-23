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
