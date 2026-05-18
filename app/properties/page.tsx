import { Suspense } from "react";
import { PropertyFilters } from "@/components/properties/property-filters";
import { PropertyListings } from "@/components/properties/property-listings";

export const metadata = {
  title: "Properties",
  description: "Browse luxury apartments, offices, villas, and investment properties.",
};

export default function PropertiesPage({
  searchParams,
}: {
  searchParams: Record<string, string | undefined>;
}) {
  return (
    <div className="pt-28 pb-section-sm lg:pb-section">
      <div className="mx-auto max-w-editorial px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-accent">
            Portfolio
          </p>
          <h1 className="mt-3 font-display text-display-md text-primary">
            Exceptional Properties
          </h1>
          <p className="mt-4 text-lg text-secondary">
            Discover curated residences and commercial assets across our global network.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[280px_1fr]">
          <Suspense fallback={<div className="h-96 shimmer-bg" />}>
            <PropertyFilters />
          </Suspense>
          <PropertyListings searchParams={searchParams} />
        </div>
      </div>
    </div>
  );
}
