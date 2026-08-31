import { contactEmail, contactPhoneE164 } from "@/lib/site";

export type Enquiry = { name: string; email: string; message: string };

function escapeHtml(value: string) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function enquiryText(enquiry: Enquiry) {
  return `New website enquiry from ${enquiry.name} <${enquiry.email}>\n\n${enquiry.message}`;
}

async function sendResendEmail(enquiry: Enquiry) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return false;
  const from = process.env.CONTACT_FROM_EMAIL || "Pinnacle Therapeutics <onboarding@resend.dev>";
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [process.env.CONTACT_NOTIFY_EMAIL || contactEmail],
      reply_to: enquiry.email,
      subject: `Website enquiry from ${enquiry.name}`,
      text: enquiryText(enquiry),
      html: `<p><strong>Name:</strong> ${escapeHtml(enquiry.name)}</p><p><strong>Email:</strong> ${escapeHtml(enquiry.email)}</p><p>${escapeHtml(enquiry.message).replace(/\n/g, "<br/>")}</p>`
    })
  });
  if (!response.ok) throw new Error("Email delivery failed");
  return true;
}

async function sendTwilioSms(enquiry: Enquiry) {
  const sid = process.env.TWILIO_ACCOUNT_SID;
  const token = process.env.TWILIO_AUTH_TOKEN;
  const from = process.env.TWILIO_FROM_NUMBER;
  const to = process.env.CONTACT_NOTIFY_PHONE || contactPhoneE164;
  if (!sid || !token || !from) return false;
  const body = `Pinnacle enquiry from ${enquiry.name} (${enquiry.email}): ${enquiry.message}`.slice(0, 1500);
  const response = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${sid}/Messages.json`, {
    method: "POST",
    headers: { Authorization: `Basic ${Buffer.from(`${sid}:${token}`).toString("base64")}`, "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ To: to, From: from, Body: body })
  });
  if (!response.ok) throw new Error("SMS delivery failed");
  return true;
}

async function sendWebhook(enquiry: Enquiry) {
  const url = process.env.CONTACT_WEBHOOK_URL;
  if (!url) return false;
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: enquiry.name,
      email: enquiry.email,
      message: enquiry.message,
      notifyEmail: process.env.CONTACT_NOTIFY_EMAIL || contactEmail,
      notifyPhone: process.env.CONTACT_NOTIFY_PHONE || contactPhoneE164
    })
  });
  if (!response.ok) throw new Error("Webhook delivery failed");
  return true;
}

export async function notifyEnquiry(enquiry: Enquiry) {
  const results = await Promise.allSettled([sendResendEmail(enquiry), sendTwilioSms(enquiry), sendWebhook(enquiry)]);
  const attempted = results.filter((result) => result.status === "fulfilled" && result.value);
  const failed = results.filter((result) => result.status === "rejected");
  if (failed.length && !attempted.length) {
    throw new Error("Enquiry notification failed");
  }
  return attempted.length > 0;
}
