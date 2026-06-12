import { FC } from "react";
import { Section } from "../ui/Section";
import { useLanguage } from "../../context/LanguageContext";
import { HighlightedText } from "../../utils/highlightTechTerms";

const Projects: FC = () => {
  const { t } = useLanguage();

  return (
    <Section title={t.sections.projects}>
      <div className="section-card dark:cyber-card p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-5">
          {t.projects.map((project) => (
            <div key={project.title} className="space-y-2">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-bold text-primary dark:text-slate-100 dark:font-display">
                  {project.title}
                </h3>
              </div>
              <div className="flex space-x-2 mb-2">
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-lg hover:bg-primary/20 dark:link-chip flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="mr-1">🔗</span> {t.ui.liveDemo}
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-lg hover:bg-primary/20 dark:link-chip flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="mr-1">💻</span> {t.ui.code}
                  </a>
                )}
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-200 leading-relaxed">
                <HighlightedText text={project.description} />
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Projects;
