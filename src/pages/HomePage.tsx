import React from "react";
import {
  BUSINESS_NAME,
  TAGLINE,
  ADDRESS_LINE_1,
  ADDRESS_LINE_2,
  PHONE_NUMBER_DISPLAY,
  PHONE_NUMBER_TEL,
  CLOVER_PICKUP_URL,
  DOORDASH_URL
} from "../data/menu";

function cn(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

const QUICK_CATS = [
  { id: "soups", label: "Soups" },
  { id: "kebabs", label: "Kebabs" },
  { id: "lahmacun-pies", label: "Lahmacun & Pies" },
  { id: "sandwiches-wraps", label: "Sandwiches & Wraps" },
  { id: "breakfast", label: "Breakfast (New)" },
  { id: "desserts", label: "Desserts" },
  { id: "bakery", label: "Bakery" }
];

export default function HomePage() {
  const mapsQuery = encodeURIComponent(`${ADDRESS_LINE_1}, ${ADDRESS_LINE_2}`);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

  return (
    <div className="bg-transparent">
      {/* HERO */}
      <section className="border-b border-brand-border bg-brand-bg">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 md:text-5xl">
                {BUSINESS_NAME}
              </h1>

              <p className="mt-3 text-lg font-semibold text-zinc-700">
                {TAGLINE}
              </p>

              <p className="mt-2 text-sm font-semibold text-zinc-500">
                West Haven, CT • Turkish cuisine • Fresh bakery
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={CLOVER_PICKUP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-orange-500 px-5 py-3 text-sm font-extrabold text-white shadow hover:bg-orange-600"
                >
                  Pickup (Clover)
                </a>
                <a
                  href={DOORDASH_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-zinc-900 px-5 py-3 text-sm font-extrabold text-white hover:bg-black"
                >
                  Delivery (DoorDash)
                </a>

                <a
                  href="/menu"
                  className="rounded-full border border-brand-border bg-brand-surface px-5 py-3 text-sm font-extrabold text-zinc-900 hover:bg-brand-bg"
                >
                  View Menu
                </a>
              </div>

              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-zinc-700">
                <a href={`tel:${PHONE_NUMBER_TEL}`} className="hover:underline">
                  {PHONE_NUMBER_DISPLAY}
                </a>
                <a href={mapsUrl} target="_blank" rel="noreferrer" className="hover:underline">
                  {ADDRESS_LINE_1}, {ADDRESS_LINE_2}
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-brand-border bg-brand-surface shadow-sm">
              <img
                src="/images/hero.jpg"
                alt="Nazar food"
                className="h-72 w-full object-cover md:h-96"
              />
            </div>
          </div>
        </div>
      </section>

      {/* QUICK CATEGORY CHIPS */}
{/* QUICK CATEGORY CHIPS */}
<section className="bg-transparent">
  <div className="mx-auto max-w-6xl px-4 py-8">
    <div className="rounded-3xl border border-brand-border bg-brand-surface p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-extrabold text-zinc-900">Explore</h2>
        <a href="/menu" className="text-sm font-extrabold text-orange-700 hover:underline">
          Full menu →
        </a>
      </div>

      <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
        {QUICK_CATS.map((c) => (
          <a
            key={c.id}
            href="/menu"
            className={cn(
              "flex-shrink-0 rounded-full border border-brand-border bg-brand-surface px-4 py-2 text-sm font-extrabold text-zinc-800 hover:bg-zinc-50"
            )}
          >
            {c.label}
          </a>
        ))}
      </div>
    </div>
  </div>
</section>


      {/* POPULAR ITEMS (placeholder cards for now) */}
      <section className="bg-transparent">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-extrabold text-zinc-900">Popular</h2>
              <p className="mt-1 text-sm font-semibold text-zinc-600">
                Best sellers and customer favorites.
              </p>
            </div>
            <a href="/menu" className="text-sm font-extrabold text-orange-700 hover:underline">
              Browse menu →
            </a>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Lentil Soup", sub: "Mercimek", img: "/images/menu/lentil-soup.jpg" },
              { title: "Mixed Grill", sub: "Karışık Izgara", img: "/images/placeholder.jpg" },
              { title: "Lahmacun", sub: "Lahmacun", img: "/images/placeholder.jpg" }
            ].map((x) => (
              <a
                key={x.title}
                href="/menu"
                className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm hover:shadow-md transition"
              >
                <div className="h-44 bg-zinc-100">
                  <img src={x.img} alt={x.title} className="h-full w-full object-cover" />
                </div>
                <div className="p-4">
                  <p className="text-sm font-extrabold text-zinc-900">{x.title}</p>
                  <p className="mt-0.5 text-xs font-bold text-zinc-600">{x.sub}</p>
                  <p className="mt-3 text-xs font-extrabold text-orange-700">View details →</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
{/* VISIT US */}
<section className="bg-transparent">
  <div className="mx-auto max-w-6xl px-4 py-10">
    <h2 className="text-2xl font-extrabold text-zinc-900">Visit us</h2>

    <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
      {/* Left: Address/Phone */}
      <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
        <p className="text-sm font-extrabold text-zinc-900">Address</p>
        <a
          href={mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-2 block text-sm font-semibold text-zinc-700 hover:underline"
        >
          {ADDRESS_LINE_1}
          <br />
          {ADDRESS_LINE_2}
        </a>

        <p className="mt-5 text-sm font-extrabold text-zinc-900">Phone</p>
        <a
          href={`tel:${PHONE_NUMBER_TEL}`}
          className="mt-2 block text-sm font-semibold text-zinc-700 hover:underline"
        >
          {PHONE_NUMBER_DISPLAY}
        </a>

        <div className="mt-6 flex gap-2">
          <a
            href={CLOVER_PICKUP_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-brand-primary px-4 py-2 text-sm font-extrabold text-white hover:bg-brand-primaryHover"
          >
            Pickup
          </a>
          <a
            href={DOORDASH_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-brand-dark px-4 py-2 text-sm font-extrabold text-white hover:bg-brand-darkHover"
          >
            Delivery
          </a>
        </div>
      </div>

      {/* Right: Map */}
      <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
        <iframe
          title="Nazar on Google Maps"
          src="PASTE_YOUR_EMBED_URL_HERE"
          className="h-[300px] w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        <div className="flex items-center justify-between border-t border-brand-border px-4 py-3">
          <span className="text-xs font-semibold text-zinc-600">
            Tap to open directions
          </span>

          <a
            href={mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-extrabold text-brand-primary hover:underline"
          >
            Open in Google Maps →
          </a>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Mobile sticky CTA bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t bg-white/95 backdrop-blur md:hidden">
        <div className="mx-auto max-w-6xl px-4 py-3 flex gap-2">
          <a
            href={CLOVER_PICKUP_URL}
            target="_blank"
            rel="noreferrer"
            className="flex-1 rounded-full bg-orange-500 py-3 text-center text-sm font-extrabold text-white shadow hover:bg-orange-600"
          >
            Pickup
          </a>
          <a
            href={DOORDASH_URL}
            target="_blank"
            rel="noreferrer"
            className="flex-1 rounded-full bg-zinc-900 py-3 text-center text-sm font-extrabold text-white hover:bg-black"
          >
            Delivery
          </a>
        </div>
      </div>
    </div>
  );
}
