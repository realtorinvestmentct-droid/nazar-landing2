import React from "react";
import { MENU_CATEGORIES } from "../data/menuData";
import type { MenuCategory, MenuItem, MenuTag } from "../data/menuData";
import { CLOVER_PICKUP_URL, DOORDASH_URL } from "../data/menu";
import { LanguageProvider, useLang } from "../components/Language";
import { t } from "../components/i18n";

<p className="mt-2 text-sm text-gray-600">{t("menu.note", LanguageProvider)}</p>

const FILTERS: MenuTag[] = ["Vegetarian", "Spicy", "Best Seller", "New"];

function cn(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

function TagPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-brand-border bg-brand-bg px-2 py-1 text-[11px] font-bold text-zinc-700">
      {children}
    </span>
  );
}

function formatPrice(n?: number) {
  if (typeof n !== "number") return "";
  return `$${n.toFixed(2)}`;
}

function itemTitle(item: MenuItem) {
  return item.nameTr ? `${item.nameEn} (${item.nameTr})` : item.nameEn;
}

function cardPriceLine(item: MenuItem) {
  // Keep it clean: show "From $X" if we have at least one price
  if (typeof item.price === "number" && typeof item.price2 === "number") {
    return `From ${formatPrice(Math.min(item.price, item.price2))}`;
  }
  if (typeof item.price === "number") return formatPrice(item.price);
  if (typeof item.price2 === "number") return formatPrice(item.price2);
  return "";
}

function modalPriceBlock(item: MenuItem) {
  const hasP1 = typeof item.price === "number";
  const hasP2 = typeof item.price2 === "number";
  if (!hasP1 && !hasP2) return null;

  if (hasP1 && hasP2) {
    return (
      <div className="mt-3 rounded-xl border border-brand-border bg-brand-bg p-3">
        <p className="text-xs font-extrabold text-zinc-900">Prices</p>
        <div className="mt-2 grid grid-cols-2 gap-2 text-sm font-semibold text-zinc-800">
          <div className="rounded-lg bg-white p-2 border border-brand-border">
            <div className="text-xs text-zinc-500 font-bold">{item.priceLabel ?? "Small"}</div>
            <div className="text-base font-extrabold">{formatPrice(item.price)}</div>
          </div>
          <div className="rounded-lg bg-white p-2 border border-brand-border">
            <div className="text-xs text-zinc-500 font-bold">{item.price2Label ?? "Large"}</div>
            <div className="text-base font-extrabold">{formatPrice(item.price2)}</div>
          </div>
        </div>
        <p className="mt-2 text-xs text-zinc-500">Prices may vary by platform.</p>
      </div>
    );
  }

  const singleLabel = hasP1 ? item.priceLabel : item.price2Label;
  const singlePrice = hasP1 ? item.price : item.price2;

  return (
    <div className="mt-3 rounded-xl border border-brand-border bg-brand-bg p-3">
      <p className="text-xs font-extrabold text-zinc-900">Price</p>
      <p className="mt-1 text-base font-extrabold text-zinc-900">
        {singleLabel ? `${singleLabel}: ` : ""}
        {formatPrice(singlePrice)}
      </p>
      <p className="mt-1 text-xs text-zinc-500">Prices may vary by platform.</p>
    </div>
  );
}

