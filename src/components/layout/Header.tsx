import { FC } from "react";
import { useLanguage } from "../../context/LanguageContext";

const Header: FC = () => {
  const { t } = useLanguage();

  return (
    <header className="mb-6 dark:cyber-card dark:pb-3 p-4">
      <div className="flex flex-wrap md:flex-nowrap print:flex-nowrap justify-between items-start mb-3">
        <div>
          <h1 className="text-3xl font-bold text-primary leading-tight dark:text-cyber-cyan dark:font-tech dark:tracking-wider">
            <span className="dark:cyber-glow">{t.header.name}</span>
          </h1>
          <h2 className="text-xl text-secondary mt-1 dark:text-cyber-teal dark:font-tech dark:tracking-wide">
            {t.header.role}
          </h2>
          <h3 className="text-sm text-gray-600 dark:text-cyber-teal/80 mt-1 font-medium">
            {t.header.stack}
          </h3>
        </div>

        <div className="space-y-1 text-right pt-1 text-sm">
          <p className="dark:flex dark:items-center dark:justify-end dark:space-x-2 mb-1">
            <span className="hidden dark:inline-block dark:text-xs dark:text-cyber-cyan">
              {t.header.labels.location}
            </span>
            <span className="font-medium">{t.header.address}</span>
          </p>
          <p className="dark:flex dark:items-center dark:justify-end dark:space-x-2 mb-1">
            <span className="hidden dark:inline-block dark:text-xs dark:text-cyber-cyan">
              {t.header.labels.contact}
            </span>
            <a
              href={`tel:${t.header.phoneHref}`}
              className="text-primary font-medium hover:text-primary hover:underline dark:text-cyber-cyan dark:hover:text-cyber-cyan dark:transition-colors dark:duration-300"
            >
              {t.header.phoneDisplay}
            </a>
          </p>
          <p className="dark:flex dark:items-center dark:justify-end dark:space-x-2 mb-1">
            <span className="hidden dark:inline-block dark:text-xs dark:text-cyber-cyan">
              {t.header.labels.email}
            </span>
            <a
              href={`mailto:${t.header.email}`}
              className="text-primary font-medium hover:text-primary hover:underline dark:text-cyber-cyan dark:hover:text-cyber-cyan dark:transition-colors dark:duration-300"
            >
              {t.header.email}
            </a>
          </p>
          <p className="dark:flex dark:items-center dark:justify-end dark:space-x-2">
            <span className="hidden dark:inline-block dark:text-xs dark:text-cyber-cyan">
              {t.header.labels.profile}
            </span>
            <a
              href="https://www.linkedin.com/in/hyde-fran%C3%A7ois-khamsing/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-primary/10 text-primary font-medium px-3 py-1 rounded hover:bg-primary/20 dark:bg-cyber-cyan/20 dark:text-cyber-cyan dark:hover:bg-cyber-cyan/30 transition-colors duration-300 mr-2"
            >
              {t.header.linkedIn}
            </a>
            <a
              href="https://github.com/Hyde-grey"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-primary/10 text-primary font-medium px-3 py-1 rounded hover:bg-primary/20 dark:bg-cyber-cyan/20 dark:text-cyber-cyan dark:hover:bg-cyber-cyan/30 transition-colors duration-300"
            >
              {t.header.github}
            </a>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
