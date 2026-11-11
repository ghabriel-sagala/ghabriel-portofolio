"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, FileText } from "lucide-react";
import CertificateModal, { type Certificate } from "./CertificateModal";
import { useReducedMotionPreference } from "@/hooks/useReducedMotionPreference";

interface CertificatesProps {
  certificates: Certificate[];
}

export default function Certificates({ certificates }: CertificatesProps) {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const reduceMotion = useReducedMotionPreference();
  const currentIndex = selectedCert
    ? certificates.findIndex((certificate) => certificate.id === selectedCert.id)
    : -1;

  const navigateCertificate = useCallback(
    (direction: -1 | 1) => {
      setSelectedCert((current) => {
        if (!current) return current;
        const index = certificates.findIndex(
          (certificate) => certificate.id === current.id,
        );
        return certificates[index + direction] ?? current;
      });
    },
    [certificates],
  );

  const closeModal = useCallback(() => setSelectedCert(null), []);

  return (
    <section className="relative py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <motion.header
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: reduceMotion ? 0 : 0.45 }}
          className="mb-9 max-w-3xl"
        >
          <p className="font-mono text-xs text-secondary">CERTIFICATES</p>
          <h2 className="mt-3 font-display text-4xl font-medium tracking-tight text-white sm:text-5xl">
            Learning, documented.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-text-secondary sm:text-base">
            Select an image to view the certificate at full size, or open a PDF
            certificate directly.
          </p>
        </motion.header>

        {certificates.length === 0 ? (
          <p className="border-t border-white/15 py-6 text-sm text-text-secondary">
            No certificates have been added yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {certificates.map((certificate, index) => (
              <motion.article
                key={certificate.id}
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: reduceMotion ? 0 : 0.4,
                  delay: reduceMotion ? 0 : Math.min(index * 0.04, 0.16),
                }}
                className="min-w-0 overflow-hidden rounded-xl border border-white/12 bg-bg-secondary"
              >
                {certificate.image ? (
                  <button
                    type="button"
                    onClick={() => setSelectedCert(certificate)}
                    aria-label={`View full-size certificate: ${certificate.title}`}
                    className="group relative block aspect-[16/10] w-full overflow-hidden bg-neutral text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-primary"
                  >
                    <Image
                      src={certificate.image}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1279px) 50vw, 33vw"
                      loading="lazy"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                    />
                    <span className="absolute inset-x-0 bottom-0 flex min-h-11 items-center justify-between bg-gradient-to-t from-[#1F3D2B]/90 to-transparent px-4 pt-5 font-mono text-[10px] text-white">
                      View full-size image
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </span>
                  </button>
                ) : certificate.pdf ? (
                  <a
                    href={certificate.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open PDF certificate: ${certificate.title}`}
                    className="group flex aspect-[16/10] min-h-11 items-center justify-center gap-3 border-b border-white/10 bg-white/[0.025] text-sm text-text-secondary transition-colors hover:bg-white/[0.05] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-primary"
                  >
                    <FileText size={22} aria-hidden="true" />
                    Open PDF certificate
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                ) : (
                  <div className="flex aspect-[16/10] items-center justify-center border-b border-white/10 bg-white/[0.025] text-sm text-text-muted">
                    Preview unavailable
                  </div>
                )}

                <div className="p-5 sm:p-6">
                  <h3 className="font-display text-lg font-medium leading-snug text-white">
                    {certificate.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-secondary">
                    {certificate.org}
                  </p>
                  <p className="mt-1 font-mono text-[11px] text-text-muted">
                    {certificate.date}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-text-secondary">
                    {certificate.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>

      <AnimatePresence>
        {selectedCert && (
          <CertificateModal
            certificate={selectedCert}
            canGoPrevious={currentIndex > 0}
            canGoNext={currentIndex < certificates.length - 1}
            onClose={closeModal}
            onNavigate={navigateCertificate}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
