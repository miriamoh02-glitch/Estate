export const siteConfig = {
  name: "Gold Coast Estates",
  tagline: "Premium properties across Ghana",
  description:
    "Discover luxury homes, executive apartments, and investment-grade estates in Accra, Tema, Kumasi, and beyond.",
  url: "https://goldcoast-estates.com.gh",
  contact: {
    email: "concierge@goldcoast-estates.com.gh",
    phone: "+233 30 255 0198",
    address: "Airport City, Independence Avenue, Accra",
  },
  social: {
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  offices: [
    { city: "Accra", address: "Airport City, Independence Avenue" },
    { city: "Tema", address: "Community 25, Devtraco Estates" },
    { city: "Kumasi", address: "Ahodwo, Ring Road Central" },
    { city: "Takoradi", address: "Airport Ridge, Sekondi Road" },
  ],
  stats: {
    listings: 847,
    agents: 48,
    cities: 12,
    satisfaction: 98,
  },
} as const;
