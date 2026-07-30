import { BrandLogo } from "@/components/brand-logo";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
};

export function PageHero({ eyebrow, title, description, className = "page-hero" }: PageHeroProps) {
  return (
    <section className={className}>
      <BrandLogo className="brand-logo-page" />
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  );
}
