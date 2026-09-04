import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import { products } from "@/lib/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/about", "/vision", "/therapeutic-areas", "/products", "/contact"];
  
  const staticUrls = staticPages.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const productUrls = products.map((product) => {
    const slug = product.brand.toLowerCase().replace(/[^a-z0-9-]/g, "-");
    return {
      url: `${siteUrl}/products/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    };
  });

  return [...staticUrls, ...productUrls];
}
