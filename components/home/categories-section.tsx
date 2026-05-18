"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { LuxuryImage } from "@/components/ui/luxury-image";
import { categories } from "@/lib/mock-data/testimonials";
import { formatNumber } from "@/lib/utils";
import { luxuryUrl } from "@/config/images";

export function CategoriesSection() {
  return (
    <section className="border-y border-border bg-muted/30 py-section-sm lg:py-section">
      <div className="mx-auto max-w-editorial px-6 lg:px-10">
        <FadeIn className="max-w-xl">
          <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-accent">
            Browse by Category
          </p>
          <h2 className="mt-3 font-display text-display-md text-primary">
            Premium Property Categories
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <FadeIn key={cat.id} delay={i * 0.08}>
              <Link href={cat.href} className="group relative block overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative overflow-hidden ${
                    i === 0
                      ? "aspect-[16/10] md:col-span-2 md:row-span-2 md:aspect-auto md:min-h-[420px]"
                      : "aspect-[4/3]"
                  }`}
                >
                  <LuxuryImage
                    src={luxuryUrl(cat.imageId, i === 0 ? 1600 : 1200)}
                    alt={cat.title}
                    focal={i === 0 ? "center" : "center"}
                    overlay="cinematic"
                    hoverZoom
                    sizes={i === 0 ? "66vw" : "33vw"}
                  />
                  <div className="absolute inset-0 z-10 flex flex-col justify-end p-6">
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-accent">
                          {formatNumber(cat.count)} listings
                        </p>
                        <h3 className="mt-1 font-display text-2xl text-primary-foreground">
                          {cat.title}
                        </h3>
                        <p className="mt-1 text-sm text-primary-foreground/70">
                          {cat.description}
                        </p>
                      </div>
                      <span className="flex h-10 w-10 items-center justify-center border border-primary-foreground/30 text-primary-foreground transition-colors group-hover:bg-accent group-hover:text-primary group-hover:border-accent">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
