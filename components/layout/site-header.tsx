"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/properties", label: "Properties" },
  { href: "/apartments", label: "Apartments" },
  { href: "/offices", label: "Offices" },
  { href: "/agents", label: "Agents" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-luxury-sm py-3"
          : "bg-transparent py-6"
      )}
    >
      <div className="mx-auto flex max-w-editorial items-center justify-between px-6 lg:px-10">
        <Link href="/" className="group flex flex-col">
          <span className="font-display text-xl tracking-tight text-primary lg:text-2xl">
            {siteConfig.name}
          </span>
          <span className="text-[9px] uppercase tracking-[0.25em] text-secondary opacity-0 transition-opacity group-hover:opacity-100">
            Est. 1987
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-medium uppercase tracking-[0.15em] text-secondary transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/dashboard"
            className="hidden p-2 text-secondary transition-colors hover:text-primary sm:block"
            aria-label="Saved properties"
          >
            <Heart className="h-5 w-5" />
          </Link>
          <Button variant="outline" size="sm" className="hidden sm:inline-flex" asChild>
            <Link href="/contact">Consultation</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/auth">Sign In</Link>
          </Button>
          <button
            type="button"
            className="p-2 text-primary lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-border bg-background lg:hidden"
          >
            <nav className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium uppercase tracking-widest text-primary"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
