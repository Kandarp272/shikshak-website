import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations";
import { supabaseAdmin } from "@/lib/supabase";
import { resend } from "@/lib/resend";

// Simple in-memory rate limiting
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_WINDOW = 3600000; // 1 hour
const MAX_REQUESTS = 3;

function isRateLimited(ip: string) {
  const now = Date.now();
  const userData = rateLimitMap.get(ip) || { count: 0, lastReset: now };

  if (now - userData.lastReset > RATE_LIMIT_WINDOW) {
    userData.count = 1;
    userData.lastReset = now;
    rateLimitMap.set(ip, userData);
    return false;
  }

  if (userData.count >= MAX_REQUESTS) {
    return true;
  }

  userData.count++;
  rateLimitMap.set(ip, userData);
  return false;
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.ip || "127.0.0.1";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const validatedData = contactSchema.parse(body);

    if (!supabaseAdmin) {
      return NextResponse.json(
        { error: "Database connection not initialized. Check environment variables." },
        { status: 500 }
      );
    }

    // 1. Insert into Supabase
    const { error: dbError } = await supabaseAdmin
      .from("contact_submissions")
      .insert([validatedData]);

    if (dbError) throw dbError;

    // 2. Send internal notification
    await resend.emails.send({
      from: `System <${process.env.RESEND_FROM_EMAIL}>`,
      to: process.env.INTERNAL_NOTIFY_EMAIL!,
      subject: `New Contact Submission: ${validatedData.subject}`,
      html: `
        <h1>New Contact Submission</h1>
        <p><strong>From:</strong> ${validatedData.name} (${validatedData.email})</p>
        <p><strong>Subject:</strong> ${validatedData.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${validatedData.message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    // 3. Send auto-reply to user
    await resend.emails.send({
      from: `Shikshak Sahayak <${process.env.RESEND_FROM_EMAIL}>`,
      to: validatedData.email,
      subject: "We've received your message",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px;">
          <p>Hi ${validatedData.name},</p>
          <p>Thanks for reaching out to us. We've received your message regarding "<strong>${validatedData.subject}</strong>".</p>
          <p>Our team usually responds within 24 hours. Since we're in the Alpha stage, our team moves fast to support our pilot partners.</p>
          <p>Regards,<br/>Team Shikshak Sahayak</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Contact API Error:", error);
    if (error.name === "ZodError") {
      return NextResponse.json({ error: error.errors[0].message }, { status: 400 });
    }
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
