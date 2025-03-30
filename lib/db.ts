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

export function generateCode(existingCodes: Code[]): Code['value'] {
  const animals = ['FOX', 'OWL', 'DOG', 'BAT', 'ANT', 'CAT', 'EEL', 'RAM', 'COW', 'HEN', 'LION', 'WOLF', 'TIGER', 'EAGLE', 'SHARK', 'RAVEN', 'SNAKE'];
  const safeNumbers = '23456789ABCDEFGHJKMNPQRSTUVWXYZ'; // Avoid confusing characters

  let newCode;
  let isDuplicate = true;

  // Keep generating until we find a unique code
  while (isDuplicate) {
    const animal = animals[Math.floor(Math.random() * animals.length)];
    const nums = Array.from({ length: 2 }, () =>
      safeNumbers[Math.floor(Math.random() * safeNumbers.length)]
    ).join('');

    newCode = `${animal}-${nums}`;

    // Check if the new code already exists in the database
    isDuplicate = existingCodes.some((code) => code.value === newCode);
  }

  return newCode;
}

export const ADMIN_SECRET = process.env.ADMIN_SECRET || 'alphabetsoup';
