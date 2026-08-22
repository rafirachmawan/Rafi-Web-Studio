import { Lock, Eye, Server, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function Privacy() {
  const { t } = useLanguage();

  return (
    <div className="pt-28 pb-20 px-4 max-w-4xl mx-auto text-left">
      {/* BACK BUTTON */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-xs font-bold text-amber-500 hover:text-amber-400 mb-6 transition"
      >
        <ArrowLeft size={16} />
        {t("Kembali ke Beranda", "Back to Home")}
      </Link>

      {/* HEADER */}
      <div className="mb-10 pb-6 border-b border-zinc-200 dark:border-zinc-800">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-xs font-bold uppercase tracking-wider mb-3">
          <Lock size={14} />
          <span>Data Protection & Privacy</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-black text-zinc-900 dark:text-white tracking-tight mb-3">
          {t("Kebijakan Privasi", "Privacy Policy")}
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm font-medium">
          {t("Terakhir diperbarui: 22 Agustus 2026 • GapaiDigital Indonesia", "Last updated: August 22, 2026 • GapaiDigital Indonesia")}
        </p>
      </div>

      {/* CONTENT SECTIONS */}
      <div className="space-y-8 text-zinc-700 dark:text-zinc-300 text-xs sm:text-sm leading-relaxed font-medium">
        {/* SECTION 1 */}
        <section className="bg-white dark:bg-zinc-900/40 p-6 md:p-8 rounded-3xl border border-zinc-200/80 dark:border-zinc-800 shadow-sm">
          <h2 className="text-lg font-bold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
            <Eye className="text-amber-500 shrink-0" size={18} />
            1. {t("Pengumpulan Data Informasi", "Information Data Collection")}
          </h2>
          <p className="mb-3">
            {t(
              "GapaiDigital mengumpulkan informasi terbatas yang Anda berikan saat mengkontak kami atau mengisi Formulir Brief Konsultasi (seperti Nama, Nama Bisnis, Nomor WhatsApp, Email, dan Detail Kebutuhan Proyek).",
              "GapaiDigital collects limited information provided when contacting us or filling out the Consultation Brief Form (such as Name, Business Name, WhatsApp Number, Email, and Project Brief Details)."
            )}
          </p>
          <p>
            {t(
              "Informasi ini semata-mata digunakan untuk kepentingan komunikasi proyek, perhitungan estimasi penawaran, dan pemberian layanan terbaik kepada Anda.",
              "This information is solely used for project communication, offer estimates, and providing the best service to you."
            )}
          </p>
        </section>

        {/* SECTION 2 */}
        <section className="bg-white dark:bg-zinc-900/40 p-6 md:p-8 rounded-3xl border border-zinc-200/80 dark:border-zinc-800 shadow-sm">
          <h2 className="text-lg font-bold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
            <Lock className="text-amber-500 shrink-0" size={18} />
            2. {t("Perjanjian Kerahasiaan (NDA) & Keamanan", "Non-Disclosure Agreement (NDA) & Security")}
          </h2>
          <p className="mb-3">
            {t(
              "Kami menjamin bahwa data bisnis, kredensial server, data pelanggan, dan ide produk Anda tidak akan pernah dijual, disewakan, atau dibagikan kepada pihak ketiga mana pun tanpa izin tertulis dari Anda.",
              "We guarantee that your business data, server credentials, customer data, and product ideas will never be sold, rented, or shared with any third party without your written consent."
            )}
          </p>
          <p>
            {t(
              "Untuk proyek sistem web custom enterprise, kami siap menandatangani Perjanjian Kerahasiaan (NDA) resmi secara hukum.",
              "For custom enterprise web system projects, we are ready to sign an official legal Non-Disclosure Agreement (NDA)."
            )}
          </p>
        </section>

        {/* SECTION 3 */}
        <section className="bg-white dark:bg-zinc-900/40 p-6 md:p-8 rounded-3xl border border-zinc-200/80 dark:border-zinc-800 shadow-sm">
          <h2 className="text-lg font-bold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
            <Server className="text-amber-500 shrink-0" size={18} />
            3. {t("Keamanan Hosting & Server", "Hosting & Server Security")}
          </h2>
          <p>
            {t(
              "Semua infrastruktur server yang disiapkan oleh GapaiDigital dilengkapi dengan enkripsi SSL 256-bit standar industri, perlindungan firewall cloud, dan pencadangan (backup) data berkala untuk memastikan keamanan aset digital bisnis Anda.",
              "All server infrastructures prepared by GapaiDigital are equipped with industry-standard 256-bit SSL encryption, cloud firewall protection, and regular data backups to ensure your business digital asset security."
            )}
          </p>
        </section>
      </div>
    </div>
  );
}
