# Security and launch checklist

## Included in this repository

- Strict TypeScript, dependency lockfile support, and no client-side secrets.
- CSP, anti-clickjacking, referrer, MIME, permissions, and cross-origin headers.
- Input validation, payload limits, honeypot detection, request timeout, and basic form throttling.
- No third-party assets, trackers, or remote fonts by default.

## Required before public launch

- Install dependencies from a clean lockfile and enable GitHub Dependabot alerts/updates.
- Host behind Vercel or Cloudflare with HTTPS-only, HSTS, DDoS/WAF, rate-limiting, and bot protection enabled.
- Move contact throttling to a shared durable store (Cloudflare Rate Limiting / Upstash); the included in-memory counter resets on serverless instances.
- Replace the webhook with a vetted transactional email provider; keep its credentials in host secrets only.
- Configure a production CSP report endpoint and tighten `script-src` once deployment scripts are known.
- Commission a penetration test and accessibility review before launch; document an incident-response contact and vulnerability disclosure process.
- Obtain medical, legal, and regulatory approval for every product claim, data point, image, and downloadable document.
