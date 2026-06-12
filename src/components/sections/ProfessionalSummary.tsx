import { FC } from "react";
import { Section } from "../ui/Section";
import { useLanguage } from "../../context/LanguageContext";

const ProfessionalSummary: FC = () => {
  const { t } = useLanguage();

  return (
    <Section title={t.sections.professionalSummary}>
      <div className="section-card dark:cyber-card p-4">
        <p className="text-sm text-gray-700 dark:text-gray-200 leading-relaxed">
          {t.summary.map((part, index) =>
            part.emphasis ? (
              <span
                key={index}
                className="dark:text-emphasis font-medium"
              >
                {part.text}
              </span>
            ) : (
              <span key={index}>{part.text}</span>
            )
          )}
        </p>
      </div>
    </Section>
  );
};

export default ProfessionalSummary;
