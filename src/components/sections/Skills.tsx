import { FC } from "react";
import { Section } from "../ui/Section";
import { useLanguage } from "../../context/LanguageContext";

const Skills: FC = () => {
  const { t } = useLanguage();

  return (
    <Section title={t.sections.skills}>
      <div className="section-card dark:cyber-card p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-y-4 gap-x-8">
          {t.skills.map((category) => (
            <div key={category.name} className="space-y-2">
              <h3 className="text-base font-bold text-primary dark:text-cyber-cyan">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-block text-xs font-medium bg-gray-100 text-gray-800 px-3 py-1 rounded-full dark:bg-cyber-teal/20 dark:text-cyber-teal"
                  >
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
