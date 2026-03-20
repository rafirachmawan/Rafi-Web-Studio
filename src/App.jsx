import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CoffeeLanding from "./pages/CoffeeLanding";
import RentalLanding from "./pages/RentalLanding";
import HotelLanding from "./pages/HotelLanding";
import RestoLanding from "./pages/RestoLanding";
import SekolahLanding from "./pages/SekolahLanding";

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
      </Routes>
    </Router>
  );
}
