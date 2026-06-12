import { Translations } from "./types";

export const fr: Translations = {
  meta: {
    title: "Hyde Francois Khamsing - Fondateur & Ingénieur Fondateur",
    pdfFilename: "CV_Francois_Khamsing",
  },
  header: {
    name: "Hyde Francois Khamsing",
    role: "Fondateur & Ingénieur Fondateur",
    stack: "React | TypeScript | AWS | IA",
    labels: {
      location: "[ADRESSE]",
      contact: "[CONTACT]",
      email: "[EMAIL]",
      profile: "[PROFIL]",
    },
    address: "Str. Galofitei nr10, Oltenița, 915400",
    phoneDisplay: "+40 773 597457",
    phoneHref: "+40773597457",
    email: "francoiskhamsing@gmail.com",
    linkedIn: "LinkedIn",
    github: "GitHub",
  },
  sections: {
    professionalSummary: "Résumé Professionnel",
    skills: "Compétences",
    projects: "Projets et Liens",
    experience: "Expérience Professionnelle",
    education: "Formation",
  },
  summary: [
    {
      text: "Fondateur et ingénieur fondateur avec plus de quatre ans d'expérience dans la création ",
    },
    {
      text: "de produits fintech et edtech propulsés par l'IA",
      emphasis: true,
    },
    {
      text: ", de bout en bout — des sites marketing immersifs et expériences 3D aux ",
    },
    {
      text: "backends serverless AWS Amplify et Amazon Bedrock",
      emphasis: true,
    },
    {
      text: ". Co-fondateur de Traidar, plateforme compagnon de trading IA, et développe actuellement Strider chez Lionstride en solo — application d'éducation au trading de type Duolingo avec paper trading en direct, curricula gamifiés et mentor IA contextuel. Allie ",
    },
    {
      text: "React, TypeScript, React Three Fiber et Framer Motion",
      emphasis: true,
    },
    {
      text: " à une vision produit pour livrer des expériences abouties, prêtes pour la production.",
    },
  ],
  skills: [
    {
      name: "Langages & Frameworks",
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
      name: "Cloud & IA",
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
      name: "Outils & Bibliothèques",
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
        "Animations CSS",
        "Modélisation 3D",
      ],
    },
  ],
  projects: [
    {
      title: "Strider by Lionstride",
      description:
        "Plateforme d'éducation au trading de type Duolingo avec curricula gamifiés, paper trading en direct, défis de type prop firm et Aurex — mentor IA contextuel propulsé par Amazon Bedrock et la voix ElevenLabs. Développée en solo sur AWS Amplify avec abonnements Stripe.",
      links: { demo: "https://lionstride.co" },
    },
    {
      title: "Traidar",
      description:
        "Compagnon de trading IA pour traders particuliers — insights portefeuille, veille marché, journal guidé par l'IA et co-pilote Pip AI. Prototype full-stack avec AWS Bedrock, données Binance en direct, graphiques D3 et site de pré-lancement 3D immersif.",
      links: {
        demo: "https://traidar.ai",
        github: "https://github.com/Hyde-grey/Traidar-Prototype",
      },
    },
    {
      title: "Mr.HydeStore",
      description:
        "Développée avec React, TypeScript, React Three Fiber, GSAP et Framer Motion, cette plateforme e-commerce immersive propose des animations 3D sur mesure, des transitions caméra cinématiques, un design responsive et des éléments interactifs.",
      links: {
        demo: "https://mrhydestore.netlify.app/",
        github: "https://github.com/Hyde-grey/Mr-Hyde-Store",
      },
    },
    {
      title: "TraderSphere Dashboard",
      description:
        "Tableau de bord trading avancé mettant l'accent sur la visualisation de données en temps réel avec Framer Motion et des composants Shadcn UI.",
      links: {
        demo: "https://tradersphere.netlify.app/",
        github: "https://github.com/Hyde-grey/TraderSphere",
      },
    },
  ],
  experience: [
    {
      company: "Lionstride",
      location: "Londres, Royaume-Uni",
      position: "Fondateur & Ingénieur Fondateur",
      period: "2025 - Aujourd'hui",
      details: [
        "Développement solo de Strider (lionstride.co) — plateforme d'éducation au trading de type Duolingo avec curricula gamifiés (parcours Cub, Strider, Regal), paper trading en direct sur le symbole partagé STRD et classements.",
        "Architecture produit full-stack sur AWS Amplify Gen 2 : auth Cognito, GraphQL AppSync, Lambda, DynamoDB et S3 — avec abonnements Stripe (Free, Learn, Plus et Pro).",
        "Lancement d'Aurex, mentor IA contextuel utilisant Amazon Bedrock et la voix ElevenLabs — coaching basé sur la leçon active, le graphique et les ordres en cours plutôt qu'un chat générique.",
        "Mise en place d'un curriculum adaptatif avec paliers de rank-up, re-tests ciblés sur les erreurs, Readiness Checks et Funded-Prep Challenges de type prop firm avec règles de risque et limites de drawdown réelles.",
        "Intégration de TradingView et lightweight-charts pour le paper trading, PostHog pour l'analytique produit et React Three Fiber pour l'expérience 3D de l'assistant Aurex.",
      ],
      links: { demo: "https://lionstride.co" },
    },
    {
      company: "Traidar",
      location: "Londres, Royaume-Uni",
      position: "Co-fondateur & Ingénieur Fondateur",
      period: "Juin 2025 - Déc. 2025",
      details: [
        "Co-fondation de Traidar, plateforme fintech IA aidant les traders particuliers à suivre leurs performances, analyser le marché et tenir un journal avec un co-pilote IA intégré (Pip).",
        "Architecture backend AWS Amplify Gen 2 avec auth Cognito, GraphQL AppSync, Lambda et Amazon Bedrock (Claude 3 Haiku) — incluant le tool-calling IA vers un proxy de données marché Binance.",
        "Construction du prototype produit complet : recherche d'actifs, prix Binance REST/WebSocket en direct, graphiques en chandeliers D3, intégrations TradingView, actualités GNews et visualisation de sentiment.",
        "Lancement de l'expérience de pré-lancement traidar.ai — entonnoir waitlist immersif avec hook émotionnel au scroll, onboarding par exercice de respiration, héros 3D WebGL (React Three Fiber) et intégration Mailchimp.",
        "Développement d'un orb shader WebGL sur mesure (OGL/GLSL), systèmes de particules logo 3D avec compression GLB ~93 %, et patterns d'interaction scroll-lock pour une UX fintech distinctive.",
      ],
      links: {
        demo: "https://traidar.ai",
        github: "https://github.com/Hyde-grey/Traidar-Prototype",
      },
    },
    {
      company: "Acteurs Publics",
      location: "Paris, France",
      position: "Développeur Web Frontend / Web Design",
      period: "Sept. 2022 - Juill. 2024",
      details: [
        "Développement et maintenance de sites web responsive, améliorant l'expérience utilisateur et les fonctionnalités.",
        "Conception de pages événementielles visuellement engageantes, stimulant l'interaction du public.",
        "Création de campagnes email marketing efficaces, optimisées pour la diffusion multi-plateforme.",
        "Mise en place de la gestion de projet Agile, améliorant la collaboration et l'efficacité de l'équipe.",
        "Analyse de la délivrabilité email, affinant les stratégies marketing pour une meilleure portée.",
      ],
    },
    {
      company: "Agora France",
      location: "Paris, France",
      position: "Développeur Web Frontend",
      period: "Sept. 2021 - Sept. 2022",
      details: [
        "Développement de pages événementielles et d'outils email marketing avec Blueshift et JavaScript, améliorant l'UX.",
        "Création de contenu web dynamique, renforçant l'engagement et l'interaction sur les plateformes digitales.",
        "Collaboration avec des équipes pluridisciplinaires pour livrer les projets dans les délais, en assurant une intégration fluide.",
        "Mise en œuvre de techniques de design responsive, augmentant l'accessibilité sur tous les appareils.",
      ],
    },
  ],
  education: [
    {
      degree: "Certificat en Développement Web",
      school: "3W ACADEMY",
      period: "2020",
      details: [
        "Maîtrise de HTML, CSS, JavaScript et PHP.",
        "Développement d'applications full stack avec un framework MVC.",
        "Réalisation de projets concrets, renforçant les compétences techniques et la résolution de problèmes.",
        "Travail en petits groupes, simulant des environnements de développement professionnels.",
      ],
    },
    {
      degree: "Certification | RNCP III",
      school: "Équivalent BTS (Higher National Diploma)",
      period: "2020",
      description:
        "Le certificat RNCP niveau III est équivalent à un BTS (Higher National Diploma au Royaume-Uni), attestant d'une solide base en informatique et sciences de l'information. Cette qualification valide des compétences techniques avancées en développement et intégration d'applications web, particulièrement pertinentes pour les rôles en développement logiciel, intégration système et services IT. Elle confirme ma capacité à appliquer les connaissances théoriques à des cas concrets, me préparant à contribuer efficacement à toute équipe technique.",
    },
  ],
  ui: {
    liveProject: "Projet en ligne",
    liveDemo: "Démo en ligne",
    code: "Code",
    exportPdf: "Exporter en PDF",
    exportPdfTitle: "Enregistrer en PDF (Imprimer → Enregistrer au format PDF)",
    exportPdfSrOnly: "Exporter le CV en PDF",
    toggleTheme: "Changer de thème",
    selectLanguage: "Choisir la langue",
    languageEn: "Anglais",
    languageFr: "Français",
  },
};
