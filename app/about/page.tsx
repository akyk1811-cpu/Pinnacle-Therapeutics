import type { Metadata } from "next";
import Image from "next/image";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "About Us | Pinnacle Therapeutics",
  description: "Learn about Pinnacle Therapeutics, our science-led quality culture, people, and commitment to patients worldwide.",
};

const storyBlocks = [
  {
    title: "Driven by Science. Defined by Quality.",
    image: "/images/about/story-science.jpg",
    alt: "Scientist holding a glass globe with a growing plant in a laboratory",
    paragraphs: [
      "Research and quality form the foundation of everything we do. Our operations are supported by WHO-GMP compliant manufacturing standards, state-of-the-art laboratories, advanced analytical capabilities and robust quality-control systems.",
      "From sourcing and development to manufacturing and delivery, we maintain rigorous quality processes designed to ensure consistency, safety, efficacy and reliability.",
      "We believe quality is not simply a regulatory requirement — it is our responsibility to every patient who ultimately depends on our products."
    ]
  },
  {
    title: "Professionally Managed. Ethically Driven.",
    image: "/images/about/story-precision.jpg",
    alt: "Dart hitting the bullseye against a city skyline",
    paragraphs: [
      "We are committed to building a pharmaceutical organization that combines professional management with strong ethical values.",
      "Our decisions are guided by transparency, integrity and responsible business practices. We believe sustainable growth can only be achieved when it creates value for patients, healthcare professionals, employees, partners and society at large."
    ]
  },
  {
    title: "People at the Heart of Our Journey",
    image: "/images/about/story-people.jpg",
    alt: "Diverse figures standing together in a circle of teamwork",
    paragraphs: [
      "Our employees are our most important strength.",
      "We strive to create a respectful, inclusive and employee-friendly environment where people can learn, contribute, innovate and grow. We encourage ownership, teamwork and continuous development because we believe that an organization can only progress when its people progress with it."
    ]
  },
  {
    title: "Patient First. Always.",
    image: "/images/about/story-together.jpg",
    alt: "Climbers helping each other reach the summit at sunrise",
    paragraphs: [
      "At the heart of our organization is the patient.",
      "Every product, process and partnership ultimately has one purpose — to contribute meaningfully to better health and better lives.",
      "We aspire to build trusted healthcare brands that combine scientific credibility, consistent quality and accessibility, while continuously identifying opportunities to address evolving healthcare needs."
    ]
  }
];

export default function AboutPage() {
  return (
    <main className="about-page">
      <SiteHeader />

      <section className="about-hero">
        <div className="about-hero-content">
          <div className="who-we-are-eyebrow">
            <span className="eyebrow-line" />
            <span className="eyebrow-text">WHO WE ARE</span>
          </div>
          <h1 className="about-title">
            Company <span className="highlight-teal">Profile</span>
          </h1>
          <p className="about-lead">
            Founded in 2010, we are a professionally managed, research-driven pharmaceutical organization built on a simple belief — better healthcare begins with uncompromising quality, scientific thinking and genuine care for people.
          </p>
          <p className="about-subtext">
            Our journey began with a diverse team of entrepreneurs, pharmacists, quality-control professionals and experienced marketing leaders, bringing together scientific expertise, industry knowledge and a deep understanding of healthcare needs.
          </p>
          <p className="about-subtext">
            Over the years, we have evolved into an organization with global aspirations and a strong commitment to excellence, focused on developing and delivering healthcare solutions that meet the expectations of patients, healthcare professionals and our business partners.
          </p>

          <div className="badge-grid">
            <div className="badge-item">
              <div className="badge-icon badge-teal">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span>WHO-GMP Compliant</span>
            </div>
            <div className="badge-item">
              <div className="badge-icon badge-green">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 2v7.31L4.75 18.25A2 2 0 0 0 6.44 21h11.12a2 2 0 0 0 1.69-2.75L14 9.31V2" />
                  <line x1="8.5" y1="2" x2="15.5" y2="2" />
                </svg>
              </div>
              <span>Research &amp; Quality Led</span>
            </div>
            <div className="badge-item">
              <div className="badge-icon badge-teal-light">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                </svg>
              </div>
              <span>Professionally Managed</span>
            </div>
            <div className="badge-item">
              <div className="badge-icon badge-lime">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <span>Patient First</span>
            </div>
          </div>
        </div>

        <div className="about-hero-visual">
          <div className="curved-image-frame about-hero-map-frame">
            <Image
              src="/images/about/company-profile-hero.jpg"
              alt="Pinnacle Therapeutics global presence across India, Dubai, Singapore and other markets"
              fill
              className="about-hero-img"
              priority
              unoptimized
              sizes="(max-width: 900px) 100vw, 50vw"
            />
            <div className="curved-overlay-accent" />
          </div>
        </div>
      </section>

      {storyBlocks.map((block, index) => (
        <section key={block.title} className={`about-story${index % 2 === 1 ? " about-story-reverse" : ""}`}>
          <div className="about-story-copy">
            <h2>{block.title}</h2>
            <span className="title-underline" />
            {block.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="about-story-visual">
            <Image
              src={block.image}
              alt={block.alt}
              fill
              unoptimized
              className="about-story-img"
              sizes="(max-width: 900px) 100vw, 46vw"
            />
          </div>
        </section>
      ))}

      <section className="about-global">
        <div className="about-story-copy">
          <h2>Growing Globally. Giving Back.</h2>
          <span className="title-underline" />
          <p>Our ambition extends beyond markets and business numbers.</p>
          <p>
            We aspire to establish a globally respected pharmaceutical organization known for quality, innovation, integrity and responsible growth.
          </p>
          <p>
            At the same time, we believe that success carries a responsibility to society. As we grow, we are committed to giving back to the communities around us through initiatives that support health, education, awareness and social well-being.
          </p>
        </div>
      </section>

      <section className="philosophy-section">
        <p className="philosophy-label">Our Philosophy</p>
        <blockquote>
          “Science that serves. Quality that inspires trust.
          <br />
          People who make a difference.”
        </blockquote>
        <p>
          We are building more than a pharmaceutical company.
          We are building an organization where science meets compassion, quality meets responsibility, and growth creates a positive impact.
        </p>
      </section>

      <SiteFooter />
    </main>
  );
}
