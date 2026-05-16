import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-red-900 selection:text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-red-900/30">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <span className="font-bold text-xl tracking-tighter">
            GHABRIEL<span className="text-red-600">.</span>
          </span>
          <div className="space-x-6 text-sm font-medium hidden md:block">
            <a href="#about" className="hover:text-red-500 transition-colors">Tentang</a>
            <a href="#karya" className="hover:text-red-500 transition-colors">Karya</a>
            <a href="#organisasi" className="hover:text-red-500 transition-colors">Organisasi</a>
            <a href="#sertifikat" className="hover:text-red-500 transition-colors">Sertifikat</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image that Blends */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/profile.jpg"
            alt="Ghabriel Theo Petra Sagala"
            fill
            className="object-cover object-top opacity-40 mix-blend-luminosity"
            priority
          />
          {/* Gradient Overlay (Black to Dark Red to Black) */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-red-950/70 to-black"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">
            Ghabriel Theo <br className="md:hidden" /> Petra Sagala
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
            <span className="text-red-500 font-semibold">UI/UX Designer</span> & <span className="text-red-500 font-semibold">Web Developer</span>
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#karya" className="bg-red-700 hover:bg-red-600 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-[0_0_15px_rgba(220,38,38,0.5)]">
              Lihat Karya
            </a>
            <a href="#contact" className="border border-red-700 hover:bg-red-900/30 text-white px-8 py-3 rounded-full font-semibold transition-all">
              Hubungi Saya
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gradient-to-b from-black to-zinc-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 border-b-2 border-red-800 inline-block pb-2">Tentang Saya</h2>
          <p className="text-gray-400 leading-relaxed text-lg">
            Saya adalah mahasiswa aktif D3 Teknologi Informasi di Fakultas Vokasi, Universitas Brawijaya dengan IPK 3.83. 
            Saya memiliki minat yang mendalam pada bidang <strong className="text-white">UI/UX Design</strong> dan <strong className="text-white">Web Development (Front-end & Back-end)</strong>. 
            Saya sangat menyukai kegiatan berorganisasi karena hal tersebut menumbuhkan rasa kepemimpinan dan kemampuan kerjasama tim (teamwork) yang solid untuk mencapai tujuan bersama.
          </p>
        </div>
      </section>

      {/* Karya Section */}
      <section id="karya" className="py-20 px-4 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 border-b-2 border-red-800 inline-block pb-2">Karya & Proyek</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Template Card Karya (Silakan di-copy sesuai jumlah karyamu) */}
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-black border border-red-900/30 rounded-xl overflow-hidden hover:border-red-600 transition-colors group">
                <div className="h-48 bg-zinc-900 flex items-center justify-center text-gray-600 group-hover:bg-red-950/20 transition-colors">
                  [ Gambar/Thumbnail Proyek {item} ]
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Nama Proyek {item}</h3>
                  <p className="text-sm text-gray-400 mb-4">Deskripsi singkat mengenai proyek web development atau desain UI/UX yang telah dibuat.</p>
                  <span className="text-xs bg-red-900/50 text-red-200 px-3 py-1 rounded-full">Next.js</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organisasi Section */}
      <section id="organisasi" className="py-20 px-4 bg-gradient-to-b from-zinc-950 to-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 border-b-2 border-red-800 inline-block pb-2">Pengalaman Organisasi</h2>
          <div className="space-y-6">
            {/* Template Organisasi */}
            <div className="p-6 border-l-4 border-red-600 bg-zinc-900/50 rounded-r-lg">
              <h3 className="text-xl font-bold">Ketua / Divisi [Nama Jabatan]</h3>
              <p className="text-red-400 text-sm font-medium mb-2">[Nama Organisasi] • [Tahun]</p>
              <p className="text-gray-400 text-sm">
                Memimpin tim dalam menjalankan program kerja, meningkatkan efisiensi komunikasi, dan berkolaborasi antar divisi untuk mencapai target organisasi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sertifikat Section */}
      <section id="sertifikat" className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 border-b-2 border-red-800 inline-block pb-2">Sertifikat</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center space-x-4 bg-zinc-900 p-4 rounded-lg border border-zinc-800">
              <div className="w-16 h-16 bg-red-950 rounded flex items-center justify-center font-bold text-red-500">📄</div>
              <div>
                <h3 className="font-bold">Sertifikat Kompetensi Web/UI UX</h3>
                <p className="text-sm text-gray-400">Penerbit: [Nama Lembaga] • [Tahun]</p>
              </div>
            </div>
            {/* Tambahkan sertifikat lain di sini */}
          </div>
        </div>
      </section>

      {/* Footer & Contact */}
      <footer id="contact" className="py-12 bg-black border-t border-red-900/50 text-center">
        <h2 className="text-2xl font-bold mb-6">Mari Berkolaborasi!</h2>
        <div className="flex justify-center space-x-6 mb-8">
          <Link href="https://wa.me/6282218361690" target="_blank" className="text-gray-400 hover:text-green-500 transition-colors">
            WhatsApp
          </Link>
          <Link href="https://instagram.com/ghabrielsagala" target="_blank" className="text-gray-400 hover:text-pink-500 transition-colors">
            Instagram
          </Link>
          <Link href="https://www.linkedin.com/in/ghabriel-sagala-93bba027b" target="_blank" className="text-gray-400 hover:text-blue-500 transition-colors">
            LinkedIn
          </Link>
        </div>
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Ghabriel Theo Petra Sagala. All rights reserved.
        </p>
      </footer>
    </main>
  );
}