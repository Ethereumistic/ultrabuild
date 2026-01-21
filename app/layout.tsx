import type { Metadata, Viewport } from "next";
import { Geologica } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import NavBar from "@/components/layout/nav-bar";
import Footer from "@/components/layout/footer";
import { baseMetadata, defaultViewport, siteConfig } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";

const geologica = Geologica({
  variable: "--font-geologica",
  subsets: ["latin", "cyrillic"],
  display: "swap",
  preload: true,
});

/**
 * Global metadata configuration for the entire website
 * This is inherited by all pages unless overridden
 */
export const metadata: Metadata = {
  ...baseMetadata,
};

/**
 * Viewport configuration for responsive design and theme color
 */
export const viewport: Viewport = {
  ...defaultViewport,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={siteConfig.language} suppressHydrationWarning>
      <head>
        {/* Preconnect to external resources for performance */}
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />

        {/* Preconnect to fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* JSON-LD Structured Data for rich search results */}
        <JsonLd />
      </head>
      <body
        className={`${geologica.variable} antialiased font-geologica`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NavBar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
