export type PropertyType =
  | "apartment"
  | "house"
  | "villa"
  | "office"
  | "commercial"
  | "land"
  | "building"
  | "rental";

export type PropertyStatus = "for_sale" | "for_rent" | "sold" | "pending";

export type ListingType = "sale" | "rent";

export interface PropertyAgent {
  id: string;
  name: string;
  title: string;
  avatar: string;
  verified: boolean;
  responseTime: string;
  listingsCount: number;
  rating: number;
  phone: string;
  email: string;
}

export interface Property {
  id: string;
  slug: string;
  title: string;
  description: string;
  type: PropertyType;
  listingType: ListingType;
  status: PropertyStatus;
  price: number;
  currency: string;
  location: {
    city: string;
    area: string;
    country: string;
    address: string;
    lat: number;
    lng: number;
  };
  specs: {
    bedrooms: number;
    bathrooms: number;
    sqft: number;
    parking: number;
    yearBuilt: number;
    furnished: boolean;
  };
  amenities: string[];
  images: string[];
  featured: boolean;
  verified: boolean;
  agent: PropertyAgent;
  createdAt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  image: string;
}

export interface PropertyCategory {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
  count: number;
}
