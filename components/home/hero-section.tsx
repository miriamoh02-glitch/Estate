"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { LuxuryImage } from "@/components/ui/luxury-image";
import { siteConfig } from "@/config/site";
import { IMAGES, luxuryUrl } from "@/config/images";
import { HeroSearch } from "./hero-search";

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        <LuxuryImage
          src={luxuryUrl(IMAGES.hero, 2400)}
          alt="Luxury modern villa with pool"
          priority
          focal="center"
          overlay="hero"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-editorial flex-col justify-end px-6 pb-16 pt-32 lg:px-10 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.3em] text-accent">
            Premium Real Estate · Ghana
          </p>
          <h1 className="font-display text-display-md text-primary-foreground text-balance md:text-display-lg lg:text-display-xl">
            Exceptional Ghanaian Estates For Modern Living.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/80">
            {siteConfig.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button variant="accent" size="lg" asChild>
              <Link href="/properties">
                Explore Properties
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 lg:mt-16"
        >
          <HeroSearch />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-10 flex flex-wrap gap-8 border-t border-primary-foreground/20 pt-8 lg:gap-16"
        >
          {[
            { label: "Active Listings", value: siteConfig.stats.listings },
            { label: "Prime Markets", value: siteConfig.stats.cities },
            {
              label: "Client Satisfaction",
              value: siteConfig.stats.satisfaction,
              suffix: "%",
            },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-3xl text-primary-foreground">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-1 text-xs uppercase tracking-widest text-primary-foreground/60">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
