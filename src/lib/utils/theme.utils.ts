export type ThemeColor =
  | "transparent"
  | "primary"
  | "secondary"
  | "destructive"
  | "muted"
  | "accent"
  | "foreground"
  | "background"
  | "card"
  | "popover"
  | "border"
  | "input"
  | "ring"
  | "white"
  | "black"
  | "pink"
  | "gray"
  | "green"
  | "purple"
  | "divider";

export type SizeClasses =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl";

export type ShapeClasses = "square" | "pill" | "circle" | "rounded" | "sharp";

export type VariantWidthClasses =
  | "default"
  | "full"
  | "half"
  | "third"
  | "fourth"
  | "fifth"
  | "sixth"
  | "seventh"
  | "eighth"
  | "ninth";

const themeColorClasses: Record<ThemeColor, string> = {
  transparent: "text-transparent",
  primary: "text-primary",
  secondary: "text-secondary",
  destructive: "text-destructive",
  muted: "text-muted-foreground",
  accent: "text-accent-foreground",
  foreground: "text-foreground",
  background: "text-background",
  card: "text-card-foreground",
  popover: "text-popover-foreground",
  border: "text-border",
  input: "text-input",
  ring: "text-ring",
  white: "text-white",
  black: "text-black",
  pink: "text-pink",
  gray: "text-gray",
  green: "text-green",
  purple: "text-purple"
};

export const getThemeColorClasses = (color: ThemeColor) =>
  themeColorClasses[color];

const sizeClasses: Record<SizeClasses, string> = {
  xs: "h-4 w-4",
  sm: "h-5 w-5",
  md: "h-8 w-8",
  lg: "h-12 w-12",
  xl: "h-16 w-16",
  "2xl": "h-20 w-20",
  "3xl": "h-24 w-24",
  "4xl": "h-28 w-28",
  "5xl": "h-32 w-32"
};

export const getSizeClasses = (size: SizeClasses) => sizeClasses[size];

export const getIconButtonSizeClasses = (size: SizeClasses) => {
  switch (size) {
    case "xs":
      return "h-4 w-4 p-1";
    case "sm":
      return "h-5 w-5 p-1.5";
    case "lg":
      return "h-8 w-8 p-2";
    case "xl":
      return "h-12 w-12 p-2.5";
    case "2xl":
      return "h-16 w-16 p-3";
    case "3xl":
      return "h-24 w-24 p-4";
    case "4xl":
      return "h-28 w-28 p-4";
    case "5xl":
      return "h-32 w-32 p-5";
    default:
      return "h-8 w-8 p-1";
  }
};

export const getIconSize = (size: SizeClasses) => {
  const sizeMap: Record<SizeClasses, SizeClasses> = {
    xs: "xs",
    sm: "xs",
    md: "sm",
    lg: "md",
    xl: "lg",
    "2xl": "xl",
    "3xl": "2xl",
    "4xl": "3xl",
    "5xl": "4xl"
  };
  const iconSize = sizeMap[size];
  return sizeClasses[iconSize];
};

export const getShapeClasses = (shape: ShapeClasses) => {
  const shapeClasses: Record<ShapeClasses, string> = {
    square: "rounded-lg",
    pill: "rounded-full",
    circle: "rounded-full",
    rounded: "rounded-xl",
    sharp: "rounded-none"
  };
  return shapeClasses[shape];
};

export const getIconButtonWithTextSizeClasses = (size: SizeClasses) => {
  switch (size) {
    case "xs":
      return "h-6 px-2 py-1 gap-1";
    case "sm":
      return "h-8 px-3 py-1.5 gap-1.5";
    case "lg":
      return "h-12 px-4 py-2 gap-2";
    case "xl":
      return "h-14 px-5 py-2.5 gap-2.5";
    case "2xl":
      return "h-16 px-6 py-3 gap-3";
    case "3xl":
      return "h-20 px-8 py-4 gap-4";
    case "4xl":
      return "h-24 px-10 py-5 gap-5";
    case "5xl":
      return "h-28 px-12 py-6 gap-6";
    default:
      return "h-10 px-4 py-2 gap-2";
  }
};

