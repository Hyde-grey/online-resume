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

type LanguageContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider: FC<PropsWithChildren> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>(() => {
    const saved = localStorage.getItem("locale");
    if (saved && isLocale(saved)) {
      return saved;
    }
    return detectDefaultLocale();
  });

  const t = getTranslations(locale);

  useEffect(() => {
    localStorage.setItem("locale", locale);
    document.documentElement.lang = locale;
    document.title = t.meta.title;
  }, [locale, t.meta.title]);

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
