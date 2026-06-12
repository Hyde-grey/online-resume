import { FC } from "react";
import { motion } from "framer-motion";
import { Locale } from "../../i18n";
import { useLanguage } from "../../context/LanguageContext";

const localeLabels: Record<Locale, string> = {
  en: "EN",
  fr: "FR",
};

export const LanguageToggle: FC = () => {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div
      className="print-ui chrome-panel fixed left-4 top-4 z-20 flex print:hidden"
      role="group"
      aria-label={t.ui.selectLanguage}
    >
      {(["en", "fr"] as Locale[]).map((option) => (
        <motion.button
          key={option}
          type="button"
          whileTap={{ scale: 0.95 }}
          onClick={() => setLocale(option)}
          aria-label={option === "en" ? t.ui.languageEn : t.ui.languageFr}
          aria-pressed={locale === option}
          className={`min-w-[2.75rem] px-3.5 py-2 font-display text-xs font-semibold tracking-wide transition-all duration-200 ${
            locale === option ? "chrome-tab-active" : "chrome-tab-inactive"
          }`}
        >
          {localeLabels[option]}
        </motion.button>
      ))}
    </div>
  );
};
