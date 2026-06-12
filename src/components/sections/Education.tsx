import { FC } from "react";
import { Section } from "../ui/Section";
import { useLanguage } from "../../context/LanguageContext";
import { HighlightedText } from "../../utils/highlightTechTerms";

const Education: FC = () => {
  const { t } = useLanguage();

  return (
    <Section title={t.sections.education}>
      <div className="grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-4">
        {t.education.map((edu) => (
          <div key={edu.school} className="section-card dark:cyber-card p-4">
            <h3 className="text-base font-bold text-primary dark:text-cyber-cyan">
              {edu.degree}
            </h3>
            <p className="text-sm font-medium text-secondary dark:text-cyber-teal mt-1">
              {edu.school}
            </p>
            <div className="flex justify-between text-xs text-gray-600 dark:text-gray-300 mt-1 mb-2">
              {edu.location && <span>{edu.location}</span>}
              <span className="font-mono">{edu.period}</span>
            </div>

            {edu.details && (
              <ul className="list-disc list-outside ml-4 space-y-1 text-gray-700 dark:text-gray-200 text-sm leading-relaxed">
                {edu.details.map((detail, index) => (
                  <li key={index} className="pb-0.5">
                    <HighlightedText text={detail} />
                  </li>
                ))}
              </ul>
            )}

            {edu.description && (
              <p className="text-sm text-gray-700 dark:text-gray-200 leading-relaxed">
                {edu.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Education;
