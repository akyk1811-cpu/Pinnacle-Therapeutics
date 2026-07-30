import Image from "next/image";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
};

export function BrandLogo({ className, priority = false }: BrandLogoProps) {
  return (
    <Image
      src="/images/logo.png"
      alt="Pinnacle Therapeutics"
      width={1024}
      height={1024}
      className={className}
      priority={priority}
      sizes="(max-width: 760px) 60vw, 360px"
    />
  );
}
