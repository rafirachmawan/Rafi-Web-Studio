import { Link } from "react-router-dom";
import { ArrowLeft, Home, Sparkles } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-20 bg-transparent text-zinc-900 dark:text-zinc-100 font-sans">
      <div className="max-w-lg w-full text-center space-y-6">
        {/* Glow & Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-extrabold tracking-widest uppercase">
          <Sparkles size={14} className="text-amber-400" />
          <span>404 Error</span>
        </div>

        {/* 404 Big Display */}
        <h1 className="text-8xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 font-heading">
          404
        </h1>

        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            {t("Halaman Tidak Ditemukan", "Page Not Found")}
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-md mx-auto leading-relaxed">
            {t(
              "Maaf, halaman yang Anda cari tidak tersedia, telah dipindahkan, atau alamat URL yang Anda masukkan salah.",
              "Sorry, the page you are looking for is unavailable, moved, or the URL entered is incorrect."
            )}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white font-bold py-3.5 px-6 rounded-2xl transition-all shadow-lg shadow-amber-500/20 active:scale-95 text-sm"
          >
            <Home size={18} />
            <span>{t("Kembali ke Beranda", "Back to Home")}</span>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 font-bold py-3.5 px-6 rounded-2xl transition-all active:scale-95 text-sm cursor-pointer"
          >
            <ArrowLeft size={18} />
            <span>{t("Sebelumnya", "Go Back")}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
