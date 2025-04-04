import { FC } from "react";
import { Section } from "../ui/Section";

type Education = {
  degree: string;
  school: string;
  location?: string;
  period: string;
  details?: string[];
  description?: string;
};

const educations: Education[] = [
  {
    degree: "Certificate in Web Development",
    school: "3W ACADEMY",
    period: "2020",
    details: [
      "Gained proficiency in HTML, CSS, JavaScript, and PHP.",
      "Developed full stack applications using an MVC framework.",
      "Worked on real-world projects, enhancing both technical and problem-solving skills.",
      "Collaborated in small groups, simulating professional development environments.",
    ],
  },
  {
    degree: "Certification | RNCP III",
    school: "Higher National Diploma (HND) equivalent",
    period: "2020",
    description:
      "The RNCP Level III certificate is equivalent to a Higher National Diploma (HND) in the UK, demonstrating a solid foundation in computer and information sciences. This qualification signifies advanced technical skills and knowledge in web application development and integration, making it highly relevant for roles requiring expertise in software development, system integration, and IT services. The certificate validates my ability to apply theoretical knowledge to practical scenarios, ensuring I am well-prepared to contribute effectively to any technical team.",
  },
];

const Education: FC = () => {
  return (
    <Section title="Education">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {educations.map((edu) => (
          <div key={edu.school} className="section-card dark:cyber-card p-4">
            <h3 className="text-base font-bold text-primary dark:text-cyber-cyan">
              {edu.degree}
            </h3>
            <p className="text-sm font-medium text-secondary dark:text-cyber-teal mt-1">
              {edu.school}
            </p>
            <div className="flex justify-between text-xs text-gray-600 dark:text-gray-300 mt-1 mb-2">
              {edu.location && <span>{edu.location}</span>}
              <span className="font-mono">{edu.period}</span>
            </div>

            {edu.details && (
              <ul className="list-disc list-outside ml-4 space-y-1 text-gray-700 dark:text-gray-200 text-sm leading-relaxed">
                {edu.details.map((detail, index) => (
                  <li key={index} className="pb-0.5">
                    {detail}
                  </li>
                ))}
              </ul>
            )}

            {edu.description && (
              <p className="text-sm text-gray-700 dark:text-gray-200 leading-relaxed">
                {edu.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Education;
