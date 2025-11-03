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
    <Link href={link.href} className='group block'>
      <AnimatedDivBreathing>
        <Card
          className='h-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-200'
          style={{
            animationDelay: `${index * 0.1}s`
          }}
        >
          <CardContent className='p-6 flex flex-col h-full'>
            {/* Icon */}
            <div className='mb-4 w-10 h-10 rounded-lg bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center group-hover:bg-zinc-200 dark:group-hover:bg-zinc-800 transition-colors duration-200'>
              <Icon
                name={link.icon}
                className='w-5 h-5 text-zinc-700 dark:text-zinc-300'
              />
            </div>

            {/* Title */}
            <Typography
              variant='h6'
              className='mb-2 text-zinc-900 dark:text-zinc-100 font-medium'
            >
              {link.title}
            </Typography>

            {/* Description */}
            <Typography
              variant='body2'
              className='text-zinc-600 dark:text-zinc-400 leading-relaxed flex-grow'
            >
              {link.description}
            </Typography>

            {/* Subtle arrow indicator */}
            <div className='mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-900'>
              <Icon
                name='lucide:arrow-right'
                className='w-4 h-4 text-zinc-400 dark:text-zinc-600 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 group-hover:translate-x-1 transition-all duration-200'
              />
            </div>
          </CardContent>
        </Card>
      </AnimatedDivBreathing>
    </Link>
  );
}
