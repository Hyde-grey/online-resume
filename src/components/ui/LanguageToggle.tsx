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
      className="print-ui fixed top-4 left-4 z-20 flex rounded-xl overflow-hidden bg-gray-200 dark:chrome-panel print:hidden"
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
          className={`px-3.5 py-2 text-xs font-semibold font-display tracking-wide transition-all duration-200 min-w-[2.75rem] ${
            locale === option
              ? "bg-primary text-white dark:bg-sky-500/90 dark:text-slate-950"
              : "text-gray-700 dark:text-slate-400 hover:bg-gray-300 dark:hover:bg-white/5"
          }`}
        >
          {localeLabels[option]}
        </motion.button>
      ))}
    </div>
  );
};
