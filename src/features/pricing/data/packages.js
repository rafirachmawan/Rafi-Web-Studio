// src/data/pricing/packages.js
// Centralized pricing packages data

export const landingPagePackages = {
  starter: {
    id: 'landing-starter',
    name: 'Landing Page Standard',
    description: 'Perfect for small businesses and personal branding',
    originalPrice: 999000,
    promoPrice: 499000,
    badge: 'Save 50%',
    popularity: false,
    features: [
      '1 Modern Responsive Page',
      'Cool Design & High Speed Access',
      'WhatsApp Chat & Call Button Integration',
      'Basic SEO & Google Indexing',
      false, // No Free Domain
      false  // No Free Hosting
    ],
    featureLabels: [
      'One Page Website',
      'Fast Loading < 2s',
      'Direct WA Contact',
      'SEO Optimized',
      'Domain (.com) = Rp 350k/year',
      'Hosting = Rp 500k/year'
    ],
    cta: 'Choose Starter',
    recommended: false
  },
  pro: {
    id: 'landing-pro',
    name: 'Pro Landing Page',
    description: 'Best value with premium domain and full hosting',
    originalPrice: 1999000,
    promoPrice: 999000,
    badge: 'Save 50% • Most Popular',
    popularity: true,
    flameIcon: true,
    features: [
      'Multi Section Complete (Long Page)',
      'Hypnotic Copywriting & Custom Figma Design',
      'Premium Domain (.com) for 1 Year',
      'Cloud Hosting Unlimited Bandwidth',
      'Advanced SEO Setup & Google Console Integration',
      'Google Analytics & FB/Tiktok Pixel Integration',
      '3-Month System Bug Warranty + Priority Support'
    ],
    featureLabels: [
      '5-10 Sections Included',
      'Professional Figma Design',
      'Free .com Domain (1 year)',
      'Unlimited Bandwidth Cloud',
      'SEO Console Setup',
      'Analytics & Pixel Tracking',
      '90 Days Free Fix Support'
    ],
    cta: 'Get Started Now',
    recommended: true
  }
};

export const mobileAppPackages = {
  starter: {
    id: 'mobile-starter',
    name: 'Basic Mobile App',
    description: 'Single platform app for simple needs',
    originalPrice: 3999000,
    promoPrice: 1999000,
    badge: 'Save 50%',
    popularity: false,
    features: [
      '1 Release Platform (Android or iOS)',
      'Modern Interactive UI/UX Design',
      'Independent Core Features & Basic API Integration',
      'Assisted Upload to Google Play / App Store',
      '3-Month System Bug Repair Warranty',
      'Technical Consultation & Initial System Flow'
    ],
    cta: 'Choose Starter Mobile',
    recommended: false
  },
  pro: {
    id: 'mobile-pro',
    name: 'Pro Mobile App',
    description: 'Cross-platform app with advanced features',
    originalPrice: 7999000,
    promoPrice: 3999999,
    badge: 'Save 50% • Best Seller',
    popularity: true,
    flameIcon: true,
    features: [
      'Instant Multiplatform Release (Android & iOS)',
      'Custom High-Fidelity UI/UX Design (Figma)',
      'Payment Gateway & Maps API Integration',
      'Realtime Push Notifications & Chat Features',
      'Web-based Admin Panel to Manage Content & Data',
      '6-Month Premium Maintenance & Support'
    ],
    cta: 'Get Started Now',
    recommended: true
  }
};

export const webSystemPackages = {
  basic: {
    id: 'web-basic',
    name: 'Basic Web System',
    description: 'Essential management system for small operations',
    originalPrice: 3000000,
    promoPrice: 1499999,
    badge: 'Save 50%',
    popularity: false,
    features: [
      'Data Management & User Management System (Multi-Role)',
      'Interactive Admin Dashboard Page & Charts',
      'Data Export / Import Features (Excel / PDF / CSV)',
      'Fast & Secure Relational Database Integration',
      'Premium Cloud Server & SSL Security Lifetime',
      '3-Month Fast Fix & System Bug Warranty'
    ],
    cta: 'Choose System Basic',
    recommended: false
  },
  custom: {
    id: 'web-custom',
    name: 'Custom Web System / ERP',
    description: 'Complex business management at enterprise scale',
    originalPrice: 7000000,
    promoPrice: 3499999,
    badge: 'Save 50% • Most Comprehensive',
    popularity: true,
    flameIcon: true,
    features: [
      'Complex Business Management System (ERP / CRM / HRIS)',
      'Multi-Branch, Inventory & Multi-Warehouse Integration',
      'Third-Party API Integration & Automatic Payment Gateway',
      'High-Level Database Performance Optimization (Millions of Data)',
      'Exclusive Design According to Unique Business Workflow Needs',
      'Priority Technical Support & Maintenance for 1 Year'
    ],
    cta: 'Get Started Now',
    recommended: true
  }
};

export function formatPrice(price) {
  return `Rp ${price.toLocaleString('id-ID')}`;
}

export function formatOldPrice(price) {
  return `Rp ${price.toLocaleString('id-ID')}`;
}

export const pricingTabs = [
  { label: 'Landing Page', value: 'landingpage' },
  { label: 'Mobile Apps', value: 'mobileapps' },
  { label: 'Web System', value: 'websystem' },
  { label: 'Custom', value: 'custom' }
];
