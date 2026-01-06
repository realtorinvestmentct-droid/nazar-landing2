// src/data/menuData.ts

export type MenuTag = "Spicy" | "Vegetarian" | "Best Seller" | "New";

export type MenuItem = {
  id: string;

  // Split names
  nameEn: string;
  nameTr?: string;

  description?: string;
  image?: string;
  tags?: MenuTag[];

  // Price handling
  price?: number;       // main price (or Small)
  priceLabel?: string;  // e.g. "Small"
  price2?: number;      // e.g. Large
  price2Label?: string; // e.g. "Large"

  pickupUrl?: string;
  deliveryUrl?: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  items: MenuItem[];
};

const PH = "/images/placeholder.jpg";

export const MENU_CATEGORIES: MenuCategory[] = [
  // ---------------- Soups ----------------
  {
    id: "soups",
    title: "Soups",
    items: [
      {
        id: "lentil-soup",
        nameEn: "Lentil Soup",
        nameTr: "Mercimek",
        description: "Lentils blended with seasoning",
        image: "/images/menu/lentil-soup.jpg",
        tags: ["Vegetarian", "Best Seller"],
        price: 5.99
      },
      {
        id: "soup-of-the-day",
        nameEn: "Soup of the Day",
        description: "Please ask for the soup of the day.",
        image: PH,
        tags: ["New"],
        price: 5.99
      },
      {
        id: "trotter-soup",
        nameEn: "Trotter Soup",
        nameTr: "Paça Çorbası",
        description: "Hearty soup made from slow-simmered lamb or beef trotters.",
        image: PH,
        price: 9.99
      }
    ]
  },

  // ---------------- Salads ----------------
  {
    id: "salads",
    title: "Salads",
    items: [
      {
        id: "caesar-salad",
        nameEn: "Caesar Salad",
        description:
          "Crisp romaine lettuce tossed with croutons, parmesan cheese, and classic Caesar dressing.",
        image: PH,
        price: 9.49
      },
      {
        id: "season-salad",
        nameEn: "Season Salad",
        nameTr: "Mevsim",
        description:
          "A vibrant blend of lettuce, carrots, and red cabbage, drizzled with olive oil.",
        image: PH,
        tags: ["Vegetarian"],
        price: 9.49
      },
      {
        id: "shepherd-salad",
        nameEn: "Shepherd Salad",
        nameTr: "Çoban",
        description:
          "Diced tomatoes, cucumbers, peppers, parsley, and onions. Seasoned with olive oil, salt, and lemon juice.",
        image: PH,
        tags: ["Vegetarian"],
        price: 9.49
      }
    ]
  },

  // ---------------- Cold Appetizers ----------------
  {
    id: "cold-appetizers",
    title: "Cold Appetizers",
    items: [
      {
        id: "antep-ezme",
        nameEn: "Antep Ezme",
        description:
          "Minced spicy dip prepared with tomatoes, peppers, onions, parsley, garlic, olive oil, lemon juice, and Turkish spices.",
        image: PH,
        tags: ["Spicy"],
        price: 7.99
      },
      {
        id: "baba-ganoush",
        nameEn: "Baba Ganoush",
        description:
          "Roasted eggplant mashed with tahini, garlic, white pepper, mayonnaise, and olive oil.",
        image: PH,
        tags: ["Vegetarian"],
        price: 7.99
      },
      {
        id: "haydari",
        nameEn: "Haydari",
        description:
          "Thick labneh mixed with sour cream, dill, crushed walnuts, mayonnaise, olive oil, and a pinch of salt.",
        image: PH,
        tags: ["Vegetarian"],
        price: 7.99
      },
      {
        id: "humus",
        nameEn: "Humus",
        description:
          "Smooth chickpea puree mixed with tahini, garlic, olive oil, and white pepper.",
        image: PH,
        tags: ["Vegetarian"],
        price: 7.99
      },
      {
        id: "jajik",
        nameEn: "Jajik",
        nameTr: "Cacik",
        description:
          "Creamy yogurt blended with labneh, diced cucumber, fresh dill, and olive oil.",
        image: PH,
        tags: ["Vegetarian"],
        price: 4.99
      },
      {
        id: "mixed-cold-appetizers",
        nameEn: "Mixed Cold Appetizers",
        nameTr: "Karışık Soğuk Meze",
        description:
          "A selection of traditional Turkish cold appetizers (humus, haydari, baba ganoush, antep ezme).",
        image: PH,
        tags: ["Vegetarian"],
        priceLabel: "Small",
        price: 13.99,
        price2Label: "Large",
        price2: 18.99
      }
    ]
  },

  // ---------------- Sandwiches & Wraps ----------------
  {
    id: "sandwiches-wraps",
    title: "Sandwiches & Wraps",
    items: [
      // Wraps
      {
        id: "adana-wrap",
        nameEn: "Adana Wrap",
        description:
          "Spicy minced lamb grilled over charcoal, wrapped with onion, parsley, and sumac.",
        image: PH,
        tags: ["Spicy"],
        price: 12.99
      },
      {
        id: "falafel-wrap-4pcs",
        nameEn: "Falafel Wrap (4 pcs)",
        description:
          "Golden, crispy falafel balls made from chickpeas, herbs, and spices, wrapped with lettuce and hummus.",
        image: PH,
        tags: ["Vegetarian"],
        price: 8.99
      },
      {
        id: "tantuni-wrap",
        nameEn: "Tantuni Wrap",
        description:
          "Thinly sliced sautéed veal cooked with special spices, wrapped with fresh tomatoes, onions, parsley, and red peppers. Served with lemon.",
        image: PH,
        price: 13.99
      },

      // Sandwiches
      {
        id: "hamburger",
        nameEn: "Hamburger",
        description:
          "Classic beef burger patty seasoned with spices, topped with lettuce, tomato, and onion, served on a soft bun. Add Cheese: $1.00.",
        image: PH,
        price: 7.99
      },
      {
        id: "kokorec",
        nameEn: "Kokorec",
        description:
          "Charcoal-grilled lamb intestines finely chopped with spices, tomatoes, and peppers. Served in bread.",
        image: PH,
        price: 19.99
      },

      // Sandwich or Wrap
      {
        id: "chicken-gyro-sandwich-wrap",
        nameEn: "Chicken Gyro — Sandwich or Wrap",
        nameTr: "Tavuk Döner",
        description:
          "Thinly sliced, marinated chicken slow-cooked on a vertical rotisserie, served with lettuce, tomatoes, and onion. Add french fries upon request in your sandwich or wrap.",
        image: PH,
        price: 9.99
      },
      {
        id: "chicken-shish-sandwich-wrap",
        nameEn: "Chicken Shish — Sandwich or Wrap",
        nameTr: "Tavuk Şiş",
        description:
          "Tender marinated chicken grilled over charcoal, served in fresh bread or a wrap with onions, parsley, tomato, spices, and long hot peppers.",
        image: PH,
        price: 10.99
      },
      {
        id: "meatball-sandwich-wrap",
        nameEn: "Meatball — Sandwich or Wrap",
        nameTr: "Köfte",
        description:
          "Juicy beef meatballs mixed with egg, breadcrumbs, and Turkish spices, served in fresh bread or a wrap with onions, parsley, and tomato.",
        image: PH,
        price: 9.99
      },
      {
        id: "meat-gyro-sandwich-wrap",
        nameEn: "Meat Gyro — Sandwich or Wrap",
        nameTr: "Et Döner",
        description:
          "Thinly sliced, marinated beef slow-cooked on a vertical rotisserie, served with lettuce, tomatoes, and onion. Add french fries upon request in your sandwich or wrap.",
        image: PH,
        price: 10.99
      },

      // Toasts
      {
        id: "grilled-cheese-toast",
        nameEn: "Grilled Cheese Toast",
        nameTr: "Kaşarlı Toast",
        description:
          "Grilled Turkish sandwich with melted mozzarella cheese on crispy toasted bread.",
        image: PH,
        tags: ["Vegetarian"],
        price: 5.99
      },
      {
        id: "sujuk-cheese-toast",
        nameEn: "Soujuk & Cheese Toast",
        nameTr: "Kaşarlı Sucuklu",
        description:
          "Grilled Turkish sandwich with melted mozzarella cheese and sujuk on crispy toasted bread.",
        image: PH,
        price: 6.99
      }
    ]
  },

  // ---------------- Hot Appetizers ----------------
  {
    id: "hot-appetizers",
    title: "Hot Appetizers",
    items: [
      {
        id: "cheese-rolls-sigara-boregi-6",
        nameEn: "Cheese Rolls (6)",
        nameTr: "Sigara Böreği",
        description: "Crispy fried phyllo rolls filled with feta cheese and parsley.",
        image: PH,
        tags: ["Vegetarian"],
        price: 7.99
      },
      {
        id: "falafel-4pcs",
        nameEn: "Falafel (4 pcs)",
        description:
          "Deep-fried patties made from ground chickpeas, celery, garlic, parsley, white pepper, and flour.",
        image: PH,
        tags: ["Vegetarian"],
        price: 7.99
      },
      {
        id: "findik-lahmacun-3pcs",
        nameEn: "Fındık Lahmacun (3 pcs)",
        description:
          "Brick oven baked thin crispy dough topped with minced beef, tomatoes, peppers, onions, and Turkish spices.",
        image: PH,
        price: 9.99
      },
      {
        id: "french-fries",
        nameEn: "French Fries",
        description: "Golden crispy fries, lightly salted and served with ketchup or mayonnaise.",
        image: PH,
        tags: ["Vegetarian"],
        price: 4.99
      },
      {
        id: "pan-fried-liver",
        nameEn: "Pan-Fried Liver",
        nameTr: "Arnavut Ciğeri",
        description:
          "Pan-fried cubes of liver coated in seasoned flour, served warm with sautéed onions, parsley, and red pepper flakes.",
        image: PH,
        price: 13.99
      }
    ]
  },

  // ---------------- Lahmacun & Pies ----------------
  {
    id: "lahmacun-pies",
    title: "Brick Oven Lahmacun & Pies",
    items: [
      {
        id: "lahmacun-3pcs",
        nameEn: "Lahmacun (3 pcs)",
        description:
          "Thin crispy dough topped with minced beef, tomatoes, peppers, onions, and Turkish spices.",
        image: PH,
        price: 14.99
      },
      {
        id: "cheese-pie-kasarli",
        nameEn: "Cheese Pie",
        nameTr: "Kaşarlı Pide",
        description: "Crispy dough topped with melted mozzarella cheese, baked to perfection.",
        image: PH,
        tags: ["Vegetarian"],
        price: 12.99
      },
      {
        id: "cubed-meat-pie-kusbasi",
        nameEn: "Cubed Meat Pie",
        nameTr: "Kuşbaşılı Pide",
        description: "Crispy dough topped with tender marinated cubes of beef and mozzarella.",
        image: PH,
        price: 15.99
      },
      {
        id: "ground-beef-pie-kiymali",
        nameEn: "Ground Beef Pie",
        nameTr: "Kıymalı Pide",
        description:
          "Crispy dough topped with seasoned ground beef, onions, tomatoes, Turkish spices, and mozzarella.",
        image: PH,
        price: 14.99
      },
      {
        id: "pastrami-pie-pastirmali",
        nameEn: "Pastrami Pie",
        nameTr: "Pastırmalı Pide",
        description: "Crispy dough topped with thinly sliced pastrami and melted mozzarella.",
        image: PH,
        price: 17.99
      },
      {
        id: "sujuk-pie-sucuklu",
        nameEn: "Sujuk Pie",
        nameTr: "Sucuklu Pide",
        description: "Crispy dough topped with sujuk and melted mozzarella cheese.",
        image: PH,
        price: 15.99
      },
      {
        id: "mixed-protein-pie",
        nameEn: "Mixed Protein Pie",
        nameTr: "Karışık Proteinli",
        description:
          "Crispy dough topped with ground beef, cubes of beef, pastrami, sujuk, eggs, and mozzarella.",
        image: PH,
        price: 19.99
      },
      {
        id: "mixed-vegetable-pie",
        nameEn: "Mixed Vegetable Pie",
        nameTr: "Karışık Sebzeli",
        description:
          "Crispy dough topped with tomatoes, mushrooms, green & red pepper, eggplant, black olive, and mozzarella.",
        image: PH,
        tags: ["Vegetarian"],
        price: 17.99
      }
    ]
  },

  // ---------------- Kebabs ----------------
  {
    id: "kebabs",
    title: "Kebabs",
    items: [
      {
        id: "adana-shish",
        nameEn: "Adana Shish",
        description:
          "Spicy minced lamb blended with herbs and grilled over charcoal. Served with fresh bread, onions, parsley, tomato, spices, and long hot peppers.",
        image: PH,
        tags: ["Spicy"],
        price: 20.99
      },
      {
        id: "chicken-gyro-plate",
        nameEn: "Chicken Gyro — Plate",
        nameTr: "Tavuk Döner",
        description: "Served with rice and salad, and Turkish bread.",
        image: PH,
        price: 15.99
      },
      {
        id: "chicken-shish-plate",
        nameEn: "Chicken Shish — Plate",
        nameTr: "Tavuk Şiş",
        description:
          "Tender pieces of chicken marinated with special spices, skewered and grilled over charcoal. Served with fresh bread, onions, parsley, tomato, spices, and long hot peppers.",
        image: PH,
        price: 17.99
      },
      {
        id: "falafel-6pcs",
        nameEn: "Falafel (6 pcs)",
        description:
          "Deep-fried patties made from ground chickpeas, celery, garlic, parsley, and flour.",
        image: PH,
        tags: ["Vegetarian"],
        price: 11.99
      },
      {
        id: "grilled-meatballs-6",
        nameEn: "Grilled Meatballs (6)",
        nameTr: "Izgara Köfte",
        description:
          "Juicy grilled beef meatballs with Turkish spices, served with grilled vegetables.",
        image: PH,
        price: 16.99
      },
      {
        id: "meat-gyro-plate",
        nameEn: "Meat Gyro — Plate",
        nameTr: "Et Döner",
        description: "Served with rice and salad, and Turkish bread.",
        image: PH,
        price: 17.99
      },
      {
        id: "iskender-kebab",
        nameEn: "Iskender Kebab",
        description:
          "Sliced gyro kebab over cubes of pita bread, long peppers, topped with tomato sauce, yogurt, and melted butter.",
        image: PH,
        price: 19.99
      },
      {
        id: "mixed-grill",
        nameEn: "Mixed Grill",
        nameTr: "Karışık Izgara",
        description:
          "A generous platter featuring Adana Shish, Chicken Shish, Meat Gyro, Chicken Gyro, and Köfte (1 pc). Served with fresh bread, onions, parsley, and grilled vegetables.",
        image: PH,
        price: 29.99
      },
      {
        id: "manti",
        nameEn: "Manti",
        description:
          "Small handmade dumplings filled with seasoned ground beef, served with garlic yogurt and drizzled with spiced butter sauce.",
        image: PH,
        price: 18.99
      }
    ]
  },

  // ---------------- Kids Menu ----------------
  {
    id: "kids-menu",
    title: "Kids Menu",
    items: [
      {
        id: "kids-chicken-tenders",
        nameEn: "Kids Chicken Tenders",
        description: "Crispy breaded chicken strips. (Served with French fries.)",
        image: PH,
        price: 7.99
      },
      {
        id: "kids-hamburger",
        nameEn: "Kids Hamburger",
        description: "Juicy mini beef patty in a soft bun. (Served with French fries.)",
        image: PH,
        price: 7.99
      },
      {
        id: "kids-kofte",
        nameEn: "Kids Köfte",
        description: "Grilled Turkish meatballs in a soft bun. (Served with French fries.)",
        image: PH,
        price: 7.99
      }
    ]
  },

  // ---------------- Breakfast (empty for now) ----------------
  { id: "breakfast", title: "New Item Breakfast", items: [] },

  // ---------------- Desserts ----------------
  {
    id: "desserts",
    title: "Desserts",
    items: [
      { id: "baklava-4pcs", nameEn: "Baklava (4 pcs)", price: 6.99, description: "Crispy, flaky layers of phyllo dough filled with ground pistachios or walnuts, baked and drizzled with sweet syrup.", image: PH },
      { id: "kadayif", nameEn: "Kadayif", price: 6.99, description: "Golden, crispy shredded phyllo dough filled with crushed walnuts or pistachios, soaked in light syrup for a delightful crunch.", image: PH },
      { id: "kazandibi", nameEn: "Kazandibi", price: 5.99, description: "A delicate milk pudding with a caramelized top, flavored with rice flour and vanilla.", image: PH },
      { id: "kunefe", nameEn: "Kunefe", price: 6.99, description: "A traditional Turkish dessert made with shredded phyllo dough, filled with melted cheese, baked to golden perfection, and soaked in sweet syrup, topped with crushed pistachios.", image: PH },
      { id: "magnolia", nameEn: "Magnolia", price: 5.99, description: "Creamy vanilla pudding layered with biscuits and fresh strawberries.", image: PH },
      { id: "revani", nameEn: "Revani", price: 5.99, description: "A moist and fluffy semolina cake soaked in light lemon-infused syrup, offering a perfect balance of sweetness and texture.", image: PH },
      { id: "saray-muhallebisi", nameEn: "Saray Muhallebisi", price: 6.99, description: "Smooth milk pudding thickened with cornstarch and flour, topped with a layer of chocolate.", image: PH },
      { id: "supangle", nameEn: "Supangle", price: 6.99, description: "Rich chocolate pudding topped with cocoa and butter for a silky finish.", image: PH },
      { id: "sutlac", nameEn: "Sutlac", nameTr: "Sütlaç", price: 5.99, description: "Creamy oven-baked rice pudding made with milk, rice, sugar, and a hint of vanilla.", image: PH },
      { id: "trilece", nameEn: "Trilece", nameTr: "Trileçe", price: 6.99, description: "Light sponge cake soaked in a blend of three types of milk, topped with cream and fruit sauce.", image: PH }
    ]
  },

  // ---------------- Beverages ----------------
  {
    id: "beverages",
    title: "Beverages",
    items: [
      { id: "turkish-tea", nameEn: "Turkish Tea", nameTr: "Çay", price: 1.99, description: "Traditional Turkish black tea, served hot in a tulip-shaped glass, suitable for any time of the day.", image: PH },
      { id: "filter-coffee", nameEn: "Filter Coffee", nameTr: "Filtre Kahve", price: 2.99, description: "Freshly brewed coffee prepared by slow filtration delivering a smooth and satisfying flavor with every sip.", image: PH },
      { id: "turkish-coffee", nameEn: "Turkish Coffee", nameTr: "Türk Kahvesi", price: 3.99, description: "Authentic Turkish coffee, finely ground, rich and strong in taste, prepared in a traditional cezve.", image: PH },
      { id: "homemade-yogurt-drink", nameEn: "Homemade Yogurt Drink", nameTr: "Yayık Ayran", price: 3.99, description: "A refreshing blend of creamy yogurt, water, and a pinch of salt — a cool, traditional Turkish drink perfect with grilled dishes.", image: PH },
      { id: "bottled-yogurt-drink", nameEn: "Bottled Yogurt Drink", nameTr: "Şişe Ayran", price: 3.49, description: "Chilled, ready-to-drink Turkish yogurt beverage served in a bottle — smooth, tangy, and perfectly refreshing.", image: PH },
      { id: "turnip-juice", nameEn: "Turnip Juice", nameTr: "Şalgam Suyu", price: 2.99, description: "A bold, tangy Turkish beverage made from fermented purple carrots, turnips, and spices — traditionally enjoyed cold with kebabs.", image: PH },
      { id: "mineral-water", nameEn: "Mineral Water", nameTr: "Maden Suyu", price: 2.99, description: "Naturally carbonated and rich in minerals, this sparkling water is a refreshing way to cleanse the palate.", image: PH },
      { id: "bottled-water", nameEn: "Bottled Water", nameTr: "Şişe Suyu", price: 1.99, description: "Clean and crisp bottled water, served cold — a refreshing essential for any meal.", image: PH },
      { id: "can-iced-tea", nameEn: "Can Iced Tea", nameTr: "Kutu Buzlu Çay", price: 2.99, description: "Refreshing iced tea served in a can — a cool, flavorful beverage perfect for any time of day.", image: PH },
      { id: "can-soda", nameEn: "Can Soda", nameTr: "Kutu Soda", price: 2.99, description: "Chilled carbonated soft drink in a can — crisp, bubbly, and satisfying. Available in assorted flavors.", image: PH },
      { id: "two-liter-soda", nameEn: "2 Liter Soda", nameTr: "2 Litre Soda", price: 4.49, description: "Large bottle of carbonated soft drink perfect for sharing. Available in a variety of classic flavors.", image: PH }
    ]
  },

  // ---------------- Empty for now ----------------
  { id: "bakery", title: "Bakery", items: [] },
  { id: "specials", title: "Specials", items: [] },
  { id: "catering", title: "Catering", items: [] }
];
