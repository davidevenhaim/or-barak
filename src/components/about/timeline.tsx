"use client";

import { Typography } from "@/components/ui/typography";
import { TimelineEvent } from "@/lib/content/about";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

interface TimelineProps {
  events: TimelineEvent[];
}

export function Timeline({ events }: TimelineProps) {
  const t = useTranslations();

  return (
    <div className='relative py-16 md:py-24'>
      {/* Header */}
      <div className='mb-16 md:mb-20 text-center'>
        <Typography
          variant='caption1'
          className='text-zinc-400 uppercase tracking-wider font-medium text-xs md:text-sm mb-2'
        >
          {t("about_timeline_title")}
        </Typography>
        <Typography
          variant='h2'
          className='font-serif text-3xl md:text-4xl lg:text-5xl text-zinc-50'
        >
          {t("about_timeline_subtitle")}
        </Typography>
      </div>

      {/* Timeline Container */}
      <div className='relative max-w-5xl mx-auto'>
        {/* Vertical Timeline Line */}
        <div className='absolute left-1/2 top-0 bottom-0 w-0.5 md:w-1 bg-amber-500 dark:bg-amber-600 transform -translate-x-1/2' />

        {/* Timeline Events */}
        <div className='relative space-y-24 md:space-y-32'>
          {events.map((event, index) => {
            const isEven = index % 2 === 0;
            const translationKey = `timeline_${event.year}`;

            return (
              <div
                key={event.year}
                className={cn(
                  "relative flex items-center",
                  isEven ? "flex-row-reverse" : "flex-row"
                )}
              >
                {/* Timeline Marker */}
                <div className='absolute left-1/2 transform -translate-x-1/2 w-4 h-4 md:w-6 md:h-6 rounded-full bg-amber-500 dark:bg-amber-600 border-4 border-black dark:border-black z-10' />

                {/* Content Card */}
                <div
                  className={cn(
                    "w-full md:w-[45%] relative",
                    isEven ? "md:pr-8" : "md:pl-8"
                  )}
                >
                  {/* Background Year Number */}
                  <div
                    className={cn(
                      "absolute -z-10 text-8xl md:text-9xl font-black text-zinc-900 dark:text-zinc-900 opacity-20 select-none",
                      isEven ? "right-0 top-0" : "left-0 top-0"
                    )}
                  >
                    {event.year}
                  </div>

                  {/* Card */}
                  <div className='bg-zinc-900/50 dark:bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 dark:border-zinc-800/50 rounded-lg p-6 md:p-8 relative'>
                    {/* Year */}
                    <Typography
                      variant='caption1'
                      className='text-amber-500 dark:text-amber-400 uppercase tracking-wider font-semibold text-xs md:text-sm mb-3'
                    >
                      {event.year}
                    </Typography>

                    {/* Title */}
                    <Typography
                      variant='h4'
                      className='text-zinc-50 font-bold text-xl md:text-2xl mb-3'
                    >
                      {t(`${translationKey}_title`)}
                    </Typography>

                    {/* Description */}
                    <Typography
                      variant='body2'
                      className='text-zinc-300 dark:text-zinc-400 text-sm md:text-base leading-relaxed'
                    >
                      {t(`${translationKey}_description`)}
                    </Typography>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
