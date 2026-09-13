"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery, useMounted, usePrefersReducedMotion } from "@/lib/hooks";

/* WebGL has no `window` on the server — this import must never be SSR'd. */
const MonolithScene = dynamic(() => import("./MonolithScene"), { ssr: false });

/** Flat fallback: the original backdrop circle, zero WebGL cost. */
function FlatBackdrop() {
  return (
    <div className="absolute right-4 bottom-0 h-[280px] w-[280px] rounded-full bg-[#B85C3A] sm:right-12 sm:h-[380px] sm:w-[380px] md:h-[420px] md:w-[420px]" />
  );
}

export const Hero3D: React.FC = () => {
  const mounted = useMounted();
  const isDesktop = useMediaQuery("(min-width: 768px)");
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

  /*
   * Phones never create a WebGL context at all. `mounted` also keeps the
   * server render and the first client render identical (both flat).
   */
  const showScene = mounted && isDesktop;

  return (
    <div
      ref={wrapper}
      /* Decorative: pointer-events-none keeps the portrait and badge clickable. */
      /* Anchored to the portrait rather than the whole column, so the sculpture
         reads as its backdrop instead of drifting over the text. */
      className="pointer-events-none absolute -bottom-6 right-0 z-0 h-[580px] w-[680px] md:right-2"
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
