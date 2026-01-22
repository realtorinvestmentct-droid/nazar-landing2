// src/components/GlobalOrderButtons.tsx
import { CLOVER_PICKUP_URL, DOORDASH_URL } from "../data/menu";

function cn(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

type Props = {
  variant?: "top" | "bottom";
  className?: string;
};

export default function OrderButtonsRow({ variant = "top", className }: Props) {
  const isTop = variant === "top";

  // ✅ Make the whole row a bit narrower (creates side space)
  const rowWidth = isTop ? "max-w-4xl" : "max-w-4xl";

  // ✅ Layout: top = centered pills, bottom = sticky two buttons
  const wrap = cn(
    rowWidth,
    "mx-auto w-full",
    isTop
     ? "grid grid-cols-2 gap-3 place-items-center"
     : "grid grid-cols-2 gap-3 place-items-center",
    className
  );

  // ✅ Button sizing:
  // - TOP: "smaller on the sides" = not full-width on desktop, capped width
  // - BOTTOM: still usable, but row is narrower so it has side margins
  const btnBase = cn(
    "inline-flex items-center justify-center rounded-full font-extrabold shadow-sm min-w-[140px]",
    "hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-zinc-300",
    isTop
      ? "h-11 px-6 text-sm w-full max-w-[220px]" // <— key: capped width
      : "h-11 px-6 text-sm w-full max-w-[220px] justify-self-center"

 // bottom fills the (narrower) bar
  );

  const btnText = "text-white drop-shadow-sm";

  return (
    <div className={wrap}>
      <a
        href={CLOVER_PICKUP_URL}
        target="_blank"
        rel="noreferrer"
        className={cn(btnBase, "bg-[#1E7A3A]", btnText)}
      >
        Pickup (Clover)
      </a>

      <a
        href={DOORDASH_URL}
        target="_blank"
        rel="noreferrer"
        className={cn(btnBase, "bg-[#B91C1C]", btnText)}
      >
        Delivery (DoorDash)
      </a>
    </div>
  );
}

// ✅ This named export must exist because Layout imports it.
export function GlobalOrderStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t bg-white">
      <div className="px-2 py-3">
        <OrderButtonsRow variant="bottom" />
      </div>
    </div>
  );
}
