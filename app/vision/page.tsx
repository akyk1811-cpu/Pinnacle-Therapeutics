import type { Metadata } from "next";
import Image from "next/image";
import { BrandLogo } from "@/components/brand-logo";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Vision & Values | Pinnacle Therapeutics",
  description: "The vision and values of Pinnacle Therapeutics.",
};

const pillarCards = [
  {
    title: "Quality",
    copy: "We pursue excellence in every product, every batch, and every partnership.",
    image: "/images/vision/quality.jpg"
  },
  {
    title: "Integrity",
    copy: "We act responsibly, transparently, and with respect in all corporate governance.",
    image: "/images/vision/integrity.jpg"
  },
  {
    title: "Innovation",
    copy: "We seek better ways and advanced formulations to support modern healthcare.",
    image: "/images/vision/innovation.jpg"
  },
  {
    title: "Customer focus",
    copy: "We listen carefully to healthcare providers and build relationships that last.",
    image: "/images/vision/customer-focus.jpg"
  }
];

export default function VisionPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero sage">
        <BrandLogo className="brand-logo-page" />
        <p className="eyebrow">Vision &amp; values</p>
        <h1>A healthier tomorrow, made more accessible.</h1>
        <p>Our direction is guided by innovation, responsible growth, and a lasting commitment to quality healthcare.</p>
      </section>

      {/* Purpose Section */}
      <section className="purpose-grid">
        <article>
          <h2>Our vision</h2>
          <p>
            To build a trusted pharmaceutical company that makes quality healthcare more accessible through innovation,
            dependable partnerships, and a patient-centred approach.
          </p>
        </article>
        <article>
          <h2>Our mission</h2>
          <p>
            To deliver safe, effective, reliable, and affordable healthcare solutions while maintaining high standards of
            quality and customer care.
          </p>
        </article>
        <article>
          <h2>Our goal</h2>
          <p>To create meaningful value for healthcare professionals, patients, partners, and the communities we serve.</p>
        </article>
      </section>

      {/* 4 Core Pillars with Real Life Photos */}
      <section className="value-grid-photos">
        <div className="section-header-wrap">
          <p className="section-eyebrow">Guiding Principles</p>
          <h2>The Four Pillars of Pinnacle Therapeutics</h2>
        </div>

        <div className="vision-pillars-grid">
          {pillarCards.map((pillar) => (
            <article key={pillar.title} className="vision-pillar-card">
              <div className="pillar-photo-wrap">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  unoptimized
                  className="pillar-photo"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="pillar-content">
                <h2>{pillar.title}</h2>
                <p>{pillar.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
