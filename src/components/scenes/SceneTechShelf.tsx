import { Book, Plant, CricketBat, ServerRack, FloorLine } from "@/components/SvgPrimitives";

const INK = "#3B0D12";
const SW = 2.2;

const books = ["React", "Next.js", "Node.js", "TypeScript", "Python", "PostgreSQL", "MongoDB", "Docker", "AWS", "GraphQL"];

export default function SceneTechShelf() {
  return (
    <div className="scene">
      <p className="slabel">THE STACK — WHAT I BUILD WITH</p>
      <svg
        style={{ position: "absolute", bottom: 54, left: 0, width: "100%", overflow: "visible" }}
        viewBox="0 0 1400 315"
        preserveAspectRatio="xMidYMax meet"
      >
        {/* Bookcase frame */}
        <rect x={280} y={28} width={520} height={282} fill="none" stroke={INK} strokeWidth={SW} />
        {/* shelves */}
        <rect x={280} y={36} width={520} height={10} fill={INK} />
        <rect x={280} y={172} width={520} height={10} fill={INK} />
        <rect x={280} y={310} width={520} height={10} fill={INK} />
        {/* top row books */}
        {books.slice(0, 5).map((b, i) => (
          <Book key={b} x={295 + i * 96} y={170} h={118} w={78} label={b} />
        ))}
        {/* bottom row books */}
        {books.slice(5, 10).map((b, i) => (
          <Book key={b} x={295 + i * 98} y={308} h={118} w={80} label={b} />
        ))}
        {/* small plant on top shelf */}
        <Plant x={808} y={50} scale={0.48} />
        {/* cricket bat leaning */}
        <CricketBat x={875} y={245} angle={14} />
        {/* server rack */}
        <ServerRack x={1030} y={85} w={118} h={225} />
        {/* side plant */}
        <Plant x={170} y={108} scale={0.78} />
        <FloorLine />
      </svg>
    </div>
  );
}
