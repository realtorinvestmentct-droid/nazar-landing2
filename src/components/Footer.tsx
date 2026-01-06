export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-zinc-600">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="font-semibold text-zinc-900">Nazar Restaurant & Bakery</div>
            <div className="text-xs">
              West Haven, CT • Turkish cuisine • Fresh bakery
            </div>
          </div>
          <div className="text-xs">
            © {new Date().getFullYear()} Nazar. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
