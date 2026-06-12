import { FC } from "react";
import { Section } from "../ui/Section";
import { useLanguage } from "../../context/LanguageContext";

const SpokenLanguages: FC = () => {
  const { t } = useLanguage();

  return (
    <Section title={t.sections.spokenLanguages}>
      <div className="section-card dark:cyber-card p-4">
        <div className="flex flex-wrap gap-3">
          {t.spokenLanguages.map((language) => (
            <div
              key={language.name}
              className="inline-flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full dark:lang-chip"
            >
              <span className="text-sm font-semibold text-primary dark:text-slate-100 dark:font-display">
                {language.name}
              </span>
              <span className="text-xs font-medium text-gray-600 dark:text-sky-400/80">
                {t.levels[language.level]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default SpokenLanguages;
