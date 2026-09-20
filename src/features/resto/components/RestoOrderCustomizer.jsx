import { useState } from "react";
import { Flame, ShoppingBag, ArrowRight } from "lucide-react";

export function RestoOrderCustomizer({ phone }) {
  const [noodleType, setNoodleType] = useState("Mie Gacoan (Manis Pedas)");
  const [spicyLevel, setSpicyLevel] = useState(3);
  const [selectedDimsum, setSelectedDimsum] = useState(["pangsit_goreng"]);
  const [selectedBeverage, setSelectedBeverage] = useState("es_gobak_sodor");

  const dimsumOptions = [
    { id: "pangsit_goreng", name: "Pangsit Goreng (5 pcs)", price: "8.000" },
    { id: "dimsum_ayam", name: "Dimsum Ayam (5 pcs)", price: "12.000" },
    { id: "bakso_aya", name: "Bakso Ayam (5 pcs)", price: "10.000" },
  ];

  const beverageOptions = [
    { id: "es_gobak_sodor", name: "Es Gobak Sodor", price: "8.000" },
    { id: "jus_jeruk", name: "Jus Jeruk Segar", price: "10.000" },
    { id: "teh_tawar", name: "Teh Tawar Manis", price: "5.000" },
  ];

  const handleWhatsAppOrder = () => {
    const message = `Halo Mie Gacoan Tulungagung, saya mau pesan custom order:\n\n` +
      `- Noodle: ${noodleType}\n` +
      `- Level Pedas: ${spicyLevel}/10\n` +
      `- Dimsum: ${selectedDimsum.join(", ")}\n` +
      `- Beverage: ${selectedBeverage}\n\n` +
      `Mohon konfirmasi ketersediaan dan total harga.`;
    
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const toggleDimsum = (id) => {
    setSelectedDimsum(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-xs text-pink-500 font-bold tracking-[0.3em] uppercase mb-4">Customize Your Order</h2>
          <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">Build Your Perfect Bowl</h3>
          <p className="text-slate-600 text-sm max-w-2xl mx-auto">
            Sesuaikan level pedas, pilih topping, dan buat kombinasi sempurna sesuai selera Anda!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Noodle Selection */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <Flame className="w-6 h-6 text-pink-500" />
              <h4 className="font-black text-xl text-slate-900">1. Pilih Mie</h4>
            </div>
            
            <select
              value={noodleType}
              onChange={(e) => setNoodleType(e.target.value)}
              className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-900 mb-6 cursor-pointer hover:border-pink-300 transition-all"
            >
              <option>Mie Gacoan (Manis Pedas)</option>
              <option>Mie Kering Spesial</option>
              <option>Mie Rebus Original</option>
              <option>Mie Glasir Pedas Manis</option>
            </select>

            <div className="mb-4">
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                Level Pedas: {spicyLevel}/10
              </label>
              <input
                type="range"
                min="1"
                max="10"
                value={spicyLevel}
                onChange={(e) => setSpicyLevel(parseInt(e.target.value))}
                className="w-full h-3 bg-slate-200 rounded-full appearance-none cursor-pointer accent-pink-500"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-2 font-semibold uppercase">
                <span>Mild</span>
                <span>Extreme</span>
              </div>
            </div>
          </div>

          {/* Dimsum Selection */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <ShoppingBag className="w-6 h-6 text-pink-500" />
              <h4 className="font-black text-xl text-slate-900">2. Extra Topping</h4>
            </div>

            <div className="space-y-3 mb-6">
              {dimsumOptions.map((item) => (
                <button
                  key={item.id}
                  onClick={() => toggleDimsum(item.id)}
                  className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                    selectedDimsum.includes(item.id)
                      ? "border-pink-500 bg-pink-50"
                      : "border-slate-200 hover:border-pink-300"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-slate-900 text-sm">{item.name}</span>
                    <span className="text-pink-500 font-black text-xs">Rp {item.price}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Beverage & CTA */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <ArrowRight className="w-6 h-6 text-pink-500" />
              <h4 className="font-black text-xl text-slate-900">3. Minuman</h4>
            </div>

            <select
              value={selectedBeverage}
              onChange={(e) => setSelectedBeverage(e.target.value)}
              className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-900 mb-8 cursor-pointer hover:border-pink-300 transition-all"
            >
              {beverageOptions.map((bev) => (
                <option key={bev.id} value={bev.id}>{bev.name} - Rp {bev.price}</option>
              ))}
            </select>

            <button
              onClick={handleWhatsAppOrder}
              className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-black py-4 rounded-xl uppercase tracking-wider transition-all shadow-lg shadow-pink-500/30 flex items-center justify-center gap-2"
            >
              Pesan Sekarang <ArrowRight className="w-5 h-5" />
            </button>

            <div className="mt-6 p-4 bg-slate-50 rounded-xl border border-slate-200">
              <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider mb-2">Current Selection:</p>
              <p className="text-xs text-slate-700 font-medium">
                🍜 {noodleType} (Level {spicyLevel})<br/>
                🥟 {selectedDimsum.length > 0 ? selectedDimsum.length + ' toppings' : 'No extra'}<br/>
                🥤 {selectedBeverage}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
