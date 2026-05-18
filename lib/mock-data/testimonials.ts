import type { Testimonial } from "@/types/property";
import { IMAGES } from "@/config/images";

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Victoria Ashford",
    role: "Private Investor",
    location: "Accra",
    quote:
      "Gold Coast Estates understood our requirements before we articulated them. The East Legon acquisition was seamless—from first viewing to closing in six weeks.",
    image: "",
  },
  {
    id: "2",
    name: "James Okonkwo",
    role: "CEO, Okonkwo Holdings",
    location: "Accra",
    quote:
      "Their market intelligence across Ghana is unmatched. We secured three investment properties with full transparency on title and projected yields.",
    image: "",
  },
  {
    id: "3",
    name: "Akosua Mensah",
    role: "Family Office Director",
    location: "Kumasi",
    quote:
      "Virtual viewings, verified documentation, and a dedicated advisor made our portfolio expansion effortless across Accra and Tema.",
    image: "",
  },
];

export const categories = [
  {
    id: "apartments",
    title: "Apartments",
    description: "Urban residences with world-class amenities",
    imageId: IMAGES.categories.apartments,
    href: "/apartments",
    count: 312,
  },
  {
    id: "offices",
    title: "Offices",
    description: "Grade-A commercial spaces for enterprise",
    imageId: IMAGES.categories.offices,
    href: "/offices",
    count: 98,
  },
  {
    id: "villas",
    title: "Villas",
    description: "Private estates and gated community homes",
    imageId: IMAGES.categories.villas,
    href: "/properties?type=villa",
    count: 84,
  },
  {
    id: "commercial",
    title: "Commercial",
    description: "Retail, mixed-use, and investment assets",
    imageId: IMAGES.categories.commercial,
    href: "/properties?type=commercial",
    count: 67,
  },
  {
    id: "land",
    title: "Land",
    description: "Development parcels with clear title",
    imageId: IMAGES.categories.land,
    href: "/properties?type=land",
    count: 45,
  },
];

export const trustFeatures = [
  {
    title: "Verified Listings",
    description:
      "Every property undergoes title verification, documentation review, and on-site inspection before listing.",
    icon: "shield-check",
  },
  {
    title: "Premium Support",
    description:
      "Dedicated advisors available seven days a week for viewings, negotiations, and closing coordination.",
    icon: "headphones",
  },
  {
    title: "Virtual Viewing",
    description:
      "Immersive 3D tours and live video walkthroughs for international buyers and busy executives.",
    icon: "video",
  },
  {
    title: "Secure Transactions",
    description:
      "Escrow partnerships, encrypted communications, and audit trails protect every transaction.",
    icon: "lock",
  },
  {
    title: "Market Expertise",
    description:
      "Quarterly market reports, yield analysis, and neighborhood intelligence from local specialists.",
    icon: "trending-up",
  },
];
