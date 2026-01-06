
type Props = {
  cloverUrl?: string;
  doordashUrl?: string;
  phoneTel?: string; // örn: +12034082697
  showMenu?: boolean;
};

export default function OrderCtas({
  cloverUrl = "#",
  doordashUrl = "#",
  phoneTel = "",
  showMenu = true,
}: Props) {
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      <a
        href={cloverUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white hover:bg-brand-dark"
      >
        Pickup (Clover)
      </a>

      <a
        href={doordashUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white hover:bg-zinc-800"
      >
        Delivery (DoorDash)
      </a>

      {showMenu && (
<a
  href="/menu"
  className="inline-flex items-center justify-center rounded-full border border-brand-border bg-white px-6 py-3 text-sm font-semibold text-zinc-900 hover:bg-brand-bg"
>
  View Menu
</a>

      )}

      {phoneTel ? (
        <a
          href={`tel:${phoneTel}`}
          className="inline-flex items-center justify-center rounded-full border border-brand-border bg-white px-6 py-3 text-sm font-semibold text-zinc-900 hover:bg-brand-bg"
        >
          Phone pickup
        </a>
      ) : null}
    </div>
  );
}
