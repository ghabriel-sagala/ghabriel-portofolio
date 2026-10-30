"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";
import TypeWriter from "./TypeWriter";

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const yTrans = useTransform(scrollYProgress, [0, 0.5], [0, 150]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">
      {/* Ambient background layers */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />

        {/* Animated gradient orbs */}
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[50rem] h-[50rem] bg-[var(--color-accent)]/10 rounded-full blur-[120px] mix-blend-screen"
        />
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-[40rem] h-[40rem] bg-[var(--color-accent-secondary)]/8 rounded-full blur-[100px] mix-blend-screen"
        />
      </div>

      {/* Floating keyboard shortcut hints */}
      <div className="absolute bottom-6 left-6 flex gap-2 text-[10px] font-mono text-gray-600 z-10">
        <span className="px-2 py-1 rounded bg-white/5 border border-white/5">⌘K</span>
        <span className="px-2 py-1 rounded bg-white/5 border border-white/5">↑↓</span>
      </div>

      <motion.div
        style={{ opacity, y: yTrans }}
        className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 lg:px-12 w-full"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-10 md:gap-16 lg:gap-24 items-center">
          {/* Left: Typography Hero */}
          <div className="flex flex-col text-center order-2 lg:order-1">
            {/* Eyebrow status */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/8 bg-white/[0.03] backdrop-blur-sm mb-8 hover:bg-white/[0.06] hover:border-white/12 transition-all self-center lg:self-start cursor-default"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-[var(--color-accent-secondary)] animate-ping opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-accent-secondary)]" />
              </span>
              <span className="text-[11px] font-medium text-gray-400 tracking-[0.2em] uppercase">
                Available for work
              </span>
            </motion.div>

            {/* Name */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-3xl md:text-4xl font-light text-gray-400 mb-4 tracking-tight font-body"
            >
              Hi, my name is
            </motion.h2>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 font-display"
            >
              <span className="text-white">Ghabriel</span>
              <br />
              <span className="gradient-text-accent">
                <TypeWriter
                  words={["Theo Petra Sagala"]}
                  typingSpeed={70}
                  deletingSpeed={40}
                  pauseDuration={2500}
                />
              </span>
            </motion.h1>

            {/* Role description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="text-base md:text-lg text-gray-400 max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              I&apos;m a Software Engineer focused on building high-quality web products,
              IoT systems, and full-stack experiences that feel right.
            </motion.p>

            {/* CTA row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col gap-3 mt-4 justify-center lg:justify-start"
            >
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-black rounded-xl font-semibold hover:bg-white/90 transition-all shadow-lg shadow-white/10 hover:shadow-xl hover:-translate-y-0.5 text-sm"
              >
                View my work
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="https://github.com/ghabriel-sagala"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 glass-card border border-white/10 text-white rounded-xl font-semibold hover:bg-white/5 hover:border-white/20 hover:-translate-y-0.5 transition-all text-sm"
              >
                <Github
                  size={16}
                  className="group-hover:-translate-y-1 transition-transform"
                />
                GitHub
              </a>
              <a
                href="/CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 glass-card border border-white/10 text-gray-300 rounded-xl font-medium hover:bg-white/5 hover:text-white transition-all text-sm"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:-translate-y-1 transition-transform"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Resume
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              className="flex items-center justify-center gap-3 mt-6"
            >
              <span className="text-[10px] text-gray-500 tracking-wide uppercase mr-1">Connect:</span>
              <a
                href="https://github.com/ghabriel-sagala"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-2 rounded-lg border border-white/10 text-gray-500 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href="mailto:ghabrielsagala@gmail.com"
                className="group p-2 rounded-lg border border-white/10 text-gray-500 hover:text-[var(--color-accent)] hover:border-[var(--color-accent)]/30 transition-all"
                aria-label="Email"
              >
                <svg
                  width="15"
                  height="15"
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

          {/* Right: Floating info card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative flex justify-center order-1 lg:order-2"
          >
            {/* Soft glow behind card - smaller on mobile */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[18rem] h-[18rem] md:w-[28rem] md:h-[28rem] bg-[var(--color-accent)]/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative glass-card rounded-3xl p-8 border border-white/8 w-full max-w-sm shadow-2xl">
              {/* Profile image */}
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6 ring-1 ring-white/10">
                <Image
                  src="/profile.jpg"
                  alt="Ghabriel Theo Petra Sagala"
                  fill
                  sizes="200px"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                {/* Status chip */}
                <div className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-accent-secondary)] animate-pulse" />
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-accent-secondary)]">
                    Open to work
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-1 font-display">
                  Ghabriel Theo Petra Sagala
                </h3>
                <p className="text-sm text-[var(--color-accent)] font-medium mb-4">
                  Software Engineer & IT Enthusiast
                </p>
                <div className="flex justify-center gap-5 text-xs text-gray-500">
                  <span className="flex items-center gap-1.5">
                    <span className="text-[var(--color-accent-secondary)]">●</span>
                    Universitas Brawijaya
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="text-[var(--color-accent-secondary)]">●</span>
                    Malang, Indonesia
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
