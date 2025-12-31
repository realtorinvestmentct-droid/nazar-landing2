import { useEffect, useMemo, useState } from "react";


/**
 * Nazar Restaurant & Bakery — Campaign Landing Page (single-file)
 *
 * ✅ Fixes applied:
 * - Removed broken/unterminated strings
 * - Corrected orderLinks + orderButtons structure
 * - Corrected countdown state string
 */

export default function NazarLandingPage() {
  // === EDIT THESE ===
  const BRAND = {
    name: "Nazar Restaurant & Bakery",
    city: "West Haven, CT",
    addressLine1: "39 Elm St Unit 1",
    addressLine2: "West Haven, CT 06516",
    phoneDisplay: "(203) 408-2697",
    phoneTel: "+12034082697",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=39+Elm+St+Unit+1+West+Haven+CT+06516",
    orderLinks: {
      doordash:
        "https://www.doordash.com/store/nazar-restaurant-&-bakery-west-haven-34962973/73317566/?event_type=autocomplete&pickup=false",
      ubereats:
        "https://www.ubereats.com/store/nazar-restaurant-%26-bakery-west-haven/miDkOS7wSnGYWrbqFRJAEg?diningMode=PICKUP&ps=1&sc=SEARCH_SUGGESTION",
      grubhub:
        "https://www.grubhub.com/restaurant/nazar-bakery--fast-food-39-elm-st-west-haven/12070448",
      seamless:
        "https://www.seamless.com/menu/nazar-bakery--fast-food-39-elm-st-west-haven/12070448",
    },
    social: {
      instagram: "https://www.instagram.com/nazarbakeryrestaurant/",
      // If you prefer the newer FB page, swap this with: https://www.facebook.com/61581869585688/
      facebook: "https://www.facebook.com/61577973072111/",
      // TikTok isn't confirmed yet — we'll set this after you create/confirm the handle.
      tiktok: "https://www.tiktok.com/@nazarrestaurantandbakery",
    },
  };

  const CAMPAIGN = {
    name: "Comeback Week",
    // Replace with a real end date/time (local time) for urgency.
    endsAtLocalISO: "2026-01-10T21:00:00",
    headline: "Fresh Turkish flavors—fast, filling, and made with care.",
    subheadline:
      "Order online in seconds, or stop by for hot kebabs, döner, pide, börek, and desserts.",
    primaryOffer: {
      title: "Limited-time deal",
      badge: "This week only",
      details: "Save 15% on online orders $25+ with code: NAZAR15",
      finePrint:
        "Valid for online orders only. One per customer. Exclusions may apply.",
      promoCode: "NAZAR15",
    },
    influencer: {
      placeholderCode: "INSTA10",
    },
  };

  // Featured items (swap with your best sellers)
  const featured = useMemo(
    () => [
      {
        title: "Chicken Döner (Gyro)",
        desc: "Marinated chicken, slow-roasted and sliced thin—wrap or sandwich.",
        tag: "Popular",
      },
      {
        title: "Kaşarlı Pide (Cheese Pie)",
        desc: "Classic Turkish pide baked hot—cheesy, comforting, shareable.",
        tag: "Bakery",
      },
      {
        title: "Mixed Grill",
        desc: "A hearty plate for serious appetites—perfect for groups.",
        tag: "Dinner",
      },
      {
        title: "Sigara Böreği",
        desc: "Crispy cheese rolls—easy add-on, always a hit.",
        tag: "Appetizer",
      },
    ],
    []
  );

  // Simple countdown
  const [countdown, setCountdown] = useState("");
  useEffect(() => {
    const tick = () => {
      const end = new Date(CAMPAIGN.endsAtLocalISO).getTime();
      const now = Date.now();
      const diff = Math.max(0, end - now);
      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / (1000 * 60)) % 60);
      const s = Math.floor((diff / 1000) % 60);
      setCountdown(diff === 0 ? "Ends soon" : `${d}d ${h}h ${m}m ${s}s`);
    };
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [CAMPAIGN.endsAtLocalISO]);

  // UTM + referral capture (simple attribution)
  const [channelCode, setChannelCode] = useState("");
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const codeFromUrl =
      params.get("code") || params.get("promo") || params.get("ref") || "";
    if (codeFromUrl) setChannelCode(codeFromUrl);
  }, []);

  // NOTE: Don’t append tracking params to delivery-app links.
