import { NextRequest, NextResponse } from "next/server";
import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE,
  isLocale,
  detectFromAcceptLanguage
} from "@/i18n/config";

export function proxy(request: NextRequest) {
  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  let validLocale = DEFAULT_LOCALE;

  if (cookieLocale && isLocale(cookieLocale)) {
    validLocale = cookieLocale;
  } else {
    const acceptLanguage = request.headers.get("accept-language") || undefined;
    validLocale = detectFromAcceptLanguage(acceptLanguage);
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-locale", validLocale);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders
    }
  });

  if (!cookieLocale || !isLocale(cookieLocale)) {
    response.cookies.set(LOCALE_COOKIE, validLocale, {
      path: "/",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 365 // 1 year
    });
  }

  return response;
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"]
};
