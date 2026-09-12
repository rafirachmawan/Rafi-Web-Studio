export function RentalFooter() {
  return (
    <footer className="bg-[#0b0b0e] border-t border-white/10 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-black text-2xl tracking-tighter text-white mb-6">
            RENTAL<span className="text-red-500">JAYA</span>
          </h1>
          
          <div className="flex gap-8 mb-12 text-[10px] tracking-widest uppercase font-bold text-zinc-500">
            <a href="#inventory" className="hover:text-red-500 transition-colors">Inventory</a>
            <a href="#features" className="hover:text-red-500 transition-colors">Features</a>
            <a href="#testimonials" className="hover:text-red-500 transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-red-500 transition-colors">Contact</a>
          </div>
        </div>

        <div className="w-full h-px bg-white/5 mb-8" />
        
        <p className="text-zinc-600 text-xs uppercase tracking-widest font-bold text-center">
          © {new Date().getFullYear()} Rental Jaya. Website Developed by GapaiDigital.
        </p>
      </div>
    </footer>
  );
}
