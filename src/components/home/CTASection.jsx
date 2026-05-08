export default function CTASection() {
  return (
    <div className="mt-24 mb-24 max-w-3xl mx-auto bg-white/[0.03] border border-white/10 rounded-3xl px-6 py-10 text-center">
      {/* TEXT */}
      <p className="text-gray-400 text-lg">
        Website bukan hanya tampilan.{" "}
        <span className="text-white font-semibold">
          Website adalah alat untuk meningkatkan kredibilitas.
        </span>
      </p>

      {/* BUTTON */}
      <div className="mt-6">
        <a
          href="https://wa.me/6285707185783?text=Halo%20saya%20ingin%20konsultasi%20website"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-yellow-300 text-black px-5 py-2.5 md:px-6 md:py-3 rounded-full font-semibold hover:scale-105 transition"
        >
          Diskusikan Project Kamu ↗
        </a>
      </div>
    </div>
  );
}
