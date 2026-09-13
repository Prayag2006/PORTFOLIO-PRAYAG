import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

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
    <section
      id="projects"
      className="w-full border-b-2 border-[#171717] bg-[#F5F1E8] px-6 py-16 md:px-12 md:py-24 lg:px-16"
    >
      <div className="mx-auto max-w-[1360px]">
        {/* Section Header Row */}
        <Reveal>
          <div className="grid grid-cols-1 items-end gap-6 border-b-2 border-[#171717] pb-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionHeading lead="Selected" accent="Projects" />
          </div>

          <div className="md:col-span-4">
            <p className="max-w-sm text-xs leading-relaxed text-[#55504A] sm:text-sm">
              A curated selection of recent work showcasing web design,
              full-stack development, and creative problem-solving.
            </p>
          </div>

          <div className="md:col-span-3 md:text-right">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 border-2 border-[#171717] bg-[#171717] px-4 py-2.5 text-xs font-bold uppercase tracking-[0.18em] text-[#F5F1E8] transition-colors duration-300 hover:bg-[#B85C3A] hover:border-[#B85C3A]"
            >
              <span>View all projects</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            </div>
          </div>
        </Reveal>

        {/* Project Grid */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 pt-12 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index} className="h-full">
              <a
                href={project.link}
                className="project-card group flex h-full flex-col text-left"
              >
              {/* Hard-bordered image block with a solid offset that collapses on hover */}
              <div className="brutal-block brutal-lift relative aspect-[4/3] w-full overflow-hidden bg-[#EBE5D8]">
                <Image
                  src={project.image}
                  alt={`${project.title} — ${project.category}`}
                  fill
                  className="project-card-image object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Metadata */}
              <div className="flex items-stretch gap-3 pt-5">
                {/* Solid ink index block */}
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center bg-[#171717] font-display text-lg leading-none text-[#F5F1E8]">
                  {project.number}
                </span>

                <div className="flex flex-col justify-center">
                  <h3 className="project-card-title font-sans text-base font-bold leading-tight text-[#171717]">
                    {project.title}
                  </h3>
                  <p className="text-xs font-normal text-[#55504A]">
                    {project.category}
                  </p>
                </div>
              </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
