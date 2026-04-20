"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import SceneHero from "@/components/scenes/SceneHero";
import SceneWelcome from "@/components/scenes/SceneWelcome";
import SceneHackstation from "@/components/scenes/SceneHackstation";
import SceneTechShelf from "@/components/scenes/SceneTechShelf";
import SceneWarRoom from "@/components/scenes/SceneWarRoom";
import SceneCricketCorner from "@/components/scenes/SceneCricketCorner";
import SceneSideQuests from "@/components/scenes/SceneSideQuests";
import SceneTerminal from "@/components/scenes/SceneTerminal";
import SceneFinal from "@/components/scenes/SceneFinal";
import { ProjectModal, MenuModal } from "@/components/Modals";
import { PROJECTS, SCENE_NAMES, Project } from "@/lib/data";

const INK = "#3B0D12";

export default function Portfolio() {
  const [cur, setCur] = useState(0);
  const [menu, setMenu] = useState(false);
  const [proj, setProj] = useState<Project | null>(null);
  const [playing, setPlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const TOTAL = 9;

  // Detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 700);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Restore scene from localStorage
  useEffect(() => {
    try {
      const s = localStorage.getItem("vansh-scene");
      if (s !== null) setCur(Math.min(parseInt(s), TOTAL - 1));
    } catch {}
  }, []);

  const goTo = useCallback((n: number) => {
    const nx = Math.max(0, Math.min(TOTAL - 1, n));
    setCur(nx);
    try { localStorage.setItem("vansh-scene", String(nx)); } catch {}
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

  // Touch / swipe
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

  // Autoplay
  const playRef = useRef<ReturnType<typeof setInterval> | null>(null);
  useEffect(() => {
    if (playRef.current) clearInterval(playRef.current);
    if (playing) {
      playRef.current = setInterval(() => {
        setCur(s => (s >= TOTAL - 1 ? 0 : s + 1));
      }, 4500);
    }
    return () => { if (playRef.current) clearInterval(playRef.current); };
  }, [playing]);

  const scenes = [
    <SceneHero key={0} />,
    <SceneWelcome key={1} />,
    <SceneHackstation key={2} projects={PROJECTS} onProjectClick={setProj} />,
    <SceneTechShelf key={3} />,
    <SceneWarRoom key={4} />,
    <SceneCricketCorner key={5} />,
    <SceneSideQuests key={6} />,
    <SceneTerminal key={7} />,
    <SceneFinal key={8} />,
  ];

  return (
    <div
      style={{
        background: "#F7F2E3",
        width: "100%",
        height: isMobile ? "auto" : "100vh",
        overflow: isMobile ? "visible" : "hidden",
        transition: "background 0.4s",
      }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Top Nav */}
      <nav className="t-nav">
        <span className="t-nav-logo" onClick={() => goTo(0)}>VANSH.</span>
        <span className="t-nav-sub">(a hack-shaped portfolio)</span>
      </nav>

      {/* Scenes track */}
      <div className="track-outer">
        <div
          className="track"
          style={isMobile ? {} : { transform: `translateX(-${cur * 100}vw)` }}
        >
          {scenes}
        </div>
      </div>

      {/* Bottom Nav — desktop only */}
      {!isMobile && (
        <div className="b-nav">
          <button
            className="bnb"
            onClick={() => setPlaying(p => !p)}
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

      {/* Dot indicators — desktop only */}
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

      {/* Mobile: simple bottom tab for menu */}
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
            background: "rgba(247,242,227,0.9)",
            backdropFilter: "blur(8px)",
            borderTop: `1px solid rgba(59,13,18,0.1)`,
          }}
        >
          <button
            onClick={() => setMenu(true)}
            style={{
              background: INK,
              color: "#F7F2E3",
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

      {/* Modals */}
      {menu && <MenuModal onClose={() => setMenu(false)} onNavigate={goTo} />}
      {proj && <ProjectModal project={proj} onClose={() => setProj(null)} />}
    </div>
  );
}
