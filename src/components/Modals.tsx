"use client";

import { Project, NAV_ITEMS } from "@/lib/data";

const INK = "var(--ink)";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <div className="overlay" onClick={onClose}>
      <div className="pcard" onClick={e => e.stopPropagation()}>
        <button className="xbtn" onClick={onClose}>×</button>
        <div style={{ fontSize: 11, letterSpacing: "0.15em", opacity: 0.45, marginBottom: 6 }}>
          PROJECT — {project.status.toUpperCase()}
        </div>
        <h2
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontWeight: 800,
            fontSize: 30,
            letterSpacing: "-0.01em",
            marginBottom: 10,
            color: INK,
          }}
        >
          {project.name}
        </h2>
        <div style={{ width: 38, height: 2, background: INK, marginBottom: 18 }} />
        <p style={{ fontSize: 14, lineHeight: 1.78, marginBottom: 20 }}>{project.desc}</p>
        <div style={{ marginBottom: 20 }}>
          {project.tech.map(t => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
        <a
          href="#"
          style={{
            fontFamily: "var(--font-courier-prime), monospace",
            fontSize: 12,
            color: INK,
            letterSpacing: "0.12em",
            textDecoration: "none",
            opacity: 0.5,
          }}
        >
          VIEW PROJECT →
        </a>
      </div>
    </div>
  );
}

interface MenuModalProps {
  onClose: () => void;
  onNavigate: (scene: number) => void;
}

export function MenuModal({ onClose, onNavigate }: MenuModalProps) {
  return (
    <div className="overlay" onClick={onClose}>
      <div className="receipt" onClick={e => e.stopPropagation()}>
        <div style={{ textAlign: "center", marginBottom: 4 }}>
          <div style={{ fontWeight: 700, letterSpacing: "0.05em" }}>VANSH DHIR</div>
          <div style={{ opacity: 0.45, fontSize: 11 }}>Van5sh</div>
        </div>
        <hr style={{ border: "none", borderTop: "1px solid rgb(var(--bg-rgb) / 0.28)", margin: "10px 0" }} />
        <div style={{ fontSize: 11, opacity: 0.4, display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
          <span>Session #001</span>
          <span>Logged In</span>
        </div>
        <div style={{ opacity: 0.3, fontSize: 12, marginBottom: 8, letterSpacing: "0.02em" }}>
          {"=".repeat(30)}
        </div>
        {NAV_ITEMS.map((item, i) => (
          <div
            key={i}
            className="rni"
            onClick={() => { onNavigate(item.scene); onClose(); }}
          >
            {item.label}
          </div>
        ))}
        <hr style={{ border: "none", borderTop: "1px dashed rgb(var(--bg-rgb) / 0.25)", margin: "12px 0" }} />
        <div style={{ textAlign: "center", fontSize: 11 }}>
          <div style={{ letterSpacing: "0.12em", opacity: 0.75 }}>BUILT WITH ♥ AND CRICKET</div>
          <div style={{ opacity: 0.35, marginTop: 4 }}>VANSH. 2025</div>
          <div style={{ marginTop: 10, letterSpacing: "0.06em", opacity: 0.25, fontSize: 12 }}>
            ▐▌▐▌▐▌▐▌▐▌▐▌▐▌▐▌▐▌
          </div>
        </div>
      </div>
    </div>
  );
}
