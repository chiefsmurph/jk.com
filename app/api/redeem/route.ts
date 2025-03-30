// app/api/redeem/route.ts
import { NextResponse } from 'next/server';
import { readCodes, writeCodes } from '@/lib/db';

export async function POST(req: Request) {
  const { code, name, fact } = await req.json();
  const db = await readCodes();
  const target = db.find(c => c.value === code);

  if (!target || target.redeemed) {
    return NextResponse.json({ success: false });
  }

  target.redeemed = true;
  target.redeemedAt = new Date().toISOString();
  target.user = { name, fact };

  await writeCodes(db);

  return NextResponse.json({ success: true });
}
