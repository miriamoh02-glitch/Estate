import { PropertyCard } from "@/components/properties/property-card";
import { filterProperties, parsePriceFilter } from "@/lib/properties/filter";
import type { PropertyType } from "@/types/property";

export function PropertyListings({
  searchParams,
}: {
  searchParams: Record<string, string | undefined>;
}) {
  const priceRange = parsePriceFilter(searchParams.price);
  const results = filterProperties({
    city: searchParams.city,
    type: searchParams.type as PropertyType | undefined,
    bedrooms: searchParams.bedrooms ? Number(searchParams.bedrooms) : undefined,
    minPrice: priceRange.minPrice,
    maxPrice: priceRange.maxPrice,
    q: searchParams.q,
  });

  return (
    <div>
      <p className="mb-6 text-sm text-secondary">
        {results.length} {results.length === 1 ? "property" : "properties"} found
      </p>

      {results.length === 0 ? (
        <div className="border border-border bg-card p-12 text-center">
          <p className="font-display text-xl text-primary">No properties match your criteria</p>
          <p className="mt-2 text-secondary">Try adjusting your filters or search in another city.</p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-2">
          {results.map((property, i) => (
            <div
              key={property.id}
              className={i % 3 === 0 ? "sm:col-span-2" : ""}
            >
              <PropertyCard
                property={property}
                variant={i % 3 === 0 ? "featured" : "default"}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
