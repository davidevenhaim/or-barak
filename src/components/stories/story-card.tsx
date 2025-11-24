import { Card, CardContent } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { Icon } from "@/components/ui/icon";
import Image from "next/image";
import Link from "next/link";
import { StoryPost } from "@/lib/types/stories";
import { DateBadge } from "./date-badge";
import { PostTags } from "./post-tags";

interface StoryCardProps {
  post: StoryPost;
  index?: number;
  readMoreText: string;
}

export function StoryCard({ post, index = 0, readMoreText }: StoryCardProps) {
  return (
    <Link
      href={`/stories/${post.slug}`}
      className="block group animate-fadeInUp"
      style={{
        animationDelay: `${index * 0.1}s`
      }}
    >
      <Card className="relative h-full overflow-hidden rounded-2xl bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl border-zinc-200/50 dark:border-zinc-800/50 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:border-amber-500/50 p-0">
        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-transparent to-amber-700/0 group-hover:from-amber-500/5 group-hover:to-amber-700/5 transition-all duration-500 pointer-events-none" />

        {/* Cover Image */}
        <div className="relative w-full h-64 overflow-hidden bg-zinc-100 dark:bg-zinc-800">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
          />
          {/* Image Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent dark:from-zinc-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Date Badge */}
          <DateBadge date={post.publishedAt} variant="floating" />
        </div>

        {/* Content */}
        <CardContent className="p-6">
          <Typography
            variant="h4"
            className="mb-3 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300"
          >
            {post.title}
          </Typography>

          <Typography
            variant="body2"
            className="mb-4 text-zinc-600 dark:text-zinc-400 line-clamp-2"
          >
            {post.description}
          </Typography>

          {/* Tags */}
          <PostTags tags={post.tags} className="mb-4" />

          {/* Read More Indicator */}
          <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-medium text-sm group-hover:gap-4 transition-all duration-300">
            <span>{readMoreText}</span>
            <Icon
              name="lucide:arrow-right"
              className="transform group-hover:translate-x-1 transition-transform duration-300 w-4 h-4"
            />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

