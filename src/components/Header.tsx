import React from "react";
import { ArrowUpRight } from "lucide-react";

export const Header: React.FC = () => {
  return (
    <header className="w-full border-b-2 border-[#171717] py-5 px-6 md:px-12 flex justify-between items-center text-xs tracking-[0.2em] uppercase font-semibold text-[#171717] select-none">
      <div className="flex items-center gap-3">
        <span className="text-[#B85C3A] text-base leading-none font-bold">✳</span>
        <span className="text-[#171717]">WEB DESIGNER</span>
      </div>

      <a
        href="#contact"
        className="group flex items-center gap-2 hover:text-[#B85C3A] transition-colors duration-300"
      >
        <span>AVAILABLE FOR FREELANCE</span>
        <ArrowUpRight className="w-3.5 h-3.5 text-[#B85C3A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
      </a>
    </header>
  );
};