export const getTextSizeClasses = (size: SizeClasses) => {
  switch (size) {
    case "xs":
      return "text-xs";
    case "sm":
      return "text-sm";
    case "lg":
      return "text-base";
    case "xl":
      return "text-lg";
    case "2xl":
      return "text-xl";
    case "3xl":
      return "text-2xl";
    case "4xl":
      return "text-3xl";
    case "5xl":
      return "text-4xl";
    default:
      return "text-sm";
  }
};

export const getBackgroundColorClasses = (color: ThemeColor) => {
  const bgColorClasses: Record<ThemeColor, string> = {
    transparent: "bg-transparent",
    primary: "bg-primary",
    secondary: "bg-secondary",
    destructive: "bg-destructive",
    muted: "bg-muted",
    accent: "bg-accent",
    foreground: "bg-foreground",
    background: "bg-background",
    card: "bg-card",
    popover: "bg-popover",
    border: "bg-border",
    input: "bg-input",
    ring: "bg-ring",
    white: "bg-white",
    black: "bg-black",
    pink: "bg-pink",
    gray: "bg-gray",
    green: "bg-green",
    purple: "bg-purple"
  };
  return bgColorClasses[color];
};

export const getBorderColorClasses = (color: ThemeColor) => {
  const borderColorClasses: Record<ThemeColor, string> = {
    transparent: "border-transparent",
    primary: "border-primary",
    secondary: "border-secondary",
    destructive: "border-destructive",
    muted: "border-muted",
    accent: "border-accent",
    foreground: "border-foreground",
    background: "border-background",
    card: "border-card",
    popover: "border-popover",
    border: "border-border",
    input: "border-input",
    ring: "border-ring",
    white: "border-white",
    black: "border-black",
    pink: "border-pink",
    gray: "border-gray",
    green: "border-green",
    purple: "border-purple"
  };
  return borderColorClasses[color];
};

export type AnimationVariant =
  | "pulse"
  | "bounce"
  | "spin"
  | "ping"
  | "wiggle"
  | "swing"
  | "float"
  | "heartbeat"
  | "rotate-3d"
  | "shake"
  | "none";

export type AnimationSpeed = "slow" | "normal" | "fast";
export type AnimationTrigger = "always" | "hover" | "focus";

export const getAnimationClasses = (
  animation: AnimationVariant,
  speed: AnimationSpeed = "normal",
  trigger: AnimationTrigger = "always"
) => {
  const animationClasses: Record<AnimationVariant, string> = {
    none: "",
    pulse: "animate-pulse",
    bounce: "animate-bounce",
    spin: "animate-spin",
    ping: "animate-ping",
    wiggle:
      trigger === "always"
        ? "animate-[wiggle_1s_ease-in-out_infinite]"
        : "hover:animate-[wiggle_1s_ease-in-out_infinite]",
    swing:
      trigger === "always"
        ? "animate-[swing_1s_ease-in-out_infinite]"
        : "hover:animate-[swing_1s_ease-in-out_infinite]",
    float:
      trigger === "always"
        ? "animate-[float_3s_ease-in-out_infinite]"
        : "hover:animate-[float_3s_ease-in-out_infinite]",
    heartbeat:
      trigger === "always"
        ? "animate-[heartbeat_1.5s_ease-in-out_infinite]"
        : "hover:animate-[heartbeat_1.5s_ease-in-out_infinite]",
    "rotate-3d":
      trigger === "always"
        ? "animate-[rotate3d_2s_ease-in-out_infinite]"
        : "hover:animate-[rotate3d_2s_ease-in-out_infinite]",
    shake:
      trigger === "always"
        ? "animate-[shake_0.5s_ease-in-out_infinite]"
        : "hover:animate-[shake_0.5s_ease-in-out_infinite]"
  };

  const baseClass = animationClasses[animation];

  if (["pulse", "bounce", "spin", "ping"].includes(animation)) {
    const durationClass = `duration-${
      speed === "slow" ? "[3s]" : speed === "fast" ? "[800ms]" : "[1500ms]"
    }`;
    return `${baseClass} ${durationClass}`;
  }

  return baseClass;
};
