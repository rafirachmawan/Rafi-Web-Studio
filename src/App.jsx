import { useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Demo from "./pages/Demo";
import Proses from "./pages/Proses";
import Harga from "./pages/Harga";
import Testimoni from "./pages/Testimoni";
import Contact from "./pages/Contact";
import ProjectDetail from "./pages/ProjectDetail";
import SplashScreen from "./components/common/SplashScreen";
import PageLoader from "./components/common/PageLoader";
import CoffeeLanding from "./apps/landing-page/coffee/CoffeeLanding";
import RentalLanding from "./apps/landing-page/rental/RentalLanding";
import HotelLanding from "./apps/landing-page/hotel/HotelLanding";
import RestoLanding from "./apps/landing-page/resto/RestoLanding";
import SekolahLanding from "./apps/landing-page/sekolah/SekolahLanding";
import LaundryLanding from "./apps/landing-page/loundry/LaundryLanding";
import UmrohLanding from "./apps/landing-page/umroh/UmrohLanding";
import UNITALanding from "./apps/landing-page/unita/UNITALanding";
import AkademikApp from "./apps/sistem-web/akademik/AkademikApp";
import WarungOSApp from "./apps/sistem-web/warungos/WarungOSApp";
import ExamOSApp from "./apps/sistem-web/examos/ExamOSApp";
import AbsenOSApp from "./apps/mobile-app/absenos/AbsenOSApp";

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

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <LanguageProvider>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      
      {!showSplash && (
        <Router>
          <RouteWatcher />
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
      </Router>
      )}
    </LanguageProvider>
  );
}
