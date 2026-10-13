import { useLanguage } from "../../../context/LanguageContext";
import { useConsultation } from "../../../context/ConsultationContext";

export default function BigCTASection() {
  const { t } = useLanguage();
  const { openConsultation } = useConsultation();

  return (
    <div className="mb-24 px-4">
      <div className="max-w-6xl mx-auto rounded-[30px] md:rounded-[40px] bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.04)] dark:shadow-none py-16 md:py-20 px-6 text-center relative overflow-hidden transition-colors duration-300">

        {/* CONTENT */}
        <div className="relative z-10 max-w-3xl mx-auto">
          {/* TITLE */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black dark:text-white leading-tight font-heading">
            {t("Siap Membawa Bisnis Anda ", "Ready to Take Your Business ")}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 font-extrabold">
              {t("ke Tingkat Berikutnya?", "to the Next Level?")}
            </span>
          </h2>

          {/* DESC */}
          <p className="text-gray-700 dark:text-blue-100 mt-5 text-xs md:text-sm leading-relaxed font-semibold">
            {t("Kalau kompetitor kamu sudah punya website profesional, kamu tidak bisa terus menunda.", "If your competitors already have a professional website, you cannot keep delaying.")}{" "}
            <span className="font-semibold text-black dark:text-white">
              {t("Bangun kepercayaan. Dapatkan pelanggan baru.", "Build trust. Get new customers.")}
            </span>
          </p>

          <div className="mt-8">
            <button
              onClick={() => openConsultation()}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-full font-bold text-xs md:text-sm shadow-xl shadow-amber-500/20 hover:scale-[1.05] hover:shadow-amber-500/35 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              {t("Konsultasi Gratis Sekarang →", "Free Consultation Now →")}
            </button>
          </div>

          {/* NOTE */}
          <p className="text-gray-500 dark:text-gray-400 text-[10px] md:text-xs mt-5">
            {t("Gratis, tanpa komitmen, tanpa syarat tersembunyi.", "Free, no commitment, no hidden requirements.")}
          </p>
        </div>
      </div>
    </div>
  );
}

