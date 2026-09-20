import { ShoppingBag, ExternalLink, Smartphone, Download, Sparkles, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import CleanPlaceholder from "../common/CleanPlaceholder";

const digitalProducts = [
  {
    id: "marketpos",
    name: "MarketPos",
    category: "Point of Sales (POS)",
    platform: "Android APK",
    price: "IDR 100.000",
    isPaid: true,
    popular: true,
    image: null,
    placeholderSize: { w: 600, h: 400, r: "3:2" },
    description: "Aplikasi kasir penjualan modern untuk UMKM, toko kelontong, & ritel dengan cetak struk dan laporan harian.",
    descriptionEn: "Modern POS cashier app for MSMEs, retail stores, and cafes with receipt printing & daily analytics.",
    features: ["Cetak Struk Bluetooth", "Manajemen Stok", "Laporan Transaksi"],
    url: "https://lynk.id/rafirachmawan",
  },
  {
    id: "financeku",
    name: "Financeku",
    category: "Personal Finance",
    platform: "Android APK",
    price: "IDR 25.000",
    isPaid: true,
    popular: false,
    image: null,
    placeholderSize: { w: 600, h: 400, r: "3:2" },
    description: "Pencatatan cash flow harian, tracking pengeluaran & pemasukan personal secara terstruktur dan praktis.",
    descriptionEn: "Daily personal cashflow tracker, expense budgeting, and instant financial reports.",
    features: ["Budget Tracker", "Grafik Pengeluaran", "Export Data"],
    url: "https://lynk.id/rafirachmawan",
  },
  {
    id: "belajar-ceria",
    name: "Belajar Ceria Anak",
    category: "Education & Kids",
    platform: "Android APK",
    price: "IDR 25.000",
    isPaid: true,
    popular: false,
    image: null,
    placeholderSize: { w: 600, h: 400, r: "3:2" },
    description: "Media edukasi interaktif untuk anak usia 2-4 tahun mengenal warna, bentuk, hewan, dan angka dengan animasi ramah anak.",
    descriptionEn: "Interactive educational game for toddlers aged 2-4 featuring colors, shapes, animals, and numbers.",
    features: ["Audio Interaktif", "Visual Menarik", "Aman Tanpa Iklan"],
    url: "https://lynk.id/rafirachmawan",
  },
  {
    id: "hijalearn",
    name: "HijaLearn",
    category: "Islamic Learning",
    platform: "Android APK",
    price: "IDR 25.000",
    isPaid: true,
    popular: false,
    image: null,
    placeholderSize: { w: 600, h: 400, r: "3:2" },
    description: "Aplikasi belajar membaca huruf hijaiyah, harakat, makhraj, dan dasar tajwid yang menyenangkan untuk pemula.",
    descriptionEn: "Interactive Hijaiyah letter and basic Tajweed learning application with clear pronunciation audio.",
    features: ["Audio Pelafalan", "Kuis Huruf", "Tampilan Ramah Anak"],
    url: "https://lynk.id/rafirachmawan",
  },
];

export default function DigitalProductsSection() {
  const { t } = useLanguage();
  const lynkUrl = "https://lynk.id/rafirachmawan";

  return (
    <section
      id="digital-products"
      className="py-16 md:py-24 relative bg-transparent dark:bg-[#050508] scroll-mt-20 overflow-hidden"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        {/* HEADER SECTION */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-semibold tracking-wider uppercase mb-4">
            <ShoppingBag size={14} />
            <span>{t("Produk Siap Pakai", "Ready-to-Use Products")}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 font-heading leading-tight text-zinc-900 dark:text-white">
            {t("Aplikasi & Template.", "Ready-to-Use Apps.")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
              {t("Siap Pakai & Download.", "Instant Access & Run.")}
            </span>
          </h2>

          <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            {t(
              "Butuh solusi cepat tanpa harus membuat dari nol? Dapatkan aplikasi Android & template siap pakai karya Rafi Rachmawan dengan harga terjangkau langsung di Lynk.id.",
              "Need a fast solution without building from scratch? Get ready-to-run Android applications and templates crafted by Rafi Rachmawan at affordable prices on Lynk.id."
            )}
          </p>
        </div>

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {digitalProducts.map((prod) => (
            <div
              key={prod.id}
              className="group relative flex flex-col h-full rounded-2xl bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800/80 hover:border-amber-500/40 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Popular / Best Value Badge */}
              {prod.popular && (
                <div className="absolute top-3 right-3 z-20 flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500 text-zinc-950 font-bold text-[10px] tracking-wider uppercase shadow-md">
                  <Sparkles size={11} className="fill-current" />
                  <span>{t("Terpopuler", "Popular")}</span>
                </div>
              )}

              {/* Card Image Thumbnail */}
              <div className="relative w-full h-48 bg-zinc-100 dark:bg-zinc-800/60 overflow-hidden flex items-center justify-center">
                {prod.image ? (
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full p-2.5 flex items-center justify-center">
                    <CleanPlaceholder
                      width={prod.placeholderSize.w}
                      height={prod.placeholderSize.h}
                      ratio={prod.placeholderSize.r}
                      label={prod.name}
                      sublabel={prod.category}
                      icon={Smartphone}
                      className="h-full !p-3"
                    />
                  </div>
                )}

                {/* Platform Tag */}
                <div className="absolute bottom-2.5 left-2.5 z-10 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-900/85 backdrop-blur-md text-white text-[10px] font-medium border border-zinc-700/50">
                  <Smartphone size={11} className="text-amber-400" />
                  <span>{prod.platform}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-col flex-grow p-5">
                {/* Category & Title */}
                <span className="text-[11px] font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-1">
                  {prod.category}
                </span>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-amber-500 transition-colors mb-2">
                  {prod.name}
                </h3>

                {/* Description */}
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-3 mb-4 flex-grow">
                  {t(prod.description, prod.descriptionEn)}
                </p>

                {/* Feature Highlights */}
                <div className="space-y-1.5 mb-5 pt-3 border-t border-zinc-100 dark:border-zinc-800/60">
                  {prod.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-1.5 text-[11px] text-zinc-500 dark:text-zinc-400"
                    >
                      <CheckCircle2 size={12} className="text-amber-500 flex-shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Price & Action Button */}
                <div className="mt-auto pt-4 border-t border-zinc-100 dark:border-zinc-800/60 flex items-center justify-between gap-3">
                  <div>
                    <span className="block text-[10px] text-zinc-400 uppercase font-medium">
                      {t("Harga", "Price")}
                    </span>
                    <span className="text-base font-extrabold text-zinc-900 dark:text-white">
                      {prod.price}
                    </span>
                  </div>

                  <a
                    href={prod.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-zinc-900 hover:bg-amber-500 text-white hover:text-zinc-950 dark:bg-zinc-800 dark:hover:bg-amber-500 dark:hover:text-zinc-950 font-semibold text-xs transition-all duration-300 shadow-sm active:scale-95"
                  >
                    <span>{t("Beli / Unduh", "Get Now")}</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM BANNER / CTA TO LYNK.ID */}
        <div className="relative rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/20 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-xl bg-amber-500 text-zinc-950 flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-lg shadow-amber-500/20">
              <Download size={24} />
            </div>
            <div>
              <h4 className="text-base md:text-lg font-bold text-zinc-900 dark:text-white">
                {t(
                  "Koleksi Lengkap Aplikasi & Template di Lynk.id",
                  "Full Collection of Apps & Templates on Lynk.id"
                )}
              </h4>
              <p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400">
                {t(
                  "Dapatkan update produk terbaru, template gratis, dan diskon spesial langsung dari etalase resmi.",
                  "Get latest product updates, free templates, and special deals directly from the official showcase."
                )}
              </p>
            </div>
          </div>

          <a
            href={lynkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-zinc-950 font-bold text-sm shadow-md hover:shadow-amber-500/25 transition-all duration-300 active:scale-95 flex-shrink-0"
          >
            <span>{t("Kunjungi lynk.id/rafirachmawan", "Visit lynk.id/rafirachmawan")}</span>
            <ExternalLink size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
