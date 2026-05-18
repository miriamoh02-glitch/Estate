"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

const cities = ["New York", "London", "Dubai", "Accra"];
const types = [
  { value: "apartment", label: "Apartment" },
  { value: "house", label: "House" },
  { value: "villa", label: "Villa" },
  { value: "office", label: "Office" },
  { value: "land", label: "Land" },
  { value: "rental", label: "Rental" },
];

export function PropertyFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const updateFilter = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) params.set(key, value);
      else params.delete(key);
      router.push(`/properties?${params.toString()}`, { scroll: false });
    },
    [router, searchParams]
  );

  return (
    <aside className="border border-border bg-card p-6">
      <div className="mb-6 flex items-center gap-2">
        <SlidersHorizontal className="h-4 w-4 text-accent" />
        <h3 className="text-sm font-medium uppercase tracking-widest">Filters</h3>
      </div>

      <div className="space-y-6">
        <div>
          <label className="mb-2 block text-[10px] uppercase tracking-widest text-secondary">
            City
          </label>
          <select
            value={searchParams.get("city") ?? ""}
            onChange={(e) => updateFilter("city", e.target.value)}
            className="w-full border-b border-border bg-transparent py-2 text-sm outline-none focus:border-accent"
          >
            <option value="">All Cities</option>
            {cities.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-2 block text-[10px] uppercase tracking-widest text-secondary">
            Property Type
          </label>
          <select
            value={searchParams.get("type") ?? ""}
            onChange={(e) => updateFilter("type", e.target.value)}
            className="w-full border-b border-border bg-transparent py-2 text-sm outline-none focus:border-accent"
          >
            <option value="">All Types</option>
            {types.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-2 block text-[10px] uppercase tracking-widest text-secondary">
            Bedrooms (min)
          </label>
          <select
            value={searchParams.get("bedrooms") ?? ""}
            onChange={(e) => updateFilter("bedrooms", e.target.value)}
            className="w-full border-b border-border bg-transparent py-2 text-sm outline-none focus:border-accent"
          >
            <option value="">Any</option>
            {[1, 2, 3, 4, 5].map((n) => (
              <option key={n} value={n}>
                {n}+
              </option>
            ))}
          </select>
        </div>

        <Button
          variant="ghost"
          size="sm"
          className="w-full"
          onClick={() => router.push("/properties")}
        >
          Clear All Filters
        </Button>
      </div>
    </aside>
  );
}
