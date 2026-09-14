import React from "react";
import { MoveRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

interface Testimonial {
  id: string;
  quote: string;
  name: string;
  /** Organisation only — no invented job titles for real people. */
  role: string;
}

const testimonials: Testimonial[] = [
  {
    id: "ravi",
    quote:
      "Prayag took the time to understand how our programmes actually run before building anything. The platform he delivered is clean and dependable, and he handled our online promotion alongside it.",
    name: "Ravi Patel",
    role: "New Zealand Government Programs",
  },
  {
    id: "meghal",
    quote:
      "Prayag rebuilt our website and ran our social promotion end to end. Clear communication, quick turnaround, and a result that looks the part.",
    name: "Meghal Patel",
    role: "MYP Electrical Solutions, New Zealand",
  },
  {
    id: "priyal",
    quote:
      "Our shop finally looks online the way it feels in store. Prayag built the website and handled the promotions for us, and made the whole process easy.",
    name: "Priyal Patel",
    role: "Lolly Shop, New Zealand",
  },
];

/** "Ravi Patel" → "RP". Derived, so it cannot drift from the name. */
const initials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

export const Testimonials: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="w-full border-b border-[#C9C2B7] bg-[#F1EDE3] px-6 py-16 md:px-12 md:py-24 lg:px-16"
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
                {/* Monogram rather than a portrait: these are real clients,
                    and a stock headshot would put a face to a name that is
                    not theirs. Swap in real photos once they supply them. */}
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-[#C9C2B7] bg-[#F1EDE3]">
                  <span
                    aria-hidden="true"
                    className="font-serif text-sm tracking-wide text-[#171717]"
                  >
                    {initials(t.name)}
                  </span>
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
