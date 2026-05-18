import type { PropertyAgent } from "@/types/property";

export const agents: Record<string, PropertyAgent> = {
  "agent-1": {
    id: "agent-1",
    name: "Eleanor Whitmore",
    title: "Senior Luxury Advisor",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    verified: true,
    responseTime: "< 2 hours",
    listingsCount: 47,
    rating: 4.9,
    phone: "+1 (212) 555-0142",
    email: "eleanor@meridian-estates.com",
  },
  "agent-2": {
    id: "agent-2",
    name: "Marcus Chen",
    title: "Commercial Properties Director",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    verified: true,
    responseTime: "< 4 hours",
    listingsCount: 32,
    rating: 4.8,
    phone: "+1 (212) 555-0167",
    email: "marcus@meridian-estates.com",
  },
  "agent-3": {
    id: "agent-3",
    name: "Amara Osei",
    title: "International Investment Specialist",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    verified: true,
    responseTime: "< 1 hour",
    listingsCount: 58,
    rating: 5.0,
    phone: "+233 30 255 0198",
    email: "amara@meridian-estates.com",
  },
};
