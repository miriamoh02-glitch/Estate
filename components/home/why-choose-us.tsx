import {
  ShieldCheck,
  Headphones,
  Video,
  Lock,
  TrendingUp,
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";

const icons = {
  "shield-check": ShieldCheck,
  headphones: Headphones,
  video: Video,
  lock: Lock,
  "trending-up": TrendingUp,
};

const features = [
  {
    title: "Verified Listings",
    description:
      "Every property undergoes title verification, documentation review, and on-site inspection before listing.",
    icon: "shield-check" as const,
  },
  {
    title: "Premium Support",
    description:
      "Dedicated advisors available seven days a week for viewings, negotiations, and closing coordination.",
    icon: "headphones" as const,
  },
  {
    title: "Virtual Viewing",
    description:
      "Immersive 3D tours and live video walkthroughs for international buyers and busy executives.",
    icon: "video" as const,
  },
  {
    title: "Secure Transactions",
    description:
      "Escrow partnerships, encrypted communications, and audit trails protect every transaction.",
    icon: "lock" as const,
  },
  {
    title: "Market Expertise",
    description:
      "Quarterly market reports, yield analysis, and neighborhood intelligence from local specialists.",
    icon: "trending-up" as const,
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-section-sm lg:py-section">
      <div className="mx-auto max-w-editorial px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <FadeIn>
            <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-accent">
              Why Meridian
            </p>
            <h2 className="mt-3 font-display text-display-md text-primary">
              Trust Built Into Every Transaction
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-secondary">
              We combine institutional-grade due diligence with white-glove service—so
              you can invest and relocate with complete confidence.
            </p>
          </FadeIn>

          <StaggerContainer className="grid gap-6 sm:grid-cols-2">
            {features.map((feature) => {
              const Icon = icons[feature.icon];
              return (
                <StaggerItem key={feature.title}>
                  <div className="border border-border bg-card p-6 transition-shadow hover:shadow-luxury-sm">
                    <Icon className="h-6 w-6 text-accent" strokeWidth={1.5} />
                    <h3 className="mt-4 font-display text-lg text-primary">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-secondary">
                      {feature.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
