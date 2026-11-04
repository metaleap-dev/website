import type { Metadata } from "next";
import "@matrixzero/ui/styles.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DesignSystem from "@/components/DesignSystem";

export const metadata: Metadata = {
  title: "MetaLeap — Little Ideas. Meaningful Leaps.",
  description: "An independent digital studio making playful worlds and thoughtful apps. Discover Shapemo Arcade and MotifyUp.",
  keywords: ["MetaLeap", "Shapemo Arcade", "Glowsea", "BooDash", "MotifyUp", "games", "apps"],
  authors: [{ name: "MetaLeap LLC" }],
  icons: {
    icon: [{ url: "/favicon.ico?v=metaleap-v2", sizes: "any" }, { url: "/brand/favicon-v2.png", type: "image/png", sizes: "512x512" }],
    apple: "/brand/apple-touch-icon-v2.png",
  },
  openGraph: {
    title: "MetaLeap — Little Ideas. Meaningful Leaps.",
    description: "Playful worlds. Thoughtful apps. Discover Shapemo Arcade and MotifyUp.",
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
      <body>
        <DesignSystem>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Header />
        <main id="main-content" className="site-main">
          {children}
        </main>
        <Footer />
        </DesignSystem>
      </body>
    </html>
  );
}
