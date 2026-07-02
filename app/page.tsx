"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Poppins } from "next/font/google";
import Header from "./components/Header";
import { certificates, organizations, projects } from "./content";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [selectedCert, setSelectedCert] = useState<any>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className={`${poppins.className} relative min-h-screen bg-[#050505] text-white selection:bg-red-900 selection:text-white overflow-x-hidden ${isLoaded ? 'animate-page-enter' : 'opacity-0'}`}>
      <div className="fixed inset-0 z-0 h-full w-full pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,0.16),transparent_28%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.12),transparent_32%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/95 to-[#050505]" />
      </div>

      <Header />
      {isMobileMenuOpen && (
        <div className="absolute top-[88px] left-0 w-full bg-[#0a0a0c]/95 backdrop-blur-xl border-b border-white/5 py-4 px-6 flex flex-col space-y-5 shadow-2xl md:hidden">
          <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="text-zinc-300 hover:text-red-500 font-medium text-base">Beranda</a>
          <a href="#portfolio" onClick={() => setIsMobileMenuOpen(false)} className="text-zinc-300 hover:text-red-500 font-medium text-base">Portofolio</a>
          <a href="#organisasi" onClick={() => setIsMobileMenuOpen(false)} className="text-zinc-300 hover:text-red-500 font-medium text-base">Organisasi</a>
          <a href="#sertifikat" onClick={() => setIsMobileMenuOpen(false)} className="text-zinc-300 hover:text-red-500 font-medium text-base">Sertifikat</a>
        </div>
      )}

      <section id="home" className="relative z-10 w-full min-h-screen overflow-hidden pt-24 pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,0.18),transparent_35%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.9fr] items-center">
            <div className="max-w-3xl">
              <span className="inline-flex items-center rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-300 backdrop-blur-sm">
                Freelance · Internship · Fulltime
              </span>

              <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-white">
                Solusi digital modern untuk anak IT yang ingin tampil profesional.
              </h1>

              <p className="mt-6 max-w-2xl text-lg md:text-xl leading-relaxed text-zinc-400">
                Saya adalah Ghabriel Theo Petra Sagala. Halaman ini menunjukkan pendekatan saya sebagai anak IT: halus namun kuat, dengan fokus pada struktur kode yang rapih, performa yang stabil, dan pengalaman pengguna yang mudah diikuti.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a href="/portfolio" className="flex-1 sm:flex-none rounded-full bg-red-700 px-8 py-3.5 text-center font-semibold text-white shadow-[0_0_20px_rgba(220,38,38,0.35)] transition duration-300 hover:-translate-y-1 hover:bg-red-600 hover:shadow-[0_0_30px_rgba(220,38,38,0.55)] active:scale-95">
                  Masuk ke Portofolio
                </a>
                <a href="mailto:ghabrielsagala@gmail.com" className="flex-1 sm:flex-none rounded-full border border-white/10 bg-white/5 px-8 py-3.5 text-center font-semibold text-white transition duration-300 hover:bg-white/10 active:scale-95">
                  Email Saya
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  { label: "Project selesai", value: "4+" },
                  { label: "Organisasi aktif", value: "3+" },
                  { label: "IPK", value: "3.87" },
                ].map((item) => (
                  <div key={item.label} className="rounded-[28px] border border-white/10 bg-[#121214]/80 p-6 shadow-[0_18px_55px_rgba(0,0,0,0.25)] transition hover:border-red-500/20">
                    <p className="text-3xl font-bold text-white">{item.value}</p>
                    <p className="mt-3 text-sm uppercase tracking-[0.25em] text-zinc-500">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-red-600/20 via-transparent to-transparent blur-3xl pointer-events-none" />
              <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0b0b0f]/90 p-6 md:p-8 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
                <div className="absolute right-6 top-6 h-24 w-24 rounded-full bg-red-500/10 blur-3xl" />
                <div className="relative flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-400">Digital Toolkit</p>
                    <h2 className="mt-2 text-3xl font-semibold text-white">Backend + Frontend + Design</h2>
                  </div>
                  <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-sm font-semibold text-emerald-300">
                    IT Vibes
                  </span>
                </div>

                <div className="mt-8 grid gap-4">
                  <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                    <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">Kekuatan</p>
                    <p className="mt-3 text-lg font-semibold text-white">Aplikasi cepat, aman, dan skalabel.</p>
                  </div>
                  <div className="rounded-[24px] border border-white/10 bg-[#111118] p-5">
                    <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">Tools yang biasa saya gunakan</p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      {["Figma", "Java", "VS Code", "JavaScript", "Python", "Excel", "Laravel", "Tailwind CSS", "React", "Next.js"].map((tool) => (
                        <span key={tool} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium uppercase tracking-[0.2em] text-zinc-300">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-[24px] border border-white/10 bg-[#111118] p-5">
                    <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">Dari</p>
                    <div className="mt-3 flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
                      <div className="h-24 w-24 overflow-hidden rounded-3xl border border-white/10 bg-zinc-900">
                        <Image src="/profile.jpg" alt="Ghabriel Theo" width={96} height={96} className="object-cover" />
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-white">Ghabriel Theo</p>
                        <p className="mt-2 max-w-md text-sm leading-relaxed text-zinc-400">Anak IT dengan pendekatan modern, kualitas tinggi, dan detail teknis yang kuat.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 rounded-[28px] border border-white/10 bg-[#121218]/90 p-5">
                  <p className="text-sm uppercase tracking-[0.3em] text-red-400">Latest focus</p>
                  <p className="mt-3 text-base leading-relaxed text-zinc-300">Meningkatkan pengalaman pengguna dengan animasi halus, pemanggilan data real-time, dan antarmuka yang bisa diadaptasi pada desktop maupun mobile.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-[#070707] px-6 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 rounded-[32px] border border-white/10 bg-[#101018]/80 p-8 shadow-[0_18px_80px_rgba(0,0,0,0.3)] backdrop-blur-xl">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-400">Apa yang saya lakukan</p>
                <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">Layanan digital untuk era IT modern.</h2>
                <p className="mt-4 text-base leading-relaxed text-zinc-400">Saya membantu membangun produk yang dapat diakses, mudah dikembangkan, dan siap menghadapi UI masa depan. Lebih dari sekadar desain, saya mengutamakan struktur teknis yang bersih dan implementasi yang praktis.</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 xl:gap-4">
                {[
                  { title: "Prototyping cepat", desc: "Menguji ide sebelum masuk ke produksi." },
                  { title: "Integrasi API", desc: "Membuat sistem saling berkomunikasi dengan lancar." },
                ].map((item) => (
                  <div key={item.title} className="rounded-3xl border border-white/10 bg-[#121217] p-5">
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                    <p className="mt-2 text-sm text-zinc-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {[
              { title: "Cloud-ready", description: "Membangun solusi yang mudah di-deploy dan dipelihara di server modern." },
              { title: "Performance first", description: "Fokus pada kecepatan dan efisiensi dari sisi pengguna dan server." },
              { title: "Design system", description: "Standarisasi komponen agar tampilan tetap konsisten dan terjaga." },
            ].map((item) => (
              <div key={item.title} className="rounded-[28px] border border-white/10 bg-[#121218]/90 p-6 text-white shadow-[0_18px_60px_rgba(0,0,0,0.2)]">
                <p className="text-xl font-semibold text-white">{item.title}</p>
                <p className="mt-4 text-sm leading-relaxed text-zinc-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="relative z-10 border-t border-white/5 bg-[#070708] px-6 py-20 scroll-mt-20">
        <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,_rgba(220,38,38,0.18),transparent_35%)] pointer-events-none" />
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-400">Portofolio</p>
              <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">Portofolio ringkas yang kuat dan tajam.</h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-400">Dua proyek terpilih yang mencerminkan kemampuan saya dalam menciptakan solusi IT modern.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {['UI/UX', 'Backend', 'Performance'].map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
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
                className="group cursor-pointer overflow-hidden rounded-[28px] border border-white/10 bg-[#0d0d12]/95 shadow-[0_20px_65px_rgba(0,0,0,0.2)] transition duration-300 hover:-translate-y-1 hover:border-red-500/30"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute left-4 top-4 rounded-full bg-red-500/15 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-red-300 backdrop-blur-sm">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-red-500">{project.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">{project.shortDesc}</p>
                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-sm text-zinc-500">
                    <span>{project.tech.slice(0, 2).join(' • ')}</span>
                    <span className="font-semibold text-red-300">{project.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link href="/portfolio" className="rounded-full border border-red-500/30 bg-red-500/10 px-6 py-3 text-sm font-semibold text-red-300 transition hover:bg-red-500/20">
              Lihat semua karya →
            </Link>
          </div>
        </div>
      </section>

      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 md:p-8 transition-opacity duration-300" onClick={() => setSelectedProject(null)}>
          <div className="w-full max-w-4xl overflow-hidden rounded-[32px] border border-white/10 bg-[#0f0f11] shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between border-b border-white/5 bg-[#121214] p-6">
              <h3 className="text-2xl font-bold text-white tracking-tight">{selectedProject.title}</h3>
              <button onClick={() => setSelectedProject(null)} className="rounded-full bg-white/5 p-3 text-gray-400 transition-all hover:bg-red-600 hover:text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div className="max-h-[75vh] overflow-y-auto p-6 md:p-8">
              <div className="mb-8 flex flex-wrap gap-2">
                {selectedProject.tech.map((t: string) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-gray-300">
                    {t}
                  </span>
                ))}
                <span className="rounded-full border border-green-500/20 bg-green-500/10 px-4 py-1.5 text-sm font-bold text-green-400">
                  {selectedProject.status}
                </span>
              </div>
              <div className="mb-8 rounded-2xl border border-white/5 bg-white/5 p-6">
                <h4 className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-red-500">Spesifikasi Arsitektur Produk</h4>
                <p className="text-base leading-relaxed text-zinc-300 md:text-xl">{selectedProject.fullDesc}</p>
              </div>
              <div className="relative h-64 w-full overflow-hidden rounded-2xl border border-white/10 shadow-inner md:h-[450px]">
                <Image src={selectedProject.image} alt={selectedProject.title} fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      )}

      <section id="organisasi" className="relative z-10 border-t border-white/5 bg-[#050505] px-6 py-24 scroll-mt-20">
        <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.18),transparent_40%)] pointer-events-none" />
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.3em] text-red-300">Organisasi</div>
            <h2 className="mt-5 text-4xl font-bold text-white md:text-5xl">Pengalaman organisasi yang terasa lebih terarah dan profesional.</h2>
            <p className="mt-4 text-lg leading-relaxed text-zinc-400">Setiap peran menunjukkan cara saya memimpin, memantau proses, dan menjaga tim beroperasi dengan rapi.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {organizations.slice(0, 4).map((item, idx) => (
              <div key={idx} className={`group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#111118]/90 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1 hover:border-red-500/30 ${item.isHighlighted ? 'border-red-600/50 shadow-[0_25px_90px_rgba(220,38,38,0.16)]' : ''}`}>
                <div className={`absolute left-0 top-0 h-full w-1.5 ${item.color}`}></div>
                <div className="relative z-10 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    {item.badge ? <span className="rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-[11px] font-semibold text-red-300">{item.badge}</span> : null}
                  </div>
                  <p className="text-sm font-semibold text-red-400">{item.org} • {item.year}</p>
                  <p className="text-sm leading-relaxed text-zinc-400">{item.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.25em] text-zinc-500">
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Kepemimpinan</span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Organisasi</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link href="/organisasi" className="rounded-full border border-red-500/30 bg-red-500/10 px-6 py-3 text-sm font-semibold text-red-300 transition hover:bg-red-500/20">
              Lihat semua pengalaman →
            </Link>
          </div>
        </div>
      </section>

      <section id="sertifikat" className="relative z-10 border-t border-white/5 bg-[#0a0a0c] px-6 py-24 scroll-mt-20">
        <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.16),transparent_40%)] pointer-events-none" />
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-emerald-300">Sertifikat</div>
            <h2 className="mt-5 text-4xl font-bold text-white md:text-5xl">Sertifikat profesional dengan tampilan yang lebih tajam.</h2>
            <p className="mt-4 text-lg leading-relaxed text-zinc-400">Dokumen resmi yang mendukung kemampuan teknis saya dengan gaya yang modern dan elegan.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {certificates.map((cert) => (
              <button 
                key={cert.id}
                type="button"
                onClick={() => setSelectedCert(cert)}
                className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0d0d12]/90 p-5 text-left shadow-[0_25px_80px_rgba(0,0,0,0.24)] transition duration-300 hover:-translate-y-1 hover:border-emerald-400/30"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.12),transparent_65%)] opacity-0 transition group-hover:opacity-100" />
                <div className="flex items-center gap-4">
                  <div className="relative h-24 w-24 overflow-hidden rounded-3xl border border-white/10 bg-zinc-900">
                    <Image 
                      src={cert.image} 
                      alt={cert.title} 
                      fill 
                      className="object-cover" 
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-[2px] text-emerald-400">Verified credential</span>
                    <h3 className="mt-3 text-xl font-semibold text-white">{cert.title}</h3>
                    <p className="mt-1 text-sm text-zinc-400">{cert.org} • {cert.date}</p>
                  </div>
                </div>
                <div className="mt-6 rounded-[24px] border border-white/10 bg-white/5 p-4 text-sm leading-relaxed text-zinc-300">
                  Sertifikat ini menunjukkan bahwa saya terus menambah kompetensi dan mengadopsi standar profesional terbaru.
                </div>
              </button>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link href="/sertifikat" className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-6 py-3 text-sm font-semibold text-emerald-300 transition hover:bg-emerald-500/20">
              Lihat semua sertifikat →
            </Link>
          </div>
        </div>
      </section>

      {selectedCert && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 md:p-8 transition-opacity duration-300" onClick={() => setSelectedCert(null)}>
          <div className="w-full max-w-5xl overflow-hidden rounded-[32px] border border-white/10 bg-[#0f0f11] shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between border-b border-white/5 bg-[#121214] p-6 md:p-8">
              <h3 className="pr-8 text-2xl font-bold text-white tracking-tight md:text-3xl">{selectedCert.title}</h3>
              <button onClick={() => setSelectedCert(null)} className="rounded-full bg-white/5 p-3 text-gray-400 transition-all hover:bg-red-600 hover:text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div className="max-h-[75vh] overflow-y-auto p-6 md:p-8">
              <div className="mb-8 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-zinc-300">
                  {selectedCert.org}
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-zinc-400">
                  {selectedCert.date}
                </span>
              </div>
              <div className="mb-8 rounded-2xl border border-white/5 bg-white/5 p-6">
                <h4 className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-red-500">Informasi Sertifikat</h4>
                <p className="text-base leading-relaxed text-zinc-300 md:text-xl">
                  Sertifikasi kompetensi profesional berstandar tinggi yang memvalidasi keahlian dan pengetahuan dalam domain spesifik. Terbit pada tahun {selectedCert.date} oleh {selectedCert.org}.
                </p>
              </div>
              <div className="relative h-64 w-full overflow-hidden rounded-2xl border-2 border-white/10 bg-zinc-900 shadow-inner md:h-[500px]">
                <Image src={selectedCert.image} alt={selectedCert.title} fill className="object-contain" />
              </div>
            </div>
          </div>
        </div>
      )}

      <footer id="contact" className="relative z-10 border-t border-white/5 bg-[#050505] py-20 text-center">
        <h2 className="mb-8 text-3xl font-bold text-zinc-200">Mari berkolaborasi dan membuat sesuatu yang berarti.</h2>
        <div className="mb-10 flex flex-wrap justify-center gap-6 px-6 text-sm font-medium">
          <a href="mailto:ghabrielsagala@gmail.com" className="text-zinc-400 transition-colors hover:text-green-500">ghabrielsagala@gmail.com</a>
          <a href="https://instagram.com/ghabrielsagala" target="_blank" className="text-zinc-400 transition-colors hover:text-pink-500">Instagram</a>
          <a href="https://www.linkedin.com/in/ghabriel-sagala-93bba027b" target="_blank" className="text-zinc-400 transition-colors hover:text-blue-500">LinkedIn</a>
        </div>
        <p className="text-sm text-zinc-600">© {new Date().getFullYear()} Ghabriel Theo Petra Sagala. Dibuat dengan desain modern dan pengalaman yang lebih personal.</p>
      </footer>
    </main>
  );
}