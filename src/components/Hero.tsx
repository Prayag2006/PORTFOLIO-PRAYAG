import React from "react";
import Image from "next/image";
import { Hero3D } from "@/components/hero/Hero3D";

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full border-b-2 border-[#171717] pt-8 pb-16 px-6 md:px-12 lg:px-16 overflow-hidden">
      {/* 1. Oversized PORTFOLIO Headline */}
      <div className="w-full text-center select-none overflow-hidden pb-4 md:pb-8">
        <h1 className="font-display font-extrabold text-[15.5vw] leading-[0.82] tracking-tight text-[#171717] uppercase block transform scale-y-[1.15] origin-bottom">
          PORTFOLIO
        </h1>
      </div>

      {/* 2. Main Editorial Hero Grid */}
      <div className="max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-end pt-4">
        {/* Left Column: Typography & Bio */}
        <div className="lg:col-span-6 flex flex-col justify-end space-y-5 lg:pb-6">
          <p className="text-xs uppercase tracking-[0.25em] text-[#55504A] font-medium">
            HELLO, I&apos;M
          </p>

          <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.2rem] leading-[0.92] text-[#171717] tracking-tight">
            PRAYAG
            <br />
            KANSARA
          </h2>

          <p className="text-xs sm:text-sm uppercase tracking-[0.18em] text-[#B85C3A] font-bold">
            WEB DESIGNER & FULL-STACK DEVELOPER
          </p>

          <p className="text-sm md:text-base text-[#55504A] font-normal leading-relaxed max-w-md">
            I craft clean, modern, and user-focused digital experiences that
            combine strong visual design, thoughtful interaction, and reliable
            technology.
          </p>

          {/* Cursive Designer Signature */}
          <div className="pt-2">
            <span className="font-signature text-4xl sm:text-5xl text-[#171717] block opacity-90 select-none">
              Prayag Kansara
            </span>
          </div>
        </div>

        {/* Right Column: Burnt-Orange Circle + Portrait Photo + Circular Badge */}
        <div className="lg:col-span-6 relative flex justify-center lg:justify-end items-end min-h-[380px] sm:min-h-[460px] lg:min-h-[540px]">
          {/* 3D monolith cluster; falls back to a flat circle on mobile/reduced-motion */}
          <Hero3D />

          {/* Cut-out portrait stands free in front of the sculpture — a hard
              frame around a transparent figure would read as a mistake. */}
          <div className="relative z-10 h-[340px] w-[260px] sm:h-[440px] sm:w-[340px] md:h-[480px] md:w-[380px]">
            <Image
              src="/images/prayag.webp"
              alt="Prayag Kansara"
              fill
              priority
              className="object-contain object-bottom"
              sizes="(max-width: 640px) 260px, (max-width: 768px) 340px, 380px"
            />
          </div>

          {/* Editorial Rotating Circular Badge */}
          <div className="absolute right-0 top-12 sm:top-16 md:-right-6 md:top-20 z-20 w-28 h-28 sm:w-36 sm:h-36 bg-[#F5F1E8] border-2 border-[#171717] rounded-full flex items-center justify-center p-2 shadow-lg">
            {/* SVG Curved Circular Text */}
            <svg
              className="w-full h-full animate-spin-slow"
              viewBox="0 0 100 100"
            >
              <path
                id="circlePath"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                fill="none"
              />
              <text className="text-[7.8px] uppercase tracking-[0.18em] fill-[#171717] font-semibold">
                <textPath href="#circlePath">
                  AVAILABLE FOR NEW PROJECTS • WORLDWIDE •
                </textPath>
              </text>
            </svg>

            {/* Inner Badge Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-2">
              <span className="text-[9px] font-bold uppercase tracking-wider text-[#B85C3A] leading-tight">
                OPEN FOR
                <br />
                PROJECTS
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
