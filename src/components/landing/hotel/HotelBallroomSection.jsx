import { Phone } from "lucide-react";
import { useState } from "react";
const hotelBallroomImg = "/assets/hotel_ballroom.jpg";

export function HotelBallroomSection() {
  const [activeBallroom, setActiveBallroom] = useState("Victoria Grand Ballroom");
  const [activeLayout, setActiveLayout] = useState("Banquet (Round Table)");

  const getCapacityDetails = (ballroom, layout) => {
    const capacities = {
      "Victoria Grand Ballroom": {
        "Banquet (Round Table)": "950 Kursi (95 Round Tables)",
        "Theater Style": "2.500 Kursi (Theater Setup)",
        "Classroom Style": "1.200 Kursi (Classroom Setup)"
      },
      "Victoria Ballroom A": {
        "Banquet (Round Table)": "400 Kursi (40 Round Tables)",
        "Theater Style": "1.000 Kursi (Theater Setup)",
        "Classroom Style": "500 Kursi (Classroom Setup)"
      },
      "Victoria Ballroom B": {
        "Banquet (Round Table)": "260 Kursi (26 Round Tables)",
        "Theater Style": "500 Kursi (Theater Setup)",
        "Classroom Style": "250 Kursi (Classroom Setup)"
      }
    };
    return capacities[ballroom]?.[layout] || "Call for Custom Layouts";
  };

  const handleBallroomInquiry = () => {
    const message = `Halo Crown Victoria Hotel Tulungagung, saya ingin menanyakan ketersediaan ballroom untuk acara saya:
- *Ballroom*: ${activeBallroom}
- *Layout*: ${activeLayout}
- *Kapasitas*: ${getCapacityDetails(activeBallroom, activeLayout)}

Mohon info harga paket dan tanggal kosong terdekat. Terima kasih.`;
    window.open(`https://wa.me/6285707185783?text=${encodeURIComponent(message)}`, "_blank");
  };

  const ballrooms = ["Victoria Grand Ballroom", "Victoria Ballroom A", "Victoria Ballroom B"];
  const layouts = ["Banquet (Round Table)", "Theater Style", "Classroom Style"];

  return (
    <section id="ballroom" className="py-24 px-6 bg-[#0B0B0B] border-y border-white/5 relative">
      <div className="absolute right-0 top-1/4 w-[300px] h-[300px] bg-purple-500/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-xs text-purple-400 uppercase tracking-[0.3em] font-extrabold mb-4">Victoria Ballrooms</h2>
          <h3 className="text-3xl md:text-5xl font-serif font-black text-white">Event & Wedding Space Planner</h3>
          <p className="text-zinc-400 text-xs sm:text-sm max-w-lg mx-auto mt-4">
            Pilih kapasitas ballroom terbaik di Tulungagung dengan ornamen megah Victorian. Sesuaikan layout kursi tamu Anda di bawah.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-center bg-[#070707] border border-white/10 rounded-3xl p-6 md:p-10">
          {/* Image Preview Left */}
          <div className="md:col-span-6 relative rounded-2xl overflow-hidden group">
            <img
              src={hotelBallroomImg}
              alt="Victoria Grand Ballroom Setup"
              loading="lazy"
              className="w-full h-[350px] object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.7]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
            <div className="absolute bottom-6 left-6">
              <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 bg-purple-400/10 text-purple-400 rounded-full border border-purple-400/20">
                High Ceiling Victorian Design
              </span>
              <h4 className="text-lg font-bold text-white mt-2">{activeBallroom}</h4>
            </div>
          </div>

          {/* Calculator Panel Right */}
          <div className="md:col-span-6 text-left space-y-6">
            <div>
              <label className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block mb-2">1. Pilih Ruangan Ballroom:</label>
              <div className="grid grid-cols-3 gap-2">
                {ballrooms.map(ballroom => (
                  <button
                    key={ballroom}
                    onClick={() => setActiveBallroom(ballroom)}
                    className={`py-2 px-1 rounded-xl text-[9px] sm:text-[10px] font-bold transition-all border ${
                      activeBallroom === ballroom
                        ? "bg-purple-400 text-black border-transparent"
                        : "bg-white/5 text-zinc-400 border-white/5 hover:bg-white/10"
                    }`}
                  >
                    {ballroom.replace("Victoria ", "")}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block mb-2">2. Pilih Tipe Penataan Kursi:</label>
              <div className="grid grid-cols-3 gap-2">
                {layouts.map(layout => (
                  <button
                    key={layout}
                    onClick={() => setActiveLayout(layout)}
                    className={`py-2 px-1 rounded-xl text-[9px] sm:text-[10px] font-bold transition-all border ${
                      activeLayout === layout
                        ? "bg-purple-400 text-black border-transparent"
                        : "bg-white/5 text-zinc-400 border-white/5 hover:bg-white/10"
                    }`}
                  >
                    {layout.split(" ")[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Calculated Result Panel */}
            <div className="bg-[#0C0C0C] border border-white/5 rounded-2xl p-6 flex items-center justify-between">
              <div>
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">Estimasi Maksimal Kapasitas</p>
                <h4 className="text-xl sm:text-2xl font-black text-purple-400">
                  {getCapacityDetails(activeBallroom, activeLayout)}
                </h4>
              </div>
              <div className="h-10 w-px bg-white/10 mx-2" />
              <div className="text-right">
                <p className="text-[9px] text-zinc-500 uppercase">Ideal for</p>
                <span className="text-xs text-white font-bold">
                  {activeLayout.includes("Banquet") ? "Wedding Reception" : "Corporate Seminars"}
                </span>
              </div>
            </div>

            <button
              onClick={handleBallroomInquiry}
              className="w-full bg-white/5 hover:bg-purple-400 text-zinc-300 hover:text-black font-extrabold text-xs tracking-widest py-4 rounded-xl border border-white/10 hover:border-transparent transition-all flex items-center justify-center gap-2"
            >
              <Phone size={14} />
              Hubungi Sales & Marketing
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
