import Link from "next/link";

type LogoProps = {
  className?: string;
  size?: "sm" | "md" | "lg" | "hero";
  asLink?: boolean;
};

const sizeClasses = {
  sm: "text-lg tracking-[0.08em]",
  md: "text-xl tracking-[0.1em]",
  lg: "text-3xl tracking-[0.12em]",
  hero: "text-5xl sm:text-7xl md:text-8xl tracking-[0.14em]",
};

function Mark({ className = "", size = "md" }: Omit<LogoProps, "asLink">) {
  return (
    <span
      className={`inline-block font-display font-semibold uppercase leading-none ${sizeClasses[size]} ${className}`}
    >
      <span className="text-carbon">NEX</span>
      <span className="text-teal">FM</span>
    </span>
  );
}

export function Logo({ className = "", size = "md", asLink = true }: LogoProps) {
  if (!asLink) {
    return <Mark className={className} size={size} />;
  }

  return (
    <Link href="/" aria-label="NEXFM home">
      <Mark className={className} size={size} />
    </Link>
  );
}
