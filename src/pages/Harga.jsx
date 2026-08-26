import { useState } from "react";
import PricingSection from "../components/home/PricingSection";
import usePageMeta from "../hooks/usePageMeta";

export default function Harga() {
  const [pricingTab, setPricingTab] = useState("landingpage");
  const waLink = "https://wa.me/6285707185783?text=Halo%20saya%20tertarik%20dengan%20paket%20website";

  usePageMeta({
    title: "Paket & Harga Pembuatan Website & Aplikasi",
    description: "Investasi digital transparan dan terjangkau untuk pembuatan Landing Page, Aplikasi Mobile, dan Sistem Web Kustom di GapaiDigital."
  });

  return (
    <PricingSection
      pricingTab={pricingTab}
      setPricingTab={setPricingTab}
      waLink={waLink}
    />
  );
}
