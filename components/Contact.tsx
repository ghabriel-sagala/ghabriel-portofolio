"use client";

import { motion } from "framer-motion";
import { Mail, Send, MapPin, ArrowUpRight } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";
import { FaLinkedin as Linkedin } from "react-icons/fa";
import { useState } from "react";

const socials = [
  {
    label: "Email",
    value: "ghabrielsagala@gmail.com",
    href: "mailto:ghabrielsagala@gmail.com",
    icon: Mail,
    color: "from-[var(--brand-primary)] to-orange-400",
  },
  {
    label: "LinkedIn",
    value: "Ghabriel Sagala",
    href: "https://www.linkedin.com/in/ghabriel-sagala-93bba027b",
    icon: Linkedin,
    color: "from-blue-500 to-cyan-400",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 10 },
  },
};

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const subject = encodeURIComponent(
        `Portfolio Contact from ${formState.name}`
      );
      const body = encodeURIComponent(
        `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
      );
      window.location.href = `mailto:ghabrielsagala@gmail.com?subject=${subject}&body=${body}`;
      setSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-10 py-24 space-y-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        className="text-center md:text-left md:flex md:flex-row md:items-end md:justify-between gap-6 border-b border-white/10 pb-8"
      >
        <div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-white font-space">
            Hubungi{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-primary)] to-orange-500">
              Saya.
            </span>
          </h2>
          <p className="text-gray-400 font-inter max-w-2xl">
            Buka untuk peluang kolaborasi dan pertanyaan. Mari kita ciptakan
            sesuatu yang luar biasa bersama!
          </p>
        </div>
        <div className="flex items-center gap-2 text-gray-400 text-sm mt-6 md:mt-0 whitespace-nowrap">
          <MapPin size={18} className="text-[var(--brand-secondary)]" />
          <span>Malang, Indonesia</span>
        </div>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl glass-card border border-white/[0.08] p-8 md:p-12 overflow-hidden hover:border-[var(--brand-primary)]/20 transition-all duration-300"
        >
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br from-[var(--brand-primary)]/15 to-[var(--brand-secondary)]/10 blur-3xl rounded-full pointer-events-none" />

          <div className="relative z-10">
            <h3 className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--brand-secondary)] mb-2">
              Hubungi Saya
            </h3>
            <p className="text-xl font-bold text-white mb-8">
              Kirim pesan langsung
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-20 text-center gap-6"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500/20 to-[var(--brand-secondary)]/20 flex items-center justify-center">
                  <div className="text-4xl">&#10003;</div>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white mb-2">
                    Pesan Terkirim!
                  </p>
                  <p className="text-gray-400">
                    Terima kasih telah menghubungi saya. Saya akan segera membalas
                    pesan Anda.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormState({ name: "", email: "", message: "" });
                  }}
                  className="text-sm text-[var(--brand-secondary)] hover:underline font-semibold mt-4"
                >
                  Kirim pesan lain
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-gray-400 uppercase tracking-wider font-semibold mb-2">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Nama Anda"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[var(--brand-primary)]/50 focus:bg-white/8 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 uppercase tracking-wider font-semibold mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="email@anda.com"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[var(--brand-primary)]/50 focus:bg-white/8 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-gray-400 uppercase tracking-wider font-semibold mb-2">
                    Pesan
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Ceritakan proyek Anda, pertanyaan, atau sekadar menyapa..."
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[var(--brand-primary)]/50 focus:bg-white/8 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full px-6 py-3 bg-gradient-to-r from-[var(--brand-primary)] to-orange-500 text-white font-semibold text-sm rounded-xl hover:shadow-[0_0_30px_rgba(239,68,68,0.4)] disabled:opacity-50 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  {isLoading ? "Mengirim..." : "Kirim Pesan"}
                </button>
              </form>
            )}
          </div>
        </motion.div>

        {/* Sidebar */}
        <div className="space-y-6">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="space-y-4"
          >
            {socials.map((social) => {
              const IconComponent = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={
                    social.href.startsWith("http") ? "_blank" : "_self"
                  }
                  rel={
                    social.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  variants={item}
                  whileHover={{ x: 6 }}
                  className="group flex items-center gap-4 p-5 rounded-2xl glass-card border border-white/[0.08] hover:border-[var(--brand-primary)]/30 transition-all duration-300"
                >
                  <div
                    className={`p-3 rounded-lg bg-gradient-to-br ${social.color} flex items-center justify-center flex-shrink-0`}
                  >
                    <IconComponent size={20} className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
                      {social.label}
                    </p>
                    <p className="text-sm font-medium text-white truncate">
                      {social.value}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-gray-600 group-hover:text-[var(--brand-primary)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all flex-shrink-0"
                  />
                </motion.a>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="rounded-2xl glass-card border border-white/[0.08] p-4 text-center hover:border-[var(--brand-secondary)]/30 transition-all duration-300">
              <p className="text-2xl font-bold text-[var(--brand-secondary)] mb-1 font-space">
                <AnimatedCounter target={6} suffix="+" />
              </p>
              <p className="text-xs text-gray-400 uppercase tracking-wider">
                Proyek Selesai
              </p>
            </div>
            <div className="rounded-2xl glass-card border border-white/[0.08] p-4 text-center hover:border-[var(--brand-primary)]/30 transition-all duration-300">
              <p className="text-2xl font-bold text-[var(--brand-primary)] mb-1 font-space">
                <AnimatedCounter target={7} suffix="+" />
              </p>
              <p className="text-xs text-gray-400 uppercase tracking-wider">
                Sertifikat
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="rounded-2xl glass-card border border-[var(--brand-primary)]/20 bg-gradient-to-br from-[var(--brand-primary)]/8 to-orange-500/5 p-6"
          >
            <div className="mb-4">
              <p className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--brand-primary)] mb-2">
                Siap Kolaborasi
              </p>
              <p className="text-lg font-bold text-white font-space">
                Mari Bekerja Sama
              </p>
              <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                Saya terbuka untuk proyek baru, freelance, atau posisi full-time
                yang menantang.
              </p>
            </div>
            <div className="flex gap-2">
              <a
                href="mailto:ghabrielsagala@gmail.com"
                className="flex-1 px-4 py-2 bg-[var(--brand-primary)] text-white font-semibold text-sm rounded-lg hover:shadow-[0_0_20px_rgba(239,68,68,0.4)] transition-all text-center"
              >
                Email Saya
              </a>
              <a
                href="/CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-2 border border-[var(--brand-primary)]/30 text-[var(--brand-primary)] font-semibold text-sm rounded-lg hover:bg-[var(--brand-primary)]/10 transition-all text-center"
              >
                Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
