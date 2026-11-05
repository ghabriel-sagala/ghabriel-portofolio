"use client";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState, type PointerEvent } from "react";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Certificates", href: "#sertifikat" },
];

function MagneticHireLink({ onClick }: { onClick?: () => void }) {
  const [desktopMotion, setDesktopMotion] = useState(false);
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const x = useSpring(pointerX, { stiffness: 340, damping: 24, mass: 0.35 });
  const y = useSpring(pointerY, { stiffness: 340, damping: 24, mass: 0.35 });
  const rotateX = useTransform(y, [-7, 7], [1.4, -1.4]);
  const rotateY = useTransform(x, [-7, 7], [-1.4, 1.4]);

  useEffect(() => {
    const media = window.matchMedia(
      "(min-width: 1024px) and (hover: hover) and (pointer: fine)",
    );
    const updatePointerMode = () => setDesktopMotion(media.matches);

    updatePointerMode();
    media.addEventListener("change", updatePointerMode);
    return () => media.removeEventListener("change", updatePointerMode);
  }, []);

  const handlePointerMove = (event: PointerEvent<HTMLAnchorElement>) => {
    if (!desktopMotion || reduceMotion || event.pointerType !== "mouse") return;

    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(
      Math.max(-7, Math.min(7, (event.clientX - bounds.left - bounds.width / 2) * 0.16)),
    );
    pointerY.set(
      Math.max(-7, Math.min(7, (event.clientY - bounds.top - bounds.height / 2) * 0.2)),
    );
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <motion.a
      href="mailto:ghabrielsagala@gmail.com"
      onClick={onClick}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      style={
        reduceMotion
          ? undefined
          : { x, y, rotateX, rotateY, transformPerspective: 600 }
      }
      className="group relative inline-flex min-h-11 items-center justify-center overflow-hidden rounded-sm border border-[#E8DCC4]/65 bg-[#E8DCC4] px-5 py-2.5 font-display text-sm font-semibold text-[#1F3D2B] transition-colors duration-200 hover:border-white hover:bg-white active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E8DCC4]"
    >
      <span
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-px bg-[#1F3D2B]/20 transition-opacity group-hover:opacity-0"
      />
      Hire Me
    </motion.a>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();
  const activeIndicator = hoveredLink ?? activeSection;

  useEffect(() => {
    const observedSections = navLinks
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((section): section is HTMLElement => section !== null);
    if (observedSections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (first, second) =>
              first.boundingClientRect.top - second.boundingClientRect.top,
          );
        const currentSection = visibleSections[0]?.target.id;
        if (currentSection) setActiveSection(currentSection);
      },
      { rootMargin: "-24% 0px -64% 0px", threshold: 0 },
    );

    observedSections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    const closeMenuOnNavigation = () => setIsOpen(false);
    window.addEventListener("hashchange", closeMenuOnNavigation);
    return () => window.removeEventListener("hashchange", closeMenuOnNavigation);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      <nav
        aria-label="Primary navigation"
        className="relative w-full border-b border-[#E8DCC4]/25 bg-[rgba(31,61,43,0.88)] backdrop-blur-[18px] backdrop-saturate-125"
      >
        <div className="mx-auto flex min-h-16 w-full max-w-[96rem] items-center justify-between gap-3 px-3 py-2.5 sm:min-h-[4.5rem] sm:gap-5 sm:px-6 lg:px-10">
          <a
            href="#hero"
            className="group flex min-h-11 min-w-0 items-center gap-2.5 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E8DCC4] sm:gap-3"
            aria-label="Ghabriel Theo P. S. home"
          >
            <span
              aria-hidden="true"
              className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#E8DCC4]/55 font-display text-sm font-bold text-[#E8DCC4] transition-colors group-hover:border-white group-hover:text-white sm:h-10 sm:w-10"
            >
              G.
            </span>
            <span className="min-w-0">
              <span className="block truncate font-display text-xs font-bold leading-tight text-[#E8DCC4] sm:text-base">
                Ghabriel Theo P. S.
              </span>
              <span className="mt-1 block font-mono text-[8px] leading-tight text-[#E8DCC4]/80 sm:text-[9px]">
                Software Engineer
              </span>
            </span>
          </a>

          <ul
            className="hidden items-center gap-1 lg:flex"
            onPointerLeave={() => setHoveredLink(null)}
            onBlurCapture={(event) => {
              if (
                !(event.relatedTarget instanceof Node) ||
                !event.currentTarget.contains(event.relatedTarget)
              ) {
                setHoveredLink(null);
              }
            }}
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              const showIndicator = activeIndicator === link.href.slice(1);

              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? "location" : undefined}
                    onPointerEnter={() => setHoveredLink(link.href.slice(1))}
                    onFocus={() => setHoveredLink(link.href.slice(1))}
                    className={`relative inline-flex min-h-11 items-center px-3 font-mono text-[11px] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8DCC4] ${
                      isActive || hoveredLink === link.href.slice(1)
                        ? "text-[#E8DCC4]"
                        : "text-[#E8DCC4]/80 hover:text-white"
                    }`}
                  >
                    {link.name}
                    {showIndicator && (
                      <motion.span
                        layoutId="navbar-active-rule"
                        aria-hidden="true"
                        transition={
                          reduceMotion
                            ? { duration: 0 }
                            : {
                                type: "spring",
                                stiffness: 540,
                                damping: 38,
                                mass: 0.65,
                              }
                        }
                        className="absolute inset-x-3 bottom-1 h-px bg-[#E8DCC4]"
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="hidden shrink-0 lg:block">
            <MagneticHireLink />
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls={isOpen ? "mobile-navigation" : undefined}
            className="ml-auto inline-flex h-11 w-11 shrink-0 items-center justify-center border border-[#E8DCC4]/45 text-[#E8DCC4] transition-colors hover:border-white hover:text-white active:bg-[#E8DCC4]/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8DCC4] lg:hidden"
          >
            {isOpen ? (
              <X size={19} aria-hidden="true" />
            ) : (
              <Menu size={19} aria-hidden="true" />
            )}
          </button>
        </div>

        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#E8DCC4]/70 to-transparent"
        />
      </nav>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            initial={
              reduceMotion
                ? false
                : { height: 0, opacity: 0, clipPath: "inset(0 0 100% 0)" }
            }
            animate={{ height: "auto", opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={
              reduceMotion
                ? { height: 0, opacity: 0 }
                : { height: 0, opacity: 0, clipPath: "inset(0 0 100% 0)" }
            }
            transition={
              reduceMotion
                ? { duration: 0 }
                : {
                    height: { type: "spring", stiffness: 340, damping: 34 },
                    opacity: { duration: 0.16 },
                    clipPath: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
                  }
            }
            className="overflow-hidden border-b border-[#E8DCC4]/20 bg-[#1F3D2B] lg:hidden"
          >
            <ul className="grid gap-1 px-3 py-3 sm:px-6 lg:px-10">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);

                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={closeMenu}
                      aria-current={isActive ? "location" : undefined}
                      className={`flex min-h-11 items-center justify-between border-l-2 px-4 font-mono text-xs transition-colors hover:text-white active:bg-[#E8DCC4]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#E8DCC4] ${
                        isActive
                          ? "border-[#E8DCC4] text-[#E8DCC4]"
                          : "border-transparent text-[#E8DCC4]/80"
                      }`}
                    >
                      {link.name}
                      {isActive && (
                        <span className="text-[9px] uppercase tracking-[0.12em] text-[#E8DCC4]">
                          Current
                        </span>
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center justify-between gap-4 border-t border-[#E8DCC4]/15 px-4 py-4 sm:px-6 lg:px-10">
              <span className="font-mono text-[10px] text-[#E8DCC4]/80">
                Malang, Indonesia
              </span>
              <MagneticHireLink onClick={closeMenu} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
