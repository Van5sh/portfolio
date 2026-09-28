"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import SceneHero from "@/components/scenes/SceneHero";
import SceneWelcome from "@/components/scenes/SceneWelcome";
import SceneHackstation from "@/components/scenes/SceneHackstation";
import { Download, Pause, Play, Menu, ArrowLeft, ArrowRight } from 'lucide-react';
import SceneTechShelf from "@/components/scenes/SceneTechShelf";
import SceneWarRoom from "@/components/scenes/SceneWarRoom";
import SceneCricketCorner from "@/components/scenes/SceneCricketCorner";
import SceneTerminal from "@/components/scenes/SceneTerminal";
import SceneFinal from "@/components/scenes/SceneFinal";
import { ProjectModal, MenuModal } from "@/components/Modals";
import { PROJECTS, SCENE_NAMES, Project } from "@/lib/data";
import { Button } from "./ui/button";

const BG = "var(--bg)";

export default function Portfolio() {
  const [cur, setCur] = useState(0);
  const [menu, setMenu] = useState(false);
  const [proj, setProj] = useState<Project | null>(null);
  const [playing, setPlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const TOTAL = 8;
  const modalOpen = menu || proj !== null;

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 700);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const goTo = useCallback((n: number) => {
    const nx = Math.max(0, Math.min(TOTAL - 1, n));
    setCur(nx);
  }, []);

  // Manual navigation stops autoplay
  const navigate = useCallback((n: number) => {
    setPlaying(false);
    goTo(n);
  }, [goTo]);

  // Keyboard navigation
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setMenu(false); setProj(null); return; }
      if (modalOpen) return;
      // Let arrows move the caret while typing in a field that has text
      const t = e.target as HTMLElement | null;
      if (t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement) {
        if (t.value.length > 0) return;
      }
      if (isMobile) return;
      if (e.key === "ArrowRight") navigate(cur + 1);
      if (e.key === "ArrowLeft") navigate(cur - 1);
      if (e.key === "Home" && !(t instanceof HTMLInputElement)) navigate(0);
      if (e.key === "End" && !(t instanceof HTMLInputElement)) navigate(TOTAL - 1);
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [cur, navigate, modalOpen, isMobile]);

  // Mark the visible scene so its content can animate in
  useEffect(() => {
    const kids = trackRef.current?.children;
    if (!kids) return;
    Array.from(kids).forEach((el, i) => el.classList.toggle("is-active", i === cur));
  }, [cur]);

  // On mobile the scenes stack vertically, so menu picks scroll to the scene
  const onMenuNavigate = (n: number) => {
    navigate(n);
    if (isMobile) trackRef.current?.children[n]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const touchStartX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || isMobile) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 48) navigate(cur + (dx < 0 ? 1 : -1));
    touchStartX.current = null;
  };
  const playRef = useRef<ReturnType<typeof setInterval> | null>(null);
  useEffect(() => {
    if (playRef.current) clearInterval(playRef.current);
    if (playing) {
      playRef.current = setInterval(() => {
        setCur((s) => {
          if (s >= TOTAL - 1) {
            setPlaying(false);
            return s;
          }
          return s + 1;
        });
      }, 4500);
    }
    return () => { if (playRef.current) clearInterval(playRef.current); };
  }, [playing]);

  const onToggleAutoplay = () => {
    if (!playing && cur >= TOTAL - 1) goTo(0);
    setPlaying((p) => !p);
  };

  const scenes = [
    <SceneHero key={0} />,
    <SceneWelcome key={1} />,
    <SceneHackstation key={2} projects={PROJECTS}
      onProjectClick={(p: Project) => setProj(p)}
    />,
    <SceneTechShelf key={3} />,
    <SceneWarRoom key={4} />,
    <SceneCricketCorner key={5} />,
    <SceneTerminal key={6} onNavigate={navigate} active={cur === 6} />,
    <SceneFinal key={7} />,
  ];

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div
      style={{
        background: BG,
        width: "100%",
        height: isMobile ? "auto" : "100vh",
        overflow: isMobile ? "visible" : "hidden",
        transition: "background 0.4s",
      }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {!isMobile && (
        <div className="progress" aria-hidden>
          <div className="progress-fill" style={{ transform: `scaleX(${(cur + 1) / TOTAL})` }} />
        </div>
      )}
      <nav className="t-nav">
        <button className="t-nav-logo" onClick={() => navigate(0)} aria-label="Back to start">
          VANSH<span className="t-nav-logo-dot">.</span>
        </button>
        <Button className="t-nav-button" onClick={() => window.open("/MyResume.pdf", "_blank", "noopener,noreferrer")}>
          <Download /> Resume
        </Button>
      </nav>
      <div className="track-outer">
        <div
          ref={trackRef}
          className="track"
          style={isMobile ? {} : { transform: `translateX(-${cur * 100}vw)` }}
        >
          {scenes}
        </div>
      </div>
      {!isMobile && (
        <div className="b-nav">
          <button
            className="bnb"
            onClick={onToggleAutoplay}
            title={playing ? "Pause autoplay" : "Autoplay"}
            aria-label={playing ? "Pause autoplay" : "Start autoplay"}
          >
            {playing ? <Pause size={15} /> : <Play size={15} />}
          </button>
          <div className="bns" />
          <button
            className="bnb"
            onClick={() => setMenu(true)}
            title="Menu"
            aria-label="Open menu"
          >
            <Menu size={16} />
          </button>
          <div className="bns" />
          <div className="b-nav-label" aria-live="polite">
            <span className="b-nav-count">{pad(cur + 1)}<span>/{pad(TOTAL)}</span></span>
            <span className="b-nav-name">{SCENE_NAMES[cur]}</span>
          </div>
          <div className="bns" />
          <button className="bnb" onClick={() => navigate(cur - 1)} disabled={cur === 0} aria-label="Previous scene" title="Previous (←)">
            <ArrowLeft size={16} />
          </button>
          <button className="bnb" onClick={() => navigate(cur + 1)} disabled={cur === TOTAL - 1} aria-label="Next scene" title="Next (→)">
            <ArrowRight size={16} />
          </button>
        </div>
      )}
      {!isMobile && (
        <div className="dots">
          {scenes.map((_, i) => (
            <button
              key={i}
              className={`dot${i === cur ? " on" : ""}`}
              onClick={() => navigate(i)}
              aria-label={`Go to ${SCENE_NAMES[i]}`}
              aria-current={i === cur ? "step" : undefined}
            >
              <span className="dot-tip">{SCENE_NAMES[i]}</span>
            </button>
          ))}
        </div>
      )}
      {isMobile && (
        <div className="m-nav">
          <button className="m-nav-btn" onClick={() => setMenu(true)}>
            <Menu size={14} /> MENU
          </button>
        </div>
      )}
      {menu && <MenuModal current={cur} onClose={() => setMenu(false)} onNavigate={onMenuNavigate} />}
      {proj && <ProjectModal project={proj} onClose={() => setProj(null)} />}
    </div>
  );
}
