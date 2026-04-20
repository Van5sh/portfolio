import { Plant, FloorLine } from "@/components/SvgPrimitives";

const INK = "#3B0D12";
const BG = "#F7F2E3";
const SW = 2.2;

export default function SceneSideQuests() {
  return (
    <div className="scene">
      <p className="slabel">SIDE QUESTS — OPEN SOURCE &amp; EXPERIMENTS</p>
      <svg
        style={{ position: "absolute", bottom: 54, left: 0, width: "100%", overflow: "visible" }}
        viewBox="0 0 1400 315"
        preserveAspectRatio="xMidYMax meet"
      >
        {[175, 355, 535].map((cx, i) => (
          <g key={i}>
            <rect x={cx} y={75} width={145} height={235} rx={4} fill="none" stroke={INK} strokeWidth={SW} />
            {[0, 1, 2, 3].map(d => (
              <g key={d}>
                <rect x={cx + 10} y={86 + d * 56} width={125} height={44} rx={3}
                  fill="none" stroke={INK} strokeWidth={1.5} />
                <circle cx={cx + 72} cy={86 + d * 56 + 22} r={5} fill="none" stroke={INK} strokeWidth={1.5} />
                <line x1={cx + 68} y1={86 + d * 56 + 22} x2={cx + 76} y2={86 + d * 56 + 22}
                  stroke={INK} strokeWidth={1.5} />
              </g>
            ))}
            <text x={cx + 72} y={328} textAnchor="middle" fill={INK} fontFamily="monospace" fontSize="9" opacity={0.5}>
              {["Experiments", "Side Projects", "Open Source"][i]}
            </text>
          </g>
        ))}
        {/* chalkboard */}
        <rect x={780} y={55} width={265} height={185} rx={4} fill={INK} />
        <rect x={793} y={67} width={240} height={161} rx={2} fill="none" stroke={BG} strokeWidth={1} opacity={0.25} />
        <text x={912} y={95} textAnchor="middle" fill={BG} fontFamily="monospace" fontSize="11"
          letterSpacing=".1em" opacity={0.9}>IDEAS THAT</text>
        <text x={912} y={114} textAnchor="middle" fill={BG} fontFamily="monospace" fontSize="11"
          letterSpacing=".1em" opacity={0.9}>DIDN&apos;T MAKE</text>
        <text x={912} y={133} textAnchor="middle" fill={BG} fontFamily="monospace" fontSize="11"
          letterSpacing=".1em" opacity={0.9}>IT TO PROD</text>
        <text x={912} y={165} textAnchor="middle" fill={BG} fontFamily="monospace" fontSize="9"
          opacity={0.55}>(but were fun anyway)</text>
        <line x1={800} y1={240} x2={778} y2={310} stroke={INK} strokeWidth={SW} />
        <line x1={1035} y1={240} x2={1057} y2={310} stroke={INK} strokeWidth={SW} />
        <Plant x={1195} y={182} scale={0.82} />
        <FloorLine />
      </svg>
    </div>
  );
}
