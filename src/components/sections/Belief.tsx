export function Belief() {
  return (
    <section className="relative overflow-hidden bg-carbon py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 architectural-grid-dark opacity-50" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full opacity-20 blur-3xl gradient-ai" />

      <div className="relative mx-auto max-w-6xl px-6 text-center lg:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-teal">
          A Thought We Believe
        </p>
        <blockquote className="mx-auto mt-8 max-w-3xl font-display text-2xl font-medium leading-snug text-white sm:text-3xl lg:text-4xl">
          &ldquo;The condition of a facility will never exceed the capability of
          the people responsible for it.&rdquo;
        </blockquote>
        <p className="mt-10 font-display text-sm font-semibold uppercase tracking-[0.18em]">
          <span className="text-white">NEX</span>
          <span className="text-teal">FM</span>
        </p>
      </div>
    </section>
  );
}
