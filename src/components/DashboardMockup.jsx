import { useEffect, useState } from "react";

const beforeTiles = [
  {
    title: "Linen Sofa",
    alt: "Neutral linen sofa",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80&auto=format&fit=crop",
  },
  {
    title: "Floor Lamp",
    alt: "Minimal floor lamp",
    image:
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&q=80&auto=format&fit=crop",
  },
  {
    title: "Wool Rug",
    alt: "Wool area rug",
    image:
      "https://images.unsplash.com/photo-1600166898405-da9535204843?w=400&q=80&auto=format&fit=crop",
  },
  {
    title: "Stone Vase",
    alt: "Stone vase on table",
    image:
      "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=400&q=80&auto=format&fit=crop",
  },
];

const afterTiles = [
  {
    title: "Sahara Armchair",
    alt: "Rattan armchair",
    image:
      "https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=400&q=80&auto=format&fit=crop",
  },
  {
    title: "Woven Pendant",
    alt: "Woven rattan pendant",
    image:
      "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=400&q=80&auto=format&fit=crop",
  },
  {
    title: "Jute Rug",
    alt: "Natural jute rug",
    image:
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=400&q=80&auto=format&fit=crop",
  },
  {
    title: "Linen Throw",
    alt: "Linen throw blanket",
    image:
      "https://images.unsplash.com/photo-1522444690501-fbb4c54f8a37?w=400&q=80&auto=format&fit=crop",
  },
];

const story = [
  {
    n: 1,
    stage: "Observed",
    when: "Day 1",
    body: "Sarah landed via a Pinterest pin for a boho living room. Mirror dropped a first-party cookie and logged what held her attention — scroll-pause, filters used, items added then dropped.",
  },
  {
    n: 2,
    stage: "Learned",
    when: "Days 3–7",
    body: "Three sessions in, the pattern was clear: dwell time spiked on rattan and natural-materials products, she filtered warm neutrals every visit, she saved a Woven Pendant but didn't buy. A style fingerprint built from behaviour — no quiz, no survey.",
  },
  {
    n: 3,
    stage: "Rebuilt",
    when: "Day 10 — today",
    body: "On her 3rd return, Mirror rebuilt the storefront server-side before first paint. The hero became a Welcome Back anchored to her cart. The product grid re-ranked to lead with the materials she actually lingers on.",
  },
];

const BEFORE_HOLD_MS = 5000;
const AFTER_HOLD_MS = 7000;

function useBeforeAfter() {
  const [isAfter, setIsAfter] = useState(false);
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setIsAfter(true);
      return;
    }
    const id = setTimeout(
      () => setIsAfter((v) => !v),
      isAfter ? AFTER_HOLD_MS : BEFORE_HOLD_MS,
    );
    return () => clearTimeout(id);
  }, [isAfter]);
  return isAfter;
}

function StepBadge({ n }) {
  return (
    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-terracotta-deep text-[13px] font-semibold text-bone-warm shadow-sm">
      {n}
    </div>
  );
}

