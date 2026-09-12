import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";

export function SekolahLocationSection() {
  return (
    <section className="py-24 px-6 bg-[#18181b]/50 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="text-4xl font-black text-white mb-6">Kunjungi Kampus Kami</h2>
          <p className="text-zinc-400 mb-8 leading-relaxed">Lihat langsung fasilitas modern kami dan konsultasikan rencana pendidikanmu dengan tim akademik kami.</p>
          
          <div className="flex items-start gap-4 mb-8">
            <MapPin className="text-teal-400 w-6 h-6 shrink-0 mt-1" />
            <div>
              <p className="font-bold text-white mb-1">Gedung Pendidikan Masa Depan</p>
              <p className="text-sm text-zinc-400">Jl. Teknologi No. 123, Kawasan Inovasi<br/>Jakarta Selatan, 12345</p>
            </div>
          </div>

          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-teal-400 font-bold hover:text-white transition-colors"
          >
            Lihat di Peta <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="h-[400px] rounded-3xl overflow-hidden border border-white/10 relative">
          <iframe
            className="absolute inset-0 w-full h-full grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
            src="https://maps.google.com/maps?q=jakarta&t=&z=13&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
}
