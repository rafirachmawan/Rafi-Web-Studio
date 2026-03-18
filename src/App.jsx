import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";

import { coffee } from "./data/coffee";
import { rental } from "./data/rental";
import { hotel } from "./data/hotel";
import { resto } from "./data/resto";
import { sekolah } from "./data/sekolah";
import Home from "./pages/Home";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coffee" element={<Landing data={coffee} />} />
        <Route path="/rental" element={<Landing data={rental} />} />
        <Route path="/hotel" element={<Landing data={hotel} />} />
        <Route path="/resto" element={<Landing data={resto} />} />
        <Route path="/sekolah" element={<Landing data={sekolah} />} />

        {/* default */}
        <Route path="/" element={<Landing data={coffee} />} />
      </Routes>
    </Router>
  );
}
