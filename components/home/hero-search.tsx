"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Search, MapPin, Home, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

const propertyTypes = [
  { value: "", label: "All Types" },
  { value: "apartment", label: "Apartment" },
  { value: "house", label: "House" },
  { value: "villa", label: "Villa" },
  { value: "office", label: "Office" },
  { value: "land", label: "Land" },
];

const priceRanges = [
  { value: "", label: "Any Price" },
  { value: "0-500000", label: "Under $500K" },
  { value: "500000-2000000", label: "$500K – $2M" },
  { value: "2000000-10000000", label: "$2M – $10M" },
  { value: "10000000+", label: "$10M+" },
];

export function HeroSearch() {
  const router = useRouter();
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (location) params.set("city", location);
    if (type) params.set("type", type);
    if (price) params.set("price", price);
    router.push(`/properties?${params.toString()}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="border border-border/50 bg-background/95 p-4 shadow-luxury backdrop-blur-md lg:p-6"
    >
      <div className="grid gap-4 lg:grid-cols-[1fr_180px_180px_auto] lg:items-end">
        <div>
          <label className="mb-2 flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-widest text-secondary">
            <MapPin className="h-3 w-3" />
            Location
          </label>
          <input
            type="text"
            placeholder="City or neighborhood"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full border-b border-border bg-transparent py-2 text-primary outline-none placeholder:text-secondary/50 focus:border-accent"
          />
        </div>
        <div>
          <label className="mb-2 flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-widest text-secondary">
            <Home className="h-3 w-3" />
            Property Type
          </label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full border-b border-border bg-transparent py-2 text-primary outline-none focus:border-accent"
          >
            {propertyTypes.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-2 flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-widest text-secondary">
            <DollarSign className="h-3 w-3" />
            Price Range
          </label>
          <select
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full border-b border-border bg-transparent py-2 text-primary outline-none focus:border-accent"
          >
            {priceRanges.map((p) => (
              <option key={p.value} value={p.value}>
                {p.label}
              </option>
            ))}
          </select>
        </div>
        <Button type="submit" variant="accent" size="lg" className="w-full lg:w-auto">
          <Search className="h-4 w-4" />
          Search
        </Button>
      </div>
    </form>
  );
}
