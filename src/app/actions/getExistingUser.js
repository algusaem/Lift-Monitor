"use server";
import pool from "@/lib/db";
import bcrypt from "bcrypt";

const checkUserCredentials = async (email, password) => {
  if (!email || !password) throw new Error("No password or email provided");

  const lowerEmail = email.toLowerCase();

  const result = await pool.query(
    "SELECT id, password FROM users WHERE LOWER(email) = $1 LIMIT 1",
    [lowerEmail]
  );

  if (result.rowCount === 0) throw new Error("User not found");

  const user = result.rows[0];
  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) throw new Error("Invalid password");

  return { success: true, id: user.id };
};

export default checkUserCredentials;
