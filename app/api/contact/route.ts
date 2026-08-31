import { createHash } from "node:crypto";
import { NextResponse } from "next/server";
import { z } from "zod";
import { hasRecentContact, saveContact } from "@/lib/db";
import { notifyEnquiry } from "@/lib/notify";

const requestSchema = z.object({ name: z.string().trim().min(2).max(100), email: z.string().trim().email().max(254), message: z.string().trim().min(10).max(2000), companyWebsite: z.string().max(0).optional() });
const attempts = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_ATTEMPTS = 5;

async function rateLimit(key: string) {
  const endpoint = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (endpoint && token) {
    const response = await fetch(`${endpoint}/pipeline`, { method: "POST", headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" }, body: JSON.stringify([["INCR", `contact:${key}`], ["EXPIRE", `contact:${key}`, "600", "NX"]]), cache: "no-store" });
    if (!response.ok) return false;
    const data = await response.json() as Array<{ result: number }>;
    return data[0]?.result <= MAX_ATTEMPTS;
  }
  const now = Date.now(); const current = attempts.get(key);
  if (!current || current.resetAt < now) { attempts.set(key, { count: 1, resetAt: now + WINDOW_MS }); return true; }
  if (current.count >= MAX_ATTEMPTS) return false;
  current.count += 1; return true;
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > 16_384) return NextResponse.json({ error: "Request too large." }, { status: 413 });
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const ipHash = createHash("sha256").update(`${ip}:${process.env.CONTACT_IP_SALT ?? "local-only"}`).digest("hex");
  if (!(await rateLimit(ipHash))) return NextResponse.json({ error: "Too many requests." }, { status: 429 });
  const parsed = requestSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "Invalid form data." }, { status: 400 });
  if (parsed.data.companyWebsite) return NextResponse.json({ ok: true });

  const enquiry = { name: parsed.data.name, email: parsed.data.email.toLowerCase(), message: parsed.data.message };
  let stored = false;

  try {
    if (process.env.DATABASE_URL) {
      if (await hasRecentContact(enquiry.email)) {
        return NextResponse.json({ error: "Please wait before submitting another enquiry." }, { status: 429 });
      }
      await saveContact({ ...enquiry, ipHash, userAgent: request.headers.get("user-agent")?.slice(0, 512) ?? null });
      stored = true;
    }
  } catch {
    stored = false;
  }

  try {
    const notified = await notifyEnquiry(enquiry);
    if (!stored && !notified) {
      return NextResponse.json({ error: "Contact service is temporarily unavailable." }, { status: 503 });
    }
  } catch {
    if (!stored) {
      return NextResponse.json({ error: "Contact service is temporarily unavailable." }, { status: 503 });
    }
  }

  return NextResponse.json({ ok: true });
}
