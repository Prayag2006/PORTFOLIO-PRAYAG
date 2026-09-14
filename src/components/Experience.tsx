import React from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

interface Role {
  company: string;
  role: string;
  /** Rendered verbatim; an en dash keeps it consistent with the CV. */
  period: string;
  points: string[];
}

const experience: Role[] = [
  {
    company: "New Zealand Government Workflow Optimization",
    role: "Software Optimization (Internship)",
    period: "07/2025 – 09/2025",
    points: [
      "Engineered a custom business web platform and responsive architecture using React.js and modern CSS, improving digital conversion rates and brand visibility.",
      "Designed and integrated strategic contact forms and lead generation modules that captured active user inquiries seamlessly.",
      "Architected a centralized Inventory Management System (IMS) featuring real-time stock tracking for electrical components, reducing manual logging errors by eliminating paper dependencies.",
      "Implemented automated operational alerts for low-stock thresholds, accelerating the hardware procurement workflow for remote field technicians.",
      "Formulated an industry-specific social media strategy and consistent visual branding identity to bridge internal operational metrics with external commercial visibility.",
    ],
  },
  {
    company: "MYP Electrical Solutions",
    role: "Web Developer & System Designer (Freelancing project)",
    period: "09/2025 – 02/2026",
    points: [
      "Developed and deployed custom backend modules designed to automate highly repetitive, complex administrative workflows within public sector software architectures.",
      "Optimized data-processing logic and transaction frameworks, significantly decreasing server-side execution delays and accelerating high-volume data handling.",
      "Refactored core platform navigational layouts using user-centric UI/UX design methodologies, reducing operational friction for government officials.",
      "Audited and enhanced platform features to strictly comply with cross-departmental security governance and government compliance standards, ensuring complete data integrity.",
    ],
  },
  {
    company: "Raj Chemist",
    role: "AI-Powered Attendance & Payroll System (Freelancing project)",
    period: "02/2026 – 03/2026",
    points: [
      "Developed a production-ready, full-stack AI attendance platform integrating cross-platform live-camera facial recognition powered by DeepFace (FaceNet), OpenCV, and anti-spoofing algorithms.",
      "Programmed a high-precision Geo-fencing API combined with a custom progressive 4-punch tracking logic to mathematically restrict and automate clock-ins based on real-time hardware locations.",
      "Engineered a scalable payroll engine that programmatically calculates shift tiers, precise overtime coefficients, and late fee deductions.",
      "Constructed an interactive administrative analytics dashboard equipped with asynchronous Excel and PDF report data-exports using Next.js, Node.js, and PostgreSQL.",
      "Containerized the application services utilizing Docker and optimized cloud storage pipelines by mapping static assets directly to AWS S3 buckets.",
    ],
  },
  {
    company: "Intellimedia Networks",
    role: "Full-stack Developer",
    period: "03/2026 – 07/2026",
    points: [
      "Architecture & Development: Architected, developed, and maintained scalable, end-to-end web applications powering interactive video streaming and digital media delivery workflows.",
      "Frontend Engineering: Designed responsive, high-performance user interfaces using modern JavaScript frameworks (React.js/Vue.js), optimizing page load speeds and real-time media player interactions.",
      "Backend & API Systems: Built robust RESTful APIs and backend microservices using Node.js / Python / Java, integrating seamlessly with cloud infrastructure and database engines.",
      "Database & Performance Optimization: Managed and optimized SQL and NoSQL databases (MongoDB, PostgreSQL) for high-throughput media telemetry and user analytics.",
      "DevOps & Collaboration: Partnered with cross-functional teams in an Agile environment to streamline CI/CD pipelines, containerize applications (Docker), and deploy features on cloud environments (AWS/Azure).",
    ],
  },
  {
    company: "i-Hub Gujarat",
    role: "Full-Stack Developer & Data Management (Government Department)",
    period: "08/2026 – Present",
    points: [
      "Architect and ship full-stack web platforms for a Government of Gujarat department, owning delivery end to end from React and Next.js interfaces through Node.js service layers down to the PostgreSQL schema beneath them.",
      "Design and maintain the department's core data management layer — normalised schemas, validation rules, and repeatable migration routines that hold records consistent as they move between departmental systems.",
      "Build ingestion and reconciliation pipelines that consolidate fragmented datasets into a single authoritative source, retiring the duplicate manual entry that previously ran between offices.",
      "Deliver administrative dashboards and automated report exports that turn raw operational data into decision-ready reporting for departmental stakeholders and programme reviews.",
      "Implement role-based access control, audit trails, and data-retention safeguards aligned with government security governance and public-sector compliance requirements.",
      "Tune high-volume queries and indexing strategies so response times stay stable as record volumes grow across the department's active programmes.",
    ],
  },
];

/**
 * Work history as an editorial timeline: period in the left rail, detail in
 * the right. An <ol> because these are a chronology rather than a set of
 * cards — the hairline between rows does the dividing a card border would
 * otherwise duplicate.
 */
export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="w-full border-b border-[#C9C2B7] bg-[#F1EDE3] px-6 py-16 md:px-12 md:py-24 lg:px-16"
    >
      <div className="mx-auto max-w-[1360px]">
        <Reveal>
          <div className="border-b border-[#C9C2B7] pb-10">
            <SectionHeading lead="Professional" accent="Experience" />
          </div>
        </Reveal>

        <ol className="pt-4">
          {experience.map((entry, index) => {
            /* Derived rather than a hand-kept flag, so it cannot fall out of
               sync with the period it describes. */
            const current = entry.period.endsWith("Present");

            return (
              <li
                key={entry.company}
                className="border-b border-[#C9C2B7] py-10 last:border-b-0 last:pb-0"
              >
                <Reveal delay={index}>
                  <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-10">
                    {/* Period rail */}
                    <div className="lg:col-span-3">
                      <div className="flex items-center gap-3">
                        {/* The hero disc shrunk to a timeline marker: filled
                            for the current role, a ring for past ones. */}
                        <span
                          aria-hidden="true"
                          className={`h-2.5 w-2.5 flex-shrink-0 rounded-full ${
                            current
                              ? "bg-[#B85C3A]"
                              : "border border-[#C9C2B7] bg-transparent"
                          }`}
                        />
                        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#55504A]">
                          {entry.period}
                        </span>
                      </div>
                    </div>

                    {/* Detail */}
                    <div className="lg:col-span-9">
                      <h3 className="font-serif text-2xl uppercase leading-[1.1] tracking-tight text-[#171717] sm:text-[1.75rem]">
                        {entry.company}
                      </h3>
                      <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#55504A]">
                        {entry.role}
                      </p>

                      <ul className="mt-5 space-y-3">
                        {entry.points.map((point) => (
                          <li
                            key={point}
                            className="flex gap-3 text-sm leading-relaxed text-[#55504A]"
                          >
                            {/* A hairline dash, not a disc — the page's rules
                                already read as its list marker. */}
                            <span
                              aria-hidden="true"
                              className="mt-[0.6rem] h-[1px] w-3 flex-shrink-0 bg-[#C9C2B7]"
                            />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};
