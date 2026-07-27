// import { FlatBook, Plant, CricketBat, CricketBall } from "../SvgPrimitives";

// const INK = "var(--ink)";
// const SW = 2.2;

// function ServerRack({
//   x,
//   y,
//   w = 120,
//   h = 240,
// }: {
//   x: number;
//   y: number;
//   w?: number;
//   h?: number;
// }) {
//   return (
//     <g transform={`translate(${x},${y})`}>
//       <rect
//         x={0}
//         y={0}
//         width={w}
//         height={h}
//         rx={6}
//         fill="none"
//         stroke={INK}
//         strokeWidth={SW}
//       />

//       {Array.from({ length: 7 }).map((_, i) => (
//         <rect
//           key={i}
//           x={`${8}%`}
//           y={`${6 + i * 12}%`}
//           width={`${84}%`}
//           height={`${8}%`}
//           rx={3}
//           fill="none"
//           stroke={INK}
//           strokeWidth={1.2}
//           opacity={0.6}
//         />
//       ))}
//     </g>
//   );
// }

// function FloorLine() {
//   return (
//     <>
//       <line
//         x1="0%"
//         y1="98%"
//         x2="100%"
//         y2="98%"
//         stroke={INK}
//         strokeWidth={2}
//       />

//       <rect
//         x="0%"
//         y="97%"
//         width="100%"
//         height="3%"
//         fill={INK}
//         opacity={0.7}
//       />
//     </>
//   );
// }

// const SECTIONS: Array<{
//   id: string;
//   label: string;
//   items: string[];
// }> = [
//     {
//       id: "languages",
//       label: "Languages",
//       items: [
//         "C",
//         "C++",
//         "Kotlin",
//         "Java",
//         "Python",
//         "JavaScript",
//         "TypeScript",
//         "SQL",
//         "Go",
//       ],
//     },
//     {
//       id: "frameworks",
//       label: "Frameworks",
//       items: [
//         "React Native",
//         "Next.js",
//         "React.js",
//         "NestJS",
//         "Node.js",
//         "Express.js",
//         "FastAPI",
//         "GoFiber",
//       ],
//     },
//     {
//       id: "databases",
//       label: "Databases",
//       items: ["MongoDB", "MySQL", "PostgreSQL"],
//     },
//     {
//       id: "devops",
//       label: "DevOps & Cloud",
//       items: [
//         "Git",
//         "GitHub",
//         "Docker",
//         "AWS S3",
//         "AWS SES",
//         "AWS EC2",
//         "Firebase",
//         "Ansible",
//         "CI/CD",
//         "GitHub Actions",
//         "OpenCV",
//       ],
//     },
//   ];

// export default function SceneTechShelf() {
//   return (
//     <div
//       className="relative w-full overflow-hidden"
//       style={{
//         ["--tech-shelf-sw" as never]: `${SW}px`,
//       }}
//     >
//       <div className="relative z-10 w-full max-w-7xl px-4 mx-auto pt-[6%] md:pt-[8%] lg:pt-[10%]">
//         <div
//           className="
//             grid gap-[2%]
//             grid-cols-1
//             sm:grid-cols-1
//             md:grid-cols-2
//             xl:grid-cols-3
//           "
//         >
//           {SECTIONS.map((section) => (
//             <div key={section.id} className="w-full h-full">
//               <div
//                 className="
//                   inline-flex items-center justify-center
//                   rounded-md border border-[var(--ink)]
//                   px-[3%] py-[1%]
//                   mb-[3%]
//                   text-sm font-medium
//                 "
//               >
//                 {section.label}
//               </div>

//               <div
//                 aria-label={section.label}
//                 className="
//                   grid gap-[3%]
//                   grid-cols-2
//                   sm:grid-cols-3
//                   md:grid-cols-2
//                   lg:grid-cols-3
//                   xl:grid-cols-4
//                 "
//               >
//                 {section.items.map((label) => (
//                   <div
//                     key={label}
//                     tabIndex={0}
//                     role="button"
//                     aria-label={label}
//                     className="
//                       w-full
//                       aspect-[112/48]
//                       cursor-pointer
//                       transition-all duration-200
//                       hover:-translate-y-[4%]
//                       focus-visible:outline
//                       focus-visible:outline-2
//                       focus-visible:outline-offset-2
//                       focus-visible:outline-[var(--ink)]
//                       rounded
//                     "
//                   >
//                     <svg
//                       width="100%"
//                       height="100%"
//                       viewBox="0 0 112 48"
//                       preserveAspectRatio="none"
//                       className="block"
//                       aria-label={label}
//                       role="img"
//                     >
//                       <FlatBook
//                         x={0}
//                         y={0}
//                         w={112}
//                         h={48}
//                         label={label}
//                         fontSize={11}
//                       />
//                     </svg>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <svg
//         className="
//           absolute left-0 bottom-0
//           w-full h-auto
//           overflow-visible
//           pointer-events-none
//           opacity-30
//           md:opacity-50
//           lg:opacity-100
//         "
//         viewBox="0 0 1400 315"
//         preserveAspectRatio="xMidYMax meet"
//       >
//         <Plant
//           x={1400 * 0.08}
//           y={315 * 0.57}
//         />

//         <CricketBat
//           x={1400 * 0.735}
//           y={315 * 0.70}
//           angle={14}
//         />

//         <CricketBall
//           x={1400 * 0.035}
//           y={315 * 0.89}
//         />

//         <ServerRack
//           x={1400 * 0.775}
//           y={315 * 0.235}
//         />

//         <Plant
//           x={1400 * 0.815}
//           y={315 * 0.022}
//           scale={0.52}
//         />

//         <FloorLine />
//       </svg>
//     </div>
//   );
// }

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
