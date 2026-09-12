// src/data/coffee/menu.js
// Centralized menu data for Starbucks landing page

export const coffeeMenu = {
  beverages: [
    {
      id: 'espresso-double-shot',
      name: 'Double Shot Espresso',
      description: 'Rich, full-bodied espresso with a caramel sweetness.',
      basePrice: 35000,
      badge: 'Signature',
      tag: 'Intense',
      image: '/images/coffee/espresso-shot.jpg',
      allergens: [],
      calories: 10,
      available: true,
      hotIced: ['hot', 'iced']
    },
    {
      id: 'caramel-macchiato',
      name: 'Caramel Macchiato',
      description: 'Steamed milk with vanilla-flavored syrup, marked with espresso and drizzled with caramel.',
      basePrice: 58000,
      badge: 'Best Seller',
      tag: 'Sweet',
      image: '/images/coffee/caramel-macchiato.jpg',
      allergens: ['dairy'],
      calories: 250,
      available: true,
      hotIced: ['hot', 'iced']
    },
    {
      id: 'matcha-green-tea-latte',
      name: 'Matcha Green Tea Latte',
      description: 'Smooth Uji matcha green tea powder blended with steamed milk.',
      basePrice: 55000,
      badge: 'Classic',
      tag: 'Earthy',
      image: '/images/coffee/matcha-latte.jpg',
      allergens: ['dairy'],
      calories: 280,
      available: true,
      hotIced: ['hot', 'iced']
    }
  ],
  food: [
    {
      id: 'butter-croissant',
      name: 'Butter Croissant',
      description: 'Classic buttery, flaky pastry. Perfect with your morning coffee.',
      basePrice: 25000,
      badge: 'Core Menu',
      tag: 'Bakery',
      image: '/images/food/butter-croissant.jpg',
      allergens: ['gluten', 'dairy'],
      calories: 340,
      available: true
    },
    {
      id: 'truffle-mushroom-panini',
      name: 'Truffle Mushroom Panini',
      description: 'Savory mushrooms with truffle oil, melted cheese on artisan bread.',
      basePrice: 45000,
      badge: 'Reserve',
      tag: 'Savory',
      image: '/images/food/truffle-panini.jpg',
      allergens: ['gluten', 'dairy'],
      calories: 420,
      available: true
    },
    {
      id: 'new-york-cheesecake',
      name: 'New York Cheesecake',
      description: 'Rich and creamy cheesecake with a graham cracker crust.',
      basePrice: 40000,
      badge: 'Sweet',
      tag: 'Dessert',
      image: '/images/food/cheesecake.jpg',
      allergens: ['gluten', 'dairy', 'eggs'],
      calories: 450,
      available: true
    }
  ],
  merchandise: [
    {
      id: 'siren-logo-tumbler',
      name: 'Siren Logo Tumbler',
      description: '16oz stainless steel tumbler to keep your drinks hot or cold.',
      basePrice: 250000,
      badge: 'Classic',
      tag: 'Tumbler',
      image: '/images/merch/tumbler.jpg',
      weight: '400g',
      available: true
    },
    {
      id: 'dewata-bali-mug',
      name: 'Dewata Bali Mug',
      description: 'Exclusive 12oz ceramic mug featuring Balinese motifs.',
      basePrice: 180000,
      badge: 'Special Edition',
      tag: 'Mug',
      image: '/images/merch/bali-mug.jpg',
      weight: '350g',
      available: true
    },
    {
      id: 'french-press-brewer',
      name: 'French Press Brewer',
      description: 'Classic coffee press for the perfect home brew.',
      basePrice: 350000,
      badge: 'Brewing Gear',
      tag: 'Equipment',
      image: '/images/merch/french-press.jpg',
      weight: '600g',
      available: true
    }
  ]
};

export function getMenuItems(category) {
  return coffeeMenu[category] || [];
}

export function getCategories() {
  return Object.keys(coffeeMenu);
}

export function isItemAvailable(itemId) {
  for (const category in coffeeMenu) {
    const item = coffeeMenu[category].find(i => i.id === itemId);
    if (item && item.available) return true;
  }
  return false;
}

export function formatPrice(price) {
  return `Rp ${price.toLocaleString('id-ID')}`;
}
