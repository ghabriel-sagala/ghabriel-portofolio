"use client";

import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Landing() {
  return (
    <main className={`${inter.className} min-h-screen flex items-center justify-center bg-[radial-gradient(circle_at_top_left,rgba(124,92,255,0.08),transparent_20%),radial-gradient(circle_at_bottom_right,rgba(0,255,209,0.06),transparent_18%),linear-gradient(180deg,var(--bg),#02040a)]`}>
      <div className="max-w-3xl w-full px-6 py-24 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[var(--fg)]">Halo — Saya Ghabriel</h1>
        <p className="mt-6 text-lg text-[var(--muted)]">Selamat datang di website saya. Klik tombol di bawah untuk masuk ke halaman utama.</p>
        <div className="mt-10">
          <Link href="/home" className="it-btn inline-block px-8 py-3 text-base">Masuk Website</Link>
        </div>
      </div>
    </main>
  );
}
        <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.18),transparent_40%)] pointer-events-none" />
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.3em] text-red-300">Organisasi</div>
            <h2 className="mt-5 text-4xl font-bold text-white md:text-5xl">Pengalaman organisasi yang terasa lebih terarah dan profesional.</h2>
            <p className="mt-4 text-lg leading-relaxed text-zinc-400">Setiap peran menunjukkan cara saya memimpin, memantau proses, dan menjaga tim beroperasi dengan rapi.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {organizations.slice(0, 4).map((item, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedOrg(item)}
                role="button"
                tabIndex={0}
                className={`group relative cursor-pointer overflow-hidden rounded-[28px] border border-white/10 bg-[#111118]/90 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1 hover:border-red-500/30 ${item.isHighlighted ? 'border-red-600/50 shadow-[0_25px_90px_rgba(220,38,38,0.16)]' : ''}`}
              >
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