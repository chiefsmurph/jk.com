// app/api/validate-code/route.ts
import { NextResponse } from 'next/server';
import { readCodes } from '@/lib/db';

export async function POST(req: Request) {
  const { code } = await req.json();
  const db = await readCodes();
  const target = db.find(c => c.value === code);

  if (!target) return NextResponse.json({ valid: false });
  if (target.redeemed && target.user)
    return NextResponse.json({ valid: false, alreadyRedeemed: true });

  return NextResponse.json({ valid: true });
}
