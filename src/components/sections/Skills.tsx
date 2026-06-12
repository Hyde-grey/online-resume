import { FC } from "react";
import { Section } from "../ui/Section";
import { useLanguage } from "../../context/LanguageContext";

const Skills: FC = () => {
  const { t } = useLanguage();

  return (
    <Section title={t.sections.skills}>
      <div className="surface-card p-4 md:p-5">
        <div className="grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2 print:grid-cols-2">
          {t.skills.map((category) => (
            <div key={category.name} className="space-y-2">
              <h3 className="card-title text-base">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Skills;
