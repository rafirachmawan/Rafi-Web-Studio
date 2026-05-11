import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import CoffeeLanding from "./apps/landing-page/coffee/CoffeeLanding";
import RentalLanding from "./apps/landing-page/rental/RentalLanding";
import HotelLanding from "./apps/landing-page/hotel/HotelLanding";
import RestoLanding from "./apps/landing-page/resto/RestoLanding";
import SekolahLanding from "./apps/landing-page/sekolah/SekolahLanding";
import LaundryLanding from "./apps/landing-page/loundry/LaundryLanding";
import UmrohLanding from "./apps/landing-page/umroh/UmrohLanding";

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
      </Routes>
    </Router>
  );
}