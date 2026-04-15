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
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <div className="section-kicker mb-5">
              <span className="inline-flex size-8 items-center justify-center rounded-full border border-white/10 bg-white/5">
                <Sparkles className="size-4 text-[#00F0FF]" />
              </span>
              Full Stack Developer
            </div>

            <h1 className="hero-title">
              Vansh{" "}
              <span className="text-[#00F0FF] drop-shadow-[0_0_24px_rgba(0,240,255,0.35)]">
                Dhir
              </span>
            </h1>

            <p className="section-lead mt-6">
              I build fast, modern web apps with clean UI, smooth animations, and
              solid engineering—focused on performance and great UX.
            </p>
          </div>
          <div></div>
        </div>
      </section>
    </main>
  );
}
