import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import FloatingWAButton from "../components/common/FloatingWAButton";

export default function MainLayout({ children }) {
  const waLink =
    "https://wa.me/6285707185783?text=Halo%20saya%20tertarik%20dengan%20paket%20website";

  return (
    <div className="min-h-screen bg-[#fafafc] text-zinc-900 dark:bg-[#050508] dark:text-zinc-100 font-sans relative overflow-hidden transition-colors duration-300">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-amber-500/10 dark:bg-amber-500/10 bg-amber-300/20 blur-[100px] rounded-full" />

      {/* NAVBAR */}
      <Navbar />

      <main className="relative z-10 min-h-screen w-full flex flex-col pt-24">
        {children}
      </main>

      {/* FOOTER */}
      <Footer />
      
      {/* FLOATING WA BUTTON */}
      <FloatingWAButton waLink={waLink} />
    </div>
  );
}
