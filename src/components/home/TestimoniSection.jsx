import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

import unitaImg from "../../assets/UNITACover.jpg";
import nikoImg from "../../assets/NikoNikoCover.jpg";
import starbucksImg from "../../assets/StarbucksCover.jpg";

const testimonials = [
  {
    name: "Universitas Tulungagung",
    role: "Institusi Pendidikan",
    image: unitaImg,
    text: "Sistem informasi akademik dan landing page yang dibangun sangat modern dan responsif. Sangat membantu digitalisasi kampus kami menjadi lebih profesional dan mudah diakses.",
  },
  {
    name: "Niko Niko Ramen",
    role: "F&B / Restoran",
    image: nikoImg,
    text: "Tampilan website sangat menggugah selera dan sistem pemesanan online berjalan mulus. Visibilitas brand dan interaksi pelanggan kami meningkat pesat sejak web baru diluncurkan!",
  },
  {
    name: "Starbucks",
    role: "Coffee Shop & Lifestyle",
    image: starbucksImg,
    text: "Desain UI/UX yang elegan, dinamis, dan sangat merepresentasikan brand premium kami. Pengalaman pelanggan dalam melihat katalog menu menjadi jauh lebih interaktif dan berkelas.",
  }
];

export default function TestimoniSection() {
  // Duplicate array multiple times for smooth infinite scrolling
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <div id="testimoni" className="mt-32 mb-24 w-full overflow-hidden">
      {/* TITLE */}
      <div className="text-center mb-16 px-4 md:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 leading-tight text-zinc-900 dark:text-white">
          Kisah Sukses{" "}
          <span className="bg-gradient-to-r from-amber-500 to-yellow-400 bg-clip-text text-transparent">
            Klien Kami
          </span>
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-sm md:text-base font-medium">
          Kepercayaan mereka adalah bukti dedikasi kami dalam menghadirkan solusi digitalisasi bisnis modern yang berkualitas tinggi.
        </p>
      </div>

      {/* MARQUEE SLIDER */}
      <div className="relative w-full flex items-center">
        {/* Left & Right gradient masks for smooth fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[#fafafc] dark:from-[#050508] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[#fafafc] dark:from-[#050508] to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-6 md:gap-8 px-4 py-8 cursor-grab active:cursor-grabbing"
          animate={{ x: [0, -1000] }} // Will be adjusted by CSS or framer motion width tracking if needed, but a simple percentage translation is better.
          // Wait, animating x: ["0%", "-50%"] is safer if we duplicate 2 times. We duplicated 3 times, so "-33.33%" is 1 full set.
          // Since the flex container holds all items, we can use x: ["0%", "-33.33%"] or let Framer track the inner width.
          style={{ width: "max-content" }}
        />
        
        <motion.div
          className="flex gap-6 md:gap-8 w-max pl-4 md:pl-8 hover:animation-pause"
          animate={{ x: ["0%", "-33.333333%"] }}
          transition={{ 
            repeat: Infinity, 
            ease: "linear", 
            duration: 25 // Adjust speed here
          }}
          whileHover={{ animationPlayState: "paused" }} // Fallback approach
        >
          {duplicatedTestimonials.map((item, idx) => (
            <div
              key={idx}
              className="w-[260px] md:w-[320px] shrink-0 bg-white dark:bg-[#0a0a0a] border border-zinc-200 dark:border-white/10 rounded-2xl p-5 md:p-6 flex flex-col justify-between group hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)] transition-all duration-300"
            >
              <div>
                <Quote className="w-6 h-6 text-amber-500 mb-3 opacity-80" />
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-zinc-800 dark:text-zinc-200 text-xs md:text-sm font-medium leading-relaxed mb-6">
                  "{item.text}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-zinc-100 dark:border-white/5">
                <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-amber-500/30 bg-zinc-100 dark:bg-zinc-900 shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xs md:text-sm font-bold text-zinc-900 dark:text-white line-clamp-1">
                    {item.name}
                  </h4>
                  <p className="text-[10px] text-amber-600 dark:text-amber-500 font-medium uppercase tracking-wider">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
