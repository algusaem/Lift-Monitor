/* eslint-disable no-undef */
import { cookies } from "next/headers";
import { jwtVerify } from "jose";

const rawSecret = process.env.JWT_SECRET;
if (!rawSecret) throw new Error("JWT_SECRET env var not set");

const JWT_SECRET = new TextEncoder().encode(rawSecret);

export async function getUserId() {
  const token = cookies().get("session")?.value;
  if (!token) throw new Error("Unauthorized");

  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    return payload.id;
  } catch {
    throw new Error("Invalid token");
  }
}
