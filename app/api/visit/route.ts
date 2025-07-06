// app/api/visit/route.ts
import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import { headers } from 'next/headers'

const statsFile = path.resolve(process.cwd(), 'data/stats.json')

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get('x-forwarded-for') ||
      (await headers()).get('x-real-ip') ||
      'unknown'

    const rawData = fs.readFileSync(statsFile, 'utf-8')
    const stats = JSON.parse(rawData)

    stats.totalVisits += 1

    if (!stats.uniqueVisitors.includes(ip)) {
      stats.uniqueVisitors.push(ip)
    }

    fs.writeFileSync(statsFile, JSON.stringify(stats, null, 2))

    return NextResponse.json({
      totalVisits: stats.totalVisits,
      uniqueVisitors: stats.uniqueVisitors.length
    })
  } catch (error) {
    console.error('Error writing to stats file:', error)
    return new NextResponse('Error updating stats', { status: 500 })
  }
}