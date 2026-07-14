"use client";

import { useState, type FormEvent } from "react";
import { Button } from "../Button";

export function Join() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  }

  return (
    <section
      id="join"
      className="relative overflow-hidden bg-carbon py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0 architectural-grid-dark opacity-40" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full opacity-20 blur-3xl gradient-ai" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-teal">
            A Thought We Believe
          </p>
          <blockquote className="mt-8 font-display text-2xl font-medium leading-snug text-white sm:text-3xl lg:text-4xl">
            &ldquo;The condition of a facility will never exceed the capability
            of the people responsible for it.&rdquo;
          </blockquote>
        </div>

        <div className="mx-auto mt-16 max-w-xl border-t border-white/10 pt-14 text-center sm:mt-20 sm:pt-16">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-teal">
            Join the Journey
          </p>
          <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Want to learn more about NEXFM?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-label sm:text-lg">
            Enter your email and we&apos;ll keep you informed as we prepare for
            launch.
          </p>

          {submitted ? (
            <p className="mt-10 border border-white/15 bg-white/5 px-6 py-5 text-sm leading-relaxed text-white">
              Thank you. We&apos;ll be in touch as NEXFM takes shape.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:text-left"
            >
              <label className="sr-only" htmlFor="email">
                Email address
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="w-full border border-white/20 bg-white/5 px-4 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-muted-label focus:border-teal"
              />
              <Button type="submit" className="shrink-0 sm:px-8">
                Keep Me Updated
              </Button>
            </form>
          )}

          <p className="mt-12 font-display text-sm font-semibold uppercase tracking-[0.18em]">
            <span className="text-white">NEX</span>
            <span className="text-teal">FM</span>
          </p>
        </div>
      </div>
    </section>
  );
}
