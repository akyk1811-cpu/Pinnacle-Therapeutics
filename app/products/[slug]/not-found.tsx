import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function NotFound() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero products-hero">
        <BrandLogo className="brand-logo-page" />
        <h1>Product Not Found</h1>
        <p>Sorry, we couldn't find the product you're looking for.</p>
        <Link href="/products" className="back-to-products">
          ← Back to Products
        </Link>
      </section>
      <SiteFooter />
    </main>
  );
}
