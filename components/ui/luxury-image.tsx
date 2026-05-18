import Image from "next/image";
import { cn } from "@/lib/utils";

export type ImageFocal = "center" | "top" | "bottom" | "left" | "right";

const focalMap: Record<ImageFocal, string> = {
  center: "object-center",
  top: "object-top",
  bottom: "object-bottom",
  left: "object-left",
  right: "object-right",
};

export type ImageOverlay = "none" | "warm" | "cinematic" | "hero";

interface LuxuryImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
  focal?: ImageFocal;
  overlay?: ImageOverlay;
  hoverZoom?: boolean;
  className?: string;
}

const overlayStyles: Record<ImageOverlay, string> = {
  none: "",
  warm:
    "bg-gradient-to-br from-accent/15 via-transparent to-primary/25 mix-blend-multiply",
  cinematic:
    "bg-gradient-to-t from-primary/55 via-primary/10 to-transparent",
  hero: "bg-gradient-to-r from-primary/80 via-primary/35 to-transparent",
};

export function LuxuryImage({
  src,
  alt,
  fill = true,
  width,
  height,
  priority,
  sizes,
  focal = "center",
  overlay = "cinematic",
  hoverZoom = false,
  className,
}: LuxuryImageProps) {
  return (
    <div className={cn("relative h-full w-full overflow-hidden bg-muted", className)}>
      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        priority={priority}
        sizes={sizes ?? (fill ? "100vw" : undefined)}
        className={cn(
          "object-cover brightness-[0.98] contrast-[1.05] saturate-[1.08]",
          focalMap[focal],
          hoverZoom &&
            "transition-transform duration-[1.4s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
        )}
      />
      {overlay !== "none" && (
        <div
          className={cn(
            "pointer-events-none absolute inset-0 z-[1]",
            overlayStyles[overlay]
          )}
          aria-hidden
        />
      )}
    </div>
  );
}
