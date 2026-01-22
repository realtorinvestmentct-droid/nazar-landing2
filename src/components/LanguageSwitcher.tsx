import { useLang } from "./Language";
import type { Lang } from "./i18n";
import { LANG_LABEL } from "./i18n";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLang();

  return (
    <select
      value={lang}
      onChange={(e) => setLang(e.target.value as Lang)}
      className="rounded-xl border px-2 py-1 text-sm bg-white"
      aria-label="Language"
    >
      <option value="en">{LANG_LABEL.en}</option>
      <option value="tr">{LANG_LABEL.tr}</option>
      <option value="ar">{LANG_LABEL.ar}</option>
    </select>
  );
}
