import { CricketStumps, CricketBat, CricketBall, Plant, FloorLine } from "@/components/SvgPrimitives";

const INK = "var(--ink)";
const SW = 2.2;

export default function SceneCricketCorner() {
  return (
    <div className="scene">
      <div
        style={{
          textAlign: "center",
          zIndex: 10,
          position: "relative",
          maxWidth: 480,
          padding: "0 28px",
          marginBottom: 180,
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-courier-prime), monospace",
            fontSize: 11,
            letterSpacing: "0.15em",
            opacity: 0.45,
            marginBottom: 10,
            textTransform: "uppercase",
            color: INK,
          }}
        >
          off the clock
        </p>
        <p
          style={{
            fontFamily: "var(--font-courier-prime), monospace",
            fontSize: "clamp(16px,2vw,20px)",
            lineHeight: 1.85,
            color: INK,
          }}
        >
          When not shipping features,
          <br />
          you&apos;ll find me at the crease.
        </p>
        <p
          style={{
            fontFamily: "var(--font-courier-prime), monospace",
            fontSize: 13,
            marginTop: 14,
            opacity: 0.55,
            lineHeight: 1.8,
            color: INK,
          }}
        >
          Full-stack by day · Cricket enthusiast by evening
          <br />
          Debugs code and match strategy equally well
        </p>
      </div>
      <svg
        style={{ position: "absolute", bottom: 54, left: 0, width: "100%", overflow: "visible" }}
        viewBox="0 0 1400 315"
        preserveAspectRatio="xMidYMax meet"
      >
        {/* pitch lines */}
        <line x1={480} y1={308} x2={920} y2={308} stroke={INK} strokeWidth={3} />
        <line x1={525} y1={293} x2={525} y2={310} stroke={INK} strokeWidth={2} />
        <line x1={875} y1={293} x2={875} y2={310} stroke={INK} strokeWidth={2} />
        <CricketStumps x={525} y={308} scale={1} />
        <CricketStumps x={875} y={308} scale={1} />
        <CricketBat x={740} y={252} angle={-18} />
        <CricketBall x={960} y={290} r={18} />
        {/* laptop */}
        <rect x={175} y={242} width={155} height={95} rx={4} fill="none" stroke={INK} strokeWidth={SW} />
        <rect x={175} y={337} width={155} height={10} rx={2} fill="none" stroke={INK} strokeWidth={SW} />
        <rect x={184} y={250} width={138} height={80} fill="none" stroke={INK} strokeWidth={1.4} />
        <text x={194} y={274} fill={INK} fontFamily="monospace" fontSize="9">$ git push origin</text>
        <text x={194} y={289} fill={INK} fontFamily="monospace" fontSize="9">  main --force</text>
        <text x={194} y={310} fill={INK} fontFamily="monospace" fontSize="9" opacity={0.5}># brb batting</text>
        {/* pennant */}
        <line x1={1085} y1={148} x2={1085} y2={310} stroke={INK} strokeWidth={SW} />
        <path d="M1085,148 L1195,178 L1085,208 Z" fill="none" stroke={INK} strokeWidth={SW} />
        <text x={1098} y={183} fill={INK} fontFamily="monospace" fontSize="9" letterSpacing=".1em">IND</text>
        {/* scoreboard */}
        <rect x={1180} y={95} width={185} height={130} rx={4} fill="none" stroke={INK} strokeWidth={SW} />
        <text x={1195} y={118} fill={INK} fontFamily="monospace" fontSize="9.5" letterSpacing=".12em">SCOREBOARD</text>
        <line x1={1188} y1={126} x2={1357} y2={126} stroke={INK} strokeWidth={1} />
        <text x={1195} y={145} fill={INK} fontFamily="monospace" fontSize="10">RUNS : 247*</text>
        <text x={1195} y={163} fill={INK} fontFamily="monospace" fontSize="10">WKTS : 3</text>
        <text x={1195} y={181} fill={INK} fontFamily="monospace" fontSize="10">OVR  : 38.4</text>
        <text x={1195} y={205} fill={INK} fontFamily="monospace" fontSize="9" opacity={0.5}>commits: 1,247</text>
        <Plant x={55} y={180} scale={0.78} />
        <FloorLine />
      </svg>
    </div>
  );
}
