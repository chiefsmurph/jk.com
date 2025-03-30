// 📦app/api/generate/route.ts
import { NextResponse } from "next/server";
import { generateCode, readCodes, writeCodes } from "@/lib/db";

export async function POST(req: Request) {
  const { count } = await req.json();
  const codes = await readCodes();
  const newCodes = Array.from({ length: count }, () => {
    const value = generateCode();
    return { value, redeemed: false, redeemedAt: null, user: null };
  });
  codes.push(...newCodes);
  await writeCodes(codes);
  return NextResponse.json({ codes: newCodes.map((c) => c.value) });
}
