import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 5000;

const ipRequestMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60 * 1000;

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

function stripControlChars(str: string): string {
  return str.replace(/[\r\n\t\0]/g, ' ');
}

function stripControlCharsKeepNewlines(str: string): string {
  return str.replace(/[\r\t\0]/g, ' ');
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = ipRequestMap.get(ip);

  if (!entry || now > entry.resetAt) {
    ipRequestMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }

  if (entry.count >= RATE_LIMIT) {
    return true;
  }

  entry.count += 1;
  return false;
}

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
      request.headers.get('x-real-ip') ??
      'unknown';

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please wait a minute before trying again.' },
        { status: 429 }
      );
    }

    const body = await request.json();

    const rawName = typeof body.name === 'string' ? body.name.trim() : '';
    const rawEmail = typeof body.email === 'string' ? body.email.trim() : '';
    const rawMessage = typeof body.message === 'string' ? body.message.trim() : '';

    if (!rawName || !rawEmail || !rawMessage) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    if (rawName.length > MAX_NAME_LENGTH) {
      return NextResponse.json({ error: 'Name is too long.' }, { status: 400 });
    }
    if (rawEmail.length > MAX_EMAIL_LENGTH) {
      return NextResponse.json({ error: 'Email address is too long.' }, { status: 400 });
    }
    if (rawMessage.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json(
        { error: `Message must be under ${MAX_MESSAGE_LENGTH} characters.` },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(rawEmail)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    const safeName = stripControlChars(rawName);
    const safeEmail = stripControlChars(rawEmail);
    const safeMessage = stripControlCharsKeepNewlines(rawMessage);

    const htmlName = escapeHtml(safeName);
    const htmlEmail = escapeHtml(safeEmail);
    const htmlMessage = escapeHtml(safeMessage).replace(/\n/g, '<br>');

    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_APP_PASSWORD;
    const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL?.trim();

    if (!gmailUser || !gmailPass || !recipientEmail || !emailRegex.test(recipientEmail)) {
      console.error('Contact email configuration is missing or invalid');
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
        to: recipientEmail,
        replyTo: safeEmail,
        subject: `New Contact Form Message from ${safeName}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background-color: #0a0a0a; padding: 30px; border-radius: 12px 12px 0 0;">
              <h1 style="color: #FF5A1F; margin: 0; font-size: 24px;">New Message from Website</h1>
            </div>
            <div style="background-color: #1a1a1a; padding: 30px; color: #FEFBF6;">
              <p style="margin: 0 0 8px 0; color: #FF5A1F; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">From</p>
              <p style="margin: 0 0 20px 0; font-size: 18px;">${htmlName}</p>
              <p style="margin: 0 0 8px 0; color: #FF5A1F; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">Email</p>
              <p style="margin: 0 0 20px 0; font-size: 18px;"><a href="mailto:${htmlEmail}" style="color: #FF5A1F;">${htmlEmail}</a></p>
              <p style="margin: 0 0 8px 0; color: #FF5A1F; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">Message</p>
              <p style="margin: 0; font-size: 16px; line-height: 1.6;">${htmlMessage}</p>
            </div>
            <div style="background-color: #0a0a0a; padding: 20px; border-radius: 0 0 12px 12px; text-align: center;">
              <p style="margin: 0; color: #666; font-size: 12px;">Sent from yycpronto.com contact form</p>
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
