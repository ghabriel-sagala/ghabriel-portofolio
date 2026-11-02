"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects", count: 8 },
  { name: "Certificates", href: "#sertifikat" },
  { name: "Leadership", href: "#pengalaman" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const handleScroll = useCallback(() => {
    const sections = navLinks.map((link) => link.href.slice(1));
    for (let index = sections.length - 1; index >= 0; index--) {
      const section = document.getElementById(sections[index]);
      if (section && section.getBoundingClientRect().top <= 150) {
        setActiveSection(sections[index]);
        return;
      }
    }
    setActiveSection("hero");
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMobile = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <nav
        aria-label="Navigasi utama"
        className="mx-auto flex max-w-[90rem] items-center justify-between gap-3 rounded-2xl border border-white/10 bg-neutral/75 px-3 py-2.5 shadow-lg shadow-black/20 backdrop-blur-2xl sm:gap-4 sm:px-5"
      >
        <a
          href="#hero"
          className="group flex min-w-0 items-center gap-2.5"
          aria-label="Ghabriel Theo P. S. — beranda"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/[0.08] font-display text-sm font-semibold text-primary transition-colors duration-300 group-hover:border-primary/60 group-hover:bg-primary/[0.14]">
            G
          </span>
          <span className="min-w-0">
            <span className="block truncate text-xs font-semibold leading-tight text-white sm:text-sm">
              Ghabriel Theo P. S.
            </span>
            <span className="mt-1 hidden items-center gap-1 text-[8px] font-medium uppercase tracking-[0.12em] text-primary sm:flex">
              <span aria-hidden="true">•</span>
              Software Engineer Intern
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-0.5 rounded-full border border-white/10 bg-white/[0.035] p-1 backdrop-blur-xl lg:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <li key={link.name}>
                <a
                  href={link.href}
                  aria-current={isActive ? "location" : undefined}
                  className={`inline-flex items-center gap-1 rounded-full px-3 py-2 text-[11px] font-medium transition-colors duration-300 ${
                    isActive
                      ? "bg-white/[0.09] text-white"
                      : "text-slate-400 hover:bg-white/[0.06] hover:text-white"
                  }`}
                >
                  {link.name}
                  {link.count && (
                    <span
                      className={`text-[9px] ${
                        isActive ? "text-primary" : "text-slate-500"
                      }`}
                    >
                      ({link.count})
                    </span>
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="ml-auto hidden shrink-0 items-center gap-3 sm:flex lg:ml-0">
          <span className="inline-flex items-center gap-1.5 text-[10px] text-slate-400">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-tertiary shadow-[0_0_8px_rgba(16,185,129,0.65)]"
            />
            Malang, ID
          </span>
          <a
            href="mailto:ghabrielsagala@gmail.com"
            className="rounded-full bg-white px-4 py-2 text-[11px] font-semibold text-black transition duration-300 ease-in-out hover:scale-[1.02] hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Hire Me
          </a>
        </div>

        <button
          type="button"
          className="ml-auto rounded-full border border-white/10 bg-white/[0.04] p-2 text-slate-300 transition-colors hover:bg-white/10 hover:text-white lg:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="mx-auto mt-2 max-w-[90rem] rounded-2xl border border-white/10 bg-neutral/95 p-3 shadow-2xl shadow-black/40 backdrop-blur-2xl lg:hidden"
          >
            <ul className="grid gap-1">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={closeMobile}
                      aria-current={isActive ? "location" : undefined}
                      className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm transition-colors ${
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "text-slate-300 hover:bg-white/[0.06] hover:text-white"
                      }`}
                    >
                      {link.name}
                      {link.count && (
                        <span className="text-xs text-slate-500">
                          {link.count}
                        </span>
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="mt-3 flex items-center justify-between border-t border-white/10 px-4 pt-3">
              <span className="inline-flex items-center gap-1.5 text-xs text-slate-400">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-tertiary"
                />
                Malang, ID
              </span>
              <a
                href="mailto:ghabrielsagala@gmail.com"
                onClick={closeMobile}
                className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-black transition-colors hover:bg-primary"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
