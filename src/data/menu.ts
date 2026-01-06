// src/data/menu.tsexport const DOORDASH_URL = ...

// Business identity
export const BUSINESS_NAME = "Nazar Restaurant & Bakery";
export const TAGLINE = "Fresh Turkish flavors—fast, filling, and made with care.";

// Ordering links (customer-facing)
export const DOORDASH_URL =
  "https://www.doordash.com/store/nazar-restaurant-&-bakery-west-haven-34962973/73317566/?event_type=autocomplete&pickup=false";

export const CLOVER_PICKUP_URL = "https://nazar-bakery-west-haven.cloveronline.com";

// If you don’t have the public customer links yet, keep these placeholders for now:
export const GRUBHUB_URL = "https://restaurant.grubhub.com/orders";
export const UBEREATS_URL = "https://www.ubereats.com/";

// Optional aliases (if older code imports different names)
export const UBER_EATS_URL = UBEREATS_URL;

// Logo paths (served from /public)
export const DOORDASH_LOGO = "/images/brands/doordash.png";
export const CLOVER_LOGO = "/images/brands/clover.png";
export const GRUBHUB_LOGO = "/images/brands/grubhub.png";

// If your file is named "uber-eats.png" (with hyphen), this matches that:
export const UBER_EATS_LOGO = "/images/brands/uber-eats.png";
export const UBEREATS_LOGO = UBER_EATS_LOGO;

export const WEEKLY_SPECIALS_LOGO = "/images/brands/weekly-specials.png";
export const BREAKFAST_IMG = "/images/brands/breakfast.png";

// Contact info
export const PHONE_NUMBER_DISPLAY = "+1 (203) 408-2697";
export const PHONE_NUMBER_TEL = "12034082697";

export const ADDRESS_LINE_1 = "39 Elm Street, Unit 1";
export const ADDRESS_LINE_2 = "West Haven, CT";

// Hours (edit as needed)
export const HOURS: Array<{ day: string; hours: string }> = [
  { day: "Mon", hours: "9:00 AM – 9:00 PM" },
  { day: "Tue", hours: "9:00 AM – 9:00 PM" },
  { day: "Wed", hours: "9:00 AM – 9:00 PM" },
  { day: "Thu", hours: "9:00 AM – 9:00 PM" },
  { day: "Fri", hours: "9:00 AM – 10:00 PM" },
  { day: "Sat", hours: "9:00 AM – 10:00 PM" },
  { day: "Sun", hours: "9:00 AM – 9:00 PM" }
];

// src/data/menuData.ts

export type MenuTag = "Spicy" | "Vegetarian" | "Best Seller" | "New" | "Gluten-Free";

export type MenuItem = {
  id: string;
  name: string;
  description?: string;
  image?: string; // "/images/xxx.jpg" in public/images
  tags?: MenuTag[];
  price?: number; // optional
  pickupUrl?: string;
  deliveryUrl?: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  items: MenuItem[];
};

export const MENU_CATEGORIES: MenuCategory[] = [
  { id: "soups", title: "Soups", items: [] },
  { id: "salads", title: "Salads", items: [] },
  { id: "cold-appetizers", title: "Cold Appetizers", items: [] },
  { id: "sandwiches-wraps", title: "Sandwiches & Wraps", items: [] },
  { id: "hot-appetizers", title: "Hot Appetizers", items: [] },
  { id: "lahmacun-pies", title: "Lahmacun & Pies", items: [] },
  { id: "kebabs", title: "Kebabs", items: [] },
  { id: "kids-menu", title: "Kids Menu", items: [] },
  { id: "breakfast", title: "New Item Breakfast", items: [] },
  { id: "desserts", title: "Desserts", items: [] },
  { id: "beverages", title: "Beverages", items: [] },
  { id: "bakery", title: "Bakery", items: [] },
  { id: "specials", title: "Specials", items: [] },
  { id: "catering", title: "Catering", items: [] }
];
