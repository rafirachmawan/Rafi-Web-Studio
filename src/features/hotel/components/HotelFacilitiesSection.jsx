import { Waves, Utensils, GlassWater, Wifi, Dumbbell, ShieldCheck } from "lucide-react";
const hotelRestoImg = "/assets/hotel_resto.jpg";
const hotelHeroImg = "/assets/hotel_hero.jpg";
import { motion } from "framer-motion";

export function HotelFacilitiesSection() {
  const amenities = [
    { icon: Waves, label: "Swimming Pool (Kolam Renang)" },
    { icon: Utensils, label: "Sultan Cafe & Resto" },
    { icon: GlassWater, label: "Venezia Second Bar" },
    { icon: Wifi, label: "High-Speed Hotel WiFi" },
    { icon: Dumbbell, label: "Health Club (Pusat Kebugaran)" },
    { icon: ShieldCheck, label: "24-Hour Room Service" },
  ];

  return (
    <section id="facilities" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 gap-4"
        >
          <img src={hotelRestoImg} loading="lazy" className="w-full h-64 object-cover rounded-2xl mt-8 brightness-[0.8]" alt="Sultan Resto Table Setup" />
          <img src={hotelHeroImg} loading="lazy" className="w-full h-64 object-cover rounded-2xl brightness-[0.8]" alt="Crown Victoria Entrance Lobby" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <h2 className="text-xs text-purple-400 uppercase tracking-[0.3em] font-extrabold mb-4">Amenities & Gastronomy</h2>
          <h3 className="text-3xl md:text-5xl font-serif font-black text-white mb-8">Hotel Facilities</h3>
          <p className="text-zinc-400 text-sm font-light leading-relaxed mb-10">
            Kami menyediakan fasilitas lengkap kelas atas untuk mengoptimalkan pengalaman kunjungan dan relaksasi Anda selama berada di Tulungagung.
          </p>
          
          <div className="grid grid-cols-2 gap-6">
            {amenities.map(({ icon: Icon, label }, i) => (
              <div key={i} className="flex items-center gap-4">
                <Icon className="w-4 h-4 text-purple-400" />
                <span className="text-zinc-300 text-xs sm:text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
