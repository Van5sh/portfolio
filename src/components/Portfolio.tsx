"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import SceneHero from "@/components/scenes/SceneHero";
import SceneWelcome from "@/components/scenes/SceneWelcome";
import SceneHackstation from "@/components/scenes/SceneHackstation";
import { Download } from 'lucide-react';
import SceneTechShelf from "@/components/scenes/SceneTechShelf";
import SceneWarRoom from "@/components/scenes/SceneWarRoom";
import SceneTerminal from "@/components/scenes/SceneTerminal";
import SceneFinal from "@/components/scenes/SceneFinal";
import { ProjectModal, MenuModal } from "@/components/Modals";
import { PROJECTS, SCENE_NAMES, Project } from "@/lib/data";
import { Button } from "./ui/button";
import SceneSideQuests from "./scenes/SceneSideQuests";

const INK = "var(--ink)";
const BG = "var(--bg)";

export default function Portfolio() {
  const [cur, setCur] = useState(0);
  const [menu, setMenu] = useState(false);
  const [proj, setProj] = useState<Project | null>(null);
  const [playing, setPlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const TOTAL = 8;

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

  // Keyboard navigation
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goTo(cur + 1);
      if (e.key === "ArrowLeft") goTo(cur - 1);
      if (e.key === "Escape") { setMenu(false); setProj(null); }
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [cur, goTo]);

  const touchStartX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 48) goTo(cur + (dx < 0 ? 1 : -1));
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
            return 0;
          }
          const next = s + 1;
          return next;
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
    <SceneSideQuests key={5} />,
    <SceneTerminal key={6} onNavigate={goTo} active={cur === 6} />,
    <SceneFinal key={7} />,
  ];

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
      <nav className="t-nav">
        <span className="t-nav-logo" onClick={() => goTo(0)}>VANSH.</span>
        <Button className="t-nav-button" onClick={() => window.open("/MyResume.pdf", "_blank", "noopener,noreferrer")}>
          <Download /> Resume
        </Button>
      </nav>
      <div className="track-outer">
        <div
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
            title="Autoplay"
          >
            {playing ? "⏸" : "▶"}
          </button>
          <div className="bns" />
          <button
            className="bnb"
            onClick={() => setMenu(true)}
            title="Menu"
            style={{ fontSize: 18 }}
          >
            ≡
          </button>
          <div className="bns" />
          <button className="bnb" onClick={() => goTo(cur - 1)} disabled={cur === 0}>←</button>
          <button className="bnb" onClick={() => goTo(cur + 1)} disabled={cur === TOTAL - 1}>→</button>
        </div>
      )}
      {!isMobile && (
        <div className="dots">
          {scenes.map((_, i) => (
            <div
              key={i}
              className={`dot${i === cur ? " on" : ""}`}
              onClick={() => goTo(i)}
              title={SCENE_NAMES[i]}
            />
          ))}
        </div>
      )}
      {isMobile && (
        <div
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 200,
            display: "flex",
            justifyContent: "center",
            padding: "12px 0 20px",
            background: "rgb(var(--bg-rgb) / 0.9)",
            backdropFilter: "blur(8px)",
            borderTop: "1px solid rgb(var(--ink-rgb) / 0.1)",
          }}
        >
          <button
            onClick={() => setMenu(true)}
            style={{
              background: INK,
              color: BG,
              border: "none",
              borderRadius: 100,
              padding: "8px 28px",
              fontFamily: "var(--font-courier-prime), monospace",
              fontSize: 13,
              cursor: "pointer",
              letterSpacing: "0.1em",
            }}
          >
            ≡ MENU
          </button>
        </div>
      )}
      {menu && <MenuModal onClose={() => setMenu(false)} onNavigate={goTo} />}
      {proj && <ProjectModal project={proj} onClose={() => setProj(null)} />}
    </div>
  );
}
