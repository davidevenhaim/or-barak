import { cn } from "@/lib/utils";
import React from "react";
import { getThemeColorClasses, ThemeColor } from "@/lib/utils/theme.utils";

export type TypoVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "subtitle1"
  | "subtitle2"
  | "body1"
  | "body2"
  | "caption1"
  | "caption2"
  | "label1"
  | "label2"
  | "overline";

type TypographyProps = {
  children: React.ReactNode;
  variant: TypoVariant;
  className?: string;
  color?: ThemeColor;
  as?: keyof React.JSX.IntrinsicElements;
  style?: React.CSSProperties;
  onDoubleClick?: () => void;
  onClick?: () => void;
};

const variantClassMap: Record<
  TypoVariant,
  { tag: keyof React.JSX.IntrinsicElements; classes: string }
> = {
  h1: {
    tag: "h1",
    classes:
      "text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-zinc-900 dark:text-zinc-50 leading-tight"
  },
  h2: {
    tag: "h2",
    classes:
      "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-zinc-50 leading-tight"
  },
  h3: {
    tag: "h3",
    classes:
      "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-zinc-900 dark:text-zinc-50 leading-tight"
  },
  h4: {
    tag: "h4",
    classes:
      "text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-zinc-900 dark:text-zinc-50 leading-tight"
  },
  h5: {
    tag: "h5",
    classes:
      "text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-zinc-900 dark:text-zinc-50 leading-snug"
  },
  h6: {
    tag: "h6",
    classes:
      "text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-zinc-900 dark:text-zinc-50 leading-snug"
  },
  subtitle1: {
    tag: "h2",
    classes:
      "text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground leading-relaxed"
  },
  subtitle2: {
    tag: "h3",
    classes:
      "text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground leading-relaxed"
  },
  body1: {
    tag: "p",
    classes:
      "text-base sm:text-lg md:text-xl lg:text-2xl text-foreground leading-relaxed"
  },
  body2: {
    tag: "p",
    classes:
      "text-sm sm:text-base md:text-lg lg:text-xl text-foreground leading-relaxed"
  },
  caption1: {
    tag: "p",
    classes:
      "text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed"
  },
  caption2: {
    tag: "p",
    classes:
      "text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed"
  },
  label1: {
    tag: "label",
    classes:
      "text-base sm:text-lg md:text-xl lg:text-2xl text-foreground leading-relaxed"
  },
  label2: {
    tag: "label",
    classes:
      "text-sm sm:text-base md:text-lg lg:text-xl text-foreground leading-relaxed"
  },
  overline: {
    tag: "p",
    classes:
      "text-xs sm:text-sm md:text-base lg:text-lg uppercase tracking-widest text-muted-foreground"
  }
};

export const Typography = ({
  children,
  variant,
  className,
  color,
  as,
  style,
  onDoubleClick,
  onClick
}: TypographyProps) => {
  const { tag: defaultTag, classes } = variantClassMap[variant];
  const Tag = as || defaultTag;
  const elementClasses = cn(
    classes,
    color ? getThemeColorClasses(color) : undefined,
    className
  );

  return React.createElement(
    Tag as string,
    {
      className: elementClasses,
      style,
      onDoubleClick,
      onClick
    },
    children
  );
};
