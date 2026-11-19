"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { mainNav } from "@/lib/site";
import { MegaMenu } from "./MegaMenu";
import { MobileNavigation } from "./MobileNavigation";
import { ScrollProgress } from "@/components/ui/Motion";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const servicesRef = useRef<HTMLLIElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const isActive = useCallback(
    (href: string) => (href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/")),
    [pathname],
  );

  const closeAll = useCallback(() => {
    setMegaOpen(false);
    setMobileOpen(false);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    closeAll();
  }, [pathname, closeAll]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeAll();
    };
    const onClick = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) setMegaOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [closeAll]);

  const openMega = () => {
    clearTimeout(closeTimer.current);
    setMegaOpen(true);
  };
  const delayedClose = () => {
    closeTimer.current = setTimeout(() => setMegaOpen(false), 120);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,box-shadow,border-color] duration-200 ${
        scrolled || mobileOpen ? "border-b border-line bg-white shadow-[0_2px_10px_rgba(81,44,56,0.07)]" : "border-b border-line bg-white"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between gap-6">
        <Logo />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {mainNav
              .filter((l) => l.href !== "/")
              .map((l) =>
                l.href === "/services" ? (
                  <li
                    key={l.href}
                    ref={servicesRef}
                    className="relative"
                    onMouseEnter={openMega}
                    onMouseLeave={delayedClose}
                  >
                    <div className="flex items-center">
                      <Link
                        href={l.href}
                        aria-current={isActive(l.href) ? "page" : undefined}
                        className={`rounded-lg py-2 pl-3 text-[15px] font-medium transition-colors hover:text-brand ${isActive(l.href) ? "text-brand" : "text-navy"}`}
                      >
                        {l.label}
                      </Link>
                      <button
                        type="button"
                        aria-label="Services menu"
                        aria-expanded={megaOpen}
                        aria-controls="services-menu"
                        onClick={() => setMegaOpen((v) => !v)}
                        className="flex size-8 items-center justify-center rounded-lg text-navy hover:text-brand"
                      >
                        <ChevronDown aria-hidden className={`size-4 transition-transform duration-200 ${megaOpen ? "rotate-180" : ""}`} />
                      </button>
                    </div>
                    {megaOpen && <MegaMenu onNavigate={closeAll} />}
                  </li>
                ) : (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      aria-current={isActive(l.href) ? "page" : undefined}
                      className={`relative rounded-lg px-3 py-2 text-[15px] font-medium transition-colors hover:text-brand ${isActive(l.href) ? "text-brand" : "text-navy"}`}
                    >
                      {l.label}
                      {isActive(l.href) && <span aria-hidden className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-brand" />}
                    </Link>
                  </li>
                ),
              )}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden min-h-11 items-center rounded-[10px] bg-brand px-5 text-[15px] font-medium text-white transition-colors hover:bg-brand-dark sm:inline-flex"
          >
            Let&apos;s Talk
          </Link>
          <button
            type="button"
            className="flex size-11 items-center justify-center rounded-[10px] border border-line text-navy lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X aria-hidden className="size-5" /> : <Menu aria-hidden className="size-5" />}
          </button>
        </div>
      </div>
      {mobileOpen && <MobileNavigation isActive={isActive} onNavigate={closeAll} />}
      <ScrollProgress />
    </header>
  );
}
