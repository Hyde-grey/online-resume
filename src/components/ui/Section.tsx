import { FC, PropsWithChildren } from "react";

type SectionProps = PropsWithChildren<{
  title: string;
}>;

export const Section: FC<SectionProps> = ({ title, children }) => {
  return (
    <section className="resume-section relative">
      <h2 className="section-title section-heading relative flex items-center">
        {title}
        <span className="dark:hidden ml-4 flex-grow h-px bg-gray-200" />
      </h2>

      <div className="relative">{children}</div>
    </section>
  );
};
