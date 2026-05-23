export default function Footer() {
  return (
    <footer className="border-t border-line bg-bone py-12">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <div className="text-lg font-semibold tracking-[-0.02em] text-charcoal">
              Mirror
            </div>
            <div className="mt-1 text-sm text-charcoal-muted">
              Personalisation for design-led commerce.
            </div>
          </div>
          <nav className="flex items-center gap-7 text-sm text-charcoal-muted">
            <a href="#" className="transition-colors hover:text-charcoal">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-charcoal">
              Terms
            </a>
            <a href="#" className="transition-colors hover:text-charcoal">
              Contact
            </a>
          </nav>
        </div>
        <div className="mt-10 border-t border-line-soft pt-6 text-xs text-charcoal-soft">
          © 2026 Mirror. Built in Dublin.
        </div>
      </div>
    </footer>
  );
}
