"use client";

import Navbar from "@/ui-components/Navbar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useScrollSpy } from "@/ui-components/scroll-spy";
import { ArrowRight, Download, Sparkles } from "lucide-react";

export default function Home() {

  return (
    <main className="page-shell">
      <Navbar />

      <section id="home" data-spy>
        <div className="flex flex-col items-start gap-12 ">
            <div className="section-kicker mb-5">
              <span className="inline-flex size-8 items-center justify-center rounded-full border border-white/10 bg-white/5">
                <Sparkles className="size-4 text-[#00F0FF]" />
              </span>
              Full Stack Developer
            </div>

            <h1 className="hero-title">
              Vansh{" "}<br/>
              <span className="text-[#00F0FF] drop-shadow-[0_0_24px_rgba(0,240,255,0.35)]">
                Dhir
              </span>
            </h1>

            <p className="section-lead mt-6">
              I build fast, modern web apps with clean UI, smooth animations, and
              solid engineering—focused on performance and great UX.
            </p>
          </div>
      </section>
    </main>
  );
}
