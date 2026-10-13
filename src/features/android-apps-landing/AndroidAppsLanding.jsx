import {
  Smartphone,
  Globe,
  Shield,
  ChevronRight,
  Star,
  CheckCircle,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import CleanPlaceholder from "../../components/ui/CleanPlaceholder";

// Data for Android apps
const androidApps = [
  {
    id: "marketpos",
    name: "MarketPos",
    desc: "Point of Sales (POS)",
    category: "POINT OF SALES (POS)",
    price: "IDR 100.000",
    popular: true,
    description:
      "Aplikasi kasir modern untuk UMKM & ritel dengan cetak struk dan laporan harian.",
    features: ["Cetak Struk Bluetooth", "Manajemen Stok", "Laporan Transaksi"],
  },
  {
    id: "financeku",
    name: "Financeku",
    desc: "Personal Finance",
    category: "PERSONAL FINANCE",
    price: "IDR 25.000",
    popular: false,
    description:
      "Pencatatan cash flow harian dan tracking pengeluaran personal yang praktis.",
    features: ["Budget Tracker", "Grafik Pengeluaran", "Export Data"],
  },
  {
    id: "belajarceria",
    name: "Belajar Ceria Anak",
    desc: "Education & Kids",
    category: "EDUCATION & KIDS",
    price: "IDR 25.000",
    popular: false,
    description:
      "Media edukasi interaktif anak usia 2-4 tahun: warna, bentuk, dan angka.",
    features: ["Audio Interaktif", "Visual Menarik", "Aman Tanpa Iklan"],
  },
  {
    id: "hijalearn",
    name: "HijaLearn",
    desc: "Islamic Learning",
    category: "ISLAMIC LEARNING",
    price: "IDR 25.000",
    popular: false,
    description:
      "Belajar huruf hijaiyah, harakat, dan dasar tajwid yang menyenangkan.",
    features: ["Audio Pelafalan", "Kuis Huruf", "Tampilan Ramah Anak"],
  },
];

// Section Components
const HeroSection = () => {
  return (
    <section
      id="home"
      className="pt-6 md:pt-10 pb-12 md:pb-16 overflow-hidden bg-transparent"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 text-amber-600 dark:text-amber-400 text-[11px] sm:text-xs font-semibold mb-5 shadow-sm backdrop-blur-md">
          <Smartphone className="w-3.5 h-3.5 text-amber-500" />
          <span>Ready-to-Use Android Applications</span>
        </div>

        <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.15] text-zinc-900 dark:text-white max-w-2xl text-center font-heading">
          <span>Aplikasi Android </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 font-extrabold">
            siap pakai.
          </span>
        </h1>

        <p className="mt-4 text-xs sm:text-sm md:text-base leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-xl text-center font-normal">
          Aplikasi Android siap pakai untuk kasir, keuangan, dan edukasi —
          harga terjangkau, langsung download.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 mt-7 justify-center w-full sm:w-auto">
          <a
            href="#apps"
            className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-orange-500 text-white px-6 py-3 rounded-full text-xs md:text-sm font-bold transition-all duration-300 hover:scale-[1.03] shadow-lg shadow-amber-500/20 active:scale-95 inline-flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            Lihat Aplikasi
            <ChevronRight className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200 dark:border-white/10 px-6 py-3 rounded-full text-xs md:text-sm font-bold text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-white/10 transition-all duration-300 active:scale-95 inline-flex items-center justify-center w-full sm:w-auto shadow-sm"
          >
            Konsultasi Gratis
          </a>
        </div>

        {/* Stats — subtle, single row */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-3 pt-6 mt-10 border-t border-zinc-200/80 dark:border-white/10">
          <div className="flex flex-col items-center gap-0.5">
            <span className="text-base md:text-lg font-extrabold text-zinc-900 dark:text-white">
              {androidApps.length}
            </span>
            <span className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400">
              Aplikasi Siap Pakai
            </span>
          </div>
          <div className="flex flex-col items-center gap-0.5">
            <span className="text-base md:text-lg font-extrabold text-zinc-900 dark:text-white">
              100%
            </span>
            <span className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400">
              Working Code
            </span>
          </div>
          <div className="flex flex-col items-center gap-0.5">
            <span className="text-base md:text-lg font-extrabold text-zinc-900 dark:text-white">
              APK
            </span>
            <span className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400">
              Native Android
            </span>
          </div>
          <div className="flex flex-col items-center gap-0.5">
            <span className="text-base md:text-lg font-extrabold text-zinc-900 dark:text-white">
              24/7
            </span>
            <span className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400">
              Support
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

const AppsSection = () => {
  return (
    <section id="apps" className="py-12 md:py-16 bg-transparent scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-[11px] font-bold tracking-widest uppercase mb-4">
            <Smartphone size={14} />
            <span>Produk Siap Pakai</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight font-heading leading-tight text-zinc-900 dark:text-white">
            Aplikasi siap pakai.
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400 text-xs md:text-sm leading-relaxed max-w-xl mx-auto">
            4 aplikasi Android siap download — POS, keuangan, dan edukasi anak
            via Lynk.id.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {androidApps.map((app) => (
            <div
              key={app.id}
              className="group relative flex flex-col h-full rounded-2xl bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800/80 hover:border-amber-500/40 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {app.popular && (
                <div className="absolute top-3 right-3 z-20 flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500 text-zinc-950 font-bold text-[10px] tracking-wider uppercase shadow-md">
                  <Sparkles size={11} className="fill-current" />
                  <span>Terpopuler</span>
                </div>
              )}

              <div className="relative w-full h-40 bg-zinc-100 dark:bg-zinc-800/60 overflow-hidden flex items-center justify-center">
                <div className="w-full h-full p-2.5 flex items-center justify-center">
                  <CleanPlaceholder
                    width={600}
                    height={400}
                    ratio="3:2"
                    label={app.name}
                    sublabel={app.desc}
                    icon={Smartphone}
                    className="h-full !p-3"
                  />
                </div>
                <div className="absolute bottom-2.5 left-2.5 z-10 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-900/85 backdrop-blur-md text-white text-[10px] font-medium border border-zinc-700/50">
                  <Smartphone size={11} className="text-amber-400" />
                  <span>Android APK</span>
                </div>
              </div>

              <div className="flex flex-col flex-grow p-4">
                <span className="text-[10px] font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-1">
                  {app.category}
                </span>
                <h3 className="text-base font-bold text-zinc-900 dark:text-white group-hover:text-amber-500 transition-colors mb-1.5">
                  {app.name}
                </h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-2 mb-3 flex-grow">
                  {app.description}
                </p>
                <div className="space-y-1.5 mb-4 pt-3 border-t border-zinc-100 dark:border-zinc-800/60">
                  {app.features.map((feat, fIdx) => (
                    <div
                      key={fIdx}
                      className="flex items-center gap-1.5 text-[11px] text-zinc-500 dark:text-zinc-400"
                    >
                      <CheckCircle
                        size={12}
                        className="text-amber-500 flex-shrink-0"
                      />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-auto pt-3 border-t border-zinc-100 dark:border-zinc-800/60 flex items-center justify-between gap-3">
                  <div>
                    <span className="block text-[10px] text-zinc-400 uppercase font-medium">
                      Harga
                    </span>
                    <span className="text-sm font-extrabold text-zinc-900 dark:text-white">
                      {app.price}
                    </span>
                  </div>
                  <a
                    href="https://lynk.id/rafirachmawan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-zinc-900 hover:bg-amber-500 text-white hover:text-zinc-950 dark:bg-zinc-800 dark:hover:bg-amber-500 dark:hover:text-zinc-950 font-semibold text-[11px] transition-all duration-300 shadow-sm active:scale-95"
                  >
                    <span>Beli / Unduh</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: <Globe size={18} />,
      title: "Siap Produksi",
      desc: "Kode bersih dan terstruktur, tinggal pakai.",
    },
    {
      icon: <Shield size={18} />,
      title: "Native APK",
      desc: "Kompatibel dengan berbagai device Android.",
    },
    {
      icon: <Star size={18} />,
      title: "Panduan Lengkap",
      desc: "Dokumen setup dan customisasi tersedia.",
    },
    {
      icon: <CheckCircle size={18} />,
      title: "Update Rutin",
      desc: "Dukungan update mengikuti teknologi terbaru.",
    },
  ];

  return (
    <section id="features" className="py-12 md:py-16 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white font-heading">
            Kenapa pilih kami?
          </h2>
          <p className="mt-2 text-xs md:text-sm text-zinc-600 dark:text-zinc-400">
            Kualitas dan kepuasan pelanggan prioritas utama.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900/80 rounded-2xl p-5 border border-zinc-200 dark:border-zinc-800/80 shadow-sm hover:shadow-md hover:border-amber-500/30 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 dark:text-amber-400 mb-3">
                {feature.icon}
              </div>
              <h3 className="text-sm font-bold text-zinc-900 dark:text-white mb-1">
                {feature.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-xs leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AndroidAppsLanding = () => {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <AppsSection />
        <FeaturesSection />
      </main>
    </div>
  );
};

export default AndroidAppsLanding;
