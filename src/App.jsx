import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

const CoffeeLanding = lazy(() => import("./apps/landing-page/coffee/CoffeeLanding"));
const RentalLanding = lazy(() => import("./apps/landing-page/rental/RentalLanding"));
const HotelLanding = lazy(() => import("./apps/landing-page/hotel/HotelLanding"));
const RestoLanding = lazy(() => import("./apps/landing-page/resto/RestoLanding"));
const SekolahLanding = lazy(() => import("./apps/landing-page/sekolah/SekolahLanding"));
const LaundryLanding = lazy(() => import("./apps/landing-page/loundry/LaundryLanding"));
const UmrohLanding = lazy(() => import("./apps/landing-page/umroh/UmrohLanding"));
const UNITALanding = lazy(() => import("./apps/landing-page/unita/UNITALanding"));
const AkademikApp = lazy(() => import("./apps/sistem-web/akademik/AkademikApp"));
const WarungOSApp = lazy(() => import("./apps/sistem-web/warungos/WarungOSApp"));
const ExamOSApp = lazy(() => import("./apps/sistem-web/examos/ExamOSApp"));
const AbsenOSApp = lazy(() => import("./apps/mobile-app/absenos/AbsenOSApp"));

function PageLoader() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#fafafc] dark:bg-[#050508] transition-colors duration-300">
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 border-4 border-amber-500/20 border-t-amber-500 rounded-full animate-spin" />
        <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 animate-pulse">Loading...</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coffee" element={<CoffeeLanding />} />
          <Route path="/rental" element={<RentalLanding />} />
          <Route path="/hotel" element={<HotelLanding />} />
          <Route path="/resto" element={<RestoLanding />} />
          <Route path="/sekolah" element={<SekolahLanding />} />
          <Route path="/laundry" element={<LaundryLanding />} />
          <Route path="/umroh" element={<UmrohLanding />} />
          <Route path="/unita" element={<UNITALanding />} />
          <Route path="/akademik/*" element={<AkademikApp />} />
          <Route path="/warungos/*" element={<WarungOSApp />} />
          <Route path="/examos/*" element={<ExamOSApp />} />
          <Route path="/absenos/*" element={<AbsenOSApp />} />
        </Routes>
      </Suspense>
    </Router>
  );
}