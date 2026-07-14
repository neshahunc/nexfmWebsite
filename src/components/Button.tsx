import Link from "next/link";
import type { ComponentProps } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  variant?: ButtonVariant;
  href?: string;
  children: React.ReactNode;
  className?: string;
} & Omit<ComponentProps<"button">, "className">;

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-teal text-white hover:bg-teal-hover border border-transparent",
  secondary:
    "bg-white text-carbon border border-teal hover:bg-[color-mix(in_srgb,var(--teal)_8%,white)]",
  ghost:
    "bg-transparent text-white border border-white/25 hover:border-teal hover:text-teal",
};

export function Button({
  variant = "primary",
  href,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center px-7 py-3.5 text-sm font-medium tracking-wide transition-colors duration-200 ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
