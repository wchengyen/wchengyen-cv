import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  byLang,
  availableLangs,
  type Lang,
  type ResumeData,
} from "../data";

const STORAGE_KEY = "wchengyen-cv-lang";

function getInitialLang(): Lang {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
  if (stored && availableLangs.includes(stored)) return stored;
  // Default to Chinese if the browser language is zh*, otherwise English.
  const nav = window.navigator.language.toLowerCase();
  if (nav.startsWith("zh")) return "zh";
  return "en";
}

type I18nContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  data: ResumeData;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  // Keep <html lang="..."> in sync so screen readers / search engines
  // get the right signal.
  useEffect(() => {
    document.documentElement.lang = lang === "zh" ? "zh-Hant" : "en";
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore quota / privacy mode errors */
    }
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
  }, []);

  const toggleLang = useCallback(() => {
    setLangState((prev) => (prev === "en" ? "zh" : "en"));
  }, []);

  const value = useMemo<I18nContextValue>(
    () => ({
      lang,
      setLang,
      toggleLang,
      data: byLang[lang],
    }),
    [lang, setLang, toggleLang],
  );

  return (
    <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
  );
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within an <I18nProvider>");
  }
  return ctx;
}
