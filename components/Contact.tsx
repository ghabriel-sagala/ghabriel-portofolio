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
    <section className="relative py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-10 md:mb-16"
        >
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--color-accent-secondary)]">
            05 — Contact
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-display mt-3 mb-4 tracking-tight">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Open for collaboration, opportunities, and conversations.
            Let&apos;s create something great together.
          </p>
          <div className="flex items-center gap-2 mt-4 text-xs md:text-sm text-gray-500">
            <MapPin size={13} className="text-[var(--color-accent-secondary)]" />
            <span>Malang, Indonesia</span>
          </div>
        </motion.div>

        {/* Form + Sidebar */}
        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="relative rounded-2xl bg-[var(--color-bg-tertiary)] border border-white/6 p-5 md:p-8 md:p-10 hover:border-white/10 transition-all duration-300"
          >
            <div className="absolute -top-16 -right-16 w-40 h-40 md:w-64 md:h-64 bg-[var(--color-accent)]/10 blur-3xl rounded-full pointer-events-none" />

            <div className="relative z-10">
              <h3 className="text-[9px] md:text-[10px] font-mono uppercase tracking-widest text-[var(--color-accent-secondary)] mb-1">
                Send a Message
              </h3>
              <p className="text-base md:text-lg font-bold text-white mb-6 md:mb-8 font-display">
                Tell me about your project
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-20 text-center gap-5"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500/20 to-[var(--color-accent-secondary)]/20 flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-white mb-1">Message sent!</p>
                    <p className="text-gray-400 text-sm">
                      Thank you for reaching out. I&apos;ll get back to you soon.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ name: "", email: "", message: "" });
                    }}
                    className="text-sm text-[var(--color-accent-secondary)] hover:underline font-semibold mt-2"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[9px] md:text-[10px] text-gray-500 uppercase tracking-wider font-semibold mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full px-3 py-2.5 md:px-4 md:py-3 bg-white/[0.02] border border-white/6 rounded-xl text-white placeholder-gray-600 text-xs md:text-sm focus:outline-none focus:border-[var(--color-accent)]/50 focus:bg-white/[0.04] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[9px] md:text-[10px] text-gray-500 uppercase tracking-wider font-semibold mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full px-3 py-2.5 md:px-4 md:py-3 bg-white/[0.02] border border-white/6 rounded-xl text-white placeholder-gray-600 text-xs md:text-sm focus:outline-none focus:border-[var(--color-accent)]/50 focus:bg-white/[0.04] transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[9px] md:text-[10px] text-gray-500 uppercase tracking-wider font-semibold mb-1">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, ask a question, or just say hello..."
                      className="w-full px-3 py-2.5 md:px-4 md:py-3 bg-white/[0.02] border border-white/6 rounded-xl text-white placeholder-gray-600 text-xs md:text-sm focus:outline-none focus:border-[var(--color-accent)]/50 focus:bg-white/[0.04] transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full px-4 py-3 md:px-5 md:py-3 bg-gradient-to-r from-[var(--color-accent)] to-orange-500 text-white font-semibold text-xs md:text-sm rounded-xl hover:shadow-lg hover:shadow-[var(--color-accent)]/20 disabled:opacity-50 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Send size={16} />
                    {isLoading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Sidebar */}
          <div className="space-y-5">
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
                    whileHover={{ x: 5 }}
                    className="group flex items-center gap-4 p-4 rounded-xl bg-[var(--color-bg-tertiary)] border border-white/6 hover:border-white/10 transition-all duration-300"
                  >
                    <div
                      className={`p-2.5 rounded-lg bg-gradient-to-br ${social.color} flex items-center justify-center flex-shrink-0`}
                    >
                      <IconComponent size={18} className="text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">
                        {social.label}
                      </p>
                      <p className="text-sm font-medium text-white truncate">
                        {social.value}
                      </p>
                    </div>
                    <ArrowUpRight
                      size={14}
                      className="text-gray-600 group-hover:text-[var(--color-accent)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all flex-shrink-0"
                    />
                  </motion.a>
                );
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-2 gap-3"
            >
              <div className="rounded-xl bg-[var(--color-bg-tertiary)] border border-white/6 p-4 text-center hover:border-white/10 transition-all duration-300">
                <p className="text-xl font-bold text-white font-display">
                  <AnimatedCounter target={6} suffix="+" />
                </p>
                <p className="text-[10px] text-gray-500 uppercase tracking-wider mt-1">
                  Projects Done
                </p>
              </div>
              <div className="rounded-xl bg-[var(--color-bg-tertiary)] border border-white/6 p-4 text-center hover:border-white/10 transition-all duration-300">
                <p className="text-xl font-bold text-white font-display">
                  <AnimatedCounter target={7} suffix="+" />
                </p>
                <p className="text-[10px] text-gray-500 uppercase tracking-wider mt-1">
                  Certificates
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-xl bg-gradient-to-br from-[var(--color-accent)]/8 to-orange-500/4 border border-[var(--color-accent)]/15 p-5"
            >
              <div className="mb-4">
                <p className="text-[10px] font-mono uppercase tracking-widest text-[var(--color-accent)] mb-1">
                  Open to Work
                </p>
                <p className="text-base font-bold text-white font-display">
                  Let&apos;s Collaborate
                </p>
                <p className="text-xs text-gray-400 mt-1.5 leading-relaxed">
                  Open to new projects, freelance, or full-time roles.
                </p>
              </div>
              <div className="flex gap-2">
                <a
                  href="mailto:ghabrielsagala@gmail.com"
                  className="flex-1 px-4 py-2.5 bg-[var(--color-accent)] text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-[var(--color-accent)]/20 transition-all text-center"
                >
                  Email Me
                </a>
                <a
                  href="/CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-2.5 border border-[var(--color-accent)]/20 text-[var(--color-accent)] text-sm font-semibold rounded-lg hover:bg-[var(--color-accent)]/10 transition-all text-center"
                >
                  Resume
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
