import { useState } from "react";
import { motion } from "framer-motion";
import { Bed, CalendarDays, Users } from "lucide-react";

export function HotelBookingWidget({ onBook }) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guestCount, setGuestCount] = useState("2 Guests");
  const [selectedRoomType, setSelectedRoomType] = useState("Superior Room");

  const handleBookingRedirect = (e) => {
    e.preventDefault();
    if (onBook) onBook({ checkIn, checkOut, guestCount, selectedRoomType });
  };

  return (
    <section className="relative z-20 px-6 -mt-24 mb-32">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto bg-[#0a0a0a]/90 backdrop-blur-2xl border border-white/10 rounded-2xl p-5 shadow-2xl shadow-black/85"
      >
        <form onSubmit={handleBookingRedirect} className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
          <div className="bg-white/5 rounded-xl p-3 flex items-center gap-3 border border-white/5 hover:bg-white/10 transition-colors">
            <Bed className="text-purple-400 w-5 h-5 shrink-0" />
            <div className="w-full text-left">
              <p className="text-[10px] text-zinc-400 uppercase tracking-widest mb-1">Room Type</p>
              <select 
                value={selectedRoomType}
                onChange={(e) => setSelectedRoomType(e.target.value)}
                className="bg-transparent w-full text-xs text-white outline-none font-bold cursor-pointer appearance-none"
              >
                <option className="bg-[#0a0a0a]" value="Superior Room">Superior Room</option>
                <option className="bg-[#0a0a0a]" value="Deluxe Room">Deluxe Room</option>
                <option className="bg-[#0a0a0a]" value="Suite Room">Suite Room</option>
                <option className="bg-[#0a0a0a]" value="Executive Suite">Executive Suite</option>
                <option className="bg-[#0a0a0a]" value="Victoria Grand Suite">Victoria Grand Suite</option>
              </select>
            </div>
          </div>

          <div className="bg-white/5 rounded-xl p-3 flex items-center gap-3 border border-white/5 hover:bg-white/10 transition-colors">
            <CalendarDays className="text-purple-400 w-5 h-5 shrink-0" />
            <div className="w-full text-left">
              <p className="text-[10px] text-zinc-400 uppercase tracking-widest mb-1">Check In</p>
              <input 
                type="date" 
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="bg-transparent w-full text-xs text-white outline-none font-medium [color-scheme:dark]" 
              />
            </div>
          </div>

          <div className="bg-white/5 rounded-xl p-3 flex items-center gap-3 border border-white/5 hover:bg-white/10 transition-colors">
            <CalendarDays className="text-purple-400 w-5 h-5 shrink-0" />
            <div className="w-full text-left">
              <p className="text-[10px] text-zinc-400 uppercase tracking-widest mb-1">Check Out</p>
              <input 
                type="date" 
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="bg-transparent w-full text-xs text-white outline-none font-medium [color-scheme:dark]" 
              />
            </div>
          </div>

          <div className="bg-white/5 rounded-xl p-3 flex items-center gap-3 border border-white/5 hover:bg-white/10 transition-colors">
            <Users className="text-purple-400 w-5 h-5 shrink-0" />
            <div className="w-full text-left">
              <p className="text-[10px] text-zinc-400 uppercase tracking-widest mb-1">Guests</p>
              <select 
                value={guestCount}
                onChange={(e) => setGuestCount(e.target.value)}
                className="bg-transparent w-full text-xs text-white outline-none font-bold appearance-none cursor-pointer"
              >
                <option className="bg-[#0a0a0a]" value="1 Guest">1 Guest</option>
                <option className="bg-[#0a0a0a]" value="2 Guests">2 Guests</option>
                <option className="bg-[#0a0a0a]" value="3 Guests">3 Guests</option>
                <option className="bg-[#0a0a0a]" value="4+ Guests">4+ Guests</option>
              </select>
            </div>
          </div>
          
          <button 
            type="submit"
            className="w-full bg-purple-400 hover:bg-purple-500 text-black rounded-xl py-4 font-bold tracking-widest transition-all uppercase text-xs flex items-center justify-center gap-2"
          >
            Book Now
          </button>
        </form>
      </motion.div>
    </section>
  );
}
