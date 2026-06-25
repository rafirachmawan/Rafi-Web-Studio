import { useState } from "react";
import PricingSection from "../components/home/PricingSection";

export default function Harga() {
  const [pricingTab, setPricingTab] = useState("landingpage");
  const waLink = "https://wa.me/6285707185783?text=Halo%20saya%20tertarik%20dengan%20paket%20website";

  return (
    <PricingSection
      pricingTab={pricingTab}
      setPricingTab={setPricingTab}
      waLink={waLink}
    />
  );
}
