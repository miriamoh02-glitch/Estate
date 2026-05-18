import { siteConfig } from "@/config/site";
import { LuxuryImage } from "@/components/ui/luxury-image";
import { IMAGES, luxuryUrl } from "@/config/images";

export const metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-28">
        <div className="relative aspect-[21/9] max-h-[50vh] min-h-[320px] overflow-hidden">
          <LuxuryImage
            src={luxuryUrl(IMAGES.about, 2000)}
            alt="Meridian Estates"
            priority
            focal="center"
            overlay="cinematic"
            sizes="100vw"
          />
          <div className="absolute inset-0 z-10 flex items-end bg-primary/40 p-10">
            <h1 className="font-display text-display-md text-primary-foreground">
              About {siteConfig.name}
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-section-sm lg:px-10">
        <p className="text-lg leading-relaxed text-secondary">
          For nearly four decades, Meridian Estates has connected discerning buyers,
          investors, and tenants with exceptional properties across the world&apos;s most
          desirable markets. Our approach combines institutional rigor with the personal
          attention expected by high-net-worth clients.
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
