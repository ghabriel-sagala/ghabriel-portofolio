import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import Certificates from "@/components/Certificates";
import ProjectShowcase from "@/components/ProjectShowcase";
import GitHubProfileCard from "@/components/GitHubProfileCard";

// --- DATA ---

const pengalamanData = [
  {
    id: "exp1",
    title: "Software Engineer Intern",
    subtitle: "Dinas Komunikasi dan Informatika Kota Malang",
    period: "Agu 2026 - Sekarang",
    fullDesc:
      "Mengembangkan platform web 'Malang Mbois' dengan merekreasi aplikasi berbasis seluler menjadi versi web yang lebih terintegrasi dan responsif. Membangun fitur peta interaktif berbasis LeafletJS untuk mengagregasi dan memantau seluruh tayangan CCTV publik di Kota Malang secara real-time dalam satu portal web terpusat.",
  },
];

const organisasiData = [
  {
    id: "org1",
    title: "Ketua Komisi Pengawas & Standarisasi",
    subtitle: "HMPSTI Universitas Brawijaya",
    period: "Feb 2026 - Des 2026",
    fullDesc:
      "Memegang mandat kepemimpinan di jajaran inti eksekutif untuk merancang kerangka pemantauan organisasi. Mengoordinasikan kinerja tim BPH dan divisi secara langsung. Bertanggung jawab penuh dalam mengaudit akuntabilitas internal serta menyukseskan program krusial.",
  },
  {
    id: "org2",
    title: "Kepala Divisi Acara — PKKMB",
    subtitle: "Fakultas Vokasi Universitas Brawijaya",
    period: "Agu 2025 - Nov 2025",
    fullDesc:
      'Menggagas dan memimpin pelaksanaan orientasi fakultas (tema "Adaptive: Ready to move, Strong to lead"). Mengkoordinasikan susunan acara untuk ribuan mahasiswa baru dengan mengintegrasikan konsep inovasi produk digital, serta berhasil menjaga tingkat interaksi dan kepuasan peserta secara maksimal.',
  },
  {
    id: "org3",
    title: "Wakil Kepala Divisi Acara — Abdi Desa",
    subtitle: "Fakultas Vokasi Universitas Brawijaya",
    period: "2025",
    fullDesc:
      "Merevolusi konsep acara puncak (grand finale) pengabdian masyarakat dengan mengintegrasikan elemen pertunjukan inovatif. Menetapkan standar baru untuk acara pengabdian masyarakat di masa depan dengan peningkatan keterlibatan signifikan antara mahasiswa dan warga desa.",
  },
  {
    id: "org4",
    title: "Master of Ceremony — Finale Abdi Desa",
    subtitle: "Desa Amandanom",
    period: "2025",
    fullDesc:
      "Menjadi pembawa acara utama untuk acara puncak, memastikan komunikasi yang jelas dan memberikan hiburan yang menarik bagi beragam audiens. Berkolaborasi erat dengan divisi acara untuk menjaga antusiasme tanpa adanya momen hening (dead-air).",
  },
  {
    id: "org5",
    title: "Master of Ceremony — Perayaan Paskah",
    subtitle: "PMK Vokasi x Level Up Blitar x GBI",
    period: "2026",
    fullDesc:
      "Memfasilitasi acara kolaborasi lintas institusi berskala besar secara real-time. Menjaga keseimbangan suasana khusyuk dan interaksi penuh energi, serta berkomunikasi aktif dengan tim teknis untuk menyelaraskan transisi di lapangan.",
  },
  {
    id: "org6",
    title: "Staf Magang HRD Terbaik",
    subtitle: "BEM Fakultas Vokasi Universitas Brawijaya",
    period: "Okt 2024 - Des 2024",
    fullDesc:
      'Dianugerahi penghargaan "Staf Magang Terbaik" atas kinerja luar biasa pada inisiatif SDM. Berperan aktif menyusun kurikulum pengembangan kompetensi kepemimpinan mahasiswa dan secara komprehensif membantu pelaksanaan orientasi staf.',
  },
];

