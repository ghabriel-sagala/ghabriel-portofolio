"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navItems = [
    { label: "Beranda", href: "/home" },
    { label: "Portofolio", href: "/portfolio" },
    { label: "Organisasi", href: "/organisasi" },
    { label: "Sertifikat", href: "/sertifikat" }
  ];

  return (
    <header className="sticky top-0 z-50 border-b" style={{ borderColor: 'rgba(255,255,255,0.04)' }}>
      <div className="mx-auto relative flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 gap-4 bg-[var(--glass)]/60 backdrop-blur-md">
        <Link href="/home" className="font-extrabold text-2xl tracking-tighter text-[var(--fg)] flex items-center gap-2">
          <span className="font-mono text-[20px]">GHABRIEL</span>
          <span className="inline-block h-3 w-3 rounded-full bg-[var(--accent)] shadow-[0_0_18px_rgba(0,255,209,0.18)]" />
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-[var(--muted)] md:absolute md:left-1/2 md:top-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative px-1 py-2 transition-all duration-300 it-link"
            >
              <span className="relative z-10">{item.label}</span>
              <span className="pointer-events-none absolute inset-x-0 -bottom-0.5 h-[3px] scale-x-0 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label={mobileMenuOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((value) => !value)}
          className="inline-flex items-center justify-center rounded-full border border-white/10 bg-[var(--glass)] p-3 text-[var(--fg)] transition duration-200 hover:scale-105 md:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-5 bg-current transition-transform duration-200 ${mobileMenuOpen ? "translate-y-1 rotate-45" : ""}`}></span>
            <span className={`block h-0.5 w-5 bg-current transition-opacity duration-200 ${mobileMenuOpen ? "opacity-0" : ""}`}></span>
            <span className={`block h-0.5 w-5 bg-current transition-transform duration-200 ${mobileMenuOpen ? "-translate-y-1 -rotate-45" : ""}`}></span>
          </div>
        </button>
      </div>

      {mobileMenuOpen ? (
        <div className="border-t md:hidden" style={{ borderColor: 'rgba(255,255,255,0.04)' }}>
          <div className="bg-[var(--glass)]/80 px-6 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl border border-white/6 bg-[var(--glass-2)] px-4 py-3 text-sm font-semibold text-[var(--fg)] transition hover:translate-x-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
