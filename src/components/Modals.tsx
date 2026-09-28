"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Project, NAV_ITEMS } from "@/lib/data";

const INK = "var(--ink)";

function ModalPortal({ children }: { children: React.ReactNode }) {
  if (typeof document === "undefined") return null;
  return createPortal(children, document.body);
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <ModalPortal>
      <div className="overlay" onClick={onClose}>
        <div className="pcard" onClick={(e) => e.stopPropagation()}>
          <button className="xbtn" onClick={onClose} aria-label="Close">
            ×
          </button>
          <div
            style={{
              fontSize: 11,
              letterSpacing: "0.15em",
              opacity: 0.45,
              marginBottom: 6,
            }}
          >
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
          <p style={{ fontSize: 14, lineHeight: 1.78, marginBottom: 20 }}>
            {project.desc}
          </p>
          <div>
            {project.tech.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
          <div className="modal-hint">ESC to close</div>
        </div>
      </div>
    </ModalPortal>
  );
}

interface MenuModalProps {
  current?: number;
  onClose: () => void;
  onNavigate: (scene: number) => void;
}

export function MenuModal({ current, onClose, onNavigate }: MenuModalProps) {
  return (
    <ModalPortal>
      <div className="overlay" onClick={onClose}>
        <div className="receipt" onClick={(e) => e.stopPropagation()}>
          <div style={{ textAlign: "center", marginBottom: 4 }}>
            <div style={{ fontWeight: 700, letterSpacing: "0.05em" }}>VANSH DHIR</div>
            <div style={{ opacity: 0.45, fontSize: 11 }}>Van5sh</div>
          </div>
          <hr
            style={{
              border: "none",
              borderTop: "1px dashed rgb(var(--ink-rgb) / 0.28)",
              margin: "10px 0",
            }}
          />
          <div
            style={{
              fontSize: 11,
              opacity: 0.4,
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 4,
            }}
          >
            <span>Session #001</span>
            <span>Logged In</span>
          </div>
          <div
            style={{
              opacity: 0.3,
              fontSize: 12,
              marginBottom: 8,
              letterSpacing: "0.02em",
            }}
          >
            {"=".repeat(30)}
          </div>
          {NAV_ITEMS.map((item, i) => (
            <button
              key={i}
              className={`rni${item.scene === current ? " on" : ""}`}
              onClick={() => {
                onNavigate(item.scene);
                onClose();
              }}
            >
              <span>{item.label}</span>
              <span className="rni-num">{String(item.scene + 1).padStart(2, "0")}</span>
            </button>
          ))}
          <div
            style={{
              opacity: 0.3,
              fontSize: 12,
              marginTop: 8,
              letterSpacing: "0.02em",
            }}
          >
            {"=".repeat(30)}
          </div>
          <div style={{ textAlign: "center", fontSize: 11, opacity: 0.5, letterSpacing: "0.08em" }}>
            ← → to move · ESC to close
          </div>
        </div>
      </div>
    </ModalPortal>
  );
}

interface DetailModalAction {
  label: string;
  href: string;
}

export interface DetailModalData {
  title: string;
  subtitle?: string;
  body?: string;
  tags?: string[];
  action?: DetailModalAction;
  eyebrow?: string;
}

interface DetailModalProps {
  data: DetailModalData;
  onClose: () => void;
}

export function DetailModal({ data, onClose }: DetailModalProps) {
  // Scene-owned modal, so it handles its own Escape
  useEffect(() => {
    const h = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [onClose]);

  return (
    <ModalPortal>
      <div className="overlay" onClick={onClose}>
        <div className="pcard" onClick={(e) => e.stopPropagation()}>
          <button className="xbtn" onClick={onClose}>
            ×
          </button>
          {data.eyebrow && (
            <div
              style={{
                fontSize: 11,
                letterSpacing: "0.15em",
                opacity: 0.45,
                marginBottom: 6,
              }}
            >
              {data.eyebrow}
            </div>
          )}
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
            {data.title}
          </h2>
          {data.subtitle && (
            <div style={{ fontSize: 13, opacity: 0.75, marginBottom: 10 }}>
              {data.subtitle}
            </div>
          )}
          <div style={{ width: 38, height: 2, background: INK, marginBottom: 18 }} />
          {data.body && (
            <p style={{ fontSize: 14, lineHeight: 1.78, marginBottom: 20 }}>
              {data.body}
            </p>
          )}
          {data.tags && data.tags.length > 0 && (
            <div style={{ marginBottom: data.action ? 20 : 0 }}>
              {data.tags.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
          )}
          {data.action && (
            <a
              href={data.action.href}
              target="_blank"
              rel="noreferrer noopener"
              style={{
                fontFamily: "var(--font-courier-prime), monospace",
                fontSize: 12,
                color: INK,
                letterSpacing: "0.12em",
                textDecoration: "none",
                opacity: 0.7,
              }}
            >
              {data.action.label} →
            </a>
          )}
        </div>
      </div>
    </ModalPortal>
  );
}
