import React from "react";

export const VerticalSideLabels: React.FC = () => {
  return (
    <>
      {/* Left Vertical Side Label */}
      <div className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-40 pointer-events-none items-center gap-4 text-[10px] uppercase tracking-[0.25em] text-[#55504A] font-medium opacity-60">
        <span className="w-8 h-[1px] bg-[#C9C2B7]" />
        <span className="writing-mode-vertical whitespace-nowrap">
          UI / UX DESIGN — WEB DEVELOPMENT
        </span>
      </div>

      {/* Right Vertical Side Label */}
      <div className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 pointer-events-none items-center gap-4 text-[10px] uppercase tracking-[0.25em] text-[#55504A] font-medium opacity-60">
        <span className="writing-mode-vertical whitespace-nowrap">
          BRANDING — DIGITAL EXPERIENCES
        </span>
        <span className="w-8 h-[1px] bg-[#C9C2B7]" />
      </div>
    </>
  );
};
