"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { CheckCircle2, ChevronLeft, ChevronRight, Pause, Play, Award } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

interface Certificate {
  id: string;
  number: string;
  title: string;
  issuer: string;
  category: string;
  image: string;
}

const certificates: Certificate[] = [
  {
    id: "fullstack-web-dev",
    number: "01",
    title: "Full Stack Web Development Certification",
    issuer: "Red & White Multimedia Education",
    category: "Full-Stack Architecture",
    image: "/images/cert-fullstack.jpg",
  },
  {
    id: "nptel-python",
    number: "02",
    title: "NPTEL – Python",
    issuer: "IIT Madras / NPTEL",
    category: "Programming & Data Science",
    image: "/images/cert-python.jpg",
  },
  {
    id: "infosys-cplusplus",
    number: "03",
    title: "Infosys – C++ Practical (Organogram in C++)",
    issuer: "Infosys Springboard",
    category: "C++ Programming & Data Structures",
    image: "/images/cert-infosys.jpg",
  },
  {
    id: "innovation-hackathon",
    number: "04",
    title: "Second Prize Winner",
    issuer: "Red & White Institute Innovation Hackathon",
    category: "Innovation & Hackathon",
    image: "/images/cert-hackathon.jpg",
  },
  {
    id: "html5-css3-web",
    number: "05",
    title: "Technical Certification – Advanced HTML5 & CSS3 Web Engineering",
    issuer: "Web Engineering Standards",
    category: "Frontend Architecture",
    image: "/images/cert-html5-css3.jpg",
  },
];

export const Certifications: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -380, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 380, behavior: "smooth" });
    }
  };

  // Duplicate items twice to form a seamless 100% infinite marquee loop
  const loopCertificates = [...certificates, ...certificates];

  return (
    <section
      id="certifications"
      className="w-full border-b border-[#C9C2B7] bg-[#F5F1E8] py-16 md:py-24 overflow-hidden"
    >
      <div className="mx-auto max-w-[1360px] px-6 md:px-12 lg:px-16">
        {/* Section Header Row */}
        <Reveal>
          <div className="grid grid-cols-1 items-end gap-6 border-b border-[#C9C2B7] pb-10 md:grid-cols-12">
            <div className="md:col-span-6">
              <SectionHeading lead="Courses &" accent="Certifications" />
            </div>

            <div className="flex flex-col items-start gap-4 md:col-span-6 md:items-end">
              <p className="max-w-md text-xs leading-relaxed text-[#55504A] sm:text-sm md:text-right">
                Verified professional credentials, competitive hackathon awards,
                and technical accreditations demonstrating expertise in Full Stack
                Web Engineering and Software Architecture.
              </p>

              {/* Slider Interactive Controls */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  aria-label={isPlaying ? "Pause slider" : "Play slider"}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C9C2B7] bg-[#F1EDE3] text-[#171717] transition-all duration-300 hover:border-[#B85C3A] hover:bg-[#B85C3A] hover:text-white"
                >
                  {isPlaying ? (
                    <Pause className="h-4 w-4" />
                  ) : (
                    <Play className="h-4 w-4 ml-0.5" />
                  )}
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={scrollLeft}
                    aria-label="Scroll left"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C9C2B7] bg-[#F1EDE3] text-[#171717] transition-all duration-300 hover:border-[#B85C3A] hover:bg-[#B85C3A] hover:text-white"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={scrollRight}
                    aria-label="Scroll right"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C9C2B7] bg-[#F1EDE3] text-[#171717] transition-all duration-300 hover:border-[#B85C3A] hover:bg-[#B85C3A] hover:text-white"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Infinite Loop Track Container */}
      <div className="relative w-full pt-12">
        {/* Soft Edge Gradients */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-[#F5F1E8] to-transparent md:w-32" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-[#F5F1E8] to-transparent md:w-32" />

        {/* Scrollable Track */}
        <div
          ref={scrollContainerRef}
          className="flex w-full overflow-x-auto scrollbar-none no-scrollbar py-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div
            className={`animate-marquee flex gap-8 px-6 ${
              !isPlaying ? "[animation-play-state:paused]" : ""
            }`}
          >
            {loopCertificates.map((cert, index) => (
              <div
                key={`${cert.id}-${index}`}
                className="group flex w-[300px] sm:w-[350px] md:w-[400px] flex-shrink-0 flex-col text-left"
              >
                {/* Image Panel with Hard Border & Hover Offset */}
                <div className="panel panel-hover relative aspect-[4/3] w-full overflow-hidden bg-[#EBE5D8]">
                  <Image
                    src={cert.image}
                    alt={`${cert.title} — ${cert.issuer}`}
                    fill
                    className="project-card-image object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 300px, 400px"
                  />
                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3 rounded-full bg-[#171717]/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#F5F1E8] backdrop-blur-sm">
                    {cert.category}
                  </div>
                </div>

                {/* Card Metadata */}
                <div className="flex items-start gap-3.5 pt-5">
                  <span className="font-serif text-2xl leading-none text-[#B85C3A]">
                    {cert.number}
                  </span>

                  <div className="flex flex-col justify-center">
                    <h3 className="font-sans text-sm sm:text-base font-bold leading-snug text-[#171717] transition-colors duration-300 group-hover:text-[#B85C3A]">
                      {cert.title}
                    </h3>
                    <p className="mt-1 text-xs italic font-normal text-[#55504A]">
                      {cert.issuer}
                    </p>
                    <div className="mt-2.5 flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider text-[#B85C3A]">
                      <CheckCircle2 className="h-3.5 w-3.5 stroke-[2]" />
                      <span>Verified Certificate</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
