import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";
import Preloader from "@/components/Preloader";
import SectionDots from "@/components/SectionDots";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
  title: "Ghabriel | Software Engineer & IT Enthusiast",
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
  openGraph: {
    title: "Ghabriel | Software Engineer & IT Enthusiast",
    description:
      "Portfolio of Ghabriel Theo Petra Sagala — Fullstack Developer & Tech Enthusiast.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased relative min-h-screen flex flex-col`}
      >
        <Preloader />
        <BackgroundEffects />
        <ScrollProgress />
        <Navbar />
        <SectionDots />
        <main className="flex-1 w-full max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
