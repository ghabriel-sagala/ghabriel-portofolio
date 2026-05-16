import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-red-900 selection:text-white font-poppins">
      
      {/* Navbar - Logo Kiri, Tautan Tengah */}
      <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-lg border-b border-zinc-800">
        <div className="relative max-w-7xl mx-auto px-6 py-5 flex md:justify-center justify-between items-center">
          {/* Logo - Diposisikan Secara Absolut di Kiri (Untuk Desktop) */}
          <Link href="/" className="md:absolute md:left-6 font-extrabold text-2xl tracking-tighter text-zinc-300">
            GHABRIEL<span className="text-red-600">.</span>
          </Link>
          {/* Tautan Navigasi - Diposisikan Secara Flexbox di Tengah Halaman */}
          <div className="hidden md:flex justify-center space-x-8 text-sm font-medium text-zinc-400">
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
          <div className="flex flex-wrap items-center justify-between gap-12">
            
            {/* Sisi Kiri: Deskripsi Besar */}
            <div className="max-w-4xl flex flex-col space-y-6">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-zinc-300 leading-[1.1]">
                Ghabriel Theo <br /> Petra Sagala
              </h1>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-400 pt-4">
                Fullstack Web Developer <br className="hidden md:block"/> & Tech Enthusiast.
              </h2>
              
              <p className="max-w-2xl text-base md:text-lg text-zinc-500 leading-relaxed">
                Sangat menyukai kegiatan berorganisasi untuk menumbuhkan rasa kepemimpinan dan teamwork yang baik. Memiliki peminatan menjadi UI/UX Designer dan Web Developer (Front-end & Back-end).
              </p>

              {/* Area Tombol dan Sosmed */}
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
                  <Link href="https://instagram.com/ghabrielsagala" target="_blank" className="flex items-center gap-2 text-sm text-zinc-500 hover:text-pink-400 transition-colors font-medium">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    Instagram: @ghabrielsagala
                  </Link>
                  <Link href="https://www.linkedin.com/in/ghabriel-sagala-93bba027b" target="_blank" className="flex items-center gap-2 text-sm text-zinc-500 hover:text-blue-400 transition-colors font-medium">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    LinkedIn: Ghabriel Sagala
                  </Link>
                </div>
              </div>
            </div>

            {/* Sisi Kanan: Blok Informasi Pendidikan */}
            <div className="flex flex-col gap-6 md:items-end w-full md:w-auto">
              {/* Tag Pendidikan */}
              <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm">
                <span className="bg-white/10 backdrop-blur-sm border border-white/10 text-zinc-300 px-5 py-2 rounded-full font-medium">Mahasiswa D3 Teknologi Informasi Vokasi</span>
                <span className="bg-white/10 backdrop-blur-sm border border-white/10 text-zinc-300 px-5 py-2 rounded-full font-medium">Universitas Brawijaya</span>
              </div>
              
              {/* Tag IPK - Efek Interaktif */}
              <div className="group relative">
                <span className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-800 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-300"></span>
                <span className="relative bg-black border-2 border-red-900/50 text-green-400 group-hover:border-green-400 group-hover:bg-zinc-800 transition duration-300 text-base md:text-lg font-bold px-8 py-3 rounded-full inline-block">IPK: 3.83</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Bagian Lainnya (Diperbarui dengan Konten Penuh dan Font Silver) */}

      {/* Tentang Saya Section */}
      <section id="about" className="py-20 px-4 bg-gradient-to-b from-black to-zinc-950 scroll-mt-16 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-start justify-between gap-12">
          {/* Sisi Kiri: Deskripsi Tentang Saya */}
          <div className="w-full md:w-3/5">
            <h2 className="text-3xl font-bold mb-6 border-b-2 border-red-800 inline-block pb-2 text-zinc-300">Tentang Saya</h2>
            <p className="text-zinc-400 leading-relaxed text-lg">
              Saya adalah Ghabriel Sagala, mahasiswa aktif D3 Teknologi Informasi di Fakultas Vokasi, Universitas Brawijaya dengan IPK 3.83. 
              Saya memiliki minat yang mendalam pada bidang UI/UX Design dan Web Development (Front-end & Back-end). 
              Saya sangat menyukai kegiatan berorganisasi karena hal tersebut menumbuhkan rasa kepemimpinan dan kemampuan kerjasama tim (teamwork) yang solid untuk mencapai tujuan bersama.
            </p>
          </div>
          {/* Sisi Kanan: Pilar Peminatan */}
          <div className="w-full md:w-2/5 flex flex-col gap-6">
            <h3 className="text-2xl font-bold text-zinc-300">Pilar Peminatan</h3>
            <div className="flex flex-wrap gap-4">
              <span className="bg-red-950/30 text-red-400 border border-red-900/30 px-6 py-2.5 rounded-full font-semibold">UI/UX Design</span>
              <span className="bg-red-950/30 text-red-400 border border-red-900/30 px-6 py-2.5 rounded-full font-semibold">Web Development</span>
            </div>
          </div>
        </div>
      </section>

      {/* Karya Section (Penuh Konten) */}
      <section id="karya" className="py-20 px-4 bg-zinc-950 scroll-mt-16 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-10 border-b-2 border-red-800 inline-block pb-2 text-zinc-300">Karya & Proyek</h2>
            <p className="text-zinc-400 leading-relaxed">Berikut adalah beberapa proyek web development dan UI/UX yang telah saya kerjakan selama masa perkuliahan.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Proyek 1 */}
            <div className="bg-black border border-red-900/30 rounded-xl overflow-hidden hover:border-red-600 transition-colors group">
              <div className="h-48 bg-zinc-900 flex items-center justify-center text-gray-600 group-hover:bg-red-950/20 transition-colors">
                [ Gambar Wisata ]
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-zinc-300">Wisata Kampoeng Kadjoetangan Heritage</h3>
                <p className="text-sm text-zinc-400 mb-4">Website profil wisata berbasis Laravel (PHP). Proyek UAS Semester 3 dengan nilai A.</p>
                <span className="text-xs bg-red-950/50 text-red-200 px-3 py-1 rounded-full font-medium">Next.js</span>
              </div>
            </div>
            {/* Proyek 2 */}
            <div className="bg-black border border-red-900/30 rounded-xl overflow-hidden hover:border-red-600 transition-colors group">
              <div className="h-48 bg-zinc-900 flex items-center justify-center text-gray-600 group-hover:bg-red-950/20 transition-colors">
                [ Gambar Tabungan ]
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-zinc-300">Sistem Tabungan Mahasiswa</h3>
                <p className="text-sm text-zinc-400 mb-4">Aplikasi tabungan mahasiswa Native PHP. Gabungan tugas 3 mata kuliah Semester 2 dengan nilai A.</p>
                <span className="text-xs bg-red-950/50 text-red-200 px-3 py-1 rounded-full font-medium">PHP Native</span>
              </div>
            </div>
            {/* Proyek 3 */}
            <div className="bg-black border border-red-900/30 rounded-xl overflow-hidden hover:border-red-600 transition-colors group">
              <div className="h-48 bg-zinc-900 flex items-center justify-center text-gray-600 group-hover:bg-red-950/20 transition-colors">
                [ Gambar IoT ]
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-zinc-300">Dashboard Monitoring IoT</h3>
                <p className="text-sm text-zinc-400 mb-4">Interface monitoring data IoT. Proyek on-going (on development) di Semester 4.</p>
                <span className="text-xs bg-red-950/50 text-red-200 px-3 py-1 rounded-full font-medium">Next.js</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sertifikat Section (Penuh Konten) */}
      <section id="sertifikat" className="py-20 px-4 bg-gradient-to-b from-zinc-950 to-black scroll-mt-16 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-start justify-between gap-12">
          {/* Sisi Kiri: Deskripsi Sertifikasi */}
          <div className="w-full md:w-3/5">
            <h2 className="text-3xl font-bold mb-10 border-b-2 border-red-800 inline-block pb-2 text-zinc-300">Sertifikasi & Penghargaan</h2>
            <p className="text-zinc-400 leading-relaxed text-lg">
              Berikut adalah beberapa sertifikasi kompetensi profesional dan penghargaan yang telah saya raih untuk memvalidasi keahlian saya di bidang UI/UX Design dan Web Development.
            </p>
          </div>
          {/* Sisi Kanan: List Sertifikat */}
          <div className="w-full md:w-2/5 flex flex-col gap-6">
            <div className="flex items-center space-x-4 bg-zinc-900 p-4 rounded-lg border border-red-900/30">
              <div className="w-16 h-16 bg-zinc-800 rounded flex items-center justify-center font-bold text-green-400 text-2xl">V</div>
              <div>
                <h3 className="font-bold text-zinc-300 text-base">Microsoft Office Desktop Application</h3>
                <p className="text-sm text-zinc-400">Trust Training Partners (Microsoft Partner) • 22 Agustus 2024</p>
                <p className="text-xs text-green-400 font-bold pt-1">Verified Credentials</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 bg-zinc-900 p-4 rounded-lg border border-red-900/30">
              <div className="w-16 h-16 bg-zinc-800 rounded flex items-center justify-center font-bold text-zinc-300 text-2xl">📄</div>
              <div>
                <h3 className="font-bold text-zinc-300 text-base">Sertifikat Gemini</h3>
                <p className="text-sm text-zinc-400">Held by Gemini for students</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organisasi Section (Penuh Konten) */}
      <section id="organisasi" className="py-20 px-4 bg-black scroll-mt-16 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-start justify-between gap-12">
          {/* Sisi Kiri: Deskripsi Organisasi */}
          <div className="w-full md:w-3/5">
            <h2 className="text-3xl font-bold mb-10 border-b-2 border-red-800 inline-block pb-2 text-zinc-300">Pengalaman Organisasi & Kepanitiaan</h2>
            <p className="text-zinc-400 leading-relaxed text-lg">
              Melalui kegiatan organisasi dan kepanitiaan, saya telah mengembangkan rasa kepemimpinan yang kuat, kemampuan kerjasama tim (teamwork) yang solid, dan efisiensi dalam mencapai tujuan bersama.
            </p>
          </div>
          {/* Sisi Kanan: List Organisasi */}
          <div className="w-full md:w-2/5 flex flex-col gap-6">
            <div className="p-6 border-l-4 border-red-600 bg-zinc-900 rounded-r-lg">
              <h3 className="text-xl font-bold text-zinc-300">Ketua Komisi Pengawas & Standarisasi HMPSTI</h3>
              <p className="text-red-400 text-sm font-medium mb-2">Universitas Brawijaya Kabinet INNOVARA • 2026</p>
              <p className="text-zinc-400 text-sm leading-relaxed">Bertanggung jawab dalam pengawasan dan standarisasi kinerja himpunan mahasiswa untuk memastikan setiap program kerja sejalan dengan tujuan organisasi.</p>
            </div>
            <div className="p-6 border-l-4 border-red-600 bg-zinc-900 rounded-r-lg">
              <h3 className="text-xl font-bold text-zinc-300">Staff Magang PSDM BEM Fakultas Vokasi</h3>
              <p className="text-red-400 text-sm font-medium mb-2">Universitas Brawijaya • 2024</p>
              <p className="text-green-400 font-bold pt-1">Best internship staff Kementerian PSDM 2024</p>
            </div>
            <div className="p-6 border-l-4 border-red-600 bg-zinc-900 rounded-r-lg">
              <h3 className="text-xl font-bold text-zinc-300">Ketua Divisi Acara PKKMB, Krida Mahasiswa, Open House</h3>
              <p className="text-red-400 text-sm font-medium mb-2">Fakultas Vokasi Universitas Brawijaya • 2025</p>
              <p className="text-zinc-400 text-sm leading-relaxed">Memimpin penyusunan konsep dan eksekusi rangkaian acara penyambutan mahasiswa baru.</p>
            </div>
            <div className="p-6 border-l-4 border-red-600 bg-zinc-900 rounded-r-lg">
              <h3 className="text-xl font-bold text-zinc-300">Wakil Ketua Divisi Acara Program Abdi Desa</h3>
              <p className="text-red-400 text-sm font-medium mb-2">Program Abdi Desa Universitas Brawijaya • 2025</p>
              <p className="text-zinc-400 text-sm leading-relaxed">Membantu pengelolaan dan koordinasi Divisi Acara dalam program pengabdian kepada masyarakat.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer & Contact */}
      <footer id="contact" className="py-12 bg-black border-t border-zinc-800 text-center">
        <h2 className="text-2xl font-bold mb-6 text-zinc-300">Mari Berkolaborasi!</h2>
        <div className="flex justify-center space-x-6 mb-8 text-sm font-medium">
          <Link href="https://wa.me/6282218361690" target="_blank" className="text-zinc-500 hover:text-green-500 transition-colors">WhatsApp</Link>
          <Link href="https://instagram.com/ghabrielsagala" target="_blank" className="text-zinc-500 hover:text-pink-500 transition-colors">Instagram</Link>
          <Link href="https://www.linkedin.com/in/ghabriel-sagala-93bba027b" target="_blank" className="text-zinc-500 hover:text-blue-500 transition-colors">LinkedIn</Link>
        </div>
        <p className="text-zinc-600 text-sm">© {new Date().getFullYear()} Ghabriel Theo Petra Sagala.</p>
      </footer>
    </main>
  );
}