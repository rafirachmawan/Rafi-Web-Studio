import FounderSection from "../components/home/FounderSection";
import BigCTASection from "../components/home/BigCTASection";
import usePageMeta from "../hooks/usePageMeta";
import { useLanguage } from "../context/LanguageContext";
import { useConsultation } from "../context/ConsultationContext";
import { MessageSquare, Mail, MapPin, Clock, Send, Sparkles, PhoneCall } from "lucide-react";

export default function Contact() {
  const { t } = useLanguage();
  const { openConsultation } = useConsultation();

  usePageMeta({
    title: "Hubungi Kami & Konsultasi Gratis",
    description: "Hubungi tim GapaiDigital untuk konsultasi kebutuhan website, sistem kustom, atau aplikasi mobile bisnis Anda."
  });

  const contactChannels = [
    {
      icon: MessageSquare,
      title: "WhatsApp Chat",
      value: "+62 857-0718-5783",
      desc: t("Respon cepat untuk diskusi proyek & konsultasi", "Fast response for project discussions & consultations"),
      action: () => openConsultation("Konsultasi via Contact"),
      btnText: t("Mulai Chat", "Start Chat"),
      highlight: true
    },
    {
      icon: Mail,
      title: "Email",
      value: "rafirachmawan1987@gmail.com",
      desc: t("Untuk penawaran resmi, proposal, & kerjasama", "For official quotes, proposals, & partnerships"),
      href: "mailto:rafirachmawan1987@gmail.com",
      btnText: t("Kirim Email", "Send Email")
    },
    {
      icon: MapPin,
      title: t("Lokasi Studio", "Studio Location"),
      value: "Tulungagung, Jawa Timur",
      desc: t("Melayani klien dari seluruh Indonesia secara remote & hybrid", "Serving clients across Indonesia remotely & hybrid"),
      btnText: t("Lihat Peta", "View Map"),
      href: "https://maps.google.com/?q=Tulungagung"
    },
    {
      icon: Clock,
      title: t("Jam Operasional", "Operating Hours"),
      value: "Senin - Sabtu (08.00 - 21.00 WIB)",
      desc: t("Tim support siap mendampingi kebutuhan proyek Anda", "Support team ready to assist your project needs")
    }
  ];

  return (
    <>
      <div className="pt-24 pb-12 px-4 max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-black uppercase tracking-widest mb-4">
            <Sparkles size={14} />
            <span>{t("KONSULTASI GRATIS", "FREE CONSULTATION")}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white font-heading mb-4 leading-tight">
            {t("Mari Wujudkan Solusi Digital ", "Let's Build Your Digital Solution ")}
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              {t("Impian Bisnis Anda", "Dream for Your Business")}
            </span>
          </h1>

          <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {t(
              "Tim kami siap membantu menganalisis kebutuhan, memberikan saran teknologi terbaik, dan merancang estimasi anggaran yang transparan.",
              "Our team is ready to analyze your needs, suggest best technology solutions, and design transparent budget estimates."
            )}
          </p>
        </div>

        {/* CHANNELS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {contactChannels.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`p-6 rounded-3xl border flex flex-col justify-between transition-all duration-300 ${
                  item.highlight
                    ? "bg-gradient-to-b from-amber-500/10 to-transparent border-amber-500/40 shadow-xl shadow-amber-500/5"
                    : "bg-white dark:bg-zinc-900/50 border-zinc-200/80 dark:border-zinc-800/80"
                }`}
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 mb-5">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xs font-extrabold text-zinc-400 uppercase tracking-widest mb-1">
                    {item.title}
                  </h3>
                  <p className="text-base font-black text-zinc-900 dark:text-white mb-2 line-clamp-1">
                    {item.value}
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6 font-medium">
                    {item.desc}
                  </p>
                </div>

                {item.action ? (
                  <button
                    onClick={item.action}
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider transition-all hover:scale-[1.02] shadow-md shadow-amber-500/20 cursor-pointer"
                  >
                    <span>{item.btnText}</span>
                    <Send size={14} />
                  </button>
                ) : item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-900 dark:text-zinc-100 font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider transition-all"
                  >
                    <span>{item.btnText}</span>
                  </a>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>

      <FounderSection />
      <BigCTASection />
    </>
  );
}
