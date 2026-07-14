import { ArrowRight, Building2, Gauge, Users } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Develop people",
    body: "Train operators and build trade pathways first—so capability exists before anyone is deployed.",
    icon: Users,
  },
  {
    number: "02",
    title: "Operate places",
    body: "Self-perform the work inside facilities. We do the job, not just manage the vendors doing it.",
    icon: Building2,
  },
  {
    number: "03",
    title: "Drive performance",
    body: "Pair craft with operational intelligence so outcomes—reliability, cost, energy—actually improve.",
    icon: Gauge,
  },
];

export function AiSignal({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative overflow-hidden border border-border bg-white ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] gradient-ai" />

      <div className="relative border-b border-divider px-6 py-5 sm:px-8 sm:py-6">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-teal">
          How NEXFM works
        </p>
        <p className="mt-2 max-w-2xl font-display text-xl font-medium text-carbon sm:text-2xl">
          People first. Places next. Performance follows.
        </p>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate sm:text-base">
          Most facility providers start with vendors and activity reports. We
          start with the people who run the building—then connect that
          capability to the place and the outcome.
        </p>
      </div>

      <div className="relative grid md:grid-cols-[1fr_auto_1fr_auto_1fr]">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={step.title} className="contents">
              <div className="flex flex-col px-6 py-8 sm:px-8 sm:py-10">
                <div className="flex items-center gap-3">
                  <span className="font-display text-xs font-medium tracking-[0.18em] text-teal">
                    {step.number}
                  </span>
                  <Icon
                    className="h-5 w-5 text-teal"
                    strokeWidth={2}
                    aria-hidden
                  />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-carbon sm:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate sm:text-base">
                  {step.body}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div
                  className="hidden items-center justify-center border-x border-divider px-2 md:flex"
                  aria-hidden
                >
                  <div className="relative flex h-full min-h-[4rem] w-px items-center justify-center">
                    <div className="absolute inset-y-10 w-px bg-divider" />
                    <span className="relative z-10 flex h-9 w-9 items-center justify-center border border-border bg-white">
                      <ArrowRight
                        className="h-4 w-4 text-teal animate-flow-nudge"
                        strokeWidth={2}
                      />
                    </span>
                  </div>
                </div>
              )}

              {index < steps.length - 1 && (
                <div
                  className="flex items-center gap-2 border-t border-divider px-6 py-3 text-teal md:hidden"
                  aria-hidden
                >
                  <div className="h-px flex-1 bg-divider" />
                  <ArrowRight
                    className="h-4 w-4 animate-flow-nudge"
                    strokeWidth={2}
                  />
                  <div className="h-px flex-1 bg-divider" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="relative border-t border-divider bg-concrete/60 px-6 py-5 sm:px-8">
        <p className="font-display text-sm font-medium text-carbon sm:text-base">
          <span className="text-steel">Traditional FM:</span> manage vendors →
          measure activity
          <span className="mx-3 text-divider">|</span>
          <span className="text-teal">NEXFM:</span> develop people → operate
          places → improve performance
        </p>
      </div>
    </div>
  );
}
