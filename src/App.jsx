import { useEffect, useState, useRef, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import SplashScreen from "./components/common/SplashScreen";
import PageLoader from "./components/common/PageLoader";

// Lazy-loaded pages — only fetched when the route is visited
const Project = lazy(() => import("./pages/Project"));
const Demo = lazy(() => import("./pages/Demo"));
const Proses = lazy(() => import("./pages/Proses"));
const Harga = lazy(() => import("./pages/Harga"));
const Testimoni = lazy(() => import("./pages/Testimoni"));
const Contact = lazy(() => import("./pages/Contact"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));

// Landing Page Demos — heavy, only load on demand
const CoffeeLanding = lazy(() => import("./apps/landing-page/coffee/CoffeeLanding"));
const RentalLanding = lazy(() => import("./apps/landing-page/rental/RentalLanding"));
const HotelLanding = lazy(() => import("./apps/landing-page/hotel/HotelLanding"));
const RestoLanding = lazy(() => import("./apps/landing-page/resto/RestoLanding"));
const SekolahLanding = lazy(() => import("./apps/landing-page/sekolah/SekolahLanding"));
const LaundryLanding = lazy(() => import("./apps/landing-page/loundry/LaundryLanding"));
const UmrohLanding = lazy(() => import("./apps/landing-page/umroh/UmrohLanding"));
const UNITALanding = lazy(() => import("./apps/landing-page/unita/UNITALanding"));

// App Demos — heavy, only load on demand
const AkademikApp = lazy(() => import("./apps/sistem-web/akademik/AkademikApp"));
const WarungOSApp = lazy(() => import("./apps/sistem-web/warungos/WarungOSApp"));
const ExamOSApp = lazy(() => import("./apps/sistem-web/examos/ExamOSApp"));
const AbsenOSApp = lazy(() => import("./apps/mobile-app/absenos/AbsenOSApp"));

let isAppInitialized = false;

function RouteWatcher() {
  const { pathname } = useLocation();
  const [isPageLoading, setIsPageLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (!isAppInitialized) {
      isAppInitialized = true;
      return; // Skip initial load
    }

    setIsPageLoading(true);
    
    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 500); // Tampilkan loading selama 0.5 detik saat pindah halaman

    return () => clearTimeout(timer);
  }, [pathname]);

  return <PageLoader isLoading={isPageLoading} />;
}

// Suspense fallback — minimal loading indicator
function SuspenseFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fafafc] dark:bg-[#050508]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-3 border-amber-500/30 border-t-amber-500 rounded-full animate-spin" />
        <span className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">Loading...</span>
      </div>
    </div>
  );
}

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <LanguageProvider>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      
      {!showSplash && (
        <Router>
          <RouteWatcher />
          <Suspense fallback={<SuspenseFallback />}>
            <Routes>
            {/* Main Website Routes */}
            <Route path="/" element={<MainLayout><Home /></MainLayout>} />
            <Route path="/project" element={<MainLayout><Project /></MainLayout>} />
            <Route path="/demo" element={<MainLayout><Demo /></MainLayout>} />
            <Route path="/proses" element={<MainLayout><Proses /></MainLayout>} />
            <Route path="/harga" element={<MainLayout><Harga /></MainLayout>} />
            <Route path="/testimoni" element={<MainLayout><Testimoni /></MainLayout>} />
            <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />

            <Route path="/portfolio/:id" element={<ProjectDetail />} />
            
            {/* Landing Page Demos */}
            <Route path="/coffee" element={<CoffeeLanding />} />
            <Route path="/rental" element={<RentalLanding />} />
            <Route path="/hotel" element={<HotelLanding />} />
            <Route path="/resto" element={<RestoLanding />} />
            <Route path="/sekolah" element={<SekolahLanding />} />
            <Route path="/laundry" element={<LaundryLanding />} />
            <Route path="/umroh" element={<UmrohLanding />} />
            <Route path="/unita" element={<UNITALanding />} />
            
            {/* App Demos */}
            <Route path="/akademik/*" element={<AkademikApp />} />
            <Route path="/warungos/*" element={<WarungOSApp />} />
            <Route path="/examos/*" element={<ExamOSApp />} />
            <Route path="/absenos/*" element={<AbsenOSApp />} />
          </Routes>
          </Suspense>
        </Router>
      )}
    </LanguageProvider>
  );
}
