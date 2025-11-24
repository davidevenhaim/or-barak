import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const ImageSectionTitle = ({ children, className }: Props) => (
  <Typography
    variant='h4'
    className={cn(
      "uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-medium text-center sm:text-start",
      className
    )}
  >
    {children}
  </Typography>
);

export default ImageSectionTitle;
