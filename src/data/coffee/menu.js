// src/data/coffee/menu.js
// Comprehensive menu data for Starbucks landing page
// Based on https://www.starbucks.co.id/ (Updated: 18 September 2026)

export const coffeeMenu = {
  beverages: [
    // ESPRESSO DRINKS
    {
      id: "espresso",
      name: "Espresso",
      description:
        "Rich and intense single or double shot of pure brewed coffee.",
      basePrice: 30000,
      badge: "Classic",
      tag: "Hot",
      allergens: [],
      calories: 5,
      available: true,
      hotIced: ["hot"],
      categories: ["espresso"],
    },
    {
      id: "double-shot-espresso",
      name: "Double Shot Espresso",
      description:
        "Intensified espresso experience with two shots for extra bold flavor.",
      basePrice: 40000,
      badge: "Signature",
      tag: "Strong",
      allergens: [],
      calories: 10,
      available: true,
      hotIced: ["hot"],
      categories: ["espresso"],
    },
    {
      id: "caffè-macchiato",
      name: "Caffè Macchiato",
      description:
        "Espresso marked with a dash of frothy milk for rich, complex flavor.",
      basePrice: 35000,
      badge: "Classic",
      tag: "Intense",
      allergens: ["dairy"],
      calories: 80,
      available: true,
      hotIced: ["hot"],
      categories: ["espresso"],
    },

    // COFFEE DRINKS
    {
      id: "cappuccino",
      name: "Cappuccino",
      description:
        "Equal parts espresso, steamed milk, and rich foam for balanced flavor.",
      basePrice: 45000,
      badge: "Classic",
      tag: "Foamy",
      allergens: ["dairy"],
      calories: 120,
      available: true,
      hotIced: ["hot"],
      categories: ["coffee"],
    },
    {
      id: "latte",
      name: "Caffè Latte",
      description:
        "Smooth and creamy espresso with steamed milk and a light layer of foam.",
      basePrice: 45000,
      badge: "Popular",
      tag: "Creamy",
      allergens: ["dairy"],
      calories: 190,
      available: true,
      hotIced: ["hot", "iced"],
      categories: ["coffee"],
    },
    {
      id: "mocha",
      name: "Caffè Mocha",
      description:
        "Espresso with steamed milk and rich chocolate sauce, topped with whipped cream.",
      basePrice: 50000,
      badge: "Sweet",
      tag: "Chocolate",
      allergens: ["dairy"],
      calories: 300,
      available: true,
      hotIced: ["hot", "iced"],
      categories: ["coffee"],
    },

    // ICED COFFEE
    {
      id: "iced-coffee",
      name: "Iced Coffee",
      description:
        "Refreshing cold coffee served over ice with your choice of milk.",
      basePrice: 40000,
      badge: "Refresh",
      tag: "Cold",
      allergens: ["dairy"],
      calories: 100,
      available: true,
      hotIced: ["iced"],
      categories: ["iced"],
    },
    {
      id: "iced-shaken-espresso",
      name: "Iced Shaken Espresso",
      description:
        "Bold espresso shaken with ice and a touch of maple brown sugar syrup.",
      basePrice: 45000,
      badge: "New",
      tag: "Spicy",
      allergens: ["dairy"],
      calories: 110,
      available: true,
      hotIced: ["iced"],
      categories: ["iced"],
    },

    // FRAPPUCCINO & BLENDED
    {
      id: "frappuccino",
      name: "Frappuccino® Blended Coffee",
      description:
        "Ice-blended coffee drink with your choice of flavoring and topped with cream.",
      basePrice: 55000,
      badge: "Iconic",
      tag: "Sweet",
      allergens: ["dairy"],
      calories: 380,
      available: true,
      hotIced: ["cold"],
      categories: ["specialty"],
    },
    {
      id: "caramel-ribbon-crunch",
      name: "Caramel Ribbon Crunch™ Frappuccino®",
      description:
        "A crunchy caramel topping layered with coffee Frappuccino and caramel syrup.",
      basePrice: 60000,
      badge: "Premium",
      tag: "Sweet",
      allergens: ["dairy"],
      calories: 490,
      available: true,
      hotIced: ["cold"],
      categories: ["specialty"],
    },

    // TEA & MATCHA
    {
      id: "matcha-latte",
      name: "Matcha Latte",
      description:
        "Sweetened matcha powder with steamed milk and silky texture.",
      basePrice: 50000,
      badge: "Green Tea",
      tag: "Antioxidants",
      allergens: ["dairy"],
      calories: 270,
      available: true,
      hotIced: ["hot", "iced"],
      categories: ["matcha"],
    },
    {
      id: "chai-latte",
      name: "Chai Latte",
      description:
        "Spicy chai tea concentrate with steamed milk and warm spices.",
      basePrice: 50000,
      badge: "Warm",
      tag: "Spicy",
      allergens: ["dairy"],
      calories: 280,
      available: true,
      hotIced: ["hot", "iced"],
      categories: ["tea"],
    },
    {
      id: "passion-tango-tea",
      name: "Iced Passion Tango™ Tea",
      description:
        "Hibiscus and berry herbal tea infused with orange mint and lemongrass.",
      basePrice: 40000,
      badge: "Fruity",
      tag: "Refresher",
      allergens: [],
      calories: 45,
      available: true,
      hotIced: ["iced"],
      categories: ["tea"],
    },

    // COLD BREW COLLECTION
    {
      id: "cold-brew",
      name: "Cold Brew",
      description: "Smooth, slow-steeped coffee served chilled over ice.",
      basePrice: 45000,
      badge: "Signature",
      tag: "Strong",
      allergens: [],
      calories: 5,
      available: true,
      hotIced: ["iced"],
      categories: ["cold_brew"],
    },
    {
      id: "nitro-cold-brew",
      name: "Nitro Cold Brew",
      description:
        "Cold brew infused with nitrogen for a velvety smooth texture and natural sweetness.",
      basePrice: 50000,
      badge: "Premium",
      tag: "Creamy",
      allergens: [],
      calories: 10,
      available: true,
      hotIced: ["cold"],
      categories: ["cold_brew"],
    },
    {
      id: "vanilla-sweet-cream-cold-brew",
      name: "Vanilla Sweet Cream Cold Brew",
      description:
        "Smooth cold brew topped with vanilla sweet cream for a luxurious taste.",
      basePrice: 50000,
      badge: "Popular",
      tag: "Sweet",
      allergens: ["dairy"],
      calories: 110,
      available: true,
      hotIced: ["cold"],
      categories: ["cold_brew"],
    },
  ],

  food: [
    // PASTRY
    {
      id: "croissant",
      name: "Croissant",
      description:
        "Buttery, flaky French pastry perfect for pairing with any beverage.",
      basePrice: 35000,
      badge: "Core Menu",
      tag: "Bakery",
      allergens: ["gluten", "dairy"],
      calories: 340,
      available: true,
    },
    {
      id: "almond-croissant",
      name: "Almond Croissant",
      description:
        "Flaky croissant filled with rich almond cream and topped with sliced almonds.",
      basePrice: 45000,
      badge: "Reserve",
      tag: "Bakery",
      allergens: ["gluten", "dairy", "nuts"],
      calories: 460,
      available: true,
    },

    // DESSERTS
    {
      id: "cheesecake",
      name: "Cheesecake",
      description: "Creamy New York-style cheesecake slice.",
      basePrice: 45000,
      badge: "Sweet",
      tag: "Dessert",
      allergens: ["dairy", "eggs", "gluten"],
      calories: 450,
      available: true,
    },
    {
      id: "chocolate-brownie",
      name: "Chocolate Brownie",
      description: "Rich, fudgy chocolate brownie with walnuts.",
      basePrice: 35000,
      badge: "Indulge",
      tag: "Dessert",
      allergens: ["dairy", "eggs", "gluten", "nuts"],
      calories: 420,
      available: true,
    },

    // SAVORY
    {
      id: "panini",
      name: "Panini",
      description: "Grilled sandwich with fresh ingredients on toasted bread.",
      basePrice: 65000,
      badge: "Light Meal",
      tag: "Savory",
      allergens: ["gluten", "dairy"],
      calories: 420,
      available: true,
    },
    {
      id: "bagel",
      name: "Bagel",
      description:
        "Freshly baked bagel with your choice of cream cheese spread.",
      basePrice: 25000,
      badge: "Simple",
      tag: "Bakery",
      allergens: ["gluten", "dairy"],
      calories: 280,
      available: true,
    },

    // BREAKFAST
    {
      id: "breakfast-sandwich",
      name: "Breakfast Sandwich",
      description:
        "Egg, cheese, and choice of meat on a toasted English muffin.",
      basePrice: 50000,
      badge: "Protein",
      tag: "Hearty",
      allergens: ["eggs", "dairy", "gluten"],
      calories: 350,
      available: true,
    },
    {
      id: "oatmeal",
      name: "Oatmeal",
      description:
        "Warm steel-cut oats with brown sugar, raisins, and cinnamon.",
      basePrice: 40000,
      badge: "Healthy",
      tag: "Hot Cereal",
      allergens: [],
      calories: 230,
      available: true,
    },
  ],

  merchandise: [
    {
      id: "travel-mug-standard",
      name: "Travel Mug (Standard)",
      description:
        "Keep your drinks hot or cold on the go with our signature travel mugs.",
      basePrice: 249900,
      badge: "Essential",
      tag: "Drinkware",
      weight: "400g",
      available: true,
      types: ["Standard", "Cold", "Personalized"],
    },
    {
      id: "ceramic-mug-seasonal",
      name: "Ceramic Mug (Seasonal)",
      description:
        "Collection of ceramic mugs featuring seasonal designs and classics.",
      basePrice: 179500,
      badge: "Collector",
      tag: "Mug",
      weight: "350g",
      available: true,
      types: ["Seasonal", "Classic", "Collector Edition"],
    },
    {
      id: "home-brewing-machine",
      name: "Home Brewing Machine",
      description:
        "Professional brewing equipment for the perfect home coffee experience.",
      basePrice: 999900,
      badge: "Premium",
      tag: "Equipment",
      weight: "2kg",
      available: true,
      types: ["Essentials Brewer", "Verismo System", "Presoya System"],
    },
  ],
};

// Helper functions
export function getMenuItems(category) {
  return coffeeMenu[category] || [];
}

export function getCategories() {
  return Object.keys(coffeeMenu);
}

export function isItemAvailable(itemId) {
  for (const category in coffeeMenu) {
    const item = coffeeMenu[category].find((i) => i.id === itemId);
    if (item && item.available) return true;
  }
  return false;
}

export function formatPrice(price) {
  return `Rp ${price.toLocaleString("id-ID")}`;
}

export function getAllBeverages() {
  return coffeeMenu.beverages;
}

export function getBeverageByCategory(category) {
  return coffeeMenu.beverages.filter((item) =>
    item.categories?.includes(category),
  );
}
