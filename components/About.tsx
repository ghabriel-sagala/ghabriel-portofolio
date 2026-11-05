"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

const toolkit = [
  { name: "Figma" },
  { name: "VS Code" },
  { name: "C++" },
  { name: "JavaScript" },
  { name: "Python" },
  { name: "Java" },
  { name: "Excel" },
  { name: "Laravel" },
  { name: "Next.js" },
  { name: "MySQL" },
];

const stats = [
  { target: 6, suffix: "+", label: "Proyek Selesai" },
  { target: 7, suffix: "+", label: "Sertifikat" },
  { target: 10, suffix: "+", label: "Kegiatan Mahasiswa" },
];

const services = [
  { title: "Rapid Prototyping", desc: "Pengujian ide sebelum ke produksi" },
  { title: "API & Hardware", desc: "Integrasi sistem web dan IoT" },
  { title: "Cloud-Ready", desc: "Solusi siap deploy modern" },
  { title: "System Arch", desc: "Perancangan arsitektur terstruktur" },
  { title: "Design System", desc: "Komponen konsisten & polished" },
];

export default function About() {
  return (
    <div className="w-full space-y-12 md:space-y-20 py-16 md:py-24">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto px-4"
      >
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--color-accent-secondary)]">
          02 / About
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-display mt-3 mb-2 tracking-tight">
          About Me
        </h2>
        <p className="text-gray-400 mt-4 text-sm md:text-base leading-relaxed max-w-xl text-center md:text-left">
          Software engineer with a modern, quality-first approach, backed by
          hands-on IoT experience and strong technical fundamentals.
        </p>
      </motion.div>

      {/* Profile + Services grid */}
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Profile card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl bg-[var(--color-bg-tertiary)] border border-white/6 p-5 md:p-8 overflow-hidden"
        >
          <div className="relative flex items-start gap-4 md:gap-5">
            <div className="relative w-14 h-14 md:w-20 md:h-20 rounded-2xl overflow-hidden ring-1 ring-white/10 flex-shrink-0">
                <Image
                src="/profile.jpg"
                alt="Ghabriel Theo Petra Sagala"
                fill
                sizes="(max-width: 640px) 56px, 80px"
                className="object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[9px] md:text-[10px] font-mono uppercase tracking-widest text-[var(--color-accent-secondary)] mb-1">
                About Me
              </p>
              <h3 className="text-base md:text-xl font-bold text-white font-display leading-tight">
                Ghabriel Theo Petra Sagala
              </h3>
              <p className="text-[11px] md:text-sm text-[var(--color-accent)] font-medium mb-2 md:mb-3">
                Software Engineer & IT Enthusiast
              </p>
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                I build efficient, interactive software, from intuitive UIs to
                hardware automation and resilient system architectures.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 md:gap-4 mt-6 md:mt-8 pt-4 md:pt-6 border-t border-white/6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-xl md:text-2xl font-bold text-white font-display">
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                </p>
                <p className="text-[9px] md:text-[10px] text-gray-500 uppercase tracking-wider mt-1">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="rounded-2xl bg-[var(--color-bg-tertiary)] border border-white/6 p-8"
        >
          <p className="text-[10px] font-mono uppercase tracking-widest text-[var(--color-accent-secondary)] mb-6">
            What I Do
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -3 }}
                className="group p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-white/10 hover:bg-white/[0.04] transition-all cursor-default"
              >
                <p className="text-sm font-semibold text-white font-display">{s.title}</p>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Toolkit */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="rounded-2xl bg-[var(--color-bg-tertiary)] border border-white/6 p-8"
      >
        <p className="text-[9px] md:text-[10px] font-mono uppercase tracking-widest text-[var(--color-accent-secondary)] mb-4 md:mb-6 text-center">
          Toolkit · Tools I Use
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {toolkit.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="group flex items-center gap-1.5 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/[0.03] border border-white/6 hover:border-white/10 hover:bg-white/[0.05] transition-all cursor-default"
            >
              <span className="text-xs md:text-sm font-medium text-gray-300 font-display leading-tight">
                {tool.name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
