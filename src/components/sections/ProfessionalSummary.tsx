import { FC } from "react";
import { Section } from "../ui/Section";

const ProfessionalSummary: FC = () => {
  return (
    <Section title="Professional Summary">
      <div className="section-card dark:cyber-card p-4">
        <p className="text-sm text-gray-700 dark:text-gray-200 leading-relaxed">
          Founder and founding engineer with over four years of experience
          building{" "}
          <span className="dark:text-emphasis font-medium">
            AI-powered fintech and edtech products
          </span>{" "}
          end to end — from immersive marketing sites and 3D UX to{" "}
          <span className="dark:text-emphasis font-medium">
            AWS Amplify, Amazon Bedrock, and serverless backends
          </span>
          . Co-founded Traidar, an AI trading companion platform, and currently
          solo-builds Strider at Lionstride — a Duolingo-style trading education
          app with live paper trading, gamified curricula, and a context-aware AI
          mentor. Combines{" "}
          <span className="dark:text-emphasis font-medium">
            React, TypeScript, React Three Fiber, and Framer Motion
          </span>{" "}
          with product ownership to ship polished, production-ready experiences.
        </p>
      </div>
    </Section>
  );
};

export default ProfessionalSummary;
