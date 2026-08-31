import type { Metadata } from "next";
import { BrandLogo } from "@/components/brand-logo";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Terms of Use | Pinnacle Therapeutics",
  description: "Terms and conditions governing the use of Pinnacle Therapeutics official web services.",
};

export default function TermsPage() {
  return (
    <main className="legal-page">
      <SiteHeader />
      <section className="legal-hero">
        <BrandLogo className="brand-logo-page" />
        <p className="eyebrow">Terms & Conditions</p>
        <h1>Terms of Use</h1>
        <p className="effective-date">Last Updated: August 2026</p>
      </section>

      <section className="legal-content">
        <div className="legal-container">
          <h2>1. Acceptance of Terms</h2>
          <p>
            Welcome to the official web portal of Pinnacle Therapeutics. By accessing, browsing, or using this website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree to these terms, please refrain from using our services.
          </p>

          <h2>2. Medical Information Disclaimer</h2>
          <p>
            The content provided on this website—including product descriptions, active pharmaceutical ingredient compositions, therapeutic focus briefings, and corporate summaries—is presented solely for general educational and informational purposes.
          </p>
          <div className="warning-box">
            <strong>Important Notice:</strong> Content on this site is not intended to provide medical advice, diagnosis, or treatment. Patients and consumers must always consult a licensed healthcare professional regarding medical conditions or medication choices. Healthcare providers should refer to full prescribing information approved by regulatory authorities.
          </div>

          <h2>3. Intellectual Property Rights</h2>
          <p>
            All content on this website—including trademarks, brand logos, product names ("MURFIX", "GILDAGEST", "ALPHAHEP", "PAXO", "KLZ", "ZEPAMOL", etc.), graphics, website code, and visual design elements—is the exclusive intellectual property of Pinnacle Therapeutics and protected by copyright, trademark, and unfair competition laws. Unauthorized copying, modification, or redistribution is strictly prohibited.
          </p>

          <h2>4. Permitted Use</h2>
          <p>
            You are granted a limited, non-exclusive, non-transferable license to access and view website content for personal, non-commercial, or educational purposes. You agree not to attempt to breach website security, transmit malicious code, or scrape site content without express prior written authorization.
          </p>

          <h2>5. Limitation of Liability</h2>
          <p>
            Pinnacle Therapeutics strives to ensure that all information on this website is accurate and current. However, the site and its contents are provided on an "as is" and "as available" basis without warranties of any kind. Pinnacle Therapeutics shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use this site.
          </p>

          <h2>6. Governing Law & Contact Information</h2>
          <p>
            These Terms of Use shall be governed by and construed in accordance with applicable state and federal laws. For inquiries regarding our terms, commercial licensing, or legal notices, please reach out to us at:
          </p>
          <p className="contact-callout">
            <strong>Pinnacle Therapeutics Corporate Legal Office</strong><br />
            Email: <a href="mailto:info@pinnacletherapeutics.in">info@pinnacletherapeutics.in</a>
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
