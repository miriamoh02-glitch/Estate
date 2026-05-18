"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { PropertyCard } from "@/components/properties/property-card";
import { getFeaturedProperties } from "@/lib/mock-data/properties";
import { categories } from "@/lib/mock-data/testimonials";
import { formatNumber } from "@/lib/utils";

export function PortfolioSection() {
  const featured = getFeaturedProperties();

  return (
    <section className="border-y border-border bg-muted/20 py-section-sm lg:py-section">
      <div className="mx-auto max-w-editorial px-6 lg:px-10">
        <FadeIn className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-accent">
              Portfolio
            </p>
            <h2 className="mt-3 font-display text-display-md text-primary">
              Featured Properties &amp; Categories
            </h2>
            <p className="mt-3 text-secondary">
              Curated listings and browse paths across apartments, offices, villas, and more.
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

        <div className="mt-12">
          <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.2em] text-secondary">
            Featured
          </p>
          <StaggerContainer className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featured.slice(0, 4).map((property) => (
              <StaggerItem key={property.id} className="min-w-0">
                <PropertyCard property={property} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

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
