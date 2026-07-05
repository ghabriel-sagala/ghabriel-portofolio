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
