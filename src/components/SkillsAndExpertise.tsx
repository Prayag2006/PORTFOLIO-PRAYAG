import React from "react";
import { Layout, Code, Smartphone, Zap } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

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
    <section className="w-full border-b-2 border-[#171717] bg-[#F1EDE3] px-6 py-16 md:px-12 md:py-24 lg:px-16">
      <div className="mx-auto max-w-[1360px]">
        <div className="border-b-2 border-[#171717] pb-10">
          <SectionHeading lead="Skills &" accent="Expertise" />
        </div>

        <div className="grid grid-cols-1 items-start gap-12 pt-12 lg:grid-cols-12">
          {/* Skill meters */}
          <div className="flex flex-col space-y-5 lg:col-span-4">
            {skillsList.map((skill) => (
              <div key={skill.name} className="flex flex-col space-y-2">
                <div className="flex items-baseline justify-between text-[#171717]">
                  <span className="text-xs font-bold tracking-wider">
                    {skill.name}
                  </span>
                  <span className="font-display text-xl leading-none text-[#B85C3A]">
                    {skill.percentage}
                  </span>
                </div>

                {/* Thick bordered meter — the hairline version read as editorial,
                    not brutalist. Exposed to assistive tech as a real progressbar. */}
                <div
                  role="progressbar"
                  aria-label={skill.name}
                  aria-valuenow={skill.percentage}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  className="h-4 w-full border-2 border-[#171717] bg-[#F5F1E8] p-[2px]"
                >
                  <div
                    className="h-full bg-[#B85C3A]"
                    style={{ width: `${skill.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Pull quote */}
          <div className="relative flex flex-col justify-center border-l-0 border-t-2 border-[#171717] py-8 lg:col-span-4 lg:border-l-4 lg:border-t-0 lg:py-0 lg:pl-8">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -top-6 left-0 select-none font-serif text-[9rem] leading-none text-[#B85C3A]/20 lg:left-6"
            >
              &ldquo;
            </span>

            <blockquote className="relative z-10 font-serif text-xl leading-snug tracking-tight text-[#171717] sm:text-2xl">
              &ldquo;I design and build digital experiences that are not only
              beautiful but also functional, intuitive, and impactful.&rdquo;
            </blockquote>
          </div>

          {/* Capability blocks */}
          <div className="flex flex-col space-y-5 lg:col-span-4">
            {featuresList.map((feature) => {
              const IconComponent = feature.icon;
              return (
                <div key={feature.title} className="flex items-start gap-4">
                  {/* Square ink block replaces the soft orange circle. */}
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center border-2 border-[#171717] bg-[#171717] text-[#F5F1E8]">
                    <IconComponent
                      className="h-4 w-4 stroke-[2]"
                      aria-hidden="true"
                    />
                  </div>

                  <div className="flex flex-col space-y-1">
                    <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-[#171717]">
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
        </div>
      </div>
    </section>
  );
};
