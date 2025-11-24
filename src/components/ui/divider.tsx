import { cn } from "@/lib/utils";
import { ThemeColor, VariantWidthClasses } from "@/lib/utils/theme.utils";

type Props = {
  className?: string;
  width?: VariantWidthClasses;
  color?: ThemeColor;
};

const widthMap: Record<VariantWidthClasses, string> = {
  default: "w-24",
  full: "w-full",
  half: "w-1/2",
  third: "w-1/3",
  fourth: "w-1/4",
  fifth: "w-1/5",
  sixth: "w-1/6",
  seventh: "w-1/7",
  eighth: "w-1/8",
  ninth: "w-1/9"
};

const colorMap: Record<ThemeColor, string> = {
  divider: "bg-gradient-to-r from-amber-500 to-amber-600",
  transparent: "bg-transparent",
  white: "bg-white",
  black: "bg-black",
  pink: "bg-pink",
  gray: "bg-gray",
  green: "bg-green",
  purple: "bg-purple",
  primary: "bg-gradient-to-r from-primary to-primary-foreground",
  secondary: "bg-gradient-to-r from-secondary to-secondary-foreground",
  destructive: "bg-gradient-to-r from-destructive to-destructive-foreground",
  muted: "bg-gradient-to-r from-muted to-muted-foreground",
  accent: "bg-gradient-to-r from-accent to-accent-foreground",
  foreground: "bg-gradient-to-r from-foreground to-foreground-foreground",
  background: "bg-gradient-to-r from-background to-background-foreground",
  card: "bg-gradient-to-r from-card to-card-foreground",
  popover: "bg-gradient-to-r from-popover to-popover-foreground",
  border: "bg-gradient-to-r from-border to-border-foreground",
  input: "bg-gradient-to-r from-input to-input-foreground",
  ring: "bg-gradient-to-r from-ring to-ring-foreground"
};

const Divider = ({
  className,
  width = "default",
  color = "divider"
}: Props) => {
  return (
    <div
      className={cn(
        "h-1 bg-gradient-to-r rounded-full",
        widthMap[width as VariantWidthClasses],
        colorMap[color as ThemeColor],
        className
      )}
    />
  );
};

export default Divider;
