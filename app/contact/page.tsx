import type { Metadata } from "next";
import { BrandLogo } from "@/components/brand-logo";
import { ContactForm } from "@/components/contact-form";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = { title: "Contact | Pinnacle Therapeutics", description: "Contact Pinnacle Therapeutics." };

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />
      <section className="contact contact-page">
        <div>
          <BrandLogo className="brand-logo-page brand-logo-on-dark" />
          <p className="eyebrow">Get in touch</p>
          <h1>Let’s begin a thoughtful conversation.</h1>
          <p>
            For business, careers, and general enquiries. Medical-information and adverse-event contact channels will be
            added before launch.
          </p>
        </div>
        <ContactForm />
      </section>
      <SiteFooter />
    </main>
  );
}
