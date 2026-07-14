import { Button } from "../Button";
import { Logo } from "../Logo";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 architectural-grid opacity-70" />
      <div className="pointer-events-none absolute -right-32 top-24 h-80 w-80 rounded-full opacity-[0.12] blur-3xl gradient-ai" />

      <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col justify-center px-6 py-24 lg:px-8 lg:py-28">
        <Logo size="hero" asLink={false} className="animate-fade-up" />
        <div className="mt-8 h-px w-16 bg-teal animate-draw-line" />

        <h1 className="animate-fade-up delay-1 mt-10 max-w-4xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-carbon sm:text-5xl lg:text-6xl">
          The Future of Facility Operations Isn&apos;t Outsourced. It&apos;s
          Built.
        </h1>

        <p className="animate-fade-up delay-2 mt-7 max-w-2xl text-lg leading-relaxed text-steel sm:text-xl">
          The most valuable asset in any building isn&apos;t the building.
          It&apos;s the people behind it.
        </p>

        <div className="animate-fade-up delay-3 mt-12">
          <Button href="#join">Keep Me Updated</Button>
        </div>
      </div>
    </section>
  );
}
