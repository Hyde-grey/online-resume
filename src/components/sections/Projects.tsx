import { FC } from "react";
import { Section } from "../ui/Section";
import { useLanguage } from "../../context/LanguageContext";
import { HighlightedText } from "../../utils/highlightTechTerms";

const Projects: FC = () => {
  const { t } = useLanguage();

  return (
    <Section title={t.sections.projects}>
      <div className="surface-card p-4 md:p-5">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 print:grid-cols-2">
          {t.projects.map((project) => (
            <div key={project.title} className="space-y-2">
              <h3 className="card-title-lg">{project.title}</h3>
              <div className="mb-2 flex space-x-2">
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    className="link-chip"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="mr-1">🔗</span> {t.ui.liveDemo}
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    className="link-chip"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="mr-1">💻</span> {t.ui.code}
                  </a>
                )}
              </div>
              <p className="resume-body leading-relaxed">
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
