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
  const [selectedCert, setSelectedCert] = useState<any>(null); // State baru untuk pop-up sertifikat
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const certificates = [
    {
      id: 1,
      title: "Microsoft Office Desktop Application",
      org: "Microsoft Partner",
      date: "22 Agustus 2024",
      // Sesuaikan nama file gambar sertifikatmu di folder public
      image: "/sertifikat-microsoft.jpg" 
    },
    {
      id: 2,
      title: "Sertifikat Pelatihan Gemini AI",
      org: "Google Gemini",
      date: "2024",
      // Sesuaikan nama file gambar sertifikatmu di folder public
      image: "/sertifikat-gemini.png" 
    }
  ];

  return (
    <main className={`${poppins.className} relative min-h-screen bg-[#050505] text-white selection:bg-red-900 selection:text-white overflow-x-hidden`}>
      
      {/* 1. BACKGROUND DENGAN GRADASI MERAH GELAP & HITAM */}
      <div className="fixed inset-0 z-0 h-full w-full pointer-events-none">
        <Image
          src="/profile.jpg"
          alt="Ghabriel Theo Petra Sagala"
          fill
          className="object-cover object-top opacity-40 scale-105 transition-all duration-500"
          priority
        />
        {/* Lapisan Hitam di Kiri, Merah Gelap di Kanan, Hitam di Bawah */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-[#450a0a]/60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/50 to-[#050505]"></div>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#050505]/80 backdrop-blur-lg border-b border-white/5">
        <div className="relative max-w-7xl mx-auto px-6 py-5 flex md:justify-center justify-between items-center">
          <Link href="/" className="md:absolute md:left-6 font-extrabold text-2xl tracking-tighter text-zinc-300">
            GHABRIEL<span className="text-red-600">.</span>
          </Link>
          
          <div className="hidden md:flex justify-center space-x-8 text-sm font-medium text-zinc-400">
            <a href="#hero" className="hover:text-white hover:underline decoration-red-600 underline-offset-8 transition-all">Tentang</a>
            <a href="#karya" className="hover:text-white hover:underline decoration-red-600 underline-offset-8 transition-all">Karya</a>
            <a href="#organisasi" className="hover:text-white hover:underline decoration-red-600 underline-offset-8 transition-all">Organisasi</a>
            <a href="#sertifikat" className="hover:text-white hover:underline decoration-red-600 underline-offset-8 transition-all">Sertifikat</a>
          </div>

          <button 
            className="md:hidden text-zinc-300 hover:text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#0a0a0c]/95 backdrop-blur-xl border-b border-white/5 py-4 px-6 flex flex-col space-y-5 shadow-2xl">
            <a href="#hero" onClick={() => setIsMobileMenuOpen(false)} className="text-zinc-300 hover:text-red-500 font-medium text-base">Tentang</a>
            <a href="#karya" onClick={() => setIsMobileMenuOpen(false)} className="text-zinc-300 hover:text-red-500 font-medium text-base">Karya</a>
            <a href="#organisasi" onClick={() => setIsMobileMenuOpen(false)} className="text-zinc-300 hover:text-red-500 font-medium text-base">Organisasi</a>
            <a href="#sertifikat" onClick={() => setIsMobileMenuOpen(false)} className="text-zinc-300 hover:text-red-500 font-medium text-base">Sertifikat</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative z-10 w-full min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-12 md:py-0">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            
            {/* 2. NAMA LENGKAP DIPERBAIKI */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-4">
              Ghabriel Theo <br /> Petra Sagala
            </h1>
            
            <h2 className="text-xl md:text-3xl font-semibold text-red-500 mb-6">
              Fullstack Web Developer & Tech Enthusiast
            </h2>
            
            {/* 3. BIO LEBIH PROFESIONAL */}
            <p className="text-base md:text-lg text-zinc-300 leading-relaxed mb-8">
              Seorang profesional teknologi yang berdedikasi dengan fokus pada pengembangan web Fullstack dan desain UI/UX. Memiliki rekam jejak kepemimpinan yang teruji melalui berbagai pengalaman organisasi strategis, serta berkomitmen penuh untuk menghadirkan solusi digital yang inovatif melalui kolaborasi tim yang dinamis dan keunggulan teknis.
            </p>

            {/* 4. PENYELARASAN D3, UB, DAN IPK */}
            <div className="flex flex-wrap items-center gap-3 mb-10">
              <span className="bg-white/10 backdrop-blur-md border border-white/10 text-white px-5 py-2 rounded-full text-sm font-medium">
                D3 Teknologi Informasi
              </span>
              <span className="bg-white/10 backdrop-blur-md border border-white/10 text-white px-5 py-2 rounded-full text-sm font-medium">
                Universitas Brawijaya
              </span>
              <span className="bg-green-500/10 border border-green-500/50 text-green-400 px-5 py-2 rounded-full text-sm font-bold shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                IPK: 3.83
              </span>
            </div>

            {/* Area Tombol dan Sosial Media/Kontak */}
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="flex w-full sm:w-auto gap-4">
                <a href="#karya" className="flex-1 sm:flex-none bg-red-700 hover:bg-red-600 text-white px-8 py-3.5 rounded-full font-semibold transition-all shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] text-center">
                  Lihat Karya
                </a>
                <a href="https://wa.me/6282218361690" target="_blank" className="flex-1 sm:flex-none bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-3.5 rounded-full font-semibold transition-all text-center">
                  Hubungi
                </a>
              </div>

              <div className="hidden sm:block w-px h-10 bg-white/20"></div>

              <div className="flex gap-6 w-full sm:w-auto justify-center sm:justify-start">
                <a href="https://instagram.com/ghabrielsagala" target="_blank" className="text-zinc-400 hover:text-pink-500 transition-colors">
                  <span className="text-xl">📸</span>
                </a>
                <a href="https://www.linkedin.com/in/ghabriel-sagala-93bba027b" target="_blank" className="text-zinc-400 hover:text-blue-500 transition-colors">
                  <span className="text-xl">💼</span>
                </a>
                <a href="https://wa.me/6282218361690" target="_blank" className="text-zinc-400 hover:text-green-500 transition-colors">
                  <span className="text-xl">📞</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Karya Section */}
      <section id="karya" className="py-24 px-6 bg-[#0a0a0c]/80 backdrop-blur-sm scroll-mt-10 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Karya & Proyek<span className="text-red-600">.</span></h2>
            <p className="text-zinc-400 max-w-2xl">Beberapa portofolio web development dan UI/UX yang telah saya kerjakan.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id} 
                onClick={() => setSelectedProject(project)}
                className="bg-[#121214] border border-white/5 rounded-2xl overflow-hidden hover:border-red-600/50 transition-all duration-300 group cursor-pointer hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-900/20"
              >
                <div className="relative h-56 bg-zinc-900 overflow-hidden">
                  <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121214] to-transparent opacity-90"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-red-500 transition-colors leading-snug">{project.title}</h3>
                  <p className="text-sm text-zinc-400 mb-6 line-clamp-2">{project.shortDesc}</p>
                  <span className="text-xs bg-red-950/30 text-red-400 border border-red-900/30 px-3 py-1 rounded-full font-semibold">{project.semester}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organisasi Section */}
      <section id="organisasi" className="py-24 px-6 bg-[#050505] scroll-mt-10 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Pengalaman Organisasi<span className="text-red-600">.</span></h2>
            <p className="text-zinc-400 max-w-2xl">Rekam jejak kepemimpinan dan kepanitiaan selama di Universitas Brawijaya.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              { title: "Ketua Komisi Pengawas & Standarisasi", org: "HMPSTI Universitas Brawijaya Kabinet INNOVARA", year: "2026", desc: "Memastikan program kerja sejalan dengan visi organisasi.", color: "bg-red-700" },
              { title: "Staff Magang PSDM", org: "BEM Fakultas Vokasi Universitas Brawijaya", year: "2024", desc: "Meraih penghargaan Best Internship Staff atas kinerja luar biasa.", color: "bg-yellow-600", badge: "⭐ Best Internship" },
              { title: "Ketua Divisi Acara PKKMB", org: "Krida Mahasiswa Fakultas Vokasi UB", year: "2025", desc: "Memimpin konsep dan eksekusi acara penyambutan.", color: "bg-red-700" },
              { title: "Wakil Ketua Divisi Acara", org: "Program Abdi Desa UB", year: "2025", desc: "Koordinasi acara pengabdian masyarakat.", color: "bg-red-700" },
            ].map((item, idx) => (
              <div key={idx} className="relative bg-white/5 p-8 rounded-2xl border border-white/5 hover:border-red-500/30 transition-all overflow-hidden group">
                <div className={`absolute top-0 left-0 w-1.5 h-full ${item.color} opacity-80`}></div>
                <div className="flex justify-between items-start gap-4 mb-2">
                  <h3 className="text-xl font-bold text-zinc-100 group-hover:text-red-400 transition-colors">{item.title}</h3>
                  {item.badge && <span className="bg-yellow-500/10 text-yellow-500 text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">{item.badge}</span>}
                </div>
                <p className="text-sm text-red-500 font-medium mb-3">{item.org} • {item.year}</p>
                <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SERTIFIKAT SECTION (DENGAN GAMBAR BISA DIKLIK) */}
      <section id="sertifikat" className="py-24 px-6 bg-[#0a0a0c]/80 backdrop-blur-sm scroll-mt-10 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Sertifikasi & Penghargaan<span className="text-red-600">.</span></h2>
            <p className="text-zinc-400 max-w-2xl">Validasi keahlian melalui sertifikasi dari perusahaan teknologi terkemuka. Klik untuk melihat detail sertifikat.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certificates.map((cert) => (
              <div 
                key={cert.id} 
                onClick={() => setSelectedCert(cert)}
                className="flex flex-col sm:flex-row gap-5 bg-[#121214] p-5 rounded-2xl border border-white/10 hover:border-red-600 transition-all cursor-pointer group"
              >
                {/* Thumbnail Gambar Sertifikat */}
                <div className="relative w-full sm:w-40 h-32 bg-zinc-800 rounded-lg overflow-hidden shrink-0 border border-white/5 group-hover:border-red-500/50">
                  {/* Gunakan gambar placeholder jika gambar asli belum diatur */}
                  <Image 
                    src={cert.image} 
                    alt={cert.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                    onError={(e: any) => { e.currentTarget.src = "https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&q=80&w=300" }}
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors flex items-center justify-center">
                    <span className="bg-black/70 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Perbesar</span>
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="font-bold text-lg text-zinc-200 group-hover:text-red-400 mb-1">{cert.title}</h3>
                  <p className="text-sm text-red-500 font-medium mb-1">{cert.org}</p>
                  <p className="text-xs text-zinc-500">{cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal / Pop-up Karya */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-8" onClick={() => setSelectedProject(null)}>
          <div className="bg-[#0f0f11] border border-white/10 w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in-95" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center p-6 border-b border-white/5">
              <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
              <button onClick={() => setSelectedProject(null)} className="text-gray-400 hover:text-white bg-white/5 hover:bg-red-600 p-2 rounded-full transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>
            <div className="p-6 md:p-8 overflow-y-auto max-h-[75vh]">
              <div className="flex gap-2 mb-6 flex-wrap">
                {selectedProject.tech.map((t: string) => <span key={t} className="bg-white/5 text-sm px-4 py-1 rounded-full text-gray-300 border border-white/10">{t}</span>)}
              </div>
              <p className="text-zinc-300 text-base leading-relaxed mb-8">{selectedProject.fullDesc}</p>
              <div className="relative h-64 md:h-[400px] w-full rounded-xl overflow-hidden border border-white/10">
                <Image src={selectedProject.image} alt={selectedProject.title} fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal / Pop-up Sertifikat (Baru) */}
      {selectedCert && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4" onClick={() => setSelectedCert(null)}>
          <div className="relative w-full max-w-5xl rounded-lg overflow-hidden animate-in fade-in zoom-in-95" onClick={(e) => e.stopPropagation()}>
            {/* Tombol Tutup */}
            <button onClick={() => setSelectedCert(null)} className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-red-600 text-white p-2 rounded-full backdrop-blur-sm transition-all border border-white/20">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            
            <div className="bg-[#121214] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
              <div className="relative w-full h-[60vh] md:h-[80vh]">
                <Image 
                  src={selectedCert.image} 
                  alt={selectedCert.title} 
                  fill 
                  className="object-contain bg-zinc-900/50" 
                  onError={(e: any) => { e.currentTarget.src = "https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&q=80&w=1200" }}
                />
              </div>
              <div className="p-6 bg-gradient-to-t from-black to-[#121214] border-t border-white/5">
                <h3 className="text-2xl font-bold text-white mb-1">{selectedCert.title}</h3>
                <p className="text-red-400 font-medium">{selectedCert.org} • <span className="text-zinc-500">{selectedCert.date}</span></p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer id="contact" className="py-12 bg-[#050505] border-t border-white/5 text-center relative z-10">
        <p className="text-zinc-600 text-sm">© {new Date().getFullYear()} Ghabriel Theo Petra Sagala. All rights reserved.</p>
      </footer>
    </main>
  );
}