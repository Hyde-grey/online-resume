import { Locale } from "../i18n";

export function buildPdfFilename(
  base: string,
  locale: Locale,
  date = new Date()
): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${base}_${locale.toUpperCase()}_${year}-${month}-${day}`;
}
