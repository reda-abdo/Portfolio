import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>", // لازم دومين متوافق مع Resend
      to: "reda.3bdelb3ry@gmail.com", // ايميلك
      subject: `New message from ${body.name}`,
      text: body.message,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
