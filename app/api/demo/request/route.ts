import { NextResponse } from "next/server";

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

    const apiKey = process.env.RESEND_API_KEY || "";
    const primaryTo = process.env.COMMERCIAL_PRIMARY_EMAIL || "commercial@daigodeploy.com";
    const fallbackTo = process.env.COMMERCIAL_FALLBACK_EMAIL || "commercial@flowboard.team";
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

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Demo / Enterprise Request</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f4f5; margin: 0; padding: 32px 16px; color: #18181b;">
  <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; border: 1px solid #e4e4e7; overflow: hidden;">
    <div style="background-color: #09090b; padding: 24px 32px;">
      <h1 style="color: #ffffff; font-size: 18px; margin: 0; font-weight: 700; letter-spacing: 0.5px;">DAIGO DEPLOY</h1>
      <p style="color: #a1a1aa; font-size: 12px; margin: 4px 0 0; text-transform: uppercase; letter-spacing: 1px;">Demo & Enterprise Briefing Request</p>
    </div>
    
    <div style="padding: 32px;">
      <div style="margin-bottom: 24px; padding-bottom: 20px; border-bottom: 1px solid #f4f4f5;">
        <span style="font-size: 11px; font-family: monospace; color: #71717a; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 4px;">Target Sector</span>
        <h2 style="font-size: 20px; font-weight: 700; color: #09090b; margin: 0;">${sector || "General Enterprise"}</h2>
      </div>

      <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
        <tr>
          <td style="padding: 8px 0; font-size: 13px; color: #71717a; width: 140px;">Contact Name:</td>
          <td style="padding: 8px 0; font-size: 14px; font-weight: 600; color: #09090b;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-size: 13px; color: #71717a;">Work Email:</td>
          <td style="padding: 8px 0; font-size: 14px; color: #09090b;"><a href="mailto:${email}" style="color: #09090b; font-weight: 600; text-decoration: underline;">${email}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-size: 13px; color: #71717a;">Organization:</td>
          <td style="padding: 8px 0; font-size: 14px; font-weight: 600; color: #09090b;">${company || "Not provided"}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-size: 13px; color: #71717a;">Phone:</td>
          <td style="padding: 8px 0; font-size: 14px; color: #09090b;">${phone || "Not provided"}</td>
        </tr>
      </table>

      <div style="background-color: #fafafa; border-radius: 8px; border: 1px solid #f4f4f5; padding: 20px; margin-top: 24px;">
        <span style="font-size: 11px; font-family: monospace; color: #71717a; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 8px;">Operational Objectives & Notes</span>
        <p style="font-size: 14px; line-height: 1.6; color: #27272a; margin: 0; white-space: pre-wrap;">${message || "No additional notes provided."}</p>
      </div>

      <div style="margin-top: 32px; padding-top: 20px; border-top: 1px solid #f4f4f5; text-align: center;">
        <a href="mailto:${email}" style="display: inline-block; background-color: #09090b; color: #ffffff; font-size: 13px; font-weight: 600; padding: 12px 24px; border-radius: 9999px; text-decoration: none;">Reply to Inquirer &rarr;</a>
      </div>
    </div>
  </div>
</body>
</html>
`;

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
