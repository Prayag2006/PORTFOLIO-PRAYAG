import React from "react";
import Image from "next/image";
import { HeroBackdrop } from "@/components/hero/HeroBackdrop";

/** Stagger helper — feeds the shared --enter-delay custom property. */
const delay = (ms: number) =>
  ({ "--enter-delay": `${ms}ms` }) as React.CSSProperties;

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden border-b border-[#C9C2B7] bg-[#F5F1E8] lg:min-h-[94vh]">
      {/*
        Oversized wordmark. The portrait deliberately crosses in front of it —
        that overlap is the whole composition, so it must never be clipped.
        This is the measured LCP element, so its entrance is transform-only:
        fading it in would push LCP out by the full animation delay.
      */}
      <h1 className="enter-rise select-none px-2 pt-6 text-center font-display uppercase leading-[0.74] tracking-[-0.015em] text-[#171717] text-[clamp(3.25rem,27.4vw,26rem)] md:pt-8">
        Portfolio
      </h1>

      {/* Copy sits in the lower left, clear of the figure. */}
      <div className="relative z-20 mx-auto max-w-[1400px] px-6 md:px-10 lg:px-14">
        <div className="max-w-[34rem] pb-10 pt-6 lg:max-w-[26rem] lg:pb-24 lg:pt-10">
          <p
            style={delay(220)}
            className="enter-fade text-[11px] font-medium uppercase tracking-[0.3em] text-[#55504A]"
          >
            Hello, I&apos;m
          </p>

          <h2
            style={delay(300)}
            className="enter-fade mt-3 font-serif uppercase leading-[0.88] tracking-tight text-[#171717] text-[clamp(2.6rem,6.2vw,5.5rem)]"
          >
            Prayag
            <br />
            Kansara
          </h2>

          <p
            style={delay(380)}
            className="enter-fade mt-4 text-xs font-bold uppercase tracking-[0.16em] text-[#B85C3A] sm:text-[13px]"
          >
            Web Designer &amp; Full-Stack Developer
          </p>

          <p
            style={delay(460)}
            className="enter-fade mt-5 max-w-sm text-sm leading-relaxed text-[#55504A]"
          >
            I craft clean, modern, and user-focused digital experiences that
            combine strong visual design, thoughtful interaction, and reliable
            technology.
          </p>

          {/* Real signature, keyed off the intro video's final frame. alt is
              empty because the name is already the h2 above — announcing it
              twice would just be noise for a screen reader. */}
          <div style={delay(540)} className="enter-fade mt-7">
            <Image
              src="/images/signature.webp"
              alt=""
              width={900}
              height={251}
              className="h-auto w-[300px] select-none sm:w-[360px]"
            />
          </div>
        </div>
      </div>

      {/*
        Direct child of the section, so on lg it anchors to the section floor
        and rises up over the wordmark. On smaller screens it stays in normal
        flow and simply stacks under the copy.
      */}
      <div className="relative z-10 mx-auto h-[400px] w-[290px] sm:h-[480px] sm:w-[350px] lg:absolute lg:bottom-0 lg:right-[12%] lg:mx-0 lg:h-[78%] lg:w-[38%] lg:max-w-[540px]">
        {/* Swap variant to "sculpture" to bring back the animated 3D monolith. */}
        <HeroBackdrop variant="circle" />

        {/* Transform-only, like the wordmark: above 1024px this is the largest
            element in the viewport and therefore the LCP candidate. */}
        <Image
          src="/images/prayag.webp"
          alt="Prayag Kansara"
          fill
          priority
          style={delay(140)}
          className="enter-rise object-contain object-bottom"
          sizes="(max-width: 640px) 290px, (max-width: 1024px) 350px, 540px"
        />

        {/* Rotating availability badge, breaking the figure's right edge.
            Opacity-only — it already carries a Tailwind translate. */}
        <div
          style={delay(760)}
          className="enter-opacity absolute right-0 top-[46%] z-30 flex h-24 w-24 translate-x-1/4 items-center justify-center rounded-full border border-[#C9C2B7] bg-[#F5F1E8]/95 p-2 sm:h-28 sm:w-28 lg:top-[40%] lg:h-44 lg:w-44"
        >
          <svg className="h-full w-full animate-spin-slow" viewBox="0 0 100 100">
            <path
              id="circlePath"
              d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              fill="none"
            />
            <text className="fill-[#171717] text-[6.5px] font-semibold uppercase tracking-[0.12em]">
              <textPath href="#circlePath">
                AVAILABLE WORLDWIDE • OPEN FOR NEW PROJECTS •
              </textPath>
            </text>
          </svg>

          <span className="absolute w-[54%] text-center text-[7.5px] font-bold uppercase leading-[1.15] tracking-wide text-[#B85C3A] sm:text-[8px] lg:text-[11px]">
            Open for
            <br />
            new projects
          </span>
        </div>
      </div>
    </section>
  );
};
