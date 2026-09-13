import React from "react";
import { MoveRight } from "lucide-react";

export const Header: React.FC = () => {
  return (
    <header className="enter-opacity flex w-full select-none items-center justify-between border-b border-[#C9C2B7] px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#171717] md:px-10 lg:px-14">
      <div className="flex items-center gap-3">
        <span className="text-base font-bold leading-none text-[#B85C3A]">
          ✳
        </span>
        <span>Web Designer</span>
      </div>

      <a
        href="#contact"
        className="group flex items-center gap-3 transition-colors duration-300 hover:text-[#B85C3A]"
      >
        <span>Available for freelance</span>
        <MoveRight
          className="h-4 w-8 text-[#B85C3A] transition-transform duration-300 group-hover:translate-x-1"
          strokeWidth={1.5}
          aria-hidden="true"
        />
      </a>
    </header>
  );
};
