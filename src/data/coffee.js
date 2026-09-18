// src/data/coffee.js
// Starbucks Coffee Data - Complete Menu & Features
// Based on https://www.starbucks.co.id/ (Accessed: 18 September 2026)

export const coffee = {
  type: "coffee",
  name: "Starbucks",
  description: "Everyday Premium Coffee Ritual",

  // Meta Information
  meta: {
    title:
      "The Best Coffee Makers and Cold Brew Coffee | Starbucks Coffee Company",
    description:
      "Starbucks menggunakan biji kopi arabika berkualitas tinggi sebagai basis dari minuman-minuman andalannya.",
    canonicalUrl: "https://www.starbucks.co.id",
    logo: "https://www.starbucks.co.id/image/logo.png",
  },

  // Social Media Links
  socialMedia: {
    instagram: "https://www.instagram.com/starbucksindonesia/",
    facebook: "https://www.facebook.com/StarbucksIndonesia",
    twitter: "https://twitter.com/SbuxIndonesia",
  },

  // Certifications
  certifications: [
    {
      name: "ISO Certified",
      link: "/about-us/our-heritage/starbucks-in-indonesia",
    },
    {
      name: "Halal Certified",
      link: "/about-us/our-heritage/starbucks-in-indonesia",
    },
  ],

  hero: {
    title: "To Inspire & Nurture The Human Spirit",
    subtitle:
      "One person, one cup, and one neighborhood at a time. Experience Starbucks' signature crafting and ethically sourced Arabica beans.",
    ctaText: "Explore Our Menu",
    tagline: "EVERYDAY PREMIUM COFFEE RITUAL",
  },

  theme: {
    bg: "bg-[#0B1512]",
    primary: "text-emerald-400",
    button: "bg-[#00704A]",
    accent: "text-[#D4E9E2]",
  },

  // Main Navigation Structure
  navigation: {
    coffee: {
      title: "COFFEE",
      items: [
        {
          name: "Our Coffees",
          link: "/coffee/our-coffees",
          subItems: [
            { name: "VIA", link: "/coffee/our-coffees?format=via" },
            {
              name: "Whole Bean Coffee",
              link: "/coffee/our-coffees?format=whole-bean",
            },
            { name: "View All Coffees", link: "/coffee/our-coffees" },
          ],
        },
        { name: "Find Your Perfect Coffee", link: "/coffee/finder" },
        {
          name: "Starbucks Reserve® Coffee",
          link: "/coffee/reserves",
          subItems: [
            { name: "Reserve Stores", link: "/coffee/reserves/reserve-stores" },
            { name: "Reserve Coffee", link: "/coffee/reserves/reserve-coffee" },
          ],
        },
        {
          name: "Espresso",
          link: "/coffee/espresso",
          subItems: [
            { name: "The Ingredients", link: "/coffee/espresso/ingredients" },
            {
              name: "The Best Equipment",
              link: "/coffee/espresso/the-best-equipment",
            },
            { name: "Who Makes It", link: "/coffee/espresso/who-makes-it" },
          ],
        },
        {
          name: "How to Brew Great Coffee",
          link: "/coffee/how-to-brew",
          subItems: [
            { name: "Coffee Press", link: "/coffee/how-to-brew#press" },
            { name: "Pour-Over", link: "/coffee/how-to-brew#pour-over" },
            { name: "Iced Pour-Over", link: "/coffee/how-to-brew#iced" },
            { name: "Coffee Brewer", link: "/coffee/how-to-brew#brewer" },
          ],
        },
        {
          name: "Ethical Sourcing",
          link: "/coffee/ethical-sourcing",
          subItems: [
            {
              name: "Coffee Sourcing",
              link: "/responsibility/ethical-sourcing/coffee-sourcing",
            },
            {
              name: "Coffee Quality",
              link: "/coffee/ethical-sourcing/coffee-quality",
            },
            {
              name: "Farmer Support",
              link: "/responsibility/ethical-sourcing/farmer-support",
            },
          ],
        },
        {
          name: "Learn More",
          link: "/coffee/learn",
          subItems: [
            { name: "Starbucks Roast Spectrum", link: "/coffee/learn/roast" },
            { name: "Coffee by Form", link: "/coffee/learn/coffee-form" },
            {
              name: "Flavors in Your Cup",
              link: "/coffee/learn/flavors-in-your-cup",
            },
            { name: "Coffee FAQ", link: "/coffee/learn/coffee-faqs" },
          ],
        },
      ],
    },
    menu: {
      title: "MENU",
      items: [
        {
          name: "Beverages",
          link: "/menu/beverage-list",
          subItems: [
            {
              name: "Espresso Beverages",
              link: "/menu/beverage-list#espresso",
            },
            { name: "Brewed Coffee", link: "/menu/beverage-list#brewed" },
            { name: "Blended Beverages", link: "/menu/beverage-list#blended" },
            { name: "Others", link: "/menu/beverage-list#others" },
          ],
        },
        {
          name: "Food",
          link: "/menu/food-list",
          subItems: [
            { name: "Core Menu", link: "/menu/food-list#core" },
            { name: "Reserve Menu", link: "/menu/food-list#reserve" },
          ],
        },
        {
          name: "Merchandise",
          link: "/menu/merchandise",
          subItems: [
            { name: "Seasonal", link: "/menu/merchandise#seasonal" },
            { name: "Bulk Order", link: "/menu/merchandise#bulk" },
          ],
        },
        { name: "Event Service", link: "/menu/eventservice" },
      ],
    },
    coffeehouse: {
      title: "Coffeehouse",
      items: [
        { name: "Mobile Sampling", link: "/coffeehouse/mobile-sampling" },
        { name: "Store Events", link: "/coffeehouse/store-events" },
        { name: "Online Community", link: "/coffeehouse/online-community" },
        { name: "Store Design", link: "/coffeehouse/store-design" },
        {
          name: "Merchandise",
          link: "/coffeehouse/merchandise",
          subItems: [
            { name: "Mugs", link: "/coffeehouse/merchandise#mugs" },
            { name: "Drinkware", link: "/coffeehouse/merchandise#drinkware" },
            { name: "Cold Drinkware", link: "/coffeehouse/merchandise#cold" },
            { name: "Machines", link: "/coffeehouse/merchandise#machines" },
            {
              name: "Accessories",
              link: "/coffeehouse/merchandise#accessories",
            },
          ],
        },
      ],
    },
    responsibility: {
      title: "RESPONSIBILITY",
      items: [
        {
          name: "Community",
          link: "/responsibility/community",
          subItems: [
            {
              name: "Community Service",
              link: "/responsibility/community#service",
            },
          ],
        },
        {
          name: "Ethical Sourcing",
          link: "/responsibility/ethical-sourcing",
          subItems: [
            {
              name: "Coffee Sourcing",
              link: "/responsibility/ethical-sourcing/coffee-sourcing",
            },
            {
              name: "Farmer Support",
              link: "/responsibility/ethical-sourcing/farmer-support",
            },
            {
              name: "Tea Sourcing",
              link: "/responsibility/ethical-sourcing/tea-sourcing",
            },
            {
              name: "Cocoa Sourcing",
              link: "/responsibility/ethical-sourcing/cocoa-sourcing",
            },
          ],
        },
        {
          name: "Environment",
          link: "/responsibility/environment",
          subItems: [
            {
              name: "Recycling",
              link: "/responsibility/environment#recycling",
            },
            { name: "Energy", link: "/responsibility/environment#energy" },
            { name: "Water", link: "/responsibility/environment#water" },
            {
              name: "Green Building",
              link: "/responsibility/environment#green",
            },
            {
              name: "Climate Change",
              link: "/responsibility/environment#climate",
            },
          ],
        },
      ],
    },
    rewards: {
      title: "STARBUCKS REWARDS",
      items: [
        {
          name: "Starbucks Card",
          link: "https://sbuxcard.com/site/homepage",
          subItems: [
            {
              name: "Register Your Card",
              link: "https://sbuxcard.com/register",
            },
            {
              name: "Check Your Balance",
              link: "https://sbuxcard.com/balance",
            },
            { name: "Check Your Reward", link: "https://sbuxcard.com/reward" },
            { name: "Sign In", link: "https://sbuxcard.com/login" },
          ],
        },
        {
          name: "Manage Account",
          link: "/account/manage",
          subItems: [
            { name: "Manage My Account", link: "/account/manage" },
            { name: "Manage My Card", link: "/account/card" },
            { name: "Report Loss of Card", link: "/account/report-loss" },
            { name: "Reset My Password", link: "/account/reset-password" },
          ],
        },
        {
          name: "Learn More",
          link: "/learn-more",
          subItems: [
            { name: "FAQ", link: "/learn-more/frequently-asked-questions" },
            { name: "Privacy Policy", link: "/learn-more/privacy-policy" },
            { name: "Starbucks Rewards – Benefits", link: "/card" },
            {
              name: "Terms of Use",
              link: "/learn-more/starbucks-card-terms-of-use",
            },
          ],
        },
      ],
    },
    about: {
      title: "ABOUT US",
      items: [
        {
          name: "Our Heritage",
          link: "/about-us/our-heritage",
          subItems: [
            {
              name: "Starbucks in Indonesia",
              link: "/about-us/our-heritage/starbucks-in-indonesia",
            },
          ],
        },
        {
          name: "Our Company",
          link: "/about-us/company-information",
          subItems: [
            {
              name: "Mission and Value",
              link: "/about-us/company-information/mission-statement",
            },
            {
              name: "Online Policies",
              link: "/about-us/company-information/online-policies",
            },
          ],
        },
        {
          name: "Career Center",
          link: "/about-us/career-center",
          subItems: [
            {
              name: "Retail Store Management Careers",
              link: "/career/management",
            },
            { name: "Support Center Careers", link: "/career/support" },
            { name: "Retail Barista Careers", link: "/career/barista" },
          ],
        },
        { name: "Pressroom", link: "/about-us/pressroom" },
      ],
    },
    storeLocator: {
      title: "FIND A STORE",
      link: "/store-locator",
    },
  },

  // Featured Coffee Highlight
  featuredCoffee: {
    name: "Sumatra",
    description:
      "Bertekstur penuh, buttery, hampir tanpa keasaman, favorit karyawan",
    link: "/coffee/sumatra",
    flavorProfile: {
      body: "Full",
      acidity: "Low",
      notes: ["Buttery", "Earthy", "Herbal"],
    },
  },

  menu: [
    {
      id: 1,
      category: "espresso",
      name: "Espresso",
      description:
        "Rich and intense single or double shot of pure brewed coffee",
      price: "$3.00",
      image: "/assets/expresso.jpg",
      tags: ["Classic", "Hot"],
    },
    {
      id: 2,
      category: "espresso",
      name: "Double Shot Espresso",
      description:
        " intensified espresso experience with two shots for extra bold flavor",
      price: "$4.00",
      image: "/assets/expresso.jpg",
      tags: ["Strong", "Hot"],
    },
    {
      id: 3,
      category: "coffee",
      name: "Caffè Latte",
      description:
        "Smooth and creamy espresso with steamed milk and a light layer of foam",
      price: "$4.50",
      image: "/assets/cappuccino.jpg",
      tags: ["Popular", "Creamy"],
    },
    {
      id: 4,
      category: "coffee",
      name: "Caffè Macchiato",
      description:
        "Espresso marked with a dash of frothy milk for rich, complex flavor",
      price: "$3.50",
      image: "/assets/cappuccino.jpg",
      tags: ["Classic", "Intense"],
    },
    {
      id: 5,
      category: "coffee",
      name: "Cappuccino",
      description:
        "Equal parts espresso, steamed milk, and rich foam for balanced flavor",
      price: "$4.50",
      image: "/assets/cappuccino.jpg",
      tags: ["Classic", "Foamy"],
    },
    {
      id: 6,
      category: "coffee",
      name: "Caffè Mocha",
      description:
        "Espresso with steamed milk and rich chocolate sauce, topped with whipped cream",
      price: "$5.00",
      image: "/assets/chocolate_coffee.jpg",
      tags: ["Sweet", "Chocolate", "Popular"],
    },
    {
      id: 7,
      category: "iced",
      name: "Iced Coffee",
      description:
        "Refreshing cold coffee served over ice with your choice of milk",
      price: "$4.00",
      image: "/assets/iced_coffee.jpg",
      tags: ["Cold", "Refreshing"],
    },
    {
      id: 8,
      category: "iced",
      name: "Iced Shaken Espresso",
      description:
        "Bold espresso shaken with ice and a touch of maple brown sugar syrup",
      price: "$4.50",
      image: "/assets/shaken_espresso.jpg",
      tags: ["Cold", "Sweet"],
    },
    {
      id: 9,
      category: "specialty",
      name: "Frappuccino® Blended Coffee",
      description:
        "Ice-blended coffee drink with your choice of flavoring and topped with cream",
      price: "$5.50",
      image: "/assets/frappuccino.jpg",
      tags: ["Cold", "Sweet", "Iconic"],
    },
    {
      id: 10,
      category: "specialty",
      name: "Caramel Ribbon Crunch™ Frappuccino®",
      description:
        "A crunchy caramel topping layered with coffee Frappuccino and caramel syrup",
      price: "$6.00",
      image: "/assets/caramel_frap.jpg",
      tags: ["Sweet", "Crunchy"],
    },
    {
      id: 11,
      category: "matcha",
      name: "Matcha Latte",
      description:
        "Sweetened matcha powder with steamed milk and silky texture",
      price: "$5.00",
      image: "/assets/matcha_latte.jpg",
      tags: ["Green Tea", "Antioxidants"],
    },
    {
      id: 12,
      category: "matcha",
      name: "Vanilla Sweet Cream Cold Brew",
      description:
        "Smooth cold brew topped with vanilla sweet cream for a luxurious taste",
      price: "$5.00",
      image: "/assets/vanilla_cold_brew.jpg",
      tags: ["Cold", "Creamy"],
    },
    {
      id: 13,
      category: "tea",
      name: "Chai Latte",
      description:
        "Spicy chai tea concentrate with steamed milk and warm spices",
      price: "$5.00",
      image: "/assets/chai_latte.jpg",
      tags: ["Spicy", "Warm"],
    },
    {
      id: 14,
      category: "tea",
      name: "Iced Passion Tango™ Tea",
      description:
        "Hibiscus and berry herbal tea infused with orange mint and lemongrass",
      price: "$4.00",
      image: "/assets/passion_tea.jpg",
      tags: ["Fruity", "Refresher"],
    },
    {
      id: 15,
      category: "cold_brew",
      name: "Cold Brew",
      description: "Smooth, slow-steeped coffee served chilled over ice",
      price: "$4.50",
      image: "/assets/cold_brew.jpg",
      tags: ["Strong", "Smooth"],
    },
    {
      id: 16,
      category: "cold_brew",
      name: "Nitro Cold Brew",
      description:
        "Cold brew infused with nitrogen for a velvety smooth texture and natural sweetness",
      price: "$5.00",
      image: "/assets/nitro_cold_brew.jpg",
      tags: ["Strong", "Creamy", "Unique"],
    },
  ],

  food_menu: [
    {
      id: 1,
      category: "pastry",
      name: "Croissant",
      description:
        "Buttery, flaky French pastry perfect for pairing with any beverage",
      price: "$3.50",
    },
    {
      id: 2,
      category: "pastry",
      name: "Almond Croissant",
      description:
        "Flaky croissant filled with rich almond cream and topped with sliced almonds",
      price: "$4.50",
    },
    {
      id: 3,
      category: "dessert",
      name: "Cheesecake",
      description: "Creamy New York-style cheesecake slice",
      price: "$4.50",
    },
    {
      id: 4,
      category: "dessert",
      name: "Chocolate Brownie",
      description: "Rich, fudgy chocolate brownie with walnuts",
      price: "$3.50",
    },
    {
      id: 5,
      category: "savory",
      name: "Panini",
      description: "Grilled sandwich with fresh ingredients on toasted bread",
      price: "$6.50",
    },
    {
      id: 6,
      category: "savory",
      name: "Bagel",
      description:
        "Freshly baked bagel with your choice of cream cheese spread",
      price: "$2.50",
    },
    {
      id: 7,
      category: "breakfast",
      name: "Breakfast Sandwich",
      description:
        "Egg, cheese, and choice of meat on a toasted English muffin",
      price: "$5.00",
    },
    {
      id: 8,
      category: "breakfast",
      name: "Oatmeal",
      description:
        "Warm steel-cut oats with brown sugar, raisins, and cinnamon",
      price: "$4.00",
    },
  ],

  merchandise: [
    {
      category: "drinkware",
      name: "Travel Mug",
      description:
        "Keep your drinks hot or cold on the go with our signature travel mugs",
      price: "$24.99",
      types: ["Standard", "Cold", "Personalized"],
    },
    {
      category: "mugs",
      name: "Ceramic Mugs",
      description:
        "Collection of ceramic mugs featuring seasonal designs and classics",
      price: "$17.95",
      types: ["Seasonal", "Classic", "Collector Edition"],
    },
    {
      category: "machines",
      name: "Home Brewing Machines",
      description:
        "Professional brewing equipment for the perfect home coffee experience",
      price: "$99.99-$299.99",
      types: ["Essentials® Brewer", "Verismo® System", "Presova™ System"],
    },
  ],

  // Reserve Coffee Collection
  reserveCoffee: {
    title: "Starbucks Reserve®",
    description:
      "Our most exceptional, small-lot coffees with unique flavor profiles",
    features: [
      {
        name: "Rare Batches",
        description:
          "Small-lot coffees that are meticulously selected for their distinctive character",
      },
      {
        name: "Special Roasts",
        description:
          "Unique roasting methods to highlight each coffee's individual story",
      },
      {
        name: "Exclusive Preparation",
        description:
          "Special brewing methods including siphon, cold brew, and pour-over",
      },
    ],
  },

  rewards: {
    title: "Starbucks Rewards",
    description: "Join Starbucks Rewards and unlock exclusive benefits",
    benefits: [
      {
        icon: "gift",
        title: "Free Drinks & Food",
        description: "Earn stars for every purchase and redeem for free items",
      },
      {
        icon: "sparkles",
        title: "Customization Perks",
        description:
          "Enjoy personalized drinks with special customization options",
      },
      {
        icon: "star",
        title: "Bonus Stars",
        description: "Earn double stars during promotional periods",
      },
      {
        icon: "mobile",
        title: "Mobile Order & Pay",
        description: "Skip the line and order ahead with the Starbucks app",
      },
      {
        icon: "card",
        title: "Starbucks Card",
        description:
          "Exclusive card members get special offers and birthday rewards",
      },
      {
        icon: "personalize",
        title: "Personalized Offers",
        description: "Tailored promotions based on your preferences and habits",
      },
    ],
    specialEdition: {
      title: "Starbucks Card Indonesia Edition",
      description:
        "Kartu edisi khusus untuk koleksi eksklusif hanya di Indonesia",
      available: true,
    },
    ctaText: "Join Now",
  },

  responsibility: {
    title: "Our Commitment",
    mission:
      "Creating a culture of warmth and belonging, where everyone is welcome, through sustainable practices and community engagement.",
    sections: [
      {
        icon: "leaf",
        title: "Ethical Sourcing",
        description:
          "We proudly purchase 100% of our coffee through ethical sourcing programs that support farmers.",
        initiatives: [
          "Farmer Support Centers",
          "Coffee and Farmer Equity (C.A.E.) Program",
          "Transparent Supply Chain",
          "Fair Pricing for Farmers",
        ],
      },
      {
        icon: "drop",
        title: "Water Conservation",
        description:
          "Working towards significant water reduction in all our locations worldwide.",
        initiatives: [
          "Water-efficient Equipment",
          "Wastewater Treatment",
          "Community Water Access Programs",
        ],
      },
      {
        icon: "home",
        title: "Community Impact",
        description:
          "Creating opportunities and supporting neighborhoods where we operate.",
        initiatives: [
          "Youth Employment Programs",
          "Scholarship Programs",
          "Community Service Initiatives",
          "Partner Support Networks",
        ],
      },
      {
        icon: "sun",
        title: "Environmental Stewardship",
        description:
          "Minimizing our environmental footprint and promoting sustainability.",
        initiatives: [
          "Recycling Programs",
          "Energy-Efficient Stores",
          "Sustainable Packaging",
          "Green Building Standards",
          "Climate Change Mitigation",
        ],
      },
      {
        icon: "heart",
        title: "Inclusivity & Diversity",
        description:
          "Building an inclusive environment where all people feel welcome.",
        initiatives: [
          "LGBTQ+ Rights Support",
          "Racial Equality Programs",
          "Disability Employment Initiatives",
          "Gender Equality Advocacy",
        ],
      },
    ],
    highlights: [
      {
        title: "Community Involvement",
        description:
          "Partner (karyawan) and pelanggan are encouraged to engage in community service and make a positive impact in their neighborhoods.",
      },
      {
        title: "Coffee Brings People Together",
        description:
          "Our coffee brings people together—have fun, dream big, and connect with friends and family.",
      },
    ],
  },

  about: {
    mission:
      "To inspire and nurture the human spirit – one person, one cup and one neighborhood at a time.",
    values: [
      "Quality - We source the finest Arabica beans from around the world",
      "Community - We create a sense of belonging in every store",
      "Sustainability - We operate responsibly and give back to communities",
      "Innovation - We continuously improve our products and experiences",
    ],
    heritage: {
      foundingYear: 1971,
      location: "Seattle's Pike Place Market",
      story: [
        "Founded in 1971 in Seattle's Pike Place Market, Starbucks has grown from a single coffee shop to a global phenomenon.",
        "We are dedicated to sourcing the finest Arabica coffee beans, roasting them to perfection, and delivering an exceptional coffee experience.",
        "Today, we continue our tradition of innovation while staying true to our roots and commitment to quality.",
        "Our passion for coffee and our dedication to our partners and customers has driven us to become one of the most recognized brands worldwide.",
      ],
    },
    indonesiaPresence: {
      title: "Starbucks in Indonesia",
      certifications: ["ISO Certified", "Halal Certified"],
      commitment:
        "Serving Indonesian communities with premium coffee experiences while respecting local culture and traditions.",
    },
  },

  footerLinks: {
    aboutUs: [
      { name: "Our Heritage", link: "/about-us/our-heritage" },
      { name: "Pressroom", link: "/about-us/pressroom" },
      { name: "Our Company", link: "/about-us/company-information" },
      { name: "Career Center", link: "/about-us/career-center" },
      { name: "Newsroom", link: "https://news.starbucks.com" },
    ],
    customerService: [
      { name: "FAQ", link: "/customer-service/frequently-asked-questions/" },
    ],
    quickLinks: [
      { name: "Store Locator", link: "/store-locator" },
      {
        name: "For Partners",
        link: "https://starbucks.com/account/partneracct/idmlogin",
        note: "Partner Login",
      },
    ],
    legal: [
      { name: "Privacy Statement", link: "/card/learn-more/privacy-policy" },
      {
        name: "Terms of Use",
        link: "/learn-more/starbucks-card-terms-and-condition",
      },
      { name: "Site Map", link: "/site-map" },
    ],
  },

  copyright: "© 2026 Starbucks Coffee Company, All Rights Reserved.",
};
