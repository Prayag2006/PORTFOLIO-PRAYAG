import React from "react";
import Image from "next/image";
import { MoveRight } from "lucide-react";
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
    id: "nz-housing-board",
    number: "01",
    title: "New Zealand Housing Board",
    category: "Government Housing Website & Portal",
    image: "/images/nz-housing-board.jpg",
    link: "#",
  },
  {
    id: "myp-electrical-solutions",
    number: "02",
    title: "MYP Electrical Solutions",
    category: "Website & Database Management System",
    image: "/images/myp-electrical-solutions.jpg",
    link: "#",
  },
  {
    id: "raj-pvt-ltd",
    number: "03",
    title: "RAJ Pvt Ltd",
    category: "Attendance Management System",
    image: "/images/raj-pvt-ltd.jpg",
    link: "#",
  },
  {
    id: "lolly-shop",
    number: "04",
    title: "Lolly Shop Website",
    category: "E-Commerce Candy & Treats Platform",
    image: "/images/lolly-shop.jpg",
    link: "#",
  },
];

export const SelectedProjects: React.FC = () => {
  return (
    <section
      id="projects"
      className="w-full border-b border-[#C9C2B7] bg-[#F5F1E8] px-6 py-16 md:px-12 md:py-24 lg:px-16"
    >
      <div className="mx-auto max-w-[1360px]">
        {/* Section Header Row */}
        <Reveal>
          <div className="grid grid-cols-1 items-end gap-6 border-b border-[#C9C2B7] pb-10 md:grid-cols-12">
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
              className="group inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#171717] transition-colors duration-300 hover:text-[#B85C3A]"
            >
              <span>View all projects</span>
              <MoveRight
                className="h-4 w-8 text-[#B85C3A] transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={1.5}
              />
            </a>
            </div>
          </div>
        </Reveal>

        {/* Project Grid */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 pt-12 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, index) => {
            /*
             * "#" is a placeholder, not a destination. A card pointing at it
             * reads as a link, takes focus, and then jumps the visitor to the
             * top of the page — so those render as plain content instead, and
             * become links again the moment a real URL is filled in.
             */
            const href =
              project.link && project.link !== "#" ? project.link : null;

            const card = (
              <>
                <div
                  className={`panel relative aspect-[4/3] w-full overflow-hidden bg-[#EBE5D8]${
                    href ? " panel-hover" : ""
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} — ${project.category}`}
                    fill
                    className="project-card-image object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                {/* Metadata */}
                <div className="flex items-start gap-3 pt-5">
                  <span className="font-serif text-2xl leading-none text-[#B85C3A]">
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
              </>
            );

            return (
              <Reveal key={project.id} delay={index} className="h-full">
                {href ? (
                  <a
                    href={href}
                    className="project-card group flex h-full flex-col text-left"
                  >
                    {card}
                  </a>
                ) : (
                  <div className="flex h-full flex-col text-left">{card}</div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
