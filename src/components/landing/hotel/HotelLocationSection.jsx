import { MapPin, Phone, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export function HotelLocationSection() {
  return (
    <section id="location" className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-left"
        >
          <h2 className="text-xs text-purple-400 uppercase tracking-[0.3em] font-extrabold mb-4">Location</h2>
          <h3 className="text-3xl md:text-5xl font-serif font-black mb-8 text-white">Find Your Sanctuary</h3>
          
          <div className="space-y-6 mb-10 text-zinc-400 font-light">
            <p className="flex items-start gap-4">
              <MapPin className="text-purple-400 shrink-0 w-6 h-6 mt-1" />
              <span className="text-xs sm:text-sm leading-relaxed">
                Jl. K.H. Hasyim Asy'ari No. 17, Kampungdalem, Kec. Tulungagung,<br/>
                Kabupaten Tulungagung, Jawa Timur 66212
              </span>
            </p>
            <p className="flex items-center gap-4">
              <Phone className="text-purple-400 shrink-0 w-6 h-6" />
              <span className="text-xs sm:text-sm font-bold">+62 355 331 321</span>
            </p>
          </div>

          <a
            href="https://maps.app.goo.gl/KkG6uU4WjUjY6"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border-b border-purple-400 text-purple-400 pb-1 hover:text-white hover:border-white transition-colors uppercase text-xs font-black tracking-widest"
          >
            Get Directions <ChevronRight className="w-4 h-4" />
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="h-[400px] w-full bg-white/5 rounded-2xl overflow-hidden border border-white/10"
        >
          <iframe
            className="w-full h-full grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
            src="https://maps.google.com/maps?q=Crown%20Victoria%20Hotel%20Tulungagung&t=&z=15&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
}
