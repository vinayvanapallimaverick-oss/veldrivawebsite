import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function Section({
  children,
  tone = "white",
  id,
  className = "",
}: {
  children: ReactNode;
  tone?: "white" | "soft" | "ice";
  id?: string;
  className?: string;
}) {
  const bg = tone === "soft" ? "bg-soft" : tone === "ice" ? "bg-ice" : "bg-white";
  return (
    <section id={id} className={`${bg} py-16 md:py-28 ${className}`}>
      <div className="container-x">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  as?: "h1" | "h2";
}) {
  const center = align === "center";
  return (
    <Reveal className={`mb-12 max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className="mb-3 text-[13px] font-medium uppercase tracking-[0.14em] text-eyebrow">{eyebrow}</p>
      )}
      <Tag className="text-[1.9rem] font-semibold sm:text-4xl lg:text-[2.6rem]">{title}</Tag>
      {description && <p className="mt-4 text-base text-body sm:text-lg">{description}</p>}
    </Reveal>
  );
}
