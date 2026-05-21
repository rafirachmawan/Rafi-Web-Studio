import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

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

export default function App() {
  return (
    <Router>
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
    </Router>
  );
}