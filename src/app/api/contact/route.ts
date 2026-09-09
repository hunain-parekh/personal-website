import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const { SMTP_EMAIL, SMTP_PASSWORD, SMTP_HOST, CONTACT_RECIPIENT } =
      process.env;

    if (!SMTP_EMAIL || !SMTP_PASSWORD) {
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST || "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: SMTP_EMAIL,
        pass: SMTP_PASSWORD,
      },
    });

    const recipient = CONTACT_RECIPIENT || SMTP_EMAIL;
    const safeName = String(name).slice(0, 100);
    const safeEmail = String(email).slice(0, 200);
    const safeMessage = String(message).slice(0, 5000);

    const escapeHtml = (s: string) =>
      s
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

    await transporter.sendMail({
      from: `"Portfolio Contact" <${SMTP_EMAIL}>`,
      to: recipient,
      replyTo: safeEmail,
      subject: `Site message from ${safeName}`,
      text: `Name: ${safeName}\nEmail: ${safeEmail}\n\nMessage:\n${safeMessage}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #eef0ec; color: #191d24;">
          <h2 style="font-weight: 500; border-bottom: 1px solid #cdd2cb; padding-bottom: 12px;">New message from the site</h2>
          <p><strong>Name:</strong> ${escapeHtml(safeName)}</p>
          <p><strong>Email:</strong> ${escapeHtml(safeEmail)}</p>
          <p style="margin-top: 20px;"><strong>The process they do by hand:</strong></p>
          <p style="white-space: pre-wrap; line-height: 1.6;">${escapeHtml(safeMessage)}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
