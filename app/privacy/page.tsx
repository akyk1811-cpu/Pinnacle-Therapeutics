import type { Metadata } from "next";
import { BrandLogo } from "@/components/brand-logo";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = { title: "Privacy | Pinnacle Therapeutics", robots: { index: false, follow: false } };
export default function PrivacyPage() {
  return (
    <main>
      <SiteHeader />
      <section className="legal">
        <BrandLogo className="brand-logo-page" />
        <p className="eyebrow">Privacy</p>
        <h1>Privacy notice placeholder</h1>
        <p>This page must be replaced with a legally reviewed privacy notice before the website collects or processes personal information.</p>
        <h2>What the contact form collects</h2>
        <p>When enabled, it will collect a name, work email, message, a privacy-preserving hash of the submitting IP address, and limited browser information to protect the service from abuse.</p>
      </section>
      <SiteFooter />
    </main>
  );
}
