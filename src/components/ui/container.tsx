import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
};

const sizeClasses = {
  default: "max-w-7xl",
  narrow: "max-w-4xl",
  wide: "max-w-[1400px]"
};

export function Container({
  children,
  className,
  size = "default"
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto px-4 sm:px-5 md:px-6 lg:px-8 w-full max-w-full",
        sizeClasses[size],
        className
      )}
    >
      {children}
    </div>
  );
}
