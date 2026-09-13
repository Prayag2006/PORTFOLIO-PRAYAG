import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    id: "studio-form",
    number: "01",
    title: "Studio Form",
    category: "Architecture Studio",
    image: "/images/studio-form.jpg",
    link: "#",
  },
  {
    id: "avenue-co",
    number: "02",
    title: "Avenue & Co.",
    category: "Luxury Fashion Brand",
    image: "/images/avenue-co.jpg",
    link: "#",
  },
  {
    id: "the-journal",
    number: "03",
    title: "The Journal",
    category: "Editorial Platform",
    image: "/images/the-journal.jpg",
    link: "#",
  },
  {
    id: "fuel-performance",
    number: "04",
    title: "Fuel Performance",
    category: "Sports Nutrition Brand",
    image: "/images/fuel-performance.jpg",
    link: "#",
  },
];

export const SelectedProjects: React.FC = () => {
  return (
    <section className="w-full border-b border-[#C9C2B7] py-16 md:py-24 px-6 md:px-12 lg:px-16 bg-[#F5F1E8]">
      <div className="max-w-[1360px] mx-auto">
        {/* Section Header Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end pb-12 border-b border-[#C9C2B7]">
          {/* Left Title */}
          <div className="md:col-span-4">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight">
              <span className="block text-[#171717]">SELECTED</span>
              <span className="block text-[#B85C3A]">PROJECTS</span>
            </h2>
          </div>

          {/* Center Description */}
          <div className="md:col-span-5">
            <p className="text-xs sm:text-sm text-[#55504A] leading-relaxed max-w-sm">
              A curated selection of recent work showcasing web design, full-stack
              development, and creative problem-solving.
            </p>
          </div>

          {/* Right Action Link */}
          <div className="md:col-span-3 md:text-right">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#171717] hover:text-[#B85C3A] transition-colors duration-300"
            >
              <span>VIEW ALL PROJECTS</span>
              <ArrowUpRight className="w-4 h-4 text-[#B85C3A] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </a>
          </div>
        </div>

        {/* 4-Column Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-10">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              className="project-card group block flex flex-col space-y-4 text-left"
            >
              {/* Project Image Box */}
              <div className="relative aspect-[4/3] w-full overflow-hidden border border-[#C9C2B7] bg-[#EBE5D8]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="project-card-image object-cover filter contrast-[1.02]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Project Metadata Footer */}
              <div className="flex items-start gap-3 pt-1">
                {/* Large Serif Accent Number */}
                <span className="font-serif text-2xl font-normal text-[#B85C3A] leading-none pt-0.5">
                  {project.number}
                </span>

                {/* Title & Category */}
                <div className="flex flex-col space-y-0.5">
                  <h3 className="project-card-title font-sans font-bold text-base text-[#171717] leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#55504A] font-normal">
                    {project.category}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
