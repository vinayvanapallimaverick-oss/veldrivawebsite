"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

/** Headline that reveals word by word. */
export function WordReveal({ text, className }: { text: string; className?: string }) {
  const reduce = useReducedMotion();
  const words = text.split(" ");
  if (reduce) return <span className={className}>{text}</span>;
  return (
    <span className={className} aria-label={text}>
      {words.map((w, i) => (
        <span key={i} aria-hidden className="inline-block overflow-hidden pb-[0.12em] align-top">
          <motion.span
            className="inline-block"
            initial={{ y: "105%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1 + i * 0.09, ease }}
          >
            {w}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/** Fades children in on mount, one after another. */
export function Intro({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

/** Connector line that draws itself when scrolled into view. */
export function DrawLine({ className, vertical = false, delay = 0 }: { className?: string; vertical?: boolean; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.span
      aria-hidden
      className={className}
      style={{ transformOrigin: vertical ? "top" : "left" }}
      initial={reduce ? false : vertical ? { scaleY: 0 } : { scaleX: 0 }}
      whileInView={vertical ? { scaleY: 1 } : { scaleX: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.8, delay, ease }}
    />
  );
}

/** Thin reading/scroll progress bar. */
export function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });
  if (reduce) return null;
  return <motion.div aria-hidden className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-muted" style={{ scaleX }} />;
}

/** Smooth entrance for dropdown panels. */
export function Pop({ children, className, id }: { children: ReactNode; className?: string; id?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      id={id}
      className={className}
      initial={reduce ? false : { opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22, ease }}
    >
      {children}
    </motion.div>
  );
}
