const features = [
  "Full storefront personalisation across hero, recommendations, and abandoned-item surfaces",
  "Unlimited returning-visitor tracking",
  "Style fingerprint engine",
  "A/B testing built in",
  "Merchant analytics dashboard",
  "White-glove onboarding",
];

function Check() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      className="mt-1 flex-none"
    >
      <path
        d="M2.5 7.5l3 3 6-6.5"
        stroke="#8B6F4E"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="border-t border-line-soft bg-bone py-28 sm:py-36"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 text-[11px] font-medium uppercase tracking-[0.16em] text-charcoal-muted">
            Pricing
          </div>
          <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-charcoal sm:text-5xl md:text-[56px]">
            One plan. Every feature.
          </h2>
        </div>

        <div className="mx-auto mt-16 max-w-xl rounded-2xl border border-line bg-bone-warm p-8 shadow-[0_40px_80px_-40px_rgba(31,36,25,0.2),0_8px_24px_-12px_rgba(31,36,25,0.08)] sm:p-12">
          <div className="text-center">
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-7xl font-semibold tracking-[-0.04em] text-charcoal sm:text-8xl">
                $89
              </span>
            </div>
            <div className="mt-2 text-sm text-charcoal-muted">per month</div>
            <p className="mt-4 text-sm text-charcoal-muted">
              14-day free trial. Cancel anytime. No credit card required.
            </p>
          </div>

          <div className="my-8 h-px bg-line" />

          <ul className="space-y-4">
            {features.map((f) => (
              <li
                key={f}
                className="flex items-start gap-3 text-[15px] leading-relaxed text-charcoal"
              >
                <Check />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <a
            href="#install"
            className="mt-10 flex w-full items-center justify-center rounded-full bg-charcoal px-7 py-4 text-sm font-medium text-bone transition-all hover:bg-terracotta"
          >
            Install on Shopify
          </a>
        </div>
      </div>
    </section>
  );
}
