import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dm = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Studio Pharma | Pilates & Wellness · Sanremo",
  description:
    "Studio di Pilates Reformer, Mat Pilates, California Barre e Beauty Center nel cuore di Sanremo, vicino al Teatro Ariston.",
  keywords: [
    "pilates reformer sanremo",
    "california barre sanremo",
    "mat pilates sanremo",
    "studio pharma",
    "beauty center sanremo",
    "danza classica sanremo",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it" className={`${cormorant.variable} ${dm.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
