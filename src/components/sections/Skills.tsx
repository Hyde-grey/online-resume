import { FC } from "react";
import { Section } from "../ui/Section";

type SkillCategory = {
  name: string;
  skills: string[];
};

const skillCategories: SkillCategory[] = [
  {
    name: "Languages & Frameworks",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "HTML5",
      "CSS3",
      "SASS",
      "TailwindCSS",
    ],
  },
  {
    name: "Tools & Libraries",
    skills: [
      "Framer Motion",
      "React Three Fiber",
      "GSAP",
      "Storybook",
      "Jest",
      "Vite",
      "Shadcn UI",
      "Git",
    ],
  },
  {
    name: "3D & Animation",
    skills: [
      "Three.js",
      "Blender",
      "WebGL",
      "CSS Animations",
      "3D Modeling",
      "Shader Development",
    ],
  },
  {
    name: "Design & Collaboration",
    skills: [
      "Figma",
      "Adobe XD",
      "Responsive Design",
      "UX/UI Prototyping",
      "Agile Methodology",
      "JIRA",
    ],
  },
];

const Skills: FC = () => {
  return (
    <Section title="Skills">
      <div className="section-card dark:cyber-card p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
          {skillCategories.map((category) => (
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
