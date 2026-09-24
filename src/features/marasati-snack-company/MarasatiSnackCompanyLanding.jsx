import { useState } from "react";
import {
  Factory,
  Users,
  TrendingUp,
  Award,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Star,
  CheckCircle,
  Target,
  Clock,
  Shield,
  Heart,
  Globe,
} from "lucide-react";

// Section Components
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center transform hover:rotate-6 transition-transform duration-300">
              <span className="text-2xl lg:text-3xl">🍪</span>
            </div>
            <div>
              <h1 className="text-lg lg:text-2xl font-bold text-gray-900">
                Marasati Snack
              </h1>
              <p className="text-[10px] lg:text-xs text-gray-500 hidden sm:block">
                Premium Indonesian Snack
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <a
              href="#about"
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
            >
              Tentang Kami
            </a>
            <a
              href="#products"
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
            >
              Produk
            </a>
            <a
              href="#outlets"
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
            >
              Outlet
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
            >
              Kontak
            </a>
            <a
              href="/marasati-snack"
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2.5 rounded-full font-medium transition-all hover:shadow-lg flex items-center"
            >
              Sistem Demo
              <ChevronRight className="w-4 h-4 ml-2" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 animate-fade-in">
            <div className="space-y-3">
              <a
                href="#about"
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-2 text-gray-700 hover:bg-orange-50 rounded-lg"
              >
                Tentang Kami
              </a>
              <a
                href="#products"
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-2 text-gray-700 hover:bg-orange-50 rounded-lg"
              >
                Produk
              </a>
              <a
                href="#outlets"
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-2 text-gray-700 hover:bg-orange-50 rounded-lg"
              >
                Outlet
              </a>
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-2 text-gray-700 hover:bg-orange-50 rounded-lg"
              >
                Kontak
              </a>
              <a
                href="/marasati-snack"
                onClick={() => setIsMenuOpen(false)}
                className="block bg-orange-600 text-white px-4 py-3 rounded-lg font-medium text-center hover:bg-orange-700"
              >
                Sistem Demo
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium">
              <Star className="w-4 h-4" />
              <span>Premium Snack Brand Indonesia</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Marasati Snack
              <span className="block text-orange-600 mt-2">Rasa Autentik</span>
            </h1>

            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl">
              Menghadirkan cemilan berkualitas dengan cita rasa khas Indonesia
              sejak 2015. Terjual di 8 outlet dan dipercaya oleh ribuan
              pelanggan setia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#products"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-semibold transition-all hover:shadow-xl text-center inline-flex items-center justify-center"
              >
                Lihat Produk
                <ChevronRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="#contact"
                className="border-2 border-gray-300 hover:border-orange-600 text-gray-700 hover:text-orange-600 px-8 py-4 rounded-full font-semibold transition-all text-center"
              >
                Hubungi Kami
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-orange-600">
                  8+
                </div>
                <div className="text-sm text-gray-600">Outlet</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-orange-600">
                  5K+
                </div>
                <div className="text-sm text-gray-600">Pelanggan</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-orange-600">
                  10K+
                </div>
                <div className="text-sm text-gray-600">Produk Terjual</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-200 to-amber-200 rounded-3xl transform rotate-6"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl p-8">
              <div className="aspect-square bg-gradient-to-br from-orange-400 to-amber-500 rounded-2xl flex items-center justify-center">
                <div className="text-white text-center p-8">
                  <div className="text-8xl lg:text-9xl mb-4">🍪</div>
                  <div className="text-2xl lg:text-3xl font-bold">Marasati</div>
                  <div className="text-lg opacity-90">Snack Co.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  const features = [
    {
      icon: <Factory className="w-8 h-8" />,
      title: "Produksi Mandiri",
      desc: "Rumah produksi pusat dengan standar kebersihan dan kualitas internasional.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Tim Profesional",
      desc: "Dibuka oleh tenaga ahli berpengalaman di bidang food technology.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Bahan Berkualitas",
      desc: "Menggunakan bahan baku terbaik dari petani lokal Indonesia.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Sertifikasi BPOM",
      desc: "Semua produk telah lulus uji keamanan dan mendapat izin edar resmi.",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Tentang <span className="text-orange-600">Marasati Snack</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Perjalanan kami dalam menyajikan camilan premium untuk keluarga
            Indonesia
          </p>
        </div>

        {/* Story */}
        <div className="bg-orange-50 rounded-3xl p-8 lg:p-12 mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Dari Hati untuk Keluarga Indonesia
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Marasati Snack didirikan pada tahun 2015 dengan visi sederhana:
                menyediakan camilan sehat dan lezat yang dapat dinikmati oleh
                semua kalangan. Mulai dari garage kecil dengan 1 produk, kini
                kami telah berkembang menjadi brand terpercaya dengan 8 outlet
                di berbagai lokasi strategis.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Komitmen kami terhadap kualitas dan cita rasa autentik
                menjadikan setiap gigitan produk Marasati Snack pengalaman yang
                tak terlupakan.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="space-y-4">
                {[
                  {
                    year: "2015",
                    title: "Pendirian",
                    desc: "Dimulai dengan 1 produk di garage kecil",
                  },
                  {
                    year: "2018",
                    title: "Ekspansi Pertama",
                    desc: "Membuka outlet ke-2 dan ke-3",
                  },
                  {
                    year: "2021",
                    title: "Fasilitas Baru",
                    desc: "Rumah produksi modern beroperasi",
                  },
                  {
                    year: "2024",
                    title: "8 Outlet",
                    desc: "Jaringan outlet mencapai 8 lokasi",
                  },
                ].map((milestone, idx) => (
                  <div key={idx} className="flex space-x-4">
                    <div className="flex-shrink-0 w-20 text-orange-600 font-bold text-lg">
                      {milestone.year}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {milestone.title}
                      </div>
                      <div className="text-sm text-gray-600">
                        {milestone.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 mb-4">
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

const ProductsSection = () => {
  const products = [
    {
      name: "Basreng",
      desc: "Basil goreng pedas dengan varian bumbu cikruh & tabur",
      price: "Rp 10.000",
    },
    {
      name: "Cimol",
      desc: "Ci mal goreng renyah dengan rasa melimpah",
      price: "Rp 8.000",
    },
    {
      name: "Otak-otak",
      desc: "Otak otak ikan dengan bumbu spesial tradisional",
      price: "Rp 10.000",
    },
  ];

  return (
    <section id="products" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Produk <span className="text-orange-600">Kami</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Varian rasa autentik yang disukai ribuan pelanggan
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group"
            >
              <div className="aspect-square bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <div className="text-white text-8xl">🍪</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-orange-600 font-bold text-lg">
                    {product.price}
                  </span>
                  <a
                    href="/marasati-snack"
                    className="text-gray-700 hover:text-orange-600 font-medium text-sm flex items-center"
                  >
                    Pesan Sekarang <ChevronRight className="w-4 h-4 ml-1" />
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

const OutletsSection = () => {
  const outlets = [
    { loc: "Tulungagung Pusat", code: "#01" },
    { loc: "Tulungagung Barat", code: "#02" },
    { loc: "Rejoso", code: "#03" },
    { loc: "Nganok", code: "#04" },
    { loc: "Sumbergumbeng", code: "#05" },
    { loc: "Kalipuro", code: "#06" },
    { loc: "Pagerwojo", code: "#07" },
    { loc: "Boyolangu", code: "#08" },
  ];

  return (
    <section id="outlets" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Jaringan <span className="text-orange-600">Outlet</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kunjungi salah satu dari 8 outlet kami di seluruh Tulungagung
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {outlets.map((outlet, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 border-2 border-orange-200 hover:border-orange-500 transition-all group cursor-pointer"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {outlet.code.replace("#", "")}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{outlet.loc}</h3>
                <div className="flex items-center justify-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-1" />
                  Buka Setiap Hari
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/marasati-snack"
            className="inline-flex items-center bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-semibold transition-all hover:shadow-xl"
          >
            Lihat Lokasi Detail
            <ChevronRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-20 lg:py-28 bg-gradient-to-br from-gray-900 to-gray-800 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Hubungi <span className="text-orange-500">Kami</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Punya pertanyaan atau ingin bekerja sama? Jangan ragu untuk
              menghubungi kami.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Telepon</div>
                  <div className="text-gray-300">+62 812-3456-7890</div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Email</div>
                  <div className="text-gray-300">info@marasatisnack.com</div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Alamat</div>
                  <div className="text-gray-300">
                    Jl. Raya Tulungagung No. 123, Jawa Timur, Indonesia
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8 flex space-x-4">
              {[
                {
                  name: "Instagram",
                  href: "#",
                  svg: (
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  ),
                },
                {
                  name: "Facebook",
                  href: "#",
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
                  name: "LinkedIn",
                  href: "#",
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
                {
                  name: "Twitter",
                  href: "#",
                  svg: (
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  ),
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="w-12 h-12 bg-orange-600 hover:bg-orange-700 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                  title={social.name}
                  aria-label={social.name}
                >
                  {social.svg}
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  className="w-full bg-white/20 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Masukkan nama Anda"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-white/20 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Pesan</label>
                <textarea
                  rows={4}
                  className="w-full bg-white/20 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                  placeholder="Tulis pesan Anda di sini..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-4 rounded-xl transition-all hover:shadow-xl"
              >
                Kirim Pesan
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
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🍪</span>
              </div>
              <span className="text-xl font-bold">Marasati Snack</span>
            </div>
            <p className="text-gray-400 text-sm">
              Premium Indonesian snack brand dengan 8 outlet dan komitmen pada
              kualitas terbaik.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href="#about"
                  className="hover:text-orange-500 transition-colors"
                >
                  Tentang Kami
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="hover:text-orange-500 transition-colors"
                >
                  Produk
                </a>
              </li>
              <li>
                <a
                  href="#outlets"
                  className="hover:text-orange-500 transition-colors"
                >
                  Outlet
                </a>
              </li>
              <li>
                <a
                  href="/marasati-snack"
                  className="hover:text-orange-500 transition-colors"
                >
                  Sistem Demo
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>+62 812-3456-7890</li>
              <li>info@marasatisnack.com</li>
              <li>Tulungagung, Jawa Timur</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          © 2024 Marasati Snack. All rights reserved. | Developed by Gapai
          Digital
        </div>
      </div>
    </footer>
  );
};

const MarasatiSnackCompanyLanding = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <OutletsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default MarasatiSnackCompanyLanding;
