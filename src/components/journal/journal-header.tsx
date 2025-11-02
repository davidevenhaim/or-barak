import { Typography } from "@/components/ui/typography";

interface JournalHeaderProps {
  title: string;
  description: string;
}

export function JournalHeader({ title, description }: JournalHeaderProps) {
  return (
    <div className="mb-20 text-center">
      <div className="inline-block mb-6">
        <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-500 to-transparent mb-6 mx-auto" />
        <Typography
          variant="h1"
          className="mb-4 bg-gradient-to-r from-zinc-900 via-amber-700 to-zinc-900 dark:from-zinc-50 dark:via-amber-400 dark:to-zinc-50 bg-clip-text text-transparent"
        >
          {title}
        </Typography>
        <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-500 to-transparent mt-6 mx-auto" />
      </div>
      <Typography
        variant="subtitle1"
        className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto"
      >
        {description}
      </Typography>
    </div>
  );
}

