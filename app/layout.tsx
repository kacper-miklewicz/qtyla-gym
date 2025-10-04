import type { Metadata } from "next";
import { Geist_Mono, Bebas_Neue, Domine } from "next/font/google";
import localFont from "next/font/local";

import { Toaster } from "@/components/ui/sonner";
import { EmailJSProvider } from "./components/emailjs-provider";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";

import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const domine = Domine({
  variable: "--font-domine",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

const epundaSans = localFont({
  src: "./fonts/epunda-sans.ttf",
  variable: "--font-epunda-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "QTYLA Training Club - Klub treningowy premium w Kwidzynie",
    template: "%s | QTYLA Training Club",
  },
  description:
    "Ekskluzywny klub treningowy w Kwidzynie. Trening personalny, odnowa biologiczna, zdrowy styl życia z QTYLA Training Club.",
  openGraph: {
    title: "QTYLA Training Club Kwidzyn",
    description:
      "Klub treningowy premium w sercu Kwidzyna. Odkryj ekskluzywny klub treningowy QTYLA Training Club.",
    url: "https://qtyla.pl",
    siteName: "QTYLA Training Club",
    locale: "pl_PL",
    type: "website",
  },
  alternates: {
    canonical: "https://qtyla.pl",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${geistMono.variable} ${domine.variable} ${bebasNeue.variable} ${epundaSans.variable} font-sans antialiased`}
      >
        <Navbar />
        <EmailJSProvider>{children}</EmailJSProvider>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
