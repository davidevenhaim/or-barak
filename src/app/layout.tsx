import { Inter, Playfair_Display } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getLocale } from "next-intl/server";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import "./globals.css";
import { Metadata } from "next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap"
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
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
    images: [
      { url: "/images/or.png", width: 1200, height: 630, alt: "Or Barak" }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Or Barak",
    description:
      "Or Barak is a Producer, Entrepreneur, Filmmaker and visual storyteller",
    images: [
      { url: "/images/or.png", width: 1200, height: 630, alt: "Or Barak" }
    ]
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
      className={`${inter.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <body className='antialiased bg-white dark:bg-black text-zinc-900 dark:text-zinc-50'>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Navbar />
          <main className='min-h-screen pt-16'>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
