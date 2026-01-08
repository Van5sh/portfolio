import AboutPage from "@/pages/about";
import LandingPage from "@/pages/landing";
import SkillsPage from "@/pages/skills";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
        <LandingPage/>
        <AboutPage/>
        <SkillsPage/>
    </div>
  );
}
