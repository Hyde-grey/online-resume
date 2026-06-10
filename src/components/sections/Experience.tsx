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
    company: "Lionstride",
    location: "London, UK",
    position: "Founder & Founding Engineer",
    period: "2025 - Present",
    details: [
      "Solo-built Strider (lionstride.co) — a Duolingo-style trading education platform with gamified curricula (Cub, Strider, Regal paths), live paper trading on a shared STRD symbol, and leaderboards.",
      "Architected full-stack product on AWS Amplify Gen 2: Cognito auth, AppSync GraphQL, Lambda, DynamoDB, and S3 — with Stripe subscriptions across Free, Learn, Plus, and Pro tiers.",
      "Shipped Aurex, a context-aware AI mentor using Amazon Bedrock and ElevenLabs voice — coaching from the learner's active lesson, chart, and draft orders rather than generic chat.",
      "Built adaptive curriculum with rank-up gates, mistake-driven re-tests, Readiness Checks, and prop-firm-style Funded-Prep Challenges with real risk rules and drawdown limits.",
      "Integrated TradingView and lightweight-charts for paper trading, PostHog for product analytics, and React Three Fiber for the 3D Aurex assistant experience.",
    ],
    links: {
      demo: "https://lionstride.co",
    },
  },
  {
    company: "Traidar",
    location: "London, UK",
    position: "Co-Founder & Founding Engineer",
    period: "Jun 2025 - Dec 2025",
    details: [
      "Co-founded Traidar, an AI fintech platform helping retail traders track performance, surface market intelligence, and journal with an in-app AI co-pilot (Pip).",
      "Architected AWS Amplify Gen 2 backend with Cognito auth, AppSync GraphQL, Lambda, and Amazon Bedrock (Claude 3 Haiku) — including AI tool-calling to a Binance market-data proxy.",
      "Built full product prototype: asset search, Binance REST/WebSocket live prices, D3 candlestick charts, TradingView embeds, GNews market news, and sentiment visualization.",
      "Shipped traidar.ai pre-launch experience — immersive waitlist funnel with scroll-driven emotional hook, breathing-exercise onboarding, WebGL 3D hero (React Three Fiber), and Mailchimp integration.",
      "Developed custom WebGL shader orb (OGL/GLSL), 3D logo particle systems with ~93% GLB asset compression, and scroll-lock interaction patterns for distinctive fintech brand UX.",
    ],
    links: {
      demo: "https://traidar.ai",
      github: "https://github.com/Hyde-grey/Traidar-Prototype",
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
                <div className="flex justify-between md:block print:block">
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

            <ul className="list-disc list-outside ml-4 space-y-1 text-gray-700 dark:text-gray-200 text-sm leading-relaxed columned-list columns-1 md:columns-2 print:columns-2">
              {exp.details.map((detail, index) => (
                <li key={index} className="pb-1">
                  {detail.includes("React") ||
                  detail.includes("Fiber") ||
                  detail.includes("GSAP") ||
                  detail.includes("Motion") ||
                  detail.includes("AWS") ||
                  detail.includes("Bedrock") ||
                  detail.includes("Blueshift") ||
                  detail.includes("JavaScript") ? (
                    <span
                      dangerouslySetInnerHTML={{
                        __html: detail.replace(
                          /(React|TypeScript|Jest|Storybook|React Three Fiber|Firebase|GSAP|Framer Motion|Blender|gltfjsx|AWS Amplify Gen 2|Amazon Bedrock|Cognito|AppSync|Lambda|DynamoDB|Stripe|PostHog|ElevenLabs|TradingView|D3|Binance|WebGL|OGL|GLSL|Mailchimp|Blueshift|JavaScript)/g,
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
