"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@/components/ui/icon";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { useBoolean } from "@/hooks/use-boolean";
import { useTranslations } from "next-intl";
import { routes } from "@/lib/constants/routes";

const Navbar = () => {
  const t = useTranslations();
  const pathname = usePathname();
  const mobileMenuOpen = useBoolean(false);

  const navigation = [
    { name: t("nav_home"), href: routes.home },
    { name: t("nav_videography"), href: routes.videography },
    { name: t("nav_photography"), href: routes.photography },
    { name: t("nav_stories"), href: routes.stories },
    { name: t("nav_about"), href: routes.about },
    { name: t("nav_contact"), href: routes.contact }
  ];

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-zinc-200 dark:bg-card/95 dark:border-border overflow-x-hidden max-w-full'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full'>
        <div className='relative flex h-14 sm:h-16 items-center justify-between md:justify-center'>
          {/* Logo / Name */}
          <Link
            href='/'
            className='flex items-center md:absolute md:left-4 touch-manipulation'
          >
            <Typography
              variant='h6'
              className='font-serif text-zinc-900 dark:text-zinc-50 hover:text-amber-700 dark:hover:text-amber-600 transition-colors text-base sm:text-lg'
            >
              {t("home_hero_name")}
            </Typography>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex md:items-center md:gap-6'>
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className='relative py-2 touch-manipulation'
                >
                  <Typography
                    variant='body2'
                    className={cn(
                      "text-base font-medium transition-colors",
                      isActive
                        ? "text-zinc-900 dark:text-zinc-50"
                        : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50"
                    )}
                  >
                    {item.name}
                  </Typography>
                  {isActive && (
                    <motion.div
                      layoutId='navbar-indicator'
                      className='absolute -bottom-[1px] left-0 right-0 h-[2px] bg-amber-700 dark:bg-amber-600'
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30
                      }}
                    />
                  )}
                </Link>
              );
            })}
            {/* <LanguageSwitcher /> */}
          </div>

          {/* Mobile: Language Switcher & Menu Button */}
          <div className='flex items-center gap-2 md:hidden'>
            {/* <LanguageSwitcher /> */}
            {/* Mobile Menu Button */}
            <button
              type='button'
              className='p-2.5 min-w-[44px] min-h-[44px] rounded-md text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors touch-manipulation active:bg-zinc-100 dark:active:bg-zinc-800'
              onClick={mobileMenuOpen.onToggle}
              aria-label='Toggle menu'
            >
              <Icon
                name={mobileMenuOpen.value ? "mdi:close" : "mdi:menu"}
                className='w-6 h-6'
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen.value && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className='md:hidden border-t border-zinc-200 dark:border-border bg-white dark:bg-card shadow-lg'
          >
            <div className='px-4 py-4 space-y-1'>
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={mobileMenuOpen.onFalse}
                    className={cn(
                      "block py-3 px-3 rounded-lg transition-colors touch-manipulation",
                      isActive
                        ? "bg-amber-50 dark:bg-amber-900/20 text-zinc-900 dark:text-zinc-50"
                        : "hover:bg-zinc-50 dark:hover:bg-zinc-900/50 text-zinc-600 dark:text-zinc-400"
                    )}
                  >
                    <Typography
                      variant='body2'
                      className={cn(
                        "text-base font-medium",
                        isActive
                          ? "text-zinc-900 dark:text-zinc-50"
                          : "text-zinc-600 dark:text-zinc-400"
                      )}
                    >
                      {item.name}
                    </Typography>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
