// src/data/coffee.js
// Starbucks Coffee Data - Complete Menu & Features

export const coffee = {
  type: "coffee",
  name: "Starbucks",
  description: "Everyday Premium Coffee Ritual",
  
  hero: {
    title: "To Inspire & Nurture The Human Spirit",
    subtitle: "One person, one cup, and one neighborhood at a time. Experience Starbucks' signature crafting and ethically sourced Arabica beans.",
    ctaText: "Explore Our Menu"
  },
  
  theme: {
    bg: "bg-[#0B1512]",
    primary: "text-emerald-400",
    button: "bg-[#00704A]",
    accent: "text-[#D4E9E2]"
  },
  
  menu: [
    {
      id: 1,
      category: "espresso",
      name: "Espresso",
      description: "Rich and intense single or double shot of pure brewed coffee",
      price: "$3.00",
      image: "/assets/expresso.jpg",
      tags: ["Classic", "Hot"]
    },
    {
      id: 2,
      category: "coffee",
      name: "Caffè Latte",
      description: "Smooth and creamy espresso with steamed milk and a light layer of foam",
      price: "$4.50",
      image: "/assets/cappuccino.jpg",
      tags: ["Popular", "Creamy"]
    },
    {
      id: 3,
      category: "coffee",
      name: "Cappuccino",
      description: "Equal parts espresso, steamed milk, and rich foam for balanced flavor",
      price: "$4.50",
      image: "/assets/cappuccino.jpg",
      tags: ["Classic", "Foamy"]
    },
    {
      id: 4,
      category: "iced",
      name: "Iced Coffee",
      description: "Refreshing cold coffee served over ice with your choice of milk",
      price: "$4.00",
      image: "/assets/iced_coffee.jpg",
      tags: ["Cold", "Refreshing"]
    },
    {
      id: 5,
      category: "specialty",
      name: "Frappuccino® Blended Coffee",
      description: "Ice-blended coffee drink with your choice of flavoring and topped with cream",
      price: "$5.50",
      image: "/assets/frappuccino.jpg",
      tags: ["Cold", "Sweet", "Iconic"]
    },
    {
      id: 6,
      category: "matcha",
      name: "Matcha Latte",
      description: "Sweetened matcha powder with steamed milk and silky texture",
      price: "$5.00",
      image: "/assets/matcha_latte.jpg",
      tags: ["Green Tea", "Antioxidants"]
    },
    {
      id: 7,
      category: "tea",
      name: "Chai Latte",
      description: "Spicy chai tea concentrate with steamed milk and warm spices",
      price: "$5.00",
      image: "/assets/chai_latte.jpg",
      tags: ["Spicy", "Warm"]
    },
    {
      id: 8,
      category: "cold_brew",
      name: "Cold Brew",
      description: "Smooth, slow-steeped coffee served chilled over ice",
      price: "$4.50",
      image: "/assets/cold_brew.jpg",
      tags: ["Strong", "Smooth"]
    }
  ],
  
  food_menu: [
    {
      id: 1,
      name: "Croissant",
      description: "Buttery, flaky French pastry perfect for pairing with any beverage",
      price: "$3.50",
      category: "pastry"
    },
    {
      id: 2,
      name: "Cheesecake",
      description: "Creamy New York-style cheesecake slice",
      price: "$4.50",
      category: "dessert"
    },
    {
      id: 3,
      name: "Panini",
      description: "Grilled sandwich with fresh ingredients on toasted bread",
      price: "$6.50",
      category: "savory"
    }
  ],
  
  rewards: {
    title: "Starbucks Rewards",
    description: "Join Starbucks Rewards and unlock exclusive benefits",
    benefits: [
      {
        icon: "gift",
        title: "Free Drinks & Food",
        description: "Earn stars for every purchase and redeem for free items"
      },
      {
        icon: "sparkles",
        title: "Customization Perks",
        description: "Enjoy personalized drinks with special customization options"
      },
      {
        icon: "star",
        title: "Bonus Stars",
        description: "Earn double stars during promotional periods"
      },
      {
        icon: "mobile",
        title: "Mobile Order & Pay",
        description: "Skip the line and order ahead with the Starbucks app"
      }
    ],
    ctaText: "Join Now"
  },
  
  responsibility: {
    title: "Our Commitment",
    sections: [
      {
        icon: "leaf",
        title: "Ethical Sourcing",
        description: "We proudly purchase 100% of our coffee through ethical sourcing programs that support farmers."
      },
      {
        icon: "drop",
        title: "Water Conservation",
        description: "Working towards significant water reduction in all our locations worldwide."
      },
      {
        icon: "home",
        title: "Community Impact",
        description: "Creating opportunities and supporting neighborhoods where we operate."
      }
    ]
  },
  
  about: {
    mission: "To inspire and nurture the human spirit – one person, one cup and one neighborhood at a time.",
    story: [
      "Founded in 1971 in Seattle's Pike Place Market, Starbucks has grown from a single coffee shop to a global phenomenon.",
      "We are dedicated to sourcing the finest Arabica coffee beans, roasting them to perfection, and delivering an exceptional coffee experience.",
      "Today, we continue our tradition of innovation while staying true to our roots and commitment to quality."
    ]
  }
};
