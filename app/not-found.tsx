import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="bg-ice py-24">
      <div className="container-x max-w-2xl text-center">
        <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-eyebrow">404</p>
        <h1 className="mt-3 text-4xl font-semibold">This page could not be found.</h1>
        <p className="mt-4 text-body">The page you&apos;re looking for may have moved or no longer exists.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/" arrow>Back to Home</Button>
          <Button href="/contact" variant="secondary">Contact Us</Button>
        </div>
      </div>
    </section>
  );
}
