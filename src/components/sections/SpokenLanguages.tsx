import { FC } from "react";
import { Section } from "../ui/Section";
import { useLanguage } from "../../context/LanguageContext";

const SpokenLanguages: FC = () => {
  const { t } = useLanguage();

  return (
    <Section title={t.sections.spokenLanguages}>
      <div className="surface-card p-4 md:p-5">
        <div className="flex flex-wrap gap-3">
          {t.spokenLanguages.map((language) => (
            <div key={language.name} className="lang-chip">
              <span className="card-title text-sm">{language.name}</span>
              <span className="meta-text text-xs font-medium">
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
