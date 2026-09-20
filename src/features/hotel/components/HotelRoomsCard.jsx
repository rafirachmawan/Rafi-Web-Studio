import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
const roomSuperiorImg = "/assets/room_superior.jpg";
const roomDeluxeImg = "/assets/room_deluxe.jpg";
const roomSuiteRegularImg = "/assets/room_suite_regular.jpg";
const roomSuiteImg = "/assets/room_suite.jpg";
const roomVictoriaGrandSuiteImg = "/assets/victoria_grand_suite.jpg";

const ROOMS_DATA = [
  {
    name: "Superior Room",
    size: "32 sqm",
    price: "650.000",
    img: roomSuperiorImg,
    features: ["City View", "King or Twin Bed", "Complimentary Water"]
  },
  {
    name: "Deluxe Room",
    size: "36 sqm",
    price: "800.000",
    img: roomDeluxeImg,
    features: ["Pool View", "King Bed Only", "Private Balcony"]
  },
  {
    name: "Suite Room",
    size: "48 sqm",
    price: "1.100.000",
    img: roomSuiteRegularImg,
    features: ["Living Room Area", "Bathtub", "Premium Toiletries"]
  },
  {
    name: "Executive Suite",
    size: "65 sqm",
    price: "1.500.000",
    img: roomSuiteImg,
    features: ["Panoramic View", "Adjoining Dining Space", "Mini Bar Set"]
  },
  {
    name: "Victoria Grand Suite",
    size: "120 sqm",
    price: "2.500.000",
    img: roomVictoriaGrandSuiteImg,
    features: ["Highest Luxury Tipe", "In-Room Jacuzzi", "Private Dining & Butler"]
  },
];

export function HotelRoomsCard({ phone }) {
  return (
    <section id="room" className="px-6 py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 text-left">
          <div>
            <h2 className="text-xs text-purple-400 uppercase tracking-[0.3em] font-extrabold mb-4">Accommodations</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-black text-white">Signature Rooms</h3>
          </div>
          <p className="text-zinc-400 text-xs sm:text-sm font-light max-w-md">
            Desain kamar klasik yang hangat dan menenangkan, disempurnakan dengan furnitur kayu mewah dan ornamen Victorian yang menakjubkan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ROOMS_DATA.map((room, i) => {
            const wa = `https://wa.me/${phone}?text=${encodeURIComponent(
              `Halo Crown Victoria Hotel Tulungagung, saya ingin reservasi tipe *${room.name}* (Mulai Rp ${room.price}/malam). Mohon informasikan ketersediaan kamar.`,
            )}`;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group relative text-left"
              >
                <div className="overflow-hidden rounded-2xl mb-6 relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img
                    src={room.img}
                    alt={room.name}
                    loading="lazy"
                    className="h-80 w-full object-cover group-hover:scale-105 transition duration-700 ease-out brightness-[0.9]"
                  />
                  <div className="absolute top-4 right-4 bg-[#050505]/75 backdrop-blur-md text-purple-400 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full z-20 border border-purple-400/20">
                    {room.size}
                  </div>
                </div>

                <div className="px-2">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold font-serif text-white group-hover:text-purple-400 transition-colors">{room.name}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-x-4 gap-y-1 mb-4 text-xs text-zinc-500 font-medium">
                    {room.features.map((feat, idx) => (
                      <span key={idx} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400/50" />
                        {feat}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mt-6 border-t border-white/10 pt-4">
                    <div>
                      <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">Starting From</p>
                      <p className="text-base text-white font-bold">Rp {room.price} <span className="text-[10px] text-zinc-500 font-normal">/ malam</span></p>
                    </div>
                    <a
                      href={wa}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-white uppercase tracking-widest text-xs font-bold shrink-0 flex items-center gap-1 transition-colors"
                    >
                      Book <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
