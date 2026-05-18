import { PropertyListings } from "@/components/properties/property-listings";

export const metadata = { title: "Offices" };

export default function OfficesPage() {
  return (
    <div className="pt-28 pb-section-sm">
      <div className="mx-auto max-w-editorial px-6 lg:px-10">
        <h1 className="font-display text-display-md text-primary">Premium Offices</h1>
        <p className="mt-4 text-secondary">Grade-A commercial spaces for enterprise.</p>
        <div className="mt-12">
          <PropertyListings searchParams={{ type: "office" }} />
        </div>
      </div>
    </div>
  );
}
