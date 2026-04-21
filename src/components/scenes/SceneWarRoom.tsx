import { Whiteboard, Chair, Mug, MonitorSVG, Keyboard, Plant, FloorLine } from "@/components/SvgPrimitives";

const INK = "var(--ink)";
const SW = 2.2;

export default function SceneWarRoom() {
  return (
    <div className="scene">
      <p className="slabel">THE WAR ROOM — EXPERIENCE</p>
      <svg
        style={{ position: "absolute", bottom: 54, left: 0, width: "100%", overflow: "visible" }}
        viewBox="0 0 1400 315"
        preserveAspectRatio="xMidYMax meet"
      >
        <Whiteboard x={360} y={28} w={380} h={210} />
        {/* post-its */}
        <rect x={800} y={70} width={105} height={95} fill="none" stroke={INK} strokeWidth={SW} />
        <text x={813} y={95} fill={INK} fontFamily="monospace" fontSize="9.5">ship it</text>
        <text x={813} y={112} fill={INK} fontFamily="monospace" fontSize="9.5">fast.</text>
        <text x={813} y={136} fill={INK} fontFamily="monospace" fontSize="9.5">debug.</text>
        <text x={813} y={153} fill={INK} fontFamily="monospace" fontSize="9.5">repeat.</text>
        <rect x={960} y={48} width={95} height={85} fill="none" stroke={INK} strokeWidth={SW} />
        <text x={972} y={72} fill={INK} fontFamily="monospace" fontSize="9.5">always</text>
        <text x={972} y={89} fill={INK} fontFamily="monospace" fontSize="9.5">be</text>
        <text x={972} y={106} fill={INK} fontFamily="monospace" fontSize="9.5">learning</text>
        <Chair x={570} y={298} />
        {/* side desk */}
        <rect x={155} y={200} width={180} height={12} fill={INK} />
        <line x1={170} y1={212} x2={155} y2={310} stroke={INK} strokeWidth={SW} />
        <line x1={320} y1={212} x2={335} y2={310} stroke={INK} strokeWidth={SW} />
        <Mug x={198} y={162} scale={0.62} />
        <MonitorSVG x={1090} y={115} w={195} h={125} standX={1190} label="Monitor" sublabel="Tech Stack" blinkDelay="0s" onClick={() => {}} />
        <Keyboard x={1082} y={202} w={212} h={50} />
        <Plant x={1335} y={185} scale={0.62} />
        <FloorLine />
      </svg>
    </div>
  );
}
