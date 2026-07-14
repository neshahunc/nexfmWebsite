export function ComingSoon() {
  return (
    <section className="bg-concrete py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-teal">
            Coming Soon
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-carbon sm:text-4xl">
            We&apos;re building a different kind of facility operations company.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-steel">
            We believe extraordinary facilities begin with extraordinary people.
          </p>

          <div className="mt-12 space-y-6 border-l border-divider pl-6 sm:pl-8">
            {[
              "One that develops people before deploying them.",
              "One that believes workforce development and operational excellence are inseparable.",
              "One that combines self-performed facility services, operational intelligence, and technology to create better outcomes.",
            ].map((line) => (
              <p key={line} className="text-base leading-relaxed text-slate sm:text-lg">
                {line}
              </p>
            ))}
          </div>

          <p className="mt-12 text-sm leading-relaxed text-steel">
            We&apos;re currently building our platform and preparing for launch.
          </p>

          <p className="mt-10 max-w-2xl text-sm leading-relaxed text-slate">
            Being built by real people—including{" "}
            <span className="font-medium text-carbon">Lina</span> and{" "}
            <span className="font-medium text-carbon">Bashar</span>—not a
            marketing department rewriting the same facilities playbook.
          </p>
        </div>
      </div>
    </section>
  );
}
