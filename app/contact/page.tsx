import type { Metadata } from "next";
import { BrandLogo } from "@/components/brand-logo";
import { ContactForm } from "@/components/contact-form";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { contactEmail, contactPhoneDisplay, contactPhoneE164 } from "@/lib/site";

export const metadata: Metadata = { title: "Contact | Pinnacle Therapeutics", description: "Contact Pinnacle Therapeutics." };

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />
      <section className="contact contact-page">
        <div>
          <BrandLogo className="brand-logo-page" />
          <p className="eyebrow">Get in touch</p>
          <h1>Let’s begin a thoughtful conversation.</h1>
          <p>
            For business, careers, and general enquiries.
          </p>
          <ul className="contact-details">
            <li>
              <span>Mobile</span>
              <a href={`tel:${contactPhoneE164}`}>{contactPhoneDisplay}</a>
            </li>
            <li>
              <span>Email</span>
              <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            </li>
          </ul>
        </div>
        <ContactForm />
      </section>
      <SiteFooter />
    </main>
  );
}
