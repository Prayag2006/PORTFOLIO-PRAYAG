import { Header } from "@/components/Header";
import { VerticalSideLabels } from "@/components/VerticalSideLabels";
import { Hero } from "@/components/Hero";
import { SelectedProjects } from "@/components/SelectedProjects";
import { SkillsAndExpertise } from "@/components/SkillsAndExpertise";
import { Testimonials } from "@/components/Testimonials";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#F5F1E8] text-[#171717] relative">
      {/* Decorative Desktop Edge Side Labels */}
      <VerticalSideLabels />

      {/* Main Content Flow */}
      <Header />
      <Hero />
      <SelectedProjects />
      <SkillsAndExpertise />
      <Testimonials />
      <ContactCTA />
      <Footer />
    </main>
  );
}
