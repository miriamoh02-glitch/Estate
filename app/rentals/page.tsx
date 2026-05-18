import { PropertyListings } from "@/components/properties/property-listings";

export const metadata = { title: "Rentals" };

export default function RentalsPage() {
  return (
    <div className="pt-28 pb-section-sm">
      <div className="mx-auto max-w-editorial px-6 lg:px-10">
        <h1 className="font-display text-display-md text-primary">Premium Rentals</h1>
        <p className="mt-4 text-secondary">Exceptional spaces available for lease.</p>
        <div className="mt-12">
          <PropertyListings searchParams={{ status: "for_rent" }} />
        </div>
      </div>
    </div>
  );
}
