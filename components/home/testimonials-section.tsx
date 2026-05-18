"use client";

import Image from "next/image";
import { FadeIn } from "@/components/motion/fade-in";
import { testimonials } from "@/lib/mock-data/testimonials";

export function TestimonialsSection() {
  return (
    <section className="bg-primary py-section-sm text-primary-foreground lg:py-section">
      <div className="mx-auto max-w-editorial px-6 lg:px-10">
        <FadeIn className="text-center">
          <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-accent">
            Client Stories
          </p>
          <h2 className="mt-3 font-display text-display-md">
            Trusted by Discerning Clients Worldwide
          </h2>
        </FadeIn>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <FadeIn key={t.id} delay={i * 0.15}>
              <blockquote className="flex h-full flex-col border border-primary-foreground/10 p-8">
                <p className="flex-1 font-display text-xl leading-relaxed text-primary-foreground/90">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-8 flex items-center gap-4 border-t border-primary-foreground/10 pt-6">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <cite className="not-italic font-medium">{t.name}</cite>
                    <p className="text-sm text-primary-foreground/60">
                      {t.role} · {t.location}
                    </p>
                  </div>
                </footer>
              </blockquote>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
