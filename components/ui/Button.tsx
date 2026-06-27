import type { ComponentProps, ReactNode } from "react";
import { Link } from "@/i18n/navigation";

type Variant = "primary" | "secondary" | "glass" | "link";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-1.5 font-normal tracking-[-0.01em] transition-all duration-200 active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2";

const variants: Record<Variant, string> = {
  primary: "rounded-full bg-accent text-white hover:bg-accent-hover",
  secondary:
    "rounded-full border border-accent bg-transparent text-accent hover:bg-accent/5",
  glass:
    "rounded-full text-white glass-dark hover:bg-white/15 focus-visible:ring-offset-black",
  link: "text-accent hover:underline underline-offset-4",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-[0.95rem]",
  lg: "h-[3.25rem] px-7 text-[1.0625rem]",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
};

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: CommonProps & ComponentProps<"button">) {
  const sizing = variant === "link" ? "" : sizes[size];
  return (
    <button
      className={`${base} ${variants[variant]} ${sizing} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
}: CommonProps & { href: string }) {
  const sizing = variant === "link" ? "" : sizes[size];
  const classes = `${base} ${variants[variant]} ${sizing} ${className}`;
  const isExternal = href.startsWith("http") || href.startsWith("#");
  if (isExternal) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
