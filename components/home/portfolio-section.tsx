"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { PropertyCard } from "@/components/properties/property-card";
import { getFeaturedProperties, properties } from "@/lib/mock-data/properties";
import { categories } from "@/lib/mock-data/testimonials";
import { formatNumber } from "@/lib/utils";

export function PortfolioSection() {
  const featured = getFeaturedProperties();
  const apartments = properties
    .filter((p) => p.type === "apartment")
    .slice(0, 4);

  return (
    <section className="border-y border-border bg-muted/20 py-section-sm lg:py-section">
      <div className="mx-auto max-w-editorial px-6 lg:px-10">
        <FadeIn className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-accent">
              Portfolio
            </p>
            <h2 className="mt-3 font-display text-display-md text-primary">
              Properties &amp; Apartments
            </h2>
            <p className="mt-3 text-secondary">
              Curated Ghanaian estates, residences, and commercial assets—in a clear,
              sequenced view.
            </p>
          </div>
          <Link
            href="/properties"
            className="group flex shrink-0 items-center gap-2 text-sm font-medium uppercase tracking-widest text-primary"
          >
            View All Properties
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </FadeIn>

        {/* Featured properties — equal row */}
        <div className="mt-12">
          <div className="mb-6 flex items-end justify-between gap-4 border-b border-border pb-4">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-secondary">
              Featured Properties
            </p>
            <span className="text-xs text-secondary">{featured.length} listings</span>
          </div>
          <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((property) => (
              <StaggerItem key={property.id} className="min-w-0">
                <PropertyCard property={property} variant="uniform" />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Apartments — equal row */}
        <div className="mt-16">
          <div className="mb-6 flex items-end justify-between gap-4 border-b border-border pb-4">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-secondary">
              Apartments
            </p>
            <Link
              href="/apartments"
              className="text-xs font-medium uppercase tracking-widest text-accent hover:text-primary"
            >
              View all apartments →
            </Link>
          </div>
          <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {apartments.map((property) => (
              <StaggerItem key={property.id} className="min-w-0">
                <PropertyCard property={property} variant="uniform" />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Categories — text cards */}
        <div className="mt-16 border-t border-border pt-12">
          <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.2em] text-secondary">
            Browse by Category
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {categories.map((cat, i) => (
              <FadeIn key={cat.id} delay={i * 0.05}>
                <Link
                  href={cat.href}
                  className="group flex h-full flex-col justify-between border border-border bg-card p-5 transition-all hover:border-accent hover:shadow-luxury-sm"
                >
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-accent">
                      {formatNumber(cat.count)}
                    </p>
                    <h3 className="mt-2 font-display text-lg text-primary transition-colors group-hover:text-accent">
                      {cat.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-secondary">
                      {cat.description}
                    </p>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1 text-[10px] font-medium uppercase tracking-widest text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    Explore
                    <ArrowUpRight className="h-3 w-3" />
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
