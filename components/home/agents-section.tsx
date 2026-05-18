"use client";

import Link from "next/link";
import { Star, CheckCircle2, ArrowRight } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { agents } from "@/lib/mock-data/agents";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);
}

export function AgentsSection() {
  const agentList = Object.values(agents);

  return (
    <section className="py-section-sm lg:py-section">
      <div className="mx-auto max-w-editorial px-6 lg:px-10">
        <FadeIn className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-accent">
              Expert Advisors
            </p>
            <h2 className="mt-3 font-display text-display-md text-primary">
              Our Agents
            </h2>
            <p className="mt-3 max-w-md text-secondary">
              Verified luxury specialists across New York, London, Dubai, and Accra.
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/agents">
              View All Agents
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </FadeIn>

        <StaggerContainer className="mt-12 grid gap-6 md:grid-cols-3">
          {agentList.map((agent) => (
            <StaggerItem key={agent.id}>
              <article className="flex h-full flex-col border border-border bg-card p-8 transition-shadow hover:shadow-luxury-sm">
                <div className="flex h-14 w-14 items-center justify-center bg-accent/15 font-display text-xl text-accent">
                  {getInitials(agent.name)}
                </div>
                <h3 className="mt-5 font-display text-xl text-primary">{agent.name}</h3>
                <p className="mt-1 text-sm text-secondary">{agent.title}</p>
                {agent.verified && (
                  <p className="mt-2 flex items-center gap-1 text-xs text-success">
                    <CheckCircle2 className="h-3 w-3" />
                    Verified Agent
                  </p>
                )}
                <div className="mt-4 flex flex-wrap gap-4 text-xs text-secondary">
                  <span className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-accent text-accent" />
                    {agent.rating}
                  </span>
                  <span>{agent.listingsCount} listings</span>
                  <span>Responds {agent.responseTime}</span>
                </div>
                <Button variant="ghost" className="mt-6 w-full justify-start px-0" asChild>
                  <Link href={`/contact?agent=${agent.id}`}>Contact advisor →</Link>
                </Button>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
