import {
  createContext,
  useContext,
  useEffect,
  useState,
  FC,
  PropsWithChildren,
} from "react";
import {
  detectDefaultLocale,
  getTranslations,
  isLocale,
  Locale,
  Translations,
} from "../i18n";
import { readLangFromUrl, writeLangToUrl } from "../utils/resumeUrlState";

type LanguageContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

function resolveInitialLocale(): Locale {
  const fromUrl = readLangFromUrl();
  if (fromUrl) {
    return fromUrl;
  }

  const saved = localStorage.getItem("locale");
  if (saved && isLocale(saved)) {
    return saved;
  }

  return detectDefaultLocale();
}

export const LanguageProvider: FC<PropsWithChildren> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>(resolveInitialLocale);

  const t = getTranslations(locale);

  useEffect(() => {
    localStorage.setItem("locale", locale);
    document.documentElement.lang = locale;
    document.title = t.meta.title;
    writeLangToUrl(locale);
  }, [locale, t.meta.title]);

  useEffect(() => {
    const handlePopState = () => {
      const fromUrl = readLangFromUrl();
      if (fromUrl) {
        setLocaleState(fromUrl);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const setLocale = (nextLocale: Locale) => {
    setLocaleState(nextLocale);
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
