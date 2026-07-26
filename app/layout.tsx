import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pinnacle Therapeutics | Science with purpose",
  description: "Pinnacle Therapeutics — a future-facing pharmaceutical company website.",
  robots: { index: false, follow: false }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
