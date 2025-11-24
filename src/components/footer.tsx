"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/icon";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import { OR_CONSTANTS } from "@/lib/constants/or.constants";
import { useBoolean } from "@/hooks/use-boolean";
import Divider from "./ui/divider";

const socialLinks = [
  {
    name: "social_instagram",
    href: OR_CONSTANTS.INSTAGRAM,
    icon: "mdi:instagram"
  },
  // {
  //   name: "social_vimeo",
  //   href: "https://vimeo.com",
  //   icon: "mdi:vimeo"
  // },
  // {
  //   name: "social_linkedin",
  //   href: "https://linkedin.com",
  //   icon: "mdi:linkedin"
  // },
  {
    name: "social_email",
    href: "mailto:orbarak808@gmail.com",
    icon: "mdi:email-outline"
  }
];

const Footer = () => {
  const t = useTranslations();
  const currentYear = new Date().getFullYear();

  return (
    <footer className='border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black'>
      <div className='mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8'>
        <div className='flex flex-col items-center gap-8'>
          <NewsletterSection />

          <Divider width='fourth' color='gray' />

          <div className='flex items-center gap-6'>
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target='_blank'
                rel='noopener noreferrer'
                className='text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors'
                aria-label={t(link.name)}
              >
                <Icon name={link.icon} className='w-5 h-5' />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className='text-center'>
            <Typography
              variant='caption1'
              className='text-zinc-500 dark:text-zinc-500'
            >
              {t("footer_copyright", { year: currentYear })}
            </Typography>
          </div>

          {/* Optional tagline */}
          <Typography
            variant='caption2'
            className='text-zinc-400 dark:text-zinc-600 italic'
          >
            {t("footer_tagline")}
          </Typography>
        </div>
      </div>
    </footer>
  );
};

const NewsletterSection = () => {
  const t = useTranslations();

  const [email, setEmail] = useState("");

  const isSubmitted = useBoolean();
  const isLoading = useBoolean();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    isLoading.onTrue();
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    isSubmitted.onTrue();
    isLoading.onFalse();
    setEmail("");

    // Reset success message after 3 seconds
    setTimeout(() => {
      isSubmitted.onFalse();
    }, 3000);
  };

  return (
    <div className='w-full max-w-md'>
      <div className='text-center mb-4'>
        <Typography
          variant='caption1'
          className='text-zinc-700 dark:text-zinc-300 font-medium mb-1'
        >
          {t("home_newsletter_title")}
        </Typography>
        <Typography
          variant='caption2'
          className='text-zinc-500 dark:text-zinc-500'
        >
          {t("home_newsletter_description")}
        </Typography>
      </div>

      {isSubmitted.value ? (
        <div className='flex items-center justify-center gap-2 py-2 text-zinc-600 dark:text-zinc-400'>
          <Icon name='lucide:check-circle' className='w-4 h-4' />
          <Typography variant='caption1'>
            {t("home_newsletter_success")}
          </Typography>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className='flex gap-2'>
          <Input
            type='email'
            placeholder={t("home_newsletter_email_placeholder")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='h-9 text-sm bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800'
            required
          />
          <Button
            type='submit'
            disabled={isLoading.value}
            className='h-9 px-4 bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-zinc-200 text-white dark:text-zinc-900 text-sm'
          >
            {isLoading.value ? (
              <Icon name='lucide:loader-2' className='w-4 h-4 animate-spin' />
            ) : (
              t("home_newsletter_submit")
            )}
          </Button>
        </form>
      )}
    </div>
  );
};

export default Footer;
