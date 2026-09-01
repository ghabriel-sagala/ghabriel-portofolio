"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail, Download } from "lucide-react";
import { FaLinkedin as Linkedin } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certificates", href: "#sertifikat" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
    const sections = navLinks.map((l) => l.href.slice(1));
    for (let i = sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(sections[i]);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 150) {
          setActiveSection(sections[i]);
          break;
        }
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMobile = () => setIsOpen(false);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#030305]/80 backdrop-blur-xl border-b border-white/8 py-3 shadow-lg shadow-black/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group z-50">
          <span className="font-extrabold text-2xl font-mono bg-gradient-to-r from-[var(--brand-primary)] to-orange-500 bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
            GB
          </span>
          <span className="text-lg font-light text-gray-300 hidden sm:block">
            / Ghabriel
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          <ul className="flex gap-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`relative text-sm font-medium px-3 py-2 rounded-lg transition-all duration-200 ${
                    activeSection === link.href.slice(1)
                      ? "text-white"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {activeSection === link.href.slice(1) && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute inset-0 bg-white/8 rounded-lg"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="h-4 w-px bg-white/15 mx-3" />

          <div className="flex items-center gap-1">
            <a
              href="https://www.linkedin.com/in/ghabriel-sagala-93bba027b"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg text-gray-400 hover:text-[var(--brand-primary)] hover:bg-white/5 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="/CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[var(--brand-primary)]/10 border border-[var(--brand-primary)]/20 text-[var(--brand-primary)] text-sm font-medium hover:bg-[var(--brand-primary)]/20 transition-all"
            >
              <Download size={14} />
              CV
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-300 z-50 hover:text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-[#030305]/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 md:hidden z-40"
          >
            {/* Close button */}
            <button
              onClick={closeMobile}
              className="absolute top-5 right-6 p-2 text-gray-300 hover:text-white z-50"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>

            <ul className="flex flex-col items-center gap-2">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={link.href}
                    onClick={closeMobile}
                    className={`text-2xl font-space font-bold transition-colors block py-2 ${
                      activeSection === link.href.slice(1)
                        ? "text-[var(--brand-primary)]"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex gap-4 mt-4"
            >
              <a
                href="https://www.linkedin.com/in/ghabriel-sagala-93bba027b"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-white/5 text-gray-400 hover:text-[var(--brand-primary)] hover:bg-white/10 transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="/CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 text-gray-400 hover:text-[var(--brand-secondary)] hover:bg-white/10 transition-all"
              >
                <Download size={20} />
              </a>
              <a
                href="mailto:ghabrielsagala@gmail.com"
                className="p-3 rounded-full bg-white/5 text-gray-400 hover:text-[var(--brand-primary)] hover:bg-white/10 transition-all"
              >
                <Mail size={20} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
