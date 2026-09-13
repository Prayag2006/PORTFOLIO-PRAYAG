"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery, useMounted, usePrefersReducedMotion } from "@/lib/hooks";

/* WebGL has no `window` on the server — this import must never be SSR'd. */
const MonolithScene = dynamic(() => import("./MonolithScene"), { ssr: false });

/*
 * The scene is gated on `lg`, not `md`: below 1024px the hero is a single
 * stacked column, so a canvas anchored beside the portrait has nowhere to sit.
 * Tablets and phones get the flat block and never download three.js.
 */
const DESKTOP = "(min-width: 1024px)";

/** Solid offset block — a circle would fight the portrait's hard square frame. */
function FlatBackdrop() {
  return (
    <div className="absolute bottom-0 right-6 h-[300px] w-[210px] bg-[#B85C3A] sm:right-16 sm:h-[380px] sm:w-[270px]" />
  );
}

export const Hero3D: React.FC = () => {
  const mounted = useMounted();
  const isDesktop = useMediaQuery(DESKTOP);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [inView, setInView] = useState(true);
  const wrapper = useRef<HTMLDivElement>(null);

  /* Stop rendering once the hero scrolls away — saves battery on long pages. */
  useEffect(() => {
    const el = wrapper.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: "120px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  /* `mounted` keeps the server render and first client render identical. */
  const showScene = mounted && isDesktop;

  return (
    <div
      ref={wrapper}
      /* Decorative: pointer-events-none keeps the portrait and badge clickable. */
      className="pointer-events-none absolute inset-0 z-0 lg:-bottom-6 lg:left-auto lg:right-2 lg:top-auto lg:h-[580px] lg:w-[680px]"
      aria-hidden="true"
    >
      {showScene ? (
        <MonolithScene animate={!prefersReducedMotion && inView} />
      ) : (
        <FlatBackdrop />
      )}
    </div>
  );
};
