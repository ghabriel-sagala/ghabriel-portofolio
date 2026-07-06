"use client";

import Link from "next/link";
import Header from "./components/Header";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const techBadges = ["Next.js", "React", "TypeScript", "Tailwind", "Node.js"];

export default function Landing() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoaded(true), 80);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main className={`${inter.className} relative min-h-screen bg-transparent text-[var(--fg)] overflow-hidden`}>      
      <Header />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-8rem] top-10 h-72 w-72 rounded-full bg-[var(--accent)]/20 blur-3xl" />
        <div className="absolute right-[-10rem] top-1/4 h-80 w-80 rounded-full bg-[var(--accent-2)]/10 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-56 bg-[radial-gradient(circle_at_top,rgba(239,68,68,0.18),transparent_50%)] pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-[radial-gradient(circle_at_bottom,rgba(0,255,209,0.12),transparent_45%)] pointer-events-none" />
      </div>

      <div className={`relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-24 text-center transition-all duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        <div className="w-full max-w-4xl">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[var(--border)] bg-[var(--glass)] px-5 py-2 text-sm text-[var(--muted)] shadow-[0_20px_80px_rgba(0,0,0,0.08)] backdrop-blur-md">
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)] shadow-[0_0_14px_rgba(239,68,68,0.35)]" />
            Web developer portfolio • built for modern interfaces
          </div>

          <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-[var(--fg)] sm:text-6xl md:text-7xl">
            Hello, I'm Ghabriel.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
            This site is designed as a developer-first portfolio: clean visuals, strong interactions, and real code-driven detail from the first impression.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/home" className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-8 py-3.5 text-sm font-semibold text-[var(--btn-fg)] shadow-[0_0_25px_rgba(239,68,68,0.32)] transition duration-300 hover:-translate-y-1 hover:bg-[var(--accent-2)] active:scale-95">
              Enter my work
            </Link>
            <div className="rounded-full border border-[var(--border)] bg-[var(--glass)] px-5 py-3 text-sm text-[var(--muted)]">
              Crafted with <span className="font-semibold text-[var(--fg)]">Next.js</span>, <span className="font-semibold text-[var(--fg)]">Tailwind</span>, and a developer mindset.
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-[28px] border border-[var(--border)] bg-[var(--card)]/90 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.14)]">
              <p className="text-sm uppercase tracking-[0.35em] text-[var(--muted)]">Role</p>
              <p className="mt-4 text-xl font-semibold text-[var(--fg)]">Frontend & UI developer</p>
            </div>
            <div className="rounded-[28px] border border-[var(--border)] bg-[var(--card)]/90 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.14)]">
              <p className="text-sm uppercase tracking-[0.35em] text-[var(--muted)]">Focus</p>
              <p className="mt-4 text-xl font-semibold text-[var(--fg)]">Responsive interactions</p>
            </div>
            <div className="rounded-[28px] border border-[var(--border)] bg-[var(--card)]/90 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.14)]">
              <p className="text-sm uppercase tracking-[0.35em] text-[var(--muted)]">Built with</p>
              <p className="mt-4 text-xl font-semibold text-[var(--fg)]">Modern web stack</p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className={`rounded-[32px] border border-[var(--border)] bg-[var(--glass)] p-8 shadow-[0_35px_120px_rgba(0,0,0,0.15)] backdrop-blur-xl transition duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--accent)]">What this page shows</p>
            <h2 className="mt-4 text-3xl font-bold text-[var(--fg)]">A portfolio created by a curious web developer.</h2>
            <p className="mt-4 text-base leading-7 text-[var(--muted)]">
              From the first screen, the website speaks in gradients, code-inspired styling, and clear product intent. This is more than a landing page — it’s a developer showcase.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {techBadges.map((badge) => (
                <span key={badge} className="rounded-full border border-[var(--border)] bg-[var(--glass)] px-4 py-2 text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className={`relative overflow-hidden rounded-[32px] border border-[var(--border)] bg-[var(--card)]/90 p-6 shadow-[0_35px_120px_rgba(0,0,0,0.16)] transition duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="absolute inset-x-0 top-0 h-32 bg-[var(--accent)]/10 blur-3xl" />
            <div className="relative z-10">
              <p className="text-sm uppercase tracking-[0.35em] text-[var(--accent)]">Live preview</p>
              <div className="mt-6 rounded-3xl border border-[var(--border)] bg-[var(--bg)] p-5 text-left text-sm text-[var(--muted)]">
                <pre className="whitespace-pre-wrap font-mono leading-7">
{`const website = {
  builtWith: ["Next.js", "Tailwind CSS", "TypeScript"],
  goal: "Show my developer skill from the first screen",
  style: "dark gradient, polished interactions, glassmorphism"
};`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
