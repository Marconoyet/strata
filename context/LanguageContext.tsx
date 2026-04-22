"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { translations, Language } from "@/lib/translations";

type LanguageContextType = {
  lang: Language;
  t: (typeof translations)[Language];
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("ar");

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("dir", translations[lang].dir);
    root.setAttribute("lang", lang);
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === "ar" ? "en" : "ar"));
  };

  return (
    <LanguageContext.Provider
      value={{ lang, t: translations[lang], toggleLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
