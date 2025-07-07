import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "FEELDX - Transforming Infrastructure Through Innovation",
  description:
    "Leading engineering and construction management company delivering innovative infrastructure solutions worldwide. Expertise in civil engineering, project management, and cutting-edge technology integration.",
  keywords: [
    "infrastructure engineering",
    "construction management",
    "civil engineering",
    "project management",
    "sustainable construction",
    "technology integration",
    "smart infrastructure",
    "engineering solutions",
  ],
  authors: [{ name: "FEELDX" }],
  creator: "FEELDX",
  publisher: "FEELDX",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://feeldx.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "FEELDX - Transforming Infrastructure Through Innovation",
    description:
      "Leading engineering and construction management company delivering innovative infrastructure solutions worldwide.",
    url: "https://feeldx.com",
    siteName: "FEELDX",
    images: [
      {
        url: "/assets/hero-image.png",
        width: 1200,
        height: 630,
        alt: "FEELDX Infrastructure Engineering",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FEELDX - Transforming Infrastructure Through Innovation",
    description:
      "Leading engineering and construction management company delivering innovative infrastructure solutions worldwide.",
    images: ["/assets/hero-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1E3D59" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
