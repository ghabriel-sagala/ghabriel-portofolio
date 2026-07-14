"use client";

import Header from "../components/Header";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Poppins } from "next/font/google";
import { projects } from "../content";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <main className={`${poppins.className} relative min-h-screen bg-transparent text-[var(--fg)]`}>
      <Header />
      <div className="pointer-events-none absolute inset-0 bg-[var(--bg-gradient)] opacity-90" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-16">
        <div className="mb-16 rounded-[32px] border border-[var(--border)] bg-[var(--card)]/90 p-8 shadow-[0_30px_100px_rgba(0,0,0,0.25)] backdrop-blur-xl">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full bg-[var(--accent)]/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-[var(--accent)]">Portofolio</span>
            <h1 className="text-4xl font-bold md:text-5xl">Kumpulan karya modern yang mewakili saya sebagai profesional TI.</h1>
            <p className="max-w-2xl text-base leading-relaxed text-[var(--muted)]">Solusi digital ini dirancang dengan struktur teknis yang rapi, performa yang stabil, dan tampilan yang profesional.</p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <button
              key={project.id}
              type="button"
              onClick={() => setSelectedProject(project)}
              className="group overflow-hidden rounded-[32px] border border-[var(--border)] bg-[var(--card)]/90 shadow-[0_25px_80px_rgba(0,0,0,0.20)] transition hover:-translate-y-1 hover:border-[var(--accent)]/30"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--overlay)]/80 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full bg-[var(--accent)]/15 px-3 py-1 text-xs uppercase tracking-[0.2em] text-[var(--accent)] backdrop-blur-sm">
                  {project.category}
                </div>
              </div>

              <div className="p-8 text-left">
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-full border border-[var(--border)] bg-[var(--glass)] px-3 py-1 text-xs font-medium text-[var(--muted)]">
                      {tech}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-semibold text-[var(--fg)]">{project.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">{project.shortDesc}</p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-[var(--accent)]/20 bg-[var(--accent)]/10 px-3 py-2 text-xs uppercase tracking-[0.24em] text-[var(--accent)]">
                    {project.status}
                  </span>
                  <span className="text-sm text-[var(--muted)]">Designed for performance and experience.</span>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-sm leading-relaxed text-[var(--muted)]">Semua karya ini dipilih untuk menunjukkan kualitas teknis dan estetika yang saya bawa ke setiap proyek.</p>
          <Link href="/" className="rounded-full border border-[var(--border)] bg-[var(--glass)] px-6 py-3 text-sm font-semibold text-[var(--fg)] transition hover:bg-[var(--glass)]/80">
            ← Kembali ke beranda
          </Link>
        </div>
      </div>
    </main>
  );
}
