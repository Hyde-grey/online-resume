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
        <div className="min-h-screen bg-gray-50 dark:bg-cyber-dark transition-colors duration-300 relative overflow-hidden print:overflow-visible print:min-h-0">
          <div
            className="absolute inset-0 pointer-events-none z-0 opacity-0 dark:opacity-100 dark:bg-cyber-grid dark:bg-grid-sm"
            aria-hidden="true"
          />

          <div className="cyber-container relative z-10">
            <LanguageToggle />
            <ThemeToggle />
            <PrintButton />

            <main className="container mx-auto px-4 py-8 max-w-5xl">
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
