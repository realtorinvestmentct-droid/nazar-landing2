export type Lang = "tr" | "en" | "ar";

export const LANG_LABEL: Record<Lang, string> = {
  tr: "TR",
  en: "EN",
  ar: "AR",
};

export const RTL_LANGS: Lang[] = ["ar"];

export const translations = {
  nav: {
    home: { tr: "Ana Sayfa", en: "Home", ar: "الرئيسية" },
    menu: { tr: "Menü", en: "Menu", ar: "القائمة" },
    gallery: { tr: "Galeri", en: "Gallery", ar: "الصور" },
    reviews: { tr: "Yorumlar", en: "Reviews", ar: "التقييمات" },
    about: { tr: "Hakkımızda", en: "About", ar: "من نحن" },
    contact: { tr: "İletişim", en: "Contact", ar: "اتصل بنا" },
  },
  buttons: {
    pickup: { tr: "Pickup (Clover)", en: "Pickup (Clover)", ar: "استلام (Clover)" },
    delivery: { tr: "Delivery (DoorDash)", en: "Delivery (DoorDash)", ar: "توصيل (DoorDash)" },
    viewMenu: { tr: "Menüyü Gör", en: "View Menu", ar: "عرض القائمة" },
    fullMenu: { tr: "Tüm menü →", en: "Full menu →", ar: "القائمة الكاملة →" },
  },
  menu: {
    note: {
      tr: "Web’de görünen fiyatlar pickup (restoran) fiyatlarıdır. DoorDash’te fiyatlar genelde aynıdır; sadece teslimat ücreti eklenir. Uber Eats/Grubhub fiyatları değişebilir.",
      en: "Pickup prices shown. DoorDash prices typically match—delivery fees apply. Uber Eats/Grubhub prices may vary.",
      ar: "الأسعار المعروضة هي أسعار الاستلام من المطعم. غالبًا ما تكون أسعار DoorDash مطابقة، وتُضاف فقط رسوم التوصيل. قد تختلف أسعار Uber Eats وGrubhub.",
    },
  },
} as const;

export function t(path: string, lang: Lang): string {
  // path ör: "menu.note" veya "nav.home"
  const parts = path.split(".");
  let cur: any = translations;
  for (const p of parts) cur = cur?.[p];
  return cur?.[lang] ?? cur?.en ?? "";
}
