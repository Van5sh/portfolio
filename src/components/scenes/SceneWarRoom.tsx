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
              <p
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: "var(--color-text-primary)",
                  marginBottom: 4,
                }}
              >
                {cert.name}
              </p>
              <p
                style={{
                  fontSize: 11,
                  color: "var(--color-text-secondary)",
                  marginBottom: 8,
                }}
              >
                {cert.issuer}
              </p>
              <span
                style={{
                  fontSize: 10,
                  padding: "2px 7px",
                  borderRadius: 999,
                  background: "var(--color-background-secondary)",
                  border: "0.5px solid var(--color-border-tertiary)",
                  color: "var(--color-text-tertiary)",
                }}
              >
                Click to view
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
          pointerEvents: "auto",
        }}
        viewBox="0 0 1400 315"
        preserveAspectRatio="xMidYMax meet"
      >
        <Whiteboard
          x={60}
          y={20}
          w={380}
          h={210}
          entries={WAR_ROOM_INTERNSHIPS.map((internship) => ({
            id: internship.id,
            text: `2025 ─── ${internship.company} · ${formatInternshipRole(
              internship.role,
            )}`,
          }))}
          onEntryClick={(id) => setActiveInternshipId(id as WarRoomInternshipId)}
          onBoardClick={() => setActiveInternshipId(WAR_ROOM_INTERNSHIPS[0]?.id ?? null)}
        />
        <g style={{ pointerEvents: "none" }}>
          <Desk x={600} y={210} w={700} />
          {/* <MonitorSVG
            x={1090}
            y={115}
            w={195}
            h={125}
            standX={1190}
            standY={310}
            label="Monitor"
            sublabel="Tech Stack"
            blinkDelay="0s"
            onClick={() => {}}
          /> */}
          {/* <Keyboard x={900} y={246} w={270} h={60} /> */}
          <Mug x={840} y={174} scale={0.62} />
          <Plant x={1335} y={229} scale={0.62} />
          <FloorLine />
        </g>
      </svg>
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
