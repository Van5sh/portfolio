import { FlatBook, Plant, Mug, CricketBat, CricketBall } from "../SvgPrimitives";

const INK = "var(--ink)";
const SW = 2.2;


function ServerRack({ x, y, w = 120, h = 240 }: { x: number; y: number; w?: number; h?: number }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <rect x={0} y={0} width={w} height={h} rx={4} fill="none" stroke={INK} strokeWidth={SW} />
      {Array.from({ length: 7 }).map((_, i) => (
        <rect key={i} x={10} y={14 + i * 30} width={w - 20} height={20} rx={2} fill="none" stroke={INK} strokeWidth={1.2} />
      ))}
    </g>
  );
}

function FloorLine({ w = 1400 }: { w?: number }) {
  return (
    <>
      <line x1={0} y1={310} x2={w} y2={310} stroke={INK} strokeWidth={2} />
      <rect x={0} y={308} width={w} height={7} fill={INK} />
    </>
  );
}

const BOOKS_TOP = ["React", "Next.js", "Node.js", "TypeScript"];
const BOOKS_BOT = ["Python", "PostgreSQL", "MongoDB", "Docker"];
const BOOKS_EXTRA = ["AWS", "GraphQL", "Redis"];

export default function SceneTechShelf() {
  const shelfX = 220;
  const shelfW = 700;
  const shelfY = 10;
  const shelfH = 300;
  const midY = shelfY + shelfH / 2 - 5;

  const EDGE = 8;
  const BAR = 8;

  const padding = 20;
  const gap = 10;

  const bw = shelfW / 2 - padding * 2 - gap / 2;
  const bh = 56;

  const col1X = shelfX + padding;
  const col2X = shelfX + padding + bw + gap;

  const topRow1Y = shelfY + padding;
  const topRow2Y = topRow1Y + bh + gap;

  const botRow1Y = midY + padding;
  const botRow2Y = botRow1Y + bh + gap;

  const topBooks = [
    { label: BOOKS_TOP[0], x: col1X, y: topRow1Y },
    { label: BOOKS_TOP[1], x: col1X, y: topRow2Y },
    { label: BOOKS_TOP[2], x: col2X, y: topRow1Y },
    { label: BOOKS_TOP[3], x: col2X, y: topRow2Y },
  ];

  const botBooks = [
    { label: BOOKS_BOT[0], x: col1X, y: botRow1Y },
    { label: BOOKS_BOT[1], x: col1X, y: botRow2Y },
    { label: BOOKS_BOT[2], x: col2X, y: botRow1Y },
    { label: BOOKS_BOT[3], x: col2X, y: botRow2Y },
  ];

  const extraX = shelfX + shelfW + 20;

  return (
    <div className="scene" style={{ position: "relative", width: "100%", paddingBottom: 54 }}>
      <div className="border-2">
        
      </div>
      <svg
        style={{ position: "absolute", bottom: 54, left: 0, width: "100%", overflow: "visible" }}
        viewBox="0 0 1400 315"
        preserveAspectRatio="xMidYMax meet"
      >
        <Plant x={112} y={178} />
        <CricketBat x={1030} y={220} angle={14} />
        <CricketBall x={50} y={280} />
        <ServerRack x={1085} y={74} />
        <Plant x={1140} y={9} scale={0.52} />
        <FloorLine />
      </svg>
    </div>
  );
}