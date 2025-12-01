import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

interface ComingSoonSectionProps {
  title: string;
  subtitle: string;
  text: string;
  className?: string;
}

export function ComingSoonSection({
  title,
  subtitle,
  text,
  className
}: ComingSoonSectionProps) {
  return (
    <div className={cn("py-24 md:py-32 text-center space-y-6", className)}>
      <Typography
        variant='subtitle1'
        className='font-serif text-xl md:text-2xl text-zinc-400'
      >
        {title}
      </Typography>

      <Typography
        variant='h2'
        className='font-serif text-4xl md:text-5xl lg:text-6xl text-amber-700 dark:text-amber-600'
      >
        {subtitle}
      </Typography>

      <Typography
        variant='body2'
        className='text-zinc-500 dark:text-zinc-400 uppercase tracking-wider text-sm md:text-base'
      >
        {text}
      </Typography>
    </div>
  );
}
