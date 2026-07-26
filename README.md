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

All placeholder copy lives in `app/page.tsx`. Replace it only after company/medical review. Do not publish product claims, prescribing information, certifications, or clinical data without regulatory sign-off.

## Security posture

The site ships with CSP, clickjacking protection, MIME-sniffing prevention, permissions restrictions, secure form validation, a honeypot, and a basic rate limit. Before launch, host on Vercel/Cloudflare, configure production secrets, connect a transactional-email provider, enable WAF/bot protection, and run an accessibility and security review.
