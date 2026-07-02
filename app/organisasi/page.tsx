import Header from "../components/Header";
import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { organizations } from "../content";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"]
});

export default function OrganisasiPage() {
  return (
    <main className={`${poppins.className} min-h-screen bg-[#050505] text-white`}>
      <Header />

      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-16">
        <div className="mb-16 rounded-[32px] border border-white/10 bg-[#0b0b11]/90 p-8 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full bg-red-500/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-red-300">Organisasi</span>
            <h1 className="text-4xl font-bold md:text-5xl">Pengalaman organisasi yang terasa modern dan kuat.</h1>
            <p className="max-w-2xl text-base leading-relaxed text-zinc-400">Rangkuman pengalaman dalam pengawasan, kepemimpinan, dan manajemen acara yang mendukung profesionalitas saya.</p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {organizations.map((item, index) => (
            <article key={`${item.org}-${index}`} className={`relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0e0e14]/90 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:-translate-y-1 hover:border-red-500/30 ${item.isHighlighted ? 'border-red-600/50 shadow-[0_25px_80px_rgba(220,38,38,0.18)]' : ''}`}>
              <div className={`absolute left-0 top-0 h-full w-1.5 ${item.color}`}></div>
              <div className="relative z-10 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h2 className="text-xl font-semibold text-white">{item.title}</h2>
                  {item.badge ? <span className="rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-300">{item.badge}</span> : null}
                </div>
                <p className="text-sm font-semibold text-red-400">{item.org} • {item.year}</p>
                <p className="text-sm leading-relaxed text-zinc-400">{item.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.25em] text-zinc-500">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Kepemimpinan</span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Organisasi</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-sm leading-relaxed text-zinc-400">Peran ini menunjukkan kemampuan saya dalam menjembatani strategi, proses, dan eksekusi tim yang solid.</p>
          <Link href="/" className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">← Kembali ke beranda</Link>
        </div>
      </div>
    </main>
  );
}
