import React from "react";

/*
 * Fixed decorative labels. They pass over both the cream sections and the ink
 * contact block, so they use mix-blend-difference to invert themselves against
 * whatever is behind them rather than needing per-section colour overrides.
 */
const LABEL =
  "hidden lg:flex fixed top-1/2 -translate-y-1/2 z-40 pointer-events-none select-none items-center gap-2 text-[10px] uppercase tracking-[0.25em] font-medium text-[#F5F1E8] mix-blend-difference";

export const VerticalSideLabels: React.FC = () => {
  return (
    <div aria-hidden="true">
      <div className={`${LABEL} left-6`}>
        <span className="h-[1px] w-4 bg-[#F5F1E8]" />
        <span className="writing-mode-vertical whitespace-nowrap">
          UI / UX DESIGN — WEB DEVELOPMENT
        </span>
      </div>

      <div className={`${LABEL} right-6`}>
        <span className="writing-mode-vertical whitespace-nowrap">
          BRANDING — DIGITAL EXPERIENCES
        </span>
        <span className="h-[1px] w-4 bg-[#F5F1E8]" />
      </div>
    </div>
  );
};
