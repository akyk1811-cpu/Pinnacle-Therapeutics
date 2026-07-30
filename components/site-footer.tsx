import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";

export function SiteFooter() {
  return (
    <footer>
      <Link className="brand" href="/" aria-label="Pinnacle Therapeutics home">
        <BrandLogo className="brand-logo brand-logo-footer" />
      </Link>
      <p>© {new Date().getFullYear()} Pinnacle Therapeutics. All rights reserved.</p>
      <div>
        <Link href="/privacy">Privacy</Link>
        <Link href="/terms">Terms</Link>
      </div>
    </footer>
  );
}
