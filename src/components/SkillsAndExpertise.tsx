import React from "react";
import { Layout, Code, Smartphone, Zap } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

interface Skill {
  name: string;
  percentage: number;
}

const skillsList: Skill[] = [
  { name: "UI / UX DESIGN", percentage: 95 },
  { name: "WEB DEVELOPMENT", percentage: 90 },
  { name: "FRONTEND DEVELOPMENT", percentage: 95 },
  { name: "BACKEND DEVELOPMENT", percentage: 85 },
  { name: "RESPONSIVE DESIGN", percentage: 95 },
  { name: "DATABASE & APIs", percentage: 80 },
];

const featuresList = [
  {
    icon: Layout,
    title: "USER-CENTERED DESIGN",
    description:
      "Focus on creating seamless and meaningful user experiences with aesthetic precision.",
  },
  {
    icon: Code,
    title: "CLEAN & MODERN CODE",
    description:
      "High-quality, scalable, and performant development adhering to industry standards.",
  },
  {
    icon: Smartphone,
    title: "FULLY RESPONSIVE",
    description:
      "Websites that adapt dynamically and look flawless on all device screen sizes.",
  },
  {
    icon: Zap,
    title: "PERFORMANCE DRIVEN",
    description:
      "Optimization for speed, SEO, accessibility, and best practices in every deployment.",
  },
];

export const SkillsAndExpertise: React.FC = () => {
  return (
    <section className="w-full border-b border-[#C9C2B7] bg-[#F1EDE3] px-6 py-16 md:px-12 md:py-24 lg:px-16">
      <div className="mx-auto max-w-[1360px]">
        <Reveal>
          <div className="border-b border-[#C9C2B7] pb-10">
            <SectionHeading lead="Skills &" accent="Expertise" />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 items-start gap-12 pt-12 lg:grid-cols-12">
          {/* Skill meters */}
          <Reveal className="lg:col-span-4">
            <div className="flex flex-col space-y-6">
              {skillsList.map((skill) => (
                <div key={skill.name} className="flex flex-col space-y-2.5">
                  <div className="flex items-baseline justify-between text-[#171717]">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.15em]">
                      {skill.name}
                    </span>
                    <span className="text-[11px] font-normal text-[#55504A]">
                      {skill.percentage}%
                    </span>
                  </div>

                  {/* Hairline meter, matching the page's rules rather than the
                      heavy bordered bar it replaced. Still a real progressbar. */}
                  <div
                    role="progressbar"
                    aria-label={skill.name}
                    aria-valuenow={skill.percentage}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    className="h-[3px] w-full bg-[#C9C2B7]"
                  >
                    <div
                      className="h-full bg-[#B85C3A]"
                      style={{ width: `${skill.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Pull quote */}
          <Reveal className="lg:col-span-4" delay={1}>
            <div className="relative flex h-full flex-col justify-center border-t border-[#C9C2B7] py-8 lg:border-l lg:border-t-0 lg:py-0 lg:pl-10">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -top-6 left-0 select-none font-serif text-[9rem] leading-none text-[#B85C3A]/15 lg:left-8"
              >
                &ldquo;
              </span>

              <blockquote className="relative z-10 font-serif text-xl leading-snug tracking-tight text-[#171717] sm:text-2xl">
                &ldquo;I design and build digital experiences that are not only
                beautiful but also functional, intuitive, and impactful.&rdquo;
              </blockquote>
            </div>
          </Reveal>

          {/* Capability list */}
          <Reveal className="lg:col-span-4" delay={2}>
            <div className="flex flex-col space-y-6">
              {featuresList.map((feature) => {
                const IconComponent = feature.icon;
                return (
                  <div key={feature.title} className="flex items-start gap-4">
                    {/* Circular orange marker, echoing the hero's disc. */}
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#B85C3A] text-white">
                      <IconComponent
                        className="h-4 w-4 stroke-[1.8]"
                        aria-hidden="true"
                      />
                    </div>

                    <div className="flex flex-col space-y-1">
                      <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#171717]">
                        {feature.title}
                      </h3>
                      <p className="text-xs leading-relaxed text-[#55504A]">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
