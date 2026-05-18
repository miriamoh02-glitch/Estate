export const siteConfig = {
  name: "Meridian Estates",
  tagline: "Exceptional spaces for modern living",
  description:
    "Explore luxury apartments, premium office spaces, and investment-grade properties across prime locations.",
  url: "https://meridian-estates.com",
  contact: {
    email: "concierge@meridian-estates.com",
    phone: "+1 (212) 555-0198",
    address: "88 Park Avenue, New York, NY 10016",
  },
  social: {
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  offices: [
    { city: "New York", address: "88 Park Avenue, NY 10016" },
    { city: "London", address: "22 Berkeley Square, W1J 6HE" },
    { city: "Dubai", address: "DIFC Gate Village 3" },
    { city: "Accra", address: "Airport City, Independence Ave" },
  ],
  stats: {
    listings: 2847,
    agents: 156,
    cities: 42,
    satisfaction: 98,
  },
} as const;
