"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  X,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Map,
  Ship,
  Briefcase,
  Sparkles,
  Wifi,
} from "lucide-react";
import { useState, useEffect, useCallback } from "react";

interface Project {
  id: string | number;
  title: string;
  role?: string;
  tech: string[];
  category: string;
  shortDesc: string;
  image: string;
}

// Category icon mapper
const categoryIcons: Record<string, React.ElementType> = {
  "Web Development": Map,
  "Information System": Ship,
  "Web Application": Briefcase,
  "Artificial Intelligence": Sparkles,
  "Internet of Things": Wifi,
  "Financial System": Briefcase,
};

export default function ProjectShowcase({
  projects,
}: {
  projects: Project[];
}) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState("All");

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
    if (!selectedProject) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "ArrowLeft") goToPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedProject, goToNext, goToPrev]);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--color-accent-secondary)]">
            01 — Work
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white font-display mt-4 mb-6 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
            A curated selection of projects that showcase my technical depth —
            from web platforms and productivity tools to IoT systems.
          </p>

          {/* Filter pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                  activeFilter === cat
                    ? "bg-white text-black border-white shadow-sm"
                    : "bg-white/[0.03] text-gray-400 border-white/10 hover:text-white hover:border-white/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* STRICT GRID: 1 col mobile, 2 col tablet, 3 col desktop */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => {
              const Icon = categoryIcons[project.category] || Briefcase;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                  onClick={() => setSelectedProject(project)}
                  className="group relative rounded-2xl overflow-hidden bg-[var(--color-bg-tertiary)] border border-white/6 hover:border-white/10 transition-all duration-300 cursor-pointer h-full"
                >
                  {/* Fixed height card: h-[380px] on all screen sizes */}
                  <div className="flex flex-col h-[380px]">
                    {/* Image area — responsive 16:10 frame; top-aligned so tall screenshots stay readable */}
                    <div className="relative w-full aspect-[16/10] shrink-0 overflow-hidden bg-black/40">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      {/* Gradient overlay at bottom of image */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-tertiary)] via-transparent to-transparent pointer-events-none" />

                      {/* Hover overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                        <div className="px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium flex items-center gap-2 shadow-lg">
                          <ExternalLink size={14} />
                          View details
                        </div>
                      </div>

                      {/* Category badge on image */}
                      <div className="absolute top-3 left-3">
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/10">
                          <Icon size={11} className="text-white/80" />
                          <span className="text-[10px] font-mono uppercase tracking-wider text-white/80">
                            {project.category}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content area — fills remaining space */}
                    <div className="flex-1 p-5 flex flex-col">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div className="min-w-0 flex-1">
                          <h3 className="text-base font-bold text-white font-display leading-snug group-hover:text-[var(--color-accent)] transition-colors line-clamp-1">
                            {project.title}
                          </h3>
                        </div>
                        <div className="flex-shrink-0 w-7 h-7 rounded-full border border-white/10 bg-white/5 flex items-center justify-center group-hover:bg-[var(--color-accent)] group-hover:border-[var(--color-accent)] group-hover:text-white transition-all flex">
                          <ArrowUpRight size={14} />
                        </div>
                      </div>

                      <p className="text-gray-400 text-xs leading-relaxed mb-3 line-clamp-2 flex-1">
                        {project.shortDesc}
                      </p>

                      {/* Tech tags — fixed height wrapper */}
                      <div className="flex flex-wrap gap-1.5 mt-auto">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-[10px] font-medium text-gray-400 transition-colors group-hover:border-white/10 whitespace-nowrap"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Hint text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 text-center"
        >
          <p className="text-[11px] font-mono text-gray-500 uppercase tracking-widest">
            Click any project card to explore details
          </p>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.92, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 30 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[var(--color-bg-secondary)] rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-white/8 relative"
            >
              {/* Nav arrows */}
              {currentIndex > 0 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPrev();
                  }}
                  className="absolute left-3 top-3 z-20 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white/80 hover:text-white transition-colors backdrop-blur-md border border-white/10"
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
                  className="absolute right-14 top-3 z-20 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white/80 hover:text-white transition-colors backdrop-blur-md border border-white/10"
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
                  className="group/image relative block w-full h-56 md:h-80 overflow-hidden cursor-zoom-in"
                >
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    sizes="90vw"
                    className="object-cover object-top transition-transform duration-500 group-hover/image:scale-[1.03]"
                  />
                  <span className="absolute bottom-3 right-3 z-10 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white text-[11px] font-medium">
                    <ExternalLink size={12} />
                    Open full size
                  </span>
                </a>
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-secondary)] via-transparent to-transparent pointer-events-none" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-3 right-3 w-9 h-9 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white/80 hover:text-white transition-colors backdrop-blur-md border border-white/10 z-20"
                  aria-label="Close modal"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="p-6 md:p-8">
                <div className="flex items-center gap-2 mb-2">
                  {(() => {
                    const Icon = categoryIcons[selectedProject.category] || Briefcase;
                    return (
                      <>
                        <Icon
                          size={14}
                          className="text-[var(--color-accent-secondary)]"
                        />
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-accent-secondary)] bg-[var(--color-accent-secondary)]/10 border border-[var(--color-accent-secondary)]/20 px-2 py-0.5 rounded">
                          {selectedProject.category}
                        </span>
                      </>
                    );
                  })()}
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white font-display mb-2">
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
                    className="px-5 py-2.5 bg-white text-black rounded-xl text-sm font-medium hover:bg-white/90 transition-all"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
