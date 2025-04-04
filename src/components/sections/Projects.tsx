import { FC } from "react";
import { Section } from "../ui/Section";

type Project = {
  title: string;
  description: string;
  links: {
    demo?: string;
    github?: string;
  };
};

const projects: Project[] = [
  {
    title: "Mr.HydeStore",
    description:
      "Built with React, TypeScript, React Three Fiber, GSAP, and Framer Motion, this immersive e-commerce platform features custom 3D model animations, cinematic camera transitions, responsive design, and interactive elements.",
    links: {
      demo: "https://mrhydestore.netlify.app/",
      github: "https://github.com/Hyde-grey/Mr-Hyde-Store",
    },
  },
  {
    title: "TraderSphere Dashboard",
    description:
      "Advanced trading dashboard emphasizing real-time data visualization using Framer Motion and Shadcn UI components.",
    links: {
      demo: "https://tradersphere.netlify.app/",
      github: "https://github.com/Hyde-grey/TraderSphere",
    },
  },
];

const Projects: FC = () => {
  return (
    <Section title="Projects and Links">
      <div className="section-card dark:cyber-card p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project) => (
            <div key={project.title} className="space-y-2">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-bold text-primary dark:text-cyber-cyan">
                  {project.title}
                </h3>
              </div>
              <div className="flex space-x-2 mb-2">
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded hover:bg-primary/20 dark:bg-cyber-teal/20 dark:text-cyber-teal dark:hover:bg-cyber-teal/30 transition-colors duration-300 flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="mr-1">🔗</span> Live Demo
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded hover:bg-primary/20 dark:bg-cyber-teal/20 dark:text-cyber-teal dark:hover:bg-cyber-teal/30 transition-colors duration-300 flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="mr-1">💻</span> GitHub
                  </a>
                )}
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-200 leading-relaxed">
                {project.description.includes("React") ? (
                  <span
                    dangerouslySetInnerHTML={{
                      __html: project.description.replace(
                        /(React|TypeScript|React Three Fiber|GSAP|Framer Motion|Shadcn UI)/g,
                        '<span class="dark:text-emphasis font-medium">$1</span>'
                      ),
                    }}
                  />
                ) : (
                  project.description
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Projects;
