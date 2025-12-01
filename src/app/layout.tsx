import { Montserrat } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getLocale } from "next-intl/server";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap"
});

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  // Set dir based on locale
  const dir = locale === "he" ? "rtl" : "ltr";

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${montserrat.variable} dark`}
      suppressHydrationWarning
    >
      <body className='antialiased bg-background text-foreground overflow-x-hidden'>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Navbar />
          <main className='min-h-screen pt-14 sm:pt-16 overflow-x-hidden max-w-full'>
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
