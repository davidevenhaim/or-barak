"use server";

import { cookies } from "next/headers";
import { Language, LOCALE_COOKIE } from "./config";

export async function setLocaleCookie(locale: Language) {
  const cookieStore = await cookies();
  cookieStore.set({
    name: LOCALE_COOKIE,
    value: locale,
    path: "/",
    maxAge: 31536000, // 1 year
    sameSite: "lax",
  });
}
