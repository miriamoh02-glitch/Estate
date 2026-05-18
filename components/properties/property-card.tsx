"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Bed, Bath, Maximize, Heart, MapPin } from "lucide-react";
import type { Property } from "@/types/property";
import { formatPrice } from "@/lib/utils";
import { LuxuryImage } from "@/components/ui/luxury-image";
import { VerifiedBadge } from "./verified-badge";
import { PropertyStatusBadge } from "./property-status";

interface PropertyCardProps {
  property: Property;
  variant?: "default" | "featured" | "horizontal" | "uniform";
  className?: string;
}

export function PropertyCard({
  property,
  variant = "default",
  className,
}: PropertyCardProps) {
  const priceLabel =
    property.listingType === "rent"
      ? `${formatPrice(property.price, property.currency)}/mo`
      : formatPrice(property.price, property.currency);

  if (variant === "horizontal") {
    return (
      <motion.article
        whileHover={{ y: -4 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={className}
      >
        <Link
          href={`/properties/${property.slug}`}
          className="group flex gap-6 border border-border bg-card p-4 transition-shadow hover:shadow-luxury"
        >
          <div className="relative h-44 w-64 shrink-0 overflow-hidden bg-muted">
            <LuxuryImage
              src={property.images[0]}
              alt={property.title}
              focal="center"
              overlay="cinematic"
              hoverZoom
              sizes="256px"
            />
            {property.verified && (
              <div className="absolute left-3 top-3 z-10">
                <VerifiedBadge />
              </div>
            )}
          </div>
          <PropertyCardContent
            property={property}
            priceLabel={priceLabel}
            compact
          />
        </Link>
      </motion.article>
    );
  }

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      <Link
        href={`/properties/${property.slug}`}
        className="group block overflow-hidden border border-border bg-card transition-shadow hover:shadow-luxury"
      >
        <div
          className={
            variant === "uniform"
              ? "relative aspect-[4/3] bg-muted"
              : variant === "featured"
                ? "relative aspect-[4/5] min-h-[280px] bg-muted"
                : "relative aspect-[3/4] min-h-[260px] bg-muted"
          }
        >
          <LuxuryImage
            src={property.images[0]}
            alt={property.title}
            focal="center"
            overlay="cinematic"
            hoverZoom
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 z-10 flex items-start justify-between p-3">
            <div className="flex flex-wrap gap-1.5">
              <PropertyStatusBadge status={property.status} />
              {property.verified && <VerifiedBadge />}
            </div>
            <button
              type="button"
              className="flex h-9 w-9 shrink-0 items-center justify-center bg-background/90 text-primary opacity-0 backdrop-blur transition-all group-hover:opacity-100"
              onClick={(e) => e.preventDefault()}
              aria-label="Save property"
            >
              <Heart className="h-4 w-4" />
            </button>
          </div>
        </div>
        <PropertyCardContent property={property} priceLabel={priceLabel} />
      </Link>
    </motion.article>
  );
}

function PropertyCardContent({
  property,
  priceLabel,
  compact,
}: {
  property: Property;
  priceLabel: string;
  compact?: boolean;
}) {
  return (
    <div className={compact ? "flex flex-1 flex-col justify-center py-2" : "p-5"}>
      <p className="font-display text-xl tabular-nums text-primary">{priceLabel}</p>
      <h3
        className={`mt-1.5 font-display text-pretty leading-snug text-primary ${
          compact ? "line-clamp-2 text-lg" : "line-clamp-2 min-h-[3.25rem] text-xl"
        }`}
      >
        {property.title}
      </h3>
      <p className="mt-2 flex items-center gap-1.5 text-sm text-secondary">
        <MapPin className="h-3.5 w-3.5 shrink-0" />
        <span className="truncate">
          {property.location.area}, {property.location.city}
        </span>
      </p>
      {property.specs.bedrooms > 0 && (
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-secondary">
          <span className="flex items-center gap-1.5">
            <Bed className="h-3.5 w-3.5" />
            {property.specs.bedrooms} bed
          </span>
          <span className="flex items-center gap-1.5">
            <Bath className="h-3.5 w-3.5" />
            {property.specs.bathrooms} bath
          </span>
          <span className="flex items-center gap-1.5">
            <Maximize className="h-3.5 w-3.5" />
            {property.specs.sqft.toLocaleString()} sqft
          </span>
        </div>
      )}
    </div>
  );
}
