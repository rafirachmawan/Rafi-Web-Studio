import DemoCard from "../cards/DemoCard";
import {
  LayoutGrid,
  Smartphone,
  Globe,
  MonitorSmartphone,
  Code2,
  PlayCircle,
  ArrowRight,
} from "lucide-react";

export default function DemoSection({ filter, setFilter, filtered }) {
  // CATEGORY
  const categories = [
    { label: "all", icon: LayoutGrid },
    { label: "landing page", icon: Globe },
    { label: "mobile app", icon: Smartphone },
    { label: "sistem berbasis web", icon: MonitorSmartphone },
    { label: "software", icon: Code2 },
  ];

  // MOBILE DEMO
  const mobileApps = [
    {
      title: "Attendance App",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
      desc: "QR attendance & realtime monitoring.",
    },
    {
      title: "Warehouse Mobile",
      image:
        "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",
      desc: "Inventory & barcode scanning system.",
    },
    {
      title: "POS Mobile",
      image:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
      desc: "Mobile cashier app for UMKM business.",
    },
  ];

  // FILTER LANDING PAGE
  const landingPageProjects = filtered.filter(
    (item) => item.category === "landing page" || item.category === "website",
  );

  return (
    <section className="relative mb-24 md:mb-32 overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[280px] md:w-[500px] h-[280px] md:h-[500px] bg-amber-500/10 blur-3xl rounded-full pointer-events-none" />

      {/* HEADER */}
      <div id="demo" className="relative max-w-4xl mx-auto text-center px-4">
        {/* BADGE */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-500 text-xs md:text-sm font-medium">
          🚀 Digital Project Showcase
        </div>

        {/* TITLE */}
        <h2 className="mt-6 text-3xl sm:text-4xl md:text-6xl font-black tracking-tight leading-[1.05] text-black dark:text-white">
          Demo Project &<span className="text-amber-500"> Solusi Digital</span>
        </h2>

        {/* DESCRIPTION */}
        <p className="mt-5 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          Kumpulan website, dashboard, sistem internal, aplikasi mobile, dan
          solusi digital yang dirancang untuk membantu workflow bisnis menjadi
          lebih modern, efisien, dan terintegrasi.
        </p>
      </div>

      {/* FILTER */}
      <div className="relative mt-10 md:mt-14 px-4">
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
          {categories.map((cat) => {
            const Icon = cat.icon;

            return (
              <button
                key={cat.label}
                onClick={() => setFilter(cat.label)}
                className={`
                  flex items-center gap-2
                  px-4 md:px-5
                  py-2.5
                  rounded-full
                  text-xs md:text-sm
                  font-medium
                  border
                  transition-all duration-300

                  ${
                    filter === cat.label
                      ? "bg-amber-500 border-amber-500 text-black shadow-lg shadow-amber-500/20"
                      : "bg-white dark:bg-white/[0.03] border-black/5 dark:border-white/10 text-zinc-700 dark:text-zinc-300 hover:border-amber-500/30 hover:bg-black/[0.02] dark:hover:bg-white/[0.05]"
                  }
                `}
              >
                <Icon size={15} />

                <span className="capitalize">{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* LANDING PAGE SECTION */}
      {(filter === "all" || filter === "landing page") && (
        <div className="relative mt-12 md:mt-14 px-4">
          {/* HEADER */}
          <div className="mb-6 md:mb-8">
            {/* BADGE */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-500 text-xs font-medium">
              🌐 Landing Page & Website
            </div>

            {/* TITLE */}
            <h3 className="mt-4 text-2xl md:text-3xl font-bold text-black dark:text-white leading-tight">
              Landing Page, Company Profile & Website
            </h3>

            {/* DESCRIPTION */}
            <p className="mt-3 max-w-2xl text-sm md:text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              Demo landing page modern untuk coffee shop, hotel, rental,
              sekolah, UMKM, company profile, dan berbagai kebutuhan bisnis
              lainnya dengan desain profesional, responsive, dan fokus pada
              branding serta konversi client.
            </p>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
            {landingPageProjects.map((demo, i) => (
              <DemoCard key={demo.id || i} demo={demo} index={i} />
            ))}
          </div>
        </div>
      )}

      {/* MOBILE APP SECTION */}
      {(filter === "all" || filter === "mobile app") && (
        <div className="relative mt-14 md:mt-16 px-4">
          {/* HEADER */}
          <div className="mb-6 md:mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-500 text-xs font-medium">
              📱 Mobile Application
            </div>

            <h3 className="mt-4 text-2xl md:text-3xl font-bold text-black dark:text-white leading-tight">
              Mobile App & PWA Preview
            </h3>

            <p className="mt-3 max-w-2xl text-sm md:text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              Demo aplikasi mobile dan Progressive Web App (PWA) yang dapat
              digunakan untuk absensi, inventory, barcode scanning, monitoring,
              dan kebutuhan operasional bisnis langsung dari perangkat mobile.
            </p>
          </div>

          {/* MOBILE GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {mobileApps.map((app, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[24px] border border-black/5 dark:border-white/10 bg-white dark:bg-white/[0.03]"
              >
                {/* IMAGE */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* PLAY BUTTON */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center hover:scale-110 transition-all duration-300">
                      <PlayCircle size={24} className="text-black ml-1" />
                    </button>
                  </div>

                  {/* CONTENT */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                    {/* BADGE */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500 text-black text-[11px] font-semibold">
                      PWA READY
                    </div>

                    {/* TITLE */}
                    <h4 className="mt-3 text-lg font-bold text-white">
                      {app.title}
                    </h4>

                    {/* DESC */}
                    <p className="mt-1 text-sm text-zinc-300 leading-relaxed">
                      {app.desc}
                    </p>

                    {/* BUTTON */}
                    <button className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-amber-400 hover:text-amber-300 transition-colors">
                      Watch Demo
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SISTEM BERBASIS WEB SECTION */}
      {(filter === "all" || filter === "sistem berbasis web") && (
        <div className="relative mt-14 md:mt-16 px-4">
          <div className="mb-6 md:mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-500 text-xs font-medium">
              🖥️ Sistem Berbasis Web
            </div>

            <h3 className="mt-4 text-2xl md:text-3xl font-bold text-black dark:text-white leading-tight">
              Sistem Berbasis Web & Dashboard
            </h3>

            <p className="mt-3 max-w-2xl text-sm md:text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              Demo sistem informasi berbasis web seperti dashboard admin,
              manajemen inventaris, sistem kasir (POS), ERP, CRM, dan berbagai
              platform internal yang terintegrasi untuk mendukung operasional
              bisnis secara efisien.
            </p>
          </div>

          <div className="rounded-[24px] border border-dashed border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.03] px-6 py-12 text-center">
            <div className="text-4xl">🖥️</div>

            <h3 className="mt-4 text-lg md:text-xl font-semibold text-black dark:text-white">
              Project Akan Segera Ditambahkan
            </h3>

            <p className="mt-3 max-w-lg mx-auto text-sm md:text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              Demo sistem berbasis web sedang dalam tahap pengembangan dan akan
              segera tersedia untuk demo client.
            </p>
          </div>
        </div>
      )}

      {/* SOFTWARE SECTION */}
      {(filter === "all" || filter === "software") && (
        <div className="relative mt-14 md:mt-16 px-4">
          <div className="mb-6 md:mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-500 text-xs font-medium">
              💻 Software
            </div>

            <h3 className="mt-4 text-2xl md:text-3xl font-bold text-black dark:text-white leading-tight">
              Software & Aplikasi Desktop
            </h3>

            <p className="mt-3 max-w-2xl text-sm md:text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              Demo software dan aplikasi desktop custom yang dirancang untuk
              kebutuhan spesifik bisnis, termasuk sistem antrian, kasir desktop,
              manajemen stok, dan solusi otomatisasi proses bisnis lainnya.
            </p>
          </div>

          <div className="rounded-[24px] border border-dashed border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.03] px-6 py-12 text-center">
            <div className="text-4xl">💻</div>

            <h3 className="mt-4 text-lg md:text-xl font-semibold text-black dark:text-white">
              Project Akan Segera Ditambahkan
            </h3>

            <p className="mt-3 max-w-lg mx-auto text-sm md:text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              Demo software sedang dalam tahap pengembangan dan akan segera
              tersedia untuk demo client.
            </p>
          </div>
        </div>
      )}

      {/* FOOTER TEXT */}
      <div className="relative mt-16 md:mt-20 max-w-2xl mx-auto text-center px-4">
        <p className="text-sm md:text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          Setiap sistem dirancang dengan pendekatan berbeda sesuai kebutuhan
          bisnis, efisiensi workflow, dan identitas brand perusahaan.
        </p>

        <div className="mt-8 flex justify-center">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
