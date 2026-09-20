import { motion } from "framer-motion";
import { Flame, Utensils, Sparkles, Clock } from "lucide-react";
import { restoInfo } from "../data/resto";

const iconMap = {
  Flame,
  Utensils,
  Sparkles,
  Clock,
};

export function RestoFeatures() {
  return (
    <section id="features" className="py-16 px-4 sm:px-6 bg-white border-y border-purple-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-violet-200 bg-violet-50 text-violet-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-violet-600" />
            <span>Keunggulan Kami</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-3">
            Kenapa Mie Gacoan Mojokerto?
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Standar rasa terbaik, harga merakyat, dan kenyamanan nongkrong kapan pun kamu mau.
          </p>
        </div>

        {/* Features Grid - Clean & Minimal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {restoInfo.features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon] || Sparkles;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 rounded-2xl bg-gradient-to-b from-purple-50/40 to-white border border-purple-100 hover:border-violet-300 hover:shadow-lg hover:shadow-violet-500/10 transition-all duration-300 flex flex-col items-center text-center sm:items-start sm:text-left"
              >
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-violet-100 text-violet-700 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-violet-600 group-hover:text-white transition-all duration-300">
                  <IconComponent className="w-6 h-6" />
                </div>

                {/* Title */}
                <h3 className="text-slate-900 font-bold text-base mb-2 group-hover:text-violet-700 transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
