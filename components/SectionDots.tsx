"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "pengalaman", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "sertifikat", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

export default function SectionDots() {
  const [activeSection, setActiveSection] = useState("hero");

  const handleScroll = useCallback(() => {
    for (let i = sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(sections[i].id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 200) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-end gap-3">
      {sections.map((section) => {
        const isActive = activeSection === section.id;
        return (
          <button
            key={section.id}
            onClick={() => {
              document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group flex items-center gap-3 py-1"
            aria-label={`Go to ${section.label}`}
          >
            {/* Label */}
            <span
              className={`text-xs font-mono tracking-wider transition-all duration-300 ${
                isActive
                  ? "opacity-100 text-[var(--brand-primary)] translate-x-0"
                  : "opacity-0 text-gray-500 translate-x-2 group-hover:opacity-70 group-hover:translate-x-0"
              }`}
            >
              {section.label}
            </span>

            {/* Dot */}
            <div className="relative">
              {isActive && (
                <motion.div
                  layoutId="section-dot"
                  className="absolute -inset-1 rounded-full bg-[var(--brand-primary)]/20"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <div
                className={`relative w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-[var(--brand-primary)] scale-125"
                    : "bg-white/20 group-hover:bg-white/40"
                }`}
              />
            </div>
          </button>
        );
      })}
    </div>
  );
}
