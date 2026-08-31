import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { focusAreas } from "@/lib/site";

export const metadata: Metadata = {
  title: "Therapeutic Areas | Pinnacle Therapeutics",
  description: "Explore the core medical therapeutic focus areas of Pinnacle Therapeutics including Orthopedic, Internal Medicine, Cardiometabolic, Gynaecology, Nutraceuticals, Everyday Wellness, Gastroenterology, and Respiratory Health.",
};

const clinicalHighlights: Record<string, string[]> = {
  orthopedic: ["Cartilage Preservation & Joint Health", "Musculoskeletal Mobility Support", "Targeted Pain & Inflammation Management"],
  "internal-medicine": ["Acute & Chronic Systemic Conditions", "Multi-Organ Disease Management", "Clinical Formulation Precision"],
  cardiometabolic: ["Vascular Integrity & Arterial Health", "Lipid & Glucose Metabolic Balance", "Cardiovascular Telemetry & Vitality"],
  gynaecology: ["Hormonal Balance & Reproductive Care", "Maternal & Prenatal Nutrition", "Women’s Lifecycle Wellness"],
  neutraceutical: ["Co-Enzyme Q10 & Omega-3 Complexes", "High-Potency Micronutrient Delivery", "Bio-Active Antioxidant Defense"],
  "everyday-wellness": ["Immune System Strength", "Cellular Vitality & Protection", "Daily Active Energy Formulations"],
  gastroenterology: ["Acid Secretion & Mucosal Protection", "Gastrointestinal Tract Wellness", "Microbiome Equilibrium Support"],
  "respiratory-health": ["Bronchial Airway & Pulmonary Relief", "Anti-Infective Airway Protection", "Clear Respiratory Vitality"]
};

export default function TherapeuticAreasPage() {
  return (
    <main className="therapeutic-page">
      <SiteHeader />

      {/* Hero Section */}
      <section className="therapeutic-hero">
        <div className="hero-content">
          <div className="hero-eyebrow-pill">
            <span className="pill-dot" />
            OUR MEDICAL SPECIALTIES
          </div>
          <h1>
            Therapeutic Excellence Across <span className="highlight-teal">8 Medical Domains</span>
          </h1>
          <p className="hero-lead">
            Pinnacle Therapeutics is dedicated to advancing patient care through specialized, research-backed pharmaceutical formulations across key clinical therapeutic areas.
          </p>

          {/* Quick Metrics Bar */}
          <div className="hero-metrics-bar">
            <div className="stat-item">
              <span className="stat-number">8</span>
              <span className="stat-label">Core Medical Disciplines</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number">70+</span>
              <span className="stat-label">Approved Formulations</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">WHO-GMP Partner Standard</span>
            </div>
          </div>
        </div>
      </section>

      {/* 8 Focus Areas Grid */}
      <section className="therapeutic-grid-section">
        <div className="section-header-wrap">
          <p className="section-eyebrow">Comprehensive Portfolio</p>
          <h2>Targeted Care for Every Stage of Life</h2>
        </div>

        <div className="therapeutic-grid">
          {focusAreas.map((area) => (
            <article key={area.id} className="therapeutic-card">
              <div className="card-image-wrap">
                <Image
                  src={area.image}
                  alt={area.title}
                  fill
                  unoptimized
                  className="card-img"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={area.number === "01" || area.number === "02"}
                />
                <span className="card-category-pill">{area.categoryTag}</span>
              </div>

              <div className="card-body">
                <h2>{area.title}</h2>
                <p className="card-briefing">{area.briefing}</p>

                {/* Clinical Focus Bullets */}
                <div className="clinical-bullets">
                  <span className="bullets-title">Clinical Priorities:</span>
                  <ul>
                    {clinicalHighlights[area.id]?.map((bullet, i) => (
                      <li key={i}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#008B8B" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>{bullet}</span>
                      </li>
                    )) || null}
                  </ul>
                </div>

                <div className="card-footer-cta">
                  <Link href="/products" className="explore-link">
                    Explore Portfolio Products <span>↗</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Bottom Medical Partner Banner */}
      <section className="partner-cta-section">
        <div className="partner-cta-card">
          <div className="cta-copy">
            <h2>Partnering for Better Patient Outcomes</h2>
            <p>
              Are you a healthcare professional or distribution partner? Discover our full range of approved formulations and clinical prescribing details.
            </p>
          </div>
          <div className="cta-actions">
            <Link href="/products" className="button">
              View Product Catalogue <span>→</span>
            </Link>
            <Link href="/contact" className="button-secondary">
              Contact Medical Affairs ↗
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}


