import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navItems = [
    { label: "Beranda", href: "/" },
    { label: "Portofolio", href: "/portfolio" },
    { label: "Organisasi", href: "/organisasi" },
    { label: "Sertifikat", href: "/sertifikat" }
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050505]/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 gap-4">
        <Link href="/" className="font-extrabold text-2xl tracking-tighter text-zinc-100">
          GHABRIEL<span className="text-red-600">.</span>
        </Link>

        <nav className="hidden items-center justify-center gap-6 text-sm font-semibold text-zinc-300 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative px-1 py-2 transition-all duration-300 hover:text-white active:scale-95"
            >
              <span className="relative z-10">{item.label}</span>
              <span className="pointer-events-none absolute inset-x-0 -bottom-0.5 h-[2px] scale-x-0 bg-red-500 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label={mobileMenuOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((value) => !value)}
          className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-3 text-white transition duration-200 hover:bg-white/10 md:hidden"
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
        <div className="border-t border-white/10 bg-[#050505]/95 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
