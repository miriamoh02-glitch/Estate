import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="pt-28 pb-section-sm">
      <div className="mx-auto grid max-w-editorial gap-16 px-6 lg:grid-cols-2 lg:px-10">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-accent">
            Get in Touch
          </p>
          <h1 className="mt-3 font-display text-display-md text-primary">Contact Us</h1>
          <p className="mt-4 text-secondary">
            Schedule a consultation, inquire about a property, or list your estate with us.
          </p>
          <div className="mt-8 space-y-4 text-sm text-secondary">
            <p>{siteConfig.contact.email}</p>
            <p>{siteConfig.contact.phone}</p>
            <p>{siteConfig.contact.address}</p>
          </div>
        </div>

        <form className="border border-border bg-card p-8">
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Full name"
              className="w-full border-b border-border bg-transparent py-3 text-sm outline-none focus:border-accent"
            />
            <input
              type="email"
              placeholder="Email address"
              className="w-full border-b border-border bg-transparent py-3 text-sm outline-none focus:border-accent"
            />
            <select className="w-full border-b border-border bg-transparent py-3 text-sm outline-none focus:border-accent">
              <option>Property inquiry</option>
              <option>Schedule consultation</option>
              <option>List my property</option>
              <option>Investment advisory</option>
            </select>
            <textarea
              placeholder="Your message"
              rows={5}
              className="w-full border border-border bg-transparent p-3 text-sm outline-none focus:border-accent"
            />
            <Button type="submit" variant="accent" className="w-full">
              Send Message
            </Button>
            <p className="text-center text-xs text-secondary">
              We respond within 24 hours. Your inquiry is confidential.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
