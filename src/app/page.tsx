import AboutPage from "@/sections/About";
import LandingPage from "@/sections/Landing";
import SkillsPage from "@/sections/Skills";
import ExperiencePage from "@/sections/Experience";
import Projects from "@/sections/Projects";
import Extracurricular from "@/sections/Extracurricular";
import Contacts from "@/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center text-black">
      <LandingPage />
      <AboutPage />
      <SkillsPage />
      <ExperiencePage />
      <Projects />
      <Extracurricular />
      <Contacts />
    </div>
  );
}
