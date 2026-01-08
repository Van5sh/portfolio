import AboutPage from "@/pages/about";
import LandingPage from "@/pages/landing";
import SkillsPage from "@/pages/skills";
import Image from "next/image";
import ExperiencePage from "@/pages/experience";
import Projects from "@/pages/Projects";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center text-black">
        <LandingPage/>
        <AboutPage/>
        <SkillsPage/>
        <ExperiencePage/>
        <Projects/>
    </div>
  );
}
