import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BrandLogo } from "@/components/brand-logo";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { products, type Product } from "@/lib/products";
import { siteUrl } from "@/lib/site";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all products
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.brand.toLowerCase().replace(/[^a-z0-9-]/g, "-"),
  }));
}

// Find product by slug
function findProductBySlug(slug: string): Product | undefined {
  return products.find(
    (product) => product.brand.toLowerCase().replace(/[^a-z0-9-]/g, "-") === slug
  );
}

// Generate metadata for SEO
export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = findProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found | Pinnacle Therapeutics",
    };
  }

  const title = `${product.brand} | Pinnacle Therapeutics`;
  const description = product.composition
    ? `${product.brand} - ${product.composition}. ${product.category} product from Pinnacle Therapeutics.`
    : `${product.brand} - ${product.category} product from Pinnacle Therapeutics.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `${siteUrl}/products/${slug}`,
      images: product.image ? [
        {
          url: product.image,
          width: 1200,
          height: 630,
          alt: product.brand,
        },
      ] : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: product.image ? [product.image] : [],
    },
    alternates: {
      canonical: `${siteUrl}/products/${slug}`,
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = findProductBySlug(slug);

  if (!product) {
    notFound();
  }

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.brand,
    description: product.composition || product.note || `${product.category} product`,
    category: product.category,
    image: product.image,
    brand: {
      "@type": "Brand",
      name: "Pinnacle Therapeutics",
    },
    manufacturer: {
      "@type": "Organization",
      name: "Pinnacle Therapeutics",
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <SiteHeader />
      <section className="page-hero products-hero">
        <BrandLogo className="brand-logo-page" />
        <p className="eyebrow">Product Details</p>
        <h1>{product.brand}</h1>
        <p>
          {product.category} · {product.form}
        </p>
      </section>
      <section className="product-detail">
        <div className="product-detail-content">
          {product.image && (
            <div className="product-image-wrap-large">
              <Image
                src={product.image}
                alt={product.brand}
                fill
                unoptimized
                className="product-img-large"
                priority
              />
            </div>
          )}
          <div className="product-info">
            <div className="product-meta">
              <span className="product-category">{product.category}</span>
              <span className="product-form">{product.form}</span>
            </div>
            {product.composition && (
              <div className="product-composition">
                <h3>Composition</h3>
                <p>{product.composition}</p>
              </div>
            )}
            {product.note && (
              <div className="product-note">
                <h3>Note</h3>
                <p>{product.note}</p>
              </div>
            )}
            <div className="product-disclaimer-detail">
              <p>
                <strong>Important:</strong> This product information is for educational purposes only and is not a
                substitute for medical advice, diagnosis, or treatment. Always consult a qualified healthcare professional
                before using any medication.
              </p>
            </div>
            <Link href="/products" className="back-to-products">
              ← Back to Products
            </Link>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
