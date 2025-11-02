import { Badge } from "@/components/ui/badge";

interface PostTagsProps {
  tags?: string[];
  withHash?: boolean;
  className?: string;
}

export function PostTags({ tags, withHash = false, className = "" }: PostTagsProps) {
  if (!tags || tags.length === 0) return null;

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {tags.map((tag) => (
        <Badge
          key={tag}
          variant="secondary"
          className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-700 text-zinc-700 dark:text-zinc-300 border-zinc-300/50 dark:border-zinc-600/50 hover:from-amber-100 hover:to-amber-200 dark:hover:from-amber-900/30 dark:hover:to-amber-800/30 hover:border-amber-400/50 transition-all duration-300"
        >
          {withHash ? `#${tag}` : tag}
        </Badge>
      ))}
    </div>
  );
}

