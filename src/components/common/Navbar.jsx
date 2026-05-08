export default function Navbar() {
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-6xl">
      <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-full px-4 md:px-6 py-3 flex justify-between items-center shadow-lg">
        <h1 className="font-heading font-semibold text-sm tracking-wide">
          RAFWEB
        </h1>

        <div className="hidden md:flex gap-6 text-sm text-gray-300">
          <a href="#home" className="hover:text-amber-400 transition">
            Home
          </a>

          <a href="#demo" className="hover:text-amber-400 transition">
            Demo
          </a>

          <a href="#proses" className="hover:text-amber-400 transition">
            Proses
          </a>

          <a href="#harga" className="hover:text-amber-400 transition">
            Harga
          </a>

          <a href="#testimoni" className="hover:text-amber-400 transition">
            Testimoni
          </a>

          <a href="#contact" className="hover:text-amber-400 transition">
            Contact
          </a>
        </div>

        <button className="bg-amber-500 hover:bg-amber-400 text-black px-3 md:px-4 py-1.5 rounded-full text-xs md:text-sm font-medium transition">
          Konsultasi
        </button>
      </div>
    </div>
  );
}
