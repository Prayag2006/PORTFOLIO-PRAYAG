"use client";

import { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  /** Stagger position; each step adds 70ms of delay. */
  delay?: number;
  /** Classes for the wrapper — pass grid placement here, not to the child. */
  className?: string;
  /**
   * Element to render. Use "span" (with a `block` class) inside headings —
   * a div inside an h2 is invalid HTML.
   */
  as?: "div" | "span";
}

/**
 * Reveals still waiting on their scroll trigger, so that a jump can flush
 * every one that is already on screen in a single pass.
 */
const waiting = new Map<Element, () => void>();

/** Reveals anything currently within the real viewport, band included. */
const flushOnScreen = () => {
  for (const [el, show] of waiting) {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) show();
  }
};

let lastScrollY = 0;

const onHashChange = () => requestAnimationFrame(flushOnScreen);

const onScroll = () => {
  const y = window.scrollY;
  /* Further in one event than any wheel or momentum step — that's a jump. */
  const jumped = Math.abs(y - lastScrollY) > window.innerHeight;
  lastScrollY = y;
  if (jumped) flushOnScreen();
};

/* Listeners live only while something is still waiting to be revealed. */
const bindJumpListeners = () => {
  if (waiting.size !== 1) return;
  lastScrollY = window.scrollY;
  window.addEventListener("hashchange", onHashChange);
  window.addEventListener("scroll", onScroll, { passive: true });
};

const unbindJumpListeners = () => {
  if (waiting.size > 0) return;
  window.removeEventListener("hashchange", onHashChange);
  window.removeEventListener("scroll", onScroll);
};

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
  as: Tag = "div",
}) => {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Reduced motion: show it immediately and never observe.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }

    let observer: IntersectionObserver | null = null;

    const show = () => {
      setShown(true);
      waiting.delete(el);
      unbindJumpListeners();
      observer?.disconnect();
    };

    waiting.set(el, show);
    bindJumpListeners();

    observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        // One-shot. Re-animating every time a section passes is nauseating.
        show();
      },
      {
        /*
         * The top margin extends the observer root far above the viewport, so
         * anything scrolled past still counts as intersecting. Without it an
         * element can go from below the fold (ratio 0) to above it (ratio 0)
         * without ever crossing a threshold — no callback, content stuck
         * invisible. That happens on a reload with restored scroll, on an
         * anchor link landing mid-page, and on a fast flick scroll.
         *
         * The bottom margin holds an element back until it is 12% into view,
         * which reads well while scrolling but strands anything a jump drops
         * into that band — hence the flush above, not a wider root here.
         */
        rootMargin: "9999px 0px -12% 0px",
      },
    );

    observer.observe(el);

    /*
     * A deep link scrolls before hydration, so neither a scroll nor a hash
     * event will ever arrive — flush whatever it landed on.
     */
    if (window.location.hash) requestAnimationFrame(flushOnScreen);

    return () => {
      waiting.delete(el);
      unbindJumpListeners();
      observer?.disconnect();
    };
  }, []);

  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement & HTMLSpanElement>}
      data-reveal={shown ? "in" : "out"}
      style={delay ? { transitionDelay: `${delay * 70}ms` } : undefined}
      className={className}
    >
      {children}
    </Tag>
  );
};
