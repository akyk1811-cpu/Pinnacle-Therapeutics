import type { Metadata } from "next";
import { BrandLogo } from "@/components/brand-logo";
import { ContactForm } from "@/components/contact-form";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = { title: "About | Pinnacle Therapeutics", description: "About Pinnacle Therapeutics." };

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero">
        <BrandLogo className="brand-logo-page" />
        <p className="eyebrow">About us</p>
        <h1>Healthcare solutions, with quality at the centre.</h1>
        <p>
          Pinnacle Therapeutics is committed to providing safe, effective, and reliable healthcare solutions. We work with
          trusted manufacturing partners and maintain strict quality standards to pursue excellence in every product.
        </p>
      </section>
      <section className="content-band">
        <h2>Quality, affordability, and customer satisfaction—built into our approach.</h2>
        <p>
          We are dedicated to delivering high-quality pharmaceutical products that improve lives. Our focus is
          innovation, quality, affordability, and customer satisfaction while maintaining the highest industry standards.
        </p>
      </section>
      <SiteFooter />
    </main>
  );
}
