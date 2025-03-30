import { NextResponse } from 'next/server';
import { readCodes } from '@/lib/db';

export async function GET() {
  const db = await readCodes();
  const users = db.filter(c => c.redeemed && c.user).map(c => c.user);
  return NextResponse.json(users);
}
