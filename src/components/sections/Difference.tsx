const pairs = [
  {
    them: "Most facility providers outsource the work.",
    us: "We invest in the workforce.",
  },
  {
    them: "Most manage vendors.",
    us: "We develop operators.",
  },
  {
    them: "Most measure activity.",
    us: "We focus on outcomes.",
  },
];

export function Difference() {
  return (
    <section id="difference" className="bg-concrete py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-teal">
            Why We&apos;re Different
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-carbon sm:text-4xl">
            Think less vendor.
            <br />
            More operating partner.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-steel sm:text-lg">
            Connecting people, places, and performance—without the recycled
            industry script.
          </p>
        </div>

        <div className="mt-16 space-y-0 border-t border-divider">
          {pairs.map((pair) => (
            <div
              key={pair.us}
              className="grid gap-3 border-b border-divider py-10 md:grid-cols-2 md:gap-12"
            >
              <p className="text-base leading-relaxed text-slate md:text-lg">
                {pair.them}
              </p>
              <p className="font-display text-xl font-medium leading-snug text-carbon md:text-2xl">
                {pair.us}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
