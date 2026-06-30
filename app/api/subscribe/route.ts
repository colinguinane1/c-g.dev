import { NextRequest, NextResponse } from "next/server";
import { LoopsClient } from "loops";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.LOOPS_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { success: false, error: "Service unavailable" },
        { status: 503 }
      );
    }

    const body = await request.json();
    const email = typeof body?.email === "string" ? body.email.trim() : "";

    if (!email || !EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email address" },
        { status: 400 }
      );
    }

    const loops = new LoopsClient(apiKey);
    const resp = await loops.updateContact(email, { signupSource: "website" });

    if (!resp.success) {
      return NextResponse.json(
        { success: false, error: "Subscription failed" },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, error: "Something went wrong" },
      { status: 500 }
    );
  }
}
