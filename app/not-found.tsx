import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-28 text-center">
      <p className="text-[10px] uppercase tracking-widest text-accent">404</p>
      <h1 className="mt-4 font-display text-display-md text-primary">Property Not Found</h1>
      <p className="mt-4 max-w-md text-secondary">
        This listing may have been sold or removed from our portfolio.
      </p>
      <Button variant="accent" className="mt-8" asChild>
        <Link href="/properties">Browse Properties</Link>
      </Button>
    </div>
  );
}
