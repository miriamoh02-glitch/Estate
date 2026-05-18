import { BadgeCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export function VerifiedBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 bg-success/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-success",
        className
      )}
    >
      <BadgeCheck className="h-3 w-3" />
      Verified
    </span>
  );
}
