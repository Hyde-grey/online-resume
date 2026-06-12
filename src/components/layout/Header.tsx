import { FC } from "react";
import { useLanguage } from "../../context/LanguageContext";

const Header: FC = () => {
  const { t } = useLanguage();

  return (
    <header className="mb-8 section-card dark:cyber-card p-5 md:p-6">
      <div className="flex flex-wrap md:flex-nowrap print:flex-nowrap justify-between items-start gap-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-primary leading-tight dark:hero-name">
            {t.header.name}
          </h1>
          <h2 className="text-xl mt-2 text-secondary dark:hero-role">
            {t.header.role}
          </h2>
          <p className="text-sm text-gray-600 dark:hero-stack mt-2">
            {t.header.stack}
          </p>
        </div>

        <div className="space-y-2 text-right pt-1 text-sm w-full md:w-auto">
          <p className="dark:flex dark:items-center dark:justify-end dark:gap-2">
            <span className="hidden dark:inline-block dark:label-tag">
              {t.header.labels.location}
            </span>
            <span className="font-medium text-gray-700 dark:text-slate-200">
              {t.header.address}
            </span>
          </p>
          <p className="dark:flex dark:items-center dark:justify-end dark:gap-2">
            <span className="hidden dark:inline-block dark:label-tag">
              {t.header.labels.contact}
            </span>
            <a
              href={`tel:${t.header.phoneHref}`}
              className="text-primary font-medium hover:underline dark:text-sky-300 dark:hover:text-sky-200 transition-colors"
            >
              {t.header.phoneDisplay}
            </a>
          </p>
          <p className="dark:flex dark:items-center dark:justify-end dark:gap-2">
            <span className="hidden dark:inline-block dark:label-tag">
              {t.header.labels.email}
            </span>
            <a
              href={`mailto:${t.header.email}`}
              className="text-primary font-medium hover:underline dark:text-sky-300 dark:hover:text-sky-200 transition-colors"
            >
              {t.header.email}
            </a>
          </p>
          <p className="dark:flex dark:items-center dark:justify-end dark:gap-2 flex-wrap justify-end">
            <span className="hidden dark:inline-block dark:label-tag w-full md:w-auto">
              {t.header.labels.profile}
            </span>
            <a
              href="https://www.linkedin.com/in/hyde-fran%C3%A7ois-khamsing/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-primary/10 text-primary font-medium px-3 py-1 rounded-lg hover:bg-primary/20 dark:link-chip mr-2"
            >
              {t.header.linkedIn}
            </a>
            <a
              href="https://github.com/Hyde-grey"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-primary/10 text-primary font-medium px-3 py-1 rounded-lg hover:bg-primary/20 dark:link-chip"
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
