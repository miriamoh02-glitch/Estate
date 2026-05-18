import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";
import { LuxuryImage } from "@/components/ui/luxury-image";
import { IMAGES, luxuryUrl } from "@/config/images";

export function InvestmentCta() {
  return (
    <section className="py-section-sm lg:py-section">
      <div className="mx-auto max-w-editorial px-6 lg:px-10">
        <div className="relative min-h-[360px] overflow-hidden lg:min-h-[420px]">
          <LuxuryImage
            src={luxuryUrl(IMAGES.investment, 2000)}
            alt="Luxury estate at golden hour"
            focal="center"
            overlay="cinematic"
            sizes="90vw"
          />
          <div className="absolute inset-0 bg-primary/70" />
          <FadeIn className="relative grid gap-8 px-8 py-16 lg:grid-cols-2 lg:items-center lg:px-16 lg:py-24">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-accent">
                Investment Advisory
              </p>
              <h2 className="mt-3 font-display text-display-md text-primary-foreground">
                Build Your Portfolio With Expert Guidance
              </h2>
              <p className="mt-4 max-w-md text-primary-foreground/80">
                Schedule a private consultation with our investment team. We provide
                yield analysis, market intelligence, and access to off-market opportunities.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
              <Button variant="accent" size="lg" asChild>
                <Link href="/contact?intent=invest">
                  Book Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <Link href="/contact?intent=list">List Your Property</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
