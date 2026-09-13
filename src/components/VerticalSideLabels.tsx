import React from "react";

/*
 * Fixed edge labels, paired per side as in the reference. They pass over both
 * the cream sections and the ink contact block, so mix-blend-difference lets
 * them invert against whatever is behind rather than needing overrides.
 */
const LABEL =
  "hidden lg:flex fixed z-40 pointer-events-none select-none items-center gap-2 text-[10px] uppercase tracking-[0.25em] font-medium text-[#F5F1E8] mix-blend-difference";

const Rule = () => <span className="h-[1px] w-4 bg-[#F5F1E8]" />;

export const VerticalSideLabels: React.FC = () => {
  return (
    <div aria-hidden="true">
      <div className={`${LABEL} left-6 top-[28%]`}>
        <Rule />
        <span className="writing-mode-vertical whitespace-nowrap">
          UI / UX Design
        </span>
      </div>

      <div className={`${LABEL} left-6 top-[62%]`}>
        <Rule />
        <span className="writing-mode-vertical whitespace-nowrap">
          Web Development
        </span>
      </div>

      <div className={`${LABEL} right-6 top-[28%]`}>
        <span className="writing-mode-vertical whitespace-nowrap">
          Branding
        </span>
        <Rule />
      </div>

      <div className={`${LABEL} right-6 top-[62%]`}>
        <span className="writing-mode-vertical whitespace-nowrap">
          Digital Experiences
        </span>
        <Rule />
      </div>
    </div>
  );
};
