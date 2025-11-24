import "./globals.css";
import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anas Makouan | Creative Strategist (Hybrid AI ✕ Reels ✕ Messaging)",
  description:
    "Creative strategist portfolio focused on AI-powered ideation systems, Reels performance frameworks, and messaging funnel architecture.",
  openGraph: {
    title: "Anas Makouan | Creative Strategist",
    description:
      "Hybrid AI ✕ Reels ✕ Messaging strategist. Case studies, reels scripts, and creative systems.",
    url: "https://YOUR-VERCEL-URL.vercel.app",
    siteName: "Anas Makouan Portfolio",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "Anas Makouan Portfolio",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anas Makouan | Creative Strategist",
    description:
      "Hybrid AI ✕ Reels ✕ Messaging strategist. Meta-ready creative portfolio.",
    images: ["/og-default.png"],
  },
};

export default function RootLayout({
  children,
}: {
  childre
