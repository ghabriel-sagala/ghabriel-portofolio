"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      id: 1,
      title: "Website Wisata Kampoeng Kadjoetangan Heritage",
      shortDesc: "Website profil wisata berbasis framework Laravel.",
      image: "/websitewisata.jpg",
      tech: ["Laravel", "PHP", "Tailwind CSS"],
      semester: "Semester 3",
      grade: "Nilai A",
      fullDesc: "Website dashboard untuk Kampoeng Kadjoetangan Heritage yang dikerjakan secara berkolaborasi. Mengedepankan kerja sama tim dalam menyajikan UI/UX yang menarik serta pengelolaan data wisata yang informatif."
    },
    {
      id: 2,
      title: "Website Tabungan Mahasiswa",
      shortDesc: "Sistem pencatatan tabungan mahasiswa (Native PHP).",
      image: "/websitetabunganmahasiswa.png",
      tech: ["Native PHP", "HTML", "CSS", "JS"],
      semester: "Semester 2",
      grade: "Nilai A",
      fullDesc: "Sistem pencatatan tabungan mahasiswa yang dibangun menggunakan teknologi Native. Gabungan penugasan dari 3 mata kuliah sekaligus pada Semester 2."
    },
    {
      id: 3,
      title: "Dashboard Monitoring IoT",
      shortDesc: "Antarmuka pemantauan data IoT real-time.",
      image: "/dashboardmonitoringIoT.png",
      tech: ["Next.js", "IoT", "Realtime"],
      semester: "Semester 4",
      grade: "On-Going",
      fullDesc: "Website dashboard interaktif untuk memonitoring data dari perangkat IoT secara efisien. Masih dalam tahap pengembangan (on-going)."
    }
  ];

  return (
    <main className={`${poppins.className} relative min-h-screen bg-[#050505] text-zinc-300 selection:bg-red-900 selection:text-white`}>
      
      {/* BACKGROUND IMAGE (Full Page Blend) */}
      <div className="fixed inset-0 z-0 h-full w-full pointer-events-none">
        <Image
          src="/profile.jpg"
          alt="Background"
          fill
          className="object-cover object-top opacity-[0.15] mix-blend-luminosity scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-red-950/20 to-[#050505]"></div>
      </div>

      {/* NAVBAR (Menu di Tengah) */}
      <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/5">
        <div className="relative max-w-7xl mx-auto px-6 py-5 flex md:justify-center justify-between items-center">
          <Link href="/" className="md:absolute md:left-6 font-extrabold text-2xl tracking-tighter text-white">
            GHABRIEL<span className="text-red-600">.</span>
          </Link>
          <div className="hidden md:flex justify-center space-x-10 text-sm font-medium">
            <a href="#hero" className="hover:text-red-500 transition-colors">Home</a>
            <a href="#karya" className="hover:text-red-500 transition-colors">Karya</a>
            <a href="#organisasi" className="hover:text-red-500 transition-colors">Organisasi</a>
            <a href="#sertifikat" className="hover:text-red-500 transition-colors">Sertifikat</a>
          </div>
        </div>
      </nav>

      {/* 1. HERO SECTION (Ukuran Font Teks Disesuaikan Agar Proporsional & Selaras) */}
      <section id="hero" className="relative z-10 w-full min-h-screen flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr] items-center gap-12 md:gap-16">
            
            {/* Sisi Kiri: Informasi Perkenalan Utama */}
            <div className="flex flex-col space-y-6 max-w-4xl">
              
              {/* Nama (Ukuran diselaraskan menjadi maksimal 6xl agar tidak terlalu dominan) */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
                Ghabriel Theo Petra Sagala
              </h1>

              {/* Chips / Tag Pendidikan */}
              <div className="flex flex-wrap items-center gap-4">
                <span className="bg-zinc-900/80 border border-zinc-800 hover:border-red-600 transition-all cursor-default px-5 py-2 rounded-lg text-sm font-medium text-zinc-300">
                  Mahasiswa D3 Teknologi Informasi
                </span>
                <span className="bg-zinc-900/80 border border-zinc-800 hover:border-red-600 transition-all cursor-default px-5 py-2 rounded-lg text-sm font-medium text-zinc-300">
                  Universitas Brawijaya
                </span>
              </div>

              {/* Headline (Ukuran diselaraskan menjadi maksimal 6xl dan jarak baris disesuaikan) */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight pt-2">
                Fullstack Web Developer <br /> & Tech Enthusiast.
              </h2>

              {/* Deskripsi */}
              <p className="text-zinc-400 text-lg md:text-xl max-w-3xl leading-relaxed pt-2">
                Memiliki dedikasi tinggi dalam mengeksplorasi teknologi web mulai dari Native hingga Framework Laravel. Tidak hanya berfokus pada baris kode yang rapi dan fungsional, tetapi juga aktif membangun relasi dan memimpin tim melalui berbagai pengalaman organisasi kampus.
              </p>

              {/* Kontak & Sosmed Bar */}
              <div className="flex flex-wrap items-center gap-6 pt-6">
                <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-md border border-white/5 text-sm hover:bg-white/10 transition cursor-pointer text-zinc-300">
                  📞 0822 1836 1690
                </div>
                <Link href="https://instagram.com/ghabrielsagala" target="_blank" className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-md border border-white/5 text-sm hover:text-pink-400 transition text-zinc-300">
                  📸 @ghabrielsagala
                </Link>
                <Link href="https://www.linkedin.com/in/ghabriel-sagala-93bba027b" target="_blank" className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-md border border-white/5 text-sm hover:text-blue-400 transition text-zinc-300">
                  in Ghabriel Theo
                </Link>
              </div>
            </div>

            {/* Sisi Kanan: Blok Informasi Interaktif Terbuka */}
            <div className="flex flex-col gap-6 md:items-end w-full md:w-auto">
              {/* Card IPK Terbuka dengan Efek Hover Glow Merah-Hijau */}
              <div className="group relative w-fit md:w-auto">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-800 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-500"></div>
                <span className="relative bg-black border-2 border-red-900/50 text-green-400 group-hover:text-green-300 group-hover:border-green-400 group-hover:bg-green-950/30 transition-all duration-300 text-base md:text-lg lg:text-xl font-bold px-10 py-4 rounded-full inline-block group-hover:scale-105 shadow-[0_0_25px_rgba(220,38,38,0.3)]">
                  IPK: 3.83
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. KARYA & PROYEK */}
      <section id="karya" className="relative z-10 py-32 px-6 bg-black/40 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Karya & Proyek<span className="text-red-600">.</span></h2>
          <p className="text-zinc-500 mb-16 max-w-2xl text-lg">Beberapa proyek web development dan UI/UX yang telah saya kerjakan selama masa perkuliahan.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((p) => (
              <div key={p.id} onClick={() => setSelectedProject(p)} className="group cursor-pointer">
                <div className="relative h-64 w-full rounded-2xl overflow-hidden border border-zinc-800 transition-all group-hover:border-red-600 shadow-2xl">
                  <Image src={p.image} alt={p.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="mt-6 space-y-2">
                  <h3 className="text-2xl font-bold text-white group-hover:text-red-500 transition-colors">{p.title}</h3>
                  <p className="text-zinc-500">{p.shortDesc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL DETAIL KARYA */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-xl p-4 transition-all" onClick={() => setSelectedProject(null)}>
          <div className="bg-[#0d0d0f] border border-zinc-800 w-full max-w-3xl rounded-3xl overflow-hidden animate-in zoom-in-95" onClick={e => e.stopPropagation()}>
            <div className="p-8 space-y-6">
              <div className="flex justify-between items-start">
                <h3 className="text-3xl font-bold text-white">{selectedProject.title}</h3>
                <button onClick={() => setSelectedProject(null)} className="text-zinc-400 hover:text-white bg-white/5 p-2 rounded-full">✕</button>
              </div>
              <div className="flex gap-2">
                {selectedProject.tech.map((t: any) => <span key={t} className="text-xs bg-zinc-800 px-3 py-1 rounded text-zinc-400 border border-zinc-700">{t}</span>)}
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                <p className="text-red-500 text-xs font-bold uppercase tracking-widest mb-2">Ringkasan Project</p>
                <p className="text-zinc-300 leading-relaxed">{selectedProject.fullDesc}</p>
              </div>
              <div className="relative h-64 w-full rounded-xl overflow-hidden border border-zinc-800">
                <Image src={selectedProject.image} alt="Detail" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. PENGALAMAN ORGANISASI */}
      <section id="organisasi" className="relative z-10 py-32 px-6 border-t border-white/5 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Pengalaman Organisasi<span className="text-red-600">.</span></h2>
          <p className="text-zinc-500 mb-16 text-lg">Rekam jejak kepemimpinan dan kepanitiaan selama di Universitas Brawijaya.</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-[#0a0a0c] p-10 rounded-3xl border border-zinc-800 hover:border-red-600 transition-all shadow-xl">
              <h3 className="text-3xl font-bold text-white mb-2 leading-tight">Ketua Komisi Pengawas & Standarisasi</h3>
              <p className="text-red-600 font-bold mb-6">HMPSTI Universitas Brawijaya Kabinet INNOVARA • 2026</p>
              <p className="text-zinc-400 leading-relaxed">Bertanggung jawab penuh dalam pengawasan dan standarisasi kinerja himpunan mahasiswa untuk memastikan setiap program kerja sejalan dengan visi dan tujuan organisasi.</p>
            </div>

            <div className="bg-[#0a0a0c] p-10 rounded-3xl border-2 border-yellow-600/30 hover:border-yellow-600 transition-all shadow-xl relative overflow-hidden">
               <div className="flex justify-between items-start mb-2">
                 <h3 className="text-3xl font-bold text-white leading-tight">Staff Magang PSDM</h3>
                 <span className="bg-yellow-600 text-black text-[10px] font-black px-3 py-1 rounded-full flex items-center gap-1">⭐ Best Internship</span>
               </div>
              <p className="text-yellow-600 font-bold mb-6">BEM Fakultas Vokasi UB • 2024</p>
              <p className="text-zinc-400 leading-relaxed">Aktif dalam program pengembangan sumber daya mahasiswa dan dinobatkan sebagai Best Internship Staff atas dedikasi serta kinerja yang maksimal selama magang.</p>
            </div>

            <div className="bg-[#0a0a0c] p-10 rounded-3xl border border-zinc-800 hover:border-red-600 transition-all">
              <h3 className="text-3xl font-bold text-white mb-2 leading-tight text-zinc-300">Ketua Divisi Acara</h3>
              <p className="text-red-600 font-bold mb-6">PKKMB, Krida Mahasiswa, Open House Vokasi UB • 2025</p>
              <p className="text-zinc-400 leading-relaxed">Memimpin penyusunan konsep dan eksekusi rangkaian acara penyambutan mahasiswa baru yang melibatkan persiapan intensif selama 3 bulan.</p>
            </div>

            <div className="bg-[#0a0a0c] p-10 rounded-3xl border border-zinc-800 hover:border-red-600 transition-all">
              <h3 className="text-3xl font-bold text-zinc-300 mb-2 leading-tight">Wakil Ketua Divisi Acara</h3>
              <p className="text-red-600 font-bold mb-6">Program Abdi Desa • 2025</p>
              <p className="text-zinc-400 leading-relaxed">Membantu pengelolaan susunan acara untuk kegiatan pengabdian kepada masyarakat dengan masa pengerjaan 1 bulan.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERTIFIKASI */}
      <section id="sertifikat" className="relative z-10 py-32 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Sertifikasi & Penghargaan<span className="text-red-600">.</span></h2>
          <p className="text-zinc-500 mb-16 text-lg">Validasi keahlian melalui sertifikasi dari perusahaan teknologi terkemuka.</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-[#0d0d0f] flex flex-col md:flex-row gap-8 p-8 rounded-3xl border border-zinc-800 group transition-all">
              <div className="relative h-48 w-full md:w-56 flex-shrink-0 rounded-xl overflow-hidden border border-zinc-800">
                <Image src="/sertifikatmicrosoft.jpeg" alt="MS" fill className="object-cover group-hover:scale-110 transition-transform" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-green-500 text-[10px] font-bold uppercase tracking-[2px] mb-2">Verified Credentials</span>
                <h3 className="text-2xl font-bold text-white mb-1">Microsoft Office Desktop Application</h3>
                <p className="text-yellow-500 text-sm font-medium mb-4">Trust Training Partners (Microsoft Partner)</p>
                <p className="text-zinc-500 text-sm leading-relaxed italic">Sertifikasi kompetensi profesional berstandar tinggi (Terbit: 22 Agustus 2024).</p>
              </div>
            </div>

            <div className="bg-[#0d0d0f] flex flex-col md:flex-row gap-8 p-8 rounded-3xl border border-zinc-800 group transition-all">
              <div className="relative h-48 w-full md:w-56 flex-shrink-0 rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900">
                <Image src="/sertifikatgemini.png" alt="Gemini" fill className="object-cover group-hover:scale-110 transition-transform" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-blue-500 text-[10px] font-bold uppercase tracking-[2px] mb-2">AI Program</span>
                <h3 className="text-2xl font-bold text-white mb-1">Program Pelatihan Google Gemini</h3>
                <p className="text-blue-400 text-sm font-medium mb-4">Diselenggarakan oleh Google (Gemini)</p>
                <p className="text-zinc-500 text-sm leading-relaxed italic">Pelatihan khusus AI Generative untuk membekali mahasiswa dengan teknologi terbaru.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 py-16 bg-black text-center border-t border-white/5">
        <p className="text-zinc-600 text-sm">© {new Date().getFullYear()} Ghabriel Theo Petra Sagala • Vokasi Universitas Brawijaya</p>
      </footer>
    </main>
  );
}