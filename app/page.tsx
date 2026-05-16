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
    <main className={`${poppins.className} min-h-screen bg-[#050505] text-white selection:bg-red-900 selection:text-white`}>
      
      {/* Navbar - Tautan Navigasi Dipindahkan ke Tengah Halaman */}
      <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-lg border-b border-white/5">
        <div className="relative max-w-7xl mx-auto px-6 py-5 flex md:justify-center justify-between items-center">
          {/* Logo - Diposisikan Secara Absolut di Kiri (Untuk Desktop) */}
          <Link href="/" className="md:absolute md:left-6 font-extrabold text-2xl tracking-tighter">
            GHABRIEL<span className="text-red-600">.</span>
          </Link>
          {/* Tautan Navigasi - Diposisikan Secara Flexbox di Tengah Halaman */}
          <div className="hidden md:flex justify-center space-x-8 text-sm font-medium text-gray-300">
            <a href="#about" className="hover:text-white hover:underline decoration-red-600 underline-offset-8 transition-all">Tentang</a>
            <a href="#karya" className="hover:text-white hover:underline decoration-red-600 underline-offset-8 transition-all">Karya</a>
            <a href="#organisasi" className="hover:text-white hover:underline decoration-red-600 underline-offset-8 transition-all">Organisasi</a>
            <a href="#sertifikat" className="hover:text-white hover:underline decoration-red-600 underline-offset-8 transition-all">Sertifikat</a>
          </div>
        </div>
      </nav>

      {/* Hero Section (Presisi 1 Layar Penuh) */}
      <section id="hero" className="relative w-full h-screen flex items-center overflow-hidden">
        {/* Background Image & Gradient */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/profile.jpg"
            alt="Ghabriel Theo Petra Sagala"
            fill
            className="object-cover object-top opacity-30 mix-blend-luminosity scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-red-950/40 to-[#050505]"></div>
        </div>

        {/* Konten Hero - Dirapihkan Hierarkinya */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-20">
          <div className="max-w-4xl flex flex-col space-y-6">
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-[1.1]">
              Ghabriel Theo <br /> Petra Sagala
            </h1>
            
            {/* Tag Pendidikan - Rapi di satu baris/wrap tersendiri */}
            <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm pt-2">
              <span className="bg-white/10 backdrop-blur-sm border border-white/10 text-gray-200 px-5 py-2 rounded-full font-medium">Mahasiswa D3 Teknologi Informasi Vokasi</span>
              <span className="bg-white/10 backdrop-blur-sm border border-white/10 text-gray-200 px-5 py-2 rounded-full font-medium">Universitas Brawijaya</span>
              <span className="bg-green-500/10 border border-green-500/20 text-green-400 px-5 py-2 rounded-full font-bold">IPK: 3.83</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-300 pt-4">
              Fullstack Web Developer <br className="hidden md:block"/> & Tech Enthusiast.
            </h2>
            
            <p className="max-w-2xl text-base md:text-lg text-gray-400 leading-relaxed">
              Sangat menyukai kegiatan berorganisasi untuk menumbuhkan rasa kepemimpinan dan teamwork yang baik. Memiliki peminatan menjadi UI/UX Designer dan Web Developer (Front-end & Back-end).
            </p>

            {/* Area Tombol dan Sosmed (Dipisah agar tidak berantakan) */}
            <div className="pt-8 flex flex-col sm:flex-row items-start gap-6">
              {/* Tombol Utama */}
              <div className="flex items-center gap-4">
                <a href="#karya" className="bg-red-700 hover:bg-red-600 text-white px-8 py-3.5 rounded-full font-semibold transition-all shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)]">
                  Lihat Karya
                </a>
                <a href="https://wa.me/6282218361690" target="_blank" className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-3.5 rounded-full font-semibold transition-all">
                  Hubungi Saya
                </a>
              </div>

              {/* Garis Pemisah Vertikal (Desktop) */}
              <div className="hidden sm:block w-px h-12 bg-white/10 mx-2"></div>

              {/* Link Sosial Media */}
              <div className="flex flex-col gap-3 justify-center">
                <Link href="https://instagram.com/ghabrielsagala" target="_blank" className="flex items-center gap-2 text-sm text-gray-400 hover:text-pink-400 transition-colors font-medium">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  Instagram: @ghabrielsagala
                </Link>
                <Link href="https://www.linkedin.com/in/ghabriel-sagala-93bba027b" target="_blank" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors font-medium">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  LinkedIn: Ghabriel Sagala
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Karya Section */}
      <section id="karya" className="py-32 px-6 bg-[#0a0a0c] scroll-mt-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Karya & Proyek<span className="text-red-600">.</span></h2>
            <p className="text-gray-400 max-w-2xl">Beberapa proyek web development dan UI/UX yang telah saya kerjakan selama masa perkuliahan.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id} 
                onClick={() => setSelectedProject(project)}
                className="bg-[#121214] border border-white/5 rounded-2xl overflow-hidden hover:border-red-600/50 transition-all duration-300 group cursor-pointer hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-900/20"
              >
                <div className="relative h-56 bg-zinc-900 overflow-hidden">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121214] to-transparent opacity-80"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-red-500 transition-colors leading-snug">{project.title}</h3>
                  <p className="text-base text-gray-400 mb-6 line-clamp-2">{project.shortDesc}</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-red-950/30 text-red-400 border border-red-900/30 px-4 py-1.5 rounded-full font-semibold">{project.semester}</span>
                    <span className="text-xs bg-white/5 text-gray-300 border border-white/10 px-4 py-1.5 rounded-full font-medium">{project.tech[0]}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal / Popup Detail Karya */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 md:p-8">
          <div className="bg-[#0f0f11] border border-white/10 w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center p-6 md:p-8 border-b border-white/5">
              <h3 className="text-2xl md:text-3xl font-bold text-white pr-8">{selectedProject.title}</h3>
              <button onClick={() => setSelectedProject(null)} className="text-gray-400 hover:text-white bg-white/5 hover:bg-red-600 p-3 rounded-full transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>
            <div className="p-6 md:p-8 overflow-y-auto max-h-[75vh]">
              <div className="flex gap-2 mb-8 flex-wrap">
                {selectedProject.tech.map((t: string) => (
                  <span key={t} className="bg-white/5 text-sm px-4 py-1.5 rounded-full text-gray-300 border border-white/10 font-medium">{t}</span>
                ))}
                <span className="bg-green-500/10 text-sm px-4 py-1.5 rounded-full text-green-400 border border-green-500/20 font-bold">{selectedProject.grade}</span>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/5 mb-8">
                <h4 className="text-red-500 font-bold text-sm mb-3 tracking-widest uppercase">Ringkasan Project</h4>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">{selectedProject.fullDesc}</p>
              </div>
              <div className="relative h-64 md:h-[450px] w-full rounded-2xl overflow-hidden border border-white/10">
                <Image src={selectedProject.image} alt={selectedProject.title} fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Organisasi Section (Diperbesar agar memenuhi ruang) */}
      <section id="organisasi" className="py-32 px-6 bg-[#050505] scroll-mt-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Pengalaman Organisasi<span className="text-red-600">.</span></h2>
            <p className="text-gray-400 max-w-2xl">Rekam jejak kepemimpinan dan kepanitiaan selama di Universitas Brawijaya.</p>
          </div>

          {/* Menggunakan Grid 2 Kolom agar layar penuh dan besar */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            
            {/* Card 1 */}
            <div className="group relative bg-[#0a0a0c] p-8 md:p-10 rounded-3xl border border-white/5 hover:border-red-600/50 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-red-700"></div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors">Ketua Komisi Pengawas & Standarisasi</h3>
              <p className="text-red-400 font-semibold mb-6">HMPSTI Universitas Brawijaya Kabinet INNOVARA • 2026</p>
              <p className="text-gray-400 text-lg leading-relaxed">Bertanggung jawab penuh dalam pengawasan dan standarisasi kinerja himpunan mahasiswa untuk memastikan setiap program kerja sejalan dengan visi dan tujuan organisasi.</p>
            </div>

            {/* Card 2 (Penghargaan) */}
            <div className="group relative bg-[#0a0a0c] p-8 md:p-10 rounded-3xl border border-white/5 hover:border-yellow-600/50 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-yellow-600"></div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-2">
                <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-yellow-500 transition-colors">Staff Magang PSDM</h3>
                <span className="w-fit bg-yellow-500/10 text-yellow-500 text-sm px-4 py-1.5 rounded-full border border-yellow-500/20 font-bold">⭐ Best Internship</span>
              </div>
              <p className="text-yellow-500/80 font-semibold mb-6">BEM Fakultas Vokasi UB • 2024</p>
              <p className="text-gray-400 text-lg leading-relaxed">Aktif dalam program pengembangan sumber daya mahasiswa dan dinobatkan sebagai Best Internship Staff atas dedikasi serta kinerja yang maksimal selama magang.</p>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-[#0a0a0c] p-8 md:p-10 rounded-3xl border border-white/5 hover:border-red-600/50 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-red-700"></div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors">Ketua Divisi Acara</h3>
              <p className="text-red-400 font-semibold mb-6">PKKMB, Krida Mahasiswa, Open House Vokasi UB • 2025</p>
              <p className="text-gray-400 text-lg leading-relaxed">Memimpin penyusunan konsep dan eksekusi rangkaian acara penyambutan mahasiswa baru yang melibatkan persiapan intensif dan kolaborasi tim selama 3 bulan penuh.</p>
            </div>

            {/* Card 4 */}
            <div className="group relative bg-[#0a0a0c] p-8 md:p-10 rounded-3xl border border-white/5 hover:border-red-600/50 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-red-700"></div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors">Wakil Ketua Divisi Acara</h3>
              <p className="text-red-400 font-semibold mb-6">Program Abdi Desa • 2025</p>
              <p className="text-gray-400 text-lg leading-relaxed">Membantu pengelolaan dan perancangan susunan acara untuk kegiatan pengabdian kepada masyarakat dengan masa persiapan dan pengerjaan selama 1 bulan.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Sertifikat Section */}
      <section id="sertifikat" className="py-32 px-6 bg-[#0a0a0c] scroll-mt-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Sertifikasi & Penghargaan<span className="text-red-600">.</span></h2>
            <p className="text-gray-400 max-w-2xl">Validasi keahlian melalui sertifikasi dari perusahaan teknologi terkemuka.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Sertifikat Microsoft */}
            <div className="flex flex-col sm:flex-row gap-6 bg-[#121214] p-6 rounded-3xl border border-white/5 hover:border-red-800 transition-all duration-300 group">
              <div className="w-full sm:w-2/5 h-48 sm:h-auto relative rounded-2xl overflow-hidden border border-white/10">
                <Image src="/sertifikatmicrosoft.jpeg" alt="Microsoft" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="w-full sm:w-3/5 flex flex-col justify-center py-2">
                <span className="w-fit bg-green-500/10 text-green-400 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">Verified Credentials</span>
                <h3 className="font-bold text-white text-xl md:text-2xl leading-tight mb-2">Microsoft Office Desktop Application</h3>
                <p className="text-sm text-yellow-500 font-semibold mb-4">Trust Training Partners (Microsoft Partner)</p>
                <p className="text-sm text-gray-400 leading-relaxed">Sertifikasi kompetensi profesional berstandar tinggi yang merupakan kemitraan resmi dengan Universitas Brawijaya. Terbit: 22 Agustus 2024.</p>
              </div>
            </div>

            {/* Sertifikat Gemini */}
            <div className="flex flex-col sm:flex-row gap-6 bg-[#121214] p-6 rounded-3xl border border-white/5 hover:border-red-800 transition-all duration-300 group">
              <div className="w-full sm:w-2/5 h-48 sm:h-auto relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-900">
                <Image src="/sertifikatgemini.png" alt="Gemini" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="w-full sm:w-3/5 flex flex-col justify-center py-2">
                <span className="w-fit bg-blue-500/10 text-blue-400 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">AI Program</span>
                <h3 className="font-bold text-white text-xl md:text-2xl leading-tight mb-2">Program Pelatihan Google Gemini</h3>
                <p className="text-sm text-blue-400 font-semibold mb-4">Diselenggarakan oleh Google (Gemini)</p>
                <p className="text-sm text-gray-400 leading-relaxed">Sertifikat partisipasi dan penyelesaian program yang diadakan khusus oleh Gemini untuk membekali mahasiswa dengan teknologi Artificial Intelligence.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-[#050505] border-t border-white/5 text-center">
        <h2 className="text-3xl font-bold mb-8 text-white">Mari Berkolaborasi!</h2>
        <div className="flex justify-center gap-6 mb-10">
          <Link href="https://wa.me/6282218361690" target="_blank" className="bg-white/5 hover:bg-green-600 text-white px-6 py-3 rounded-full font-medium transition-all">WhatsApp</Link>
          <Link href="https://instagram.com/ghabrielsagala" target="_blank" className="bg-white/5 hover:bg-pink-600 text-white px-6 py-3 rounded-full font-medium transition-all">Instagram</Link>
          <Link href="https://www.linkedin.com/in/ghabriel-sagala-93bba027b" target="_blank" className="bg-white/5 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium transition-all">LinkedIn</Link>
        </div>
        <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Ghabriel Theo Petra Sagala. Dibuat dengan Next.js & Tailwind CSS.</p>
      </footer>
    </main>
  );
}