import { FC } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { ThemeToggle } from "./components/ui/ThemeToggle";
import { PrintButton } from "./components/ui/PrintButton";
import Header from "./components/layout/Header";
import ProfessionalSummary from "./components/sections/ProfessionalSummary";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Education from "./components/sections/Education";

const App: FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-cyber-dark transition-colors duration-200 relative overflow-hidden">
        {/* Cyber grid overlay (only visible in dark mode) */}
        <div className="absolute inset-0 bg-cyber-grid bg-grid-sm opacity-0 dark:opacity-5 pointer-events-none z-0"></div>

        {/* Subtle vignette effect for dark mode */}
        <div
          className="absolute inset-0 pointer-events-none z-0 hidden dark:block"
          style={{
            background:
              "radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.2) 100%)",
            mixBlendMode: "multiply",
          }}
        ></div>

        <div className="cyber-container relative z-10">
          <ThemeToggle />
          <PrintButton />

          <main className="container mx-auto px-4 py-6 max-w-5xl">
            <Header />
            <div className="space-y-6 print:space-y-4">
              <ProfessionalSummary />
              <Skills />
              <Projects />
              <Experience />
              <Education />
            </div>
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
