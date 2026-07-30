import type { Metadata } from "next";
import { BrandLogo } from "@/components/brand-logo";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Vision & Values | Pinnacle Therapeutics",
  description: "The vision and values of Pinnacle Therapeutics.",
};

export default function VisionPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero sage">
        <BrandLogo className="brand-logo-page" />
        <p className="eyebrow">Vision & values</p>
        <h1>A healthier tomorrow, made more accessible.</h1>
        <p>Our direction is guided by innovation, responsible growth, and a lasting commitment to quality healthcare.</p>
      </section>
      <section className="purpose-grid">
        <article>
          <span>01</span>
          <h2>Our vision</h2>
          <p>
            To build a trusted pharmaceutical company that makes quality healthcare more accessible through innovation,
            dependable partnerships, and a patient-centred approach.
          </p>
        </article>
        <article>
          <span>02</span>
          <h2>Our mission</h2>
          <p>
            To deliver safe, effective, reliable, and affordable healthcare solutions while maintaining high standards of
            quality and customer care.
          </p>
        </article>
        <article>
          <span>03</span>
          <h2>Our goal</h2>
          <p>To create meaningful value for healthcare professionals, patients, partners, and the communities we serve.</p>
        </article>
      </section>
      <section className="value-grid">
        {[
          ["Quality", "We pursue excellence in every product and every partnership."],
          ["Integrity", "We act responsibly, transparently, and with respect."],
          ["Innovation", "We seek better ways to support modern healthcare."],
          ["Customer focus", "We listen carefully and build relationships that last."],
        ].map(([item, copy], i) => (
          <article key={item}>
            <span>0{i + 1}</span>
            <h2>{item}</h2>
            <p>{copy}</p>
          </article>
        ))}
      </section>
      <SiteFooter />
    </main>
  );
}
