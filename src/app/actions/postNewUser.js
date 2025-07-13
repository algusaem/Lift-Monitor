"use server";
import pool from "@/lib/db";
import { randomUUID } from "crypto";
import bcrypt from "bcrypt";

const SALT_ROUNDS = 12;

const postNewUser = async (email, password, username) => {
  if (!email || !password || !username)
    throw new Error("No password, email or username provided");

  const lowerUsername = username.toLowerCase();
  const lowerEmail = email.toLowerCase();

  const existingUsername = await pool.query(
    "SELECT 1 FROM users WHERE LOWER(username) = $1 LIMIT 1",
    [lowerUsername]
  );

  const existingEmail = await pool.query(
    "SELECT 1 FROM users WHERE LOWER(email) = $1 LIMIT 1",
    [lowerEmail]
  );

  if (existingUsername.rowCount > 0) throw new Error("Username already exists");
  if (existingEmail.rowCount > 0) throw new Error("Email already exists");

  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
  const id = randomUUID();

  await pool.query(
    "INSERT INTO users (id, email, username, password) VALUES ($1, $2, $3, $4)",
    [id, lowerEmail, lowerUsername, hashedPassword]
  );

  return { success: true, id };
};

export default postNewUser;
