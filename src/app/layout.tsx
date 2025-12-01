import { Montserrat } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getLocale } from "next-intl/server";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import "./globals.css";
import { Metadata } from "next";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Or Barak",
  description:
    "Or Barak is a Producer, Entrepreneur, Filmmaker and visual storyteller",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ]
  },
  openGraph: {
    title: "Or Barak",
    description:
      "Or Barak is a Producer, Entrepreneur, Filmmaker and visual storyteller",
    type: "website",
    images: [
      {
        url: "/images/or-2.jpg",
        alt: "Or Barak"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Or Barak",
    description:
      "Or Barak is a Producer, Entrepreneur, Filmmaker and visual storyteller",
    images: ["/images/or-2.jpg"]
  }
};

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
