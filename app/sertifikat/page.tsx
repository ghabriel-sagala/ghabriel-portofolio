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
    <main className={`${poppins.className} relative min-h-screen bg-transparent text-[var(--fg)]`}>
      <Header />
      <div className="pointer-events-none absolute inset-0 bg-[var(--bg-gradient)] opacity-90" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-16">
        <div className="mb-16 rounded-[32px] border border-[var(--border)] bg-[var(--card)]/90 p-8 shadow-[0_30px_100px_rgba(0,0,0,0.25)] backdrop-blur-xl">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full bg-[var(--accent)]/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-[var(--accent)]">Sertifikat</span>
            <h1 className="text-4xl font-bold md:text-5xl">Sertifikat modern yang mendukung profesionalisme saya.</h1>
            <p className="max-w-2xl text-base leading-relaxed text-[var(--muted)]">Dokumen sertifikat yang mendukung perkembangan teknis saya dengan presentasi yang jelas dan profesional.</p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {certificates.map((cert) => (
            <article key={cert.id} className="group relative overflow-hidden rounded-[32px] border border-[var(--border)] bg-[var(--card)]/90 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.20)] transition duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/30">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(239,68,68,0.10),transparent_65%)] opacity-0 transition group-hover:opacity-100" />
              <div className="relative z-10 flex flex-col gap-6">
                <div className="grid gap-4 md:grid-cols-[auto_1fr] md:items-center">
                  <div className="relative h-24 w-24 overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--bg)]">
                    <Image src={cert.image} alt={cert.title} fill className="object-cover" />
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-[2px] text-[var(--accent)]">Kredensial terverifikasi</span>
                    <h2 className="mt-3 text-xl font-semibold text-[var(--fg)]">{cert.title}</h2>
                    <p className="mt-1 text-sm text-[var(--muted)]">{cert.org} • {cert.date}</p>
                  </div>
                </div>
                <div className="rounded-[24px] border border-[var(--border)] bg-[var(--glass)] p-4 text-sm leading-relaxed text-[var(--muted)]">
                  <p>{cert.description}</p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <a href={cert.pdf} target="_blank" rel="noreferrer" className="rounded-full border border-[var(--accent)]/20 bg-[var(--accent)]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)] transition hover:bg-[var(--accent)]/20">
                      Lihat dokumen
                    </a>
                    <a href={cert.pdf} download className="rounded-full border border-[var(--border)] bg-[var(--glass)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--fg)] transition hover:bg-[var(--glass)]/80">
                      Unduh PDF
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-sm leading-relaxed text-[var(--muted)]">Dokumen resmi ini memperkuat perjalanan saya sebagai pengembang IT yang cepat belajar dan profesional.</p>
          <Link href="/" className="rounded-full border border-[var(--border)] bg-[var(--glass)] px-6 py-3 text-sm font-semibold text-[var(--fg)] transition hover:bg-[var(--glass)]/80">← Kembali ke beranda</Link>
        </div>
      </div>
    </main>
  );
}
