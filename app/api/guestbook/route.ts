import fs from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";

const filePath = path.join(process.cwd(), "data", "guestbook.json");

export async function GET() {
  try {
    const data = fs.existsSync(filePath)
      ? JSON.parse(fs.readFileSync(filePath, "utf8"))
      : [];
    const allApproved = data.filter((entry) => entry.isApproved);
    return NextResponse.json(data);
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to read guestbook" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get("x-forwarded-for") ||
      (await headers()).get("x-real-ip") ||
      "unknown";

    const body = await req.json();
    const entry = {
      name: body.name,
      favorite: body.favorite,
      inspiration: body.inspiration,
      timestamp: new Date().toISOString(),
      ip,
      isApproved: false,
    };

    const data = fs.existsSync(filePath)
      ? JSON.parse(fs.readFileSync(filePath, "utf8"))
      : [];

    data.push(entry);

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false, error: "Failed to save entry" },
      { status: 500 }
    );
  }
}