function Tile({ before, after, swapped }) {
  return (
    <div className="relative overflow-hidden rounded-md border border-line bg-bone-warm">
      <div className="relative aspect-square w-full overflow-hidden">
        <img
          src={before.image}
          alt={before.alt}
          loading="lazy"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            swapped ? "opacity-0" : "opacity-100"
          }`}
        />
        <img
          src={after.image}
          alt={after.alt}
          loading="lazy"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            swapped ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
      <div className="px-3 py-2.5">
        <div className="truncate text-[13px] font-medium text-charcoal">
          {swapped ? after.title : before.title}
        </div>
        <div className="text-[11px] text-charcoal-muted">From $—</div>
      </div>
    </div>
  );
}

function StoryCard({ n, stage, when, body }) {
  return (
    <div className="flex h-full flex-col rounded-xl border border-line bg-bone-warm p-5">
      <div className="flex items-center gap-3">
        <StepBadge n={n} />
        <div className="min-w-0">
          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-terracotta-deep">
            {stage}
          </div>
          <div className="text-[11px] text-charcoal-muted">{when}</div>
        </div>
      </div>
      <p className="mt-4 text-[14px] leading-relaxed text-charcoal">{body}</p>
    </div>
  );
}

export default function DashboardMockup() {
  const isAfter = useBeforeAfter();

  return (
    <figure className="mx-auto mt-16 max-w-5xl px-2 sm:mt-20 sm:px-4">
      {/* State label */}
      <div className="mb-5 flex items-center justify-center gap-4">
        <span
          className={`h-px max-w-[80px] flex-1 transition-colors duration-500 ${
            isAfter ? "bg-terracotta/40" : "bg-line"
          }`}
          aria-hidden="true"
        />
        <div className="relative h-5 min-w-[280px] text-center sm:min-w-[400px]">
          <div
            className={`absolute inset-x-0 text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal-muted transition-opacity duration-500 ${
              isAfter ? "opacity-0" : "opacity-100"
            }`}
          >
            What every visitor sees
          </div>
          <div
            className={`absolute inset-x-0 text-[11px] font-semibold uppercase tracking-[0.2em] text-terracotta-deep transition-opacity duration-500 ${
              isAfter ? "opacity-100" : "opacity-0"
            }`}
          >
            What VST_4827 sees on her 3rd visit
          </div>
        </div>
        <span
          className={`h-px max-w-[80px] flex-1 transition-colors duration-500 ${
            isAfter ? "bg-terracotta/40" : "bg-line"
          }`}
          aria-hidden="true"
        />
      </div>

      {/* Browser-chrome storefront card */}
      <div className="overflow-hidden rounded-2xl border border-line bg-bone-warm shadow-[0_60px_120px_-40px_rgba(110,86,56,0.18),0_0_0_1px_rgba(255,255,255,0.02)]">
        {/* Browser chrome */}
        <div className="flex items-center gap-3 border-b border-line bg-bone-warm px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-charcoal-soft/50" aria-hidden="true" />
            <span className="h-2.5 w-2.5 rounded-full bg-charcoal-soft/50" aria-hidden="true" />
            <span className="h-2.5 w-2.5 rounded-full bg-charcoal-soft/50" aria-hidden="true" />
          </div>
          <div className="mx-auto flex items-center gap-2 rounded-md bg-bone px-3 py-1 text-[12px] text-charcoal-muted">
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path
                d="M3.5 5.5V4a2.5 2.5 0 015 0v1.5M2.5 5.5h7v5h-7v-5z"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            hearthandbone.com
          </div>
          <div className="w-12" aria-hidden="true" />
        </div>

        {/* Hero */}
        <div className="relative aspect-[16/8] w-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200&q=80&auto=format&fit=crop"
            alt="Generic neutral interior"
            loading="lazy"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              isAfter ? "opacity-0" : "opacity-100"
            }`}
          />
          <img
            src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=1200&q=80&auto=format&fit=crop"
            alt="Rattan and boho styled living interior"
            loading="lazy"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              isAfter ? "opacity-100" : "opacity-0"
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-charcoal/10 to-charcoal/65" />

          {/* Hero copy — cross-fades with image */}
          <div className="absolute inset-x-0 bottom-6 px-6 sm:bottom-8 sm:px-10">
            <div className="relative h-[68px] sm:h-[84px]">
              <div
                className={`absolute inset-0 transition-opacity duration-700 ${
                  isAfter ? "opacity-0" : "opacity-100"
                }`}
              >
                <div className="text-2xl font-semibold leading-tight tracking-[-0.02em] text-white sm:text-3xl">
                  New arrivals
                </div>
                <div className="mt-2 text-sm text-white/85 sm:text-base">
                  Shop the season's latest pieces
                </div>
              </div>
              <div
                className={`absolute inset-0 transition-opacity duration-700 ${
                  isAfter ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="text-2xl font-semibold leading-tight tracking-[-0.02em] text-white sm:text-3xl">
                  Welcome back, Sarah.
                </div>
                <div className="mt-2 text-sm text-white/85 sm:text-base">
                  Still thinking about the Sahara armchair?
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tiles */}
        <div className="grid grid-cols-4 gap-3 p-4 sm:gap-4 sm:p-5">
          {beforeTiles.map((before, i) => (
            <Tile
              key={before.title}
              before={before}
              after={afterTiles[i]}
              swapped={isAfter}
            />
          ))}
        </div>
      </div>

      {/* Story — static, narrates the mechanism */}
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {story.map((s) => (
          <StoryCard key={s.n} {...s} />
        ))}
      </div>

      <figcaption className="mt-8 text-center text-sm text-charcoal-muted">
        Same store, same visitor — rebuilt from what she actually browsed.
      </figcaption>
    </figure>
  );
}
