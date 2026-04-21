const INK = "var(--ink)";
const BG = "var(--bg)";
const SW = 2.2;

export function Cloud({ x = 0, y = 0, scale = 1 }: { x?: number; y?: number; scale?: number }) {
  return (
    <g transform={`translate(${x},${y}) scale(${scale})`}>
      <path
        d="M5,38 C5,38 12,38 18,30 C22,23 30,20 42,24 C46,12 60,7 76,14 C82,5 100,2 112,12 C122,4 140,10 138,22 C150,17 165,24 162,36 C162,38 158,40 154,40 L8,40 Z"
        fill="none"
        stroke={INK}
        strokeWidth={SW}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
}

export function Paper({ x, y, scale = 1 }: { x?: number; y?: number; scale?: number }) {
  const s = scale;
  return (
    <g transform={`translate(${x},${y}) scale(${s})`}>
      {/* Body with top-right dog-ear */}
      <path
        d="M0,0 L52,0 L62,10 L62,82 L0,82 Z"
        fill={BG}
        stroke={INK}
        strokeWidth={SW}
        strokeLinejoin="round"
      />
      {/* Dog-ear fold triangle */}
      <path
        d="M52,0 L52,10 L62,10"
        fill="none"
        stroke={INK}
        strokeWidth={SW}
        strokeLinejoin="round"
      />
      {/* Ruled lines */}
      {[20, 30, 40, 50, 60, 70].map((ly) => (
        <line
          key={ly}
          x1={8}
          y1={ly}
          x2={54}
          y2={ly}
          stroke={INK}
          strokeWidth={1.1}
          opacity={0.45}
        />
      ))}
    </g>
  );
}

export function Desk({ x = 0, y = 0, w = 1400 }: { x?: number; y?: number; w?: number }) {
  const n = Math.floor(w / 30);
  return (
    <g>
      <rect x={x} y={y} width={w} height={16} fill={INK} />
      <rect x={x} y={y + 16} width={w} height={82} fill="none" stroke={INK} strokeWidth={SW} />
      {Array.from({ length: n }).map((_, i) => (
        <line
          key={i}
          x1={x + i * 30 + 15}
          y1={y + 16}
          x2={x + i * 30 + 15}
          y2={y + 98}
          stroke={INK}
          strokeWidth={1.3}
        />
      ))}
    </g>
  );
}

export function MonitorSVG({
  x, y, w, h, standX, label, sublabel, blinkDelay, onClick,
}: {
  x: number; y: number; w: number; h: number; standX: number;
  label: string; sublabel: string; blinkDelay: string;
  onClick: () => void;
}) {
  const cx = x + w / 2;
  return (
    <g onClick={onClick} style={{ cursor: "pointer" }}>
      <rect x={x} y={y} width={w} height={h} rx={4} fill="var(--bg,#fff)" stroke={INK} strokeWidth={SW} />
      <rect x={x} y={y} width={w} height={26} rx={4} fill="none" stroke={INK} strokeWidth={SW} />
      <line x1={x} y1={y + 26} x2={x + w} y2={y + 26} stroke={INK} strokeWidth={SW} />
      <circle cx={x + 14} cy={y + 13} r={4} fill="none" stroke={INK} strokeWidth={1.6} />
      <circle cx={x + 27} cy={y + 13} r={4} fill="none" stroke={INK} strokeWidth={1.6} />
      <circle cx={x + 40} cy={y + 13} r={4} fill="none" stroke={INK} strokeWidth={1.6} />
      <line x1={x + 15} y1={y + 40} x2={x + w - 15} y2={y + 40} stroke={INK} strokeWidth={2} />
      <line x1={x + 15} y1={y + 51} x2={x + w * 0.62} y2={y + 51} stroke={INK} strokeWidth={2} />
      <line x1={x + 15} y1={y + 62} x2={x + w * 0.82} y2={y + 62} stroke={INK} strokeWidth={2} />
      <line x1={x + 15} y1={y + 73} x2={x + w * 0.52} y2={y + 73} stroke={INK} strokeWidth={2} />
      <text x={cx} y={y + h - 22} textAnchor="middle" fill={INK}
        fontFamily="monospace" fontSize={11} fontWeight="bold" letterSpacing=".05em">
        {label}
      </text>
      <text x={cx} y={y + h - 8} textAnchor="middle" fill={INK}
        fontFamily="monospace" fontSize={9} opacity={0.55}>
        {sublabel}
      </text>
      <line x1={standX} y1={y + h} x2={standX} y2={220} stroke={INK} strokeWidth={SW} />
      <line x1={standX - 28} y1={220} x2={standX + 28} y2={220} stroke={INK} strokeWidth={SW} />
      <circle cx={standX} cy={y} r={4.5} fill={INK}
        style={{ animation: `blink 1.1s ease-in-out infinite ${blinkDelay}` }} />
    </g>
  );
}

export function Keyboard({ x, y, w = 220, h = 60 }: { x: number; y: number; w?: number; h?: number }) {
  return (
    <g transform="translate(478,252)">
      <rect x={0} y={-4} width={248} height={68} rx={8} fill="none" stroke={INK} strokeWidth={SW} />
      {[4, 20, 36].map(rowY =>
        Array.from({ length: rowY === 36 ? 9 : 12 }).map((_, col) => (
          <rect key={`${rowY}-${col}`}
            x={9 + col * 20} y={rowY} width={17} height={13} rx={2}
            fill="none" stroke={INK} strokeWidth={1.2} />
        ))
      )}
      <rect x={59} y={52} width={128} height={10} rx={2} fill="none" stroke={INK} strokeWidth={1.2} />
    </g>
  );
}

export function Mug({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  const s = scale;
  return (
    <g transform={`translate(${x},${y})`}>
      <rect x={0} y={8 * s} width={45 * s} height={50 * s} rx={4 * s} fill="none" stroke={INK} strokeWidth={SW} />
      <ellipse cx={22.5 * s} cy={8 * s} rx={22.5 * s} ry={6 * s} fill="none" stroke={INK} strokeWidth={SW} />
      <path d={`M${45 * s},${20 * s} Q${65 * s},${20 * s} ${65 * s},${38 * s} Q${65 * s},${55 * s} ${45 * s},${55 * s}`}
        fill="none" stroke={INK} strokeWidth={SW} />
      <path d={`M${12 * s},${2 * s} Q${16 * s},${-6 * s} ${12 * s},${-14 * s}`}
        fill="none" stroke={INK} strokeWidth={1.6} strokeLinecap="round" />
      <path d={`M${22 * s},0 Q${27 * s},${-8 * s} ${22 * s},${-17 * s}`}
        fill="none" stroke={INK} strokeWidth={1.6} strokeLinecap="round" />
    </g>
  );
}

export function Plant({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  const s = scale;
  return (
    <g transform={`translate(${x},${y})`}>
      <path d={`M${8 * s},${85 * s} L${2 * s},${130 * s} L${58 * s},${130 * s} L${52 * s},${85 * s} Z`}
        fill="none" stroke={INK} strokeWidth={SW} />
      <rect x={2 * s} y={80 * s} width={56 * s} height={10 * s} rx={3} fill="none" stroke={INK} strokeWidth={SW} />
      <line x1={30 * s} y1={80 * s} x2={30 * s} y2={22 * s} stroke={INK} strokeWidth={SW} />
      <path d={`M${30 * s},${55 * s} Q${-5 * s},${40 * s} ${-18 * s},${18 * s} Q${12 * s},${28 * s} ${30 * s},${55 * s}`}
        fill={INK} />
      <path d={`M${30 * s},${40 * s} Q${70 * s},${25 * s} ${80 * s},${5 * s} Q${50 * s},${12 * s} ${30 * s},${40 * s}`}
        fill={INK} />
      <path d={`M${30 * s},${25 * s} Q${5 * s},${8 * s} 0,${-18 * s} Q${22 * s},${-2 * s} ${30 * s},${25 * s}`}
        fill={INK} />
      <path d={`M${30 * s},${30 * s} Q${58 * s},${18 * s} ${60 * s},${-5 * s} Q${38 * s},${8 * s} ${30 * s},${30 * s}`}
        fill={INK} />
    </g>
  );
}

export function CricketBat({ x, y, angle = -12 }: { x: number; y: number; angle?: number }) {
  return (
    <g transform={`translate(${x},${y}) rotate(${angle})`}>
      <rect x={-7} y={-130} width={14} height={65} rx={5} fill="none" stroke={INK} strokeWidth={SW} />
      {[-120, -108, -96, -84, -72].map(gy => (
        <line key={gy} x1={-7} y1={gy} x2={7} y2={gy} stroke={INK} strokeWidth={1.4} />
      ))}
      <path d="M-20,-65 L-22,65 Q-22,85 0,88 Q22,85 22,65 L20,-65 Z" fill="none" stroke={INK} strokeWidth={SW} />
      <line x1={0} y1={-60} x2={0} y2={75} stroke={INK} strokeWidth={3} strokeLinecap="round" />
    </g>
  );
}

export function CricketBall({ x, y, r = 22 }: { x: number; y: number; r?: number }) {
  return (
    <g transform="translate(1290,220)">
          <circle cx={0} cy={0} r={16} fill="none" stroke={INK} strokeWidth={SW} />
          <path d="M-16,0 Q-8,-8 0,0 Q8,8 16,0" fill="none" stroke={INK} strokeWidth={1.6} />
          <path d="M-16,0 Q-8,8 0,0 Q8,-8 16,0" fill="none" stroke={INK} strokeWidth={1.6} />
          <circle cx={-5} cy={-2} r={1.2} fill={INK} />
          <circle cx={0} cy={2} r={1.2} fill={INK} />
          <circle cx={5} cy={-2} r={1.2} fill={INK} />
        </g>
  );
}

export function CricketStumps({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  const s = scale;
  return (
    <g transform={`translate(${x},${y})`}>
      {[-18 * s, 0, 18 * s].map((sx, i) => (
        <line key={i} x1={sx} y1={0} x2={sx} y2={-90 * s} stroke={INK} strokeWidth={SW} strokeLinecap="round" />
      ))}
      <line x1={-24 * s} y1={-90 * s} x2={-4 * s} y2={-93 * s} stroke={INK} strokeWidth={2} strokeLinecap="round" />
      <line x1={4 * s} y1={-93 * s} x2={24 * s} y2={-90 * s} stroke={INK} strokeWidth={2} strokeLinecap="round" />
    </g>
  );
}

export function Chair({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <rect x={-40} y={-40} width={80} height={12} rx={3} fill="none" stroke={INK} strokeWidth={SW} />
      <rect x={-35} y={-100} width={70} height={55} rx={3} fill="none" stroke={INK} strokeWidth={SW} />
      <line x1={-35} y1={-28} x2={-25} y2={60} stroke={INK} strokeWidth={SW} />
      <line x1={-25} y1={-28} x2={-35} y2={60} stroke={INK} strokeWidth={SW} />
      <line x1={25} y1={-28} x2={35} y2={60} stroke={INK} strokeWidth={SW} />
      <line x1={35} y1={-28} x2={25} y2={60} stroke={INK} strokeWidth={SW} />
      <line x1={-35} y1={60} x2={35} y2={60} stroke={INK} strokeWidth={SW} />
    </g>
  );
}

export function Whiteboard({ x, y, w = 360, h = 200 }: { x: number; y: number; w?: number; h?: number }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={4} fill="none" stroke={INK} strokeWidth={SW} />
      <line x1={x + 10} y1={y + 40} x2={x + w - 10} y2={y + 40} stroke={INK} strokeWidth={1} strokeDasharray="3,3" />
      <line x1={x + 10} y1={y + 80} x2={x + w - 10} y2={y + 80} stroke={INK} strokeWidth={1} strokeDasharray="3,3" />
      <line x1={x + 10} y1={y + 120} x2={x + w - 10} y2={y + 120} stroke={INK} strokeWidth={1} strokeDasharray="3,3" />
      <line x1={x + 10} y1={y + 160} x2={x + w - 10} y2={y + 160} stroke={INK} strokeWidth={1} strokeDasharray="3,3" />
      <text x={x + 14} y={y + 26} fill={INK} fontFamily="monospace" fontSize="10">2022 ─── TechCorp Intern</text>
      <text x={x + 14} y={y + 66} fill={INK} fontFamily="monospace" fontSize="10">2023 ─── Freelance Full Stack</text>
      <text x={x + 14} y={y + 106} fill={INK} fontFamily="monospace" fontSize="10">2024 ─── Full Stack @ DevHouse</text>
      <text x={x + 14} y={y + 146} fill={INK} fontFamily="monospace" fontSize="10">2025 ─── Senior Dev @ StackLabs</text>
      <line x1={x + 14} y1={y + 175} x2={x + 14} y2={y + 195} stroke={INK} strokeWidth={2} strokeLinecap="round" />
      <path d={`M${x + 8},${y + 188} L${x + 14},${y + 198} L${x + 20},${y + 188}`}
        fill="none" stroke={INK} strokeWidth={2} strokeLinecap="round" />
      <line x1={x + 30} y1={y + h} x2={x + 10} y2={y + h + 80} stroke={INK} strokeWidth={SW} />
      <line x1={x + w - 30} y1={y + h} x2={x + w - 10} y2={y + h + 80} stroke={INK} strokeWidth={SW} />
      <line x1={x} y1={y + h + 80} x2={x + w} y2={y + h + 80} stroke={INK} strokeWidth={SW} />
    </g>
  );
}

export function Book({ x, y, h = 80, w = 28, label = "" }: {
  x: number; y: number; h?: number; w?: number; label?: string;
}) {
  return (
    <g>
      <rect x={x} y={y - h} width={w} height={h} rx={2} fill="none" stroke={INK} strokeWidth={SW} />
      <text
        x={x + w / 2} y={y - h / 2} textAnchor="middle" fill={INK}
        fontFamily="monospace" fontSize="7"
        transform={`rotate(-90,${x + w / 2},${y - h / 2})`} letterSpacing=".05em"
      >
        {label}
      </text>
    </g>
  );
}

export function ServerRack({ x, y, w = 110, h = 220 }: { x: number; y: number; w?: number; h?: number }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={4} fill="none" stroke={INK} strokeWidth={SW} />
      <rect x={x + 4} y={y + 4} width={w - 8} height={h - 8} rx={2} fill="none" stroke={INK} strokeWidth={1.2} />
      {Array.from({ length: 7 }).map((_, i) => (
        <g key={i}>
          <rect x={x + 10} y={y + 14 + i * 28} width={w - 20} height={18} rx={2}
            fill="none" stroke={INK} strokeWidth={1.4} />
          <circle cx={x + 20} cy={y + 23 + i * 28} r={3} fill="none" stroke={INK} strokeWidth={1.4} />
          <circle cx={x + 30} cy={y + 23 + i * 28} r={3} fill="none" stroke={INK} strokeWidth={1.4} />
          <rect x={x + 42} y={y + 19 + i * 28} width={w - 55} height={8} rx={1}
            fill="none" stroke={INK} strokeWidth={1.2} />
        </g>
      ))}
    </g>
  );
}

export function FloorLine({ w = 1400 }: { w?: number }) {
  return <line x1={0} y1={310} x2={w} y2={310} stroke={INK} strokeWidth={2} />;
}
