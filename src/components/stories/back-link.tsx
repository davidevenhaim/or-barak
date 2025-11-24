import { Icon } from "@/components/ui/icon";
import Link from "next/link";

interface BackLinkProps {
  href: string;
  text: string;
  variant?: "default" | "button";
}

export function BackLink({ href, text, variant = "default" }: BackLinkProps) {
  const baseClasses = "inline-flex items-center gap-2 transition-all duration-300 group";
  
  const variantClasses = variant === "button"
    ? "px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold hover:scale-105 hover:shadow-lg"
    : "mb-12 px-4 py-2 rounded-full bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl border border-zinc-200/50 dark:border-zinc-800/50 text-zinc-600 dark:text-zinc-400 hover:text-amber-600 dark:hover:text-amber-400 hover:border-amber-500/50";

  return (
    <Link href={href} className={`${baseClasses} ${variantClasses}`}>
      <Icon
        name="lucide:arrow-left"
        className="transform group-hover:-translate-x-1 transition-transform duration-300 w-4 h-4"
      />
      <span className={variant === "default" ? "text-sm font-medium" : ""}>
        {text}
      </span>
    </Link>
  );
}

