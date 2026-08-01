import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import FloatingWAButton from "../components/common/FloatingWAButton";
import CustomCursor from "../components/common/CustomCursor";

export default function MainLayout({ children }) {
  const waLink =
    "https://wa.me/6285707185783?text=Halo%20saya%20tertarik%20dengan%20paket%20website";

  return (
    <div className="min-h-screen bg-[#fafafc] text-zinc-900 dark:bg-[#050508] dark:text-zinc-100 font-sans relative overflow-x-hidden transition-colors duration-300">
      
      {/* CUSTOM CURSOR */}
      <CustomCursor />

      {/* AMBIENT BACKGROUND LAYER (DESKTOP ONLY) */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden dark:hidden hidden md:block" aria-hidden="true">
        {/* Blob 1 */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-br from-amber-300/25 to-orange-200/15 blur-[120px] rounded-full" />
        {/* Blob 2 */}
        <div className="absolute top-[15%] -right-[10%] w-[450px] h-[450px] bg-gradient-to-bl from-orange-200/20 to-amber-100/10 blur-[100px] rounded-full" />
        {/* Blob 3 */}
        <div className="absolute top-[35%] -left-[8%] w-[400px] h-[500px] bg-gradient-to-tr from-amber-200/20 to-yellow-100/10 blur-[110px] rounded-full" />
        {/* Blob 4 */}
        <div className="absolute top-[50%] right-[5%] w-[350px] h-[400px] bg-gradient-to-bl from-orange-300/15 to-amber-100/10 blur-[100px] rounded-full" />
        {/* Blob 5 */}
        <div className="absolute top-[68%] -left-[5%] w-[500px] h-[400px] bg-gradient-to-tr from-amber-200/15 to-orange-100/10 blur-[120px] rounded-full" />
        {/* Blob 6 */}
        <div className="absolute top-[82%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-b from-amber-300/20 to-orange-200/10 blur-[130px] rounded-full" />
      </div>

      {/* Dark mode glow */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-amber-500/10 blur-[100px] rounded-full hidden dark:block pointer-events-none" />

      {/* NAVBAR */}
      <Navbar />

      <main className="relative z-10 min-h-screen w-full flex flex-col pt-20 md:pt-24">
        {children}
      </main>

      {/* FOOTER */}
      <Footer />
      
      {/* FLOATING WA BUTTON */}
      <FloatingWAButton waLink={waLink} />
    </div>
  );
}
