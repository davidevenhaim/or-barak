import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { getLocale } from "@/i18n/utils";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

type Props = {
  children: React.ReactNode;
};

export async function generateMetadata() {
  const locale = await getLocale();
  const t = await getTranslations({ locale });

  return {
    title: t("site_title"),
    description: t("site_description"),
    openGraph: {
      title: t("site_title"),
      description: t("site_description"),
      type: "website"
    }
  };
}

export default async function LocaleLayout({ children }: Props) {
  const locale = await getLocale();
  const messages = await getMessages({ locale });

  // Set dir based on locale
  const dir = locale === "he" ? "rtl" : "ltr";

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <div dir={dir} lang={locale}>
        <Navbar />
        <main className='min-h-screen pt-16'>{children}</main>
        <Footer />
      </div>
    </NextIntlClientProvider>
  );
}
