import { isLocale, Locale } from "../i18n";

export type Theme = "light" | "dark";

export function isTheme(value: string): value is Theme {
  return value === "light" || value === "dark";
}

export function readLangFromUrl(): Locale | null {
  const value = new URLSearchParams(window.location.search).get("lang");
  return value && isLocale(value) ? value : null;
}

export function readThemeFromUrl(): Theme | null {
  const value = new URLSearchParams(window.location.search).get("theme");
  return value && isTheme(value) ? value : null;
}

export function writeLangToUrl(locale: Locale) {
  const url = new URL(window.location.href);
  url.searchParams.set("lang", locale);
  window.history.replaceState(window.history.state, "", url);
}

export function writeThemeToUrl(theme: Theme) {
  const url = new URL(window.location.href);
  url.searchParams.set("theme", theme);
  window.history.replaceState(window.history.state, "", url);
}
