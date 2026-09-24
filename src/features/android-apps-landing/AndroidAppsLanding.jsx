import { useState } from "react";
import {
  Smartphone,
  Globe,
  Shield,
  ChevronRight,
  Star,
  CheckCircle,
  ArrowRight,
  Mail,
  Image as ImageIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

// Data for Android apps
const androidApps = [
  {
    id: "marketpos",
    name: "MarketPos",
    icon: "🛒",
    desc: "Point of Sales (POS)",
    category: "POINT OF SALES (POS)",
    price: "IDR 100.000",
    popular: true,
    features: ["Cetak Struk Bluetooth", "Manajemen Stok", "Laporan Transaksi"],
  },
  {
    id: "financeku",
    name: "Financeku",
    icon: "💰",
    desc: "Personal Finance",
    category: "PERSONAL FINANCE",
    price: "IDR 25.000",
    popular: false,
    features: ["Budget Tracker", "Grafik Pengeluaran", "Export Data"],
  },
  {
    id: "belajarceria",
    name: "Belajar Ceria Anak",
    icon: "🎓",
    desc: "Education & Kids",
    category: "EDUCATION & KIDS",
    price: "IDR 25.000",
    popular: false,
    features: ["Audio Interaktif", "Visual Menarik", "Aman Tanpa Iklan"],
  },
  {
    id: "hijalearn",
    name: "HijaLearn",
    icon: "🕌",
    desc: "Islamic Learning",
    category: "ISLAMIC LEARNING",
    price: "IDR 25.000",
    popular: false,
    features: ["Audio Pelafalan", "Kuis Huruf", "Tampilan Ramah Anak"],
  },
];

// Section Components
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div>
              <h1 className="text-lg lg:text-2xl font-bold text-gray-900">
                Gapai<span className="text-amber-500">Digital</span>
              </h1>
              <p className="text-[10px] lg:text-xs text-gray-500 hidden sm:block">
                Android Apps Library
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-amber-600 font-medium transition-colors"
            >
              Beranda
            </a>
            <a
              href="#apps"
              className="text-gray-700 hover:text-amber-600 font-medium transition-colors"
            >
              Aplikasi
            </a>
            <a
              href="#features"
              className="text-gray-700 hover:text-amber-600 font-medium transition-colors"
            >
              Fitur
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-amber-600 font-medium transition-colors"
            >
              Kontak
            </a>
            <Link
              to="/"
              className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2.5 rounded-full font-medium transition-all hover:shadow-lg flex items-center"
            >
              Kembali ke Beranda
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 animate-fade-in">
            <div className="space-y-3">
              <a
                href="#home"
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-2 text-gray-700 hover:bg-amber-50 rounded-lg"
              >
                Beranda
              </a>
              <a
                href="#apps"
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-2 text-gray-700 hover:bg-amber-50 rounded-lg"
              >
                Aplikasi
              </a>
              <a
                href="#features"
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-2 text-gray-700 hover:bg-amber-50 rounded-lg"
              >
                Fitur
              </a>
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-2 text-gray-700 hover:bg-amber-50 rounded-lg"
              >
                Kontak
              </a>
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="block bg-amber-600 text-white px-4 py-3 rounded-lg font-medium text-center hover:bg-amber-700"
              >
                Kembali ke Beranda
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const HeroSection = () => {
  return (
    <section
      id="home"
      className="pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-br from-amber-50 via-white to-orange-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
          <Smartphone className="w-4 h-4" />
          <span>Ready-to-Use Android Applications</span>
        </div>

        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
          Aplikasi Android{" "}
          <span className="block text-amber-600 mt-2">
            Siap Pakai & Siap Download
          </span>
        </h1>

        <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
          Dapatkan aplikasi Android berkualitas tinggi dengan harga terjangkau.
          Mulai dari POS sistem, manajemen keuangan, hingga aplikasi edukasi -
          semuanya dalam satu tempat!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="#apps"
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full font-semibold transition-all hover:shadow-xl text-center inline-flex items-center justify-center"
          >
            Lihat Aplikasi
            <ChevronRight className="w-5 h-5 ml-2" />
          </a>
          <a
            href="#contact"
            className="border-2 border-gray-300 hover:border-amber-600 text-gray-700 hover:text-amber-600 px-8 py-4 rounded-full font-semibold transition-all text-center"
          >
            Konsultasi Gratis
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-gray-200">
          <div>
            <div className="text-3xl lg:text-4xl font-bold text-amber-600">
              {androidApps.length}
            </div>
            <div className="text-sm text-gray-600">Aplikasi Siap Pakai</div>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl font-bold text-amber-600">
              100%
            </div>
            <div className="text-sm text-gray-600">Working Code</div>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl font-bold text-amber-600">
              Android
            </div>
            <div className="text-sm text-gray-600">Native APK</div>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl font-bold text-amber-600">
              24/7
            </div>
            <div className="text-sm text-gray-600">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AppsSection = () => {
  return (
    <section id="apps" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-amber-100 text-amber-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            📦 PRODUK SIAP PAKAI
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Aplikasi & Template. Siap Pakai & Download.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Butuh solusi cepat tanpa harus membuat dari nol? Dapatkan aplikasi
            Android & template siap pakai karya Rafi Rachmawan dengan harga
            terjangkau langsung di Lynk.id.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {androidApps.map((app, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-200 relative group"
            >
              {app.popular && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    🔥 TERPOPULER
                  </span>
                </div>
              )}

              {/* Placeholder Image */}
              <div className="relative aspect-[3/2] bg-zinc-100 dark:bg-zinc-900/60 border border-dashed border-zinc-300/90 dark:border-zinc-700/80 flex items-center justify-center p-5">
                {/* Blueprint Grid Pattern */}
                <div
                  className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06] pointer-events-none"
                  style={{
                    backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
                    backgroundSize: "24px 24px",
                  }}
                />

                {/* Blueprint Corner Accents */}
                <div className="absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-zinc-400/60 dark:border-zinc-600/60 pointer-events-none" />
                <div className="absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2 border-zinc-400/60 dark:border-zinc-600/60 pointer-events-none" />
                <div className="absolute bottom-2 left-2 w-2 h-2 border-b-2 border-l-2 border-zinc-400/60 dark:border-zinc-600/60 pointer-events-none" />
                <div className="absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 border-zinc-400/60 dark:border-zinc-600/60 pointer-events-none" />

                {/* Content Area */}
                <div className="relative z-10 flex flex-col items-center gap-2 max-w-[280px]">
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200/90 dark:border-zinc-700/90 shadow-sm flex items-center justify-center text-zinc-500 dark:text-zinc-400 group-hover/ph:scale-105 group-hover/ph:text-amber-500 transition-all duration-300">
                    <Smartphone size={18} strokeWidth={1.8} />
                  </div>

                  <div className="space-y-0.5">
                    <p className="text-xs font-semibold text-zinc-700 dark:text-zinc-200 tracking-tight">
                      {app.name}
                    </p>
                    <p className="text-[11px] text-zinc-400 dark:text-zinc-500 font-normal">
                      {app.desc}
                    </p>
                  </div>

                  {/* Clean Dimension Tag */}
                  <div className="mt-1 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white dark:bg-zinc-800 border border-zinc-200/90 dark:border-zinc-700/80 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                    <span className="text-[11px] font-mono font-medium text-zinc-600 dark:text-zinc-300">
                      600 × 400 px{" "}
                      <span className="text-zinc-400 font-normal">(3:2)</span>
                    </span>
                  </div>
                </div>

                {/* Platform Tag */}
                <div className="absolute bottom-2.5 left-2.5 z-10 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-900/85 backdrop-blur-md text-white text-[10px] font-medium border border-zinc-700/50">
                  <Smartphone size={11} className="text-amber-400" />
                  <span>Android APK</span>
                </div>
              </div>
              {/* Card Body */}
              <div className="flex flex-col flex-grow p-5">
                {/* Category & Title */}
                <span className="text-[11px] font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-1">
                  {app.category}
                </span>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-amber-500 transition-colors mb-2">
                  {app.name}
                </h3>

                {/* Description */}
                <p className="text-xs text-gray-600 dark:text-zinc-400 leading-relaxed line-clamp-3 mb-4 flex-grow">
                  Aplikasi kasir penjualan modern untuk UMKM, toko kelontong, &
                  ritel dengan cetak struk dan laporan harian.
                  <br />
                  Pencatatan cash flow harian, tracking pengeluaran & pemasukan
                  personal secara terstruktur dan praktis.
                  <br />
                  Media edukasi interaktif untuk anak usia 2-4 tahun mengenal
                  warna, bentuk, hewan, dan angka dengan animasi ramah...
                  <br />
                  Aplikasi belajar membaca huruf hijaiyah, harakat, makhraj, dan
                  dasar tajwid yang menyenangkan untuk pemula.
                </p>

                {/* Feature Highlights */}
                <div className="space-y-1.5 mb-5 pt-3 border-t border-gray-100 dark:border-zinc-800/60">
                  {app.features.map((feat, fIdx) => (
                    <div
                      key={fIdx}
                      className="flex items-center gap-1.5 text-[11px] text-gray-500 dark:text-zinc-400"
                    >
                      <CheckCircle
                        size={12}
                        className="text-amber-500 flex-shrink-0"
                      />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Price & Action Button */}
                <div className="mt-auto pt-4 border-t border-gray-100 dark:border-zinc-800/60 flex items-center justify-between gap-3">
                  <div>
                    <span className="block text-[10px] text-gray-400 uppercase font-medium">
                      Harga
                    </span>
                    <span className="text-base font-extrabold text-gray-900 dark:text-white">
                      {app.price}
                    </span>
                  </div>

                  <a
                    href="https://lynk.id/rafirachmawan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-zinc-900 hover:bg-amber-500 text-white hover:text-zinc-950 dark:bg-zinc-800 dark:hover:bg-amber-500 dark:hover:text-zinc-950 font-semibold text-xs transition-all duration-300 shadow-sm active:scale-95"
                  >
                    <span>Beli / Unduh</span>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15,3 21,3 21,9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
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
      icon: <Globe className="w-8 h-8" />,
      title: "Cross-Platform Ready",
      desc: "Semua aplikasi dibangun dengan teknologi modern yang compatible dengan berbagai device Android.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Production Quality",
      desc: "Kode bersih, terstruktur, dan siap untuk di-deploy ke production environment.",
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Full Documentation",
      desc: "Panduan lengkap penggunaan, setup, dan customisasi tersedia untuk setiap aplikasi.",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Regular Updates",
      desc: "Dukungan update rutin untuk memastikan aplikasi tetap relevan dengan teknologi terbaru.",
    },
  ];

  return (
    <section id="features" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Mengapa Pilih <span className="text-amber-600">Kami?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kualitas dan kepuasan pelanggan adalah prioritas utama kami
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    // Format nomor WhatsApp (085196221716 -> 6285196221716)
    const phoneNumber = "6285196221716";

    // Build pesan WhatsApp
    const whatsappMessage = `Halo, saya ${formData.name}%0A%0AE-mail: ${formData.email}%0A%0APesan: ${formData.message}%0A%0ASaya tertarik dengan aplikasi GapaiDigital.`;

    // Redirect ke WhatsApp
    window.open(
      `https://wa.me/${phoneNumber}?text=${whatsappMessage}`,
      "_blank",
    );
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <section
      id="contact"
      className="py-20 lg:py-28 bg-gradient-to-br from-gray-900 to-gray-800 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Hubungi <span className="text-amber-500">Kami</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Tertarik dengan salah satu aplikasi kami? Atau ingin custom
              development? Mari diskusikan kebutuhan Anda!
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Email</div>
                  <div className="text-gray-300">
                    rafirachmawan1987@gmail.com
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8 flex space-x-4">
              {[
                {
                  name: "Facebook",
                  href: "https://www.facebook.com/profile.php?id=100081122267497&sk=reels_tab&locale=id_ID",
                  svg: (
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  ),
                },
                {
                  name: "GitHub",
                  href: "https://github.com/rafirachmawan",
                  svg: (
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.292 2.807 1.292.24-.781 1.493-1.316 1.493-1.316-2.925-.327-5.635-2.332-5.635-10.363 0-2.291.822-3.927 2.161-4.631.243-.105.495-.163.726-.156.343.006 2.742.006 2.742.006.337.706 1.159 2.341 1.159 4.631 0 8.029-2.71 10.035-5.637 10.363 1.02.887 2.161 2.125 2.161 4.859v3.584c0 .314.196.692.796.576 4.766-1.588 8.205-6.082 8.205-11.387 0-6.627-5.373-12-12-12z" />
                    </svg>
                  ),
                },
                {
                  name: "LinkedIn",
                  href: "https://www.linkedin.com/in/rafi-rachmawan-2a8728233/",
                  svg: (
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="w-12 h-12 bg-amber-600 hover:bg-amber-700 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                  title={social.name}
                  aria-label={social.name}
                >
                  {social.svg}
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
            <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Nama Lengkap
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  required
                  className="w-full bg-white/20 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Masukkan nama Anda"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  required
                  className="w-full bg-white/20 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Pesan</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full bg-white/20 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
                  placeholder="Tulis pesan Anda di sini..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-4 rounded-xl transition-all hover:shadow-xl inline-flex items-center justify-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.373a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.465 0 .18 5.284.178 11.818c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.58 0 11.865-5.284 11.867-11.818a11.821 11.821 0 00-3.47-8.393Z" />
                </svg>
                Kirim ke WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">GapaiDigital</span>
            </div>
            <p className="text-gray-400 text-sm">
              Penyedia aplikasi Android siap pakai untuk berbagai kebutuhan
              bisnis dan personal.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href="#home"
                  className="hover:text-amber-500 transition-colors"
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="#apps"
                  className="hover:text-amber-500 transition-colors"
                >
                  Aplikasi
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="hover:text-amber-500 transition-colors"
                >
                  Fitur
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-amber-500 transition-colors"
                >
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>rafirachmawan1987@gmail.com</li>
              <li>Tulungagung, Jawa Timur</li>
              <li>Support 24/7</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          © 2026 GapaiDigital. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

const AndroidAppsLanding = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AppsSection />
        <FeaturesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default AndroidAppsLanding;
