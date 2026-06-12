import { FC } from "react";
import { Section } from "../ui/Section";
import { useLanguage } from "../../context/LanguageContext";

const ProfessionalSummary: FC = () => {
  const { t } = useLanguage();

  return (
    <Section title={t.sections.professionalSummary}>
      <div className="surface-card p-4 md:p-5">
        <p className="resume-body leading-relaxed">
          {t.summary.map((part, index) =>
            part.emphasis ? (
              <span key={index} className="text-emphasis">
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
