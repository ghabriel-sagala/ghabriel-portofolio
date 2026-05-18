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
  const [selectedCert, setSelectedCert] = useState<any>(null); // State untuk pop-up sertifikat
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
      // Gunakan jalur file yang Anda unggah
      image: "/image_bfb909.png" 
    },
    {
      id: 2,
      title: "Sertifikat Pelatihan Gemini AI",
      org: "Google Gemini",
      date: "2024",
      // Gunakan jalur file yang Anda unggah
      image: "/image_bfbbec.png" 
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
          <div className="md:hidden absolute top-full left-0 w-full bg-[#0a0a0c]/95 backdrop-blur-xl border-b border-white/5 py-4 px-6 flex flex-col space-y-5 shadow-2xl animate-in slide-in-from-top-2">
            <a href="#hero" onClick={() => setIsMobileMenuOpen(false)} className="text-zinc-300 hover:text-red-500 font-medium text-base">Tentang</a>
            <a href="#karya" onClick={() => setIsMobileMenuOpen(false)} className="text-zinc-300 hover:text-red-500 font-medium text-base">Karya</a>
            <a href="#organisasi" onClick={() => setIsMobileMenuOpen(false)} className="text-zinc-300 hover:text-red-500 font-medium text-base">Organisasi</a>
            <a href="#sertifikat" onClick={() => setIsMobileMenuOpen(false)} className="text-zinc-300 hover:text-red-500 font-medium text-base">Sertifikat</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative z-10 w-full min-h-screen flex items-center overflow-hidden pt-20">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr] items-center gap-12 md:gap-16">
            
            {/* Sisi Kiri: Deskripsi & Tombol */}
            <div className="flex flex-col space-y-6">
              {/* Nama Lengkap Diperbaiki */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-200 tracking-tight leading-[1.1]">
                Ghabriel Theo <br /> Petra Sagala
              </h1>
              
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-zinc-300 pt-3">
                Fullstack Web Developer <br className="hidden md:block"/> & Tech Enthusiast.
              </h2>
              
              {/* Bio Lebih Profesional */}
              <p className="max-w-2xl text-base md:text-lg text-zinc-400 leading-relaxed pt-2">
                Seorang profesional teknologi yang berdedikasi dengan fokus pada pengembangan web Fullstack dan desain UI/UX. Memiliki rekam jejak kepemimpinan yang teruji melalui berbagai pengalaman organisasi strategis, serta berkomitmen penuh untuk menghadirkan solusi digital yang inovatif melalui kolaborasi tim yang dinamis dan keunggulan teknis.
              </p>

              {/* Tombol & Kontak */}
              <div className="pt-8 flex flex-col sm:flex-row items-start gap-6">
                <div className="flex items-center gap-4">
                  <a href="#karya" className="bg-red-700 hover:bg-red-600 text-white px-8 py-3.5 rounded-full font-semibold transition-all shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] hover:scale-105 text-center">
                    Lihat Karya
                  </a>
                  <a href="https://wa.me/6282218361690" target="_blank" className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-3.5 rounded-full font-semibold transition-all text-center">
                    Hubungi Saya
                  </a>
                </div>

                <div className="hidden sm:block w-px h-12 bg-white/10 mx-2"></div>

                {/* Area Sosial Media/Kontak - DIPERBAIKI VERSI FINAL */}
                <div className="flex flex-col gap-3">
                  {/* Teks Ghabriel Rata Kiri */}
                  <a
                    href="https://wa.me/6282218361690"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-md border border-white/5 text-sm hover:bg-white/10 transition cursor-pointer text-zinc-300"
                  >
                    📞 Ghabriel
                  </a>
                  {/* Tiga Ikon Selaras (Instagram, LinkedIn, WhatsApp) */}
                  <div className="flex items-center gap-5 mt-1 relative h-7 w-auto overflow-hidden">
                    {/* Gunakan gambar tunggal dan CSS untuk memposisikan area klik */}
                    <Image 
                      src="/image_bfbc45.png" 
                      alt="Social Links" 
                      fill 
                      className="object-contain"
                    />
                    {/* Area Klik Instagram */}
                    <a href="https://instagram.com/ghabrielsagala" target="_blank" className="absolute left-0 top-0 h-full w-[20%] opacity-0">Instagram</a>
                    {/* Area Klik LinkedIn */}
                    <a href="https://www.linkedin.com/in/ghabriel-sagala-93bba027b" target="_blank" className="absolute left-[35%] top-0 h-full w-[20%] opacity-0">LinkedIn</a>
                    {/* Area Klik WhatsApp */}
                    <a href="https://wa.me/6282218361690" target="_blank" className="absolute right-0 top-0 h-full w-[20%] opacity-0">WhatsApp</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Sisi Kanan: Blok Informasi Pendidikan */}
            <div className="flex flex-col gap-6 md:items-end w-full md:w-auto pt-10 md:pt-0">
              {/* Penyelarasan Pendidikan & Universitas */}
              <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm">
                <span className="bg-white/10 backdrop-blur-sm border border-white/10 text-zinc-300 px-5 py-2 rounded-full font-medium transition duration-300">
                  Mahasiswa D3 Teknologi Informasi Vokasi
                </span>
                <span className="bg-white/10 backdrop-blur-sm border border-white/10 text-zinc-300 px-5 py-2 rounded-full font-medium transition duration-300">
                  Universitas Brawijaya
                </span>
              </div>
              
              {/* Tag IPK - Efek Interaktif */}
              <div className="group relative w-fit md:w-auto">
                <span className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-800 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-300"></span>
                <span className="relative bg-black border-2 border-red-900/50 text-green-400 group-hover:border-green-400 group-hover:bg-green-950/30 transition duration-300 text-base md:text-lg font-bold px-8 py-3 rounded-full inline-block group-hover:scale-105 shadow-[0_0_25px_rgba(220,38,38,0.3)]">
                  IPK: 3.83
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Karya Section */}
      <section id="karya" className="py-24 px-6 bg-[#0a0a0c] scroll-mt-10 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Karya & Proyek<span className="text-red-600">.</span></h2>
            <p className="text-zinc-400 max-w-2xl text-lg">Beberapa proyek web development dan UI/UX yang telah saya kerjakan selama masa perkuliahan.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id} 
                onClick={() => setSelectedProject(project)}
                className="bg-[#121214] border border-white/5 rounded-2xl overflow-hidden hover:border-red-600/50 transition-all duration-300 group cursor-pointer hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-900/20"
              >
                <div className="relative h-56 bg-zinc-900 overflow-hidden">
                  <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121214] to-transparent opacity-80"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-red-500 transition-colors leading-snug">{project.title}</h3>
                  <p className="text-base text-zinc-400 mb-6 line-clamp-2">{project.shortDesc}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="text-xs bg-red-950/30 text-red-400 border border-red-900/30 px-4 py-1.5 rounded-full font-semibold">{project.semester}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal / Popup Detail Karya */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 md:p-8 transition-opacity duration-300" onClick={() => setSelectedProject(null)}>
          <div className="bg-[#0f0f11] border-2 border-white/10 w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center p-6 md:p-8 border-b border-white/5">
              <h3 className="text-2xl md:text-3xl font-bold text-white pr-8">{selectedProject.title}</h3>
              <button onClick={() => setSelectedProject(null)} className="text-gray-400 hover:text-white bg-white/5 hover:bg-red-600 p-3 rounded-full transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>
            <div className="p-6 md:p-8 overflow-y-auto max-h-[75vh]">
              <div className="flex gap-2 mb-8 flex-wrap">
                {selectedProject.tech.map((t: string) => <span key={t} className="bg-white/5 text-sm px-4 py-1.5 rounded-full text-gray-300 border border-white/10 font-medium">{t}</span>)}
                <span className="bg-green-500/10 text-sm px-4 py-1.5 rounded-full text-green-400 border border-green-500/20 font-bold">{selectedProject.grade}</span>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/5 mb-8">
                <h4 className="text-red-500 font-bold text-sm mb-3 tracking-widest uppercase">Ringkasan Project</h4>
                <p className="text-zinc-300 text-base md:text-lg leading-relaxed">{selectedProject.fullDesc}</p>
              </div>
              <div className="relative h-64 md:h-[450px] w-full rounded-2xl overflow-hidden border border-white/10">
                <Image src={selectedProject.image} alt={selectedProject.title} fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Organisasi Section */}
      <section id="organisasi" className="py-24 px-6 bg-[#050505] scroll-mt-10 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Pengalaman Organisasi<span className="text-red-600">.</span></h2>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">Melalui organisasi, saya membangun kepemimpinan dan teamwork yang kuat untuk mencapai tujuan bersama.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {[
              { title: "Ketua Komisi Pengawas & Standarisasi", org: "HMPSTI Universitas Brawijaya Kabinet INNOVARA", year: "2026", desc: "Memastikan program kerja sejalan dengan visi organisasi.", color: "bg-red-700" },
              { title: "Staff Magang PSDM (Best Internship)", org: "BEM Fakultas Vokasi Universitas Brawijaya", year: "2024", desc: "Meraih penghargaan Best Internship Staff.", color: "bg-yellow-600", badge: "⭐ Best Internship" },
              { title: "Ketua Divisi Acara PKKMB", org: "Krida Mahasiswa Fakultas Vokasi UB", year: "2025", desc: "Memimpin konsep dan eksekusi acara penyambutan.", color: "bg-red-700" },
              { title: "Wakil Ketua Divisi Acara", org: "Program Abdi Desa UB", year: "2025", desc: "Koordinasi acara pengabdian masyarakat.", color: "bg-red-700" },
            ].map((item, idx) => (
              <div key={idx} className="group relative bg-[#0d0d0f]/60 backdrop-blur-sm p-8 rounded-3xl border-2 border-white/5 hover:border-red-600/50 transition-all duration-300 overflow-hidden">
                <div className={`absolute top-0 left-0 w-1.5 h-full ${item.color}`}></div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                  <h3 className="text-2xl md:text-3xl font-bold text-zinc-200 group-hover:text-red-500 transition-colors leading-snug">{item.title}</h3>
                  {item.badge && <span className="bg-yellow-500/10 text-yellow-500 text-xs font-bold px-3 py-1 rounded-full">{item.badge}</span>}
                </div>
                <p className="text-red-400 font-semibold mb-4">{item.org} • {item.year}</p>
                <p className="text-zinc-400 text-lg leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sertifikat Section - DIPERBAIKI DENGAN GAMBAR & BISA DIKLIK */}
      <section id="sertifikat" className="py-24 px-6 bg-[#0a0a0c] scroll-mt-10 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Sertifikasi & Penghargaan<span className="text-red-600">.</span></h2>
            <p className="text-zinc-400 max-w-2xl text-lg">Validasi keahlian melalui sertifikasi dari perusahaan teknologi terkemuka. Klik untuk melihat detail sertifikat.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certificates.map((cert) => (
              <div 
                key={cert.id} 
                onClick={() => setSelectedCert(cert)}
                className="bg-[#121214] flex flex-col md:flex-row gap-6 p-6 rounded-3xl border border-white/10 hover:border-red-600 transition group cursor-pointer hover:-translate-y-1"
              >
                {/* Thumbnail Gambar Sertifikat - DIPERBAIKI VERSI FINAL */}
                <div className="relative w-full md:w-56 flex-shrink-0 rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 h-48 md:h-auto">
                  {/* Gunakan gambar dari file yang Anda unggah */}
                  <Image src={cert.image} alt={cert.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="flex flex-col justify-center">
                  {/* Penyelarasan Pendidikan & Universitas */}
                  <span className="text-green-500 text-[10px] font-bold uppercase tracking-[2px] mb-3 px-3 py-1 rounded-full w-fit border border-green-500/20 bg-green-500/10">
                    Verified Credentials
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors">{cert.title}</h3>
                  <p className="text-sm text-yellow-500 font-semibold mb-4">{cert.org}</p>
                  <p className="text-zinc-500 text-sm italic">Klik untuk melihat detail sertifikat.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal / Popup Detail Sertifikat (Baru) */}
      {selectedCert && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 md:p-8 transition-opacity duration-300" onClick={() => setSelectedCert(null)}>
          <div className="bg-[#0f0f11] border border-white/10 w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center p-6 md:p-8 border-b border-white/5">
              <h3 className="text-2xl md:text-3xl font-bold text-white pr-8">{selectedCert.title}</h3>
              <button onClick={() => setSelectedCert(null)} className="text-gray-400 hover:text-white bg-white/5 hover:bg-red-600 p-3 rounded-full transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>
            <div className="p-6 md:p-8 overflow-y-auto max-h-[75vh]">
              <div className="flex gap-2 mb-8 flex-wrap">
                <span className="bg-white/5 text-sm px-4 py-1.5 rounded-full text-zinc-300 border border-white/10 font-medium">{selectedCert.org}</span>
                <span className="bg-white/5 text-sm px-4 py-1.5 rounded-full text-zinc-400 border border-white/10">{selectedCert.date}</span>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/5 mb-8">
                <h4 className="text-red-500 font-bold text-sm mb-3 tracking-widest uppercase">Informasi Sertifikat</h4>
                <p className="text-zinc-300 text-base md:text-lg leading-relaxed">Sertifikasi kompetensi profesional berstandar tinggi yang memvalidasi keahlian dan pengetahuan dalam domain spesifik. Terbit pada {selectedCert.date} oleh {selectedCert.org}.</p>
              </div>
              <div className="relative h-64 md:h-[450px] w-full rounded-2xl overflow-hidden border border-white/10">
                <Image src={selectedCert.image} alt={selectedCert.title} fill className="object-contain bg-zinc-900" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer id="contact" className="py-20 bg-[#050505] border-t border-white/5 text-center relative z-10 scroll-mt-10">
        <h2 className="text-3xl font-bold mb-8 text-zinc-200">Mari Berkolaborasi!</h2>
        <div className="flex justify-center gap-6 mb-10 flex-wrap px-6 text-sm font-medium">
          <a href="https://wa.me/6282218361690" target="_blank" className="text-zinc-400 hover:text-green-500 transition-colors">WhatsApp</a>
          <a href="https://instagram.com/ghabrielsagala" target="_blank" className="text-zinc-400 hover:text-pink-500 transition-colors">Instagram</a>
          <a href="https://www.linkedin.com/in/ghabriel-sagala-93bba027b" target="_blank" className="text-zinc-400 hover:text-blue-500 transition-colors">LinkedIn</a>
        </div>
        <p className="text-zinc-600 text-sm">© {new Date().getFullYear()} Ghabriel Theo Petra Sagala. Dibuat dengan Poppins Font & Keseeren CSS.</p>
      </footer>
    </main>
  );
}