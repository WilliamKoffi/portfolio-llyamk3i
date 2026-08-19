import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter, JetBrains_Mono } from "next/font/google";
import { SITE_URL } from "@/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains",
  display: "swap",
});

const TITLE = "Konan William Koffi - Portfolio développeur web & mobile";
const DESCRIPTION =
  "Portfolio de Konan William Koffi, développeur web et mobile spécialisé en applications modernes, backend, cybersécurité et automatisation.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  authors: [{ name: "Konan William Koffi" }],
  openGraph: {
    title: TITLE,
    description:
      "Développement web, mobile, backend, cybersécurité et automatisation pour des projets numériques performants.",
    url: "/",
    siteName: "Konan William Koffi - Portfolio",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description:
      "Développement web, mobile, backend, cybersécurité et automatisation pour des projets numériques performants.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#fcfbfa",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${inter.variable} ${cormorant.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-brand-bg font-sans antialiased text-brand-dark selection:bg-brand-accent selection:text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
