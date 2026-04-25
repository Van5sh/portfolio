import { Plant, Mug, Keyboard, Desk, CricketBall, MonitorSVG, Paper } from "@/components/SvgPrimitives";
import type { Project } from "@/lib/data";

const INK = "var(--ink)";
const SW = 2.2;

interface Props {
  projects: Project[];
  onProjectClick: (p: Project) => void;
}

const MONITORS = [
  { x: 148, y: 50, w: 198, h: 136, standX: 247 },
  { x: 392, y: 40, w: 216, h: 150, standX: 500 },
  { x: 670, y: 30, w: 200, h: 140, standX: 770 },
  { x: 924, y: 40, w: 190, h: 134, standX: 1019 },
];

const CABLE_PATHS = ["M247,220 L247,232 L490,232 L490,276 M400,276",
  "M500,220 L500,228 L570,228 L570,274",
  "M770,220 L770,228 L636,228 L636,274",
  "M1019,220 L1019,232 L726,232 L726,274"
];
const BLINK_DELAYS = ["0s", "0.28s", "0.56s", "0.84s"];
const CABLE_DELAYS = ["0s", "-0.25s", "-0.5s", "-0.75s"];
export default function SceneHackstation({ projects, onProjectClick }: Props) {
  const KEYBOARD_X =
    (MONITORS[0].x + MONITORS[3].x + MONITORS[3].w) / 2 - 120;

  return (
    <div className="scene">
      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.15} }
        @keyframes flow  { from{stroke-dashoffset:24} to{stroke-dashoffset:0} }
        .flow-line { stroke-dasharray:6 4; animation: flow 0.7s linear infinite; }
      `}</style>

      <svg
        style={{
          position: "absolute",
          top: "28%",
          left: 0,
          width: "100%",
          overflow: "visible"
        }}
        viewBox="0 0 1400 340"
        preserveAspectRatio="xMidYMax meet"
      >
        <Plant x={20} y={200} />
        <Plant x={1220} y={200} />
        <Desk x={0} y={370} />
        {MONITORS.map((m, i) => (
          <MonitorSVG
            key={i}
            x={m.x}
            y={m.y}
            w={m.w}
            h={m.h}
            standX={m.standX}
            label={projects[i]?.name ?? ""}
            sublabel={projects[i]?.tech[0] ?? ""}
            blinkDelay={BLINK_DELAYS[i]}
            onClick={() => onProjectClick(projects[i])}
          />
        ))}
        {CABLE_PATHS.map((d, i) => (
          <path
            key={i}
            className="flow-line"
            d={d}
            fill="none"
            stroke={INK}
            strokeWidth={1.6}
            opacity={0.55}
            style={{ animationDelay: CABLE_DELAYS[i] }}
          />
        ))}
        <rect
          x={0}
          y={270}
          width={1400}
          height={300}
          fill="none"
          stroke="var(--ink)"
          strokeWidth={2}
        />
        <Paper x={200} y={260} scale={0.8} />
        <Mug x={1080} y={280} scale={0.72} />
        <Keyboard x={KEYBOARD_X} y={278} />
      </svg >
    </div >
  );
}