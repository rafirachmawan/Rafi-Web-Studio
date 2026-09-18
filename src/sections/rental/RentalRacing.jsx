// src/sections/rental/RentalRacing.jsx
// Racing Section for Yamaha Motor Indonesia

import { motion } from "framer-motion";
import { Trophy, Flag, Target } from "lucide-react";

export function RentalRacing() {
  const racers = [
    {
      name: "Fabio Quartararo",
      team: "Monster Energy Yamaha MotoGP",
      bike: "YZR-M1",
      number: "20",
      achievements: "MotoGP World Champion 2021",
    },
    {
      name: "Maverick Vinales",
      team: "Monster Energy Yamaha MotoGP",
      bike: "YZR-M1",
      number: "12",
      achievements: "Race Winner - multiple races",
    },
    {
      name: "Jordan Mahfalsy",
      team: "Yamaha Riding Academy",
      bike: "YZF-R15",
      number: "7",
      achievements: "Asian Road Racing Champion",
    },
    {
      name: "Gino Hernandez",
      team: "YZF Team",
      bike: "MT-09 GP",
      number: "18",
      achievements: "Supercross Champion",
    },
  ];

  const racingCategories = [
    {
      name: "MotoGP",
      description:
        "Kelas tertinggi balap motor dunia dengan teknologi paling canggih",
      icon: <Trophy size={32} />,
    },
    {
      name: "Superbike (SBK)",
      description:
        "Balapan sportbike berdasarkan mesin produksi dengan modifikasi balap",
      icon: <Flag size={32} />,
    },
    {
      name: "MX / Motocross",
      description: "Balap lintas alam dengan medan yang penuh tantangan",
      icon: <Target size={32} />,
    },
  ];

  return (
    <section id="racing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-blue-500 text-xs font-semibold tracking-widest uppercase mb-4">
            YAMAHA RACING
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
            DNA of Racing
          </h3>
          <p className="text-zinc-600 max-w-2xl mx-auto">
            Yamaha telah berkomitmen dalam dunia balap sejak tahun 1950-an.
            Teknologi balap kami mentransfer ke produk konsumen untuk pengalaman
            berkendara terbaik.
          </p>
        </motion.div>

        {/* Racing Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {racingCategories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white mx-auto mb-6">
                {category.icon}
              </div>
              <h4 className="text-xl font-bold text-zinc-900 mb-3">
                {category.name}
              </h4>
              <p className="text-zinc-600 text-sm">{category.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Racers Grid */}
        <div className="mb-12">
          <h4 className="text-2xl font-bold text-zinc-900 text-center mb-8">
            Our Champions
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {racers.map((racer, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all"
              >
                {/* Racing Number Badge (Top Right) */}
                <div className="absolute top-3 right-3 bg-yellow-500 text-black text-sm font-bold px-3 py-1 rounded shadow-lg">
                  #{racer.number}
                </div>

                {/* Placeholder Image Area */}
                <div className="aspect-[4/3] bg-gradient-to-b from-zinc-50 to-white border-b border-zinc-200 flex items-center justify-center p-6">
                  <span className="text-zinc-400 text-xl font-semibold tracking-wide">
                    Placeholder
                  </span>
                </div>

                {/* Info Section */}
                <div className="p-5">
                  <h4 className="font-bold text-zinc-900 text-lg mb-2">
                    {racer.name}
                  </h4>

                  {/* Team - Muted */}
                  <p className="text-zinc-500 text-xs mb-3">{racer.team}</p>

                  {/* Achievements Section */}
                  <div className="border-t border-zinc-100 pt-3 space-y-2">
                    {/* Achievement Badge */}
                    <div className="flex items-start gap-2">
                      <Trophy
                        size={14}
                        className="text-blue-500 mt-0.5 flex-shrink-0"
                      />
                      <p className="text-zinc-600 text-xs leading-relaxed">
                        {racer.achievements}
                      </p>
                    </div>

                    {/* Bike Model */}
                    <div className="flex items-center gap-2 text-xs text-zinc-500">
                      <Flag size={14} className="text-blue-500 flex-shrink-0" />
                      <span>{racer.bike}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href={`https://wa.me/6281212345678?text=${encodeURIComponent(`Halo, saya ingin informasi tentang Yamaha Racing`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-black font-bold rounded-lg transition-colors"
          >
            <Flag size={20} />
            Ikuti Komunitas Yamaha Racing
          </a>
        </motion.div>
      </div>
    </section>
  );
}
