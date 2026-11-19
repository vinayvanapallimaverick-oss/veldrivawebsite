import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "light" | "outlineLight";

const styles: Record<Variant, string> = {
  primary: "bg-brand text-white hover:bg-brand-dark",
  secondary: "bg-white text-brand border border-[#D8C6CA] hover:border-brand hover:bg-ice",
  light: "bg-white text-brand hover:bg-soft",
  outlineLight: "border border-white/70 bg-transparent text-white hover:bg-white/10",
};

export function Button({
  href,
  children,
  variant = "primary",
  arrow = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex min-h-12 items-center justify-center gap-2 rounded-[10px] px-6 py-3 text-[15px] font-medium transition-colors duration-200 ${styles[variant]} ${className}`}
    >
      {children}
      {arrow && <ArrowRight aria-hidden className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />}
    </Link>
  );
}

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="group inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-dark">
      {children}
      <ArrowRight aria-hidden className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
    </Link>
  );
}
