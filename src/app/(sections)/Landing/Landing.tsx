"use client";

import { Sparkles } from "lucide-react";

export default function Landing() {
  return (
    <section className="flex flex-1 items-center justify-center px-4 py-20">
      <div className="max-w-2xl flex flex-col items-center text-center gap-6">

        <span className="inline-flex items-center justify-center size-10 rounded-full border border-white/10 bg-white/5">
          <Sparkles className="size-5 text-[var(--theme-accent)]" />
        </span>

        <p className="text-sm text-[var(--theme-ink-soft)] tracking-wide">
          Full Stack Developer
        </p>

        <h1 className="hero-title leading-tight">
          VANSH <br />
          <span className="text-[var(--theme-accent)] drop-shadow-[0_0_24px_rgba(0,240,255,0.35)]">
            DHIR
          </span>
        </h1>

        <p className="section-lead">
          I build fast, modern web apps with clean UI, smooth animations, and
          solid engineering—focused on performance and great UX.
        </p>

      </div>
    </section>
  );
}