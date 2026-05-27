import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";

const SYSTEM_PROMPT = `
# IDENTITY & MISSION
You are the **Tech Pioneer** ambassador for **Shikshak Sahayak**—India's first independent AI Classroom ecosystem, proudly **Built for Bharat**. 
- **Vision:** We don't just digitize schools; we give Principals the **clarity and control** to genuinely care for every student's progress and wellbeing.
- **Leadership:** Founded by Kandarp Trivedi (CEO) and a visionary team of 5.
- **Independence:** Indigenous AI infrastructure, free from foreign wrappers like ChatGPT.
- **Roadmap:** Focused on Gujarat first; moving to our own Data Centers (2030) and proprietary Hardware (2034-35).

# THE 5-APP ECOSYSTEM & FEATURES
1. **Smartboard (The Hub):** Facial Attendance (30 students/30s), AI content generation, and real-time mood/focus detection.
2. **Teacher App (PWA):** Empowers teachers with AI lesson plans and syllabus-aligned content in **English, Hindi, and Gujarati**.
3. **Student App:** Personalized learning feeds and engagement tracking.
4. **Parent App:** Real-time visibility and instant security alerts via WhatsApp.
5. **Admin Panel:** Moving beyond "disconnected dashboards" to actionable alerts for struggling students.

# CORE VALUE PROPOSITION
- **For Principals:** Sleep better knowing parents are informed, teachers are empowered (not burdened), and no student falls through the cracks.
- **For Teachers:** Zero manual data entry; more time for actual teaching.
- **Privacy:** State-of-the-art encryption; data visible ONLY to verified Linked IDs.

# OPERATIONAL GUIDELINES (THE ALPHA PROTOCOL)
- **Voice:** Modern, fast, results-oriented, and patriotic.
- **Brevity:** STRICT 2-sentence maximum.
- **Handling Complex/Unknown Queries:** 
  1. Acknowledge: "That's a critical point for school leadership." 
  2. Be Transparent: "We are currently in Alpha and finalizing those specifics."
  3. Capture & Direct: Ask if their priority is cost, offline capability, or integration, then guide them to the **Waitlist** or **WhatsApp** for a personalized follow-up within 7 days.
`.trim();

const GROQ_MODELS = [
  "llama-3.3-70b-versatile",
  "llama-3.1-8b-instant",
  "mixtral-8x7b-32768",
  "gemma2-9b-it"
];

const GROQ_API_KEYS = [
  process.env.GROQ_API_KEY,
  process.env.GROQ_KEY_1,
  process.env.GROQ_KEY_2,
  process.env.GROQ_KEY_3,
  process.env.GROQ_KEY_4,
  process.env.GROQ_KEY_5,
].filter(Boolean) as string[];

export async function POST(req: NextRequest) {
  try {
    const { message, history } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    // 1. CHAT WITH GROQ (Multi-Key Rotation)
    const messages = [
      { role: "system", content: SYSTEM_PROMPT },
      ...(history || []).map((msg: any) => ({
        role: msg.role,
        content: msg.content,
      })),
      { role: "user", content: message },
    ];

    let lastError = null;

    // Try each key in the rotation
    for (const apiKey of GROQ_API_KEYS) {
      const groq = new Groq({ apiKey });

      // Try each model with the current key
      for (const model of GROQ_MODELS) {
        try {
          console.log(`Attempting chat with Groq model: ${model} using key starting with ${apiKey.substring(0, 8)}...`);
          const chatCompletion = await groq.chat.completions.create({
            messages: messages as any,
            model: model,
            temperature: 0.7,
            max_tokens: 1024,
            top_p: 1,
            stream: false,
          });

          const response = chatCompletion.choices[0]?.message?.content;
          if (response) {
            return NextResponse.json({ response });
          }
        } catch (error: any) {
          console.error(`Groq ${model} failed with current key:`, error.message);
          lastError = error;
          
          // If it's a rate limit error, break the model loop to try the NEXT key immediately
          if (error.status === 429) {
            console.log("Rate limit reached for this key, switching keys...");
            break; 
          }
          // For other errors, continue to the next model with same key
          continue;
        }
      }
    }

    throw lastError || new Error("All AI models and keys are currently unavailable.");

  } catch (error: any) {
    console.error("Chat API Final Error:", error);

    if (error.status === 429) {
      return NextResponse.json(
        { error: "Our AI service is very busy. Please try again in a moment or contact us on WhatsApp." },
        { status: 429 }
      );
    }

    return NextResponse.json(
      { error: "Something went wrong. Please try again or contact support." },
      { status: 500 }
    );
  }
}
