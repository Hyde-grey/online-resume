import { FC, PropsWithChildren } from "react";

type SectionProps = PropsWithChildren<{
  title: string;
}>;

export const Section: FC<SectionProps> = ({ title, children }) => {
  return (
    <section className="resume-section relative print:break-inside-avoid">
      <h2 className="section-heading">{title}</h2>
      <div className="relative">{children}</div>
    </section>
  );
};
