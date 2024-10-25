import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { ViewTransitions } from "next-view-transitions";
import { DM_Sans } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const dm_sans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://c-g.dev"),
  title: "Colin Guinane",
  description:
    "Edmonton-based Software Engineer, specializing in building web applications with React and Next.js.",
  openGraph: {
    title: "Colin Guinane",
    url: "https://c-g.dev",
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
        <body className="max-w-2xl min-w-screen min-w-96 min-h-screen">
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
