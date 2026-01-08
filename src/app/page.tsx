import AboutPage from "@/pages/about";
import LandingPage from "@/pages/landing";
import SkillsPage from "@/pages/skills";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <LandingPage/>
        <AboutPage/>
        <SkillsPage/>
    </div>
  );
}
