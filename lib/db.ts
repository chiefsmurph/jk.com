// lib/db.ts
import { promises as fs } from 'fs';

export type Code = {
  value: string;
  redeemed: boolean;
  redeemedAt: string | null;
  user: { name: string; fact: string } | null;
};

const FILE = 'db.json';

export async function readCodes(): Promise<Code[]> {
  try {
    const data = await fs.readFile(FILE, 'utf8');
    return JSON.parse(data).codes || [];
  } catch {
    return [];
  }
}

export async function writeCodes(codes: Code[]) {
  await fs.writeFile(FILE, JSON.stringify({ codes }, null, 2));
}

export function generateCode(): Code['value'] {
  const animals = ['BEAR', 'LION', 'WOLF', 'ZEBRA', 'TIGER', 'EAGLE', 'SHARK', 'RAVEN', 'SNAKE'];
  const safeLetters = 'ABCDEFGHJKMNPQRSTUVWXYZ';
  const safeNumbers = '23456789';

  const animal = animals[Math.floor(Math.random() * animals.length)];
  const nums = Array.from({ length: 3 }, () => safeNumbers[Math.floor(Math.random() * safeNumbers.length)]).join('');
  const letter = safeLetters[Math.floor(Math.random() * safeLetters.length)];
  return `${animal}-${nums}${letter}`;
}

export const ADMIN_SECRET = process.env.ADMIN_SECRET || 'alphabetsoup';
