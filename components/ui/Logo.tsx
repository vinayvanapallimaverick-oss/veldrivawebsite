import Image from "next/image";
import Link from "next/link";

export function LogoMark({ className = "size-9" }: { className?: string }) {
  return (
    <Image src="/images/logo-mark.png" alt="" aria-hidden width={554} height={397} className={`${className} object-contain`} />
  );
}

/** `light` = white logo for dark (footer) backgrounds. */
export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" aria-label="Veldriva home" className="inline-flex items-center">
      <Image
        src={light ? "/images/logo-white.png" : "/images/logo.png"}
        alt="Veldriva"
        width={1965}
        height={397}
        priority
        className={`w-auto ${light ? "h-9" : "h-9 sm:h-10"}`}
      />
    </Link>
  );
}
