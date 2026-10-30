"use client";

import { motion } from "framer-motion";
import { Mail, ExternalLink, ArrowUpRight } from "lucide-react";
import { FaLinkedin as Linkedin, FaGithub as Github } from "react-icons/fa";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/ghabriel-sagala",
    label: "GitHub",
    color: "hover:text-white",
    highlight: true,
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/ghabriel-sagala-93bba027b",
    label: "LinkedIn",
    color: "hover:text-blue-400",
  },
  {
    icon: Mail,
    href: "mailto:ghabrielsagala@gmail.com",
    label: "Email",
    color: "hover:text-[var(--color-accent)]",
  },
];

const footerLinks = [
  {
    title: "Navigation",
    links: [
      { name: "Home", href: "#hero", external: false },
      { name: "About", href: "#about", external: false },
      { name: "Projects", href: "#projects", external: false },
      { name: "Certificates", href: "#sertifikat", external: false },
      { name: "Contact", href: "#contact", external: false },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Resume/CV", href: "/CV.pdf", external: true },
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/ghabriel-sagala-93bba027b",
        external: true,
      },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gradient-to-t from-[#030305] via-[#030305]/95 to-transparent pt-20 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <a href="#hero" className="flex items-center gap-2 mb-6 group">
              <span className="font-extrabold text-2xl font-mono bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] bg-clip-text text-transparent">
                GB
              </span>
              <span className="text-lg font-light text-gray-300 group-hover:text-white transition-colors">
                / Ghabriel
              </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Software engineer dan IT enthusiast berpengalaman dalam membangun
              solusi digital modern dengan standar kualitas tinggi.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label, color, highlight }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noreferrer" : undefined
                  }
                  className={`relative group p-2.5 rounded-xl border transition-all duration-300 ${
                    highlight
                      ? "border-white/10 bg-white/5 text-gray-400 hover:bg-white hover:text-black hover:border-white shadow-lg shadow-black/20"
                      : "border-white/10 text-gray-400 hover:border-[var(--color-accent)]/30 hover:bg-white/5 " + color
                  }`}
                >
                  <Icon size={18} />
                  {highlight && (
                    <motion.span
                      className="absolute inset-0 rounded-xl bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-secondary)] opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                    />
                  )}
                </a>
              ))}
            </div>
          </motion.div>

          {footerLinks.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h3 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={
                        link.external ? "noopener noreferrer" : undefined
                      }
                      className="text-gray-400 text-sm hover:text-white transition-colors group flex items-center gap-2"
                    >
                      {link.name}
                      <ExternalLink
                        size={12}
                        className="opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-sm text-gray-500">
            &copy; {currentYear} Ghabriel Theo Petra Sagala. All rights
            reserved.
          </div>

          <a
            href="#hero"
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 text-gray-400 hover:text-white hover:border-[var(--brand-primary)]/30 hover:bg-white/5 transition-all duration-300 text-sm font-medium group"
          >
            Kembali ke Atas
            <ArrowUpRight
              size={16}
              className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform"
            />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 text-center text-gray-500 text-xs"
        >
          <p>
            Dibangun dengan{" "}
            <span className="text-[var(--brand-primary)]">&hearts;</span>{" "}
            menggunakan{" "}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--brand-secondary)] hover:underline"
            >
              Next.js
            </a>
            ,{" "}
            <a
              href="https://react.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--brand-secondary)] hover:underline"
            >
              React
            </a>
            , &amp;{" "}
            <a
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--brand-secondary)] hover:underline"
            >
              Tailwind CSS
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
