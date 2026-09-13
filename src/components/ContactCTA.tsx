import React from "react";
import { Mail, Globe, MapPin } from "lucide-react";

export const ContactCTA: React.FC = () => {
  return (
    <section
      id="contact"
      className="w-full border-b border-[#C9C2B7] py-16 md:py-24 px-6 md:px-12 lg:px-16 bg-[#F5F1E8]"
    >
      <div className="max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Headline & Subtext (6 cols) */}
        <div className="lg:col-span-6 flex flex-col space-y-4">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[0.95] text-[#171717] tracking-tight">
            <span>LET&apos;S CREATE</span>
            <br />
            <span className="text-[#B85C3A]">SOMETHING GREAT</span>
          </h2>

          <p className="text-sm md:text-base text-[#55504A] font-normal leading-relaxed max-w-md pt-2">
            Have a project in mind? Let&apos;s build something that makes an
            impact and elevates your brand online.
          </p>
        </div>

        {/* Center Column: QR Code & Handwritten Arrow (3 cols) */}
        <div className="lg:col-span-3 flex flex-col sm:flex-row items-center justify-center gap-4 lg:border-x border-[#C9C2B7] py-6 lg:py-0 px-4">
          {/* Custom Stylized QR Code Box */}
          <div className="w-24 h-24 bg-white border border-[#C9C2B7] p-2 flex items-center justify-center flex-shrink-0 shadow-sm">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full text-[#171717] fill-current"
            >
              {/* Corner Position Detection Patterns */}
              <rect x="5" y="5" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="6" />
              <rect x="13" y="13" width="14" height="14" />
              <rect x="65" y="5" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="6" />
              <rect x="73" y="13" width="14" height="14" />
              <rect x="5" y="65" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="6" />
              <rect x="13" y="73" width="14" height="14" />

              {/* Data Blocks */}
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

          {/* Label + Handwritten Arrow */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#171717] leading-tight">
              SCAN TO VISIT
              <br />
              MY WEBSITE
            </span>
            {/* Cursive Decorative Arrow */}
            <span className="font-signature text-2xl text-[#B85C3A] leading-none pt-1">
              ⤵
            </span>
          </div>
        </div>

        {/* Right Column: Contact Details (3 cols) */}
        <div className="lg:col-span-3 flex flex-col space-y-4 text-xs font-semibold text-[#171717] tracking-wider uppercase">
          <a
            href="mailto:hello@prayagkansara.design"
            className="flex items-center gap-3 hover:text-[#B85C3A] transition-colors duration-300"
          >
            <Mail className="w-4 h-4 text-[#B85C3A]" />
            <span className="lowercase font-sans text-sm tracking-normal">
              hello@prayagkansara.design
            </span>
          </a>

          <a
            href="https://prayagkansara.design"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-[#B85C3A] transition-colors duration-300"
          >
            <Globe className="w-4 h-4 text-[#B85C3A]" />
            <span className="lowercase font-sans text-sm tracking-normal">
              www.prayagkansara.design
            </span>
          </a>

          <div className="flex items-center gap-3 text-[#55504A]">
            <MapPin className="w-4 h-4 text-[#B85C3A]" />
            <span className="text-xs uppercase tracking-widest font-medium">
              Remote Worldwide
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
