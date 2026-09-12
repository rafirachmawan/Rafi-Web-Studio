import { motion } from "framer-motion";

const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1584697964353-7e6f1fdb5e57?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&q=80&w=800"
];

export function SekolahGaleriSection() {
  return (
    <section id="galeri" className="py-24 px-6 bg-[#18181b]/30 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm text-teal-400 font-bold tracking-widest uppercase mb-3">Kehidupan Kampus</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white">Galeri Kegiatan</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((img, i) => (
            <motion.img 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              src={img} 
              alt="Kegiatan kampus" 
              className="w-full h-64 md:h-80 object-cover rounded-3xl" 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
