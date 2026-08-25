import { useState, useEffect, useRef, useCallback } from "react";
import { X, Send, CheckCircle2, Sparkles, Phone, ChevronDown, Check, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { useConsultation } from "../../context/ConsultationContext";

const DEFAULT_FORM = {
  name: "",
  businessName: "",
  whatsapp: "",
  email: "",
  serviceType: "Landing Page Standard",
  budget: "1-3juta",
  timeline: "1-2minggu",
  notes: "",
};

export default function ConsultationModal() {
  const { t, language } = useLanguage();
  const { isOpen, closeConsultation, initialPackage } = useConsultation();

  const [formData, setFormData] = useState(DEFAULT_FORM);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialPackage) {
      setFormData((prev) => ({ ...prev, serviceType: initialPackage }));
    }
  }, [initialPackage]);

  const resetAndClose = useCallback(() => {
    setIsSubmitted(false);
    setErrors({});
    setFormData(DEFAULT_FORM);
    closeConsultation();
  }, [closeConsultation]);

  // Escape to close + lock background scroll while open
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") resetAndClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, resetAndClose]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSelectChange = (fieldName, val) => {
    setFormData((prev) => ({ ...prev, [fieldName]: val }));
  };

  const generateWAMessage = () => {
    const textID = `Halo Tim GapaiDigital! Saya berminat untuk berkonsultasi & mengajukan brief proyek digital untuk bisnis saya:

👤 *Nama:* ${formData.name || "-"}
🏢 *Nama Bisnis / Perusahaan:* ${formData.businessName || "-"}
📱 *WhatsApp:* ${formData.whatsapp || "-"}
📧 *Email:* ${formData.email || "-"}
🚀 *Layanan Kebutuhan:* ${formData.serviceType}
💰 *Estimasi Budget:* ${getBudgetLabel(formData.budget, "id")}
⏱️ *Target Timeline:* ${getTimelineLabel(formData.timeline, "id")}
📝 *Catatan / Detail Brief:* ${formData.notes || "Belum ada catatan khusus."}

Mohon bantuannya untuk informasi dan diskusi lebih lanjut. Terima kasih!`;

    const textEN = `Hello GapaiDigital Team! I would like to consult & submit a digital project brief:

👤 *Name:* ${formData.name || "-"}
🏢 *Company / Business:* ${formData.businessName || "-"}
📱 *WhatsApp:* ${formData.whatsapp || "-"}
📧 *Email:* ${formData.email || "-"}
🚀 *Service Required:* ${formData.serviceType}
💰 *Estimated Budget:* ${getBudgetLabel(formData.budget, "en")}
⏱️ *Target Timeline:* ${getTimelineLabel(formData.timeline, "en")}
📝 *Brief Details / Notes:* ${formData.notes || "No special notes provided."}

Please let me know the next steps for discussion. Thank you!`;

    const message = language === "en" ? textEN : textID;
    return `https://wa.me/6285707185783?text=${encodeURIComponent(message)}`;
  };

  const handleSendWA = (e) => {
    e.preventDefault();
    const nextErrors = {};
    if (!formData.name.trim()) nextErrors.name = t("Nama lengkap wajib diisi.", "Full name is required.");
    if (!formData.whatsapp.trim()) {
      nextErrors.whatsapp = t("Nomor WhatsApp wajib diisi.", "WhatsApp number is required.");
    } else if (!/^[0-9+\-\s]{8,16}$/.test(formData.whatsapp.trim())) {
      nextErrors.whatsapp = t("Format nomor tidak valid (8-16 digit).", "Invalid number format (8-16 digits).");
    }
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }
    const waUrl = generateWAMessage();
    window.open(waUrl, "_blank");
    setIsSubmitted(true);
  };

  // OPTIONS DATA
  const serviceOptions = [
    { value: "Landing Page Standard", label: t("Landing Page Promosi (Cepat & Menjual)", "High-Converting Landing Page") },
    { value: "Landing Page Pro", label: t("Website Company Profile / Pro", "Professional Company Profile Website") },
    { value: "Aplikasi Mobile (Android/iOS)", label: t("Aplikasi Mobile (Android & iOS)", "Mobile App (Android & iOS)") },
    { value: "Sistem Web Custom / Kasir", label: t("Sistem Web Kustom / Kasir & ERP", "Custom Web / POS & ERP System") },
    { value: "Custom Project / Re-Design", label: t("Custom Project / Redesain Website", "Custom Project / Website Redesign") },
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

  const inputClass = (hasError) =>
    `w-full px-3.5 py-2.5 rounded-xl border text-sm font-medium bg-zinc-50 dark:bg-zinc-900/60 text-zinc-900 dark:text-white placeholder:font-normal placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:ring-2 transition ${
      hasError
        ? "border-red-400 dark:border-red-500/70 focus:border-red-500 focus:ring-red-500/25"
        : "border-zinc-200 dark:border-zinc-800 focus:border-amber-500 focus:ring-amber-500/30 focus:bg-white dark:focus:bg-zinc-900"
    }`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[70] flex items-end justify-center sm:items-center sm:p-5">
          {/* BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetAndClose}
            className="fixed inset-0 bg-zinc-950/60 backdrop-blur-sm"
          />

          {/* MODAL CARD — bottom sheet on mobile, centered dialog on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 48, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 48, scale: 0.98 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0.15 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="consultation-title"
            className="relative z-10 flex w-full max-w-2xl flex-col overflow-hidden rounded-t-3xl border border-zinc-200 bg-white text-zinc-900 shadow-2xl shadow-zinc-950/20 sm:max-h-[88dvh] sm:rounded-3xl dark:border-zinc-800 dark:bg-[#0c0c0e] dark:text-zinc-100 max-h-[94dvh]"
          >
            {/* Mobile sheet handle */}
            <div className="shrink-0 pt-2.5 sm:hidden" aria-hidden="true">
              <div className="mx-auto h-1 w-10 rounded-full bg-zinc-200 dark:bg-zinc-700" />
            </div>

            {/* HEADER */}
            <div className="relative shrink-0 border-b border-zinc-100 px-5 pb-4 pt-4 sm:px-8 sm:pb-5 sm:pt-6 dark:border-zinc-800/80">
              <button
                onClick={resetAndClose}
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-zinc-100 text-zinc-500 transition-colors hover:bg-zinc-200 hover:text-zinc-700 sm:right-5 sm:top-5 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-zinc-200 cursor-pointer"
                aria-label={t("Tutup", "Close")}
              >
                <X size={16} />
              </button>

              <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400">
                <Sparkles size={11} className="text-amber-500" />
                <span>{t("Konsultasi & Brief Proyek", "Project Brief & Consultation")}</span>
              </div>

              <h2 id="consultation-title" className="mt-2 pr-10 text-xl font-extrabold tracking-tight text-zinc-900 sm:text-2xl dark:text-white">
                {t("Diskusikan Proyek Digital Anda", "Discuss Your Digital Project")}
              </h2>
              <p className="mt-1 max-w-[52ch] text-sm font-medium leading-relaxed text-zinc-500 dark:text-zinc-400">
                {t(
                  "Isi detail kebutuhan bisnis Anda di bawah ini. Tim kami akan mempelajari kebutuhan Anda dan menghubungi via WhatsApp.",
                  "Fill in your project requirements below. Our team will review them and reach out via WhatsApp."
                )}
              </p>
            </div>

            {/* SCROLLABLE BODY */}
            <div className="flex-1 overflow-y-auto overscroll-contain px-5 py-5 sm:px-8 sm:py-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {isSubmitted ? (
                /* SUCCESS STATE */
                <div className="flex flex-col items-center py-2 text-center">
                  <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-500">
                    <CheckCircle2 size={30} />
                  </div>
                  <h3 className="mb-1.5 text-lg font-extrabold text-zinc-900 dark:text-white">
                    {t("Brief Siap Dikirim ke WhatsApp!", "Brief Ready to Send to WhatsApp!")}
                  </h3>
                  <p className="mb-5 max-w-md text-sm font-medium leading-relaxed text-zinc-500 dark:text-zinc-400">
                    {t(
                      "Terima kasih! Jika tab WhatsApp tidak terbuka otomatis, klik tombol di bawah untuk melanjutkan chat.",
                      "Thank you! If WhatsApp didn't open automatically, click the button below to continue the chat."
                    )}
                  </p>

                  <dl className="mb-5 w-full space-y-2 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-left text-xs dark:border-zinc-800 dark:bg-zinc-900/60">
                    <div className="flex justify-between gap-4">
                      <dt className="shrink-0 font-bold text-zinc-500 dark:text-zinc-400">{t("Nama", "Name")}</dt>
                      <dd className="text-right font-semibold text-zinc-800 dark:text-zinc-200">
                        {formData.name}
                        {formData.businessName ? ` · ${formData.businessName}` : ""}
                      </dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="shrink-0 font-bold text-zinc-500 dark:text-zinc-400">WhatsApp</dt>
                      <dd className="text-right font-semibold text-zinc-800 dark:text-zinc-200">{formData.whatsapp}</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="shrink-0 font-bold text-zinc-500 dark:text-zinc-400">{t("Layanan", "Service")}</dt>
                      <dd className="text-right font-semibold text-zinc-800 dark:text-zinc-200">{formData.serviceType}</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="shrink-0 font-bold text-zinc-500 dark:text-zinc-400">{t("Budget", "Budget")}</dt>
                      <dd className="text-right font-semibold text-zinc-800 dark:text-zinc-200">
                        {getBudgetLabel(formData.budget, language)}
                      </dd>
                    </div>
                  </dl>

                  <div className="flex w-full flex-col gap-2.5 sm:flex-row">
                    <a
                      href={generateWAMessage()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-3 text-sm font-extrabold text-white shadow-md shadow-amber-500/20 transition hover:from-amber-400 hover:to-orange-400 active:scale-[0.98]"
                    >
                      <Phone size={15} />
                      {t("Buka WhatsApp Chat", "Open WhatsApp Chat")}
                    </a>
                    <button
                      onClick={resetAndClose}
                      className="rounded-xl bg-zinc-100 px-6 py-3 text-sm font-bold text-zinc-700 transition hover:bg-zinc-200 active:scale-[0.98] dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700 cursor-pointer"
                    >
                      {t("Tutup", "Close")}
                    </button>
                  </div>
                </div>
              ) : (
                /* FORM STATE */
                <form id="consultation-form" onSubmit={handleSendWA} noValidate className="space-y-6 text-left">
                  {/* SECTION 1 — CONTACT */}
                  <section className="space-y-4">
                    <SectionTitle step="1">{t("Informasi Kontak", "Contact Information")}</SectionTitle>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="cf-name" className="mb-1.5 block text-xs font-bold text-zinc-700 dark:text-zinc-300">
                          {t("Nama Lengkap", "Full Name")} <span className="text-amber-500">*</span>
                        </label>
                        <input
                          id="cf-name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder={t("Ahmad Rafi", "John Doe")}
                          aria-invalid={!!errors.name}
                          className={inputClass(!!errors.name)}
                        />
                        {errors.name && <FieldError message={errors.name} />}
                      </div>

                      <div>
                        <label htmlFor="cf-business" className="mb-1.5 block text-xs font-bold text-zinc-700 dark:text-zinc-300">
                          {t("Nama Bisnis / Perusahaan", "Business / Company Name")}
                        </label>
                        <input
                          id="cf-business"
                          type="text"
                          name="businessName"
                          value={formData.businessName}
                          onChange={handleChange}
                          placeholder={t("PT Kopi Nusantara", "e.g. Acme Corp")}
                          className={inputClass(false)}
                        />
                      </div>

                      <div>
                        <label htmlFor="cf-wa" className="mb-1.5 block text-xs font-bold text-zinc-700 dark:text-zinc-300">
                          {t("Nomor WhatsApp", "WhatsApp Number")} <span className="text-amber-500">*</span>
                        </label>
                        <input
                          id="cf-wa"
                          type="tel"
                          name="whatsapp"
                          inputMode="tel"
                          value={formData.whatsapp}
                          onChange={handleChange}
                          placeholder="0857xxxxxxxx"
                          aria-invalid={!!errors.whatsapp}
                          className={inputClass(!!errors.whatsapp)}
                        />
                        {errors.whatsapp && <FieldError message={errors.whatsapp} />}
                      </div>

                      <div>
                        <label htmlFor="cf-email" className="mb-1.5 block text-xs font-bold text-zinc-700 dark:text-zinc-300">
                          {t("Alamat Email", "Email Address")} <span className="font-medium text-zinc-400 dark:text-zinc-500">{t("(Opsional)", "(Optional)")}</span>
                        </label>
                        <input
                          id="cf-email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="email@bisnis.com"
                          className={inputClass(false)}
                        />
                      </div>
                    </div>
                  </section>

                  {/* SECTION 2 — PROJECT DETAILS */}
                  <section className="space-y-4">
                    <SectionTitle step="2">{t("Detail Proyek", "Project Details")}</SectionTitle>

                    <CustomDropdown
                      label={t("Jenis Layanan", "Service Type")}
                      value={formData.serviceType}
                      options={serviceOptions}
                      onChange={(val) => handleSelectChange("serviceType", val)}
                    />

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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

                    <div>
                      <label htmlFor="cf-notes" className="mb-1.5 block text-xs font-bold text-zinc-700 dark:text-zinc-300">
                        {t("Detail Brief / Catatan Kebutuhan", "Brief Details / Notes")}
                      </label>
                      <textarea
                        id="cf-notes"
                        name="notes"
                        rows={3}
                        value={formData.notes}
                        onChange={handleChange}
                        placeholder={t(
                          "Jelaskan ide website, fitur khusus, atau referensi contoh website yang Anda sukai...",
                          "Describe your website idea, custom features, or reference links you like..."
                        )}
                        className={`${inputClass(false)} resize-none leading-relaxed`}
                      />
                    </div>
                  </section>
                </form>
              )}
            </div>

            {/* STICKY FOOTER CTA (form state only) */}
            {!isSubmitted && (
              <div className="shrink-0 border-t border-zinc-100 bg-zinc-50/80 px-5 py-4 sm:px-8 dark:border-zinc-800/80 dark:bg-zinc-900/40">
                <button
                  type="submit"
                  form="consultation-form"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-5 py-3 text-sm font-extrabold text-white shadow-lg shadow-amber-500/20 transition-all hover:from-amber-400 hover:to-orange-400 hover:shadow-amber-500/30 active:scale-[0.98] cursor-pointer"
                >
                  <Send size={15} />
                  <span>{t("Kirim Brief & Jadwalkan Konsultasi", "Submit Brief & Schedule Consultation")}</span>
                </button>
                <p className="mt-2.5 flex items-center justify-center gap-1.5 text-center text-[11px] font-medium text-zinc-400 dark:text-zinc-500">
                  <ShieldCheck size={12} className="shrink-0 text-emerald-500" />
                  {t(
                    "Konsultasi gratis & tanpa komitmen. Data perusahaan Anda dijamin kerahasiaannya.",
                    "Free consultation with no commitment. Your corporate data remains strictly confidential."
                  )}
                </p>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

/* NUMBERED SECTION DIVIDER */
function SectionTitle({ step, children }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-[11px] font-extrabold text-amber-600 dark:text-amber-400">
        {step}
      </span>
      <h3 className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-zinc-500 dark:text-zinc-400">{children}</h3>
      <div className="h-px flex-1 bg-zinc-200/80 dark:bg-zinc-800" />
    </div>
  );
}

/* INLINE VALIDATION MESSAGE */
function FieldError({ message }) {
  return (
    <p role="alert" className="mt-1.5 text-[11px] font-semibold text-red-500">
      {message}
    </p>
  );
}

/* CUSTOM DROPDOWN — menu constrained to trigger width so it never overflows on mobile */
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
      <label className="mb-1.5 block text-xs font-bold text-zinc-700 dark:text-zinc-300">{label}</label>

      {/* TRIGGER */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={`flex w-full items-center justify-between rounded-xl border px-3.5 py-2.5 text-sm font-semibold text-zinc-900 transition-all duration-200 dark:text-white cursor-pointer ${
          isOpen
            ? "border-amber-500 bg-white ring-2 ring-amber-500/20 dark:bg-zinc-900"
            : "border-zinc-200 bg-zinc-50 hover:bg-zinc-100/80 dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:bg-zinc-800/60"
        }`}
      >
        <span className="truncate pr-2">{selectedOption?.label}</span>
        <ChevronDown
          size={15}
          className={`shrink-0 text-zinc-400 transition-transform duration-200 ${isOpen ? "rotate-180 text-amber-500" : ""}`}
        />
      </button>

      {/* MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            role="listbox"
            initial={{ opacity: 0, y: -4, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 right-0 top-full z-50 mt-1.5 max-h-56 overflow-y-auto rounded-xl border border-zinc-200 bg-white p-1 shadow-xl shadow-zinc-950/10 dark:border-zinc-800 dark:bg-zinc-900 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {options.map((opt) => {
              const isSelected = opt.value === value;
              return (
                <li key={opt.value}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => {
                      onChange(opt.value);
                      setIsOpen(false);
                    }}
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-[13px] transition cursor-pointer ${
                      isSelected
                        ? "bg-amber-500/10 font-bold text-amber-600 dark:text-amber-400"
                        : "font-medium text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800/70"
                    }`}
                  >
                    <span className="pr-2 leading-snug">{opt.label}</span>
                    {isSelected && <Check size={14} className="ml-1.5 shrink-0 text-amber-500" />}
                  </button>
                </li>
              );
            })}
          </motion.ul>
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
    "1bulan": lang === "en" ? "1 Month" : "1 Month (Complex)",
    fleksibel: lang === "en" ? "Flexible / Discussion First" : "Fleksibel / Diskusi Dulu",
  };
  return map[timeline] || timeline;
}
