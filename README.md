# Pinnacle Therapeutics

The marketing website foundation for Pinnacle Therapeutics, built with Next.js, React, TypeScript, and CSS.

## Start locally

1. Install Node.js 22 LTS from https://nodejs.org.
2. In Cursor's terminal, run `npm install`.
3. Copy `.env.example` to `.env.local` and set local values if needed.
4. Run `npm run dev`, then visit http://localhost:3000.

## Quality checks

Run `npm run typecheck`, `npm run lint`, and `npm run build` before deployment.

## Content handoff

The landing page is in `app/page.tsx`; dedicated placeholders are in `app/about`, `app/vision`, `app/therapeutic-areas`, and `app/products`. Put approved product images in `public/images/products`. Replace copy only after company/medical review. Do not publish product claims, prescribing information, certifications, or clinical data without regulatory sign-off.

## Search readiness

The site includes a `robots.txt` route, sitemap, page metadata, and canonical URLs. Before public launch, set `NEXT_PUBLIC_SITE_URL` to the final `https://` domain, deploy it, verify the domain in Google Search Console, and submit `/sitemap.xml`.

## Contact database and anti-abuse setup

Contact submissions are designed for a hosted Neon Postgres database; the schema is in `database/0000_initial.sql`. Create a Neon project, run that SQL in its SQL editor, and place its connection string in `DATABASE_URL` in your deployment environment. Configure an Upstash Redis database and set `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` for durable rate limiting across server instances. Generate a long random `CONTACT_IP_SALT` and keep all of these values in deployment secrets—not Git.

To deliver enquiries to `info@pinnacletherapeutics.in` and `9821607700`, set `RESEND_API_KEY` (email) and Twilio `TWILIO_ACCOUNT_SID`, `TWILIO_AUTH_TOKEN`, and `TWILIO_FROM_NUMBER` (SMS) in the host environment. `CONTACT_WEBHOOK_URL` remains an optional extra notifier.

The form validates inputs, uses a bot honeypot, limits IP attempts, hashes rather than stores raw IP addresses, and blocks repeated enquiries from the same email for 24 hours. Add email-verification and Turnstile before public launch if contact abuse is a concern.

## Security posture

The site ships with CSP, clickjacking protection, MIME-sniffing prevention, permissions restrictions, secure form validation, a honeypot, and a basic rate limit. Before launch, host on Vercel/Cloudflare, configure production secrets, connect a transactional-email provider, enable WAF/bot protection, and run an accessibility and security review.
