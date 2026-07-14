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
    <section id="join" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-teal">
            Join the Journey
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-carbon sm:text-4xl">
            Want to learn more about NEXFM?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-steel sm:text-lg">
            Enter your email and we&apos;ll keep you informed as we prepare for
            launch.
          </p>

          {submitted ? (
            <p className="mt-10 border border-border bg-concrete px-6 py-5 text-sm leading-relaxed text-carbon">
              Thank you. We&apos;ll be in touch as NEXFM takes shape.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-10 flex flex-col gap-3 sm:flex-row"
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
                className="w-full border border-border bg-white px-4 py-3.5 text-sm text-carbon outline-none transition-colors placeholder:text-muted-label focus:border-teal"
              />
              <Button type="submit" className="shrink-0 sm:px-8">
                Keep Me Updated
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
