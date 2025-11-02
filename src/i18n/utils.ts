import { cookies } from "next/headers";
import { DEFAULT_LOCALE, isLocale, Language, LOCALE_COOKIE } from "./config";

export async function getLocale(): Promise<Language> {
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get(LOCALE_COOKIE)?.value;

  const locale =
    localeCookie && isLocale(localeCookie) ? localeCookie : DEFAULT_LOCALE;

  return locale;
}
