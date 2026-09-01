"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

interface Project {
  id: string | number;
  title: string;
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

  // Extract unique categories
  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];
  const filtered = activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter);

  // Modal navigation
  const currentIndex = selectedProject
    ? filtered.findIndex((p) => p.id === selectedProject.id)
    : -1;

  const goToNext = useCallback(() => {
    if (currentIndex < filtered.length - 1) setSelectedProject(filtered[currentIndex + 1]);
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

  // Lock body scroll
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [selectedProject]);

  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-10 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-16"
      >
        <h2 className="font-space text-5xl md:text-6xl font-bold text-white mb-6">
          Featured{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-primary)] to-orange-500">
            Projects
          </span>
        </h2>
        <p className="text-gray-400 font-inter max-w-2xl mx-auto text-base mb-10">
          Pilihan karya terbaik yang merepresentasikan keahlian teknis dan
          kemampuan penyelesaian masalah komprehensif saya.
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeFilter === cat
                  ? "bg-[var(--brand-primary)] text-white border-[var(--brand-primary)] shadow-lg shadow-[var(--brand-primary)]/20"
                  : "bg-white/5 text-gray-400 border-white/10 hover:text-white hover:border-white/20 hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </motion.div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() => setSelectedProject(project)}
              className="group relative rounded-3xl overflow-hidden glass-card border border-white/[0.08] hover:border-[var(--brand-primary)]/30 transition-all duration-300 flex flex-col h-full cursor-pointer hover:shadow-[0_10px_40px_rgba(239,68,68,0.08)]"
            >
              <div className="relative h-56 w-full overflow-hidden bg-[#111]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={encodeURI(project.image)}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--card-bg)] via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium flex items-center gap-2">
                    <ExternalLink size={14} />
                    View Details
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col -mt-6 relative z-10">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="text-[10px] font-mono text-[var(--brand-secondary)] mb-2 uppercase tracking-wider bg-[var(--brand-secondary)]/10 border border-[var(--brand-secondary)]/20 inline-block px-2 py-1 rounded">
                      {project.category}
                    </p>
                    <h3 className="text-lg font-bold text-white font-space leading-snug group-hover:text-[var(--brand-primary)] transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div className="w-9 h-9 flex-shrink-0 rounded-full border border-white/10 bg-white/5 flex items-center justify-center group-hover:bg-[var(--brand-primary)] group-hover:border-[var(--brand-primary)] group-hover:text-white transition-all transform group-hover:rotate-45 ml-3">
                    <ArrowUpRight size={16} />
                  </div>
                </div>

                <p className="text-gray-400 font-inter text-sm mb-5 flex-1 leading-relaxed">
                  {project.shortDesc}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-white/[0.08]">
                  {project.tech.map((t: string) => (
                    <span
                      key={t}
                      className="px-2 py-1 bg-white/5 border border-white/[0.08] rounded-md text-[11px] font-medium text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

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
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0a0a0f] rounded-2xl overflow-hidden max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-white/10 relative"
            >
              {/* Navigation arrows */}
              {currentIndex > 0 && (
                <button
                  onClick={(e) => { e.stopPropagation(); goToPrev(); }}
                  className="absolute left-3 top-3 z-20 w-10 h-10 bg-black/50 hover:bg-black/75 rounded-full flex items-center justify-center text-white transition-colors backdrop-blur-md border border-white/10"
                  aria-label="Previous project"
                >
                  <ChevronLeft size={18} />
                </button>
              )}
              {currentIndex < filtered.length - 1 && (
                <button
                  onClick={(e) => { e.stopPropagation(); goToNext(); }}
                  className="absolute right-14 top-3 z-20 w-10 h-10 bg-black/50 hover:bg-black/75 rounded-full flex items-center justify-center text-white transition-colors backdrop-blur-md border border-white/10"
                  aria-label="Next project"
                >
                  <ChevronRight size={18} />
                </button>
              )}

              <div className="relative h-64 md:h-80">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={encodeURI(selectedProject.image)}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/75 rounded-full flex items-center justify-center text-white transition-colors backdrop-blur-md border border-white/10 z-20"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="p-8">
                <p className="text-[10px] font-mono text-[var(--brand-secondary)] mb-3 uppercase tracking-wider bg-[var(--brand-secondary)]/10 border border-[var(--brand-secondary)]/20 inline-block px-2 py-1 rounded">
                  {selectedProject.category}
                </p>
                <h3 className="text-3xl font-bold font-space text-white mb-3">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-400 font-inter leading-relaxed mb-6">
                  {selectedProject.shortDesc}
                </p>

                <div className="flex flex-wrap gap-2 mb-6 border-t border-white/10 pt-6">
                  {selectedProject.tech.map((t: string) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500 font-mono">
                    {currentIndex + 1} / {filtered.length}
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-3 bg-white/5 border border-white/10 text-white rounded-xl font-medium hover:bg-white/10 transition-all"
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
