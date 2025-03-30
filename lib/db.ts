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
  const animals = ['FOX', 'OWL', 'DOG', 'BAT', 'ANT', 'CAT', 'EEL', 'RAM', 'COW', 'HEN', 'LION', 'WOLF', 'TIGER', 'EAGLE', 'SHARK', 'RAVEN', 'SNAKE'];
  const safeNumbers = '23456789ABCDEFGHJKMNPQRSTUVWXYZ'; // Avoid confusing characters

  const animal = animals[Math.floor(Math.random() * animals.length)];
  const nums = Array.from({ length: 2 }, () =>
    safeNumbers[Math.floor(Math.random() * safeNumbers.length)]
  ).join('');

  return `${animal}-${nums}`;
}

export const ADMIN_SECRET = process.env.ADMIN_SECRET || 'alphabetsoup';
