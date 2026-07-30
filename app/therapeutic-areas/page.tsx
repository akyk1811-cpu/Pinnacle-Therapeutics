import type { Metadata } from "next";
import { BrandLogo } from "@/components/brand-logo";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { focusAreas } from "@/lib/site";

export const metadata: Metadata = {
  title: "Therapeutic Areas | Pinnacle Therapeutics",
  description: "Pinnacle Therapeutics therapeutic areas.",
};

export default function TherapeuticAreasPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero">
        <BrandLogo className="brand-logo-page" />
        <p className="eyebrow">Therapeutic areas</p>
        <h1>Focused on the needs that matter most.</h1>
        <p>
          Areas will be refined as the company portfolio, research priorities, and approved communications are finalised.
        </p>
      </section>
      <section className="area-grid">
        {focusAreas.map(([number, title, copy]) => (
          <article key={number}>
            <span>{number}</span>
            <h2>{title}</h2>
            <p>{copy}</p>
          </article>
        ))}
      </section>
      <SiteFooter />
    </main>
  );
}
