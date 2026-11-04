import type { Metadata } from "next";
import { Inter, Space_Grotesk, Space_Mono } from "next/font/google";
import { LayoutGroup } from "framer-motion";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";
import Preloader from "@/components/Preloader";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  weight: ["300", "400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Ghabriel | Software Engineer",
    template: "%s | Ghabriel",
  },
  description:
    "Portfolio of Ghabriel Theo Petra Sagala — Fullstack Developer & Tech Enthusiast specializing in modern web interfaces, IoT systems, and cloud architecture.",
  keywords: [
    "Frontend Developer",
    "UI Developer",
    "Fullstack Developer",
    "Next.js",
    "React",
    "Portfolio",
    "Ghabriel",
    "Software Engineer",
    "IoT",
  ],
  authors: [{ name: "Ghabriel Theo Petra Sagala" }],
  creator: "Ghabriel Theo Petra Sagala",
  metadataBase: new URL("https://ghabriel-portofolio.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ghabriel-portofolio.vercel.app",
    siteName: "Ghabriel Portfolio",
    title: "Ghabriel | Software Engineer",
    description:
      "Portfolio of Ghabriel Theo Petra Sagala — Fullstack Developer & Tech Enthusiast.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ghabriel Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ghabriel | Software Engineer",
    description:
      "Portfolio of Ghabriel Theo Petra Sagala — Fullstack Developer & Tech Enthusiast.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://ghabriel-portofolio.vercel.app" />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${spaceMono.variable} antialiased relative min-h-screen flex flex-col bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]`}
      >
        <LayoutGroup id="portfolio-intro">
          <Preloader />
          <BackgroundEffects />
          <Navbar />
          <main className="relative z-10 mx-auto w-full max-w-[90rem] flex-1 overflow-x-clip px-4 pb-20 sm:px-6 lg:px-10">
            {children}
          </main>
          <Footer />
          <ScrollToTop />
          <ScrollProgress />
        </LayoutGroup>
      </body>
    </html>
  );
}
