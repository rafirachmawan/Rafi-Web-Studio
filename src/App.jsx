import { useEffect } from "react";
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

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
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
    </LanguageProvider>
  );
}
