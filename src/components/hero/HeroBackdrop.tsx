"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery, useMounted, usePrefersReducedMotion } from "@/lib/hooks";

/* WebGL has no `window` on the server — this import must never be SSR'd. */
const MonolithScene = dynamic(() => import("./MonolithScene"), { ssr: false });

/*
 * Below this the hero stacks into one column, so the canvas has nowhere to
 * sit. Phones and tablets never download three.js.
 */
const DESKTOP = "(min-width: 1024px)";

export type BackdropVariant = "circle" | "sculpture";

/**
 * What sits behind the cut-out portrait.
 *
 * "circle"    — the flat burnt-orange disc from the reference layout.
 * "sculpture" — the animated 3D monolith cluster (cursor + scroll reactive).
 *
 * Both fill the same box, so switching the variant in Hero.tsx is a one-word
 * change with no layout retuning.
 */
export const HeroBackdrop: React.FC<{ variant?: BackdropVariant }> = ({
  variant = "circle",
}) => {
  const mounted = useMounted();
  const isDesktop = useMediaQuery(DESKTOP);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [inView, setInView] = useState(true);
  const wrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (variant !== "sculpture") return;
    const el = wrapper.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: "120px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [variant]);

  const showScene = variant === "sculpture" && mounted && isDesktop;

  return (
    <div
      ref={wrapper}
      className="pointer-events-none absolute inset-0"
      aria-hidden="true"
    >
      {showScene ? (
        <MonolithScene animate={!prefersReducedMotion && inView} />
      ) : (
        /* Disc sized and placed so the figure's torso covers its right half,
           exactly as the reference crops it. */
        <div className="absolute left-1/2 top-[16%] aspect-square w-[76%] -translate-x-[58%] rounded-full bg-[#B85C3A]" />
      )}
    </div>
  );
};
