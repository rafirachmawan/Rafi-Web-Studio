import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring, useMotionTemplate } from "framer-motion";
import heroVideo from "../../assets/Video.mp4";
import { Star, CheckCircle, Zap, Sparkles } from "lucide-react";

const phrases = [
  "Website yang Menjual",
  "Sistem Kasir Efisien",
  "Mobile App Modern",
  "Landing Page Premium"
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);

  // Mouse Glow Position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 3D Tilt Values
  const rotateX = useSpring(useMotionValue(0), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 100, damping: 30 });

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    
    // For Mouse Glow
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);

    // For 3D Tilt
    const width = rect.width;
    const height = rect.height;
    const centerX = rect.left + width / 2;
    const centerY = rect.top + height / 2;
    
    const mouseXPos = e.clientX - centerX;
    const mouseYPos = e.clientY - centerY;

    rotateY.set((mouseXPos / (width / 2)) * 10); // Max 10deg
    rotateX.set((mouseYPos / (height / 2)) * -10); // Max 10deg
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative overflow-hidden border border-black/10 dark:border-white/10 rounded-[24px] md:rounded-[40px] p-5 sm:p-6 md:p-10 bg-white dark:bg-zinc-950 backdrop-blur-xl mb-16 shadow-[0_20px_50px_rgba(0,0,0,0.05)] dark:shadow-none transition-colors duration-500"
    >
      {/* MOUSE GLOW */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[24px] md:rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(245, 158, 11, 0.08),
              transparent 80%
            )
          `,
        }}
      />

      {/* FLOATING BLOBS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            x: [0, 50, 0], 
            y: [0, 30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -right-20 w-80 h-80 bg-amber-500/5 blur-[100px] rounded-full" 
        />
        <motion.div 
          animate={{ 
            x: [0, -30, 0], 
            y: [0, -50, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-20 -left-20 w-80 h-80 bg-orange-500/5 blur-[100px] rounded-full" 
        />
      </div>

      <div className="relative grid md:grid-cols-2 gap-10 md:gap-16 items-center z-10">
        {/* TEXT */}
        <div className="order-2 md:order-1 relative">
          {/* BADGE */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-600 dark:text-amber-400 text-xs md:text-sm font-bold mb-5 md:mb-6 shadow-sm group/badge relative overflow-hidden"
          >
            <Zap className="w-4 h-4 fill-amber-500/20 group-hover:scale-110 transition-transform" /> 
            <span>Solusi Digital All-in-One</span>
            <motion.div 
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 dark:via-white/5 to-transparent skew-x-12"
            />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight leading-[1.05] text-black dark:text-white flex flex-col gap-1 sm:gap-2 min-h-[140px] sm:min-h-[160px] md:min-h-[210px]"
          >
            <span className="opacity-90">Bangun</span>
            <div className="relative w-full h-[90px] sm:h-[110px] md:h-[120px]">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={index}
                  initial={{ y: 40, opacity: 0, filter: "blur(8px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: -40, opacity: 0, filter: "blur(8px)" }}
                  transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                  className="absolute left-0 top-0 w-full text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 pb-2 drop-shadow-sm"
                >
                  {phrases[index]}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.h1>

          {/* DESC */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 md:mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-lg"
          >
            Rafi Web Studio hadir untuk mendigitalisasi bisnis Anda dengan website cepat, dashboard interaktif, dan aplikasi mobile yang memukau.
          </motion.p>

          {/* BUTTON */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4 mt-8 md:mt-10"
          >
            <a
              href="https://wa.me/6285707185783?text=Halo%20saya%20ingin%20konsultasi"
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn relative bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-full text-sm md:text-base font-bold transition-all duration-300 hover:scale-[1.05] shadow-xl shadow-amber-500/25 active:scale-95 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Konsultasi Gratis <Sparkles className="w-4 h-4" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
            </a>

            <a
              href="#demo"
              className="group/btn2 border border-black/10 dark:border-white/10 px-8 py-4 rounded-full text-sm md:text-base font-bold text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300 active:scale-95 flex items-center gap-2"
            >
              Lihat Portofolio
            </a>
          </motion.div>
        </div>

        {/* VIDEO & FLOATING BADGES */}
        <motion.div 
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="order-1 md:order-2 relative h-[300px] sm:h-[350px] md:h-[480px] rounded-[32px] overflow-hidden border border-black/5 dark:border-white/10 bg-zinc-900 group shadow-2xl"
        >
          <video
            src={heroVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-1000"
          />

          <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/20 to-amber-500/20" />

          {/* Floating Badge 1 */}
          <motion.div 
            style={{ transform: "translateZ(50px)" }}
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-8 left-8 bg-white/10 dark:bg-black/60 backdrop-blur-xl border border-white/20 p-4 rounded-2xl flex items-center gap-4 shadow-2xl group/badge1 cursor-default"
          >
            <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-amber-500/30 group-hover/badge1:scale-110 transition-transform">
              <Star className="w-6 h-6 fill-current" />
            </div>
            <div>
              <p className="text-white font-black text-base">Rating 5.0</p>
              <p className="text-white/60 text-xs font-semibold uppercase tracking-wider">Klien Puas</p>
            </div>
          </motion.div>

          {/* Floating Badge 2 */}
          <motion.div 
            style={{ transform: "translateZ(30px)" }}
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-8 right-8 bg-white/10 dark:bg-black/60 backdrop-blur-xl border border-white/20 p-4 rounded-2xl flex items-center gap-4 shadow-2xl group/badge2 cursor-default"
          >
            <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-emerald-500/30 group-hover/badge2:scale-110 transition-transform">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div>
              <p className="text-white font-black text-base">100+ Proyek</p>
              <p className="text-white/60 text-xs font-semibold uppercase tracking-wider">Selesai Tepat Waktu</p>
            </div>
          </motion.div>

          {/* DECORATIVE LIGHT */}
          <div className="absolute -inset-2 bg-amber-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </motion.div>
      </div>
    </div>
  );
}
