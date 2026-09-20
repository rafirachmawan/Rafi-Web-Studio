// src/features/hotel/sections/HotelPolicies.jsx
// Interactive FAQ & Hotel Policies for Crown Victoria Hotel Tulungagung (Purple Theme)

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, ChevronDown, Clock, Users, Car, Ban, CreditCard, HelpCircle } from "lucide-react";
import { HOTEL_FAQS, HOTEL_INFO } from "../data/hotelData";

export function HotelPolicies() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-24 px-4 sm:px-6 bg-[#FAFAFD] border-t border-zinc-200">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 border border-purple-300 text-purple-900 text-xs font-bold uppercase tracking-widest mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-purple-700" />
            <span>Kebijakan Menginap & Panduan Tamu</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-950 tracking-tight mb-4">
            Informasi & Tanya Jawab Populer
          </h2>

          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            Ketahui panduan waktu check-in, aturan ramah keluarga, serta fasilitas kenyamanan sebelum Anda tiba.
          </p>
        </div>

        {/* 4 Quick Policy Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="p-5 rounded-2xl bg-white border border-zinc-200 shadow-sm text-center">
            <Clock className="w-6 h-6 mx-auto text-purple-600 mb-2" />
            <div className="text-xs font-bold text-zinc-900">Check-in / Out</div>
            <div className="text-[11px] text-zinc-500 mt-0.5">14:00 / 12:00 WIB</div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-zinc-200 shadow-sm text-center">
            <Users className="w-6 h-6 mx-auto text-purple-600 mb-2" />
            <div className="text-xs font-bold text-zinc-900">Anak & Keluarga</div>
            <div className="text-[11px] text-zinc-500 mt-0.5">0-5 Thn Gratis Menginap</div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-zinc-200 shadow-sm text-center">
            <Car className="w-6 h-6 mx-auto text-purple-600 mb-2" />
            <div className="text-xs font-bold text-zinc-900">Parkir & Valet</div>
            <div className="text-[11px] text-zinc-500 mt-0.5">Gratis & ATM On-Site</div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-zinc-200 shadow-sm text-center">
            <Ban className="w-6 h-6 mx-auto text-purple-600 mb-2" />
            <div className="text-xs font-bold text-zinc-900">Hewan Peliharaan</div>
            <div className="text-[11px] text-zinc-500 mt-0.5">Tidak Diperkenankan</div>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3 max-w-3xl mx-auto">
          {HOTEL_FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-white border border-zinc-200 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-zinc-900 hover:text-purple-700 transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-purple-600 shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-zinc-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-purple-600" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-600 leading-relaxed border-t border-zinc-100 pl-12">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
