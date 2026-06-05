import { ExternalLink, Send } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import founderPortrait from "../../assets/foto formal.jpg";
import { motion } from "framer-motion";

export default function FounderSection() {
  const { t } = useLanguage();
  // CONFIGURABLE LINKS - Silakan ubah URL di bawah ini sesuai keinginan Anda
  const portfolioUrl = "https://website-profile-react.vercel.app/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGnUVJ8I1A5zVVGCgB5W7plomzM5RRp7ppn3IqwgT5QFrbQaI1jZmmVOwaB1As_aem_FeRrnkq3nQfVmpCoe8hsvw";
  const githubUrl = "https://github.com/rafirachmawan";
  const instagramUrl = "https://www.instagram.com/rrrafi.rachmawan/";
  const linkedinUrl = "https://www.linkedin.com/in/rafi-rachmawan-2a8728233/";

  return (
    <section id="founder" className="relative py-24 overflow-hidden border-t border-black/5 dark:border-white/5 bg-zinc-50/20 dark:bg-transparent">
      {/* Glow decorative background */}
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute left-0 top-0 w-[300px] h-[300px] bg-orange-500/5 blur-[100px] rounded-full pointer-events-none animate-pulse" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-500 text-[10px] sm:text-xs font-extrabold uppercase tracking-widest mb-4"
          >
            {t("👤 Di Balik Layar", "👤 Behind The Scenes")}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-white"
          >
            Meet the <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600">Founder</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm font-semibold max-w-lg mx-auto"
          >
            {t("Orang di balik layar yang memastikan kualitas, kecepatan, dan keberhasilan digitalisasi proyek bisnis Anda.", "The person behind the scenes ensuring the quality, speed, and success of your business project digitalization.")}
          </motion.p>
        </div>

        {/* Content Layout */}
        <div className="grid md:grid-cols-12 gap-10 md:gap-12 items-center">
          
          {/* LEFT: Portrait & Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5 flex flex-col items-center"
          >
            <div className="relative group p-3 bg-white dark:bg-zinc-900/60 border border-black/5 dark:border-white/5 rounded-[2.5rem] shadow-xl hover:shadow-2xl dark:shadow-none transition-all duration-500 hover:scale-[1.01] max-w-[320px] w-full">
              {/* Gold outer border glow on hover */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-r from-amber-500 to-orange-500 opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500" />
              
              {/* Portrait container */}
              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] border border-black/5 dark:border-white/5">
                <img 
                  src={founderPortrait} 
                  alt="Rafi Rachmawan" 
                  className="w-full h-full object-cover object-top grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-60 group-hover:opacity-80 transition-opacity" />
                
                {/* Quick identity on photo */}
                <div className="absolute bottom-5 left-5 right-5 text-left text-white">
                  <h3 className="text-lg font-black tracking-tight">Rafi Rachmawan</h3>
                  <p className="text-[10px] font-bold text-amber-400 uppercase tracking-widest mt-0.5">Founder & Lead Developer</p>
                </div>
              </div>

              {/* Socials & Info inside card */}
              <div className="pt-5 pb-2 px-3 flex justify-between items-center relative z-10 border-t border-black/5 dark:border-white/5 mt-4">
                <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">{t("Temukan Saya:", "Find Me:")}</span>
                <div className="flex gap-2">
                  <a 
                    href={githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2 rounded-lg bg-zinc-100 hover:bg-black hover:text-white dark:bg-white/5 dark:hover:bg-amber-500 dark:hover:text-black text-zinc-600 dark:text-zinc-400 transition-all flex items-center justify-center"
                    aria-label="GitHub"
                  >
                    <svg className="w-[14px] h-[14px] fill-current" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a 
                    href={instagramUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2 rounded-lg bg-zinc-100 hover:bg-black hover:text-white dark:bg-white/5 dark:hover:bg-amber-500 dark:hover:text-black text-zinc-600 dark:text-zinc-400 transition-all flex items-center justify-center"
                    aria-label="Instagram"
                  >
                    <svg className="w-[14px] h-[14px] stroke-current fill-none stroke-[2]" viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a 
                    href={linkedinUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2 rounded-lg bg-zinc-100 hover:bg-black hover:text-white dark:bg-white/5 dark:hover:bg-amber-500 dark:hover:text-black text-zinc-600 dark:text-zinc-400 transition-all flex items-center justify-center"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-[14px] h-[14px] fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Biography & Message */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7 space-y-6 text-left"
          >
            <h3 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white">
              "{t("Komitmen Kami Adalah", "Our Commitment Is")}{" "}<br className="xs:hidden" />
              <span className="text-amber-500">{t("Kesuksesan Skala Bisnis Anda", "Your Business Scale's Success")}</span>."
            </h3>

            <div className="space-y-4 text-zinc-600 dark:text-zinc-300 text-xs sm:text-sm font-semibold leading-relaxed">
              <p>
                {t("Halo! Saya Rafi Rachmawan, orang di balik layar GapaiDigital. Sejak awal membangun agensi ini, misi saya adalah memberikan solusi digital berkualitas kelas enterprise untuk bisnis lokal, UMKM, dan personal branding tanpa membebani anggaran Anda.", "Hello! I am Rafi Rachmawan, the person behind GapaiDigital. Since establishing this agency, my mission has been to provide enterprise-grade, high-quality digital solutions for local businesses, MSMEs, and personal branding without straining your budget.")}
              </p>
              <p>
                {t("Setiap baris kode, arsitektur database, desain antarmuka, hingga performa SEO saya awasi dan kembangkan secara personal bersama tim untuk memastikan website dan aplikasi Anda memiliki kualitas terbaik—cepat, responsif, dan aman.", "Every line of code, database architecture, interface design, to SEO performance is personally supervised and developed by me alongside the team to ensure your website and app have the best quality—fast, responsive, and secure.")}
              </p>
              <p>
                {t("Bagi saya, digitalisasi bukan sekadar memiliki website atau aplikasi, melainkan membangun sistem yang bekerja 24/7 untuk meningkatkan kredibilitas brand Anda dan mendatangkan konversi penjualan yang nyata.", "To me, digitalization is not just about having a website or an app, but building a system that works 24/7 to boost your brand credibility and drive real sales conversions.")}
              </p>
            </div>

            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <a
                href={portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-black font-black text-xs sm:text-sm shadow-lg shadow-amber-500/20 hover:scale-[1.02] transition-all"
              >
                {t("Kunjungi Portofolio Saya", "Visit My Portfolio")}
                <ExternalLink size={16} />
              </a>

              <a
                href="https://wa.me/6285707185783?text=Halo%20Rafi,%20saya%20ingin%20berdiskusi%20mengenai%20proyek%20custom"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl border border-black/10 dark:border-white/10 hover:border-amber-500/30 bg-black/[0.02] dark:bg-white/5 hover:bg-black/[0.05] dark:hover:bg-white/10 text-zinc-800 dark:text-white font-bold text-xs sm:text-sm hover:scale-[1.02] transition-all"
              >
                {t("Diskusi Langsung via WA", "Direct Discussion via WA")}
                <Send size={14} className="text-amber-500" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
