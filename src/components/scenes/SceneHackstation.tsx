import { Monitor, Keyboard, Mug, Plant, CricketBall } from "@/components/SvgPrimitives";
import { Project } from "@/lib/data";

const INK = "var(--ink)";
const SW = 2.2;

interface Props {
  projects: Project[];
  onProjectClick: (p: Project) => void;
}

export default function SceneHackstation({ projects, onProjectClick }: Props) {
  return (
    <div className="scene">
      <p className="slabel">● EACH SCREEN IS A PROJECT. CLICK TO RUN.</p>
      <svg
        style={{ position: "absolute", bottom: 54, left: 0, width: "100%", overflow: "visible" }}
        viewBox="0 0 1400 315"
        preserveAspectRatio="xMidYMax meet"
      >
        {/* <Desk x={0} y={218} w={1400} /> */}
        <Plant x={42} y={88} scale={0.85} />
        <Monitor x={175} y={72} w={210} h={132}
          label={projects[0].name} sublabel={projects[0].tech[0]}
          onClick={() => onProjectClick(projects[0])} />
        <Monitor x={435} y={62} w={228} h={142}
          label={projects[1].name} sublabel={projects[1].tech[0]}
          onClick={() => onProjectClick(projects[1])} />
        <Monitor x={715} y={72} w={210} h={132}
          label={projects[2].name} sublabel={projects[2].tech[0]}
          onClick={() => onProjectClick(projects[2])} />
        <Monitor x={985} y={78} w={198} h={126}
          label={projects[3].name} sublabel={projects[3].tech[0]}
          onClick={() => onProjectClick(projects[3])} />
        <Keyboard x={488} y={208} w={210} h={54} />
        <Mug x={1218} y={160} scale={0.68} />
        <CricketBall x={1335} y={213} r={14} />
        <g transform="translate(1128,76)">
          <line x1={0} y1={0} x2={0} y2={140} stroke={INK} strokeWidth={SW} />
          <path d="M-30,0 Q0,-12 30,0" fill="none" stroke={INK} strokeWidth={SW} />
          <path d="M-28,0 L-36,26 Q0,32 36,26 L28,0 Z" fill="none" stroke={INK} strokeWidth={SW} />
          <line x1={-22} y1={140} x2={22} y2={140} stroke={INK} strokeWidth={SW} />
        </g>
        {/* rubber duck */}
        <g transform="translate(902,210)">
          <ellipse cx={0} cy={10} rx={14} ry={9} fill="none" stroke={INK} strokeWidth={SW} />
          <circle cx={0} cy={0} r={9} fill="none" stroke={INK} strokeWidth={SW} />
          <path d="M7,-2 Q14,-6 16,1" fill="none" stroke={INK} strokeWidth={1.8} strokeLinecap="round" />
          <circle cx={4} cy={-2} r={1.5} fill={INK} />
        </g>
      </svg>
    </div>
  );
}
