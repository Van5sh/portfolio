import { FlatBook, Plant, CricketBat, CricketBall } from "../SvgPrimitives";

const INK = "var(--ink)";
const SW = 2.2;

function ServerRack({ x, y, w = 120, h = 240 }: { x: number; y: number; w?: number; h?: number }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <rect x={0} y={0} width={w} height={h} rx={6} fill="none" stroke={INK} strokeWidth={SW} />
      {Array.from({ length: 7 }).map((_, i) => (
        <rect
          key={i}
          x={10}
          y={14 + i * 30}
          width={w - 20}
          height={20}
          rx={3}
          fill="none"
          stroke={INK}
          strokeWidth={1.2}
          opacity={0.6}
        />
      ))}
    </g>
  );
}

function FloorLine({ w = 1400 }: { w?: number }) {
  return (
    <>
      <line x1={0} y1={310} x2={w} y2={310} stroke={INK} strokeWidth={2} />
      <rect x={0} y={308} width={w} height={7} fill={INK} opacity={0.7} />
    </>
  );
}

const SECTIONS: Array<{ id: string; label: string; items: string[] }> = [
  {
    id: "languages",
    label: "Languages",
    items: ["C", "C++", "Kotlin", "Java", "Python", "JavaScript", "TypeScript", "SQL", "Go"],
  },
  {
    id: "frameworks",
    label: "Frameworks",
    items: ["React Native", "Next.js", "React.js", "NestJS", "Node.js", "Express.js", "FastAPI", "GoFiber"],
  },
  {
    id: "databases",
    label: "Databases",
    items: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    id: "devops",
    label: "DevOps & Cloud",
    items: ["Git", "GitHub", "Docker", "AWS S3", "AWS SES", "AWS EC2", "Firebase", "Ansible", "CI/CD", "GitHub Actions", "OpenCV"],
  },
];

export default function SceneTechShelf() {
  return (
    <div
      className="scene tech-shelf-root"
      style={{
        position: "relative",
        width: "100%",
        ["--tech-shelf-sw" as never]: `${SW}px`,
      }}
    >
      <div className="tech-shelf-wrap">
        <div className="tech-shelf-sections">
          {SECTIONS.map((section) => (
            <div key={section.id} className="tech-shelf-section">
              <div className={`tech-shelf-tag${section.id === "languages" ? " tech-shelf-tag--languages" : ""}`}>
                {section.label}
              </div>
              <div className="tech-shelf-books" aria-label={section.label}>
                {section.items.map((label) => (
                  <div key={label} className="tech-shelf-item" tabIndex={0} role="button" aria-label={label}>
                    <svg
                      width={112}
                      height={48}
                      viewBox="0 0 112 48"
                      style={{ display: "block" }}
                      aria-label={label}
                      role="img"
                    >
                      <FlatBook x={0} y={0} w={112} h={48} label={label} fontSize={11} />
                    </svg>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <svg
        style={{
          position: "absolute",
          bottom: 54,
          left: 0,
          width: "100%",
          overflow: "visible",
        }}
        viewBox="0 0 1400 315"
        preserveAspectRatio="xMidYMax meet"
      >
        <Plant x={112} y={178} />
        <CricketBat x={1030} y={220} angle={14} />
        <CricketBall x={50} y={280} />
        <ServerRack x={1085} y={74} />
        <Plant x={1140} y={7} scale={0.52} />
        <FloorLine />
      </svg>
    </div>
  );
}
