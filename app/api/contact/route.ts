import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // 1️⃣ Send notification to admin
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "sahil.arora3139@gmail.com",
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    // 2️⃣ Send confirmation to user
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Thank you for contacting TechShieldAnalytics",
      html: `
        <h2>Hi ${name},</h2>
        <p>Thank you for reaching out to us.</p>
        <p>We’ve received your message and will get back to you within 24 hours.</p>
        <br/>
        <p>Best Regards,<br/>TechShieldAnalytics Team</p>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Email failed" }, { status: 500 });
  }
}