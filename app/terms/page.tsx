import type { Metadata } from "next";
import { BrandLogo } from "@/components/brand-logo";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = { title: "Terms | Pinnacle Therapeutics", robots: { index: false, follow: false } };
export default function TermsPage() {
  return (
    <main>
      <SiteHeader />
      <section className="legal">
        <BrandLogo className="brand-logo-page" />
        <p className="eyebrow">Terms</p>
        <h1>Terms of use placeholder</h1>
        <p>This page must be replaced with legally reviewed website terms before launch. It should include medical-information limitations, intellectual-property rights, permitted use, and jurisdiction.</p>
      </section>
      <SiteFooter />
    </main>
  );
}
