import Image from "next/image";
import { Button } from "../Button";
import { Logo } from "../Logo";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden bg-carbon">
      <Image
        src="/images/hero-architecture.jpg"
        alt="Modern glass architecture rising against an open sky"
        fill
        preload
        fetchPriority="high"
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-carbon via-carbon/80 to-carbon/35" />
      <div className="absolute inset-0 architectural-grid-dark opacity-35" />
      <div className="pointer-events-none absolute -right-20 top-1/4 h-96 w-96 rounded-full opacity-25 blur-3xl gradient-ai" />

      <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col justify-end px-6 pb-20 pt-28 lg:px-8 lg:pb-28">
        <div className="max-w-4xl">
          <Logo
            size="hero"
            asLink={false}
            onDark
            className="animate-fade-up"
          />
          <div className="mt-8 h-px w-16 bg-teal animate-draw-line" />

          <h1 className="animate-fade-up delay-1 mt-10 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            The Future of Facility Operations Isn&apos;t Outsourced. It&apos;s
            Built.
          </h1>

          <p className="animate-fade-up delay-2 mt-7 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
            The most valuable asset in any building isn&apos;t the building.
            It&apos;s the people behind it.
          </p>

          <div className="animate-fade-up delay-3 mt-12">
            <Button href="#join">Keep Me Updated</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
