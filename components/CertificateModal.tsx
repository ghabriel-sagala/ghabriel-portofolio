"use client";

import Image from "next/image";
import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export interface Certificate {
  id: number;
  title: string;
  org: string;
  date: string;
  image: string;
  pdf?: string;
  description: string;
}

interface CertificateModalProps {
  certificate: Certificate;
  canGoPrevious: boolean;
  canGoNext: boolean;
  onClose: () => void;
  onNavigate: (direction: -1 | 1) => void;
}

export default function CertificateModal({
  certificate,
  canGoPrevious,
  canGoNext,
  onClose,
  onNavigate,
}: CertificateModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const portalRoot =
    typeof document === "undefined" ? null : document.body;
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!portalRoot) return;
    const dialog = dialogRef.current;
    if (!dialog) return;

    const previousFocus =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key === "ArrowLeft" && canGoPrevious) {
        onNavigate(-1);
        return;
      }

      if (event.key === "ArrowRight" && canGoNext) {
        onNavigate(1);
        return;
      }

      if (event.key !== "Tab") return;
      const focusable = Array.from(
        dialog.querySelectorAll<HTMLElement>(
          'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
        ),
      );
      if (focusable.length === 0) {
        event.preventDefault();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [canGoNext, canGoPrevious, onClose, onNavigate, portalRoot]);

  if (!portalRoot) return null;

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.18 }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      className="fixed inset-0 z-[100] flex cursor-pointer items-center justify-center bg-[#1F3D2B]/90 p-3 sm:p-6"
    >
      <motion.div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="certificate-modal-title"
        tabIndex={-1}
        initial={reduceMotion ? false : { opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.94 }}
        transition={{ duration: reduceMotion ? 0 : 0.24, ease: "easeOut" }}
        className="relative flex max-h-full w-full max-w-6xl cursor-auto flex-col overflow-hidden rounded-xl border border-white/15 bg-bg-secondary shadow-[0_24px_70px_rgba(31,61,43,0.32)]"
      >
        <div className="relative flex h-[min(66dvh,60rem)] min-h-0 items-center justify-center bg-neutral sm:h-[min(76dvh,60rem)]">
          <Image
            src={certificate.image}
            alt={certificate.title}
            fill
            unoptimized
            sizes="100vw"
            className="object-contain"
          />
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close certificate preview"
            className="absolute right-3 top-3 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/45 bg-neutral/90 text-white transition-colors hover:border-primary hover:text-primary active:bg-bg-tertiary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <X size={20} aria-hidden="true" />
          </button>

          {canGoPrevious && (
            <button
              type="button"
              onClick={() => onNavigate(-1)}
              aria-label="Previous certificate"
              className="absolute left-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/45 bg-neutral/90 text-white transition-colors hover:border-primary hover:text-primary active:bg-bg-tertiary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <ChevronLeft size={20} aria-hidden="true" />
            </button>
          )}

          {canGoNext && (
            <button
              type="button"
              onClick={() => onNavigate(1)}
              aria-label="Next certificate"
              className="absolute right-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/45 bg-neutral/90 text-white transition-colors hover:border-primary hover:text-primary active:bg-bg-tertiary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <ChevronRight size={20} aria-hidden="true" />
            </button>
          )}
        </div>

        <div className="flex items-start justify-between gap-4 border-t border-white/10 px-4 py-4 sm:px-6">
          <div className="min-w-0">
            <h2
              id="certificate-modal-title"
              className="font-display text-lg font-medium text-white sm:text-xl"
            >
              {certificate.title}
            </h2>
            <p className="mt-1 text-sm text-text-secondary">
              {certificate.org}
            </p>
            <p className="mt-1 font-mono text-[11px] text-text-muted">
              {certificate.date}
            </p>
          </div>
          {certificate.pdf && (
            <a
              href={certificate.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 shrink-0 items-center rounded-md border border-white/40 px-3 text-xs font-medium text-white transition-colors hover:border-primary hover:text-primary active:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Open PDF
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>,
    portalRoot,
  );
}
