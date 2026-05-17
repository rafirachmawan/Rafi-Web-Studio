import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import heroVideo from "../../assets/Video.mp4";
import { Star, CheckCircle, Zap, Sparkles } from "lucide-react";

export default function HeroSection() {
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

    // For 3D Tilt (applies to the cinematic showcase wrapper)
    const width = rect.width;
    const height = rect.height;
    const centerX = rect.left + width / 2;
    const centerY = rect.top + height / 2;
    
    const mouseXPos = e.clientX - centerX;
    const mouseYPos = e.clientY - centerY;

    rotateY.set((mouseXPos / (width / 2)) * 6); // Max 6deg
    rotateX.set((mouseYPos / (height / 2)) * -6); // Max 6deg
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <div
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative overflow-hidden border border-zinc-200/50 dark:border-white/5 rounded-[32px] md:rounded-[40px] p-5 sm:p-6 md:p-10 bg-white/40 dark:bg-zinc-950/40 backdrop-blur-xl mb-16 shadow-[0_20px_50px_rgba(0,0,0,0.02)] dark:shadow-none transition-colors duration-500"
    >
      {/* MOUSE GLOW */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[32px] md:rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(245, 158, 11, 0.04),
              transparent 80%
            )
          `,
        }}
      />

      {/* FLOATING BLOBS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            x: [0, 30, 0], 
            y: [0, 15, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-amber-500/5 blur-[100px] rounded-full" 
        />
        <motion.div 
          animate={{ 
            x: [0, -15, 0], 
            y: [0, -30, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-500/5 blur-[100px] rounded-full" 
        />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* TEXT & CTA - CENTERED */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center pb-8 md:pb-12">
          {/* BADGE */}
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-600 dark:text-amber-400 text-xs font-bold mb-5 shadow-sm group/badge relative overflow-hidden"
          >
            <Zap className="w-3.5 h-3.5 fill-amber-500/20 group-hover:scale-110 transition-transform" /> 
            <span>Startup Digitalisasi Indonesia</span>
            <motion.div 
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 dark:via-white/5 to-transparent skew-x-12"
            />
          </motion.div>

          {/* HEADLINE */}
          <motion.h1 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-black tracking-tight leading-[1.1] text-zinc-900 dark:text-white flex flex-col items-center gap-1 text-center"
          >
            <span className="opacity-90">Digitalisasi Apapun</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 pb-1 drop-shadow-sm font-black">
              Bisnis Anda.
            </span>
          </motion.h1>

          {/* DESC */}
          <motion.p 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-xs md:text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-xl text-center font-medium"
          >
            GapaiDigital adalah startup digitalisasi modern yang membantu membangun <span className="font-semibold text-zinc-900 dark:text-white">Landing Page</span>, <span className="font-semibold text-zinc-900 dark:text-white">Aplikasi Mobile</span>, hingga <span className="font-semibold text-zinc-900 dark:text-white">Sistem Web Custom</span> untuk mempercepat pertumbuhan bisnis Anda.
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 mt-5 md:mt-7 justify-center w-full sm:w-auto"
          >
            <a
              href="https://wa.me/6285707185783?text=Halo%20saya%20ingin%20konsultasi"
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn relative bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 hover:scale-[1.03] shadow-lg shadow-amber-500/15 active:scale-95 overflow-hidden flex items-center justify-center gap-2"
            >
              <span className="relative z-10 flex items-center gap-2">
                Konsultasi Gratis <Sparkles className="w-3.5 h-3.5" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
            </a>

            <a
              href="#demo"
              className="group/btn2 border border-zinc-200 dark:border-white/10 px-6 py-2.5 rounded-full text-xs md:text-sm font-bold text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-white/5 transition-all duration-300 active:scale-95 flex items-center justify-center gap-2"
            >
              Lihat Portofolio
            </a>
          </motion.div>
        </div>

        {/* CINEMATIC VIDEO SHOWCASE - SHRUNK TO max-w-3xl */}
        <motion.div 
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="relative w-full max-w-3xl mx-auto rounded-2xl md:rounded-[28px] border border-zinc-200/60 dark:border-white/10 bg-zinc-950 group shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-none"
        >
          {/* ASPECT RATIO HOLDER */}
          <div className="aspect-[16/9] w-full rounded-2xl md:rounded-[32px] overflow-hidden">
            <video
              src={heroVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-70 group-hover:opacity-85 transition-all duration-1000"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 pointer-events-none rounded-2xl md:rounded-[32px]" />

          {/* Floating Badge 1 - Left */}
          <motion.div 
            style={{ transform: "translateZ(40px)" }}
            animate={{ y: [-8, 8, -8] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -left-6 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl border border-zinc-200/50 dark:border-white/10 p-4 rounded-2xl items-center gap-3.5 shadow-xl group/badge1 cursor-default hidden lg:flex"
          >
            <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-amber-500/30 group-hover/badge1:scale-110 transition-transform">
              <Star className="w-5 h-5 fill-current" />
            </div>
            <div>
              <p className="text-zinc-900 dark:text-white font-black text-sm">Rating 5.0</p>
              <p className="text-zinc-500 dark:text-zinc-400 text-[10px] font-bold uppercase tracking-wider">Klien Puas</p>
            </div>
          </motion.div>

          {/* Floating Badge 2 - Right */}
          <motion.div 
            style={{ transform: "translateZ(30px)" }}
            animate={{ y: [8, -8, 8] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-6 -right-6 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl border border-zinc-200/50 dark:border-white/10 p-4 rounded-2xl items-center gap-3.5 shadow-xl group/badge2 cursor-default hidden lg:flex"
          >
            <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-emerald-500/30 group-hover/badge2:scale-110 transition-transform">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-zinc-900 dark:text-white font-black text-sm">100+ Proyek</p>
              <p className="text-zinc-500 dark:text-zinc-400 text-[10px] font-bold uppercase tracking-wider">Tepat Waktu</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
