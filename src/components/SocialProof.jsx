const brands = [
  "Hearth & Bone",
  "Studio Verde",
  "Linden Co.",
  "North Atelier",
  "Marrow Home",
  "Soft Object",
];

export default function SocialProof() {
  return (
    <section className="border-t border-line-soft bg-bone py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="text-center text-[11px] font-medium uppercase tracking-[0.2em] text-charcoal-muted">
          Built for brands like
        </div>
        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 md:grid-cols-6">
          {brands.map((b) => (
            <div
              key={b}
              className="text-center text-sm font-semibold tracking-[-0.015em] text-charcoal/55 sm:text-base"
            >
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
