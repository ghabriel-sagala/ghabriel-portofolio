"use client";

import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  X,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { createPortal } from "react-dom";
import { useState, useEffect, useCallback, useRef } from "react";

interface Project {
  id: string | number;
  title: string;
  role?: string;
  tech: string[];
  category: string;
  shortDesc: string;
  image: string;
}

export default function ProjectShowcase({
  projects,
}: {
  projects: Project[];
}) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const portalRoot =
    typeof document === "undefined" ? null : document.body;
  const reduceMotion = useReducedMotion();

  // Unique categories
  const categories = [
    "All",
    ...Array.from(new Set(projects.map((p) => p.category))),
  ];
  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const currentIndex = selectedProject
    ? filtered.findIndex((p) => p.id === selectedProject.id)
    : -1;

  const goToNext = useCallback(() => {
    if (currentIndex < filtered.length - 1)
      setSelectedProject(filtered[currentIndex + 1]);
  }, [currentIndex, filtered]);

  const goToPrev = useCallback(() => {
    if (currentIndex > 0) setSelectedProject(filtered[currentIndex - 1]);
  }, [currentIndex, filtered]);

  useEffect(() => {
    if (!selectedProject || !portalRoot) return;
    const modal = modalRef.current;
    if (!modal) return;

    const previousFocus =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setSelectedProject(null);
      } else if (e.key === "ArrowRight") {
        goToNext();
      } else if (e.key === "ArrowLeft") {
        goToPrev();
      } else if (e.key === "Tab") {
        const focusable = Array.from(
          modal.querySelectorAll<HTMLElement>(
            'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
          ),
        );
        if (focusable.length === 0) {
          e.preventDefault();
          return;
        }

        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [selectedProject, goToNext, goToPrev, portalRoot]);

  return (
    <section className="relative py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Section header */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: reduceMotion ? 0 : 0.45 }}
          className="mb-9 max-w-3xl"
        >
          <span className="font-mono text-xs text-secondary">
            SELECTED WORK
          </span>
          <h2 className="mt-3 font-display text-4xl font-medium tracking-tight text-white sm:text-5xl lg:text-6xl">
            Projects
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-text-secondary sm:text-base">
            Web platforms, internal tools, and connected-device projects.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                aria-pressed={activeFilter === cat}
                onClick={() => setActiveFilter(cat)}
                className={`min-h-11 rounded-md border px-4 py-2 text-sm font-medium transition-colors ${
                  activeFilter === cat
                    ? "border-primary bg-primary text-neutral"
                    : "border-white/40 bg-white/[0.025] text-text-secondary hover:border-primary hover:text-white active:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {filtered.length === 0 ? (
          <p className="border-t border-white/15 py-6 text-sm text-text-secondary">
            No projects match this category.
          </p>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project, index) => (
                <motion.article
                  key={project.id}
                  layout
                  initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: 8 }}
                  transition={{ duration: reduceMotion ? 0 : 0.32 }}
                  className={`group min-w-0 overflow-hidden rounded-xl border transition-colors hover:border-primary ${
                    index === 0
                      ? "glass-highlight"
                      : "border-white/12 bg-bg-secondary"
                  }`}
                >
                  <div
                    className={`relative w-full overflow-hidden bg-black/30 ${
                      index % 3 === 0 ? "aspect-[4/3]" : "aspect-[16/10]"
                    }`}
                  >
                      <Image
                        src={project.image}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>

                  <div className="flex min-h-52 flex-col p-5 sm:p-6">
                    <div className="mb-3 flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <p className="font-mono text-[10px] text-secondary">
                          {project.category}
                        </p>
                        <h3 className="mt-2 font-display text-lg font-medium leading-snug text-white transition-colors group-hover:text-primary sm:text-xl">
                          {project.title}
                        </h3>
                      </div>
                      <ArrowUpRight
                        size={18}
                        aria-hidden="true"
                        className="mt-1 shrink-0 text-text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </div>

                    <p className="mb-5 text-sm leading-6 text-text-secondary">
                      {project.shortDesc}
                    </p>

                    <div className="flex flex-wrap gap-x-3 gap-y-2 border-t border-white/10 pt-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[10px] text-text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="mt-5 inline-flex min-h-11 items-center gap-2 self-start rounded-md text-xs font-medium text-primary transition-colors hover:text-white active:text-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                    >
                      View project details
                      <ArrowUpRight size={15} aria-hidden="true" />
                    </button>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      {/* Project Modal */}
      {selectedProject &&
        portalRoot &&
        createPortal(
          <motion.div
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[100] flex cursor-pointer items-center justify-center bg-black/85 p-4"
          >
            <motion.div
              ref={modalRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
              tabIndex={-1}
              initial={reduceMotion ? false : { scale: 0.92, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={reduceMotion ? undefined : { scale: 0.92, y: 30 }}
              transition={{
                duration: reduceMotion ? 0 : 0.28,
                ease: "easeOut",
              }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90dvh] w-full max-w-4xl cursor-auto overflow-y-auto rounded-2xl border border-white/10 bg-bg-secondary shadow-2xl"
            >
              {/* Nav arrows */}
              {currentIndex > 0 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPrev();
                  }}
                  className="absolute left-3 top-3 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/45 bg-neutral/95 text-white/85 transition-colors hover:border-primary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  type="button"
                  aria-label="Previous project"
                >
                  <ChevronLeft size={18} />
                </button>
              )}
              {currentIndex < filtered.length - 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNext();
                  }}
                  className="absolute right-14 top-3 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/45 bg-neutral/95 text-white/85 transition-colors hover:border-primary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  type="button"
                  aria-label="Next project"
                >
                  <ChevronRight size={18} />
                </button>
              )}

              <div className="relative bg-black/60">
                {/* Clicking the image opens the full resolution file in a new tab */}
                <a
                  href={selectedProject.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${selectedProject.title} image in a new tab`}
                  className="group/image relative block h-56 w-full overflow-hidden bg-neutral md:h-80"
                >
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    sizes="90vw"
                    className="object-contain"
                  />
                  <span className="absolute bottom-3 right-3 z-10 inline-flex min-h-11 items-center gap-1.5 rounded-md border border-white/40 bg-neutral/90 px-3 text-[11px] font-medium text-white">
                    <ExternalLink size={12} />
                    Open full size
                  </span>
                </a>
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-secondary)] via-transparent to-transparent pointer-events-none" />
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-3 right-3 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/45 bg-neutral/90 text-white transition-colors hover:border-primary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  aria-label="Close modal"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="p-6 md:p-8">
                <p className="mb-2 font-mono text-[10px] text-secondary">
                  {selectedProject.category}
                </p>

                <h3
                  id="project-modal-title"
                  className="mb-2 font-display text-2xl font-bold text-white md:text-3xl"
                >
                  {selectedProject.title}
                </h3>

                {selectedProject.role && (
                  <p className="text-sm font-medium text-white/70 mb-3">
                    <span className="text-gray-500">Role:</span>{" "}
                    {selectedProject.role}
                  </p>
                )}

                <p className="text-gray-400 leading-relaxed mb-6">
                  {selectedProject.shortDesc}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between border-t border-white/8 pt-5">
                  <span className="text-xs text-gray-500 font-mono">
                    {currentIndex + 1} / {filtered.length}
                  </span>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="min-h-11 rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-white/90 active:bg-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
            </motion.div>,
            portalRoot,
          )}
    </section>
  );
}
