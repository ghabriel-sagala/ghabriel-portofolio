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
    <main className={`${poppins.className} relative min-h-screen bg-[#050505] selection:bg-red-900 selection:text-white`}>
      
      {/* Background Keseluruhan Web */}
      <div className="fixed inset-0 z-0 h-full w-full pointer-events-none">
        <Image
          src="/profile.jpg"
          alt="Ghabriel Theo Petra Sagala"
          fill
          className="object-cover object-top opacity-[0.15] mix-blend-luminosity scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-red-950/40 to-[#050505]"></div>
      </div>

      {/* Header (Navbar) */}
      <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/5">
        <div className="relative max-w-7xl mx-auto px-6 py-5 flex md:justify-center justify-between items-center">
          <Link href="/" className="md:absolute md:left-6 font-extrabold text-2xl tracking-tighter text-zinc-300">
            GHABRIEL<span className="text-red-600">.</span>
          </Link>
          <div className="hidden md:flex justify-center space-x-8 text-sm font-medium text-zinc-400">
            <a href="#hero" className="hover:text-red-500 transition-colors">Home</a>
            <a href="#karya" className="hover:text-red-500 transition-colors">Karya</a>
            <a href="#organisasi" className="hover:text-red-500 transition-colors">Organisasi</a>
            <a href="#sertifikat" className="hover:text-red-500 transition-colors">Sertifikat</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative z-10 w-full h-screen flex items-center overflow-hidden pt-20">
        <div className="max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr] items-center gap-12 md:gap-16">
            
            {/* Sisi Kiri */}
            <div className="flex flex-col space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-200 leading-[1.1]">
                Ghabriel Theo <br /> Petra Sagala
              </h1>
              
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-zinc-300 pt-3">
                Fullstack Web Developer <br className="hidden md:block"/> & Tech Enthusiast.
              </h2>
              
              <p className="max-w-2xl text-base md:text-lg text-zinc-400 leading-relaxed pt-2">
                Sangat menyukai kegiatan berorganisasi untuk menumbuhkan rasa kepemimpinan dan teamwork yang baik. Memiliki peminatan menjadi UI/UX Designer dan Web Developer (Front-end & Back-end).
              </p>

              <div className="pt-8 flex flex-col sm:flex-row items-start gap-6">
                <div className="flex items-center gap-4">
                  <a href="#karya" className="bg-red-700 hover:bg-red-600 text-white px-8 py-3.5 rounded-full font-semibold transition-all shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] hover:scale-105">
                    Lihat Karya
                  </a>
                  <a href="https://wa.me/6282218361690" target="_blank" className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-3.5 rounded-full font-semibold transition-all">
                    Hubungi Saya
                  </a>
                </div>

                <div className="hidden sm:block w-px h-12 bg-white/10 mx-2"></div>

                <div className="flex flex-col gap-3 justify-center">
                  <Link href="https://instagram.com/ghabrielsagala" target="_blank" className="flex items-center gap-2 text-sm text-gray-400 hover:text-pink-400 transition-colors font-medium">
                    📸 @ghabrielsagala
                  </Link>
                  <Link href="https://www.linkedin.com/in/ghabriel-sagala-93bba027b" target="_blank" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors font-medium">
                    in Ghabriel Theo
                  </Link>
                </div>
              </div>
            </div>

            {/* Sisi Kanan: Blok Informasi */}
            <div className="flex flex-col gap-6 md:items-end w-full md:w-auto">
              <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm">
                <span className="bg-white/10 backdrop-blur-sm border border-white/10 text-zinc-300 px-5 py-2 rounded-full font-medium transition duration-300">
                  Mahasiswa D3 Teknologi Informasi Vokasi
                </span>
                <span className="bg-white/10 backdrop-blur-sm border border-white/10 text-zinc-300 px-5 py-2 rounded-full font-medium transition duration-300">
                  Universitas Brawijaya
                </span>
                <span className="bg-white/10 backdrop-blur-sm border border-white/10 text-green-400 px-5 py-2 rounded-full font-bold transition duration-300 hover:scale-105">
                  IPK: 3.83
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Bagian Bawah Web */}
      <section id="bawah" className="relative z-10">
        
        {/* Karya Section */}
        <section id="karya" className="py-24 px-6 scroll-mt-10 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-zinc-200 mb-4">Karya & Proyek<span className="text-red-600">.</span></h2>
              <p className="text-zinc-400 max-w-2xl">Beberapa proyek web development dan UI/UX yang telah saya kerjakan selama masa perkuliahan.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div 
                  key={project.id} 
                  onClick={() => setSelectedProject(project)}
                  className="bg-[#0d0d0f]/60 backdrop-blur-sm border-2 border-white/5 rounded-2xl overflow-hidden hover:border-red-600/50 transition-all duration-300 group cursor-pointer hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(220,38,38,0.2)]"
                >
                  <div className="relative h-56 bg-zinc-900 overflow-hidden">
                    <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0f] to-transparent opacity-80"></div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-3 text-zinc-200 group-hover:text-red-500 transition-colors leading-snug">{project.title}</h3>
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

        {/* Modal Karya */}
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

        {/* Organisasi Section (Menonjolkan Posisi Badan Pengurus Inti) */}
        <section id="organisasi" className="py-24 px-6 scroll-mt-10 border-t border-white/5 bg-[#0a0a0c]">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Pengalaman Organisasi<span className="text-red-600">.</span></h2>
              <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">Melalui organisasi, saya membangun kepemimpinan dan teamwork yang kuat untuk mencapai tujuan bersama.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              
              {[
                { 
                  title: "Ketua Komisi Pengawas & Standarisasi", 
                  org: "HMPSTI Universitas Brawijaya Kabinet INNOVARA", 
                  year: "2026", 
                  desc: "Bertanggung jawab penuh sebagai Badan Pengurus Inti (BPI) dalam mengawasi dan memastikan standarisasi setiap program kerja sejalan dengan visi organisasi.", 
                  color: "bg-red-600",
                  badge: "👑 Badan Pengurus Inti",
                  isHighlighted: true
                },
                { 
                  title: "Staff Magang PSDM", 
                  org: "BEM Fakultas Vokasi Universitas Brawijaya", 
                  year: "2024", 
                  desc: "Aktif dalam program pengembangan sumber daya mahasiswa dan berhasil meraih penghargaan Best Internship Staff atas kinerja maksimal.", 
                  color: "bg-red-800" 
                },
                { 
                  title: "Ketua Divisi Acara PKKMB", 
                  org: "Krida Mahasiswa Fakultas Vokasi UB", 
                  year: "2025", 
                  desc: "Memimpin penyusunan konsep dan eksekusi rangkaian acara penyambutan mahasiswa baru.", 
                  color: "bg-red-800" 
                },
                { 
                  title: "Wakil Ketua Divisi Acara", 
                  org: "Program Abdi Desa UB", 
                  year: "2025", 
                  desc: "Membantu pengelolaan susunan acara untuk kegiatan pengabdian kepada masyarakat.", 
                  color: "bg-red-800" 
                },
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className={`group relative bg-[#0d0d0f]/60 backdrop-blur-sm p-8 rounded-3xl border-2 transition-all duration-300 overflow-hidden 
                  ${item.isHighlighted 
                    ? 'border-red-600/60 shadow-[0_0_30px_rgba(220,38,38,0.15)] hover:border-red-500 hover:shadow-[0_0_40px_rgba(220,38,38,0.3)]' 
                    : 'border-white/5 hover:border-red-600/50'}`}
                >
                  <div className={`absolute top-0 left-0 w-1.5 h-full ${item.color}`}></div>
                  <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-3 mb-3">
                    <h3 className="text-2xl md:text-3xl font-bold text-zinc-200 group-hover:text-red-500 transition-colors leading-snug">{item.title}</h3>
                    {item.badge && (
                      <span className="bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap w-fit">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-red-400 font-semibold mb-4">{item.org} • {item.year}</p>
                  <p className="text-zinc-400 text-lg leading-relaxed">{item.desc}</p>
                </div>
              ))}

            </div>
          </div>
        </section>

        {/* Sertifikat Section */}
        <section id="sertifikat" className="py-24 px-6 scroll-mt-10 border-t border-white/5 bg-[#0a0a0c]">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Sertifikasi & Penghargaan<span className="text-red-600">.</span></h2>
              <p className="text-zinc-400 max-w-2xl">Validasi keahlian melalui sertifikasi dari perusahaan teknologi terkemuka.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Microsoft Office Desktop Application", org: "Microsoft Partner", date: "22 Agustus 2024", icon: "V", color: "text-green-400" },
                { title: "Sertifikat Gemini", org: "Google Gemini", icon: "📄", color: "text-zinc-400" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-5 bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-red-600 transition">
                  <div className={`w-16 h-16 bg-white/10 ${item.color} rounded-lg flex items-center justify-center font-bold text-2xl`}>{item.icon}</div>
                  <div>
                    <h3 className="font-bold text-zinc-200">{item.title}</h3>
                    <p className="text-sm text-zinc-400">{item.org} • {item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

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
      </section>
    </main>
  );
}