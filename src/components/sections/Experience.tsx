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
            className="surface-card p-4 md:p-5"
          >
            <div className="mb-2 flex flex-wrap items-start justify-between">
              <div className="w-full md:w-auto">
                <div className="flex justify-between md:block print:block">
                  <h3 className="card-title text-base">{exp.company}</h3>
                  <span className="meta-text font-mono text-xs md:mt-0.5 md:block">
                    {exp.period}
                  </span>
                </div>
                <p className="meta-text mt-0.5 text-xs font-medium">
                  {exp.location}
                  {exp.position && ` | ${exp.position}`}
                </p>
                {exp.links && (
                  <div className="mb-2 mt-2 flex space-x-2">
                    {exp.links.demo && (
                      <a
                        href={exp.links.demo}
                        className="link-chip-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="mr-1">🔗</span> {t.ui.liveProject}
                      </a>
                    )}
                    {exp.links.github && (
                      <a
                        href={exp.links.github}
                        className="link-chip-sm"
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

            <ul className="columned-list resume-body list-outside list-disc space-y-1 leading-relaxed md:columns-2 print:columns-2 ml-4">
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
