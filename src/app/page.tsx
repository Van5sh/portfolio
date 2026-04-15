"use client";


import Landing  from "@/app/(sections)/Landing/Landing";
import { LandPlot, Sparkles } from "lucide-react";
import AboutPage from "./(sections)/About/About";
import Project from "./(sections)/Project/Project";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* <Landing /> */}
      {/* <AboutPage/> */}
      <Project/>
    </main>
  );
}