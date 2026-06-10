import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://onefitness-eight.vercel.app"),
  title: {
    default: "One Fitness | Premium Gym in Vizianagaram",
    template: "%s | One Fitness",
  },
  description:
    "One Fitness — Vizianagaram's premium strength and transformation gym. Expert trainers, world-class equipment, and a community that pushes you to be your best. Located at Boggula Dibba, Vizianagaram.",
  keywords: [
    "gym in Vizianagaram",
    "One Fitness",
    "fitness center Vizianagaram",
    "personal training Vizianagaram",
    "strength training",
    "body transformation",
    "best gym near me",
    "Boggula Dibba gym",
    "Andhra Pradesh gym",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "One Fitness",
    title: "One Fitness | Premium Gym in Vizianagaram",
    description:
      "Transform your body at Vizianagaram's premier fitness center. Expert coaches, top equipment, and flexible plans starting at affordable rates.",
    url: "https://onefitness-eight.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "One Fitness | Premium Gym in Vizianagaram",
    description:
      "Transform your body at Vizianagaram's premier fitness center. Expert coaches, top equipment, and flexible plans.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100">{children}</body>
    </html>
  );
}
