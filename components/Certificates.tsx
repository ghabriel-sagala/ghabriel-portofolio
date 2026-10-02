"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import {
  X,
  FileText,
  Download,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Award,
} from "lucide-react";

interface Certificate {
  id: number;
  title: string;
  org: string;
  date: string;
  image: string;
  pdf?: string;
  description: string;
}

interface CertificatesProps {
  certificates: Certificate[];
}

const Certificates: React.FC<CertificatesProps> = ({ certificates }) => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const isPdf = (src: string) => src?.endsWith(".pdf");
  const hasImage = (src: string) => src && src.length > 0 && !isPdf(src);

  const currentIndex = selectedCert
    ? certificates.findIndex((c) => c.id === selectedCert.id)
    : -1;

  const goToNext = useCallback(() => {
    if (currentIndex < certificates.length - 1) {
      setSelectedCert(certificates[currentIndex + 1]);
    }
  }, [currentIndex, certificates]);

  const goToPrev = useCallback(() => {
    if (currentIndex > 0) {
      setSelectedCert(certificates[currentIndex - 1]);
    }
  }, [currentIndex, certificates]);

  useEffect(() => {
    if (!selectedCert) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedCert(null);
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "ArrowLeft") goToPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedCert, goToNext, goToPrev]);

  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedCert]);

  return (
    <section className="relative py-24">
      {/* Ambient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-[var(--color-accent)]/8 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[var(--color-accent-secondary)]/6 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--color-accent-secondary)]">
            04 — Credentials
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-display mt-3 mb-5 tracking-tight">
            Certificates
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
            Professional certifications that demonstrate my commitment to
            continuous learning and skill development.
          </p>
        </motion.div>

        {/* STRICT GRID: 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              onClick={() => setSelectedCert(cert)}
              onMouseEnter={() => setHoveredId(cert.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group cursor-pointer h-full"
            >
              {/* Fixed height card: h-[400px] — identical for ALL cards */}
              <div className="relative overflow-hidden rounded-2xl bg-[var(--color-bg-tertiary)] border border-white/6 hover:border-white/10 transition-all duration-300 h-[400px] flex flex-col group-hover:shadow-lg group-hover:shadow-black/20">
                {/* Thumbnail area — fixed height 55% = 220px */}
                <div className="relative w-full h-[220px] overflow-hidden bg-[#0a0a0a]">
                  {!hasImage(cert.image) ? (
                    /* PDF fallback — polished gradient with Document icon */
                    <div
                      className={`absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-[var(--color-accent)]/10 to-[var(--color-accent-secondary)]/5 group-hover:from-[var(--color-accent)]/18 group-hover:to-[var(--color-accent-secondary)]/12 transition-all duration-500`}
                    >
                      <motion.div
                        animate={
                          hoveredId === cert.id
                            ? { scale: 1.08, rotate: 4 }
                            : { scale: 1, rotate: 0 }
                        }
                        transition={{ duration: 0.3 }}
                        className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-inner"
                      >
                        <Award
                          size={32}
                          className="text-[var(--color-accent)] drop-shadow-lg"
                        />
                      </motion.div>
                      <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                        PDF Certificate
                      </span>
                    </div>
                  ) : (
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  )}
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-tertiary)] via-transparent to-transparent pointer-events-none" />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
                    <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium flex items-center gap-1.5 shadow-lg">
                      <ExternalLink size={12} />
                      View certificate
                    </div>
                  </div>
                </div>

                {/* Content — fills remaining space */}
                <div className="flex-1 p-5 flex flex-col">
                  <h3 className="text-sm font-bold text-white mb-1.5 group-hover:text-[var(--color-accent)] transition-colors line-clamp-2 font-display">
                    {cert.title}
                  </h3>
                  <div className="flex flex-col gap-0.5 mb-2">
                    <p className="text-xs text-gray-400 font-medium">
                      {cert.org}
                    </p>
                    <p className="text-[10px] text-gray-500 font-mono">
                      {cert.date}
                    </p>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 mb-3 flex-1">
                    {cert.description}
                  </p>
                  <button className="w-full py-2 px-3 bg-gradient-to-r from-[var(--color-accent)] to-orange-500 text-white text-[11px] font-semibold rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center gap-1.5">
                    {cert.pdf ? (
                      <>
                        <Download size={12} />
                        View Certificate
                      </>
                    ) : (
                      <>
                        <ExternalLink size={12} />
                        View Certificate
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 20 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[var(--color-bg-secondary)] rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-white/6 relative"
            >
              {/* Nav */}
              {currentIndex > 0 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPrev();
                  }}
                  className="absolute left-3 top-3 z-20 w-9 h-9 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white/80 hover:text-white transition-colors backdrop-blur-md border border-white/10"
                  aria-label="Previous certificate"
                >
                  <ChevronLeft size={16} />
                </button>
              )}
              {currentIndex < certificates.length - 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNext();
                  }}
                  className="absolute right-12 top-3 z-20 w-9 h-9 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white/80 hover:text-white transition-colors backdrop-blur-md border border-white/10"
                  aria-label="Next certificate"
                >
                  <ChevronRight size={16} />
                </button>
              )}

              <div className="relative h-52 md:h-64 bg-[#0a0a0a]">
                {!hasImage(selectedCert.image) ? (
                  /* PDF fallback in modal */
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-[var(--color-accent)]/10 to-[var(--color-accent-secondary)]/5">
                    <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-inner">
                      <Award size={40} className="text-[var(--color-accent)]" />
                    </div>
                    <span className="text-sm font-mono text-gray-400">
                      {selectedCert.title}
                    </span>
                    {selectedCert.pdf && (
                      <a
                        href={selectedCert.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 bg-[var(--color-accent)] text-white rounded-xl text-sm font-semibold hover:shadow-lg transition-all"
                      >
                        <Download size={16} />
                        Open PDF
                      </a>
                    )}
                  </div>
                ) : (
                  <Image
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    fill
                    sizes="90vw"
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-secondary)] via-transparent to-transparent pointer-events-none" />
                <button
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-3 right-3 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white/80 hover:text-white transition-colors backdrop-blur-md border border-white/10 z-20"
                  aria-label="Close modal"
                >
                  <X size={14} />
                </button>
              </div>

              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-white font-display mb-2">
                  {selectedCert.title}
                </h3>
                <div className="flex flex-col sm:flex-row gap-2 mb-4 border-b border-white/6 pb-4">
                  <p className="text-base text-gray-300 font-medium">
                    {selectedCert.org}
                  </p>
                  <span className="text-xs text-gray-500 font-mono">
                    · {selectedCert.date}
                  </span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed mb-5">
                  {selectedCert.description}
                </p>

                <div className="flex items-center justify-between border-t border-white/6 pt-4">
                  <span className="text-xs text-gray-500 font-mono">
                    {currentIndex + 1} / {certificates.length}
                  </span>
                  <div className="flex gap-2">
                    {selectedCert.pdf && (
                      <a
                        href={selectedCert.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-4 py-2 bg-[var(--color-accent)] text-white rounded-lg text-sm font-semibold hover:shadow-lg transition-all"
                      >
                        <Download size={14} />
                        Download PDF
                      </a>
                    )}
                    <button
                      onClick={() => setSelectedCert(null)}
                      className="px-4 py-2 bg-white/5 border border-white/10 text-white rounded-lg text-sm font-medium hover:bg-white/10 transition-all"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
