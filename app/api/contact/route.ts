// import { NextRequest, NextResponse } from 'next/server'

// export async function POST(request: NextRequest) {
//   try {
//     const body = await request.json()
//     const { name, email, subject, message } = body

//     // Validate required fields
//     if (!name || !email || !subject || !message) {
//       return NextResponse.json(
//         { error: 'All fields are required' },
//         { status: 400 }
//       )
//     }

//     // Here you would typically:
//     // 1. Send an email using a service like SendGrid, Resend, or Nodemailer
//     // 2. Save to a database
//     // 3. Send to a webhook service like Zapier

//     // For demo purposes, we'll just log the data
//     console.log('Contact form submission:', {
//       name,
//       email,
//       subject,
//       message,
//       timestamp: new Date().toISOString()
//     })

//     // Simulate processing time
//     await new Promise(resolve => setTimeout(resolve, 1000))

//     return NextResponse.json(
//       { message: 'Message sent successfully!' },
//       { status: 200 }
//     )
//   } catch (error) {
//     console.error('Contact form error:', error)
//     return NextResponse.json(
//       { error: 'Failed to send message' },
//       { status: 500 }
//     )
//   }
// }


import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "reda.3bdelb3ry@gmail.com", // ✨ هنا حط ايميلك اللي عايز تستقبل عليه
      subject: subject,
      html: `
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}