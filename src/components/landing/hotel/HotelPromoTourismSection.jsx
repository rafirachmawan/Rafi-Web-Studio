import { hotel } from "../../../data/hotel";

export function HotelPromoTourismSection() {
  const data = hotel || { name: "Crown Victoria Hotel", promotions: [], touristSpots: [] };

  return (
    <section id="promo-wisata" className="py-24 px-6 bg-[#070707] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16">
        
        {/* Left: News & Promotions */}
        <div className="lg:col-span-7 text-left space-y-8">
          <div>
            <h2 className="text-xs text-purple-400 uppercase tracking-[0.3em] font-extrabold mb-4">News & Promotion</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-black text-white">Promo & Paket Menginap</h3>
            <p className="text-zinc-400 text-sm font-light mt-2 leading-relaxed">
              Dapatkan penawaran terbaik dan harga eksklusif untuk liburan atau perjalanan bisnis Anda di Tulungagung.
            </p>
          </div>

          <div className="space-y-6">
            {data.promotions?.map((promo) => (
              <div 
                key={promo.id}
                className="p-6 bg-[#0a0a0a] border border-white/5 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4 transition-colors hover:border-purple-400/30"
              >
                <div className="space-y-2">
                  <span className="text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 bg-purple-400/10 text-purple-400 rounded-full border border-purple-400/20">
                    {promo.period}
                  </span>
                  <h4 className="text-lg font-bold text-white">{promo.title}</h4>
                  <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">{promo.desc}</p>
                </div>
                <div className="bg-zinc-900 border border-white/10 px-4 py-3 rounded-xl text-center shrink-0 min-w-[120px]">
                  <p className="text-[8px] text-zinc-500 uppercase tracking-widest">Gunakan Kode</p>
                  <p className="text-sm font-mono font-black text-purple-400 mt-1">{promo.code}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Tourist Spots */}
        <div className="lg:col-span-5 text-left space-y-8">
          <div>
            <h2 className="text-xs text-purple-400 uppercase tracking-[0.3em] font-extrabold mb-4">Tourist Spots</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-black text-white">Sekitar Tulungagung</h3>
            <p className="text-zinc-400 text-sm font-light mt-2 leading-relaxed">
              Rekomendasi destinasi wisata populer yang berdekatan dengan Crown Victoria Hotel.
            </p>
          </div>

          <div className="space-y-6">
            {data.touristSpots?.map((spot, i) => (
              <div key={i} className="flex gap-4 items-center bg-[#0a0a0a] border border-white/5 p-4 rounded-2xl hover:border-purple-400/20 transition-colors">
                <img 
                  src={spot.image} 
                  alt={spot.name} 
                  loading="lazy"
                  className="w-20 h-20 object-cover rounded-xl shrink-0 brightness-75 hover:brightness-100 transition-all duration-300"
                />
                <div className="space-y-1">
                  <div className="flex justify-between items-baseline gap-2">
                    <h4 className="font-bold text-white text-base">{spot.name}</h4>
                    <span className="text-[9px] text-purple-400 font-bold shrink-0">{spot.distance}</span>
                  </div>
                  <p className="text-zinc-400 text-xs font-light leading-relaxed">{spot.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
