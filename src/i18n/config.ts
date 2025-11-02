export enum Language {
  EN = "en",
  // ES = "es",
  HE = "he"
}

export const LANGUAGES = Object.values(Language);
export const DEFAULT_LOCALE = Language.EN;
export const LOCALE_COOKIE = "app.locale";
export const RTL_LOCALES = [Language.HE];

export const COOKIE_OPTIONS = {
  MAX_AGE: 31536000,
  PATH: "/",
  SAME_SITE: "Lax"
};

export const LANGUAGE_NAMES: Record<Language, string> = {
  [Language.EN]: "English",
  // [Language.ES]: "Español",
  [Language.HE]: "עברית"
};

export function isLocale(value: string): value is Language {
  return LANGUAGES.includes(value as Language);
}

export function detectFromAcceptLanguage(acceptLanguage?: string): Language {
  if (!acceptLanguage) return DEFAULT_LOCALE;

  const languages = acceptLanguage.split(",").map((lang) => {
    const [locale] = lang.trim().split(";");
    return locale.split("-")[0];
  });

  for (const lang of languages) {
    if (isLocale(lang)) {
      return lang;
    }
  }

  return DEFAULT_LOCALE;
}
