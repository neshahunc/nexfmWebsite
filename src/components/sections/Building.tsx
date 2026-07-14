import { AiSignal } from "../AiSignal";

const items = [
  "Self Performed Facility Operations",
  "Trade Pathway Workforce Development Program",
  "Operational Intelligence Platform",
  "Asset Reliability and Maintenance Programs",
  "Energy and Sustainability Solutions",
  "Community Focused Career Development",
];

export function Building() {
  return (
    <section id="building" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-teal">
            What We&apos;re Building
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-carbon sm:text-4xl">
            Simple to say. Hard to fake.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-steel sm:text-lg">
            Not a vendor catalog. A company being built around people, craft,
            and outcomes that last.
          </p>
        </div>

        <div className="mt-12 sm:mt-14">
          <AiSignal />
        </div>

        <ul className="mt-16 grid gap-0 border-t border-divider sm:grid-cols-2">
          {items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-4 border-b border-divider py-6 pr-6"
            >
              <span
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal"
                aria-hidden
              />
              <span className="font-display text-lg font-medium text-carbon sm:text-xl">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
