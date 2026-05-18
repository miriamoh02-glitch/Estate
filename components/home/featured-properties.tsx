"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { PropertyCard } from "@/components/properties/property-card";
import { getFeaturedProperties } from "@/lib/mock-data/properties";

export function FeaturedProperties() {
  const featured = getFeaturedProperties();

  return (
    <section className="py-section-sm lg:py-section">
      <div className="mx-auto max-w-editorial px-6 lg:px-10">
        <FadeIn className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-accent">
              Curated Selection
            </p>
            <h2 className="mt-3 font-display text-display-md text-primary">
              Featured Properties
            </h2>
            <p className="mt-3 max-w-md text-secondary">
              Handpicked residences and investment opportunities from our global portfolio.
            </p>
          </div>
          <Link
            href="/properties"
            className="group flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-primary"
          >
            View All
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </FadeIn>

        {/* Editorial asymmetric layout */}
        <div className="mt-12 grid gap-6 lg:grid-cols-12 lg:gap-8">
          <FadeIn delay={0.1} className="lg:col-span-7">
            <PropertyCard property={featured[0]} variant="featured" />
          </FadeIn>
          <div className="flex flex-col gap-6 lg:col-span-5">
            <FadeIn delay={0.2}>
              <PropertyCard property={featured[1]} />
            </FadeIn>
            <FadeIn delay={0.3}>
              <PropertyCard property={featured[2]} />
            </FadeIn>
          </div>
        </div>

        {/* Horizontal scroll strip */}
        <div className="mt-12 -mx-6 overflow-x-auto px-6 lg:-mx-10 lg:px-10">
          <div className="flex gap-6 pb-4" style={{ width: "max-content" }}>
            {featured.slice(3).map((property, i) => (
              <FadeIn key={property.id} delay={0.1 * i} className="w-80 shrink-0">
                <PropertyCard property={property} variant="horizontal" />
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
