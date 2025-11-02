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
    classes:
      "text-xl sm:text-2xl font-semibold text-zinc-700 dark:text-zinc-300"
  },
  subtitle2: {
    tag: "h3",
    classes: "text-lg sm:text-xl font-semibold text-zinc-700 dark:text-zinc-300"
  },
  body1: {
    tag: "p",
    classes: "text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed"
  },
  body2: {
    tag: "p",
    classes: "text-base text-zinc-600 dark:text-zinc-400 leading-relaxed"
  },
  caption1: {
    tag: "p",
    classes: "text-sm text-zinc-500 dark:text-zinc-500 leading-relaxed"
  },
  caption2: {
    tag: "p",
    classes: "text-xs text-zinc-500 dark:text-zinc-500 leading-relaxed"
  },
  label1: {
    tag: "label",
    classes: "text-base text-zinc-700 dark:text-zinc-300 leading-relaxed"
  },
  label2: {
    tag: "label",
    classes: "text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed"
  },
  overline: {
    tag: "p",
    classes:
      "text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-500"
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
