import { Whiteboard, Chair, Mug, MonitorSVG, Keyboard, Plant, FloorLine } from "@/components/SvgPrimitives";

const INK = "var(--ink)";
const SW = 2.2;

export default function SceneWarRoom() {
  return (
    <div className="scene">
      <svg
        style={{ position: "absolute",bottom: 40, left: 0, width: "100%", overflow: "visible" }}
        viewBox="0 0 1400 315"
        preserveAspectRatio="xMidYMax meet"
      >
        <Whiteboard x={60} y={10} w={380} h={210} />
        <MonitorSVG x={1090} y={115} w={195} h={125} standX={1190} standY={310} label="Monitor" sublabel="Tech Stack" blinkDelay="0s" onClick={() => {}} />
        <Keyboard x={890} y={250} w={270} h={60} />
        <Plant x={1335} y={229} scale={0.62} />
        <FloorLine />
      </svg>
    </div>
  );
}
