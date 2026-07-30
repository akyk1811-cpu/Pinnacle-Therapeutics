"use client";

import Link from "next/link";
import { useState } from "react";
import { BrandLogo } from "@/components/brand-logo";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <Link className="brand" href="/" aria-label="Pinnacle Therapeutics home">
        <BrandLogo className="brand-logo" priority />
      </Link>
      <button
        className="menu"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="navigation"
      >
        Menu
      </button>
      <nav id="navigation" className={open ? "open" : ""}>
        <Link href="/about">About</Link>
        <Link href="/vision">Vision</Link>
        <Link href="/therapeutic-areas">Focus areas</Link>
        <Link href="/products">Products</Link>
        <Link href="/contact" className="nav-cta">
          Contact us
        </Link>
      </nav>
    </header>
  );
}
