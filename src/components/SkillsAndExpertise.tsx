import React from "react";
import { Layout, Code, Smartphone, Zap } from "lucide-react";

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
    <section className="w-full border-b border-[#C9C2B7] py-16 md:py-24 px-6 md:px-12 lg:px-16 bg-[#F5F1E8]">
      <div className="max-w-[1360px] mx-auto">
        {/* Section Heading */}
        <div className="pb-12 border-b border-[#C9C2B7]">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight">
            <span className="block text-[#171717]">SKILLS &</span>
            <span className="block text-[#B85C3A]">EXPERTISE</span>
          </h2>
        </div>

        {/* 3-Column Section Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12 items-center">
          {/* Column 1: Skills Progress Bars (4 cols) */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            {skillsList.map((skill, index) => (
              <div key={index} className="flex flex-col space-y-2">
                <div className="flex justify-between items-center text-xs font-semibold tracking-wider text-[#171717]">
                  <span>{skill.name}</span>
                  <span className="text-[#55504A] font-normal">
                    {skill.percentage}%
                  </span>
                </div>

                {/* Thin Editorial Line Progress Bar */}
                <div className="w-full h-[2px] bg-[#C9C2B7] relative overflow-hidden">
                  <div
                    className="h-full bg-[#B85C3A] transition-all duration-1000 ease-out"
                    style={{ width: `${skill.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Column 2: Editorial Magazine Pull Quote (4 cols) */}
          <div className="lg:col-span-4 relative flex flex-col justify-center px-4 py-8 lg:px-8 border-y lg:border-y-0 lg:border-x border-[#C9C2B7]">
            {/* Background Oversized Quote Mark */}
            <span className="absolute left-2 top-0 text-[10rem] font-serif leading-none text-[#B85C3A]/15 select-none pointer-events-none -translate-y-8">
              “
            </span>

            <blockquote className="relative z-10 font-serif text-xl sm:text-2xl lg:text-2xl text-[#171717] leading-snug tracking-tight">
              &ldquo;I design and build digital experiences that are not only
              beautiful but also functional, intuitive, and impactful.&rdquo;
            </blockquote>
          </div>

          {/* Column 3: Feature Rows with Circular Orange Icons (4 cols) */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            {featuresList.map((feature, idx) => {
              const IconComponent = feature.icon;
              return (
                <div key={idx} className="flex items-start gap-4">
                  {/* Circular Orange Icon Wrapper */}
                  <div className="w-10 h-10 rounded-full bg-[#B85C3A] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                    <IconComponent className="w-4 h-4 stroke-[1.8]" />
                  </div>

                  {/* Feature Text */}
                  <div className="flex flex-col space-y-1">
                    <h4 className="text-xs uppercase tracking-[0.15em] font-bold text-[#171717]">
                      {feature.title}
                    </h4>
                    <p className="text-xs text-[#55504A] leading-relaxed">
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