// Some platforms break or redirect when unknown query params are added.
const orderButtons = [
    { label: "DoorDash", href: BRAND.orderLinks.doordash },
    { label: "Uber Eats", href: BRAND.orderLinks.ubereats },
    { label: "Grubhub", href: BRAND.orderLinks.grubhub },
    { label: "Seamless", href: BRAND.orderLinks.seamless },
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* Sticky quick actions (mobile-first) */}
      <div className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-3">
          <div className="min-w-0">
            <div className="truncate text-sm font-semibold">{BRAND.name}</div>
            <div className="truncate text-xs text-zinc-600">{BRAND.city}</div>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <a
              href={BRAND.googleMapsUrl}
              className="rounded-full border px-3 py-2 text-xs font-medium hover:bg-zinc-50"
            >
              Directions
            </a>
            <a
              href={`tel:${BRAND.phoneTel}`}
              className="rounded-full border px-3 py-2 text-xs font-medium hover:bg-zinc-50"
            >
              Call
            </a>
            <a
              href="#order"
              className="rounded-full bg-zinc-900 px-3 py-2 text-xs font-semibold text-white hover:bg-zinc-800"
            >
              Order
            </a>
          </div>
        </div>
      </div>

      {/* Hero */}
      <header className="mx-auto max-w-6xl px-4 pb-10 pt-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              {CAMPAIGN.name} • Countdown: {countdown}
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
              {CAMPAIGN.headline}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-zinc-700 sm:text-lg">
              {CAMPAIGN.subheadline}
            </p>

            {/* Offer */}
            <div className="mt-6 rounded-2xl border bg-zinc-50 p-5">
              <div className="flex items-center justify-between gap-3">
                <div className="text-sm font-semibold">
                  {CAMPAIGN.primaryOffer.title}
                </div>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-zinc-700">
                  {CAMPAIGN.primaryOffer.badge}
                </span>
              </div>
              <div className="mt-3 text-lg font-bold">
                {CAMPAIGN.primaryOffer.details}
              </div>
              <div className="mt-1 text-xs text-zinc-600">
                {CAMPAIGN.primaryOffer.finePrint}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() =>
                    navigator.clipboard?.writeText(CAMPAIGN.primaryOffer.promoCode)
                  }
                  className="rounded-full border bg-white px-4 py-2 text-sm font-semibold hover:bg-zinc-50"
                >
                  Copy code
                </button>
                <a
                  href="#order"
                  className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-800"
                >
                  Use it to order
                </a>
              </div>
            </div>

            {/* Tracking */}
            <div className="mt-6 rounded-2xl border p-5">
              <div className="text-sm font-semibold">
                Tracking (for ads & influencers)
              </div>
              <p className="mt-1 text-sm text-zinc-700">
                If you came from an ad or influencer, enter the referral code so
                we can track results.
              </p>
              <div className="mt-3 flex flex-col gap-2 sm:flex-row">
                <input
                  value={channelCode}
                  onChange={(e) => setChannelCode(e.target.value)}
                  placeholder={`Example: ${CAMPAIGN.influencer.placeholderCode}`}
                  className="w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-zinc-300"
                />
                <a
                  href="#order"
                  className="rounded-xl bg-zinc-900 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-zinc-800"
                >
                  Apply & order
                </a>
              </div>
              <p className="mt-2 text-xs text-zinc-500">
                Tip: You can also pass a code via URL like ?code=INSTA10
              </p>
            </div>
          </div>

          {/* Image placeholder */}
          <div className="rounded-3xl border bg-gradient-to-br from-zinc-50 to-white p-6">
            <div className="rounded-2xl border bg-white p-5">
              <div className="text-xs font-semibold text-zinc-600">
                Add your best food photo here
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {featured.map((item) => (
                  <div key={item.title} className="rounded-2xl border p-4">
                    <div className="flex items-start justify-between gap-2">
                      <div className="text-sm font-semibold">{item.title}</div>
                      <span className="rounded-full bg-zinc-100 px-2 py-1 text-[11px] font-semibold text-zinc-700">
                        {item.tag}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-zinc-700">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-2xl bg-zinc-50 p-4 text-sm text-zinc-700">
                <div className="font-semibold">Pro tip</div>
                <div className="mt-1">
                  Replace this box with: (1) a short 10–20 sec video, (2) 3 top
                  food photos, and (3) a “Why people love us” line.
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Order section */}
      <section id="order" className="border-t bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold">Order online</h2>
              <p className="mt-2 text-zinc-700">
                Choose your platform. Use promo code{" "}
                <span className="font-semibold">
                  {CAMPAIGN.primaryOffer.promoCode}
                </span>
                .
              </p>
              {channelCode ? (
                <p className="mt-1 text-sm text-zinc-600">
                  Referral code applied:{" "}
                  <span className="font-semibold">{channelCode}</span>
                </p>
              ) : null}
            </div>
            <a
              href={BRAND.googleMapsUrl}
              className="rounded-full border bg-white px-4 py-2 text-sm font-semibold hover:bg-zinc-100"
            >
              Prefer pickup? Get directions
            </a>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {orderButtons.map((b) => (
              <a
                key={b.label}
                href={b.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-zinc-200 hover:ring-zinc-300"
              >
                <div className="text-sm font-semibold">{b.label}</div>
                <div className="mt-1 text-xs text-zinc-600">Tap to open</div>
              </a>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border bg-white p-6">
            <h3 className="text-lg font-bold">Fast checkout → better results</h3>
            <ul className="mt-3 grid gap-2 text-sm text-zinc-700 sm:grid-cols-2">
              <li>• Put the same promo on every platform.</li>
              <li>• Use one campaign link everywhere (QR, ad, bio).</li>
              <li>• Track each channel with a code (INSTA10, TIKTOK10, EMAIL10).</li>
              <li>• Swap featured items weekly based on best sellers.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Visit */}
      <section className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold">Visit us</h2>
              <p className="mt-2 text-zinc-700">
                Walk in for fresh bakery items and hot plates.
              </p>

              <div className="mt-5 rounded-2xl border p-5">
                <div className="text-sm font-semibold">Address</div>
                <div className="mt-1 text-sm text-zinc-700">
                  {BRAND.addressLine1}
                  <br />
                  {BRAND.addressLine2}
                </div>
                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  <a
                    href={BRAND.googleMapsUrl}
                    className="rounded-xl border px-4 py-3 text-center text-sm font-semibold hover:bg-zinc-50"
                  >
                    Directions
                  </a>
                  <a
                    href={`tel:${BRAND.phoneTel}`}
                    className="rounded-xl bg-zinc-900 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-zinc-800"
                  >
                    Call {BRAND.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-zinc-50 p-5">
                <div className="text-sm font-semibold">Hours</div>
                <p className="mt-1 text-sm text-zinc-700">
                  Add your real hours here. Keep them consistent with Google/Delivery apps.
                </p>
              </div>

              <div className="mt-6 rounded-2xl border p-5">
                <div className="text-sm font-semibold">Follow & share</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  <a
                    className="rounded-full border px-4 py-2 text-sm font-semibold hover:bg-zinc-50"
                    href={BRAND.social.instagram}
                  >
                    Instagram
                  </a>
                  <a
                    className="rounded-full border px-4 py-2 text-sm font-semibold hover:bg-zinc-50"
                    href={BRAND.social.facebook}
                  >
                    Facebook
                  </a>
                  <a
                    className="rounded-full border px-4 py-2 text-sm font-semibold hover:bg-zinc-50"
                    href={BRAND.social.tiktok}
                  >
                    TikTok
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border bg-zinc-50 p-4">
              <div className="overflow-hidden rounded-2xl border bg-white">
                <iframe
                  title="Map"
                  className="h-[420px] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=39%20Elm%20St%20Unit%201%20West%20Haven%20CT%2006516&output=embed"
                />
              </div>

              <div className="mt-4 rounded-2xl bg-white p-5 ring-1 ring-zinc-200">
                <div className="text-sm font-semibold">Email / SMS deals (optional)</div>
                <p className="mt-1 text-sm text-zinc-700">
                  Hook this form to Mailchimp/Klaviyo later. For now, it’s a placeholder.
                </p>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  <input
                    className="rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-zinc-300"
                    placeholder="Email"
                  />
                  <input
                    className="rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-zinc-300"
                    placeholder="Phone (optional)"
                  />
                </div>
                <button
                  type="button"
                  className="mt-3 w-full rounded-xl bg-zinc-900 px-4 py-3 text-sm font-semibold text-white hover:bg-zinc-800"
                >
                  Get deals
                </button>
                <p className="mt-2 text-xs text-zinc-500">
                  By subscribing, you agree to receive messages. Reply STOP to opt out. (Add your privacy policy.)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-sm font-semibold">{BRAND.name}</div>
              <div className="text-xs text-zinc-600">
                {BRAND.addressLine1} • {BRAND.addressLine2}
              </div>
            </div>
            <div className="flex flex-wrap gap-3 text-xs text-zinc-600">
              <a className="hover:underline" href="#">
                Privacy
              </a>
              <a className="hover:underline" href="#">
                Terms
              </a>
              <a className="hover:underline" href="#">
                Refund / Promo policy
              </a>
            </div>
          </div>
          <div className="mt-6 text-xs text-zinc-500">
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
