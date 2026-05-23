const steps = [
  {
    number: "01",
    title: "Install",
    body: "Add the Mirror app from the Shopify App Store. It drops a lightweight script into your theme — no code changes, no theme edits.",
  },
  {
    number: "02",
    title: "Mirror reads the signals",
    body: "On each visit, Mirror tags every product a shopper views, lingers on, saves, or abandons — by material, palette, style, and price band. Those tags compound into a per-visitor preference profile, tied to a cookie. No login required, no PII.",
  },
  {
    number: "03",
    title: "The storefront rewrites itself",
    body: "On the next visit, your hero swaps to the category they spent most time in, product grids reorder by tag overlap with their profile, and abandoned items resurface in a dedicated row — instead of the same homepage everyone else sees.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="border-t border-line-soft bg-bone py-28 sm:py-36"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <div className="mb-5 text-[11px] font-medium uppercase tracking-[0.16em] text-charcoal-muted">
            How it works
          </div>
          <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-charcoal sm:text-5xl md:text-[56px]">
            Three steps. Five minutes to install.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.number}
              className="group relative flex flex-col bg-bone-warm p-8 sm:p-10"
            >
              <div className="font-mono text-5xl font-medium tracking-[-0.04em] text-terracotta sm:text-6xl">
                {step.number}
              </div>
              <h3 className="mt-6 text-2xl font-semibold tracking-[-0.02em] text-charcoal">
                {step.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-charcoal-muted">
                {step.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
