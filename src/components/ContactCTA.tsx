import React from "react";
import { Mail, Globe, MapPin } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const ContactCTA: React.FC = () => {
  return (
    <section
      id="contact"
      className="w-full border-b border-[#C9C2B7] bg-[#F5F1E8] px-6 py-20 md:px-12 md:py-28 lg:px-16"
    >
      <div className="mx-auto grid max-w-[1360px] grid-cols-1 items-center gap-12 lg:grid-cols-12">
        {/* Headline */}
        <Reveal className="lg:col-span-6">
          <div className="flex flex-col space-y-5">
            <h2 className="font-display uppercase leading-[0.82] tracking-tight text-[#171717] text-[clamp(2.75rem,7vw,5.5rem)]">
              <span className="block">Let&apos;s create</span>
              <span className="block text-[#B85C3A]">something great</span>
            </h2>

            <p className="max-w-md text-sm font-normal leading-relaxed text-[#55504A] md:text-base">
              Have a project in mind? Let&apos;s build something that makes an
              impact and elevates your brand online.
            </p>
          </div>
        </Reveal>

        {/* QR block */}
        <Reveal className="lg:col-span-3" delay={1}>
          <div className="flex flex-col items-center justify-center gap-4 border-[#C9C2B7] py-6 sm:flex-row lg:border-x lg:px-4 lg:py-0">
            <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center border border-[#C9C2B7] bg-white p-2">
              <svg
                viewBox="0 0 100 100"
                className="h-full w-full fill-current text-[#171717]"
                role="img"
                aria-label="QR code linking to prayagkansara.design"
              >
                <rect x="5" y="5" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="6" />
                <rect x="13" y="13" width="14" height="14" />
                <rect x="65" y="5" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="6" />
                <rect x="73" y="13" width="14" height="14" />
                <rect x="5" y="65" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="6" />
                <rect x="13" y="73" width="14" height="14" />
                <rect x="42" y="10" width="8" height="8" />
                <rect x="52" y="18" width="8" height="8" />
                <rect x="42" y="28" width="8" height="8" />
                <rect x="10" y="42" width="8" height="8" />
                <rect x="20" y="50" width="8" height="8" />
                <rect x="42" y="42" width="16" height="16" />
                <rect x="65" y="42" width="8" height="8" />
                <rect x="80" y="50" width="8" height="8" />
                <rect x="42" y="65" width="8" height="8" />
                <rect x="52" y="75" width="8" height="8" />
                <rect x="65" y="65" width="16" height="16" />
                <rect x="85" y="85" width="8" height="8" />
              </svg>
            </div>

            <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
              <span className="text-[10px] font-bold uppercase leading-tight tracking-[0.18em] text-[#171717]">
                Scan to visit
                <br />
                my website
              </span>
              <span
                aria-hidden="true"
                className="pt-1 font-signature text-2xl leading-none text-[#B85C3A]"
              >
                ⤵
              </span>
            </div>
          </div>
        </Reveal>

        {/* Contact details — hairline rows rather than bordered boxes. */}
        <Reveal className="lg:col-span-3" delay={2}>
          <div className="flex flex-col">
            <a
              href="mailto:hello@prayagkansara.design"
              className="group flex items-center gap-3 border-b border-[#C9C2B7] py-3.5 transition-colors duration-300 hover:text-[#B85C3A]"
            >
              <Mail className="h-4 w-4 flex-shrink-0 text-[#B85C3A]" aria-hidden="true" />
              <span className="font-sans text-sm text-[#171717] transition-colors duration-300 group-hover:text-[#B85C3A]">
                hello@prayagkansara.design
              </span>
            </a>

            <a
              href="https://prayagkansara.design"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 border-b border-[#C9C2B7] py-3.5 transition-colors duration-300"
            >
              <Globe className="h-4 w-4 flex-shrink-0 text-[#B85C3A]" aria-hidden="true" />
              <span className="font-sans text-sm text-[#171717] transition-colors duration-300 group-hover:text-[#B85C3A]">
                www.prayagkansara.design
              </span>
            </a>

            <div className="flex items-center gap-3 py-3.5">
              <MapPin className="h-4 w-4 flex-shrink-0 text-[#B85C3A]" aria-hidden="true" />
              <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#55504A]">
                Remote Worldwide
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
