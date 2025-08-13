import { NextResponse } from "next/server";
import axios from "axios";

const BUTTONDOWN_API_KEY = process.env.BUTTONDOWN_API_KEY;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("Request body:", body); // 👈 debug

    const email = body.email;
    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const response = await axios.post(
      "https://api.buttondown.com/v1/subscribers",
      { email_address: email, tags: ["beta"], },
      
      {
        headers: {
          Authorization: `Token ${BUTTONDOWN_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    if(response.status == 200) {
 return NextResponse.json({ success: false, data: response.data, error: response.data.detail });
    }

    return NextResponse.json({ success: true, data: response.data });
  } catch (error: any) {
    console.error("Error from Buttondown:", error.response?.data || error.message);
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
  }
}
