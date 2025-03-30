// 📊app/api/list/route.ts
import { readCodes } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  const codes = await readCodes();
  return NextResponse.json(codes);
}
