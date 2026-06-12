import { FC } from "react";
import { Section } from "../ui/Section";
import { useLanguage } from "../../context/LanguageContext";
import { HighlightedText } from "../../utils/highlightTechTerms";

const Experience: FC = () => {
  const { t } = useLanguage();

  return (
    <Section title={t.sections.experience}>
      <div className="space-y-5">
        {t.experience.map((exp) => (
          <div
            key={`${exp.company}-${exp.period}`}
            className="section-card dark:cyber-card p-4"
          >
            <div className="flex flex-wrap justify-between items-start mb-2">
              <div className="w-full md:w-auto">
                <div className="flex justify-between md:block print:block">
                  <h3 className="text-base font-bold text-primary dark:text-slate-100 dark:font-display">
                    {exp.company}
                  </h3>
                  <span className="text-gray-600 dark:text-sky-400/70 font-mono text-xs md:mt-0.5 md:block">
                    {exp.period}
                  </span>
                </div>
                <p className="text-xs font-medium text-gray-600 dark:text-slate-400 mt-0.5">
                  {exp.location}
                  {exp.position && ` | ${exp.position}`}
                </p>
                {exp.links && (
                  <div className="mt-2 mb-2 flex space-x-2">
                    {exp.links.demo && (
                      <a
                        href={exp.links.demo}
                        className="text-xs font-medium bg-primary/10 text-primary px-2 py-0.5 rounded flex items-center hover:bg-primary/20 dark:link-chip-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="mr-1">🔗</span> {t.ui.liveProject}
                      </a>
                    )}
                    {exp.links.github && (
                      <a
                        href={exp.links.github}
                        className="text-xs font-medium bg-primary/10 text-primary px-2 py-0.5 rounded flex items-center hover:bg-primary/20 dark:link-chip-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="mr-1">💻</span> {t.ui.code}
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>

            <ul className="list-disc list-outside ml-4 space-y-1 text-gray-700 dark:text-gray-200 text-sm leading-relaxed columned-list columns-1 md:columns-2 print:columns-2">
              {exp.details.map((detail, index) => (
                <li key={index} className="pb-1">
                  <HighlightedText text={detail} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
