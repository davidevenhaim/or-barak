import { Language } from "@/i18n/config";
import { format, getDay } from "date-fns";
import { he, Locale, enUS, es } from "date-fns/locale";

export enum DateFormating {
  /** e.g., 2025-03-27 */
  ISO_DATE = "yyyy-MM-dd",

  /** e.g., 2025-03-27T15:30:00 */
  ISO_DATE_TIME = "yyyy-MM-dd'T'HH:mm:ss",

  /** e.g., 2025-03-27T15:30:00.123 */
  DATE_TIME_WITH_MILLI = "yyyy-MM-dd HH:mm:ss.SSS",

  /** e.g., 27/03/2025 */
  SLASH_DATE = "dd/MM/yyyy",

  /** e.g., 03/27/2025 */
  US_SLASH_DATE = "MM/dd/yyyy",

  /** e.g., March 27, 2025 */
  FULL_DATE = "MMMM d, yyyy",

  /** e.g., Thu, Mar 27 */
  SHORT_DAY_DATE = "EEE, MMM d",

  /** e.g., Thursday, March 27, 2025 */
  LONG_DAY_DATE = "EEEE, MMMM d, yyyy",

  /** e.g., 03:45 PM */
  TIME_12_HOUR = "hh:mm a",

  /** e.g., 15:45 */
  TIME_24_HOUR = "HH:mm",

  /** e.g., Mar 27, 2025 15:45 */
  DATE_TIME_SHORT = "MMM d, yyyy HH:mm",

  /** e.g., March 27, 2025 15:45:00.123 */
  DATE_TIME_SHORT_WITH_MILLISECONDS = "MMMM d, yyyy HH:mm:ss.SSS",

  /** e.g., Thursday, 27/03/2025, 15:45 */
  DATE_TIME_MEDIUM = "EEEE, dd/MM/yyyy, HH:mm",

  /** e.g., Today at 3:45 PM (for logic-driven formatting) */
  HUMANIZED = "eeee 'at' h:mm a",

  /** e.g., Thursday */
  DAY_NAME = "EEEE",
}

export const formatDateRange = (
  start: Date,
  end: Date,
  appLocale: Language = Language.EN
): string => {
  return (
    format(start, "dd/MM/yyyy", { locale: getDateLocale(appLocale) }) +
    " - " +
    format(end, "dd/MM/yyyy", { locale: getDateLocale(appLocale) })
  );
};

export const getDateLocale = (currentLang: Language): Locale => {
  if (currentLang === Language.HE) {
    return he;
  }
  if (currentLang === Language.ES) {
    return es;
  }
  return enUS;
};

export const formatDate = (
  date: Date,
  formatString: DateFormating,
  currentLang: Language = Language.EN
): string => {
  return format(date, formatString, { locale: getDateLocale(currentLang) });
};

export const ifDayIsToday = (day: number) => {
  const today = new Date();
  return getDay(today) === day;
};

export const toUtcDate = (date: Date, appLocale: Language = Language.EN) => {
  return format(date, "yyyy-MM-dd'T'HH:mm:ss.SSS", {
    locale: getDateLocale(appLocale),
  });
};
