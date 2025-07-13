/* eslint-disable no-undef */

"use server";
import { cookies } from "next/headers";
import pool from "@/lib/db";
import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";

const postLogin = async (email, password) => {
  const JWT_SECRET = process.env.JWT_SECRET;

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

  // Create JWT with user ID
  const token = sign({ id: user.id }, JWT_SECRET, { expiresIn: "7d" });

  // Set cookie with the JWT
  cookies().set("session", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });

  return { success: true };
};

export default postLogin;
