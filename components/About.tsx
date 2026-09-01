"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

const toolkit = [
  { name: "Figma", icon: "🎨" },
  { name: "VS Code", icon: "💻" },
  { name: "C++", icon: "⚙️" },
  { name: "JavaScript", icon: "🟨" },
  { name: "Python", icon: "🐍" },
  { name: "Java", icon: "☕" },
  { name: "Excel", icon: "📊" },
  { name: "Laravel", icon: "🔴" },
  { name: "Next.js", icon: "▲" },
  { name: "MySQL", icon: "🗄️" },
];

const stats = [
  { target: 6, suffix: "+", label: "Proyek Selesai" },
  { target: 7, suffix: "+", label: "Sertifikat" },
  { target: 10, suffix: "+", label: "Kegiatan Mahasiswa" },
];

const services = [
  { icon: "⚡", title: "Rapid Prototyping", desc: "Pengujian ide sebelum ke produksi" },
  { icon: "🔗", title: "API & Hardware", desc: "Integrasi sistem web dan IoT" },
  { icon: "☁️", title: "Cloud-Ready", desc: "Solusi siap deploy modern" },
  { icon: "🎯", title: "System Arch", desc: "Perancangan arsitektur terstruktur" },
  { icon: "🎨", title: "Design System", desc: "Komponen konsisten & polished" },
];

export default function About() {
  return (
    <div className="w-full space-y-16 py-24">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8"
      >
        <h2 className="font-space text-5xl md:text-7xl font-bold uppercase tracking-tighter">
          About{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-primary)] to-orange-500">
            Me
          </span>
        </h2>
        <p className="text-gray-400 font-inter max-w-sm text-base leading-relaxed">
          IT enthusiast dengan pendekatan modern, standar kualitas tinggi,
          pemahaman IoT, dan detail rekayasa teknis yang kuat.
        </p>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        {/* Left: Profile Card */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative rounded-[2rem] border border-white/10 glass-card p-8 overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-48 h-48 bg-[var(--brand-primary)]/10 blur-[80px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

          <div className="relative w-20 h-20 rounded-2xl overflow-hidden mb-6 ring-2 ring-white/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/profile.jpg"
              alt="Ghabriel Theo Petra Sagala"
              className="w-full h-full object-cover"
            />
          </div>

          <p className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--brand-secondary)] mb-2">
            Tentang Saya
          </p>
          <h3 className="text-2xl font-bold text-white mb-1 font-space">
            Ghabriel Theo Petra Sagala
          </h3>
          <p className="text-sm text-[var(--brand-primary)] mb-4 font-medium">
            Software Engineer & IT Enthusiast
          </p>
          <p className="text-gray-400 font-inter leading-relaxed mb-6">
            Saya bersemangat membangun perangkat lunak yang efisien dan interaktif
            — dari antarmuka yang intuitif, otomatisasi perangkat keras, hingga
            arsitektur sistem yang tangguh.
          </p>

          <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
                className="text-center"
              >
                <p className="text-2xl font-bold text-[var(--brand-primary)] font-space">
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                </p>
                <p className="text-xs text-gray-500 mt-1 leading-tight">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: Services */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="rounded-[2rem] border border-white/10 glass-card p-8"
        >
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--brand-secondary)] mb-6">
            Layanan Digital
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
                whileHover={{ y: -4 }}
                className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-[var(--brand-primary)]/20 hover:bg-white/[0.07] transition-all cursor-default"
              >
                <span className="text-xl mb-2 block">{s.icon}</span>
                <p className="text-sm font-semibold text-white">{s.title}</p>
                <p className="text-xs text-gray-500 mt-1">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Toolkit */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="rounded-[2rem] border border-white/10 glass-card p-8"
      >
        <p className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--brand-secondary)] mb-6 text-center">
          Digital Toolkit · Tools I Use
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {toolkit.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07, ease: "easeOut" }}
              whileHover={{ scale: 1.1, y: -4 }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 hover:border-[var(--brand-primary)]/30 hover:bg-[var(--brand-primary)]/5 transition-colors cursor-default"
            >
              <span className="text-base">{tool.icon}</span>
              <span className="text-sm font-medium text-gray-300">
                {tool.name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
