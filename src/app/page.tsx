import AboutPage from "@/sections/about";
import LandingPage from "@/sections/landing";
import SkillsPage from "@/sections/skills";
import ExperiencePage from "@/sections/experience";
import Projects from "@/sections/Projects";

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
