const profiles = [
  {
    title: "Design-led founders",
    body: "You built your brand on taste, not tactics. Mirror works the same way.",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80&auto=format&fit=crop",
    alt: "Considered interior with curated objects",
  },
  {
    title: "Repeat-visit categories",
    body: "Your buyers visit four or five times before they purchase. Mirror makes every return visit count.",
    image:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=80&auto=format&fit=crop",
    alt: "Warm living room with natural materials",
  },
  {
    title: "$500k–$2M Shopify stores",
    body: "Past survival mode, ready to optimise. Big enough that conversion uplift moves real revenue.",
    image:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80&auto=format&fit=crop",
    alt: "Modern showroom with linen sofa",
  },
];

export default function WhoItsFor() {
  return (
    <section
      id="for-brands"
      className="border-t border-line-soft bg-bone py-28 sm:py-36"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <div className="mb-5 text-[11px] font-medium uppercase tracking-[0.16em] text-charcoal-muted">
            Who it's for
          </div>
          <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-charcoal sm:text-5xl md:text-[56px]">
            Built for home decor brands that live and die on aesthetics.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {profiles.map((p) => (
            <article
              key={p.title}
              className="overflow-hidden rounded-2xl border border-line bg-bone-warm"
            >
              <div className="aspect-[4/3] overflow-hidden bg-bone">
                <img
                  src={p.image}
                  alt={p.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>
              <div className="p-7">
                <h3 className="text-xl font-semibold tracking-[-0.02em] text-charcoal">
                  {p.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-charcoal-muted">
                  {p.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
