"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { Icon } from "@/components/ui/icon";
import Link from "next/link";
import { QuickLink } from "./quick-links-section";
import AnimatedDivBreathing from "@/components/ui/animated-div-breathing";

interface QuickLinkCardProps {
  link: QuickLink;
  index?: number;
}

export function QuickLinkCard({ link, index = 0 }: QuickLinkCardProps) {
  return (
    <Link href={link.href} className='group block h-full w-full'>
      <AnimatedDivBreathing className='h-full'>
        <Card
          className='h-full border border-zinc-200/50 dark:border-zinc-800/50 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl hover:border-amber-500/50 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] flex flex-col'
          style={{
            animationDelay: `${index * 0.1}s`
          }}
        >
          <CardContent className='p-4 sm:p-5 md:p-6 flex flex-col h-full'>
            {/* Icon */}
            <div className='mb-3 sm:mb-4 w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 rounded-lg bg-gradient-to-br from-amber-500/10 to-amber-600/5 dark:from-amber-500/20 dark:to-amber-600/10 flex items-center justify-center group-hover:from-amber-500/20 group-hover:to-amber-600/10 dark:group-hover:from-amber-500/30 dark:group-hover:to-amber-600/20 transition-all duration-300'>
              <Icon
                name={link.icon}
                className='w-5 h-5 sm:w-6 sm:h-6 text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform duration-300'
              />
            </div>

            {/* Title */}
            <Typography
              variant='h6'
              className='mb-2 sm:mb-3 flex-shrink-0 text-zinc-900 dark:text-zinc-100 font-medium group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors whitespace-pre-line'
            >
              {link.title}
            </Typography>

            {/* Description */}
            <Typography
              variant='body2'
              className='text-zinc-600 dark:text-zinc-400 leading-relaxed flex-grow text-sm sm:text-base whitespace-pre-line'
            >
              {link.description}
            </Typography>

            {/* Subtle arrow indicator */}
            <div className='mt-auto pt-4 sm:pt-5 md:pt-6 flex-shrink-0 border-t border-zinc-200/50 dark:border-zinc-800/50 group-hover:border-amber-500/30 transition-colors'>
              <Icon
                name='lucide:arrow-right'
                className='w-4 h-4 sm:w-5 sm:h-5 text-zinc-400 dark:text-zinc-600 group-hover:text-amber-600 dark:group-hover:text-amber-400 group-hover:translate-x-2 transition-all duration-300'
              />
            </div>
          </CardContent>
        </Card>
      </AnimatedDivBreathing>
    </Link>
  );
}
