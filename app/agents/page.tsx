import Link from "next/link";
import { Star, CheckCircle2 } from "lucide-react";
import { agents } from "@/lib/mock-data/agents";
import { Button } from "@/components/ui/button";

export const metadata = { title: "Our Agents" };

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);
}

export default function AgentsPage() {
  const agentList = Object.values(agents);

  return (
    <div className="pt-28 pb-section-sm">
      <div className="mx-auto max-w-editorial px-6 lg:px-10">
        <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-accent">
          Expert Advisors
        </p>
        <h1 className="mt-3 font-display text-display-md text-primary">Our Agents</h1>
        <p className="mt-4 max-w-xl text-secondary">
          Work with verified luxury specialists across our global offices.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {agentList.map((agent) => (
            <article
              key={agent.id}
              className="border border-border bg-card p-8 transition-shadow hover:shadow-luxury-sm"
            >
              <div className="flex h-16 w-16 items-center justify-center bg-accent/15 font-display text-2xl text-accent">
                {getInitials(agent.name)}
              </div>
              <h2 className="mt-4 font-display text-xl text-primary">{agent.name}</h2>
              <p className="text-sm text-secondary">{agent.title}</p>
              {agent.verified && (
                <p className="mt-2 flex items-center gap-1 text-xs text-success">
                  <CheckCircle2 className="h-3 w-3" />
                  Verified Agent
                </p>
              )}
              <div className="mt-4 flex items-center gap-4 text-xs text-secondary">
                <span className="flex items-center gap-1">
                  <Star className="h-3 w-3 fill-accent text-accent" />
                  {agent.rating}
                </span>
                <span>{agent.listingsCount} listings</span>
              </div>
              <Button variant="outline" className="mt-6 w-full" asChild>
                <Link href={`/contact?agent=${agent.id}`}>Contact</Link>
              </Button>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
