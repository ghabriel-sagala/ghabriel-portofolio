"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  // State untuk mengontrol popup (modal) Karya
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
    <main className="min-h-screen bg-black text-white selection:bg-red-900 selection:text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-red-900/30">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="font-bold text-xl tracking-tighter">
            GHABRIEL<span className="text-red-600">.</span>
          </Link>
          <div className="hidden md:flex justify-center space-x-6 text-sm font-medium">
            <a href="#about" className="hover:text-red-500 transition-colors">Tentang</a>
            <a href="#karya" className="hover:text-red-500 transition-colors">Karya</a>
            <a href="#organisasi" className="hover:text-red-500 transition-colors">Organisasi</a>
            <a href="#sertifikat" className="hover:text-red-500 transition-colors">Sertifikat</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/profile.jpg"
            alt="Ghabriel Theo Petra Sagala"
            fill
            className="object-cover object-top opacity-40 mix-blend-luminosity"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-red-950/70 to-black"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 pt-48 pb-20 space-y-12">
          <div className="flex flex-col space-y-6">
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-white">Ghabriel Theo Petra Sagala</h1>
            <div className="flex flex-wrap items-center gap-3 text-sm">
              <span className="bg-zinc-800 text-gray-300 px-4 py-1.5 rounded-full font-medium">Mahasiswa D3 Teknologi Informasi Vokasi</span>
              <span className="bg-zinc-800 text-gray-300 px-4 py-1.5 rounded-full font-medium">Universitas Brawijaya</span>
              <span className="bg-zinc-800 text-green-400 px-4 py-1.5 rounded-full font-medium">IPK: 3.83</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white/90">Fullstack Web Developer & Tech Enthusiast.</h2>
            <p className="max-w-2xl text-lg text-gray-400 leading-relaxed">
              Mahasiswa aktif D3 Teknologi Informasi Vokasi Universitas Brawijaya dengan IPK 3.83. Sangat menyukai kegiatan berorganisasi untuk menumbuhkan rasa kepemimpinan dan teamwork yang baik. Memiliki peminatan menjadi UI/UX Designer dan Web Developer (Front-end & Back-end).
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center space-x-3 text-sm">
              <Link href="https://instagram.com/ghabrielsagala" target="_blank" className="flex items-center space-x-2 bg-zinc-800 text-pink-400 hover:bg-zinc-700 transition px-4 py-1.5 rounded-full font-medium">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                <span>Instagram: ghabrielsagala</span>
              </Link>
              <Link href="https://www.linkedin.com/in/ghabriel-sagala-93bba027b" target="_blank" className="flex items-center space-x-2 bg-zinc-800 text-blue-400 hover:bg-zinc-700 transition px-4 py-1.5 rounded-full font-medium">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                <span>LinkedIn: Ghabriel Sagala</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#karya" className="bg-red-700 hover:bg-red-600 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-[0_0_15px_rgba(220,38,38,0.5)]">Lihat Karya</a>
              <a href="https://wa.me/6282218361690" target="_blank" className="border border-red-700 hover:bg-red-900/30 text-white px-8 py-3 rounded-full font-semibold transition-all">Hubungi Saya</a>
            </div>
          </div>
        </div>
      </section>

      {/* Karya Section */}
      <section id="karya" className="py-20 px-4 bg-zinc-950 scroll-mt-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 border-b-2 border-red-800 inline-block pb-2">Karya & Proyek</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div 
                key={project.id} 
                onClick={() => setSelectedProject(project)}
                className="bg-black border border-red-900/30 rounded-xl overflow-hidden hover:border-red-600 transition-colors group cursor-pointer"
              >
                <div className="relative h-48 bg-zinc-900 overflow-hidden">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-red-500 transition-colors">{project.title}</h3>
                  <p className="text-sm text-gray-400 mb-4">{project.shortDesc}</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-zinc-800 text-gray-300 px-3 py-1 rounded-full font-medium">{project.semester}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal / Popup Detail Karya */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-md p-4">
          <div className="bg-[#0f1219] border border-zinc-800 w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <div className="flex justify-between items-start p-6 border-b border-zinc-800">
              <h3 className="text-2xl font-bold text-white pr-8">{selectedProject.title}</h3>
              <button onClick={() => setSelectedProject(null)} className="text-gray-400 hover:text-white bg-zinc-800 hover:bg-red-600 p-2 rounded-full transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[70vh]">
              <div className="flex gap-2 mb-6 flex-wrap">
                {selectedProject.tech.map((t: string) => (
                  <span key={t} className="bg-zinc-800 text-xs px-3 py-1.5 rounded text-gray-300 border border-zinc-700">{t}</span>
                ))}
              </div>
              <div className="bg-[#1a1d24] p-5 rounded-xl border border-zinc-800 mb-6">
                <h4 className="text-yellow-500 font-bold text-sm mb-3">RINGKASAN PROJECT</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{selectedProject.fullDesc}</p>
              </div>
              <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden border border-zinc-800">
                <Image src={selectedProject.image} alt={selectedProject.title} fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Organisasi Section */}
      <section id="organisasi" className="py-20 px-4 bg-gradient-to-b from-zinc-950 to-black scroll-mt-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 border-b-2 border-red-800 inline-block pb-2">Pengalaman Organisasi & Kepanitiaan</h2>
          <div className="space-y-6">
            <div className="p-6 border-l-4 border-red-600 bg-zinc-900/50 rounded-r-lg">
              <h3 className="text-xl font-bold text-white">Ketua Komisi Pengawas & Standarisasi</h3>
              <p className="text-red-400 text-sm font-medium mb-2">HMPSTI Universitas Brawijaya Kabinet INNOVARA • 2026</p>
              <p className="text-gray-400 text-sm leading-relaxed">Bertanggung jawab dalam pengawasan dan standarisasi kinerja himpunan mahasiswa untuk memastikan setiap program kerja sejalan dengan tujuan organisasi.</p>
            </div>

            <div className="p-6 border-l-4 border-yellow-600 bg-zinc-900/50 rounded-r-lg">
              <div className="flex items-center gap-3 mb-1">
                <h3 className="text-xl font-bold text-white">Staff Magang (Best Internship)</h3>
                <span className="bg-yellow-900/50 text-yellow-500 text-xs px-2 py-1 rounded border border-yellow-700/50">Penghargaan</span>
              </div>
              <p className="text-red-400 text-sm font-medium mb-2">BEM Fakultas Vokasi UB, Kementerian PSDM • 2024</p>
              <p className="text-gray-400 text-sm leading-relaxed">Aktif dalam program pengembangan sumber daya mahasiswa dan dinobatkan sebagai Best Internship Staff atas dedikasi dan kinerja selama magang.</p>
            </div>

            <div className="p-6 border-l-4 border-red-600 bg-zinc-900/50 rounded-r-lg">
              <h3 className="text-xl font-bold text-white">Ketua Divisi Acara</h3>
              <p className="text-red-400 text-sm font-medium mb-2">PKKMB, Krida Mahasiswa, Open House Fakultas Vokasi UB • 2025</p>
              <p className="text-gray-400 text-sm leading-relaxed">Memimpin penyusunan konsep dan eksekusi rangkaian acara penyambutan mahasiswa baru yang melibatkan persiapan intensif selama 3 bulan.</p>
            </div>

            <div className="p-6 border-l-4 border-red-600 bg-zinc-900/50 rounded-r-lg">
              <h3 className="text-xl font-bold text-white">Wakil Ketua Divisi Acara</h3>
              <p className="text-red-400 text-sm font-medium mb-2">Program Abdi Desa • 2025</p>
              <p className="text-gray-400 text-sm leading-relaxed">Membantu pengelolaan susunan acara untuk kegiatan pengabdian kepada masyarakat dengan masa persiapan 1 bulan.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sertifikat Section */}
      <section id="sertifikat" className="py-20 px-4 bg-black scroll-mt-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 border-b-2 border-red-800 inline-block pb-2">Sertifikasi & Penghargaan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Sertifikat Microsoft */}
            <div className="flex flex-col sm:flex-row gap-4 bg-[#0d1017] p-5 rounded-xl border border-zinc-800 hover:border-red-800 transition group">
              <div className="w-full sm:w-1/3 h-32 relative rounded-lg overflow-hidden border border-zinc-700">
                <Image src="/sertifikatmicrosoft.jpeg" alt="Microsoft Desktop Application" fill className="object-cover group-hover:scale-105 transition-transform" />
              </div>
              <div className="w-full sm:w-2/3 flex flex-col justify-center">
                <span className="text-[10px] uppercase tracking-wider text-green-400 font-bold mb-1">Verified Credentials</span>
                <h3 className="font-bold text-white text-lg leading-tight mb-1">Microsoft Office Desktop Application</h3>
                <p className="text-xs text-yellow-500 font-medium mb-3">Trust Training Partners (Microsoft Partner)</p>
                <p className="text-xs text-gray-400">Sertifikasi kompetensi profesional berstandar tinggi yang merupakan kemitraan resmi dengan Universitas Brawijaya. (Terbit: 22 Agustus 2024)</p>
              </div>
            </div>

            {/* Sertifikat Gemini */}
            <div className="flex flex-col sm:flex-row gap-4 bg-[#0d1017] p-5 rounded-xl border border-zinc-800 hover:border-red-800 transition group">
              <div className="w-full sm:w-1/3 h-32 relative rounded-lg overflow-hidden border border-zinc-700 bg-zinc-900 flex items-center justify-center">
                <Image src="/sertifikatgemini.png" alt="Sertifikat Gemini" fill className="object-cover group-hover:scale-105 transition-transform" />
              </div>
              <div className="w-full sm:w-2/3 flex flex-col justify-center">
                <span className="text-[10px] uppercase tracking-wider text-blue-400 font-bold mb-1">AI Program</span>
                <h3 className="font-bold text-white text-lg leading-tight mb-1">Program Pelatihan Google Gemini</h3>
                <p className="text-xs text-blue-300 font-medium mb-3">Diselenggarakan oleh Google (Gemini)</p>
                <p className="text-xs text-gray-400">Sertifikat partisipasi dan penyelesaian program yang diadakan khusus oleh Gemini untuk membekali mahasiswa dengan teknologi Artificial Intelligence generasi terbaru.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 bg-black border-t border-red-900/50 text-center">
        <h2 className="text-2xl font-bold mb-6 text-white">Mari Berkolaborasi!</h2>
        <div className="flex justify-center space-x-6 mb-8 text-sm font-medium">
          <Link href="https://wa.me/6282218361690" target="_blank" className="text-gray-400 hover:text-green-500 transition-colors">WhatsApp</Link>
          <Link href="https://instagram.com/ghabrielsagala" target="_blank" className="text-gray-400 hover:text-pink-500 transition-colors">Instagram</Link>
          <Link href="https://www.linkedin.com/in/ghabriel-sagala-93bba027b" target="_blank" className="text-gray-400 hover:text-blue-500 transition-colors">LinkedIn</Link>
        </div>
        <p className="text-gray-600 text-sm">© {new Date().getFullYear()} Ghabriel Theo Petra Sagala.</p>
      </footer>
    </main>
  );
}