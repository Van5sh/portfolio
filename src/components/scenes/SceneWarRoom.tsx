"use client";

import { useState } from "react";

import {
  WAR_ROOM_CERTS,
  WAR_ROOM_INTERNSHIPS,
  WAR_ROOM_INTERNSHIP_MODAL_DATA,
  type WarRoomInternshipId,
} from "@/lib/data";

import {
  Whiteboard,
  Desk,
  Chair,
  Mug,
  MonitorSVG,
  Keyboard,
  Plant,
  FloorLine,
} from "@/components/SvgPrimitives";

import { DetailModal } from "@/components/Modals";

function formatInternshipRole(role: string) {
  if (role === "Software Development Engineer Intern") return "SDE Intern";
  if (role === "App Developer Intern") return "App Dev Intern";
  return role;
}

export default function SceneWarRoom() {
  const [activeInternshipId, setActiveInternshipId] =
    useState<WarRoomInternshipId | null>(null);
  const [activeCertId, setActiveCertId] = useState<string | null>(null);

  const activeInternship = activeInternshipId
    ? WAR_ROOM_INTERNSHIP_MODAL_DATA[activeInternshipId] ?? null
    : null;

  const activeCert = activeCertId
    ? WAR_ROOM_CERTS.find((c) => c.id === activeCertId) ?? null
    : null;

  return (
    <div className="scene">
      {/* ---------------- CERTIFICATES ---------------- */}
      <div
        className="exp-certs-root"
        style={{
          position: "absolute",
          right: 70,
          top: 70,
          width: 420,
          zIndex: 5,
          pointerEvents: "auto",
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        }}
      >
        <p
          style={{
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--color-text-tertiary)",
            marginBottom: 10,
            marginLeft: 10,
          }}
        >
          Certificates on the wall
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {WAR_ROOM_CERTS.map((cert, idx) => (
            <button
              key={cert.id}
              type="button"
              onClick={() => {
                if (cert.url) {
                  window.open(cert.url, "_blank", "noopener,noreferrer");
                }
              }}
              style={{
                cursor: "pointer",
                textAlign: "left",
                background: "var(--color-background-primary)",
                border: "0.5px solid var(--color-border-tertiary)",
                borderRadius: 12,
                padding: "0.85rem 0.9rem",
                boxShadow: "0 16px 30px rgb(var(--ink-rgb) / 0.10)",
                transform: `rotate(${idx % 2 === 0 ? -1.2 : 1.1}deg)`,
              }}
            >
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 999,
                  background: "var(--accent)",
                  border: "2px solid var(--color-border-secondary)",
                  boxShadow: "0 6px 10px rgb(var(--ink-rgb) / 0.18)",
                  marginBottom: 10,
                }}
              />
              <p style={{ fontSize: 12, fontWeight: 600 }}>{cert.name}</p>
              <p style={{ fontSize: 11, color: "var(--color-text-secondary)" }}>
                {cert.issuer}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* ---------------- INTERNSHIP TABLE ---------------- */}
      <div
        style={{
          position: "absolute",
          left: 70,
          top: 60,
          width: 420,
          zIndex: 5,
          background: "var(--color-background-primary)",
          border: "1px solid var(--color-border-tertiary)",
          borderRadius: 14,
          padding: "14px",
          boxShadow: "0 20px 40px rgba(0,0,0,0.05)",
          pointerEvents: "auto",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "70px 1fr 120px",
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--color-text-tertiary)",
            marginBottom: 8,
            padding: "0 8px",
          }}
        >
          <span>Year</span>
          <span>Company</span>
          <span style={{ textAlign: "right" }}>Role</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {WAR_ROOM_INTERNSHIPS.map((internship, i) => (
            <button
              key={internship.id}
              onClick={() => setActiveInternshipId(internship.id)}
              style={{
                display: "grid",
                gridTemplateColumns: "70px 1fr 120px",
                alignItems: "center",
                padding: "10px",
                borderRadius: 10,
                cursor: "pointer",
                background:
                  i % 2 === 0
                    ? "rgba(150,194,219,0.06)"
                    : "transparent",
                border: "1px solid rgba(150,194,219,0.15)",
                transition: "all 0.15s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(150,194,219,0.15)";
                e.currentTarget.style.transform = "translateX(4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background =
                  i % 2 === 0
                    ? "rgba(150,194,219,0.06)"
                    : "transparent";
                e.currentTarget.style.transform = "none";
              }}
            >
              <span style={{ fontSize: 11, fontWeight: 600 }}>
                2025
              </span>

              <span style={{ fontSize: 13, fontWeight: 600 }}>
                {internship.company}
              </span>

              <span
                style={{
                  fontSize: 11,
                  textAlign: "right",
                  color: "var(--color-text-secondary)",
                }}
              >
                {formatInternshipRole(internship.role)}
              </span>
            </button>
          ))}
        </div>
      </div>
      <svg
        style={{
          position: "absolute",
          bottom: 40,
          left: 0,
          width: "100%",
          overflow: "visible",
          zIndex: 1,
        }}
        viewBox="0 0 1400 315"
        preserveAspectRatio="xMidYMax meet"
      >
        <g style={{ pointerEvents: "none" }}>
          <Desk x={600} y={210} w={700} />
          <Mug x={840} y={174} scale={0.62} />
          <Plant x={1335} y={229} scale={0.62} />
          <FloorLine />
        </g>
      </svg>

      {/* ---------------- MODAL ---------------- */}
      {activeInternship && (
        <DetailModal
          data={{
            eyebrow: "INTERNSHIP",
            title: activeInternship.title,
            subtitle: activeInternship.sub,
            body: activeInternship.body,
            tags: activeInternship.tags,
          }}
          onClose={() => setActiveInternshipId(null)}
        />
      )}
    </div>
  );
}