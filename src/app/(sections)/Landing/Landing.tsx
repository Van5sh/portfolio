"use client";

import Navbar from "@/ui-components/Navbar";
import { Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <section
        id="home"
        className="flex flex-1 items-center justify-center px-4"
      >
        <div className="max-w-2xl flex flex-col items-center text-center gap-8">
          
          <span className="inline-flex items-center justify-center size-10 rounded-full border border-white/10 bg-white/5">
            <Sparkles className="size-5 text-[#00F0FF]" />
          </span>

          <p className="text-sm text-white/60 tracking-wide">
            Full Stack Developer
          </p>

          <h1 className="hero-title leading-tight">
              VANSH <br />
            <span className="text-[#00F0FF] drop-shadow-[0_0_24px_rgba(0,240,255,0.35)]">
              DHIR
            </span>
          </h1>

          <p className="section-lead">
            I build fast, modern web apps with clean UI, smooth animations, and
            solid engineering—focused on performance and great UX.
          </p>
        </div>
      </section>
    </main>
  );
}