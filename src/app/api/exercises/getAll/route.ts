import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET() {
  try {
    const result = await db.query("SELECT name, muscle_group FROM exercises");
    return NextResponse.json(result.rows);
  } catch (err) {
    console.error("DB error:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
