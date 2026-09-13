import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: "jessica",
    quote:
      "Prayag is an incredible designer. He understood our vision perfectly and delivered a website that exceeded our expectations.",
    name: "Jessica Lee",
    role: "Founder, Avenue & Co.",
    avatar: "/images/jessica.jpg",
  },
  {
    id: "david",
    quote:
      "Professional, creative, and detail-oriented. The whole process was smooth from start to finish.",
    name: "David Carter",
    role: "CEO, Studio Form",
    avatar: "/images/david.jpg",
  },
  {
    id: "james",
    quote:
      "Our new website not only looks amazing but also performs exceptionally well. Highly recommended!",
    name: "James Wilson",
    role: "Marketing Director, Fuel Performance",
    avatar: "/images/james.jpg",
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section className="w-full border-b border-[#C9C2B7] py-16 md:py-24 px-6 md:px-12 lg:px-16 bg-[#F5F1E8]">
      <div className="max-w-[1360px] mx-auto">
        {/* Section Header Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end pb-12 border-b border-[#C9C2B7]">
          {/* Left Title */}
          <div className="md:col-span-4">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight">
              <span className="block text-[#171717]">WHAT CLIENTS</span>
              <span className="block text-[#B85C3A]">SAY</span>
            </h2>
          </div>

          {/* Center Subtitle */}
          <div className="md:col-span-5">
            <p className="text-xs sm:text-sm text-[#55504A] leading-relaxed max-w-sm">
              Honest feedback from amazing clients I&apos;ve had the pleasure to
              work with on recent digital projects.
            </p>
          </div>

          {/* Right Link */}
          <div className="md:col-span-3 md:text-right">
            <a
              href="#testimonials"
              className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#171717] hover:text-[#B85C3A] transition-colors duration-300"
            >
              <span>MORE REVIEWS</span>
              <ArrowUpRight className="w-4 h-4 text-[#B85C3A] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </a>
          </div>
        </div>

        {/* 3-Column Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="border border-[#C9C2B7] p-8 bg-[#F5F1E8] flex flex-col justify-between space-y-8 hover:border-[#B85C3A] transition-colors duration-300"
            >
              {/* Quote Block */}
              <div className="flex flex-col space-y-4">
                <span className="text-3xl font-serif text-[#B85C3A] leading-none">
                  “
                </span>
                <p className="text-xs sm:text-sm text-[#55504A] leading-relaxed">
                  {t.quote}
                </p>
              </div>

              {/* Client Info Row */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-[#C9C2B7]/60">
                {/* Avatar Image */}
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#C9C2B7] flex-shrink-0">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>

                {/* Name & Role */}
                <div className="flex flex-col">
                  <h4 className="text-xs font-bold text-[#171717]">{t.name}</h4>
                  <span className="text-[11px] text-[#55504A] font-normal">
                    {t.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
