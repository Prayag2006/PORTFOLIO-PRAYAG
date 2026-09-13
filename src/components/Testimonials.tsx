import React from "react";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

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
    <section
      id="testimonials"
      className="w-full border-b border-[#C9C2B7] bg-[#F5F1E8] px-6 py-16 md:px-12 md:py-24 lg:px-16"
    >
      <div className="mx-auto max-w-[1360px]">
        {/* Section Header Row */}
        <Reveal>
          <div className="grid grid-cols-1 items-end gap-6 border-b border-[#C9C2B7] pb-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionHeading lead="What Clients" accent="Say" />
          </div>

          <div className="md:col-span-4">
            <p className="max-w-sm text-xs leading-relaxed text-[#55504A] sm:text-sm">
              Honest feedback from amazing clients I&apos;ve had the pleasure to
              work with on recent digital projects.
            </p>
          </div>

          <div className="md:col-span-3 md:text-right">
            <a
              href="#testimonials"
              className="group inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#171717] transition-colors duration-300 hover:text-[#B85C3A]"
            >
              <span>More reviews</span>
              <MoveRight
                className="h-4 w-8 text-[#B85C3A] transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={1.5}
              />
            </a>
            </div>
          </div>
        </Reveal>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 pt-12 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <Reveal key={t.id} delay={index} className="h-full">
              <figure className="panel panel-hover flex h-full flex-col justify-between p-7">
              <div className="flex flex-col space-y-4">
                <span
                  aria-hidden="true"
                  className="font-serif text-4xl leading-none text-[#B85C3A]"
                >
                  &ldquo;
                </span>
                <blockquote className="text-xs leading-relaxed text-[#55504A] sm:text-sm">
                  {t.quote}
                </blockquote>
              </div>

              <figcaption className="mt-8 flex items-center gap-3.5 border-t border-[#C9C2B7] pt-5">
                {/* Square avatar — circles belong to the old editorial pass. */}
                <div className="relative h-11 w-11 flex-shrink-0 overflow-hidden rounded-full border border-[#C9C2B7]">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover"
                    sizes="44px"
                  />
                </div>

                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[#171717]">
                    {t.name}
                  </span>
                  <span className="text-[11px] font-normal text-[#55504A]">
                    {t.role}
                  </span>
                </div>
              </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
