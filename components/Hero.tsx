"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { FaLinkedin as Linkedin } from "react-icons/fa";
import TypeWriter from "./TypeWriter";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] bg-[var(--brand-primary)]/8 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[var(--brand-secondary)]/6 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20rem] h-[20rem] bg-purple-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="flex flex-col text-center lg:text-left order-2 lg:order-1">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 hover:bg-white/10 transition-colors self-center lg:self-start"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--brand-secondary)] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--brand-secondary)]" />
              </span>
              <span className="text-xs font-medium text-gray-300 tracking-wide uppercase">
                Available for Opportunities
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1] font-space"
            >
              Building Digital
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-primary)] via-orange-400 to-[var(--brand-primary)] bg-[length:200%_auto] animate-gradient">
                <TypeWriter
                  words={["Excellence.", "Innovation.", "Solutions.", "Impact."]}
                  typingSpeed={80}
                  deletingSpeed={50}
                  pauseDuration={2000}
                />
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-base md:text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 mb-10 font-inter leading-relaxed"
            >
              Hi, I&apos;m{" "}
              <strong className="text-white font-semibold">
                Ghabriel Theo Petra Sagala
              </strong>
              . A Software Engineer passionate about crafting efficient systems,
              intuitive interfaces, and robust architectures.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center lg:justify-start"
            >
              <a
                href="#projects"
                className="group flex justify-center items-center gap-2 px-8 py-4 bg-gradient-to-r from-[var(--brand-primary)] to-orange-500 text-white rounded-xl font-semibold hover:shadow-[0_0_30px_rgba(239,68,68,0.3)] hover:-translate-y-1 transition-all duration-300"
              >
                View My Work
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="/CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex justify-center items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-semibold hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
              >
                Download CV
                <Download
                  size={18}
                  className="group-hover:-translate-y-1 transition-transform"
                />
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="flex gap-4 mt-8 justify-center lg:justify-start"
            >
              <a
                href="https://www.linkedin.com/in/ghabriel-sagala-93bba027b"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl border border-white/10 bg-white/5 text-gray-400 hover:text-[var(--brand-primary)] hover:border-[var(--brand-primary)]/30 hover:bg-[var(--brand-primary)]/5 transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:ghabrielsagala@gmail.com"
                className="p-3 rounded-xl border border-white/10 bg-white/5 text-gray-400 hover:text-[var(--brand-secondary)] hover:border-[var(--brand-secondary)]/30 hover:bg-[var(--brand-secondary)]/5 transition-all duration-300"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Right: Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end order-1 lg:order-2"
          >
            {/* Glow behind card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[var(--brand-primary)]/15 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative glass-card rounded-3xl p-6 border border-white/10 w-full max-w-sm">
              {/* Profile Photo */}
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6 ring-2 ring-white/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/profile.jpg"
                  alt="Ghabriel Theo Petra Sagala"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                {/* Status badge */}
                <div className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-[var(--brand-secondary)] animate-pulse" />
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--brand-secondary)]">
                    Open to Work
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-white font-space mb-1">
                  Ghabriel Theo Petra Sagala
                </h3>
                <p className="text-sm text-[var(--brand-primary)] font-medium mb-3">
                  Software Engineer & IT Enthusiast
                </p>
                <div className="flex justify-center gap-4 text-xs text-gray-400">
                  <span className="flex items-center gap-1">
                    <span className="text-[var(--brand-secondary)]">🎓</span>{" "}
                    Universitas Brawijaya
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="text-[var(--brand-secondary)]">📍</span>{" "}
                    Malang
                  </span>
                </div>
              </div>

              {/* Decorative corner accents */}
              <div className="absolute -top-px -right-px w-16 h-16 bg-gradient-to-br from-[var(--brand-primary)]/30 to-transparent rounded-tr-3xl pointer-events-none" />
              <div className="absolute -bottom-px -left-px w-16 h-16 bg-gradient-to-tl from-[var(--brand-secondary)]/30 to-transparent rounded-bl-3xl pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
