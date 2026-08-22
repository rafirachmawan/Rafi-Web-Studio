import { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles, MessageCircleQuestion } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { useConsultation } from "../../context/ConsultationContext";

export default function FAQSection({ isStandalone = false }) {
  const { t } = useLanguage();
  const { openConsultation } = useConsultation();
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      category: t("Umum & Alur Kerja", "General & Workflow"),
      question: t(
        "Berapa lama proses pembuatan website atau aplikasi di GapaiDigital?",
        "How long does website or app development take at GapaiDigital?"
      ),
      answer: t(
        "Waktu pengerjaan bergantung pada jenis paket. Landing Page Standard selesai dalam 3-5 hari kerja. Paket Pro membutuhkan 7-10 hari. Sementara Sistem Web Custom atau Aplikasi Mobile memerlukan waktu 2-4 minggu tergantung pada tingkat kompleksitas fitur yang disepakati.",
        "Development time depends on the package type. Standard Landing Pages are completed in 3-5 business days. Pro Packages take 7-10 days. Custom Web Systems or Mobile Apps require 2-4 weeks depending on the agreed feature complexity."
      ),
    },
    {
      category: t("Harga & Pembayaran", "Pricing & Payment"),
      question: t(
        "Bagaimana skema pembayaran di GapaiDigital?",
        "What is the payment scheme at GapaiDigital?"
      ),
      answer: t(
        "Kami menggunakan skema pembayaran transparan & aman: DP (Down Payment) sebesar 50% di awal sebelum pengerjaan dimulai, dan Pelunasan 50% dilakukan setelah seluruh sistem diuji, direvisi, dan siap dipublikasikan (launching).",
        "We use a transparent & secure payment scheme: a 50% Down Payment upfront before work starts, and the remaining 50% upon complete testing, revision, and approval prior to launching."
      ),
    },
    {
      category: t("Revisi & Garansi", "Revision & Warranty"),
      question: t(
        "Apakah ada garansi jika terjadi kendala atau bug setelah pengerjaan selesai?",
        "Is there a warranty if bugs occur after completion?"
      ),
      answer: t(
        "Tentu saja! Semua paket kami sudah termasuk Garansi Bebas Bug & Maintenance Teknis gratis selama 3 Bulan (Paket Starter) hingga 6-12 Bulan (Paket Pro/Custom). Jika ada masalah teknis, tim kami akan memperbaikinya tanpa biaya tambahan.",
        "Absolutely! All packages include a Bug-Free Warranty & Technical Maintenance for 3 Months (Starter) up to 6-12 Months (Pro/Custom). Any technical issues will be fixed promptly at no extra charge."
      ),
    },
    {
      category: t("Source Code & Server", "Source Code & Hosting"),
      question: t(
        "Apakah source code dan aset website menjadi hak milik saya sepenuhnya?",
        "Will the source code and assets be 100% my property?"
      ),
      answer: t(
        "Ya, 100%! Setelah proses pelunasan selesai, seluruh akses source code, akun hosting, domain, dan aset desain Figma menjadi hak milik penuh Anda tanpa terkunci (*no vendor lock-in*).",
        "Yes, 100%! After full payment, all source code, hosting accounts, domain access, and Figma design assets become fully yours with no vendor lock-in."
      ),
    },
    {
      category: t("Umum & Alur Kerja", "General & Workflow"),
      question: t(
        "Berapa kali batas revisi yang diberikan selama proses desain?",
        "How many revision rounds are included during the design process?"
      ),
      answer: t(
        "Kami memberikan 2x Revisi Mayor (perubahan alur/tampilan besar pada tahap mock-up) dan Revisi Minor Tanpa Batas (perbaikan teks, warna, gambar, atau elemen kecil) hingga Anda benar-benar puas sebelum website online.",
        "We provide 2 Major Revision rounds (layout/flow changes during mock-up stage) and Unlimited Minor Revisions (text, colors, images, small tweaks) until you are completely satisfied before going live."
      ),
    },
    {
      category: t("Harga & Pembayaran", "Pricing & Payment"),
      question: t(
        "Berapa biaya perpanjangan domain dan hosting untuk tahun berikutnya?",
        "How much is the domain & hosting renewal for subsequent years?"
      ),
      answer: t(
        "Untuk Paket Pro yang include domain (.com) dan hosting gratis di tahun pertama, perpanjangan tahunan sangat terjangkau (sekitar Rp 300rb - Rp 600rb/tahun tergantung paket). Kami tidak memungut biaya manajemen tambahan.",
        "For Pro packages with free domain (.com) and hosting for year 1, annual renewals are very affordable (around IDR 300k - 600k/year depending on scale). We charge no hidden management fees."
      ),
    },
  ];

  return (
    <div id="faq" className={`max-w-4xl mx-auto px-4 ${isStandalone ? "py-16 md:py-24" : "my-16 md:my-24"}`}>
      {/* BADGE & HEADER */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
          <Sparkles size={14} className="text-amber-500" />
          <span>FAQ • Pertanyaan Umum</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 dark:text-white tracking-tight mb-3">
          {t("Sering Ditanyakan Klien", "Frequently Asked Questions")}
        </h2>

        <p className="text-zinc-600 dark:text-zinc-400 text-sm max-w-xl mx-auto font-medium">
          {t(
            "Temukan jawaban lengkap mengenai skema kerja, garansi, harga, dan kepemilikan proyek bersama GapaiDigital.",
            "Find clear answers about workflow, warranty, pricing, and project ownership with GapaiDigital."
          )}
        </p>
      </div>

      {/* ACCORDION CONTAINER */}
      <div className="space-y-4">
        {faqData.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="bg-white dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800 rounded-2xl overflow-hidden transition-all duration-200 shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full p-5 md:p-6 text-left flex items-center justify-between gap-4 font-bold text-zinc-900 dark:text-white text-sm md:text-base hover:text-amber-500 transition-colors cursor-pointer"
              >
                <span className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-amber-500 shrink-0" />
                  <span>{item.question}</span>
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-zinc-400 shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-amber-500" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="px-6 pb-6 pt-1 text-zinc-600 dark:text-zinc-300 text-xs md:text-sm leading-relaxed border-t border-zinc-100 dark:border-zinc-800/50 mt-1 font-medium">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* STILL HAVE QUESTIONS CTA */}
      <div className="mt-10 p-6 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-left">
          <h4 className="font-extrabold text-zinc-900 dark:text-white text-sm sm:text-base flex items-center gap-2">
            <MessageCircleQuestion className="w-5 h-5 text-amber-500" />
            {t("Masih ada pertanyaan lain?", "Still have other questions?")}
          </h4>
          <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 font-medium">
            {t(
              "Tim konsultan kami siap menjawab diskusi dan kebutuhan teknis Anda secara gratis.",
              "Our team is ready to answer your technical questions and discussion for free."
            )}
          </p>
        </div>
        <button
          onClick={() => openConsultation()}
          className="shrink-0 px-5 py-2.5 rounded-full bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs transition shadow-md hover:scale-105 active:scale-95 cursor-pointer"
        >
          {t("Ajukan Pertanyaan", "Ask Questions")}
        </button>
      </div>
    </div>
  );
}
