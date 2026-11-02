"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowDown, ArrowDownToLine, MousePointer2 } from "lucide-react";

const contentVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.12 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[min(760px,100svh)] scroll-mt-24 items-center justify-center overflow-hidden px-2 pb-10 pt-28 sm:min-h-[min(820px,100svh)] sm:pt-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-32 -top-32 h-[26rem] w-[34rem] rounded-full bg-primary/10 blur-[140px] sm:h-[36rem] sm:w-[44rem]" />
        <div className="absolute -bottom-40 -right-32 h-[28rem] w-[32rem] rounded-full bg-secondary/10 blur-[160px] sm:h-[38rem] sm:w-[44rem] sm:blur-[180px]" />
        <div className="absolute left-1/2 top-[42%] h-72 w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.045] blur-[140px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-bg-primary)]/90" />
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={contentVariants}
        className="relative mx-auto flex w-full max-w-5xl flex-col items-center gap-8 text-center md:gap-12"
      >
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-2"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/[0.055] px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.12em] text-primary shadow-[0_0_18px_rgba(8,182,211,0.08)] sm:px-3.5 sm:text-[9px]">
            <span className="text-primary" aria-hidden="true">
              •
            </span>
            Available for Q3/Q4 Collaborations
          </span>
        </motion.div>

        <div className="relative">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 select-none font-display text-[200px] font-bold leading-none tracking-[-0.09em] text-white/[0.03] md:text-[350px]"
          >
            26
          </span>
          <motion.h1
            id="hero-heading"
            variants={itemVariants}
            className="relative z-10 whitespace-nowrap font-display text-6xl font-semibold leading-none tracking-tight text-white sm:text-7xl md:text-[100px] lg:text-[120px]"
          >
            Portofolio
          </motion.h1>
          <motion.div
            variants={itemVariants}
            className="absolute -right-5 top-[78%] z-20 flex -translate-y-1/2 items-center sm:-right-16 sm:top-[82%]"
          >
            <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-md border border-white/10 bg-[#090d12]/85 px-2.5 py-1.5 text-[8px] font-medium text-slate-200 shadow-lg shadow-black/30 backdrop-blur-xl sm:text-[9px]">
              <span className="text-primary" aria-hidden="true">
                •
              </span>
              Ghabriel Theo Petra Sagala
            </span>
            <MousePointer2
              size={22}
              aria-hidden="true"
              className="-ml-0.5 -mt-2 rotate-[-18deg] fill-primary text-primary drop-shadow-[0_0_8px_rgba(8,182,211,0.5)]"
            />
          </motion.div>
        </div>

        <motion.p
          variants={itemVariants}
          className="max-w-4xl text-lg leading-relaxed text-slate-300 md:text-xl"
        >
          Crafting Digital Experiences:{" "}
          <span className="text-slate-200">UI/UX Designer</span>,{" "}
          <span className="font-medium text-primary">
            Frontend Developer
          </span>
          , &amp;{" "}
          <span className="font-medium text-tertiary">
            Backend Developer
          </span>
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="max-w-3xl font-mono text-lg leading-relaxed text-slate-400 md:text-xl"
        >
          Bridging human-centered interaction architecture with high-performance
          web systems and embedded microcontrollers.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-semibold text-neutral shadow-[0_0_20px_rgba(8,182,211,0.4)] transition duration-300 ease-in-out hover:shadow-[0_0_32px_rgba(8,182,211,0.55)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Explore Works
            <ArrowDown
              size={18}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-y-0.5"
            />
          </motion.a>
          <motion.a
            href="/CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-neutral/80 px-8 py-4 text-lg font-medium text-slate-300 backdrop-blur-xl transition duration-300 ease-in-out hover:border-secondary/30 hover:bg-white/[0.06] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
          >
            <ArrowDownToLine
              size={18}
              aria-hidden="true"
              className="text-secondary"
            />
            Download CV
          </motion.a>
        </motion.div>

      </motion.div>
    </section>
  );
}
