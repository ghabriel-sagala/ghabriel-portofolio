"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { X, FileText, Download, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

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

  // Keyboard navigation
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

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [selectedCert]);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-blue-500/10 to-cyan-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-space text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Certificates &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-primary)] to-orange-500">
              Qualifications
            </span>
          </h2>
          <p className="text-lg text-gray-400 font-inter max-w-2xl mx-auto">
            Sertifikasi profesional yang menunjukkan komitmen saya terhadap
            pengembangan berkelanjutan
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              onClick={() => setSelectedCert(cert)}
              onMouseEnter={() => setHoveredId(cert.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group cursor-pointer h-full"
            >
              <div className="relative overflow-hidden rounded-2xl glass-card border border-white/[0.08] hover:border-[var(--brand-primary)]/20 transition-all duration-300 h-full flex flex-col hover:shadow-[0_10px_40px_rgba(239,68,68,0.08)]">
                {/* Image / PDF Preview */}
                <div className="relative h-52 overflow-hidden bg-[#111]">
                  {!hasImage(cert.image) ? (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-[var(--brand-primary)]/10 to-[var(--brand-secondary)]/5 group-hover:from-[var(--brand-primary)]/15 group-hover:to-[var(--brand-secondary)]/10 transition-all duration-500">
                      <motion.div
                        animate={hoveredId === cert.id ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center"
                      >
                        <FileText size={32} className="text-[var(--brand-primary)]" />
                      </motion.div>
                      <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                        PDF Document
                      </span>
                    </div>
                  ) : (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={encodeURI(cert.image)}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium flex items-center gap-2">
                      <ExternalLink size={14} />
                      View Certificate
                    </div>
                  </div>
                </div>

                <div className="flex-1 p-5 flex flex-col">
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-[var(--brand-primary)] transition-colors line-clamp-2 font-space">
                    {cert.title}
                  </h3>
                  <div className="flex flex-col gap-1 mb-3">
                    <p className="text-sm text-gray-400 font-medium font-inter">
                      {cert.org}
                    </p>
                    <p className="text-xs text-gray-500 font-mono">
                      {cert.date}
                    </p>
                  </div>
                  <p className="text-sm text-gray-400 font-inter line-clamp-2 mb-4 flex-1">
                    {cert.description}
                  </p>
                  <button className="w-full py-2.5 px-4 bg-gradient-to-r from-[var(--brand-primary)] to-orange-500 text-white font-semibold rounded-lg shadow-md group-hover:shadow-[0_0_20px_rgba(239,68,68,0.3)] transition-all duration-300 text-sm flex items-center justify-center gap-2">
                    {cert.pdf ? (
                      <>
                        <Download size={14} />
                        Lihat Sertifikat
                      </>
                    ) : (
                      <>
                        <ExternalLink size={14} />
                        Lihat Sertifikat
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificate Modal/Lightbox */}
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
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0a0a0f] rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-white/10 relative"
            >
              {/* Navigation arrows */}
              {currentIndex > 0 && (
                <button
                  onClick={(e) => { e.stopPropagation(); goToPrev(); }}
                  className="absolute left-3 top-3 z-20 w-10 h-10 bg-black/50 hover:bg-black/75 rounded-full flex items-center justify-center text-white transition-colors backdrop-blur-md border border-white/10"
                  aria-label="Previous certificate"
                >
                  <ChevronLeft size={18} />
                </button>
              )}
              {currentIndex < certificates.length - 1 && (
                <button
                  onClick={(e) => { e.stopPropagation(); goToNext(); }}
                  className="absolute right-14 top-3 z-20 w-10 h-10 bg-black/50 hover:bg-black/75 rounded-full flex items-center justify-center text-white transition-colors backdrop-blur-md border border-white/10"
                  aria-label="Next certificate"
                >
                  <ChevronRight size={18} />
                </button>
              )}

              <div className="relative h-72 md:h-96">
                {!hasImage(selectedCert.image) ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-[var(--brand-primary)]/10 to-[var(--brand-secondary)]/5">
                    <div className="w-24 h-24 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <FileText size={48} className="text-[var(--brand-primary)]" />
                    </div>
                    <span className="text-sm font-mono text-gray-300">
                      {selectedCert.title}
                    </span>
                    {selectedCert.pdf && (
                      <a
                        href={selectedCert.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-[var(--brand-primary)] text-white rounded-xl font-semibold hover:shadow-[0_0_20px_rgba(239,68,68,0.4)] transition-all"
                      >
                        <Download size={18} />
                        Buka PDF
                      </a>
                    )}
                  </div>
                ) : (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={encodeURI(selectedCert.image)}
                    alt={selectedCert.title}
                    className="w-full h-full object-contain bg-[#111]"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent pointer-events-none" />
                <button
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-3 right-3 w-10 h-10 bg-black/50 hover:bg-black/75 rounded-full flex items-center justify-center text-white transition-colors backdrop-blur-md border border-white/10 z-20"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="p-8">
                <h3 className="text-2xl md:text-3xl font-bold font-space text-white mb-3">
                  {selectedCert.title}
                </h3>
                <div className="flex flex-col sm:flex-row gap-2 mb-5 border-b border-white/10 pb-5">
                  <p className="text-lg text-gray-300 font-medium">
                    {selectedCert.org}
                  </p>
                  <span className="text-gray-500 font-mono text-sm">
                    • {selectedCert.date}
                  </span>
                </div>
                <p className="text-gray-400 font-inter leading-relaxed mb-6">
                  {selectedCert.description}
                </p>

                {/* Counter */}
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500 font-mono">
                    {currentIndex + 1} / {certificates.length}
                  </div>
                  <div className="flex gap-3">
                    {selectedCert.pdf && (
                      <a
                        href={selectedCert.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-[var(--brand-primary)] text-white rounded-xl font-semibold hover:shadow-[0_0_20px_rgba(239,68,68,0.4)] transition-all"
                      >
                        <Download size={18} />
                        Download PDF
                      </a>
                    )}
                    <button
                      onClick={() => setSelectedCert(null)}
                      className="px-6 py-3 bg-white/5 border border-white/10 text-white rounded-xl font-medium hover:bg-white/10 transition-all"
                    >
                      Tutup
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
