import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/config/site";
import { Analytics } from "@vercel/analytics/react";
import { ViewTransitions } from "next-view-transitions";
import { DM_Sans } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const dm_sans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: ["Next.js", "React", "Express.JS", "MongoDB", "Node.JS"],
  authors: [
    {
      name: "Colin Guinane",
      url: "https://c-g.dev",
    },
  ],
  creator: "colinguinane1",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@colinguinane1",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html
        lang="en"
        className={` ${dm_sans.className} grid place-content-center antialiased`}
      >
        <body className="max-w-2xl min-w-screen min-w-96 min-h-screen overflow-x-hidden">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Header />
            <div className="w-screen md:w-fit min-h-screen md:mt-10">
              {children}
            </div>
            <Footer />
          </ThemeProvider>
        </body>
      </html>
      <Analytics />
    </ViewTransitions>
  );
}
