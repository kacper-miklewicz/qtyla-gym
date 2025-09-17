import type { Metadata } from "next";
import { Geist_Mono, Lora, Bebas_Neue } from "next/font/google";
import localFont from "next/font/local";

import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";

import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
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
  title: "QTYLA Training Club",
  description: "Klub fitness w Kwidzynie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${geistMono.variable} ${lora.variable} ${bebasNeue.variable} ${epundaSans.variable} font-sans antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
