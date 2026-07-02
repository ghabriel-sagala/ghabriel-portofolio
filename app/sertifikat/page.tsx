import Header from "../components/Header";
import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { certificates } from "../content";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"]
});

export default function SertifikatPage() {
  return (
    <main className={`${poppins.className} min-h-screen bg-[#050505] text-white`}>
      <Header />

      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-16">
        <div className="mb-16 rounded-[32px] border border-white/10 bg-[#0b0b11]/90 p-8 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-emerald-300">Sertifikat</span>
            <h1 className="text-4xl font-bold md:text-5xl">Sertifikat modern yang mendukung profesionalisme saya.</h1>
            <p className="max-w-2xl text-base leading-relaxed text-zinc-400">Dokumen sertifikasi yang mendukung perkembangan teknis saya dengan visual yang lebih tegas dan rapi.</p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {certificates.map((cert) => (
            <article key={cert.id} className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0d0d12]/90 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.24)] transition duration-300 hover:-translate-y-1 hover:border-emerald-400/30">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.08),transparent_65%)] opacity-0 transition group-hover:opacity-100" />
              <div className="relative z-10 flex flex-col gap-6">
                <div className="grid gap-4 md:grid-cols-[auto_1fr] md:items-center">
                  <div className="relative h-24 w-24 overflow-hidden rounded-3xl border border-white/10 bg-zinc-900">
                    <Image src={cert.image} alt={cert.title} fill className="object-cover" />
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-[2px] text-emerald-400">Verified credential</span>
                    <h2 className="mt-3 text-xl font-semibold text-white">{cert.title}</h2>
                    <p className="mt-1 text-sm text-zinc-400">{cert.org} • {cert.date}</p>
                  </div>
                </div>
                <div className="rounded-[24px] border border-white/10 bg-white/5 p-4 text-sm leading-relaxed text-zinc-300">
                  Sertifikat ini menunjukkan bahwa saya terus memperkuat kompetensi teknis dan profesional saya.
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-sm leading-relaxed text-zinc-400">Dokumen resmi ini memperkuat narasi saya sebagai developer IT yang belajar cepat dan professional.</p>
          <Link href="/" className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">← Kembali ke beranda</Link>
        </div>
      </div>
    </main>
  );
}
