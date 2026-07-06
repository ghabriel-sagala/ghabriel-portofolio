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
    <main className={`${poppins.className} relative min-h-screen bg-transparent text-[var(--fg)]`}>
      <Header />
      <div className="pointer-events-none absolute inset-0 bg-[var(--bg-gradient)] opacity-90" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-16">
        <div className="mb-16 rounded-[32px] border border-[var(--border)] bg-[var(--card)]/90 p-8 shadow-[0_30px_100px_rgba(0,0,0,0.25)] backdrop-blur-xl">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full bg-[var(--accent)]/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-[var(--accent)]">Organization</span>
            <h1 className="text-4xl font-bold md:text-5xl">Organizational experience with modern strength.</h1>
            <p className="max-w-2xl text-base leading-relaxed text-[var(--muted)]">A summary of leadership, coordination, and event management experience that supports my professional growth.</p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {organizations.map((item, index) => (
            <article key={`${item.org}-${index}`} className={`relative overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--card)]/90 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.22)] transition-transform duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/30 ${item.isHighlighted ? 'border-[var(--accent)]/50 shadow-[0_25px_80px_rgba(220,38,38,0.18)]' : ''}`}>
              <div className={`absolute left-0 top-0 h-full w-1.5 ${item.color}`}></div>
              <div className="relative z-10 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h2 className="text-xl font-semibold text-[var(--fg)]">{item.title}</h2>
                  {item.badge ? <span className="rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-3 py-1 text-xs font-semibold text-[var(--accent)]">{item.badge}</span> : null}
                </div>
                <p className="text-sm font-semibold text-[var(--accent)]">{item.org} • {item.year}</p>
                <p className="text-sm leading-relaxed text-[var(--muted)]">{item.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.25em] text-[var(--muted)]">
                  <span className="rounded-full border border-[var(--border)] bg-[var(--glass)]/70 px-3 py-1">Leadership</span>
                  <span className="rounded-full border border-[var(--border)] bg-[var(--glass)]/70 px-3 py-1">Organization</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-sm leading-relaxed text-[var(--muted)]">This role shows my ability to bridge strategy, process, and strong team execution.</p>
          <Link href="/" className="rounded-full border border-[var(--border)] bg-[var(--glass)] px-6 py-3 text-sm font-semibold text-[var(--fg)] transition hover:bg-[var(--glass)]/80">← Back to home</Link>
        </div>
      </div>
    </main>
  );
}
