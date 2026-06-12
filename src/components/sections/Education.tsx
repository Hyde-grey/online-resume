import { FC } from "react";
import { Section } from "../ui/Section";
import { useLanguage } from "../../context/LanguageContext";
import { HighlightedText } from "../../utils/highlightTechTerms";

const Education: FC = () => {
  const { t } = useLanguage();

  return (
    <Section title={t.sections.education}>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 print:grid-cols-2">
        {t.education.map((edu) => (
          <div key={edu.school} className="surface-card p-4 md:p-5">
            <h3 className="card-title text-base">{edu.degree}</h3>
            <p className="card-title mt-1 text-sm font-medium text-blue-800 dark:text-sky-400/90">
              {edu.school}
            </p>
            <div className="meta-text mb-2 mt-1 flex justify-between text-xs">
              {edu.location && <span>{edu.location}</span>}
              <span className="font-mono">{edu.period}</span>
            </div>

            {edu.details && (
              <ul className="resume-body list-outside list-disc space-y-1 leading-relaxed ml-4">
                {edu.details.map((detail, index) => (
                  <li key={index} className="pb-0.5">
                    <HighlightedText text={detail} />
                  </li>
                ))}
              </ul>
            )}

            {edu.description && (
              <p className="resume-body leading-relaxed">{edu.description}</p>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Education;
