import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050505]/95 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center px-6 py-4 md:px-10 gap-4">
        <Link href="/" className="font-extrabold text-2xl tracking-tighter text-zinc-100">
          GHABRIEL<span className="text-red-600">.</span>
        </Link>

        <nav className="flex justify-center flex-wrap gap-6 text-sm font-semibold text-zinc-300">
          {[
            { label: "Beranda", href: "/" },
            { label: "Portofolio", href: "/portfolio" },
            { label: "Organisasi", href: "/organisasi" },
            { label: "Sertifikat", href: "/sertifikat" }
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative px-1 py-2 transition-all duration-300 hover:text-white active:scale-95"
            >
              <span className="relative z-10">{item.label}</span>
              <span className="pointer-events-none absolute inset-x-0 -bottom-0.5 h-[2px] scale-x-0 bg-red-500 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
          ))}
        </nav>

        <div />
      </div>
    </header>
  );
}
