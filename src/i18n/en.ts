import { Translations } from "./types";

export const en: Translations = {
  meta: {
    title: "Hyde Francois Khamsing - Founder & Founding Engineer",
    pdfFilename: "CV_Francois_Khamsing",
  },
  header: {
    name: "Hyde Francois Khamsing",
    role: "Founder & Founding Engineer",
    stack: "React | TypeScript | AWS | AI",
    labels: {
      location: "[LOCATION]",
      contact: "[CONTACT]",
      email: "[EMAIL]",
      profile: "[PROFILE]",
    },
    address: "Oltenita, 915400, Romania",
    phoneDisplay: "+40 773 597457",
    phoneHref: "+40773597457",
    email: "francoiskhamsing@gmail.com",
    linkedIn: "LinkedIn",
    github: "GitHub",
  },
  sections: {
    professionalSummary: "Professional Summary",
    skills: "Skills",
    spokenLanguages: "Languages",
    projects: "Projects and Links",
    experience: "Work Experience",
    education: "Education",
  },
  summary: [
    {
      text: "Founder and founding engineer with over four years of experience building ",
    },
    {
      text: "AI-powered fintech and edtech products",
      emphasis: true,
    },
    {
      text: " end to end — from immersive marketing sites and 3D UX to ",
    },
    {
      text: "AWS Amplify, Amazon Bedrock, and serverless backends",
      emphasis: true,
    },
    {
      text: ". Co-founded Traidar, an AI trading companion platform, and currently solo-builds Strider at Lionstride — a Duolingo-style trading education app with live paper trading, gamified curricula, and a context-aware AI mentor. Combines ",
    },
    {
      text: "React, TypeScript, React Three Fiber, and Framer Motion",
      emphasis: true,
    },
    {
      text: " with product ownership to ship polished, production-ready experiences.",
    },
  ],
  skills: [
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
  ],
  spokenLanguages: [
    { name: "French", level: "fluent" },
    { name: "English", level: "fluent" },
    { name: "Thai", level: "fluent" },
    { name: "Romanian", level: "beginner" },
  ],
  levels: {
    fluent: "Fluent",
    beginner: "Beginner",
  },
  projects: [
    {
      title: "Strider by Lionstride",
      description:
        "Duolingo-style trading education platform with gamified curricula, live paper trading, prop-firm-style challenges, and Aurex — a context-aware AI mentor powered by Amazon Bedrock and ElevenLabs voice. Built solo on AWS Amplify with Stripe subscriptions.",
      links: { demo: "https://lionstride.co" },
    },
    {
      title: "Traidar",
      description:
        "AI trading companion for retail traders — portfolio insights, market intelligence, AI-guided journaling, and Pip AI co-pilot. Full-stack prototype with AWS Bedrock, Binance live data, D3 charts, and an immersive 3D pre-launch site.",
      links: {
        demo: "https://traidar.ai",
        github: "https://github.com/Hyde-grey/Traidar-Prototype",
      },
    },
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
  ],
  experience: [
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
      links: { demo: "https://lionstride.co" },
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
      position: "Frontend Web Developer / Web Design",
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
  ],
  education: [
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
  ],
  ui: {
    liveProject: "Live Project",
    liveDemo: "Live Demo",
    code: "Code",
    exportPdf: "Export as PDF",
    exportPdfTitle: "Save as PDF (use Print → Save as PDF)",
    exportPdfSrOnly: "Export Resume as PDF",
    toggleTheme: "Toggle theme",
    selectLanguage: "Select language",
    languageEn: "English",
    languageFr: "French",
  },
};
