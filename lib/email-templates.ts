/**
 * High-resolution embedded Daigo emblem (180x180 png base64)
 * Guarantees crisp rendering across Gmail, Apple Mail, Outlook, and mobile clients
 * without relying on external image CDNs or failing privacy blocking.
 */
export const DAIGO_LOGO_BASE64 =
  "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";

interface DemoEmailProps {
  name: string;
  email: string;
  company?: string;
  sector?: string;
  phone?: string;
  message?: string;
}

interface CareersEmailProps {
  name: string;
  email: string;
  phone?: string;
  role: string;
  links?: string;
  message?: string;
}

/**
 * Builds the HTML email for Enterprise Demo Requests
 */
export function buildDemoEmailHtml({
  name,
  email,
  company,
  sector,
  phone,
  message,
}: DemoEmailProps): string {
  const currentYear = new Date().getFullYear();

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Enterprise Briefing Request</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f4f5; margin: 0; padding: 40px 16px; color: #18181b; -webkit-font-smoothing: antialiased;">
  <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 14px; border: 1px solid #e4e4e7; overflow: hidden; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.08);">
    
    <!-- Header with Official Daigo Logo & Badge -->
    <div style="background-color: #09090b; padding: 26px 32px; border-bottom: 1px solid #27272a;">
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="vertical-align: middle;">
            <table style="border-collapse: collapse;">
              <tr>
                <td style="vertical-align: middle; padding-right: 14px;">
                  <img src="data:image/png;base64,${DAIGO_LOGO_BASE64}" width="38" height="38" alt="Daigo Deploy" style="display: block; border-radius: 8px; border: 1px solid #27272a; box-shadow: 0 2px 8px rgba(0,0,0,0.5);" />
                </td>
                <td style="vertical-align: middle;">
                  <span style="display: block; color: #ffffff; font-size: 17px; font-weight: 700; letter-spacing: 1.2px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.2;">DAIGO DEPLOY</span>
                  <span style="display: block; color: #a1a1aa; font-size: 11px; text-transform: uppercase; letter-spacing: 0.8px; margin-top: 3px;">Enterprise Briefing Request</span>
                </td>
              </tr>
            </table>
          </td>
          <td style="vertical-align: middle; text-align: right;">
            <span style="display: inline-block; background-color: #18181b; border: 1px solid #27272a; border-radius: 9999px; padding: 4px 10px; font-size: 10px; font-family: monospace; color: #34d399; letter-spacing: 0.8px; text-transform: uppercase;">
              ● INCOMING
            </span>
          </td>
        </tr>
      </table>
    </div>
    
    <!-- Main Content -->
    <div style="padding: 32px;">
      <!-- Target Sector & Headline Banner -->
      <div style="margin-bottom: 24px; padding-bottom: 20px; border-bottom: 1px solid #f4f4f5;">
        <span style="display: inline-block; background-color: #f4f4f5; border: 1px solid #e4e4e7; border-radius: 4px; padding: 3px 8px; font-size: 11px; font-family: monospace; color: #52525b; text-transform: uppercase; letter-spacing: 0.8px; font-weight: 600; margin-bottom: 8px;">
          Target Sector
        </span>
        <h2 style="font-size: 22px; font-weight: 700; color: #09090b; margin: 0; letter-spacing: -0.3px;">
          ${sector || "General Enterprise"}
        </h2>
      </div>

      <!-- Inquirer Data Grid -->
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
        <tr style="border-bottom: 1px solid #f4f4f5;">
          <td style="padding: 10px 0; font-size: 12px; font-family: monospace; color: #71717a; text-transform: uppercase; letter-spacing: 0.5px; width: 140px;">Contact Name</td>
          <td style="padding: 10px 0; font-size: 14px; font-weight: 600; color: #09090b;">${name}</td>
        </tr>
        <tr style="border-bottom: 1px solid #f4f4f5;">
          <td style="padding: 10px 0; font-size: 12px; font-family: monospace; color: #71717a; text-transform: uppercase; letter-spacing: 0.5px;">Work Email</td>
          <td style="padding: 10px 0; font-size: 14px; color: #09090b;">
            <a href="mailto:${email}" style="color: #09090b; font-weight: 600; text-decoration: underline;">${email}</a>
          </td>
        </tr>
        <tr style="border-bottom: 1px solid #f4f4f5;">
          <td style="padding: 10px 0; font-size: 12px; font-family: monospace; color: #71717a; text-transform: uppercase; letter-spacing: 0.5px;">Organization</td>
          <td style="padding: 10px 0; font-size: 14px; font-weight: 600; color: #09090b;">${company || "Not provided"}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; font-size: 12px; font-family: monospace; color: #71717a; text-transform: uppercase; letter-spacing: 0.5px;">Direct Line</td>
          <td style="padding: 10px 0; font-size: 14px; color: #09090b;">${phone || "Not provided"}</td>
        </tr>
      </table>

      <!-- Operational Objectives Box -->
      <div style="background-color: #fafafa; border: 1px solid #e4e4e7; border-left: 3px solid #09090b; border-radius: 8px; padding: 18px 20px; margin-top: 24px;">
        <span style="font-size: 11px; font-family: monospace; color: #52525b; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 8px; font-weight: 600;">
          Operational Objectives & Notes
        </span>
        <p style="font-size: 14px; line-height: 1.65; color: #27272a; margin: 0; white-space: pre-wrap;">${message || "No additional notes provided."}</p>
      </div>

      <!-- Reply CTA Button -->
      <div style="margin-top: 32px; padding-top: 20px; border-top: 1px solid #f4f4f5; text-align: center;">
        <a href="mailto:${email}" style="display: inline-block; background-color: #09090b; color: #ffffff; font-size: 13px; font-weight: 600; padding: 13px 28px; border-radius: 9999px; text-decoration: none; letter-spacing: 0.5px; box-shadow: 0 4px 14px rgba(0,0,0,0.18);">
          Reply to Inquirer &rarr;
        </a>
      </div>
    </div>

    <!-- Elegant Footer -->
    <div style="background-color: #fafafa; border-top: 1px solid #e4e4e7; padding: 20px 32px; text-align: center;">
      <p style="margin: 0; font-size: 11px; color: #71717a; font-family: monospace; letter-spacing: 0.5px; text-transform: uppercase;">
        DAIGO DEPLOY &middot; FORWARD DEPLOYED ENGINEERING
      </p>
      <p style="margin: 4px 0 0; font-size: 11px; color: #a1a1aa;">
        Autonomous Intelligence for Critical Enterprise Operations &middot; &copy; ${currentYear} Daigo Deploy
      </p>
    </div>
  </div>
</body>
</html>`;
}

/**
 * Builds the HTML email for Candidate Job Applications
 */
export function buildCareersEmailHtml({
  name,
  email,
  phone,
  role,
  links,
  message,
}: CareersEmailProps): string {
  const currentYear = new Date().getFullYear();

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Candidate Application</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f4f5; margin: 0; padding: 40px 16px; color: #18181b; -webkit-font-smoothing: antialiased;">
  <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 14px; border: 1px solid #e4e4e7; overflow: hidden; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.08);">
    
    <!-- Header with Official Daigo Logo & Badge -->
    <div style="background-color: #09090b; padding: 26px 32px; border-bottom: 1px solid #27272a;">
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="vertical-align: middle;">
            <table style="border-collapse: collapse;">
              <tr>
                <td style="vertical-align: middle; padding-right: 14px;">
                  <img src="data:image/png;base64,${DAIGO_LOGO_BASE64}" width="38" height="38" alt="Daigo Deploy" style="display: block; border-radius: 8px; border: 1px solid #27272a; box-shadow: 0 2px 8px rgba(0,0,0,0.5);" />
                </td>
                <td style="vertical-align: middle;">
                  <span style="display: block; color: #ffffff; font-size: 17px; font-weight: 700; letter-spacing: 1.2px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.2;">DAIGO DEPLOY</span>
                  <span style="display: block; color: #a1a1aa; font-size: 11px; text-transform: uppercase; letter-spacing: 0.8px; margin-top: 3px;">Candidate Application</span>
                </td>
              </tr>
            </table>
          </td>
          <td style="vertical-align: middle; text-align: right;">
            <span style="display: inline-block; background-color: #18181b; border: 1px solid #27272a; border-radius: 9999px; padding: 4px 10px; font-size: 10px; font-family: monospace; color: #60a5fa; letter-spacing: 0.8px; text-transform: uppercase;">
              ● CANDIDATE
            </span>
          </td>
        </tr>
      </table>
    </div>
    
    <!-- Main Content -->
    <div style="padding: 32px;">
      <!-- Role Headline Banner -->
      <div style="margin-bottom: 24px; padding-bottom: 20px; border-bottom: 1px solid #f4f4f5;">
        <span style="display: inline-block; background-color: #f4f4f5; border: 1px solid #e4e4e7; border-radius: 4px; padding: 3px 8px; font-size: 11px; font-family: monospace; color: #52525b; text-transform: uppercase; letter-spacing: 0.8px; font-weight: 600; margin-bottom: 8px;">
          Role
        </span>
        <h2 style="font-size: 22px; font-weight: 700; color: #09090b; margin: 0; letter-spacing: -0.3px;">
          ${role}
        </h2>
      </div>

      <!-- Candidate Data Grid -->
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
        <tr style="border-bottom: 1px solid #f4f4f5;">
          <td style="padding: 10px 0; font-size: 12px; font-family: monospace; color: #71717a; text-transform: uppercase; letter-spacing: 0.5px; width: 140px;">Candidate Name</td>
          <td style="padding: 10px 0; font-size: 14px; font-weight: 600; color: #09090b;">${name}</td>
        </tr>
        <tr style="border-bottom: 1px solid #f4f4f5;">
          <td style="padding: 10px 0; font-size: 12px; font-family: monospace; color: #71717a; text-transform: uppercase; letter-spacing: 0.5px;">Email</td>
          <td style="padding: 10px 0; font-size: 14px; color: #09090b;">
            <a href="mailto:${email}" style="color: #09090b; font-weight: 600; text-decoration: underline;">${email}</a>
          </td>
        </tr>
        <tr style="border-bottom: 1px solid #f4f4f5;">
          <td style="padding: 10px 0; font-size: 12px; font-family: monospace; color: #71717a; text-transform: uppercase; letter-spacing: 0.5px;">Phone / Line</td>
          <td style="padding: 10px 0; font-size: 14px; color: #09090b;">${phone || "Not provided"}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; font-size: 12px; font-family: monospace; color: #71717a; text-transform: uppercase; letter-spacing: 0.5px; vertical-align: top;">Links & Portfolio</td>
          <td style="padding: 10px 0; font-size: 14px; color: #09090b;">
            ${
              links
                ? `<a href="${links}" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline; word-break: break-all;">${links}</a>`
                : "Not provided"
            }
          </td>
        </tr>
      </table>

      <!-- Candidate Background Box -->
      <div style="background-color: #fafafa; border: 1px solid #e4e4e7; border-left: 3px solid #09090b; border-radius: 8px; padding: 18px 20px; margin-top: 24px;">
        <span style="font-size: 11px; font-family: monospace; color: #52525b; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 8px; font-weight: 600;">
          Candidate Background & Notes
        </span>
        <p style="font-size: 14px; line-height: 1.65; color: #27272a; margin: 0; white-space: pre-wrap;">${message || "No additional message provided."}</p>
      </div>

      <!-- Reply CTA Button -->
      <div style="margin-top: 32px; padding-top: 20px; border-top: 1px solid #f4f4f5; text-align: center;">
        <a href="mailto:${email}" style="display: inline-block; background-color: #09090b; color: #ffffff; font-size: 13px; font-weight: 600; padding: 13px 28px; border-radius: 9999px; text-decoration: none; letter-spacing: 0.5px; box-shadow: 0 4px 14px rgba(0,0,0,0.18);">
          Reply to Candidate &rarr;
        </a>
      </div>
    </div>

    <!-- Elegant Footer -->
    <div style="background-color: #fafafa; border-top: 1px solid #e4e4e7; padding: 20px 32px; text-align: center;">
      <p style="margin: 0; font-size: 11px; color: #71717a; font-family: monospace; letter-spacing: 0.5px; text-transform: uppercase;">
        DAIGO DEPLOY &middot; FORWARD DEPLOYED ENGINEERING
      </p>
      <p style="margin: 4px 0 0; font-size: 11px; color: #a1a1aa;">
        People & Forward Engineering Operations &middot; &copy; ${currentYear} Daigo Deploy
      </p>
    </div>
  </div>
</body>
</html>`;
}
