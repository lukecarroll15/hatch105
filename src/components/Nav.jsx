export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bone/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-10">
        <a href="#top" className="text-lg font-semibold tracking-[-0.02em] text-charcoal">
          Mirror
        </a>
        <nav className="hidden items-center gap-9 text-sm text-charcoal-muted md:flex">
          <a href="#how-it-works" className="transition-colors hover:text-charcoal">
            How it works
          </a>
          <a href="#pricing" className="transition-colors hover:text-charcoal">
            Pricing
          </a>
          <a href="#for-brands" className="transition-colors hover:text-charcoal">
            For brands
          </a>
        </nav>
        <a
          href="#install"
          className="inline-flex items-center rounded-full bg-charcoal px-4 py-2 text-xs font-medium text-bone transition-all hover:bg-terracotta sm:px-5 sm:text-sm"
        >
          Install on Shopify
        </a>
      </div>
    </header>
  );
}
