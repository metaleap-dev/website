import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MetaLeap LLC - Innovative Digital Products",
  description: "MetaLeap LLC builds innovative digital products that help families and creators achieve their goals. Discover MotifyUp and Shapemo.",
  keywords: ["MetaLeap", "MotifyUp", "Shapemo", "family apps", "goal tracking", "AI design"],
  authors: [{ name: "MetaLeap LLC" }],
  icons: {
    icon: "/favicon.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    title: "MetaLeap LLC - Innovative Digital Products",
    description: "Building innovative digital products that help families and creators achieve their goals.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
