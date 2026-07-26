import { NextResponse } from "next/server";
import { z } from "zod";

const requestSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(254),
  message: z.string().trim().min(10).max(2000),
  companyWebsite: z.string().max(0).optional()
});

const attempts = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_ATTEMPTS = 5;

function allowed(ip: string) {
  const now = Date.now();
  const current = attempts.get(ip);
  if (!current || current.resetAt < now) {
    attempts.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }
  if (current.count >= MAX_ATTEMPTS) return false;
  current.count += 1;
  return true;
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > 16_384) return NextResponse.json({ error: "Request too large." }, { status: 413 });
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (!allowed(ip)) return NextResponse.json({ error: "Too many requests." }, { status: 429 });

  const parsed = requestSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "Invalid form data." }, { status: 400 });
  if (parsed.data.companyWebsite) return NextResponse.json({ ok: true });

  // Deliberately no email delivery until CONTACT_WEBHOOK_URL is configured server-side.
  // Replace this with a vetted provider (e.g. Resend/Postmark) and a durable rate limiter
  // such as Upstash/Cloudflare before production deployment.
  const endpoint = process.env.CONTACT_WEBHOOK_URL;
  if (endpoint) {
    try {
      const delivery = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...parsed.data, receivedAt: new Date().toISOString() }), signal: AbortSignal.timeout(5000) });
      if (!delivery.ok) return NextResponse.json({ error: "Delivery temporarily unavailable." }, { status: 503 });
    } catch {
      return NextResponse.json({ error: "Delivery temporarily unavailable." }, { status: 503 });
    }
  }
  return NextResponse.json({ ok: true });
}
