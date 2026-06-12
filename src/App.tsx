import { FC } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeToggle } from "./components/ui/ThemeToggle";
import { PrintButton } from "./components/ui/PrintButton";
import { LanguageToggle } from "./components/ui/LanguageToggle";
import Header from "./components/layout/Header";
import ProfessionalSummary from "./components/sections/ProfessionalSummary";
import Skills from "./components/sections/Skills";
import SpokenLanguages from "./components/sections/SpokenLanguages";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Education from "./components/sections/Education";

const App: FC = () => {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <div className="relative min-h-screen overflow-hidden bg-resume-bg text-resume-heading transition-colors duration-300 dark:bg-cyber-dark print:min-h-0 print:overflow-visible">
          <div
            className="pointer-events-none absolute inset-0 z-0 bg-resume-grid bg-grid-sm opacity-60 dark:bg-cyber-grid dark:opacity-100"
            aria-hidden="true"
          />

          <div className="relative z-10">
            <LanguageToggle />
            <ThemeToggle />
            <PrintButton />

            <main className="container mx-auto max-w-5xl px-4 py-8">
              <Header />
              <div className="space-y-8 print:space-y-4">
                <ProfessionalSummary />
                <Skills />
                <SpokenLanguages />
                <Projects />
                <Experience />
                <Education />
              </div>
            </main>
          </div>
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
};

export default App;
