import { motion } from "framer-motion";
import { MessageSquare, PenTool, Code, Rocket, HeadphonesIcon } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      id: "01",
      title: "Konsultasi Gratis",
      desc: "Kami dengarkan kebutuhan dan tujuan bisnis Anda. Diskusi santai untuk menemukan solusi terbaik.",
      icon: MessageSquare,
    },
    {
      id: "02",
      title: "Konsep & Desain",
      desc: "Pembuatan wireframe dan desain visual (UI/UX). Anda akan menerima preview sebelum mulai coding.",
      icon: PenTool,
    },
    {
      id: "03",
      title: "Development & Revisi",
      desc: "Mulai proses coding dan perakitan fitur. Anda dapat melihat progres dan mengajukan revisi.",
      icon: Code,
    },
    {
      id: "04",
      title: "Launching",
      desc: "Testing akhir, optimasi kecepatan, dan website siap diakses oleh seluruh dunia.",
      icon: Rocket,
    },
    {
      id: "05",
      title: "Maintenance & Support",
      desc: "Kami tetap mendampingi Anda setelah rilis untuk memastikan semuanya berjalan lancar.",
      icon: HeadphonesIcon,
    },
  ];

  return (
    <div id="proses" className="mt-32 mb-24 grid lg:grid-cols-2 gap-16 lg:gap-10 items-start max-w-6xl mx-auto px-4">
      {/* LEFT */}
      <div className="lg:sticky lg:top-32 h-fit">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-500 text-[10px] md:text-xs font-bold mb-5"
        >
          CARA KAMI BEKERJA
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.1 }}
          className="text-xl sm:text-2xl md:text-3xl font-black leading-tight text-black dark:text-white"
        >
          Proses yang <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
            Transparan & Cepat.
          </span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.2 }}
          className="text-zinc-600 dark:text-zinc-400 mt-4 max-w-md text-sm md:text-base leading-relaxed"
        >
          Kami memecah proyek kompleks menjadi langkah-langkah sederhana agar Anda selalu memegang kendali atas apa yang sedang kami kerjakan.
        </motion.p>
      </div>

      {/* RIGHT */}
      <div className="relative">
        {/* Continuous Line Background */}
        <div className="absolute left-6 md:left-[2.1rem] top-8 bottom-8 w-[2px] bg-black/5 dark:bg-white/5 rounded-full" />

        <div className="space-y-12 relative z-10">
          {steps.map((step, i) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-6 md:gap-10 items-start group"
            >
              <div className="flex flex-col items-center relative z-20">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10 flex items-center justify-center text-amber-500 font-bold group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300 shadow-xl shadow-black/5 dark:shadow-none">
                  <step.icon className="w-5 h-5 md:w-7 md:h-7" />
                </div>
              </div>

              <div className="pt-2 md:pt-3 pb-8 border-b border-black/5 dark:border-white/5 flex-1 group-hover:border-amber-500/30 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-amber-500 font-black text-xs md:text-sm">
                    {step.id}
                  </span>
                  <h3 className="text-base md:text-lg font-bold tracking-tight text-black dark:text-white group-hover:text-amber-500 transition-colors">
                    {step.title}
                  </h3>
                </div>

                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium text-xs md:text-sm">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
