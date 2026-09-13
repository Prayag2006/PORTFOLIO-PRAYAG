"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { usePrefersReducedMotion } from "@/lib/hooks";

/**
 * Momentum scrolling for the whole page. Deliberately inert for users who ask
 * for reduced motion — they get the browser's native, instant scrolling.
 */
export const SmoothScroll: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const lenis = new Lenis({ duration: 1.05, smoothWheel: true });
    let frame = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, [prefersReducedMotion]);

  return <>{children}</>;
};
