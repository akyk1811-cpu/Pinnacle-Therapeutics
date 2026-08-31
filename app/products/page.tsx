import type { Metadata } from "next";
import Image from "next/image";
import { BrandLogo } from "@/components/brand-logo";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Products | Pinnacle Therapeutics",
  description: "Explore the Pinnacle Therapeutics product portfolio.",
};

export default function ProductsPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero products-hero">
        <BrandLogo className="brand-logo-page" />
        <p className="eyebrow">Our products</p>
        <h1>Formulations made for modern healthcare.</h1>
        <p>
          Explore the current portfolio by brand and composition. Product details should always be used under the
          guidance of a qualified healthcare professional.
        </p>
      </section>
      <section className="portfolio-intro">
        <p className="eyebrow">Product categories</p>
        <div>
          {["Tablets", "Capsules", "Syrups", "Injections", "Nutraceuticals", "Antibiotics"].map((category) => (
            <span key={category}>{category}</span>
          ))}
        </div>
      </section>
      <section className="product-grid">
        {products.map((product) => (
          <article className="product-tile" key={product.brand}>
            {product.image ? (
              <div className="product-image-wrap">
                <Image
                  src={product.image}
                  alt={product.brand}
                  fill
                  unoptimized
                  className="product-img"
                  sizes="(max-width: 760px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            ) : null}
            <p className="product-tag">
              {product.category} · {product.form}
            </p>
            <h2>{product.brand}</h2>
            {product.composition ? (
              <p className="composition">{product.composition}</p>
            ) : (
              <p className="composition pending">{product.note}</p>
            )}
            {product.note && product.composition ? <p className="product-note">{product.note}</p> : null}
          </article>
        ))}
      </section>
      <section className="product-disclaimer">
        <p>
          Important: This product listing is informational and is not a substitute for medical advice, diagnosis, or
          treatment. Full prescribing and safety information will be added after regulatory review.
        </p>
      </section>
      <SiteFooter />
    </main>
  );
}
