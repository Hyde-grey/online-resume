import { en } from "./en";
import { fr } from "./fr";
import { Locale, Translations } from "./types";

export type { Locale, Translations };

const translations: Record<Locale, Translations> = {
  en,
  fr,
};

export function getTranslations(locale: Locale): Translations {
  return translations[locale];
}

export const locales: Locale[] = ["en", "fr"];

export function isLocale(value: string): value is Locale {
  return value === "en" || value === "fr";
}

export function detectDefaultLocale(): Locale {
  if (typeof navigator !== "undefined" && navigator.language.startsWith("fr")) {
    return "fr";
  }
  return "en";
}
