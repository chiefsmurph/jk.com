import { NextRequest, NextResponse } from "next/server";

const BLOCKED_IPS = {
  "75.177.2.84":
    "Wishing you all the best, but you have been blocked.  Too many messages.  Please respect this.",
};

export function middleware(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") || "unknown";

  console.log("Incoming IP:", ip);
  const foundBlockedMessage = Object.entries(BLOCKED_IPS).find(
    ([ipMatch]) => ipMatch === ip
  )?.[1];

  if (foundBlockedMessage) {
    return new NextResponse(foundBlockedMessage, {
      status: 403,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }

  return NextResponse.next();
}