const proyekData = [
  {
    id: "proj8",
    title: "Malang Mbois",
    role: "Backend Developer",
    tech: ["Laravel", "Leaflet.js"],
    category: "Web Development",
    shortDesc:
      "Website ini merupakan proyek skala besar yang saya kembangkan selama masa magang di Dinas Komunikasi dan Informatika (Diskominfo) Kota Malang.",
    image: "/Malang-Mbois.png",
  },
  {
    id: "proj7",
    title: "Website Kopi Ruang - Company Profile",
    tech: ["HTML", "CSS"],
    category: "Web Development",
    shortDesc:
      "Sebuah studi kasus dan proyek konsep pembuatan website company profile untuk cafe Kopi Ruang. Dibuat untuk mengeksplorasi perancangan UI yang intuitif, struktur HTML/CSS yang bersih, serta penerapan praktik dasar SEO.",
    image: "/Webkopiruang.png",
  },
  {
    id: "proj1",
    title: "Kampoeng Kadjoetangan - E-Tourism",
    tech: ["Laravel", "PHP", "MySQL", "System Arch"],
    category: "Web Development",
    shortDesc:
      "Platform pariwisata digital dengan perancangan arsitektur perangkat lunak terstruktur, UML Use Case, dan integrasi tiket aman.",
    image: "/websitewisata.jpg",
  },
  {
    id: "proj2",
    title: "MineFleet & Management",
    tech: ["PHP", "MySQL", "Bootstrap", "JS"],
    category: "Information System",
    shortDesc:
      "Platform manajemen armada perusahaan untuk memantau utilitas kendaraan, persetujuan transportasi, dan jadwal perawatan.",
    image: "/management-rt.png",
  },
  {
    id: "proj3",
    title: "TaskMate Productivity",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "Web Application",
    shortDesc:
      "Platform produktivitas untuk manajemen tugas efisien. Menetapkan prioritas tugas, tenggat waktu, dengan antarmuka dashboard analitik interaktif.",
    image: "/taskmate.jpg",
  },
  {
    id: "proj4",
    title: "EcoScan AI Detection",
    tech: ["Python", "AI / ML", "TensorFlow"],
    category: "Artificial Intelligence",
    shortDesc:
      "Model kecerdasan buatan untuk mengklasifikasikan pola visual sampah secara instan dan membantu inisiatif keberlanjutan lingkungan.",
    image: "/EcoScan AI.png",
  },
  {
    id: "proj5",
    title: "IoT Real-Time Dashboard",
    tech: ["C++", "ESP32", "Next.js", "MQTT"],
    category: "Internet of Things",
    shortDesc:
      "Antarmuka pemantauan real-time untuk jaringan perangkat sensor IoT dengan visualisasi metrik data dan logika otomasi yang efisien.",
    image: "/dashboardmonitoringIoT.png",
  },
  {
    id: "proj6",
    title: "Tabungan Mahasiswa",
    tech: ["Laravel", "MySQL", "Bootstrap"],
    category: "Financial System",
    shortDesc:
      "Sistem manajemen keuangan khusus mahasiswa untuk melacak arus kas, memantau riwayat simpanan, dan membuat laporan pengeluaran.",
    image: "/websitetabunganmahasiswa.png",
  },
];

const sertifikatData = [
  {
    id: 1,
    title: "Google Gemini - AI Generatif",
    org: "Google for Education",
    date: "Mei 2026 - Mei 2029",
    description:
      "Sertifikasi pemahaman mendalam tentang teknik prompting dan pemanfaatan AI generatif tingkat universitas.",
    image: "/sertifikatgemini.jpg",
  },
  {
    id: 2,
    title: "Pengembangan Berbasis Spesifikasi",
    org: "Dicoding x Kiro",
    date: "Mei 2026 - Mei 2029",
    description:
      "Kompetensi teknis arsitektur perangkat lunak, penyusunan requirements, dan praktik SDLC standar industri.",
    image: "/Sertifikatdicoding.png",
  },
  {
    id: 3,
    title: "AWS Cloud Practitioner",
    org: "Dicoding Indonesia",
    date: "Jul 2026 - Jul 2029",
    description:
      "Pemahaman model komputasi cloud, deployment infrastruktur, arsitektur dasar, dan keamanan lingkungan AWS.",
    image: "/sertifikatgenaws.png",
  },
  {
    id: 4,
    title: "Dasar Pemrograman Python",
    org: "Dicoding Indonesia",
    date: "Jul 2026 - Jul 2029",
    description:
      "Fondasi logika algoritma, manipulasi struktur data, kontrol alur, dan pemecahan masalah secara komputasional.",
    image: "/sertifikatdasarpython.png",
  },
  {
    id: 5,
    title: "Aplikasi Desktop Microsoft Office",
    org: "Trust Training Partners",
    date: "Agu 2024",
    description:
      "Verifikasi pengoperasian perangkat lunak administratif tingkat lanjut untuk pemrosesan dokumen dan manajemen basis data.",
    image: "/sertifikatmicrosoft.jpg",
  },
  {
    id: 6,
    title: "Sertifikat Financial",
    org: "Professional Certification",
    date: "2024",
    description:
      "Sertifikasi kompetensi di bidang analisis dan pengelolaan keuangan profesional.",
    image: "",
    pdf: "/sertifikatfinancial.pdf",
  },
  {
    id: 7,
    title: "Sertifikat SQL",
    org: "Database Certification",
    date: "2024",
    description:
      "Verifikasi kompetensi dalam query SQL tingkat lanjut, optimasi database, dan manajemen data terstruktur.",
    image: "",
    pdf: "/sertifikatsql.pdf",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <Hero />

      {/* ABOUT */}
      <section
        id="about"
        className="border-t border-white/6 scroll-mt-20"
      >
        <About />
      </section>

      {/* SKILLS */}
      <div id="skills" className="scroll-mt-20">
        <Skills />
      </div>

      {/* EXPERIENCE & TIMELINE */}
      <div id="pengalaman" className="scroll-mt-20">
        <Timeline title="Experience" items={pengalamanData} />
        <Timeline title="Organization & Leadership" items={organisasiData} />
      </div>

      {/* PROJECTS */}
      <div id="projects" className="scroll-mt-20">
        <ProjectShowcase projects={proyekData} />
      </div>

      {/* CERTIFICATES */}
      <div id="sertifikat" className="scroll-mt-20">
        <Certificates certificates={sertifikatData} />
      </div>

      {/* CONTACT */}
      <section
        id="contact"
        className="scroll-mt-20"
      >
        <Contact />
      </section>

      {/* GITHUB PROFILE CARD */}
      <div id="github" className="scroll-mt-20">
        <GitHubProfileCard />
      </div>
    </>
  );
}
