"use client";
import AboutPage from "@/sections/about";
import LandingPage from "@/sections/landing";
import SkillsPage from "@/sections/skills";
import ExperiencePage from "@/sections/experience";
import Projects from "@/sections/Projects";
import Extracurricular from "@/sections/Extracurricular";
import Contacts from "@/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center text-black">
      <section
        id="home"
        className="w-full h-full flex items-center justify-center"
      >
        <LandingPage />
      </section>
      <section id="about" className="w-full">
        <AboutPage />
      </section>
      <section id="skills" className="w-full">
        <SkillsPage />
      </section>
      <section id="experience" className="w-full">
        <ExperiencePage />
      </section>
      <section id="projects" className="w-full">
        <Projects />
      </section>
      <section id="extracurricular" className="w-full">
        <Extracurricular />
      </section>
      <section id="contact" className="w-full">
        <Contacts />
      </section>
    </div>
  );
}
