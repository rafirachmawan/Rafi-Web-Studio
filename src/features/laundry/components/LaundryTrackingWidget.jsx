import { useState } from "react";
import { motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";

export function LaundryTrackingWidget() {
  const [trackingNumber, setTrackingNumber] = useState("");

  const handleTrack = (e) => {
    e.preventDefault();
    alert(`Melacak resi: ${trackingNumber}`);
  };

  return (
    <section id="tracking" className="px-6 mb-24 relative z-20">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-[80px] -z-10" />
        
        <div className="text-center mb-8">
          <h2 className="text-3xl font-black text-slate-900 mb-3">Lacak Cucian Anda</h2>
          <p className="text-slate-500 font-medium">Masukkan nomor resi untuk melihat status proses laundry Anda secara real-time.</p>
        </div>

        <form onSubmit={handleTrack} className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input 
              type="text" 
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              placeholder="Contoh: LND-89234" 
              className="block w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 font-medium placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 focus:bg-white outline-none transition-all shadow-inner"
            />
          </div>
          <button type="submit" className="bg-slate-900 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-2xl transition-colors shadow-lg hover:shadow-blue-500/30 flex items-center justify-center gap-2">
            Cek Status <ArrowRight className="w-5 h-5" />
          </button>
        </form>
      </motion.div>
    </section>
  );
}
