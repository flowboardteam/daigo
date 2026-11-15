import { NextResponse } from "next/server";
import { isWorkEmail } from "@/lib/is-work-email";
import { buildDemoEmailHtml } from "@/lib/email-templates";

interface DemoRequestPayload {
  name: string;
  email: string;
  company?: string;
  sector?: string;
  phone?: string;
  message?: string;
}

export async function POST(request: Request) {
  try {
    const body: DemoRequestPayload = await request.json();
    const { name, email, company, sector, phone, message } = body;

    if (!name?.trim() || !email?.trim()) {
      return NextResponse.json(
        { error: "Name and work email are required." },
        { status: 400 }
      );
    }

    if (!isWorkEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid work email address" },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_COMMERCIAL_API_KEY || process.env.RESEND_API_KEY || "";
    const primaryTo = process.env.COMMERCIAL_PRIMARY_EMAIL || "commercial@daigodeploy.com";
    const fallbackTo = process.env.COMMERCIAL_FALLBACK_EMAIL || "daigo@flowboard.team";
    const fromAddress = process.env.COMMERCIAL_FROM_EMAIL || "Daigo Commercial <onboarding@resend.dev>";

    const plainText = `DAIGO DEPLOY — DEMO & GET STARTED INQUIRY

Contact Name: ${name}
Work Email: ${email}
Organization: ${company || "Not provided"}
Operational Sector: ${sector || "Not specified"}
Phone / Direct Line: ${phone || "Not provided"}

--- OPERATIONAL OBJECTIVES & CONTEXT ---
${message || "No additional context provided."}
`;

    const htmlContent = buildDemoEmailHtml({
      name,
      email,
      company,
      sector,
      phone,
      message,
    });

    async function sendToResend(recipient: string) {
      return fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: fromAddress,
          to: [recipient],
          reply_to: email,
          subject: `Demo Request: ${name} (${company || "Enterprise"}) — ${sector || "General"}`,
          text: plainText,
          html: htmlContent,
        }),
      });
    }

    let resendResponse = await sendToResend(primaryTo);
    let resData = await resendResponse.json();

    if (!resendResponse.ok && fallbackTo && primaryTo !== fallbackTo) {
      console.warn(
        `Primary recipient ${primaryTo} returned status ${resendResponse.status}. Attempting fallback to ${fallbackTo}.`
      );
      resendResponse = await sendToResend(fallbackTo);
      resData = await resendResponse.json();
    }

    if (!resendResponse.ok) {
      console.error("Resend API Error:", resData);
      return NextResponse.json(
        { error: resData.message || "Failed to deliver email through Resend." },
        { status: resendResponse.status }
      );
    }

    return NextResponse.json({
      success: true,
      id: resData.id,
    });
  } catch (error) {
    console.error("Demo request submission error:", error);
    return NextResponse.json(
      { error: "Internal server error occurred while processing demo request." },
      { status: 500 }
    );
  }
}
