import { motion } from "framer-motion";
import { Trophy, Flag, Calendar, ArrowRight, ExternalLink, Sparkles, Users, Compass, Image as ImageIcon } from "lucide-react";
import { rental } from "../data/rental";

export function RentalRacing() {
  const news = rental.news || [];

  return (
    <section id="racing" className="py-24 sm:py-32 bg-white dark:bg-zinc-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-900 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Trophy size={14} />
            <span>DNA Balap & Komunitas Resmi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-900 dark:text-white font-heading tracking-tight mb-4">
            Yamaha Racing & Activity Update
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
            Dukung kiprah pembalap Yamaha di ajang dunia dan bergabunglah dalam rangkaian acara seru komunitas bLU cRU serta Clan of Classy di seluruh Indonesia.
          </p>
        </div>

        {/* Featured News / Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {news.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="rounded-3xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/80 dark:border-zinc-700/80 overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-500/40 transition-all flex flex-col justify-between group"
            >
              {/* Image banner */}
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900 gap-2">
                  <ImageIcon size={28} className="text-zinc-600" />
                  <span className="text-[10px] text-zinc-500 font-mono">Foto Event • Segera Hadir</span>
                </div>
                <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-white border border-white/20">
                  {item.tag}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[11px] text-zinc-400">
                    <Calendar size={13} />
                    <span>{item.date}</span>
                    <span>•</span>
                    <span className="text-blue-600 dark:text-blue-400 font-semibold">{item.category}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white font-heading leading-snug group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-3">
                    {item.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-200/60 dark:border-zinc-700/60 flex items-center justify-between text-xs">
                  <span className="text-zinc-400 text-[11px] truncate max-w-[150px]">
                    Oleh {item.author}
                  </span>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 group/btn"
                  >
                    <span>Baca Rilis</span>
                    <ExternalLink size={12} className="group-hover/btn:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* bLU cRU Community Spotlight */}
        <div className="rounded-3xl bg-zinc-900 text-white p-8 sm:p-12 border border-zinc-800 shadow-xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-3 z-10 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider">
              <Users size={14} />
              <span>Komunitas Resmi bLU cRU Indonesia</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black font-heading tracking-tight">
              Satu Passion, Beragam Cerita di Lintasan
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Bergabunglah dengan ribuan pencinta balap dan pemilik motor R-Series, MT-Series, serta WR155R. Dapatkan pelatihan eksklusif Yamaha Riding Academy (YRA), diskon parts balap, dan tiket nonton kejuaraan nasional & internasional.
            </p>
          </div>

          <div className="shrink-0 z-10 flex flex-col sm:flex-row gap-3">
            <a
              href="https://www.yamaha-motor.co.id/bLUcRU/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-600/25 transition-all flex items-center justify-center gap-2"
            >
              <span>Gabung bLU cRU</span>
              <ArrowRight size={15} />
            </a>

            <a
              href="https://www.yamaha-motor.co.id/racing/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-2xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs sm:text-sm border border-zinc-700 transition-all flex items-center justify-center gap-2"
            >
              <span>Yamaha Racing Portal</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
