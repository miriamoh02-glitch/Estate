import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPropertyBySlug, properties } from "@/lib/mock-data/properties";
import { PropertyDetailView } from "@/components/properties/property-detail-view";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const property = getPropertyBySlug(params.slug);
  if (!property) return { title: "Property Not Found" };

  return {
    title: property.title,
    description: property.description.slice(0, 160),
    openGraph: {
      title: property.title,
      description: property.description.slice(0, 160),
      images: [{ url: property.images[0] }],
    },
  };
}

export default function PropertyDetailPage({ params }: PageProps) {
  const property = getPropertyBySlug(params.slug);
  if (!property) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: property.title,
    description: property.description,
    offers: {
      "@type": "Offer",
      price: property.price,
      priceCurrency: property.currency,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: property.location.city,
      addressRegion: property.location.area,
      addressCountry: property.location.country,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PropertyDetailView property={property} />
    </>
  );
}
