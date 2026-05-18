import { PropertyListings } from "@/components/properties/property-listings";

export const metadata = { title: "Apartments" };

export default function ApartmentsPage() {
  return (
    <div className="pt-28 pb-section-sm">
      <div className="mx-auto max-w-editorial px-6 lg:px-10">
        <h1 className="font-display text-display-md text-primary">Luxury Apartments</h1>
        <p className="mt-4 text-secondary">Urban residences with world-class amenities.</p>
        <div className="mt-12">
          <PropertyListings searchParams={{ type: "apartment" }} />
        </div>
      </div>
    </div>
  );
}
