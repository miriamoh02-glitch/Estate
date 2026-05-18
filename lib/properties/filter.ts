import type { Property, PropertyType } from "@/types/property";
import { properties } from "@/lib/mock-data/properties";

export interface PropertyFilters {
  city?: string;
  type?: PropertyType | string;
  bedrooms?: number;
  bathrooms?: number;
  minPrice?: number;
  maxPrice?: number;
  status?: string;
  furnished?: boolean;
  q?: string;
}

export function filterProperties(filters: PropertyFilters): Property[] {
  return properties.filter((p) => {
    if (filters.city && !p.location.city.toLowerCase().includes(filters.city.toLowerCase())) {
      return false;
    }
    if (filters.type && p.type !== filters.type) return false;
    if (filters.bedrooms && p.specs.bedrooms < filters.bedrooms) return false;
    if (filters.bathrooms && p.specs.bathrooms < filters.bathrooms) return false;
    if (filters.status && p.status !== filters.status) return false;
    if (filters.furnished !== undefined && p.specs.furnished !== filters.furnished) {
      return false;
    }
    if (filters.minPrice && p.price < filters.minPrice) return false;
    if (filters.maxPrice && p.price > filters.maxPrice) return false;
    if (filters.q) {
      const q = filters.q.toLowerCase();
      const haystack = `${p.title} ${p.location.city} ${p.location.area}`.toLowerCase();
      if (!haystack.includes(q)) return false;
    }
    return true;
  });
}

export function parsePriceFilter(price?: string): { minPrice?: number; maxPrice?: number } {
  if (!price) return {};
  if (price.endsWith("+")) {
    return { minPrice: parseInt(price.replace("+", ""), 10) };
  }
  const [min, max] = price.split("-").map(Number);
  return { minPrice: min, maxPrice: max };
}
