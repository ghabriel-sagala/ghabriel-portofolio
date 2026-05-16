"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
// Mengimpor font modern Poppins dari Google Fonts
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  // Data Proyek (Karya)
  const projects = [
    {
      id: 1,
      title: "Website Wisata Kampoeng Kadjoetangan Heritage",
      shortDesc: "Website profil wisata berbasis framework PHP.",
      image: "/websitewisata.jpg",
      tech: ["Laravel", "PHP", "Tailwind CSS"],
      semester: "Semester 3",
      grade: "Mendapatkan Nilai A",
      fullDesc: "Website dashboard untuk Kampoeng Kadjoetangan Heritage yang dikerjakan secara berkolaborasi. Mengedepankan kerja sama tim dalam menyajikan UI/UX yang menarik serta pengelolaan data wisata yang informatif. Proyek UAS Semester 3 ini berhasil mendapatkan Nilai A."
    },
    {
      id: 2,
      title: "Website Tabungan Mahasiswa",
      shortDesc: "Sistem pencatatan tabungan mahasiswa.",
      image: "/websitetabunganmahasiswa.png",
      tech: ["Native PHP", "HTML", "CSS", "JavaScript"],
      semester: "Semester 2",
      grade: "Mendapatkan Nilai A",
      fullDesc: "Sistem pencatatan tabungan mahasiswa yang dibangun menggunakan teknologi Native. Proyek ini merupakan gabungan penugasan dari 3 mata kuliah sekaligus pada Semester 2, dan berhasil mendapatkan Nilai A atas fungsionalitas dan kerapian kodenya."
    },
    {
      id: 3,
      title: "Dashboard Monitoring IoT",
      shortDesc: "Antarmuka pemantauan data IoT secara real-time.",
      image: "/dashboardmonitoringIoT.png",
      tech: ["Next.js", "React", "IoT Integration"],
      semester: "Semester 4",
      grade: "Sedang Berlangsung",
      fullDesc: "Sebuah website dashboard interaktif yang dirancang untuk memonitoring data dari perangkat IoT (Internet of Things) secara efisien. Proyek ini dikerjakan pada Semester 4 dan saat ini masih dalam tahap pengembangan (on-going)."
    }
  ];

  return (
    <main className={`${poppins.className} relative min-h-screen bg-[#050505] selection:bg-red-900 selection:text-white`}>
      
      {/* 4. Background Keseluruhan Web - Konsisten di setiap section */}
      <div className="fixed inset-0 z-0 h-full w-full pointer-events-none">
        <Image
          src="/profile.jpg"
          alt="Ghabriel Theo Petra Sagala"
          fill
          className="object-cover object-top opacity-20 mix-blend-luminosity scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-red-950/40 to-[#050505]"></div>
      </div>

      {/* 1. Header (Navbar) - Menu Navigasi di Tengah (Penting!) */}
      <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-lg border-b border-white/5">
        <div className="relative max-w-7xl mx-auto px-6 py-5 flex md:justify-center justify-between items-center">
          {/* Logo Kiri (Untuk Desktop) */}
          <Link href="/" className="md:absolute md:left-6 font-extrabold text-2xl tracking-tighter text-zinc-300">
            GHABRIEL<span className="text-red-600">.</span>
          </Link>
          {/* Tautan Navigasi Tengah */}
          <div className="hidden md:flex justify-center space-x-8 text-sm font-medium text-zinc-400">
            <a href="#about" className="hover:text-white hover:underline decoration-red-600 underline-offset-8 transition-all">Tentang</a>
            <a href="#karya" className="hover:text-white hover:underline decoration-red-600 underline-offset-8 transition-all">Karya</a>
            <a href="#organisasi" className="hover:text-white hover:underline decoration-red-600 underline-offset-8 transition-all">Organisasi</a>
            <a href="#sertifikat" className="hover:text-white hover:underline decoration-red-600 underline-offset-8 transition-all">Sertifikat</a>
          </div>
        </div>
      </nav>

      {/* Hero Section (Presisi 1 Layar Penuh) */}
      <section id="hero" className="relative z-10 w-full h-screen flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 pt-20">
          
          {/* 1. Keseimbangan Ruang (Kiri-Kanan Diisi) */}
          <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr] items-center gap-12 md:gap-16">
            
            {/* Sisi Kiri: Deskripsi Besar */}
            <div className="flex flex-col space-y-6">
              {/* 1. Ukuran Nama Disesuaikan (Tidak Kegedean) */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-zinc-200">
                Ghabriel Theo <br /> Petra Sagala
              </h1>
              
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-zinc-300 pt-3">
                Fullstack Web Developer <br className="hidden md:block"/> & Tech Enthusiast.
              </h2>
              
              {/* 5. Warna Font Modern (Silver/Zinc-400) */}
              <p className="max-w-2xl text-base md:text-lg text-zinc-400 leading-relaxed pt-2">
                Sangat menyukai kegiatan berorganisasi untuk menumbuhkan rasa kepemimpinan dan teamwork yang baik. Memiliki peminatan menjadi UI/UX Designer dan Web Developer (Front-end & Back-end).
              </p>

              {/* Area Tombol dan Sosmed */}
              <div className="pt-8 flex flex-col sm:flex-row items-start gap-6">
                <div className="flex items-center gap-4">
                  <a href="#karya" className="bg-red-700 hover:bg-red-600 text-white px-8 py-3.5 rounded-full font-semibold transition-all shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] hover:scale-105">Lihat Karya</a>
                  <a href="https://wa.me/6282218361690" target="_blank" className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-3.5 rounded-full font-semibold transition-all">Hubungi Saya</a>
                </div>
                <div className="hidden sm:block w-px h-12 bg-white/10 mx-2"></div>
                <div className="flex flex-col gap-2 justify-center">
                  <Link href="https://instagram.com/ghabrielsagala" target="_blank" className="flex items-center gap-2 text-sm text-zinc-400 hover:text-pink-400 transition-colors font-medium">Instagram: @ghabrielsagala</Link>
                  <Link href="https://www.linkedin.com/in/ghabriel-sagala-93bba027b" target="_blank" className="flex items-center gap-2 text-sm text-zinc-400 hover:text-blue-400 transition-colors font-medium">LinkedIn: Ghabriel Sagala</Link>
                </div>
              </div>
            </div>

            {/* Sisi Kanan: Blok Informasi (2. Efek Interaktif Keren Saat Hover) */}
            <div className="flex flex-col gap-6 md:items-end w-full md:w-auto">
              
              {/* Card Pendidikan (Efek Hover) */}
              <div className="group relative w-full md:w-auto max-w-sm">
                {/* Glow Overlay saat hover */}
                <span className="absolute -inset-1 bg-gradient-to-r from-red-600/30 to-red-800/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition duration-500"></span>
                <div className="relative bg-[#0d0d0f] border-2 border-white/5 p-6 rounded-2xl text-zinc-300 transition-all duration-300 group-hover:border-red-600/50 group-hover:scale-105 shadow-2xl">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center font-bold text-red-600 border border-red-900/50">UB</div>
                    <div>
                      <p className="text-xs text-red-500 font-bold uppercase tracking-widest mb-0.5">PENDIDIKAN</p>
                      <p className="text-zinc-400 text-sm font-medium">Mahasiswa D3 Teknologi Informasi Vokasi</p>
                    </div>
                  </div>
                  <p className="text-xs text-zinc-500 font-medium">Universitas Brawijaya • {new Date().getFullYear()}</p>
                </div>
              </div>
              
              {/* Card IPK (Efek Hover Berubah Warna) */}
              <div className="group relative w-fit md:w-auto">
                <span className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-800 rounded-full blur-lg opacity-50 group-hover:opacity-100 transition duration-300"></span>
                <span className="relative bg-black border-2 border-red-900/50 text-green-400 group-hover:border-green-400 group-hover:bg-green-950/30 transition-all duration-300 text-base md:text-lg lg:text-xl font-bold px-10 py-4 rounded-full inline-block group-hover:scale-110 shadow-[0_0_25px_rgba(220,38,38,0.3)]">IPK: 3.83</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Bagian Bawah Web (Latar Belakang Sama) */}
      <section id="bawah" className="relative z-10">
        
        {/* Karya Section (3. Rapi & Tidak Kepotong Bawah) */}
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

        {/* Modal / Popup Detail Karya (Sama) */}
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

        {/* Organisasi Section (Rombak Total, Keseimbangan Kiri-Kanan) */}
        <section id="organisasi" className="py-24 px-6 scroll-mt-10 border-t border-white/5">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12 md:gap-16">
            
            {/* Sisi Kiri: Judul dan Deskripsi */}
            <div className="w-full md:w-1/3 flex-shrink-0 md:sticky md:top-28">
              <h2 className="text-4xl md:text-5xl font-bold text-zinc-200 mb-6">Pengalaman<span className="text-red-600">.</span></h2>
              <p className="text-zinc-400 text-lg leading-relaxed">Melalui organisasi, saya membangun kepemimpinan dan teamwork yang kuat untuk mencapai tujuan bersama.</p>
            </div>

            {/* Sisi Kanan: List Organisasi yang Mengisi Ruang */}
            <div className="w-full md:w-2/3 flex flex-col gap-8">
              
              {[
                { title: "Ketua Komisi Pengawas & Standarisasi", org: "HMPSTI Universitas Brawijaya Kabinet INNOVARA", year: "2026", desc: "Memastikan program kerja sejalan dengan visi organisasi.", color: "bg-red-700" },
                { title: "Staff Magang PSDM (Best Internship)", org: "BEM Fakultas Vokasi Universitas Brawijaya", year: "2024", desc: "Meraih penghargaan Best Internship Staff.", color: "bg-yellow-600" },
                { title: "Ketua Divisi Acara PKKMB", org: "Krida Mahasiswa Fakultas Vokasi UB", year: "2025", desc: "Memimpin konsep dan eksekusi acara penyambutan.", color: "bg-red-700" },
                { title: "Wakil Ketua Divisi Acara", org: "Program Abdi Desa UB", year: "2025", desc: "Koordinasi acara pengabdian masyarakat.", color: "bg-red-700" },
              ].map((item, idx) => (
                <div key={idx} className="group relative bg-[#0d0d0f]/60 backdrop-blur-sm p-8 rounded-3xl border-2 border-white/5 hover:border-red-600/50 transition-all duration-300 overflow-hidden">
                  <div className={`absolute top-0 left-0 w-1.5 h-full ${item.color}`}></div>
                  <h3 className="text-2xl md:text-3xl font-bold text-zinc-200 mb-2 group-hover:text-red-500 transition-colors leading-snug">{item.title}</h3>
                  <p className="text-red-400 font-semibold mb-4">{item.org} • {item.year}</p>
                  <p className="text-zinc-400 text-lg leading-relaxed">{item.desc}</p>
                </div>
              ))}

            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-20 bg-[#050505] border-t border-white/5 text-center">
          <h2 className="text-3xl font-bold mb-8 text-zinc-200">Mari Berkolaborasi!</h2>
          <div className="flex justify-center gap-6 mb-10 flex-wrap px-6">
            {["WhatsApp", "Instagram", "LinkedIn"].map(label => (
              <a key={label} href="#" className="bg-white/5 hover:bg-white/10 text-white px-8 py-3.5 rounded-full font-semibold transition-all border border-white/10">{label}</a>
            ))}
          </div>
          <p className="text-zinc-600 text-sm">© {new Date().getFullYear()} Ghabriel Theo Petra Sagala. Dibuat dengan Poppins Font & Keseeren CSS.</p>
        </footer>
      </section>
    </main>
  );
}