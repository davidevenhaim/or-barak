import { Icon as Iconify } from "@iconify/react";

type IconProps = {
  name: string;
  className?: string;
  color?: string;
};

export function Icon({ name, className, color }: IconProps) {
  return <Iconify icon={name} className={className} color={color} />;
}
