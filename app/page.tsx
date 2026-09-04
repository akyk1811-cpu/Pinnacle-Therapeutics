import Link from "next/link";
import Image from "next/image";
import { BrandLogo } from "@/components/brand-logo";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { focusAreas } from "@/lib/site";
import { products } from "@/lib/products";

export default function Home() {
  const row1Brands = ["UBX-GOLD", "UBX-FORTE", "DYDOPURE"];
  const row2Brands = ["GILDAGEST-200 SR", "GILDAGEST-300 SR"];

  const row1Products = row1Brands.map(b => products.find(p => p.brand === b)).filter(Boolean);
  const row2Products = row2Brands.map(b => products.find(p => p.brand === b)).filter(Boolean);

  return (
    <main>
      <SiteHeader />

      {/* Hero Banner */}
      <section className="hero">
        <div className="hero-copy">
          <BrandLogo className="brand-logo-hero" priority />
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Healthcare with Purpose
          </div>
          <h1>
            Better health, made <i>accessible.</i>
          </h1>
          <p className="lede">
            We are dedicated to delivering high-quality, reliable pharmaceutical formulations that improve lives—driven by innovation, quality, affordability, and patient satisfaction.
          </p>
          <div className="hero-button-group">
            <Link className="button" href="/about">
              Discover our story <span>→</span>
            </Link>
            <Link className="button-secondary" href="/products">
              Explore Products ↗
            </Link>
          </div>
        </div>
        <div className="hero-art">
          <div className="orb orb-a" />
          <div className="orb orb-b" />
          <div className="orb orb-c" />
          <div className="hero-art-card">
            <BrandLogo className="brand-logo-feature" priority />
            <span className="hero-art-tag">Pharmaceutical Excellence</span>
          </div>
        </div>
      </section>

      {/* Metrics Banner */}
      <section className="metrics">
        <div className="metric-card">
          <div className="metric-number">100%</div>
          <div className="metric-label">Quality Assured Formulations</div>
        </div>
        <div className="metric-card">
          <div className="metric-number">70+</div>
          <div className="metric-label">Approved Product Offerings</div>
        </div>
        <div className="metric-card">
          <div className="metric-number">8+</div>
          <div className="metric-label">Therapeutic Care Categories</div>
        </div>
        <div className="metric-card">
          <div className="metric-number">WHO-GMP</div>
          <div className="metric-label">Certified Partner Standards</div>
        </div>
      </section>

      {/* Statement Section */}
      <section className="statement">
        <BrandLogo className="brand-logo-statement" />
        <p className="eyebrow">Our foundation</p>
        <h2>Dependable healthcare solutions, thoughtfully delivered.</h2>
        <p>
          We work with trusted manufacturing partners and maintain strict regulatory quality standards to provide safe,
          effective, and reliable healthcare solutions across India and beyond.
        </p>
      </section>

      {/* Featured Products Showcase */}
      <section className="products">
        <div>
          <p className="eyebrow">Featured Portfolio</p>
          <h2>Built with intent. Shared with care.</h2>
          <p>
            Explore our highlighted formulations engineered for nutraceuticals, women’s health, wellness, and anti-infective care.
          </p>
          <Link href="/products" className="text-link">
            View full 70+ product catalogue →
          </Link>
        </div>

        <div className="featured-showcase-wrap" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {/* Row 1: UBX GOLD, UBX FORTE, DYDOPURE */}
          <div className="product-grid" style={{ padding: 0, gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {row1Products.map((product) => product && (
              <article className="product-tile" key={product.brand}>
                {product.image ? (
                  <div className="product-image-wrap" style={{ height: "180px" }}>
                    <Image
                      src={product.image}
                      alt={product.brand}
                      fill
                      className="product-img"
                      sizes="320px"
                    />
                  </div>
                ) : null}
                <p className="product-tag">{product.category} · {product.form}</p>
                <h2 style={{ fontSize: "22px", margin: "10px 0 6px" }}>{product.brand}</h2>
                {product.composition ? (
                  <p className="composition" style={{ fontSize: "12px", WebkitLineClamp: 2, display: "-webkit-box", WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                    {product.composition}
                  </p>
                ) : null}
              </article>
            ))}
          </div>

          {/* Row 2: GILDAGEST 200 SR, GILDAGEST 300 SR */}
          <div className="product-grid" style={{ padding: 0, gridTemplateColumns: "repeat(2, 1fr)", gap: "24px" }}>
            {row2Products.map((product) => product && (
              <article className="product-tile" key={product.brand}>
                {product.image ? (
                  <div className="product-image-wrap" style={{ height: "180px" }}>
                    <Image
                      src={product.image}
                      alt={product.brand}
                      fill
                      className="product-img"
                      sizes="480px"
                    />
                  </div>
                ) : null}
                <p className="product-tag">{product.category} · {product.form}</p>
                <h2 style={{ fontSize: "22px", margin: "10px 0 6px" }}>{product.brand}</h2>
                {product.composition ? (
                  <p className="composition" style={{ fontSize: "12px", WebkitLineClamp: 2, display: "-webkit-box", WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                    {product.composition}
                  </p>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="focus">
        <div>
          <p className="eyebrow">Where we focus</p>
          <h2>Care that meets real life.</h2>
        </div>
        <div className="focus-grid">
          {focusAreas.map((area) => (
            <article key={area.id} className="focus-card">
              <div className="focus-card-body">
                <span className="focus-category-tag">{area.categoryTag}</span>
                <h3>{area.title}</h3>
                <Link href="/therapeutic-areas" aria-label={`Explore ${area.title}`}>
                  Explore ↗
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
