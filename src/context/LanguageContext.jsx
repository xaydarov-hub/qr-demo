import { createContext, useCallback, useContext, useMemo } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { t as translate } from "../i18n/translations";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useLocalStorage("bk_lang", "uz");

  const t = useCallback((key) => translate(key, lang), [lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
