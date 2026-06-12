import {
  createContext,
  useContext,
  useEffect,
  useState,
  FC,
  PropsWithChildren,
} from "react";
import {
  readThemeFromUrl,
  Theme,
  writeThemeToUrl,
} from "../utils/resumeUrlState";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function resolveInitialTheme(): Theme {
  const fromUrl = readThemeFromUrl();
  if (fromUrl) {
    return fromUrl;
  }

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(resolveInitialTheme);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
    writeThemeToUrl(theme);
  }, [theme]);

  useEffect(() => {
    const handlePopState = () => {
      const fromUrl = readThemeFromUrl();
      if (fromUrl) {
        setTheme(fromUrl);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
