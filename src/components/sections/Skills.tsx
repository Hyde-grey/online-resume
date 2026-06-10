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
    name: "Cloud & AI",
    skills: [
      "AWS Amplify Gen 2",
      "Amazon Bedrock",
      "AWS Lambda",
      "Cognito",
      "AppSync",
      "DynamoDB",
      "Stripe",
      "PostHog",
    ],
  },
  {
    name: "Tools & Libraries",
    skills: [
      "Framer Motion",
      "React Three Fiber",
      "D3.js",
      "TradingView",
      "ElevenLabs",
      "GSAP",
      "Vite",
      "Git",
    ],
  },
  {
    name: "3D & Animation",
    skills: [
      "Three.js",
      "Blender",
      "WebGL",
      "OGL / GLSL",
      "CSS Animations",
      "3D Modeling",
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
