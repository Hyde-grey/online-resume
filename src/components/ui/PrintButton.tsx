import { FC, useCallback } from "react";
import { motion } from "framer-motion";

export const PrintButton: FC = () => {
  const handlePrint = useCallback(() => {
    const root = document.documentElement;
    let cleaned = false;

    const cleanup = () => {
      if (cleaned) return;
      cleaned = true;
      root.classList.remove("printing");
      window.removeEventListener("afterprint", cleanup);
    };

    root.classList.add("printing");
    window.addEventListener("afterprint", cleanup);
    setTimeout(cleanup, 3000);

    window.print();
  }, []);

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={handlePrint}
      className="print-ui fixed top-4 right-16 z-20 p-2 rounded bg-gray-200 dark:bg-cyber-darker dark:border dark:border-cyber-border dark:text-cyber-cyan hover:dark:shadow-glow-sm transition-all duration-300 print:hidden"
      aria-label="Export as PDF"
      title="Save as PDF (use Print → Save as PDF)"
    >
      <div className="relative">
        <svg
          className="w-6 h-6 dark:text-cyber-cyan"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
          />
        </svg>
        <span className="sr-only">Export Resume as PDF</span>
      </div>
    </motion.button>
  );
};
