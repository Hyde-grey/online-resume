import { FC, PropsWithChildren } from "react";

type SectionProps = PropsWithChildren<{
  title: string;
}>;

export const Section: FC<SectionProps> = ({ title, children }) => {
  return (
    <section className="resume-section relative">
      {/* Corner accents - only visible in dark mode */}
      <div className="hidden dark:block absolute top-0 left-0 w-3 h-3 border-t border-l border-cyber-cyan"></div>
      <div className="hidden dark:block absolute top-0 right-0 w-3 h-3 border-t border-r border-cyber-cyan"></div>
      <div className="hidden dark:block absolute bottom-0 left-0 w-3 h-3 border-b border-l border-cyber-cyan"></div>
      <div className="hidden dark:block absolute bottom-0 right-0 w-3 h-3 border-b border-r border-cyber-cyan"></div>

      <h2 className="section-title relative flex items-center dark:pl-[15px]">
        {title}
        {/* Separator line - light mode only */}
        <span className="dark:hidden ml-4 flex-grow h-px bg-gray-200"></span>
        {/* Digital indicator - only visible in dark mode */}
        <span className="hidden dark:inline-block absolute right-0 top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-cyber-cyan animate-pulse"></span>
      </h2>

      <div className="relative">{children}</div>
    </section>
  );
};
