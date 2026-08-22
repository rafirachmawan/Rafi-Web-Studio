import { createContext, useContext, useState } from "react";

const ConsultationContext = createContext();

export function ConsultationProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [initialPackage, setInitialPackage] = useState("");

  const openConsultation = (packageName = "") => {
    setInitialPackage(packageName);
    setIsOpen(true);
  };

  const closeConsultation = () => {
    setIsOpen(false);
  };

  return (
    <ConsultationContext.Provider
      value={{
        isOpen,
        initialPackage,
        openConsultation,
        closeConsultation,
      }}
    >
      {children}
    </ConsultationContext.Provider>
  );
}

export function useConsultation() {
  const context = useContext(ConsultationContext);
  if (!context) {
    throw new Error("useConsultation must be used within a ConsultationProvider");
  }
  return context;
}
