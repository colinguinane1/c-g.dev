import { NextRequest, NextResponse } from "next/server";
import { LoopsClient } from "loops";

const loops = new LoopsClient(process.env.LOOPS_API_KEY as string);

export async function POST(request: NextRequest) {
  const res = await request.json();

  const email = res["email"];

  // Note: updateContact() will create or update a contact

  const resp: {
    success: boolean,
    id?: string,
    message?: string
  } = await loops.updateContact(email, { signupSource: "website"});

  return NextResponse.json({ success: resp.success });
}