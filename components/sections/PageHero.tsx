import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Reveal } from "@/components/ui/Reveal";

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
  children,
  icon: Icon,
  visual,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  crumbs?: { name: string; path: string }[];
  children?: ReactNode;
  icon?: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  visual?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-ice pb-14 pt-10 md:pb-20 md:pt-14">
      <div className="container-x relative">
        {crumbs && <Breadcrumbs items={crumbs} />}
        <div className={visual ? "grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12" : ""}>
        <Reveal className="max-w-3xl">
          {Icon && (
            <span className="mb-5 flex size-14 items-center justify-center rounded-[12px] border border-line bg-white text-brand shadow-card">
              <Icon aria-hidden className="size-7" />
            </span>
          )}
          {eyebrow && <p className="mb-3 text-[13px] font-medium uppercase tracking-[0.14em] text-eyebrow">{eyebrow}</p>}
          <h1 className="text-[2.2rem] font-semibold sm:text-5xl lg:text-[3.5rem]">{title}</h1>
          {description && <p className="mt-5 text-base text-body sm:text-lg lg:text-xl">{description}</p>}
          {children && <div className="mt-8 flex flex-col gap-3 sm:flex-row">{children}</div>}
        </Reveal>
        {visual && <Reveal delay={0.12}>{visual}</Reveal>}
        </div>
      </div>
    </section>
  );
}
