import { FC } from "react";
import { Section } from "../ui/Section";

const ProfessionalSummary: FC = () => {
  return (
    <Section title="Professional Summary">
      <div className="section-card dark:cyber-card p-4">
        <p className="text-sm text-gray-700 dark:text-gray-200 leading-relaxed">
          Frontend Developer with over four years of experience specializing in{" "}
          <span className="dark:text-emphasis font-medium">
            visually interactive web applications
          </span>{" "}
          that balance design aesthetics and technical precision. Transitioned
          from email templates and marketing assets to{" "}
          <span className="dark:text-emphasis font-medium">
            React, TypeScript, React Three Fiber, GSAP, and Framer Motion
          </span>{" "}
          development. Passionate about immersive user experiences, combining
          innovation and collaboration to deliver optimized solutions tailored
          to user needs and business goals.
        </p>
      </div>
    </Section>
  );
};

export default ProfessionalSummary;
