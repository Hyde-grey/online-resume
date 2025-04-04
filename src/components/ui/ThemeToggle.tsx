import { FC } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

export const ThemeToggle: FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-20 p-2 rounded bg-gray-200 dark:bg-cyber-darker dark:border dark:border-cyber-border dark:text-cyber-cyan hover:dark:shadow-glow-sm transition-all duration-300"
      aria-label="Toggle theme"
    >
      <div className="relative">
        {theme === "light" ? (
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        ) : (
          <>
            <svg
              className="w-6 h-6 text-cyber-cyan cyber-glow"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            <span className="absolute top-0 right-0 h-1 w-1 rounded-full bg-cyber-cyan animate-ping"></span>
          </>
        )}
      </div>
    </motion.button>
  );
};
