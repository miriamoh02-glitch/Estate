import Link from "next/link";
import { Heart, Calendar, MessageSquare, Settings } from "lucide-react";
import { PropertyCard } from "@/components/properties/property-card";
import { getFeaturedProperties } from "@/lib/mock-data/properties";

export const metadata = { title: "Dashboard" };

const sections = [
  { icon: Heart, label: "Saved Properties", href: "/dashboard#saved", count: 3 },
  { icon: Calendar, label: "Scheduled Viewings", href: "/dashboard#viewings", count: 1 },
  { icon: MessageSquare, label: "Inquiry History", href: "/dashboard#inquiries", count: 2 },
  { icon: Settings, label: "Account Settings", href: "/dashboard#settings", count: null },
];

export default function DashboardPage() {
  const saved = getFeaturedProperties().slice(0, 2);

  return (
    <div className="pt-28 pb-section-sm">
      <div className="mx-auto max-w-editorial px-6 lg:px-10">
        <h1 className="font-display text-display-md text-primary">Your Dashboard</h1>
        <p className="mt-2 text-secondary">Manage saved properties, viewings, and inquiries.</p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {sections.map(({ icon: Icon, label, href, count }) => (
            <Link
              key={label}
              href={href}
              className="border border-border bg-card p-6 transition-shadow hover:shadow-luxury-sm"
            >
              <Icon className="h-5 w-5 text-accent" />
              <p className="mt-3 text-sm font-medium text-primary">{label}</p>
              {count !== null && (
                <p className="mt-1 text-2xl font-display text-primary">{count}</p>
              )}
            </Link>
          ))}
        </div>

        <section id="saved" className="mt-16">
          <h2 className="font-display text-2xl text-primary">Saved Properties</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {saved.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
