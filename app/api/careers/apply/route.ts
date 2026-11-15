import { NextResponse } from "next/server";
import { buildCareersEmailHtml } from "@/lib/email-templates";

interface ApplicationPayload {
  name: string;
  email: string;
  phone?: string;
  role: string;
  links?: string;
  message?: string;
}

export async function POST(request: Request) {
  try {
    const body: ApplicationPayload = await request.json();
    const { name, email, phone, role, links, message } = body;

    if (!name?.trim() || !email?.trim()) {
      return NextResponse.json(
        { error: "Name and email are required fields." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_CAREERS_API_KEY || process.env.RESEND_API_KEY || "";
    const primaryTo = process.env.CAREERS_PRIMARY_EMAIL || "careers@daigodeploy.com";
    const fallbackTo = process.env.CAREERS_FALLBACK_EMAIL || "daigo@flowboard.team";
    const fromAddress = process.env.CAREERS_FROM_EMAIL || "Daigo Careers <onboarding@resend.dev>";

    const plainText = `DAIGO DEPLOY — CANDIDATE APPLICATION

Role: ${role}
Candidate Name: ${name}
Email Address: ${email}
Phone / Line: ${phone || "Not provided"}

--- LINKS & PORTFOLIO ---
${links || "Not provided"}

--- BACKGROUND & NOTES ---
${message || "No additional message provided."}
`;

    const htmlContent = buildCareersEmailHtml({
      name,
      email,
      phone,
      role,
      links,
      message,
    });

    // Function to dispatch email to Resend API
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
          subject: `Application: ${name} — ${role}`,
          text: plainText,
          html: htmlContent,
        }),
      });
    }

    // Attempt sending to primary recipient
    let resendResponse = await sendToResend(primaryTo);
    let resData = await resendResponse.json();

    // If unverified custom domain error, automatically route to the verified account owner email
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
    console.error("Application submission error:", error);
    return NextResponse.json(
      { error: "Internal server error occurred while processing application." },
      { status: 500 }
    );
  }
}
