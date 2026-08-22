import { ShieldCheck, FileText, CheckCircle2, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function Terms() {
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
          <ShieldCheck size={14} />
          <span>Legal & Transparency</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-black text-zinc-900 dark:text-white tracking-tight mb-3">
          {t("Syarat & Ketentuan Layanan", "Terms of Service")}
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
            <FileText className="text-amber-500 shrink-0" size={18} />
            1. {t("Ketentuan Umum & Pengerjaan", "General Terms & Workflows")}
          </h2>
          <p className="mb-3">
            {t(
              "Dengan memesan layanan pembuatan website, aplikasi mobile, atau sistem web custom di GapaiDigital, Anda menyetujui seluruh ketentuan layanan yang tercantum di halaman ini.",
              "By ordering website creation, mobile app, or custom web system services at GapaiDigital, you agree to all terms of service listed on this page."
            )}
          </p>
          <ul className="space-y-2 pl-4 list-disc text-zinc-600 dark:text-zinc-400">
            <li>{t("Pengerjaan proyek dimulai resmi setelah Down Payment (DP) 50% diterima.", "Official project work starts after 50% Down Payment is received.")}</li>
            <li>{t("Klien wajib menyediakan materi dasar seperti logo, teks deskripsi, dan media gambar yang diperlukan.", "Clients must provide basic materials such as logos, text descriptions, and required media images.")}</li>
            <li>{t("Estimasi pengerjaan yang disepakati dihitung berdasarkan hari kerja (Senin - Sabtu).", "Estimated project timelines are calculated based on working days (Monday - Saturday).")}</li>
          </ul>
        </section>

        {/* SECTION 2 */}
        <section className="bg-white dark:bg-zinc-900/40 p-6 md:p-8 rounded-3xl border border-zinc-200/80 dark:border-zinc-800 shadow-sm">
          <h2 className="text-lg font-bold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
            <CheckCircle2 className="text-amber-500 shrink-0" size={18} />
            2. {t("Ketentuan Pembayaran (DP & Pelunasan)", "Payment Terms (DP & Balance)")}
          </h2>
          <p className="mb-3">
            {t(
              "Skema pembayaran GapaiDigital dirancang sangat adil dan transparan untuk melindungi kedua belah pihak:",
              "GapaiDigital's payment scheme is designed to be fair and transparent to protect both parties:"
            )}
          </p>
          <ul className="space-y-2 pl-4 list-disc text-zinc-600 dark:text-zinc-400">
            <li><strong>DP 50%:</strong> {t("Dibayarkan saat penandatanganan kesepakatan / pengisian brief proyek.", "Paid upon agreement sign-off / project brief submission.")}</li>
            <li><strong>Pelunasan 50%:</strong> {t("Dibayarkan setelah pengerjaan selesai 100%, diuji coba bersama, dan disetujui sebelum serah terima akun/source code.", "Paid after 100% completion, joint testing, and approval prior to account/source code handover.")}</li>
            <li>{t("Pembayaran yang telah ditransfer tidak dapat dikembalikan jika pembatalan sepihak dilakukan oleh klien setelah pengerjaan dimulai.", "Transferred payments are non-refundable if unilateral cancellation is made by the client after work has commenced.")}</li>
          </ul>
        </section>

        {/* SECTION 3 */}
        <section className="bg-white dark:bg-zinc-900/40 p-6 md:p-8 rounded-3xl border border-zinc-200/80 dark:border-zinc-800 shadow-sm">
          <h2 className="text-lg font-bold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
            <ShieldCheck className="text-amber-500 shrink-0" size={18} />
            3. {t("Hak Cipta & Kepemilikan Source Code", "Copyright & Source Code Ownership")}
          </h2>
          <p className="mb-3">
            {t(
              "Kami sangat menghargai privasi dan kepemilikan aset intelektual bisnis Anda:",
              "We highly respect your privacy and business intellectual property rights:"
            )}
          </p>
          <ul className="space-y-2 pl-4 list-disc text-zinc-600 dark:text-zinc-400">
            <li>{t("Setelah pelunasan 100% diselesaikan, seluruh hak milik source code, akses domain, hosting, dan aset desain Figma menjadi milik Klien sepenuhnya.", "Upon 100% final payment, all source code rights, domain access, hosting, and Figma design assets belong fully to the Client.")}</li>
            <li>{t("GapaiDigital berhak mencantumkan nama proyek/website dalam portofolio showcase kami kecuali jika disepakati perjanjian kerahasiaan (NDA).", "GapaiDigital reserves the right to include the project/website name in our portfolio showcase unless a Non-Disclosure Agreement (NDA) is requested.")}</li>
          </ul>
        </section>

        {/* SECTION 4 */}
        <section className="bg-white dark:bg-zinc-900/40 p-6 md:p-8 rounded-3xl border border-zinc-200/80 dark:border-zinc-800 shadow-sm">
          <h2 className="text-lg font-bold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
            <FileText className="text-amber-500 shrink-0" size={18} />
            4. {t("Garansi Bug & Pemeliharaan (Maintenance)", "Bug Warranty & Maintenance")}
          </h2>
          <ul className="space-y-2 pl-4 list-disc text-zinc-600 dark:text-zinc-400">
            <li>{t("Semua proyek mendapatkan garansi perbaikan bug gratis selama 3 - 12 Bulan (sesuai paket).", "All projects include a free bug fix warranty for 3 - 12 Months (depending on package).")}</li>
            <li>{t("Garansi mencakup perbaikan eror sistem, broken link, atau masalah tampilan yang disebabkan oleh kesalahan kode bawaan.", "Warranty covers system errors, broken links, or visual issues caused by original code bugs.")}</li>
            <li>{t("Garansi tidak mencakup kerusakan sistem akibat pihak ketiga, peretasan akibat kelalaian kata sandi klien, atau perubahan kode mandiri oleh klien.", "Warranty excludes damage caused by third parties, hacking due to client password neglect, or independent code alterations by client.")}</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
