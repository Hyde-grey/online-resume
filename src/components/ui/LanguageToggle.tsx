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
      className="print-ui fixed top-4 left-4 z-20 flex rounded overflow-hidden bg-gray-200 dark:bg-cyber-darker dark:border dark:border-cyber-border print:hidden"
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
          className={`px-3 py-2 text-xs font-semibold font-tech tracking-wide transition-colors duration-300 min-w-[2.75rem] ${
            locale === option
              ? "bg-primary text-white dark:bg-cyber-cyan dark:text-cyber-dark"
              : "text-gray-700 dark:text-cyber-teal hover:bg-gray-300 dark:hover:bg-cyber-gray"
          }`}
        >
          {localeLabels[option]}
        </motion.button>
      ))}
    </div>
  );
};
