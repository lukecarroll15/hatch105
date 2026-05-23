import DashboardMockup from "./DashboardMockup";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-20 sm:pt-28 lg:pt-32">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-10">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-bone-warm px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-charcoal-muted">
          <svg
            viewBox="0 0 109 124"
            className="h-3.5 w-auto"
            aria-hidden="true"
          >
            <path
              fill="#95BF47"
              d="M74.7 14.8c0-.4-.4-.7-.7-.7-.3 0-6.5-.5-6.5-.5s-4.3-4.3-4.8-4.8c-.5-.5-1.4-.3-1.8-.2-.1 0-1 .3-2.4.7-1.4-4-3.9-7.7-8.2-7.7h-.4C48.7.6 47.2 0 45.9 0c-10 0-14.8 12.5-16.3 18.8-3.9 1.2-6.7 2.1-7 2.2-2.2.7-2.2.7-2.5 2.8C19.9 25.3 14 70.6 14 70.6l45.6 8.5 24.7-5.3S74.7 15.2 74.7 14.8zM55.9 19.4c-2.4.7-5.2 1.6-8 2.5 .8-3.1 2.3-6.2 4.2-8.2 .7-.8 1.7-1.6 2.8-2.1 1.1 2.3 1.4 5.5 1 7.8zM47.4 4.6c.9 0 1.7.3 2.5.9-1.5.7-3 1.7-4.4 3.1-2.5 2.7-4.4 6.9-5.2 11-2.3.7-4.6 1.4-6.7 2.1 1.5-7 5.6-17.1 13.8-17.1zM48.8 58.1s-3.3-1.8-7.4-1.8c-6 0-6.3 3.8-6.3 4.7 0 5.1 13.4 7.1 13.4 19.2 0 9.5-6 15.6-14.2 15.6-9.8 0-14.8-6.1-14.8-6.1l2.6-8.7s5.1 4.4 9.4 4.4c2.8 0 4-2.2 4-3.9 0-6.7-11-7-11-18.1 0-9.3 6.7-18.4 20.2-18.4 5.2 0 7.8 1.5 7.8 1.5l-3.7 11.6z"
            />
            <path
              fill="#5E8E3E"
              d="M74 14.1c-.3 0-6.5-.5-6.5-.5s-4.3-4.3-4.8-4.8c-.2-.2-.4-.3-.7-.3l-3.4 114.9 24.7-5.3S74.7 15.2 74.7 14.8c0-.4-.4-.7-.7-.7z"
            />
            <path
              fill="#FFF"
              d="M49.5 46.5l-3 9.1s-2.7-1.4-6-1.4c-4.8 0-5 3-5 3.8 0 4.1 10.8 5.7 10.8 15.4 0 7.7-4.8 12.6-11.4 12.6-7.9 0-11.9-4.9-11.9-4.9l2.1-7s4.1 3.5 7.6 3.5c2.3 0 3.2-1.8 3.2-3.1 0-5.4-8.9-5.6-8.9-14.5 0-7.5 5.4-14.8 16.3-14.8 4.2 0 6.2 1.3 6.2 1.3z"
            />
          </svg>
          Built for Shopify
        </div>

        <h1 className="text-5xl font-semibold leading-[1.02] tracking-[-0.045em] text-charcoal sm:text-6xl md:text-7xl lg:text-[84px]">
          Your storefront,
          <br />
          rebuilt for every visitor.
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-charcoal-muted sm:text-xl">
          Every returning shopper sees a different homepage — built from the
          products they actually browsed, saved, and abandoned. No quiz, no
          login, no theme edits.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center rounded-full bg-charcoal px-7 py-3.5 text-sm font-medium text-bone transition-all hover:bg-terracotta"
          >
            See How It Works          </a>
         
        </div>
      </div>

      <DashboardMockup />
    </section>
  );
}
  