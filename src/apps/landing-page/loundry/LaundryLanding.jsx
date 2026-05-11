import { useState } from "react";

export default function LaundryLanding() {
  const phone = "628123456789";
  const message = "Halo, saya ingin menggunakan jasa laundry";
  const waLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  const services = [
    { name: "Cuci Kering", price: "Rp5.000/kg" },
    { name: "Cuci Setrika", price: "Rp7.000/kg" },
    { name: "Express 1 Hari", price: "Rp10.000/kg" },
  ];

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      {/* HERO */}
      <div className="text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          Laundry <span className="text-amber-400">Cepat & Bersih</span>
        </h1>
        <p className="text-gray-400 mt-4">
          Solusi laundry modern dengan sistem tracking & layanan express
        </p>

        <a
          href={waLink}
          target="_blank"
          className="inline-block mt-6 bg-amber-500 text-black px-6 py-3 rounded-full font-medium hover:scale-105 transition"
        >
          Order via WhatsApp
        </a>
      </div>

      {/* SERVICES */}
      <div className="max-w-5xl mx-auto px-6 pb-20 grid md:grid-cols-3 gap-6">
        {services.map((item, i) => (
          <div
            key={i}
            className="bg-white/5 border border-white/10 p-6 rounded-xl"
          >
            <h2 className="text-lg font-semibold mb-2">{item.name}</h2>
            <p className="text-amber-400">{item.price}</p>
          </div>
        ))}
      </div>

      {/* TRACKING */}
      <div className="text-center pb-20 px-6">
        <h2 className="text-2xl font-bold mb-4">Cek Status Laundry</h2>

        <input
          placeholder="Masukkan kode order..."
          className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 w-full max-w-md"
        />

        <button className="mt-4 bg-amber-500 text-black px-6 py-2 rounded-full">
          Cek Status
        </button>
      </div>
    </div>
  );
}
