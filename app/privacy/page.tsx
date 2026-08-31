import type { Metadata } from "next";
import { BrandLogo } from "@/components/brand-logo";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Privacy Policy | Pinnacle Therapeutics",
  description: "Learn how Pinnacle Therapeutics protects and handles your personal information.",
};

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <SiteHeader />
      <section className="legal-hero">
        <BrandLogo className="brand-logo-page" />
        <p className="eyebrow">Legal & Data Protection</p>
        <h1>Privacy Policy</h1>
        <p className="effective-date">Last Updated: August 2026</p>
      </section>

      <section className="legal-content">
        <div className="legal-container">
          <h2>1. Commitment to Privacy</h2>
          <p>
            At Pinnacle Therapeutics, protecting your privacy and personal data is a fundamental aspect of our corporate governance. This Privacy Policy outlines how we collect, process, use, and safeguard personal information when you visit our website or interact with our medical affairs and customer communications.
          </p>

          <h2>2. Information We Collect</h2>
          <p>We may collect information directly from you when you voluntarily submit inquiries through our contact forms or engage in professional communication:</p>
          <ul>
            <li><strong>Personal Contact Information:</strong> Name, professional title, healthcare organization/facility, email address, phone number, and mailing address.</li>
            <li><strong>Medical & Commercial Inquiries:</strong> Inquiries regarding our pharmaceutical products, prescribing information, wholesale distribution, or strategic partnerships.</li>
            <li><strong>Technical & Browsing Data:</strong> IP address, device specifications, browser type, and anonymous aggregate usage statistics collected via security logs to ensure website performance and prevent unauthorized access.</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>Your information is processed strictly for legitimate corporate and regulatory purposes, including:</p>
          <ul>
            <li>Responding to professional medical inquiries, product availability requests, and customer support.</li>
            <li>Fulfilling statutory pharmacovigilance and adverse event reporting obligations required by pharmaceutical regulatory authorities.</li>
            <li>Improving website performance, administrative security, and service delivery.</li>
          </ul>

          <h2>4. Data Sharing & Confidentiality</h2>
          <p>
            Pinnacle Therapeutics does not sell, rent, or trade your personal information. Data may be shared with authorized service providers (such as secure cloud hosting partners) acting under strict contractual confidentiality obligations solely to support our technical infrastructure.
          </p>

          <h2>5. Data Security & Retention</h2>
          <p>
            We implement industry-standard encryption protocols, firewall protection, and restricted administrative access controls. Personal data is retained only for as long as necessary to fulfill the purpose for which it was collected or to comply with applicable statutory retention requirements.
          </p>

          <h2>6. Your Data Rights & Contact Information</h2>
          <p>
            You have the right to request access to, correction of, or deletion of your personal data. For inquiries regarding our privacy practices or data rights, please contact our Data Protection Officer at:
          </p>
          <p className="contact-callout">
            <strong>Pinnacle Therapeutics Medical Affairs & Legal Department</strong><br />
            Email: <a href="mailto:info@pinnacletherapeutics.in">info@pinnacletherapeutics.in</a>
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
