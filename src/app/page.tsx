// ✅ src/app/page.tsx
"use client";
import StarsBackground from "./components/StarsBackground";
import Navbar from "./components/Navbar";


import HomeSection from "./sections/Home";
import AboutSection from "./sections/About";
import SkillsSection from "./sections/Skills";
import ProjectsSection from "./sections/Projects";
import ExperienceSection from "./sections/Experience";
import AchievementsSection from "./sections/Achievements";
import ContactSection from "./sections/Contact";

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <StarsBackground />
      <Navbar />
      

      {/* Sections */}
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <AchievementsSection />
      <ContactSection />
    </main>
  );
}
