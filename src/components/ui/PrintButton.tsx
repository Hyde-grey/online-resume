import { FC, useCallback } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { buildPdfFilename } from "../../utils/pdfFilename";

export const PrintButton: FC = () => {
  const { locale, t } = useLanguage();

  const handlePrint = useCallback(() => {
    const root = document.documentElement;
    const originalTitle = document.title;
    let cleaned = false;

    const cleanup = () => {
      if (cleaned) return;
      cleaned = true;
      document.title = originalTitle;
      root.classList.remove("printing");
      window.removeEventListener("afterprint", cleanup);
    };

    document.title = buildPdfFilename(t.meta.pdfFilename, locale);
    root.classList.add("printing");
    window.addEventListener("afterprint", cleanup);
    setTimeout(cleanup, 3000);

    window.print();
  }, [locale, t.meta.pdfFilename]);

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={handlePrint}
      className="print-ui chrome-btn fixed right-16 top-4 z-20 print:hidden"
      aria-label={t.ui.exportPdf}
      title={t.ui.exportPdfTitle}
    >
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
        />
      </svg>
      <span className="sr-only">{t.ui.exportPdfSrOnly}</span>
    </motion.button>
  );
};
