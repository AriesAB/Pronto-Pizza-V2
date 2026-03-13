import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_APP_PASSWORD;

    if (!gmailUser || !gmailPass) {
      console.error('Missing GMAIL_USER or GMAIL_APP_PASSWORD environment variables');
      return NextResponse.json(
        { error: 'Email service is not configured. Please try again later.' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    await transporter.sendMail({
      from: `"PRONTO Pizza Website" <${gmailUser}>`,
      to: gmailUser,
      replyTo: email,
      subject: `New Contact Form Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #0a0a0a; padding: 30px; border-radius: 12px 12px 0 0;">
            <h1 style="color: #FF5A1F; margin: 0; font-size: 24px;">New Message from Website</h1>
          </div>
          <div style="background-color: #1a1a1a; padding: 30px; color: #FEFBF6;">
            <p style="margin: 0 0 8px 0; color: #FF5A1F; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">From</p>
            <p style="margin: 0 0 20px 0; font-size: 18px;">${name}</p>
            <p style="margin: 0 0 8px 0; color: #FF5A1F; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">Email</p>
            <p style="margin: 0 0 20px 0; font-size: 18px;"><a href="mailto:${email}" style="color: #FF5A1F;">${email}</a></p>
            <p style="margin: 0 0 8px 0; color: #FF5A1F; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">Message</p>
            <p style="margin: 0; font-size: 16px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          <div style="background-color: #0a0a0a; padding: 20px; border-radius: 0 0 12px 12px; text-align: center;">
            <p style="margin: 0; color: #666; font-size: 12px;">Sent from yycpronto.com contact form</p>
          </div>
        </div>
      `,
    });

    await transporter.sendMail({
      from: `"PRONTO Pizza" <${gmailUser}>`,
      to: email,
      subject: 'Thanks for reaching out to PRONTO Pizza!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #0a0a0a; padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">
            <h1 style="color: #FF5A1F; margin: 0; font-size: 28px;">PRONTO</h1>
            <p style="color: #FEFBF6; margin: 8px 0 0 0; font-size: 14px; letter-spacing: 3px;">PIZZA</p>
          </div>
          <div style="background-color: #1a1a1a; padding: 30px; color: #FEFBF6;">
            <p style="font-size: 18px; margin: 0 0 16px 0;">Hi ${name},</p>
            <p style="font-size: 16px; line-height: 1.6; margin: 0 0 16px 0;">
              Thank you for reaching out to us! We've received your message and will get back to you as soon as possible.
            </p>
            <p style="font-size: 16px; line-height: 1.6; margin: 0 0 24px 0;">
              In the meantime, feel free to give us a call or visit one of our locations:
            </p>
            <div style="background-color: #0a0a0a; padding: 20px; border-radius: 8px; margin: 0 0 16px 0;">
              <p style="color: #FF5A1F; font-size: 14px; margin: 0 0 8px 0; font-weight: bold;">INGLEWOOD</p>
              <p style="margin: 0 0 4px 0; font-size: 14px;">1139 9th Ave SE, Calgary</p>
              <p style="margin: 0; font-size: 14px;">(403) 926-7717</p>
            </div>
            <div style="background-color: #0a0a0a; padding: 20px; border-radius: 8px;">
              <p style="color: #FF5A1F; font-size: 14px; margin: 0 0 8px 0; font-weight: bold;">DOWNTOWN</p>
              <p style="margin: 0 0 4px 0; font-size: 14px;">605 5th Ave SW, Calgary</p>
              <p style="margin: 0; font-size: 14px;">403-993-9093</p>
            </div>
          </div>
          <div style="background-color: #0a0a0a; padding: 20px; border-radius: 0 0 12px 12px; text-align: center;">
            <p style="margin: 0; color: #FF5A1F; font-size: 12px;">Made with ❤️ by the Bruno Family</p>
            <p style="margin: 8px 0 0 0; color: #666; font-size: 11px;">© 2026 PRONTO Pizza. All rights reserved.</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
