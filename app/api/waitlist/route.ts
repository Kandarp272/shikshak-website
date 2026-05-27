import { NextRequest, NextResponse } from "next/server";
import { waitlistSchema } from "@/lib/validations";
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
    const validatedData = waitlistSchema.parse(body);

    if (!supabaseAdmin) {
      return NextResponse.json(
        { error: "Database connection not initialized. Check environment variables." },
        { status: 500 }
      );
    }

    // 1. Insert into Supabase
    const { error: dbError } = await supabaseAdmin
      .from("waitlist_signups")
      .insert([validatedData]);

    if (dbError) {
      if (dbError.code === "23505") {
        return NextResponse.json(
          { error: "This email is already on the waitlist." },
          { status: 400 }
        );
      }
      throw dbError;
    }

    // 2. Send confirmation email to user
    await resend.emails.send({
      from: `Shikshak Sahayak <${process.env.RESEND_FROM_EMAIL}>`,
      to: validatedData.email,
      subject: "You're on the Shikshak Sahayak waitlist 🎉",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px;">
          <h1 style="color: #6366f1;">Welcome to the future of Bharat's classrooms!</h1>
          <p>Hi ${validatedData.full_name},</p>
          <p>Thanks for joining the Shikshak Sahayak waitlist. We've received your application for <strong>${validatedData.school_name}</strong> in ${validatedData.city}.</p>
          <p>We are currently in <strong>Alpha stage</strong> and inviting 50 pilot schools to co-develop with us. As an early partner, your feedback will directly shape the product.</p>
          <p><strong>What's next?</strong></p>
          <p>Our team will reach out to you once we have an open spot for your school type. We move fast, but we want to ensure each pilot school gets full support.</p>
          <div style="margin: 30px 0;">
            <a href="https://wa.me/917990680690" style="background: #25d366; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold;">Join our WhatsApp Group</a>
          </div>
          <p style="color: #64748b; font-size: 14px;">Regards,<br/>Team Shikshak Sahayak</p>
        </div>
      `,
    });

    // 3. Send internal notification
    await resend.emails.send({
      from: `System <${process.env.RESEND_FROM_EMAIL}>`,
      to: process.env.INTERNAL_NOTIFY_EMAIL!,
      subject: `New Waitlist: ${validatedData.school_name} (${validatedData.city})`,
      html: `
        <h1>New Waitlist Signup</h1>
        <pre>${JSON.stringify(validatedData, null, 2)}</pre>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Waitlist API Error:", error);
    if (error.name === "ZodError") {
      return NextResponse.json({ error: error.errors[0].message }, { status: 400 });
    }
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