function DetailsModal({
  open,
  item,
  categoryTitle,
  onClose
}: {
  open: boolean;
  item: MenuItem | null;
  categoryTitle: string | null;
  onClose: () => void;
}) {
  if (!open || !item) return null;

  const pickupHref = item.pickupUrl ?? CLOVER_PICKUP_URL;
  const deliveryHref = item.deliveryUrl ?? DOORDASH_URL;

  // Optional fields (if you add later)
  const comesWith = (item as any).comesWith as string | undefined;
  const allergens = (item as any).allergens as string | undefined;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
    >
      <div className="w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="h-64 bg-brand-bg md:h-full">
            {item.image ? (
              <img src={item.image} alt={itemTitle(item)} className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full items-center justify-center text-sm font-semibold text-zinc-500">
                No image
              </div>
            )}
          </div>

          <div className="p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                {/* EN big */}
                <h3 className="text-xl font-extrabold tracking-tight text-zinc-900">{item.nameEn}</h3>

                {/* TR small */}
                {item.nameTr ? (
                  <p className="mt-1 text-sm font-bold text-zinc-600">{item.nameTr}</p>
                ) : null}

                <p className="mt-2 text-xs font-semibold text-zinc-500">{categoryTitle}</p>
              </div>

              <button
                onClick={onClose}
                className="rounded-full border border-brand-border bg-white px-3 py-1.5 text-sm font-extrabold hover:bg-brand-bg"
                type="button"
              >
                ✕
              </button>
            </div>

            <div className="mt-3">
              {item.description ? (
                <p className="text-sm leading-relaxed text-zinc-700">{item.description}</p>
              ) : (
                <p className="text-sm text-zinc-500">No description yet.</p>
              )}
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {(item.tags || []).map((t) => (
                <TagPill key={t}>{t}</TagPill>
              ))}
            </div>

            {modalPriceBlock(item)}

            {comesWith ? (
              <div className="mt-4">
                <p className="text-xs font-extrabold text-zinc-900">What comes with it</p>
                <p className="mt-1 text-sm text-zinc-700">{comesWith}</p>
              </div>
            ) : null}

            {allergens ? (
              <div className="mt-3">
                <p className="text-xs font-extrabold text-zinc-900">Allergens</p>
                <p className="mt-1 text-sm text-zinc-700">{allergens}</p>
              </div>
            ) : null}

            {/* Consistent CTAs: only in header + in popup */}
            <div className="mt-5 flex flex-wrap gap-2">
              <a
                href={pickupHref}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-orange-500 px-4 py-2 text-sm font-extrabold text-white shadow hover:bg-orange-600"
              >
                Pickup (Clover)
              </a>
              <a
                href={deliveryHref}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-extrabold text-white hover:bg-black"
              >
                Delivery (DoorDash)
              </a>
            </div>

            <p className="mt-3 text-xs text-zinc-500">
              Ordering (pickup time, quantity, special instructions, payment) continues on Clover/DoorDash.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MenuPage() {
  const { lang } = useLang();
  const [activeCatId, setActiveCatId] = React.useState<string>(MENU_CATEGORIES[0]?.id ?? "");
  const [search, setSearch] = React.useState("");
  const [activeFilters, setActiveFilters] = React.useState<Set<MenuTag>>(new Set());
  const [modalItem, setModalItem] = React.useState<MenuItem | null>(null);
  const [modalCatTitle, setModalCatTitle] = React.useState<string | null>(null);

  const filteredCategories: MenuCategory[] = React.useMemo(() => {
    const q = search.trim().toLowerCase();

    const matches = (item: MenuItem) => {
      const text = `${item.nameEn} ${item.nameTr ?? ""} ${item.description ?? ""} ${(item.tags ?? []).join(" ")}`.toLowerCase();
      if (q && !text.includes(q)) return false;

      for (const f of activeFilters) {
        if (!(item.tags ?? []).includes(f)) return false;
      }
      return true;
    };

    return MENU_CATEGORIES.map((c) => ({
      ...c,
      items: c.items.filter(matches)
    })).filter((c) => (q || activeFilters.size ? c.items.length > 0 : true));
  }, [search, activeFilters]);

  const activeCategory = filteredCategories.find((c) => c.id === activeCatId) || filteredCategories[0];

  React.useEffect(() => {
    if (activeCategory?.id) setActiveCatId(activeCategory.id);
  }, [activeCategory?.id]);

  const toggleFilter = (f: MenuTag) => {
    setActiveFilters((prev) => {
      const next = new Set(prev);
      next.has(f) ? next.delete(f) : next.add(f);
      return next;
    });
  };

  return (
    <div className="bg-brand-bg">
      {/* Sticky header */}
      <section className="sticky top-0 z-30 border-b border-brand-border bg-brand-bg/90 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-4">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-brand-ink">Menu</h1>
              <p className="mt-1 text-sm text-brand-muted">
                Browse here, then order pickup via Clover or delivery via DoorDash.
              </p>
              <p className="mt-1 text-xs font-semibold text-brand-soft">Prices/availability may vary by platform.</p>
            </div>

            <div className="flex gap-2">
              <a
                href={CLOVER_PICKUP_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-orange-500 px-4 py-2 text-sm font-extrabold text-white shadow hover:bg-orange-600"
              >
                Pickup (Clover)
              </a>
              <a
                href={DOORDASH_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-extrabold text-white hover:bg-black"
              >
                Delivery (DoorDash)
              </a>
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="flex w-full items-center gap-2 rounded-full border border-brand-border bg-white px-4 py-2 shadow-sm md:max-w-md">
              <span className="text-zinc-500">🔎</span>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search menu items…"
                className="w-full bg-transparent text-sm outline-none"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => toggleFilter(f)}
                  className={cn(
                    "rounded-full border px-3 py-1.5 text-sm font-semibold transition",
                    activeFilters.has(f)
                      ? "border-orange-300 bg-orange-50 text-orange-900"
                  : "border-brand-border bg-white text-zinc-800 hover:bg-brand-bg"
                  )}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Category chips */}
          <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
            {MENU_CATEGORIES.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setActiveCatId(c.id)}
                className={cn(
                  "flex-shrink-0 rounded-full border px-4 py-2 text-sm font-extrabold transition",
                  activeCatId === c.id
                    ? "border-orange-300 bg-orange-50 text-orange-900"
                    : " border-brand-border bg-white text-zinc-800 hover:bg-brand-bg"
                )}
              >
                {c.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Cards */}
      <div className="mx-auto max-w-6xl px-4 py-6">
        {activeCategory ? (
          <>
            <h2 className="mb-3 text-lg font-extrabold text-zinc-900">{activeCategory.title}</h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {activeCategory.items.map((item) => {
                const priceLine = cardPriceLine(item);

                return (
                  <button
                    key={item.id}
                    type="button"
                    className="text-left overflow-hidden rounded-2xl border border-brand-border bg-white shadow-sm hover:shadow-md transition"
                    onClick={() => {
                      setModalItem(item);
                      setModalCatTitle(activeCategory.title);
                    }}
                  >
                    <div className="h-44 bg-brand-bg">
                      {item.image ? (
                        <img src={item.image} alt={itemTitle(item)} className="h-full w-full object-cover" />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center text-sm font-semibold text-zinc-500">
                          No image
                        </div>
                      )}
                    </div>

                    <div className="p-4">
                      {/* EN big + TR small */}
                      <h3 className="text-sm font-extrabold text-zinc-900">{item.nameEn}</h3>
                      {item.nameTr ? (
                        <p className="mt-0.5 text-xs font-bold text-zinc-600">{item.nameTr}</p>
                      ) : null}

                      {item.description ? (
                        <p className="mt-2 line-clamp-2 text-sm text-zinc-600">{item.description}</p>
                      ) : (
                        <p className="mt-2 text-sm text-zinc-500">—</p>
                      )}

                      <div className="mt-3 flex flex-wrap gap-2">
                        {(item.tags || []).slice(0, 3).map((t) => (
                          <TagPill key={t}>{t}</TagPill>
                        ))}
                      </div>

                      {/* Optional: keep subtle */}
                      {priceLine ? (
                        <p className="mt-3 text-xs font-extrabold text-zinc-800">{priceLine}</p>
                      ) : null}

                      <p className="mt-3 text-xs font-extrabold text-orange-700">View details →</p>
                    </div>
                  </button>
                );
              })}
            </div>

            {activeCategory.items.length === 0 ? (
              <p className="mt-6 text-sm font-semibold text-zinc-600">No items match your search/filters.</p>
            ) : null}
          </>
        ) : (
          <p className="text-sm font-semibold text-zinc-600">No menu data found.</p>
        )}
      </div>

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

      <DetailsModal
        open={!!modalItem}
        item={modalItem}
        categoryTitle={modalCatTitle}
        onClose={() => {
          setModalItem(null);
          setModalCatTitle(null);
        }}
      />
    </div>
  );
}
