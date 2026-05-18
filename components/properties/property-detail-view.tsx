"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Bed,
  Bath,
  Maximize,
  MapPin,
  Calendar,
  Heart,
  Share2,
  Car,
  CheckCircle2,
  Star,
  type LucideIcon,
} from "lucide-react";
import type { Property } from "@/types/property";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LuxuryImage } from "@/components/ui/luxury-image";
import { VerifiedBadge } from "./verified-badge";
import { PropertyStatusBadge } from "./property-status";
import { PropertyCard } from "./property-card";
import { properties } from "@/lib/mock-data/properties";

export function PropertyDetailView({ property }: { property: Property }) {
  const [activeImage, setActiveImage] = useState(0);
  const related = properties
    .filter((p) => p.id !== property.id && p.type === property.type)
    .slice(0, 3);

  const priceLabel =
    property.listingType === "rent"
      ? `${formatPrice(property.price, property.currency)}/mo`
      : formatPrice(property.price, property.currency);

  return (
    <div className="pt-20">
      {/* Hero Gallery */}
      <section className="relative">
        <div className="relative aspect-[16/9] max-h-[80vh] w-full overflow-hidden lg:aspect-[21/9]">
          <LuxuryImage
            src={property.images[activeImage]}
            alt={property.title}
            priority
            focal="center"
            overlay="cinematic"
            sizes="100vw"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/80 to-transparent p-6 lg:p-10">
          <div className="mx-auto flex max-w-editorial gap-3 overflow-x-auto px-6 lg:px-10">
            {property.images.map((img, i) => (
              <button
                key={img}
                type="button"
                onClick={() => setActiveImage(i)}
                className={`relative h-20 w-28 shrink-0 overflow-hidden border-2 transition-all hover:opacity-100 ${
                  i === activeImage
                    ? "border-accent ring-2 ring-accent/30"
                    : "border-transparent opacity-60"
                }`}
              >
                <Image
                  src={img}
                  alt=""
                  fill
                  className="object-cover brightness-[0.95] saturate-[1.1]"
                  sizes="112px"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-editorial px-6 py-12 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_380px]">
          {/* Main content */}
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <PropertyStatusBadge status={property.status} />
              {property.verified && <VerifiedBadge />}
            </div>
            <h1 className="mt-4 font-display text-display-md text-primary">
              {property.title}
            </h1>
            <p className="mt-2 flex items-center gap-2 text-secondary">
              <MapPin className="h-4 w-4" />
              {property.location.address}, {property.location.city}
            </p>

            <p className="mt-8 text-lg leading-relaxed text-secondary">
              {property.description}
            </p>

            {/* Specs */}
            <section className="mt-12 border-t border-border pt-12">
              <h2 className="font-display text-2xl text-primary">Specifications</h2>
              <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-4">
                {property.specs.bedrooms > 0 && (
                  <Spec icon={Bed} label="Bedrooms" value={String(property.specs.bedrooms)} />
                )}
                {property.specs.bathrooms > 0 && (
                  <Spec icon={Bath} label="Bathrooms" value={String(property.specs.bathrooms)} />
                )}
                <Spec
                  icon={Maximize}
                  label="Area"
                  value={`${property.specs.sqft.toLocaleString()} sqft`}
                />
                {property.specs.parking > 0 && (
                  <Spec icon={Car} label="Parking" value={String(property.specs.parking)} />
                )}
              </div>
            </section>

            {/* Amenities */}
            <section className="mt-12 border-t border-border pt-12">
              <h2 className="font-display text-2xl text-primary">Amenities</h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {property.amenities.map((a) => (
                  <li key={a} className="flex items-center gap-2 text-secondary">
                    <CheckCircle2 className="h-4 w-4 text-success" />
                    {a}
                  </li>
                ))}
              </ul>
            </section>

            {/* Map placeholder */}
            <section className="mt-12 border-t border-border pt-12">
              <h2 className="font-display text-2xl text-primary">Location</h2>
              <div className="mt-6 flex aspect-[16/9] items-center justify-center border border-border bg-muted">
                <p className="text-sm text-secondary">
                  Map integration — {property.location.city} ({property.location.lat},{" "}
                  {property.location.lng})
                </p>
              </div>
            </section>

            {/* Viewing scheduler placeholder */}
            <section className="mt-12 border-t border-border pt-12">
              <h2 className="font-display text-2xl text-primary">Schedule a Viewing</h2>
              <p className="mt-2 text-secondary">
                Select your preferred date and time. Our team will confirm within 24 hours.
              </p>
              <form className="mt-6 grid gap-4 sm:grid-cols-2">
                <input
                  type="date"
                  className="border border-border bg-card px-4 py-3 text-sm outline-none focus:border-accent"
                />
                <select className="border border-border bg-card px-4 py-3 text-sm outline-none focus:border-accent">
                  <option>10:00 AM</option>
                  <option>2:00 PM</option>
                  <option>4:30 PM</option>
                </select>
                <label className="flex items-center gap-2 text-sm text-secondary sm:col-span-2">
                  <input type="checkbox" className="accent-accent" />
                  Request virtual tour instead
                </label>
                <Button type="button" variant="accent" className="sm:col-span-2">
                  <Calendar className="h-4 w-4" />
                  Request Viewing
                </Button>
              </form>
            </section>

            {/* Related */}
            {related.length > 0 && (
              <section className="mt-16 border-t border-border pt-12">
                <h2 className="font-display text-2xl text-primary">You May Also Like</h2>
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {related.map((p) => (
                    <PropertyCard key={p.id} property={p} />
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sticky sidebar */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="border border-border bg-card p-6 shadow-luxury-sm">
              <p className="font-display text-3xl text-primary">{priceLabel}</p>
              <div className="mt-6 space-y-3">
                <Button variant="accent" className="w-full" size="lg">
                  <Calendar className="h-4 w-4" />
                  Schedule Viewing
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <Link href={`/contact?property=${property.slug}`}>Contact Agent</Link>
                </Button>
                <div className="flex gap-2">
                  <Button variant="ghost" className="flex-1" size="sm">
                    <Heart className="h-4 w-4" />
                    Save
                  </Button>
                  <Button variant="ghost" className="flex-1" size="sm">
                    <Share2 className="h-4 w-4" />
                    Share
                  </Button>
                </div>
              </div>

              {/* Agent */}
              <div className="mt-8 border-t border-border pt-6">
                <div className="flex items-center gap-4">
                  <Image
                    src={property.agent.avatar}
                    alt={property.agent.name}
                    width={56}
                    height={56}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-primary">{property.agent.name}</p>
                    <p className="text-xs text-secondary">{property.agent.title}</p>
                    {property.agent.verified && (
                      <span className="mt-1 flex items-center gap-1 text-xs text-success">
                        <CheckCircle2 className="h-3 w-3" />
                        Verified Agent
                      </span>
                    )}
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between text-xs text-secondary">
                  <span className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-accent text-accent" />
                    {property.agent.rating}
                  </span>
                  <span>{property.agent.listingsCount} listings</span>
                  <span>Responds {property.agent.responseTime}</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

function Spec({
  icon: Icon,
  label,
  value,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
}) {
  return (
    <div className="border border-border p-4">
      <Icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
      <p className="mt-2 text-[10px] uppercase tracking-widest text-secondary">{label}</p>
      <p className="mt-1 font-medium text-primary">{value}</p>
    </div>
  );
}

