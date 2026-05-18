import Image from "next/image";
import { siteConfig } from "@/config/site";
import { ABOUT_IMAGE_URL } from "@/config/images";

export const metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <>
      <section className="relative w-full pt-28">
        <div className="relative h-[min(55vh,520px)] min-h-[320px] w-full overflow-hidden">
          <Image
            src={ABOUT_IMAGE_URL}
            alt="Gold Coast Estates — luxury Ghanaian coastal property"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/50 to-primary/25"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent"
            aria-hidden
          />
          <div className="absolute inset-0 z-10 flex items-end">
            <div className="mx-auto w-full max-w-editorial px-6 pb-12 lg:px-10 lg:pb-16">
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-accent">
                Our Story
              </p>
              <h1 className="mt-3 font-display text-display-md text-white md:text-display-lg">
                About {siteConfig.name}
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-section-sm lg:px-10">
        <p className="text-lg leading-relaxed text-secondary">
          Gold Coast Estates connects discerning buyers, investors, and tenants with
          exceptional properties across Ghana&apos;s most desirable markets—from East Legon
          and Cantonments to Airport City and Trasacco Valley. Our approach combines
          institutional rigor with the personal attention expected by high-net-worth clients.
        </p>
        <p className="mt-6 text-lg leading-relaxed text-secondary">
          Every listing in our portfolio undergoes verification. Every client receives a
          dedicated advisor. Every transaction is supported by market intelligence, legal
          review, and secure escrow partnerships.
        </p>
      </section>
    </>
  );
}
