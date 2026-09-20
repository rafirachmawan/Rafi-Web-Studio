// src/data/coffee/rewards.js
// Starbucks Rewards Program Data

export const rewardsProgram = {
  earningRate: 1, // 1 Star per Rp 10,000 spent
  threshold: 10000,
  
  rewards: [
    {
      id: 'free-syrup',
      minStars: 5,
      title: 'Free Extra Syrup / Sauce Customization',
      description: 'Customize your drink with free syrup or sauce addition',
      category: 'customization'
    },
    {
      id: 'free-espresso-shot',
      minStars: 25,
      title: 'Free Extra Espresso Shot Add-on',
      description: 'Add an extra shot of espresso to any beverage',
      category: 'add-on'
    },
    {
      id: 'free-brewed-coffee',
      minStars: 50,
      title: 'Free Brewed Coffee or Fresh Bakery Item',
      description: 'Redeem for a free brewed coffee or select bakery item',
      category: 'food'
    },
    {
      id: 'free-beverage',
      minStars: 100,
      title: 'Free Grande Handcrafted Beverage',
      description: 'Get any Grande handcrafted beverage absolutely free',
      category: 'beverage'
    },
    {
      id: 'free-tumbler',
      minStars: 150,
      title: 'Free Starbucks Reserve Special Tumbler',
      description: 'Exclusive merchandise reward - limited availability',
      category: 'merchandise'
    }
  ],
  
  tiers: [
    {
      id: 'regular',
      name: 'Member',
      benefits: ['Earn Stars', 'Birthday Reward'],
      requiredStars: 0
    },
    {
      id: 'green',
      name: 'Green Level',
      benefits: ['5% Bonus Stars', 'Exclusive Events', 'Digital Menu Access'],
      requiredStars: 300
    },
    {
      id: 'gold',
      name: 'Gold Level',
      benefits: ['10% Bonus Stars', 'Free Delivery', 'Priority Support', 'Early Access to New Products'],
      requiredStars: 600
    }
  ],
  
  terms: [
    'Stars expire after 12 months of inactivity',
    'One reward redemption per visit',
    'Not valid with other promotions',
    'Starbucks reserves the right to modify program terms'
  ]
};

export function calculateStars(spendAmount) {
  return Math.floor(spendAmount / rewardsProgram.threshold);
}

export function getUnlockedRewards(stars) {
  return rewardsProgram.rewards.map(reward => ({
    ...reward,
    unlocked: stars >= reward.minStars
  }));
}

export function getTierByStars(stars) {
  const sortedTiers = [...rewardsProgram.tiers].sort((a, b) => b.requiredStars - a.requiredStars);
  return sortedTiers.find(tier => stars >= tier.requiredStars) || sortedTiers[sortedTiers.length - 1];
}
