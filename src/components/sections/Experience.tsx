import { FC } from "react";
import { Section } from "../ui/Section";

type Experience = {
  company: string;
  location: string;
  position?: string;
  period: string;
  details: string[];
  links?: {
    demo?: string;
    github?: string;
  };
};

const experiences: Experience[] = [
  {
    company: "TraderSphere",
    location: "London, UK",
    period: "Feb 2025 - Present",
    details: [
      "Developed modular, resizable widgets emphasizing real-time data visualization and responsive design.",
      "Leveraged modern tools like React, TypeScript, Jest, and Storybook for robust testing practices.",
    ],
    links: {
      demo: "https://tradersphere.netlify.app/",
      github: "https://github.com/Hyde-grey/TraderSphere",
    },
  },
  {
    company: "Mr.HydeStore",
    location: "London, UK",
    period: "Nov 2024 - Feb 2025",
    details: [
      "Designed and developed a 3D e-commerce platform utilizing React Three Fiber and Firebase for seamless real-time inventory management.",
      "Integrated responsive scroll-based animations with GSAP and Framer Motion, enhancing user interactivity.",
      "Focused on custom 3D model optimization using Blender and gltfjsx.",
    ],
    links: {
      demo: "https://mrhydestore.netlify.app/",
      github: "https://github.com/Hyde-grey/Mr-Hyde-Store",
    },
  },
  {
    company: "Acteurs Publics",
    location: "Paris, France",
    position: "Frontend Web Developer/Web Design",
    period: "Sep 2022 - July 2024",
    details: [
      "Develop and maintain responsive websites, enhancing user experience and functionality.",
      "Design visually engaging event pages, boosting audience interaction.",
      "Create effective email marketing campaigns, optimizing cross-platform delivery.",
      "Implement Agile project management, improving team collaboration and efficiency.",
      "Conduct email deliverability analysis, refining marketing strategies for better reach.",
    ],
  },
  {
    company: "Agora France",
    location: "Paris, France",
    position: "Frontend Web Developer",
    period: "Sep 2021 - Sep 2022",
    details: [
      "Developed event pages and email marketing tools using Blueshift and JavaScript, enhancing UX.",
      "Created dynamic web content, improving user engagement and interaction on digital platforms.",
      "Collaborated with cross-functional teams to deliver projects on time, ensuring seamless integration.",
      "Implemented responsive design techniques, increasing accessibility across multiple devices.",
    ],
  },
];

const Experience: FC = () => {
  return (
    <Section title="Work Experience">
      <div className="space-y-5">
        {experiences.map((exp) => (
          <div
            key={`${exp.company}-${exp.period}`}
            className="section-card dark:cyber-card p-4"
          >
            <div className="flex flex-wrap justify-between items-start mb-2">
              <div className="w-full md:w-auto">
                <div className="flex justify-between md:block">
                  <h3 className="text-base font-bold text-primary dark:text-cyber-cyan">
                    {exp.company}
                  </h3>
                  <span className="text-gray-600 dark:text-cyber-teal font-mono text-xs md:mt-0.5 md:block">
                    {exp.period}
                  </span>
                </div>
                <p className="text-xs font-medium text-gray-600 dark:text-gray-300 mt-0.5">
                  {exp.location}
                  {exp.position && ` | ${exp.position}`}
                </p>
                {exp.links && (
                  <div className="mt-2 mb-2 flex space-x-2">
                    {exp.links.demo && (
                      <a
                        href={exp.links.demo}
                        className="text-xs font-medium bg-primary/10 text-primary px-2 py-0.5 rounded flex items-center hover:bg-primary/20 dark:bg-cyber-teal/20 dark:text-cyber-teal dark:hover:bg-cyber-teal/30 transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="mr-1">🔗</span> Live Project
                      </a>
                    )}
                    {exp.links.github && (
                      <a
                        href={exp.links.github}
                        className="text-xs font-medium bg-primary/10 text-primary px-2 py-0.5 rounded flex items-center hover:bg-primary/20 dark:bg-cyber-teal/20 dark:text-cyber-teal dark:hover:bg-cyber-teal/30 transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="mr-1">💻</span> Code
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>

            <ul className="list-disc list-outside ml-4 space-y-1 text-gray-700 dark:text-gray-200 text-sm leading-relaxed columned-list">
              {exp.details.map((detail, index) => (
                <li key={index} className="pb-1">
                  {detail.includes("React") ||
                  detail.includes("Fiber") ||
                  detail.includes("GSAP") ||
                  detail.includes("Motion") ||
                  detail.includes("Blueshift") ||
                  detail.includes("JavaScript") ? (
                    <span
                      dangerouslySetInnerHTML={{
                        __html: detail.replace(
                          /(React|TypeScript|Jest|Storybook|React Three Fiber|Firebase|GSAP|Framer Motion|Blender|gltfjsx|Blueshift|JavaScript)/g,
                          '<span class="dark:text-emphasis font-medium">$1</span>'
                        ),
                      }}
                    />
                  ) : (
                    detail
                  )}
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
