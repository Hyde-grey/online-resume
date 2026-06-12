export type Locale = "en" | "fr";

export type SummaryPart = {
  text: string;
  emphasis?: boolean;
};

export type ExperienceEntry = {
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

export type ProjectEntry = {
  title: string;
  description: string;
  links: {
    demo?: string;
    github?: string;
  };
};

export type SkillCategory = {
  name: string;
  skills: string[];
};

export type EducationEntry = {
  degree: string;
  school: string;
  location?: string;
  period: string;
  details?: string[];
  description?: string;
};

export type SpokenLanguageEntry = {
  name: string;
  level: "fluent" | "beginner";
};

export type Translations = {
  meta: {
    title: string;
    pdfFilename: string;
  };
  header: {
    name: string;
    role: string;
    stack: string;
    labels: {
      location: string;
      contact: string;
      email: string;
      profile: string;
    };
    address: string;
    phoneDisplay: string;
    phoneHref: string;
    email: string;
    linkedIn: string;
    github: string;
  };
  sections: {
    professionalSummary: string;
    skills: string;
    spokenLanguages: string;
    projects: string;
    experience: string;
    education: string;
  };
  summary: SummaryPart[];
  skills: SkillCategory[];
  spokenLanguages: SpokenLanguageEntry[];
  levels: {
    fluent: string;
    beginner: string;
  };
  projects: ProjectEntry[];
  experience: ExperienceEntry[];
  education: EducationEntry[];
  ui: {
    liveProject: string;
    liveDemo: string;
    code: string;
    exportPdf: string;
    exportPdfTitle: string;
    exportPdfSrOnly: string;
    toggleTheme: string;
    selectLanguage: string;
    languageEn: string;
    languageFr: string;
  };
};
