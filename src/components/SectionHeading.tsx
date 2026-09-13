import React from "react";

interface SectionHeadingProps {
  /** First line, set in ink. */
  lead: string;
  /** Second line, set in burnt orange. */
  accent: string;
}

/**
 * Oversized display heading shared by every section, so the page reads as one
 * system with the hero's PORTFOLIO wordmark rather than a stack of unrelated
 * blocks. Bebas Neue, uppercase, clamped so it scales without a media query.
 */
export const SectionHeading: React.FC<SectionHeadingProps> = ({
  lead,
  accent,
}) => (
  <h2 className="font-display uppercase leading-[0.82] tracking-tight text-[clamp(2.5rem,6.5vw,5rem)] select-none">
    <span className="block text-[#171717]">{lead}</span>
    <span className="block text-[#B85C3A]">{accent}</span>
  </h2>
);
