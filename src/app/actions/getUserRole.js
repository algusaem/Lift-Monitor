"use server";
import pool from "@/lib/db";
import { getUserId } from "@/lib/getUserId";

export async function getUserRole() {
  const user_id = await getUserId();

  if (!user_id) return null;

  const query = `
    SELECT r.name AS role
    FROM users u
    JOIN roles r ON u.role_id = r.id
    WHERE u.id = $1
    LIMIT 1;
  `;

  const result = await pool.query(query, [user_id]);

  return result.rows[0]?.role || null;
}
