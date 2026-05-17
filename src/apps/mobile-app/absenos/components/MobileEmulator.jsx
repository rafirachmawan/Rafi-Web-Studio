import { motion } from "framer-motion";

export default function MobileEmulator({ children }) {
  return (
    <div className="flex items-center justify-center py-4 sm:py-6 px-2 sm:px-4 bg-zinc-950/20 rounded-[2.5rem] sm:rounded-[3rem] border border-white/5 backdrop-blur-md max-w-full overflow-hidden">
      <div className="relative">
        {/* PHYSICAL CASE */}
        <div className="relative w-[290px] h-[580px] sm:w-[320px] sm:h-[640px] md:w-[340px] md:h-[680px] bg-[#1a1a1b] rounded-[3.5rem] p-3 shadow-[0_0_100px_rgba(0,0,0,0.5)] border-[8px] border-[#2a2a2b] overflow-hidden transition-all duration-300">
          
          {/* ANTENNA LINES */}
          <div className="absolute top-20 -left-1 w-1 h-10 bg-zinc-800" />
          <div className="absolute top-20 -right-1 w-1 h-10 bg-zinc-800" />
          
          {/* BUTTONS */}
          <div className="absolute top-32 -left-[10px] w-[3px] h-12 bg-zinc-700 rounded-l-md" /> {/* Action Button */}
          <div className="absolute top-48 -left-[10px] w-[3px] h-20 bg-zinc-700 rounded-l-md" /> {/* Vol Up */}
          <div className="absolute top-72 -left-[10px] w-[3px] h-20 bg-zinc-700 rounded-l-md" /> {/* Vol Down */}
          <div className="absolute top-48 -right-[10px] w-[3px] h-24 bg-zinc-700 rounded-r-md" /> {/* Power */}

          {/* INNER SCREEN CONTAINER */}
          <div className="w-full h-full bg-black rounded-[2.8rem] overflow-hidden relative border border-white/10">
            
            {/* DYNAMIC ISLAND */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 sm:w-28 sm:h-7 bg-black rounded-full z-[100] flex items-center justify-between px-4">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-zinc-900" />
              <div className="flex gap-1">
                 <div className="w-2.5 h-0.5 sm:w-3 sm:h-1 bg-emerald-500 rounded-full animate-pulse" />
                 <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-zinc-800 rounded-full" />
              </div>
            </div>

            {/* STATUS BAR */}
            <div className="absolute top-0 left-0 w-full h-10 px-6 sm:px-8 flex items-center justify-between z-[90] text-[9px] sm:text-[10px] font-bold text-white/95">
               <span>9:41</span>
               <div className="flex items-center gap-1.5">
                  <div className="flex gap-0.5">
                     <div className="w-0.5 h-1 bg-white" />
                     <div className="w-0.5 h-1.5 bg-white" />
                     <div className="w-0.5 h-2 bg-white" />
                     <div className="w-0.5 h-2.5 bg-white/30" />
                  </div>
                  <span>5G</span>
                  <div className="w-4 h-2 sm:w-5 sm:h-2.5 border border-white/40 rounded-sm p-[1px]">
                     <div className="h-full bg-white w-[80%]" />
                  </div>
               </div>
            </div>

            {/* THE ACTUAL CONTENT */}
            <div className="w-full h-full pt-10 overflow-hidden relative">
               {children}
            </div>

            {/* HOME INDICATOR */}
            <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-28 sm:w-32 h-1 bg-white/20 rounded-full z-[100]" />
          </div>
        </div>

        {/* REFLECTIONS */}
        <div className="absolute -inset-4 pointer-events-none rounded-[4rem] border border-white/5 opacity-50" />
      </div>
    </div>
  );
}
