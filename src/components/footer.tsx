"use client";

import { Icon } from "@/components/ui/icon";
import { Typography } from "@/components/ui/typography";
import { useTranslations } from "next-intl";

const socialLinks = [
  {
    name: "social_instagram",
    href: "https://instagram.com",
    icon: "mdi:instagram"
  },
  {
    name: "social_vimeo",
    href: "https://vimeo.com",
    icon: "mdi:vimeo"
  },
  {
    name: "social_linkedin",
    href: "https://linkedin.com",
    icon: "mdi:linkedin"
  },
  {
    name: "social_email",
    href: "mailto:or@example.com",
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
          {/* Social Links */}
          <div className='flex items-center gap-6'>
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target='_blank'
                rel='noopener noreferrer'
                className='text-zinc-600 hover:text-amber-700 dark:text-zinc-400 dark:hover:text-amber-600 transition-colors'
                aria-label={t(link.name)}
              >
                <Icon name={link.icon} className='w-5 h-5' />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className='w-full max-w-xs h-px bg-zinc-200 dark:bg-zinc-800' />

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

export default Footer;
