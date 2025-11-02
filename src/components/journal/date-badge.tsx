import { Badge } from "@/components/ui/badge";
import { Typography } from "@/components/ui/typography";
import { formatPostDate } from "@/lib/utils/date.utils";

interface DateBadgeProps {
  date: string;
  className?: string;
  variant?: "default" | "floating";
}

export function DateBadge({
  date,
  className = "",
  variant = "default"
}: DateBadgeProps) {
  const baseClasses =
    variant === "floating"
      ? "absolute top-4 right-4 px-4 py-2 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border-zinc-200/50 dark:border-zinc-800/50 shadow-lg"
      : "px-4 py-2 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border-zinc-200/50 dark:border-zinc-800/50";

  return (
    <Badge variant='outline' className={`${baseClasses} ${className}`}>
      <Typography
        variant={variant === "floating" ? "caption2" : "caption1"}
        className='text-zinc-700 dark:text-zinc-300 font-semibold'
      >
        {formatPostDate(date)}
      </Typography>
    </Badge>
  );
}
