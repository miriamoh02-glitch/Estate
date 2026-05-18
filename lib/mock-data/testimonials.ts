import type { Testimonial } from "@/types/property";
import { IMAGES, luxuryThumb } from "@/config/images";

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Victoria Ashford",
    role: "Private Investor",
    location: "London",
    quote:
      "Meridian Estates understood our requirements before we articulated them. The penthouse acquisition was seamless—from first viewing to closing in six weeks.",
    image: luxuryThumb("1438761681033-6461ffad8d80"),
  },
  {
    id: "2",
    name: "James Okonkwo",
    role: "CEO, Okonkwo Holdings",
    location: "Lagos / Accra",
    quote:
      "Their market intelligence across West Africa is unmatched. We secured three investment properties with full transparency on title and projected yields.",
    image: luxuryThumb("1507003211169-0a1dd7228f2d"),
  },
  {
    id: "3",
    name: "Sophie Laurent",
    role: "Family Office Director",
    location: "Geneva",
    quote:
      "Virtual viewings, verified documentation, and a dedicated advisor made our Dubai portfolio expansion effortless despite being continents away.",
    image: luxuryThumb("1544005313-94ddf0286df2"),
  },
];

export const categories = [
  {
    id: "apartments",
    title: "Apartments",
    description: "Urban residences with world-class amenities",
    imageId: IMAGES.categories.apartments,
    href: "/apartments",
    count: 842,
  },
  {
    id: "offices",
    title: "Offices",
    description: "Grade-A commercial spaces for enterprise",
    imageId: IMAGES.categories.offices,
    href: "/offices",
    count: 312,
  },
  {
    id: "villas",
    title: "Villas",
    description: "Private estates and beachfront retreats",
    imageId: IMAGES.categories.villas,
    href: "/properties?type=villa",
    count: 156,
  },
  {
    id: "commercial",
    title: "Commercial",
    description: "Retail, mixed-use, and investment assets",
    imageId: IMAGES.categories.commercial,
    href: "/properties?type=commercial",
    count: 198,
  },
  {
    id: "land",
    title: "Land",
    description: "Development parcels and agricultural holdings",
    imageId: IMAGES.categories.land,
    href: "/properties?type=land",
    count: 89,
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
