import { Badge } from "@/components/ui/badge";
import type { PropertyStatus } from "@/types/property";

const labels: Record<PropertyStatus, string> = {
  for_sale: "For Sale",
  for_rent: "For Rent",
  sold: "Sold",
  pending: "Pending",
};

const variants: Record<PropertyStatus, "default" | "accent" | "success" | "muted"> = {
  for_sale: "default",
  for_rent: "accent",
  sold: "muted",
  pending: "success",
};

export function PropertyStatusBadge({ status }: { status: PropertyStatus }) {
  return <Badge variant={variants[status]}>{labels[status]}</Badge>;
}
