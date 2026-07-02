import Header from "../components/Header";
import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { projects } from "../content";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function PortfolioPage() {
  return (
    <main className={`${poppins.className} min-h-screen bg-[#050505] text-white`}>
      <Header />

      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-16">
        <div className="mb-16 rounded-[32px] border border-white/10 bg-[#0b0b11]/90 p-8 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full bg-red-500/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-red-300">Portofolio</span>
            <h1 className="text-4xl font-bold md:text-5xl">Kumpulan karya modern yang merepresentasikan saya sebagai anak IT.</h1>
            <p className="max-w-2xl text-base leading-relaxed text-zinc-400">Solusi digital ini dirancang dengan struktur teknis yang rapih, performa stabil, dan tampilan profesional.</p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.id} className="overflow-hidden rounded-[32px] border border-white/10 bg-[#0d0d12]/90 shadow-[0_25px_80px_rgba(0,0,0,0.22)] transition hover:-translate-y-1 hover:border-red-500/30">
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full bg-red-500/15 px-3 py-1 text-xs uppercase tracking-[0.2em] text-red-300">
                  {project.category}
                </div>
              </div>

              <div className="p-8">
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-zinc-400">{project.shortDesc}</p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-red-500/20 bg-red-500/10 px-3 py-2 text-xs uppercase tracking-[0.24em] text-red-300">
                    {project.status}
                  </span>
                  <span className="text-sm text-zinc-500">Didesain untuk performa dan pengalaman.</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-sm leading-relaxed text-zinc-400">Semua karya ini disusun untuk menunjukkan kualitas teknis dan estetika yang saya bawa ke tiap proyek.</p>
          <Link href="/" className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
            ← Kembali ke beranda
          </Link>
        </div>
      </div>
    </main>
  );
}
