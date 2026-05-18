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
  const [selectedCert, setSelectedCert] = useState<any>(null); 
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
      org: "Trust Training Partners (Microsoft Partner)",
      date: "2024",
      image: "/sertifikatmicrosoft.jpg" 
    },
    {
      id: 2,
      title: "Program Pelatihan Google Gemini",
      org: "Google Gemini",
      date: "2026", 
      image: "/sertifikatgemini.jpg" 
    }
  ];

  const socialLinks = [
    { label: "📸 Instagram", href: "https://instagram.com/ghabrielsagala", text: "@ghabrielsagala" },
    { label: "💼 LinkedIn", href: "https://www.linkedin.com/in/ghabriel-sagala-93bba027b", text: "Ghabriel Theo" },
  ];

  return (
    <main className={`${poppins.className} relative min-h-screen bg-[#050505] text-white selection:bg-red-900 selection:text-white overflow-x-hidden`}>
      
      {/* Premium Ambient Background */}
      <div className="fixed inset-0 z-0 h-full w-full pointer-events-none">
        <Image
          src="/profile.jpg"
          alt="Ghabriel Theo Petra Sagala"
          fill
          className="object-cover object-top opacity-30 mix-blend-luminosity scale-105 transition-all duration-500"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-red-950/40 to-[#050505]"></div>
      </div>

      {/* Navigation Bar */}
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
          <div className="flex flex-col space-y-6 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
              Ghabriel Theo Petra Sagala
            </h1>

            {/* 1. Aligned Education Tags Directly Under Name */}
            <div className="flex flex-wrap items-center gap-4">
              <span className="bg-zinc-900/80 border border-zinc-800 hover:border-red-600 transition-all cursor-default px-5 py-2 rounded-lg text-sm font-medium text-zinc-300">
                Mahasiswa D3 Teknologi Informasi Vokasi
              </span>
              <span className="bg-zinc-900/80 border border-zinc-800 hover:border-red-600 transition-all cursor-default px-5 py-2 rounded-lg text-sm font-medium text-zinc-300">
                Universitas Brawijaya
              </span>
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-green-500 rounded-lg blur opacity-20 group-hover:opacity-100 transition duration-500"></div>
                <span className="relative bg-zinc-900 border border-zinc-800 text-green-400 group-hover:text-green-300 px-5 py-2 rounded-lg text-sm font-bold flex items-center gap-2">
                  IPK: 3.83
                </span>
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight pt-2">
                Fullstack Web Developer <br /> & Tech Enthusiast.
            </h2>
            
            <p className="max-w-3xl text-zinc-400 text-lg md:text-xl leading-relaxed pt-2">
              Seorang profesional teknologi yang berdedikasi dengan fokus pada pengembangan web Fullstack dan desain UI/UX. Memiliki rekam jejak kepemimpinan yang teruji melalui berbagai pengalaman organisasi strategis, serta berkomitmen penuh untuk menghadirkan solusi digital yang inovatif melalui kolaborasi tim yang dinamis dan keunggulan teknis.
            </p>

            {/* Actions and Left-Aligned Social Network Area */}
            <div className="pt-8 flex flex-col gap-6">
              <div className="flex w-full sm:w-auto gap-4">
                <a href="#karya" className="flex-1 sm:flex-none bg-red-700 hover:bg-red-600 text-white px-8 py-3.5 rounded-full font-semibold transition-all shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] text-center hover:scale-105">
                  Lihat Karya
                </a>
                <a href="https://wa.me/6282218361690" target="_blank" className="flex-1 sm:flex-none bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-3.5 rounded-full font-semibold transition-all text-center">
                  Hubungi Saya
                </a>
              </div>

              {/* 2. Social Media Accounts Shifted to Left under buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                  {socialLinks.map((link, idx) => (
                    <Link key={idx} href={link.href} target="_blank" className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-md border border-white/5 text-sm hover:bg-white/10 transition group w-fit">
                        <span className="text-zinc-300 font-medium">{link.label}</span>
                        <span className="text-gray-500 font-normal group-hover:text-zinc-600 transition">|</span>
                        <span className="text-gray-400 font-normal group-hover:text-zinc-300 transition">{link.text}</span>
                    </Link>
                  ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="karya" className="py-24 px-6 bg-[#0a0a0c] backdrop-blur-sm scroll-mt-10 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Karya & Proyek<span className="text-red-600">.</span></h2>
            <p className="text-zinc-400 max-w-2xl text-lg md:text-xl">Beberapa proyek web development dan UI/UX yang telah saya kerjakan selama masa perkuliahan.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id} 
                onClick={() => setSelectedProject(project)}
                className="bg-[#121214] border-2 border-white/5 rounded-3xl overflow-hidden hover:border-red-600/50 transition-all duration-300 group cursor-pointer hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-900/20"
              >
                <div className="relative h-56 bg-zinc-900 overflow-hidden">
                  <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121214] to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-60"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-white group-hover:text-red-500 transition-colors leading-snug">{project.title}</h3>
                  <p className="text-sm md:text-base text-zinc-400 mb-6 line-clamp-2 leading-relaxed">{project.shortDesc}</p>
                  <span className="text-xs md:text-sm bg-red-950/30 text-red-400 border border-red-900/30 px-3 py-1.5 rounded-full font-semibold">{project.semester}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Detail Karya */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 md:p-8 transition-opacity duration-300 animate-in fade-in" onClick={() => setSelectedProject(null)}>
          <div className="bg-[#0f0f11] border-2 border-white/10 w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center p-6 border-b border-white/5 bg-[#121214]">
              <h3 className="text-2xl font-bold text-white tracking-tight">{selectedProject.title}</h3>
              <button onClick={() => setSelectedProject(null)} className="text-gray-400 hover:text-white bg-white/5 hover:bg-red-600 p-3 rounded-full transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>
            <div className="p-6 md:p-8 overflow-y-auto max-h-[75vh]">
              <div className="flex gap-2 mb-8 flex-wrap">
                {selectedProject.tech.map((t: string) => <span key={t} className="bg-white/5 text-sm px-4 py-1.5 rounded-full text-gray-300 border border-white/10 font-medium tracking-wide">{t}</span>)}
                <span className="bg-green-500/10 text-sm px-4 py-1.5 rounded-full text-green-400 border border-green-500/20 font-bold">{selectedProject.grade}</span>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/5 mb-8">
                <h4 className="text-red-500 font-bold text-sm mb-3 tracking-widest uppercase">Ringkasan Project</h4>
                <p className="text-zinc-300 text-base md:text-xl leading-relaxed">{selectedProject.fullDesc}</p>
              </div>
              <div className="relative h-64 md:h-[450px] w-full rounded-2xl overflow-hidden border border-white/10 shadow-inner">
                <Image src={selectedProject.image} alt={selectedProject.title} fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Organization Section (With Newly Translated Detailed Professional Content) */}
      <section id="organisasi" className="py-24 px-6 bg-[#050505] scroll-mt-10 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Pengalaman Organisasi<span className="text-red-600">.</span></h2>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">Melalui rekam jejak kepemimpinan, saya aktif membangun ekosistem kerja tim yang adaptif dan berorientasi pada pencapaian organisasi.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
            {[
              { 
                title: "Ketua Komisi Pengawas & Standarisasi", 
                org: "HMPSTI Universitas Brawijaya Kabinet INNOVARA", 
                year: "2026", 
                desc: "Memegang mandat penuh sebagai Badan Pengurus Inti (BPI) yang memimpin perancangan serta eksekusi kerangka pengawasan fungsional. Bertanggung jawab langsung dalam memonitor, mengevaluasi mutu efisiensi kerja internal, serta mengaudit akuntabilitas program kerja berkala demi menyelaraskan visi misi strategis himpunan dengan AD/ART.", 
                color: "bg-red-700", 
                badge: "👑 Badan Pengurus Inti", 
                isHighlighted: true 
              },
              { 
                title: "Staff Magang PSDM", 
                org: "BEM Fakultas Vokasi Universitas Brawijaya", 
                year: "2024", 
                desc: "Berkontribusi penuh dalam merumuskan modul pengembangan kompetensi dasar dan kepemimpinan mahasiswa. Sukses mengorkestrasi program orientasi serta penilaian performa internal, serta dinobatkan sebagai 'Best Internship Staff' atas dedikasi tinggi dan inisiatif solutif sepanjang masa kerja.", 
                color: "bg-red-800" 
              },
              { 
                title: "Ketua Divisi Acara PKKMB", 
                org: "Krida Mahasiswa Fakultas Vokasi UB", 
                year: "2025", 
                desc: "Memimpin manajemen koordinasi dan perencanaan konseptual untuk orientasi akbar tingkat fakultas. Mengarahkan tim staf pelaksana selama persiapan intensif 3 bulan, merumuskan peta alur manajemen krisis kegiatan (*rundown layout*), serta menjaga kelancaran operasional acara lintas divisi.", 
                color: "bg-red-800" 
              },
              { 
                title: "Wakil Ketua Divisi Acara", 
                org: "Program Abdi Desa UB", 
                year: "2025", 
                desc: "Berperan strategis mendampingi pimpinan dalam memetakan agenda pemberdayaan wilayah serta linimasa pengabdian masyarakat selama 1 bulan penuh. Mengintegrasikan komunikasi teknis acara bersama tokoh masyarakat setempat demi kesuksesan program sosialisasi.", 
                color: "bg-red-800" 
              },
            ].map((item, idx) => (
              <div key={idx} className={`group relative bg-[#0d0d0f]/60 backdrop-blur-sm p-8 rounded-3xl border-2 transition-all duration-300 overflow-hidden ${item.isHighlighted ? 'border-red-600/60 shadow-[0_0_30px_rgba(220,38,38,0.15)] hover:border-red-500 hover:shadow-[0_0_40px_rgba(220,38,38,0.3)]' : 'border-white/5 hover:border-red-600/50'}`}>
                <div className={`absolute top-0 left-0 w-1.5 h-full ${item.color}`}></div>
                <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-2 xl:gap-4 mb-2 xl:mb-1">
                  <h3 className="text-xl md:text-2xl font-bold text-zinc-100 group-hover:text-red-500 transition-colors leading-snug">{item.title}</h3>
                  {item.badge && <span className="bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap w-fit">{item.badge}</span>}
                </div>
                <p className="text-sm md:text-base text-red-400 font-semibold mb-4 leading-relaxed">{item.org} • {item.year}</p>
                <p className="text-zinc-400 text-base leading-relaxed text-justify">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section (Corrected Years) */}
      <section id="sertifikat" className="py-24 px-6 bg-[#0a0a0c] scroll-mt-10 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Sertifikasi & Penghargaan<span className="text-red-600">.</span></h2>
            <p className="text-zinc-400 max-w-2xl text-lg md:text-xl">Validasi kompetensi teknis profesional berstandar industri global. Klik kartu untuk melihat lampiran penuh.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certificates.map((cert) => (
              <div 
                key={cert.id} 
                onClick={() => setSelectedCert(cert)}
                className="bg-[#121214] flex items-center space-x-6 p-6 rounded-2xl border-2 border-white/5 hover:border-red-600 transition group cursor-pointer hover:-translate-y-1"
              >
                <div className="relative w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden border border-white/10 group-hover:border-red-500/50 shadow-inner">
                  <Image 
                    src={cert.image} 
                    alt={cert.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" 
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-300 flex items-center justify-center">
                    <span className="bg-black/70 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Perbesar</span>
                  </div>
                </div>
                <div>
                  <span className="text-green-500 text-[10px] font-bold uppercase tracking-[2px] mb-2 inline-block">Verified Credentials</span>
                  <h3 className="font-bold text-zinc-100 text-xl md:text-2xl group-hover:text-red-400 transition-colors leading-snug">{cert.title}</h3>
                  <p className="text-sm md:text-base text-zinc-400 font-medium mb-1 leading-normal">{cert.org} • {cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Detail Sertifikat */}
      {selectedCert && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 md:p-8 transition-opacity duration-300 animate-in fade-in" onClick={() => setSelectedCert(null)}>
          <div className="bg-[#0f0f11] border-2 border-white/10 w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center p-6 md:p-8 border-b border-white/5 bg-[#121214]">
              <h3 className="text-2xl md:text-3xl font-bold text-white pr-8 tracking-tight">{selectedCert.title}</h3>
              <button onClick={() => setSelectedCert(null)} className="text-gray-400 hover:text-white bg-white/5 hover:bg-red-600 p-3 rounded-full transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>
            <div className="p-6 md:p-8 overflow-y-auto max-h-[75vh]">
              <div className="flex gap-2 mb-8 flex-wrap">
                <span className="bg-white/5 text-sm px-4 py-1.5 rounded-full text-zinc-300 border border-white/10 font-medium tracking-wide">{selectedCert.org}</span>
                <span className="bg-white/5 text-sm px-4 py-1.5 rounded-full text-zinc-400 border border-white/10">{selectedCert.date}</span>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/5 mb-8">
                <h4 className="text-red-500 font-bold text-sm mb-3 tracking-widest uppercase">Informasi Sertifikat</h4>
                <p className="text-zinc-300 text-base md:text-xl leading-relaxed">Sertifikasi kompetensi profesional berstandar tinggi yang memvalidasi keahlian dan pengetahuan dalam domain spesifik. Terbit pada tahun {selectedCert.date} oleh {selectedCert.org}.</p>
              </div>
              <div className="relative h-64 md:h-[500px] w-full rounded-2xl overflow-hidden border-2 border-white/10 shadow-inner bg-zinc-900 flex items-center justify-center">
                <Image src={selectedCert.image} alt={selectedCert.title} fill className="object-contain" />
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
        <p className="text-zinc-600 text-sm">© {new Date().getFullYear()} Ghabriel Theo Petra Sagala. Dibuat dengan Poppins Font.</p>
      </footer>
    </main>
  );
}