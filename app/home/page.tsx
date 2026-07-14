"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Poppins } from "next/font/google";
import Header from "../components/Header";
import { certificates, organizations, projects } from "../content";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [selectedCert, setSelectedCert] = useState<any>(null);
  const [selectedOrg, setSelectedOrg] = useState<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className={`${poppins.className} relative min-h-screen bg-[var(--bg)] text-[var(--fg)] selection:bg-[var(--accent)] selection:text-[#021] overflow-x-hidden ${isLoaded ? 'animate-page-enter' : 'opacity-0'}`}>
      <div className="fixed inset-0 z-0 h-full w-full pointer-events-none">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 8% 6%, rgba(0,255,209,0.08), transparent 18%)' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 92% 92%, rgba(124,92,255,0.06), transparent 22%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.06), rgba(0,0,0,0))' }} />
      </div>

      <Header />

      <section id="home" className="relative z-10 w-full min-h-screen overflow-hidden pt-24 pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,0.18),transparent_35%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.9fr] items-center">
            <div className="max-w-3xl">
              <span className="inline-flex items-center rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-4 py-2 text-sm font-semibold text-[var(--accent)] backdrop-blur-sm">
                Freelance · Internship · Full-time
              </span>

              <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-[var(--fg)]">
                Hello, I'm Ghabriel.
                <span className="block mt-3 text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--fg)]">Fullstack Developer & Tech Enthusiast.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg md:text-xl leading-relaxed text-[var(--muted)] text-justify">
                I’m passionate about building efficient, interactive software—from intuitive interfaces to resilient system architecture. Explore my portfolio and technology journey here, and let’s connect for collaboration opportunities.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a href="/portfolio" className="flex-1 sm:flex-none rounded-full bg-[var(--accent)] px-8 py-3.5 text-center font-semibold text-[var(--btn-fg)] shadow-[0_0_20px_rgba(239,68,68,0.35)] transition duration-300 hover:-translate-y-1 hover:bg-[var(--accent-2)] hover:shadow-[0_0_30px_rgba(239,68,68,0.55)] active:scale-95">
                  View Portfolio
                </a>
                <a href="mailto:ghabrielsagala@gmail.com" className="flex-1 sm:flex-none rounded-full border border-[var(--border)] bg-[var(--glass)] px-8 py-3.5 text-center font-semibold text-[var(--fg)] transition duration-300 hover:bg-[var(--glass)]/90 active:scale-95">
                  Email Me
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  { label: "Proyek Selesai", value: "6+" },
                  { label: "Sertifikat", value: "5+" },
                  { label: "Kegiatan Mahasiswa", value: "10+" },
                ].map((item) => (
                  <div key={item.label} className="rounded-[28px] border border-[var(--border)] bg-[var(--card)]/80 p-6 shadow-[0_18px_55px_rgba(0,0,0,0.20)] transition hover:border-[var(--accent)]/20">
                    <p className="text-3xl font-bold text-[var(--fg)]">{item.value}</p>
                    <p className="mt-3 text-sm uppercase tracking-[0.25em] text-[var(--muted)]">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-[32px] bg-[var(--accent)]/20 via-transparent to-transparent blur-3xl pointer-events-none" />
              <div className="relative overflow-hidden rounded-[32px] border border-[var(--border)] bg-[var(--card)]/90 p-6 md:p-8 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
                <div className="absolute right-6 top-6 h-24 w-24 rounded-full bg-[var(--accent)]/10 blur-3xl" />
                <div className="relative flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">Digital Toolkit</p>
                    <h2 className="mt-2 text-3xl font-semibold text-[var(--fg)]">Backend + Frontend + Design</h2>
                  </div>
                  <span className="rounded-full border border-[var(--accent)]/20 bg-[var(--accent)]/10 px-3 py-1 text-sm font-semibold text-[var(--accent)]">
                    IT Vibes
                  </span>
                </div>

                <div className="mt-8 grid gap-4">
                  <div className="rounded-[24px] border border-[var(--border)] bg-[var(--glass)] p-5">
                    <p className="text-sm uppercase tracking-[0.3em] text-[var(--muted)]">Strength</p>
                    <p className="mt-3 text-lg font-semibold text-[var(--fg)]">Fast, secure, and scalable applications.</p>
                  </div>
                  <div className="rounded-[24px] border border-[var(--border)] bg-[var(--card)] p-5">
                    <p className="text-sm uppercase tracking-[0.3em] text-[var(--muted)]">Tools I Use</p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      {["Figma", "Java", "VS Code", "JavaScript", "Python", "Excel", "Laravel", "Tailwind CSS", "React", "Next.js"].map((tool) => (
                        <span key={tool} className="rounded-full border border-[var(--border)] bg-[var(--glass)] px-3 py-2 text-xs font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-[24px] border border-[var(--border)] bg-[var(--card)] p-5">
                    <p className="text-sm uppercase tracking-[0.3em] text-[var(--muted)]">About</p>
                    <div className="mt-3 flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
                      <div className="h-24 w-24 overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--bg)]">
                        <Image src="/profile.jpg" alt="Ghabriel Theo" width={96} height={96} className="object-cover" />
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-[var(--fg)]">Ghabriel Theo</p>
                        <p className="mt-2 max-w-md text-sm leading-relaxed text-[var(--muted)]">IT enthusiast with a modern approach, high quality standards, and strong technical detail.</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-[var(--bg)] px-6 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 rounded-[32px] border border-[var(--border)] bg-[var(--card)]/90 p-8 shadow-[0_18px_80px_rgba(0,0,0,0.18)] backdrop-blur-xl">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">What I Do</p>
                <h2 className="mt-3 text-4xl font-bold text-[var(--fg)] md:text-5xl">Digital services for the modern IT era.</h2>
                <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">I help build accessible, scalable products that are ready for future UI experiences. More than design, I prioritize clean technical structure and practical implementation.</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 xl:gap-4">
                {[
                  { title: "Rapid Prototyping", desc: "Testing ideas before moving to production." },
                  { title: "API Integration", desc: "Connecting systems to communicate seamlessly." },
                ].map((item) => (
                  <div key={item.title} className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-5">
                    <p className="text-sm font-semibold text-[var(--fg)]">{item.title}</p>
                    <p className="mt-2 text-sm text-[var(--muted)]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {[
              { title: "Cloud-ready", description: "Building solutions that are easy to deploy and maintain on modern servers." },
              { title: "Performance first", description: "Focusing on speed and efficiency for both users and servers." },
              { title: "Design system", description: "Standardizing components so the interface stays consistent and polished." },
            ].map((item) => (
              <div key={item.title} className="rounded-[28px] border border-[var(--border)] bg-[var(--card)]/90 p-6 text-[var(--fg)] shadow-[0_18px_60px_rgba(0,0,0,0.2)]">
                <p className="text-xl font-semibold text-[var(--fg)]">{item.title}</p>
                <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="relative z-10 border-t border-[var(--border)] bg-[var(--bg)] px-6 py-20 scroll-mt-20">
        <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,rgba(220,38,38,0.18),transparent_35%)] pointer-events-none" />
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">Portfolio</p>
              <h2 className="mt-3 text-4xl font-bold text-[var(--fg)] md:text-5xl">A concise portfolio that’s strong and sharp.</h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--muted)]">Two selected projects that showcase my ability to create modern IT solutions.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {['UI/UX', 'Backend', 'Performance'].map((item) => (
                <span key={item} className="rounded-full border border-[var(--border)] bg-[var(--glass)] px-4 py-2 text-sm text-[var(--muted)]">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.slice(0, 2).map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--card)]/95 shadow-[0_20px_65px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/30"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[var(--overlay)]/80" />
                  <div className="absolute left-4 top-4 rounded-full bg-[var(--accent)]/15 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-[var(--accent)] backdrop-blur-sm">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[var(--fg)] transition-colors group-hover:text-[var(--accent)]">{project.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{project.shortDesc}</p>
                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-sm text-[var(--muted)]">
                    <span>{project.tech.slice(0, 2).join(' • ')}</span>
                    <span className="font-semibold text-[var(--accent)]">{project.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link href="/portfolio" className="rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-6 py-3 text-sm font-semibold text-[var(--accent)] transition hover:bg-[var(--accent)]/20">
              View all work →
            </Link>
          </div>
        </div>
      </section>

      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--overlay)] backdrop-blur-md p-4 md:p-8" onClick={() => setSelectedProject(null)}>
          <div className="w-full max-w-4xl overflow-hidden rounded-[32px] border border-[var(--border)] bg-[var(--card)] shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between border-b border-[var(--border)] bg-[var(--glass)] p-6">
              <h3 className="text-2xl font-bold text-[var(--fg)] tracking-tight">{selectedProject.title}</h3>
              <button onClick={() => setSelectedProject(null)} className="rounded-full bg-[var(--glass)] p-3 text-[var(--muted)] transition-all hover:bg-[var(--accent)]/20 hover:text-[var(--fg)]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div className="max-h-[75vh] overflow-y-auto p-6 md:p-8">
              <div className="mb-8 flex flex-wrap gap-2">
                {selectedProject.tech.map((t: string) => (
                  <span key={t} className="rounded-full border border-[var(--border)] bg-[var(--glass)] px-4 py-1.5 text-sm text-[var(--muted)]">
                    {t}
                  </span>
                ))}
                <span className="rounded-full border border-green-500/20 bg-green-500/10 px-4 py-1.5 text-sm font-bold text-green-400">
                  {selectedProject.status}
                </span>
              </div>
              <div className="mb-8 rounded-2xl border border-[var(--border)] bg-[var(--glass)] p-6">
                <h4 className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[var(--accent)]">Detail arsitektur produk</h4>
                <p className="text-base leading-relaxed text-[var(--muted)] md:text-xl">{selectedProject.fullDesc}</p>
              </div>
              <div className="relative h-64 w-full overflow-hidden rounded-2xl border border-[var(--border)] shadow-inner md:h-[450px]">
                <Image src={selectedProject.image} alt={selectedProject.title} fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedCert && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--overlay)] backdrop-blur-md p-4 md:p-8" onClick={() => setSelectedCert(null)}>
          <div className="w-full max-w-5xl overflow-hidden rounded-[32px] border border-[var(--border)] bg-[var(--card)] shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between border-b border-[var(--border)] bg-[var(--glass)] p-6 md:p-8">
              <h3 className="pr-8 text-2xl font-bold text-[var(--fg)] tracking-tight md:text-3xl">{selectedCert.title}</h3>
              <button onClick={() => setSelectedCert(null)} className="rounded-full bg-[var(--glass)] p-3 text-[var(--muted)] transition-all hover:bg-[var(--accent)]/20 hover:text-[var(--fg)]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div className="max-h-[75vh] overflow-y-auto p-6 md:p-8">
              <div className="mb-8 flex flex-wrap gap-2">
                <span className="rounded-full border border-[var(--border)] bg-[var(--glass)] px-4 py-1.5 text-sm text-[var(--muted)]">
                  {selectedCert.org}
                </span>
                <span className="rounded-full border border-[var(--border)] bg-[var(--glass)] px-4 py-1.5 text-sm text-[var(--muted)]">
                  {selectedCert.date}
                </span>
              </div>
              <div className="mb-8 rounded-2xl border border-[var(--border)] bg-[var(--glass)] p-6">
                <h4 className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[var(--accent)]">Detail sertifikat</h4>
                <p className="text-base leading-relaxed text-[var(--muted)] md:text-xl">
                  Kredensial ini mencerminkan kompetensi profesional berstandar tinggi dan memvalidasi pengetahuan khusus di bidang tertentu. Diterbitkan pada {selectedCert.date} oleh {selectedCert.org}.
                </p>
              </div>
              <div className="relative h-64 w-full overflow-hidden rounded-2xl border-2 border-[var(--border)] bg-[var(--glass)] shadow-inner md:h-[500px]">
                <Image src={selectedCert.image} alt={selectedCert.title} fill className="object-contain" />
              </div>
            </div>
          </div>
        </div>
      )}

      <footer id="contact" className="relative z-10 border-t border-[var(--border)] bg-[var(--bg)] py-20 text-center">
        <h2 className="mb-8 text-3xl font-bold text-[var(--fg)]">Let's collaborate and build something meaningful.</h2>
        <div className="mb-10 flex flex-wrap justify-center gap-6 px-6 text-sm font-medium">
          <a href="mailto:ghabrielsagala@gmail.com" className="text-[var(--muted)] transition-colors hover:text-[var(--accent)]">ghabrielsagala@gmail.com</a>
          <a href="https://instagram.com/ghabrielsagala" target="_blank" className="text-[var(--muted)] transition-colors hover:text-[var(--accent)]">Instagram</a>
          <a href="https://www.linkedin.com/in/ghabriel-sagala-93bba027b" target="_blank" className="text-[var(--muted)] transition-colors hover:text-[var(--accent)]">LinkedIn</a>
        </div>
        <p className="text-sm text-[var(--muted)]">© {new Date().getFullYear()} Ghabriel Theo Petra Sagala. Built with modern design and a personal experience focus.</p>
      </footer>
    </main>
  );
}
