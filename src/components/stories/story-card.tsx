"use client";

import { Typography } from "@/components/ui/typography";
import { Icon } from "@/components/ui/icon";
import Image from "next/image";
import Link from "next/link";
import { StoryPost } from "@/lib/types/stories";
import { formatStoryDate } from "@/lib/utils/date.utils";
import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";
import { Language } from "@/i18n/config";

interface StoryCardProps {
  post: StoryPost;
  index?: number;
  readStoryText: string;
  isHighlighted?: boolean;
}

export function StoryCard({
  post,
  readStoryText,
  isHighlighted = false
}: StoryCardProps) {
  const locale = useLocale() as Language;
  const formattedDate = formatStoryDate(post.publishedAt, locale);

  return (
    <Link
      href={`/stories/${post.slug}`}
      className={cn(
        "block group relative overflow-hidden transition-all duration-500",
        "hover:scale-[1.02]",
        isHighlighted && "border border-amber-500"
      )}
    >
      <div
        className={cn(
          "relative aspect-[4/3] md:aspect-[1/1] overflow-hidden",
          "bg-zinc-900"
        )}
      >
        {/* Cover Image */}
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className='object-cover transition-all duration-700 group-hover:scale-110 opacity-70'
        />

        {/* Gradient Overlay */}
        <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent' />

        {/* Content Overlay */}
        <div className='absolute inset-0 flex flex-col justify-between p-6 md:p-8'>
          {/* Top: Date */}
          <div>
            <Typography
              variant='caption1'
              className='text-amber-500 uppercase tracking-wider font-semibold text-xs md:text-sm'
            >
              {formattedDate}
            </Typography>
          </div>

          {/* Bottom: Title and CTA */}
          <div className='space-y-4'>
            <Typography
              variant='h3'
              className='font-serif text-2xl md:text-3xl text-zinc-50 leading-tight'
            >
              {post.title}
            </Typography>

            {/* Read Story CTA */}
            <div className='flex items-center gap-2 text-zinc-300 group-hover:text-zinc-50 transition-colors duration-300'>
              <span className='text-sm md:text-base font-medium uppercase tracking-wider'>
                {readStoryText}
              </span>
              <Icon
                name='lucide:arrow-right'
                className='w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300'
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
