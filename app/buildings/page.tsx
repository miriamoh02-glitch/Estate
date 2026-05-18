import { PropertyListings } from "@/components/properties/property-listings";

export const metadata = { title: "Buildings" };

export default function BuildingsPage() {
  return (
    <div className="pt-28 pb-section-sm">
      <div className="mx-auto max-w-editorial px-6 lg:px-10">
        <h1 className="font-display text-display-md text-primary">Mixed-Use Buildings</h1>
        <p className="mt-4 text-secondary">Commercial and residential investment assets.</p>
        <div className="mt-12">
          <PropertyListings searchParams={{ type: "building" }} />
        </div>
      </div>
    </div>
  );
}
