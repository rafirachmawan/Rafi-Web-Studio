import { MessageSquare, PenTool, Code, Rocket, HeadphonesIcon } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export default function ProcessSection() {
  const { t } = useLanguage();

  const steps = [
    {
      id: "01",
      title: t("Konsultasi Gratis", "Free Consultation"),
      desc: t("Kami dengarkan kebutuhan dan tujuan bisnis Anda. Diskusi santai untuk menemukan solusi terbaik.", "We listen to your business needs and goals. Relaxed discussion to find the best solutions."),
      icon: MessageSquare,
    },
    {
      id: "02",
      title: t("Konsep & Desain", "Concept & Design"),
      desc: t("Pembuatan wireframe dan desain visual (UI/UX). Anda akan menerima preview sebelum mulai coding.", "Creation of wireframe and visual design (UI/UX). You will receive a preview before coding begins."),
      icon: PenTool,
    },
    {
      id: "03",
      title: t("Development & Revisi", "Development & Revisions"),
      desc: t("Mulai proses coding dan perakitan fitur. Anda dapat melihat progres dan mengajukan revisi.", "Starting the coding process and feature building. You can track progress and request revisions."),
      icon: Code,
    },
    {
      id: "04",
      title: t("Launching", "Launching"),
      desc: t("Testing akhir, optimasi kecepatan, dan website siap diakses oleh seluruh dunia.", "Final testing, speed optimization, and the website is ready to be accessed by the whole world."),
      icon: Rocket,
    },
    {
      id: "05",
      title: t("Maintenance & Support", "Maintenance & Support"),
      desc: t("Kami tetap mendampingi Anda setelah rilis untuk memastikan semuanya berjalan lancar.", "We remain by your side after release to ensure everything runs smoothly."),
      icon: HeadphonesIcon,
    },
  ];

  return (
    <section id="proses" className="relative py-16 md:py-24 bg-transparent dark:bg-zinc-900/20 border-t border-b border-amber-500/10 dark:border-white/5">
      {/* Light mode inner glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50/30 via-transparent to-orange-50/20 dark:opacity-0 pointer-events-none" />
      
      {/* EDITORIAL SECTION NUMBER */}
      <div className="absolute top-8 right-4 md:right-8 select-none pointer-events-none z-0 text-right">
        <span 
          className="text-[6rem] md:text-[9rem] font-black leading-none text-transparent"
          style={{
            WebkitTextStroke: "1px",
            WebkitTextStrokeColor: "rgba(245,158,11,0.07)"
          }}
        >02</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* STICKY LEFT HEADER */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-4 md:space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-wider">
               {t("Cara Kami Bekerja", "How We Work")}
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.15] text-zinc-900 dark:text-white">
              {t("Proses yang", "A Process That Is")} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
                {t("Transparan & Cepat", "Transparent & Fast")}
              </span>
            </h2>

            <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed max-w-md font-medium">
              {t("Kami memecah project kompleks menjadi langkah-langkah sederhana agar Anda selalu memegang kendali atas apa yang sedang kami kerjakan. Tanpa kebingungan teknis.", "We break down complex projects into simple steps so you are always in control of what we are working on. No technical confusion.")}
            </p>
          </div>

          {/* RIGHT SIDE TIMELINE CARDS */}
          <div className="lg:col-span-7 relative mt-6 lg:mt-0">
            {/* Dotted Connection Line */}
            <div className="absolute left-7 md:left-[3.5rem] top-10 bottom-10 w-0.5 border-l-2 border-dashed border-amber-500/30 hidden md:block" />

            <div className="space-y-4 md:space-y-6 relative z-10">
              {steps.map((step) => (
                <div 
                  key={step.id}
                  className="group flex flex-col md:flex-row gap-4 md:gap-8 items-start bg-white dark:bg-zinc-900/60 p-6 md:p-8 rounded-3xl border border-black/5 dark:border-white/5 hover:border-amber-500/30 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  {/* ICON BLOCK */}
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-amber-500/10 text-amber-500 font-bold group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
                    <step.icon className="w-5 h-5 md:w-8 md:h-8" />
                  </div>

                  {/* CONTENT */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2 md:mb-3">
                      <span className="text-amber-500 font-black text-sm md:text-base">
                        {t("Tahap", "Step")} {step.id}
                      </span>
                      <div className="h-1 w-1 bg-zinc-300 dark:bg-zinc-700 rounded-full" />
                      <h3 className="text-lg md:text-xl font-bold tracking-tight text-zinc-900 dark:text-white group-hover:text-amber-500 transition-colors">
                        {step.title}
                      </h3>
                    </div>

                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm md:text-base font-medium">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
