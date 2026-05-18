import Link from "next/link";
import { siteConfig } from "@/config/site";

const footerNav = {
  explore: [
    { label: "All Properties", href: "/properties" },
    { label: "Apartments", href: "/apartments" },
    { label: "Offices", href: "/offices" },
    { label: "Buildings", href: "/buildings" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "List Your Property", href: "/contact?intent=list" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
};

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-editorial px-6 py-section-sm lg:px-10 lg:py-section">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Link href="/" className="font-display text-2xl tracking-tight">
              {siteConfig.name}
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
              {siteConfig.description}
            </p>
            <div className="mt-6 space-y-1 text-sm text-primary-foreground/60">
              <p>{siteConfig.contact.email}</p>
              <p>{siteConfig.contact.phone}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-5">
            <div>
              <h4 className="mb-4 text-[10px] font-medium uppercase tracking-[0.2em] text-accent">
                Explore
              </h4>
              <ul className="space-y-2.5">
                {footerNav.explore.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-[10px] font-medium uppercase tracking-[0.2em] text-accent">
                Company
              </h4>
              <ul className="space-y-2.5">
                {footerNav.company.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-[10px] font-medium uppercase tracking-[0.2em] text-accent">
                Legal
              </h4>
              <ul className="space-y-2.5">
                {footerNav.legal.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="mb-4 text-[10px] font-medium uppercase tracking-[0.2em] text-accent">
              Global Offices
            </h4>
            <ul className="space-y-4">
              {siteConfig.offices.map((office) => (
                <li key={office.city} className="text-sm">
                  <span className="font-medium text-primary-foreground">
                    {office.city}
                  </span>
                  <p className="mt-0.5 text-primary-foreground/60">
                    {office.address}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-8 sm:flex-row">
          <p className="text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            {Object.entries(siteConfig.social).map(([key, href]) => (
              <a
                key={key}
                href={href}
                className="text-xs uppercase tracking-widest text-primary-foreground/50 transition-colors hover:text-accent"
                target="_blank"
                rel="noopener noreferrer"
              >
                {key}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
