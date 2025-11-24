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
    classes: "text-6xl sm:text-7xl font-bold text-zinc-900 dark:text-zinc-50"
  },
  h2: {
    tag: "h2",
    classes: "text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-zinc-50"
  },
  h3: {
    tag: "h3",
    classes:
      "text-3xl sm:text-4xl font-semibold text-zinc-900 dark:text-zinc-50"
  },
  h4: {
    tag: "h4",
    classes:
      "text-2xl sm:text-3xl font-semibold text-zinc-900 dark:text-zinc-50"
  },
  h5: {
    tag: "h5",
    classes: "text-xl sm:text-2xl font-medium text-zinc-900 dark:text-zinc-50"
  },
  h6: {
    tag: "h6",
    classes: "text-lg sm:text-xl font-medium text-zinc-900 dark:text-zinc-50"
  },
  subtitle1: {
    tag: "h2",
    classes: "text-2xl sm:text-xl lg:text-2xl font-semibold text-foreground"
  },
  subtitle2: {
    tag: "h3",
    classes: "text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground"
  },
  body1: {
    tag: "p",
    classes: "text-lg lg:text-xl text-foreground leading-relaxed"
  },
  body2: {
    tag: "p",
    classes: "text-md lg:text-lg text-foreground leading-relaxed"
  },
  caption1: {
    tag: "p",
    classes: "text-base lg:text-lg text-muted-foreground leading-relaxed"
  },
  caption2: {
    tag: "p",
    classes: "text-sm lg:text-base text-muted-foreground leading-relaxed"
  },
  label1: {
    tag: "label",
    classes: "text-lg lg:text-xl text-foreground leading-relaxed"
  },
  label2: {
    tag: "label",
    classes: "text-base lg:text-lg text-foreground leading-relaxed"
  },
  overline: {
    tag: "p",
    classes:
      "text-sm lg:text-base uppercase tracking-widest text-muted-foreground"
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
