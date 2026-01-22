
import { Link } from "react-router-dom";

const GOOGLE_RATING = 4.4;
const GOOGLE_REVIEW_COUNT = 20;

// You can replace this later with the exact Google review link (Place link)
const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=Nazar+Restaurant+%26+Bakery+West+Haven+reviews";

const REVIEWS = [
  {
    name: "Local Customer",
    text: "Great Turkish food, fresh and filling. The kebabs are delicious.",
  },
  {
    name: "DoorDash Customer",
    text: "Fast delivery and everything arrived hot. Lahmacun was amazing!",
  },
  {
    name: "First-time Visitor",
    text: "Friendly service and fair prices. We’ll be back.",
  },
];

function Stars({ value }: { value: number }) {
  const full = Math.floor(value); // 4 for 4.4
  const hasHalf = value - full >= 0.5; // true for 4.4? (false), 4.5+ (true)
  const empty = 5 - full - (hasHalf ? 1 : 0);

  return (
    <div className="flex items-center gap-2" aria-label={`${value} out of 5 stars`}>
      <div className="text-sm leading-none text-zinc-900">
        {"★".repeat(full)}
        {hasHalf ? "☆" : "" /* keeping simple; no half-star glyph */}
        {"☆".repeat(empty)}
      </div>
      <div className="text-sm font-semibold text-zinc-900">{value.toFixed(1)}</div>
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <main className="bg-brand-bg">
      {/* Header */}
      <section className="border-b bg-gradient-to-b from-zinc-50 to-white">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Reviews</h1>

          <div className="mt-3 flex flex-wrap items-center gap-3 text-zinc-600">
            <Stars value={GOOGLE_RATING} />
            <span className="text-sm">
              Rated on Google • {GOOGLE_REVIEW_COUNT} reviews
            </span>
          </div>

<div className="mt-6 flex flex-wrap gap-3">
  <a
    href={GOOGLE_REVIEWS_URL}
    target="_blank"
    rel="noreferrer"
    className="rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-900"
  >
    Read Google Reviews
  </a>

  <a
    href={GOOGLE_REVIEWS_URL}
    target="_blank"
    rel="noreferrer"
    className="rounded-xl border border-brand-border bg-white px-4 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
  >
    Write a Review
  </a>

  <Link
    to="/contact"
    className="rounded-xl border border-brand-border bg-white px-4 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
  >
    Contact us
  </Link>
</div>

        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        {/* Highlights grid */}
        <div className="rounded-3xl border border-brand-border bg-white p-6 shadow-sm">
          <div className="flex items-end justify-between gap-4">
            <div>
              <div className="text-sm font-semibold text-zinc-900">Customer highlights</div>
              <div className="mt-1 text-sm text-zinc-600">
                A few quick notes customers often mention (we can replace these with live pulls later).
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {REVIEWS.map((r) => (
              <div key={r.name} className="rounded-2xl border border-brand-border bg-white p-5">
                <div className="text-sm text-zinc-900">★★★★★</div>
                <p className="mt-3 text-sm text-zinc-700">“{r.text}”</p>
                <div className="mt-4 text-sm font-semibold text-zinc-900">{r.name}</div>
                <div className="text-xs text-zinc-500">West Haven, CT</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA box */}
        <div className="mt-8 rounded-3xl border border-brand-border bg-white p-6 shadow-sm">
          <div className="text-base font-bold text-zinc-900">Want to leave a review?</div>
          <p className="mt-2 text-sm text-zinc-600">
            Reviews help local customers find us — thank you for supporting a small business.
          </p>
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex rounded-xl bg-brand px-4 py-2 text-sm font-semibold text-white hover:bg-brand-dark"
          >
            Leave a Google Review
          </a>
        </div>
      </section>
    </main>
  );
}
