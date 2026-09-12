import logoMieGacoan from "../../../assets/mieGacoan/logoMieGacoan.png";

export function RestoFooter() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <img src={logoMieGacoan} alt="Mie Gacoan" className="h-12 w-auto object-contain mb-6" />
          
          <div className="flex gap-8 mb-12 text-[10px] tracking-widest uppercase font-bold text-slate-500">
            <a href="#menu" className="hover:text-pink-400 transition-colors">Menu</a>
            <a href="#customizer" className="hover:text-pink-400 transition-colors">Custom Order</a>
            <a href="#" className="hover:text-pink-400 transition-colors">Locations</a>
            <a href="#" className="hover:text-pink-400 transition-colors">Franchise</a>
          </div>
        </div>

        <div className="w-full h-px bg-slate-800 mb-8" />
        
        <p className="text-slate-600 text-xs uppercase tracking-widest font-bold text-center">
          © {new Date().getFullYear()} Mie Gacoan Tulungagung. Website Developed by GapaiDigital.
        </p>
      </div>
    </footer>
  );
}
