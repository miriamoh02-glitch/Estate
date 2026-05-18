"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { siteConfig } from "@/config/site";
import { HERO_IMAGE_URL } from "@/config/images";
import { HeroSearch } from "./hero-search";

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-primary">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE_URL}
          alt="Luxury Ghanaian estate with pool and tropical landscaping"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Dark overlays for readable text */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-primary/92 via-primary/65 to-primary/35"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-background via-primary/30 to-transparent"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-editorial flex-col justify-end px-6 pb-16 pt-32 lg:px-10 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.3em] text-accent">
            Premium Real Estate · Ghana
          </p>
          <h1 className="font-display text-display-md text-balance text-white md:text-display-lg lg:text-display-xl">
            Exceptional Ghanaian Estates For Modern Living.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
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
          className="mt-10 flex flex-wrap gap-8 border-t border-white/20 pt-8 lg:gap-16"
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
              <p className="font-display text-3xl text-white">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-1 text-xs uppercase tracking-widest text-white/60">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
