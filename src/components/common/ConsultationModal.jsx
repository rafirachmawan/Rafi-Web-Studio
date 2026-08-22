import { useState, useEffect, useRef } from "react";
import { X, Send, CheckCircle2, Sparkles, Phone, ArrowRight, ChevronDown, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { useConsultation } from "../../context/ConsultationContext";

export default function ConsultationModal() {
  const { t, language } = useLanguage();
  const { isOpen, closeConsultation, initialPackage } = useConsultation();

  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    whatsapp: "",
    email: "",
    serviceType: "Landing Page Standard",
    budget: "1-3juta",
    timeline: "1-2minggu",
    notes: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialPackage) {
      setFormData((prev) => ({
        ...prev,
        serviceType: initialPackage,
      }));
    }
  }, [initialPackage]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (fieldName, val) => {
    setFormData((prev) => ({ ...prev, [fieldName]: val }));
  };

  const generateWAMessage = () => {
    const textID = `Halo GapaiDigital! Saya ingin konsultasi & pengajuan brief proyek:

👤 *Nama:* ${formData.name || "-"}
🏢 *Nama Bisnis:* ${formData.businessName || "-"}
📱 *WhatsApp:* ${formData.whatsapp || "-"}
📧 *Email:* ${formData.email || "-"}
🚀 *Layanan:* ${formData.serviceType}
💰 *Estimasi Budget:* ${getBudgetLabel(formData.budget, "id")}
⏱️ *Target Timeline:* ${getTimelineLabel(formData.timeline, "id")}
📝 *Detail Brief:* ${formData.notes || "Belum ada catatan khusus."}

Mohon dapat dibantu proses penawarannya. Terima kasih!`;

    const textEN = `Hello GapaiDigital! I'd like to consult & submit a project brief:

👤 *Name:* ${formData.name || "-"}
🏢 *Business Name:* ${formData.businessName || "-"}
📱 *WhatsApp:* ${formData.whatsapp || "-"}
📧 *Email:* ${formData.email || "-"}
🚀 *Service:* ${formData.serviceType}
💰 *Estimated Budget:* ${getBudgetLabel(formData.budget, "en")}
⏱️ *Target Timeline:* ${getTimelineLabel(formData.timeline, "en")}
📝 *Brief Details:* ${formData.notes || "No special notes provided."}

Please assist with proposal details. Thank you!`;

    const message = language === "en" ? textEN : textID;
    return `https://wa.me/6285707185783?text=${encodeURIComponent(message)}`;
  };

  const handleSendWA = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.whatsapp) {
      alert(t("Mohon isi Nama Lengkap dan Nomor WhatsApp Anda.", "Please fill in your Name and WhatsApp number."));
      return;
    }
    const waUrl = generateWAMessage();
    window.open(waUrl, "_blank");
    setIsSubmitted(true);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setFormData({
      name: "",
      businessName: "",
      whatsapp: "",
      email: "",
      serviceType: "Landing Page Standard",
      budget: "1-3juta",
      timeline: "1-2minggu",
      notes: "",
    });
    closeConsultation();
  };

  // OPTIONS DATA
  const serviceOptions = [
    { value: "Landing Page Standard", label: t("Landing Page Standard", "Landing Page Standard") },
    { value: "Landing Page Pro", label: t("Landing Page Pro", "Landing Page Pro") },
    { value: "Aplikasi Mobile (Android/iOS)", label: t("Aplikasi Mobile (iOS / Android)", "Mobile App (iOS / Android)") },
    { value: "Sistem Web Custom / Kasir", label: t("Sistem Web / ERP Custom", "Custom Web / ERP System") },
    { value: "Custom Project / Re-Design", label: t("Custom Project / Re-Design", "Custom Project / Re-Design") },
  ];

  const budgetOptions = [
    { value: "under1jt", label: language === "en" ? "< IDR 1 Million" : "< Rp 1.000.000" },
    { value: "1-3juta", label: language === "en" ? "IDR 1M - 3M" : "Rp 1.000.000 - Rp 3.000.000" },
    { value: "3-5juta", label: language === "en" ? "IDR 3M - 5M" : "Rp 3.000.000 - Rp 5.000.000" },
    { value: "above5juta", label: language === "en" ? "> IDR 5 Million" : "> Rp 5.000.000" },
  ];

  const timelineOptions = [
    { value: "1minggu", label: t("< 1 Minggu (Urgent)", "< 1 Week (Urgent)") },
    { value: "1-2minggu", label: t("1 - 2 Minggu (Standar)", "1 - 2 Weeks (Standard)") },
    { value: "1bulan", label: t("1 Bulan (Kompleks)", "1 Month (Complex)") },
    { value: "fleksibel", label: t("Fleksibel / Diskusi", "Flexible / Discussion") },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5">
        {/* BACKDROP */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleResetAndClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* ELEGANT AGENCY MODAL CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ type: "spring", duration: 0.35 }}
          className="relative w-full max-w-xl md:max-w-2xl bg-white dark:bg-[#0c0c0e] text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-800/90 rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col my-auto max-h-[92vh]"
        >
          {/* RAPI & TIDY HEADER */}
          <div className="relative shrink-0 border-b border-zinc-100 dark:border-zinc-800/80 px-6 py-4 text-center bg-zinc-50/50 dark:bg-zinc-900/40">
            <button
              onClick={handleResetAndClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-500 dark:text-zinc-400 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X size={16} />
            </button>

            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-[10px] font-bold uppercase tracking-wider mb-1">
              <Sparkles size={11} className="text-amber-500" />
              <span>{t("Konsultasi & Brief Proyek", "Project Brief & Consultation")}</span>
            </div>

            <h2 className="text-lg sm:text-xl font-black tracking-tight text-zinc-900 dark:text-white">
              {t("Mulai Proyek Digital Anda", "Start Your Digital Project")}
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-xs mt-0.5 font-medium leading-normal max-w-md mx-auto">
              {t(
                "Isi detail kebutuhan di bawah. Tim GapaiDigital akan menganalisis & menghubungi Anda via WhatsApp.",
                "Fill in requirements below. The GapaiDigital team will reach out via WhatsApp."
              )}
            </p>
          </div>

          {/* BODY WITH HIDDEN SCROLLBAR & COMPACT PADDING */}
          <div className="flex-1 overflow-y-auto px-5 py-4 sm:px-7 sm:py-5 space-y-3.5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {isSubmitted ? (
              /* SUCCESS STATE */
              <div className="py-4 text-center flex flex-col items-center">
                <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mb-3">
                  <CheckCircle2 size={28} />
                </div>
                <h3 className="text-lg font-black text-zinc-900 dark:text-white mb-1.5">
                  {t("Brief Siap Dikirim ke WhatsApp!", "Brief Ready to Send to WhatsApp!")}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-xs max-w-md mx-auto mb-4 leading-relaxed font-medium">
                  {t(
                    "Terima kasih! Jika tab WhatsApp tidak terbuka secara otomatis, silakan klik tombol di bawah untuk melanjutkan chat.",
                    "Thank you! If WhatsApp didn't open automatically, please click the button below to continue chat."
                  )}
                </p>

                <div className="w-full bg-zinc-50 dark:bg-zinc-900/60 p-3.5 rounded-2xl text-left border border-zinc-200 dark:border-zinc-800 text-xs space-y-1.5 mb-4">
                  <p className="font-bold text-amber-500 uppercase tracking-wider text-[10px]">
                    {t("Ringkasan Pengajuan:", "Submission Summary:")}
                  </p>
                  <p className="text-zinc-700 dark:text-zinc-300"><strong>{t("Nama:", "Name:")}</strong> {formData.name} ({formData.businessName || "-"})</p>
                  <p className="text-zinc-700 dark:text-zinc-300"><strong>WhatsApp:</strong> {formData.whatsapp}</p>
                  <p className="text-zinc-700 dark:text-zinc-300"><strong>{t("Layanan:", "Service:")}</strong> {formData.serviceType}</p>
                  <p className="text-zinc-700 dark:text-zinc-300"><strong>{t("Budget:", "Budget:")}</strong> {getBudgetLabel(formData.budget, language)}</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-2.5 w-full">
                  <a
                    href={generateWAMessage()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white rounded-xl text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2 transition shadow-md shadow-amber-500/20"
                  >
                    <Phone size={15} />
                    {t("Buka WhatsApp Chat", "Open WhatsApp Chat")}
                  </a>
                  <button
                    onClick={handleResetAndClose}
                    className="py-2.5 px-5 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer"
                  >
                    {t("Tutup", "Close")}
                  </button>
                </div>
              </div>
            ) : (
              /* FORM STATE */
              <form onSubmit={handleSendWA} className="space-y-3 text-left">
                {/* ROW 1: NAMA & BISNIS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-zinc-700 dark:text-zinc-300 mb-1">
                      {t("Nama Lengkap *", "Full Name *")}
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t("Ahmad Rafi", "John Doe")}
                      className="w-full px-3 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 text-zinc-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-zinc-700 dark:text-zinc-300 mb-1">
                      {t("Nama Bisnis / Perusahaan", "Business / Company Name")}
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      placeholder={t("PT Kopi Nusantara / Startup", "e.g. Acme Corp")}
                      className="w-full px-3 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 text-zinc-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500 transition"
                    />
                  </div>
                </div>

                {/* ROW 2: WHATSAPP & EMAIL */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-zinc-700 dark:text-zinc-300 mb-1">
                      {t("Nomor WhatsApp *", "WhatsApp Number *")}
                    </label>
                    <input
                      type="tel"
                      name="whatsapp"
                      required
                      value={formData.whatsapp}
                      onChange={handleChange}
                      placeholder="0857xxxxxxxx"
                      className="w-full px-3 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 text-zinc-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-zinc-700 dark:text-zinc-300 mb-1">
                      {t("Alamat Email (Opsional)", "Email Address (Optional)")}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@bisnis.com"
                      className="w-full px-3 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 text-zinc-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500 transition"
                    />
                  </div>
                </div>

                {/* ROW 3: CUSTOM DROPDOWNS */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <CustomDropdown
                    label={t("Jenis Layanan", "Service Type")}
                    value={formData.serviceType}
                    options={serviceOptions}
                    onChange={(val) => handleSelectChange("serviceType", val)}
                  />

                  <CustomDropdown
                    label={t("Estimasi Budget", "Estimated Budget")}
                    value={formData.budget}
                    options={budgetOptions}
                    onChange={(val) => handleSelectChange("budget", val)}
                  />

                  <CustomDropdown
                    label={t("Target Pengerjaan", "Target Timeline")}
                    value={formData.timeline}
                    options={timelineOptions}
                    onChange={(val) => handleSelectChange("timeline", val)}
                  />
                </div>

                {/* ROW 4: BRIEF NOTES */}
                <div>
                  <label className="block text-[11px] font-bold text-zinc-700 dark:text-zinc-300 mb-1">
                    {t("Detail Brief / Catatan Kebutuhan", "Brief Details / Notes")}
                  </label>
                  <textarea
                    name="notes"
                    rows={2}
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder={t("Jelaskan ide website, fitur khusus, atau referensi contoh website yang Anda sukai...", "Describe your website idea, custom features, or reference links you like...")}
                    className="w-full px-3 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 text-zinc-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500 transition resize-none leading-relaxed"
                  />
                </div>

                {/* SUBMIT BUTTON */}
                <div className="pt-1">
                  <button
                    type="submit"
                    className="w-full py-3 px-5 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-orange-400 text-white rounded-xl text-xs sm:text-sm font-black flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 hover:scale-[1.005] active:scale-98 transition-all duration-200 cursor-pointer"
                  >
                    <Send size={14} />
                    <span>{t("Kirim Brief via WhatsApp Direct", "Send Brief via WhatsApp Direct")}</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

// SLEEK CUSTOM DROPDOWN COMPONENT (COMPACT, READABLE & NO SCROLL CUT-OFF)
function CustomDropdown({ label, value, options, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const selectedOption = options.find((opt) => opt.value === value) || options[0];

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={`relative text-left ${isOpen ? "z-40" : "z-10"}`} ref={dropdownRef}>
      <label className="block text-[11px] font-bold text-zinc-700 dark:text-zinc-300 mb-1">
        {label}
      </label>

      {/* TRIGGER BUTTON */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-3 py-2 rounded-xl border text-xs font-medium flex items-center justify-between transition-all duration-200 cursor-pointer ${
          isOpen
            ? "border-amber-500 ring-2 ring-amber-500/20 bg-white dark:bg-zinc-900"
            : "border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 hover:bg-zinc-100/80 dark:hover:bg-zinc-800/60"
        } text-zinc-900 dark:text-white`}
      >
        <span className="truncate font-semibold">{selectedOption?.label}</span>
        <ChevronDown
          size={14}
          className={`text-zinc-400 shrink-0 transition-transform duration-200 ml-1 ${
            isOpen ? "rotate-180 text-amber-500" : ""
          }`}
        />
      </button>

      {/* DROPDOWN MENU POPOVER */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -4, scale: 0.98 }}
            animate={{ opacity: 1, y: 4, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 min-w-full w-max max-w-[280px] sm:max-w-[320px] z-50 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl py-1.5 px-1 max-h-56 overflow-y-auto space-y-0.5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {options.map((opt) => {
              const isSelected = opt.value === value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => {
                    onChange(opt.value);
                    setIsOpen(false);
                  }}
                  className={`w-full px-3 py-1.5 rounded-xl text-xs text-left flex items-center justify-between transition cursor-pointer ${
                    isSelected
                      ? "bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold"
                      : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800/70"
                  }`}
                >
                  <span className="whitespace-normal leading-snug pr-2">{opt.label}</span>
                  {isSelected && <Check size={13} className="text-amber-500 shrink-0 ml-1.5" />}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function getBudgetLabel(budget, lang) {
  const map = {
    under1jt: lang === "en" ? "< IDR 1M" : "< Rp 1.000.000",
    "1-3juta": lang === "en" ? "IDR 1M - 3M" : "Rp 1.000.000 - Rp 3.000.000",
    "3-5juta": lang === "en" ? "IDR 3M - 5M" : "Rp 3.000.000 - Rp 5.000.000",
    above5juta: lang === "en" ? "> IDR 5M" : "> Rp 5.000.000",
  };
  return map[budget] || budget;
}

function getTimelineLabel(timeline, lang) {
  const map = {
    "1minggu": lang === "en" ? "< 1 Week (Urgent)" : "< 1 Minggu (Cepat / Urgent)",
    "1-2minggu": lang === "en" ? "1 - 2 Weeks" : "1 - 2 Minggu (Standar)",
    "1bulan": lang === "en" ? "1 Month" : "1 Bulan (Kompleks)",
    fleksibel: lang === "en" ? "Flexible / Discussion First" : "Fleksibel / Diskusi Dulu",
  };
  return map[timeline] || timeline;
}
