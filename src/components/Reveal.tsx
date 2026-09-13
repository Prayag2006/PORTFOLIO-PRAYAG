"use client";

import { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  /** Stagger position; each step adds 70ms of delay. */
  delay?: number;
  /** Classes for the wrapper — pass grid placement here, not to the child. */
  className?: string;
}

/**
 * Fades and lifts its children in the first time they enter the viewport.
 *
 * Built on IntersectionObserver rather than an animation library: the whole
 * behaviour is a class flip plus two CSS transitions, and pulling in Framer
 * for it would cost more than the rest of the page's JS combined.
 */
export const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  className,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Reduced motion: show it immediately and never observe.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShown(true);
        // One-shot. Re-animating every time a section passes is nauseating.
        observer.disconnect();
      },
      {
        /*
         * The top margin extends the observer root far above the viewport, so
         * anything scrolled past still counts as intersecting. Without it an
         * element can go from below the fold (ratio 0) to above it (ratio 0)
         * without ever crossing a threshold — no callback, content stuck
         * invisible. That happens on a reload with restored scroll, on an
         * anchor link landing mid-page, and on a fast flick scroll.
         */
        rootMargin: "9999px 0px -12% 0px",
      },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-reveal={shown ? "in" : "out"}
      style={delay ? { transitionDelay: `${delay * 70}ms` } : undefined}
      className={className}
    >
      {children}
    </div>
  );
};
