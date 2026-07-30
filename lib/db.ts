import { neon } from "@neondatabase/serverless";

export type ContactMessage = { name: string; email: string; message: string; ipHash: string; userAgent: string | null };

export async function saveContact(message: ContactMessage) {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) throw new Error("DATABASE_URL is not configured");
  const sql = neon(databaseUrl);
  await sql`INSERT INTO contact_messages (name, email, message, ip_hash, user_agent) VALUES (${message.name}, ${message.email}, ${message.message}, ${message.ipHash}, ${message.userAgent})`;
}

export async function hasRecentContact(email: string) {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) throw new Error("DATABASE_URL is not configured");
  const sql = neon(databaseUrl);
  const result = await sql`SELECT EXISTS(SELECT 1 FROM contact_messages WHERE email = ${email} AND created_at > NOW() - INTERVAL '24 hours') AS exists`;
  return Boolean(result[0]?.exists);
}
