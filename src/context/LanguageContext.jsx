import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem("language");
    return saved === "en" ? "en" : "id";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  // Translation helper
  // Can be called as t("teks indo", "english text") OR t({ id: "teks indo", en: "english text" })
  const t = (idText, enText) => {
    if (typeof idText === "object" && idText !== null) {
      return language === "en" ? idText.en : idText.id;
    }
    return language === "en" ? enText : idText;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
