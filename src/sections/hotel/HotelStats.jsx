// src/sections/hotel/HotelStats.jsx
// Statistics section with image placeholders

import { motion } from "framer-motion";
import { Trophy, Users, Award } from "lucide-react";

export function HotelStats() {
  const stats = [
    { value: "50+", label: "Premium Rooms" },
    { value: "5K+", label: "Happy Guests" },
    { value: "4★", label: "Rating" },
    { value: "24/7", label: "Service" },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-purple-50 via-violet-50 to-fuchsia-50">
      {/* Subtle Background Pattern */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(147, 51, 234, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Stats */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 mb-6">
                <Trophy className="w-3 h-3 text-purple-600" />
                <span className="text-purple-600 text-xs font-bold uppercase tracking-widest">
                  Our Excellence
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl font-black text-zinc-900 mb-6 tracking-tight">
                Setting the Standard
                <br />
                for Luxury Hospitality
              </h2>

              <p className="text-zinc-600 text-sm leading-relaxed mb-8">
                Dengan lebih dari 10 tahun pengalaman dalam industri perhotelan,
                Crown Victoria Hotel terus berkomitmen memberikan pengalaman
                menginap terbaik dengan sentuhan Victorian yang autentik.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 bg-white border border-zinc-200 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="text-3xl font-black text-purple-600 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-zinc-500 text-xs uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Awards */}
              <div className="mt-8 flex items-center gap-4">
                <div className="flex items-center gap-2 p-3 bg-white border border-zinc-200 rounded-lg shadow-sm">
                  <Award className="w-5 h-5 text-purple-600" />
                  <div>
                    <div className="text-zinc-900 text-xs font-bold">
                      4-Star Hotel
                    </div>
                    <div className="text-zinc-500 text-[10px]">
                      Official Rating
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-3 bg-white border border-zinc-200 rounded-lg shadow-sm">
                  <Users className="w-5 h-5 text-purple-600" />
                  <div>
                    <div className="text-zinc-900 text-xs font-bold">
                      Top Rated
                    </div>
                    <div className="text-zinc-500 text-[10px]">
                      Guest Choice 2024
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right - Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {/* Main Image */}
            <div className="col-span-2 bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-sm">
              <div className="aspect-video flex items-center justify-center">
                <div className="text-center px-4">
                  <Trophy className="w-12 h-12 text-purple-500/30 mx-auto mb-3" />
                  <p className="text-zinc-400 text-[10px] font-medium uppercase tracking-widest">
                    Hotel Exterior Image
                  </p>
                </div>
                <img src="" alt="Hotel Exterior" style={{ display: "none" }} />
              </div>
            </div>

            {/* Secondary Images */}
            <div className="bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-sm">
              <div className="aspect-[4/5] flex items-center justify-center">
                <div className="text-center px-4">
                  <Award className="w-10 h-10 text-purple-500/30 mx-auto mb-3" />
                  <p className="text-zinc-400 text-[10px] font-medium uppercase tracking-widest">
                    Lobby Image
                  </p>
                </div>
                <img src="" alt="Lobby" style={{ display: "none" }} />
              </div>
            </div>

            <div className="bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-sm">
              <div className="aspect-[4/5] flex items-center justify-center">
                <div className="text-center px-4">
                  <Users className="w-10 h-10 text-purple-500/30 mx-auto mb-3" />
                  <p className="text-zinc-400 text-[10px] font-medium uppercase tracking-widest">
                    Guest Service Image
                  </p>
                </div>
                <img src="" alt="Guest Service" style={{ display: "none" }} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
