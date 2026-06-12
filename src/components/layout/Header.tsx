import { FC } from "react";
import { useLanguage } from "../../context/LanguageContext";

const Header: FC = () => {
  const { t } = useLanguage();

  return (
    <header className="surface-card mb-8 p-5 md:p-6 print:mb-6 print:border print:border-gray-200 print:bg-white print:shadow-none">
      <div className="flex flex-wrap items-start justify-between gap-6 md:flex-nowrap print:flex-nowrap">
        <div>
          <h1 className="hero-name">{t.header.name}</h1>
          <h2 className="hero-role mt-2 text-xl">{t.header.role}</h2>
          <p className="hero-stack mt-2 text-sm">{t.header.stack}</p>
        </div>

        <div className="w-full space-y-3 pt-1 text-right text-sm md:w-auto">
          <p className="contact-row">
            <span className="label-tag">{t.header.labels.location}</span>
            <span className="contact-value">{t.header.address}</span>
          </p>
          <p className="contact-row">
            <span className="label-tag">{t.header.labels.contact}</span>
            <a href={`tel:${t.header.phoneHref}`} className="contact-link">
              {t.header.phoneDisplay}
            </a>
          </p>
          <p className="contact-row">
            <span className="label-tag">{t.header.labels.email}</span>
            <a href={`mailto:${t.header.email}`} className="contact-link">
              {t.header.email}
            </a>
          </p>
          <p className="contact-row flex-wrap justify-end">
            <span className="label-tag w-full md:w-auto">{t.header.labels.profile}</span>
            <a
              href="https://www.linkedin.com/in/hyde-fran%C3%A7ois-khamsing/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-chip mr-2"
            >
              {t.header.linkedIn}
            </a>
            <a
              href="https://github.com/Hyde-grey"
              target="_blank"
              rel="noopener noreferrer"
              className="link-chip"
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
