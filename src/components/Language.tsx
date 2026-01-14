import React from "react";
import type { Lang } from "./i18n";
import { RTL_LANGS } from "./i18n";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; dir: "ltr" | "rtl" };

const LanguageContext = React.createContext<Ctx | null>(null);

const STORAGE_KEY = "nazar_lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = React.useState<Lang>(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
    return saved === "tr" || saved === "en" || saved === "ar" ? saved : "en";
  });

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem(STORAGE_KEY, l);
  };

  const dir: "ltr" | "rtl" = RTL_LANGS.includes(lang) ? "rtl" : "ltr";

  // Sayfa yönünü set et (AR için RTL)
  React.useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
  }, [dir, lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = React.useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
