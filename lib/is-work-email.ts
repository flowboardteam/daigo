/**
 * List of known consumer / free / disposable email service domains.
 * Work emails must belong to a custom corporate or enterprise domain.
 */
const CONSUMER_EMAIL_DOMAINS = new Set([
  // Google
  "gmail.com",
  "googlemail.com",

  // Microsoft
  "hotmail.com",
  "hotmail.co.uk",
  "hotmail.fr",
  "hotmail.de",
  "hotmail.es",
  "hotmail.it",
  "outlook.com",
  "outlook.co.uk",
  "outlook.fr",
  "outlook.de",
  "live.com",
  "live.co.uk",
  "live.fr",
  "msn.com",

  // Yahoo
  "yahoo.com",
  "yahoo.co.uk",
  "yahoo.ca",
  "yahoo.fr",
  "yahoo.de",
  "yahoo.es",
  "yahoo.it",
  "ymail.com",
  "rocketmail.com",

  // Apple
  "icloud.com",
  "me.com",
  "mac.com",

  // AOL
  "aol.com",
  "aim.com",

  // Proton
  "proton.me",
  "protonmail.com",
  "protonmail.ch",
  "pm.me",

  // Zoho Consumer
  "zoho.com",
  "zohomail.com",

  // GMX & Mail.com
  "mail.com",
  "email.com",
  "usa.com",
  "gmx.com",
  "gmx.net",
  "gmx.de",

  // Yandex & Mail.ru
  "yandex.com",
  "yandex.ru",
  "mail.ru",
  "inbox.ru",
  "list.ru",
  "bk.ru",

  // Privacy & Disposable
  "fastmail.com",
  "tutanota.com",
  "tuta.com",
  "tuta.io",
  "mailinator.com",
  "guerrillamail.com",
  "tempmail.com",
  "10minutemail.com",
  "throwawaymail.com",
  "trashmail.com",
  "sharklasers.com",
  "dispostable.com",
]);

/**
 * Validates whether an email is a legitimate corporate / work email.
 * Rejects empty emails, malformed formats, and consumer/personal domains.
 */
export function isWorkEmail(email: string): boolean {
  if (!email || typeof email !== "string") return false;
  const trimmed = email.trim().toLowerCase();

  // Standard RFC 5322 compatible regex check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!emailRegex.test(trimmed)) {
    return false;
  }

  const parts = trimmed.split("@");
  if (parts.length !== 2) return false;

  const domain = parts[1].toLowerCase();
  if (CONSUMER_EMAIL_DOMAINS.has(domain)) {
    return false;
  }

  return true;
}
