import { FloorLine, Plant } from "@/components/SvgPrimitives";

const INK = "var(--ink)";

const QUESTS = [
  {
    tag: ["LLM", "RAG"],
    status: "Learning",
    title: "AI learning",
    body:
      "I’m learning AI by building with it, so every concept gets tested in real systems — from LLMs and RAG to search, summarization, and workflow automation.",
  },
  {
    tag: ["Go", "CLI"],
    status: "Building",
    title: "Relay",
    body:
      "A Go-powered emailer and messaging CLI for reliable bulk sends, CSV-driven workflows, validation, retries, and a provider-agnostic path toward multi-channel delivery.",
  },
  {
    tag: ["Repo tooling"],
    status: "Building",
    title: "GitHub Open Source Reader",
    body:
      "A repo-reading tool for structured exploration, dependency tracking, and code understanding — part of the broader knowledge-workspace direction.",
  },
  {
    tag: ["Infra"],
    status: "Learning",
    title: "Kubernetes",
    body:
      "I’m also learning Kubernetes so I can package, deploy, and scale systems more confidently in production environments.",
  },
];

// Commit trail: a small git-log walk across the floor line, standing in for
// "the build queue never really stops" — the last node pulses like an
// active job.
const COMMITS_X = [1000, 1050, 1090, 1140, 1175, 1225, 1265];

export default function SceneCricketCorner() {
  return (
    <div className="scene">
      <style>{`
        .sq-layout {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 1180px;
          display: grid;
          grid-template-columns: minmax(260px, 0.8fr) 1.6fr;
          gap: clamp(28px, 4vw, 64px);
          align-items: center;
          margin-bottom: 40px;
        }
        .sq-title {
          font-family: var(--font-syne), sans-serif;
          font-weight: 800;
          font-size: clamp(40px, 5vw, 68px);
          line-height: 0.95;
          letter-spacing: -0.02em;
          color: var(--ink);
          margin: 14px 0 18px;
        }
        .sq-title em {
          font-style: normal;
          color: var(--primary);
        }
        .sq-intro {
          font-family: var(--font-courier-prime), monospace;
          font-size: 15px;
          line-height: 1.75;
          color: var(--ink);
          opacity: 0.85;
          max-width: 380px;
        }
        .sq-meta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-top: 22px;
          padding: 7px 14px;
          border: 1px solid rgb(var(--ink-rgb) / 0.18);
          border-radius: 100px;
          font-family: var(--font-courier-prime), monospace;
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--ink);
          background: rgb(var(--bg-rgb) / 0.6);
        }
        .sq-live {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--primary);
          animation: sqLive 1.6s ease-in-out infinite;
        }
        @keyframes sqLive {
          0%, 100% { box-shadow: 0 0 0 0 color-mix(in srgb, var(--primary) 45%, transparent); }
          50% { box-shadow: 0 0 0 5px transparent; }
        }
        .sq-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }
        .quest-card {
          position: relative;
          display: flex;
          flex-direction: column;
          border: 1px solid rgb(var(--ink-rgb) / 0.16);
          border-radius: 14px;
          padding: 18px 18px 16px;
          background: rgb(var(--bg-rgb) / 0.7);
          box-shadow: 0 1px 0 rgb(var(--ink-rgb) / 0.04), 0 14px 30px -18px rgb(var(--ink-rgb) / 0.35);
          overflow: hidden;
          transition: border-color 0.2s ease, transform 0.25s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.25s ease;
        }
        .quest-card::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 3px;
          background: var(--ink);
          transform: scaleY(0);
          transform-origin: top;
          transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .quest-card:hover {
          border-color: rgb(var(--ink-rgb) / 0.4);
          transform: translateY(-3px);
          box-shadow: 0 1px 0 rgb(var(--ink-rgb) / 0.04), 0 22px 40px -20px rgb(var(--ink-rgb) / 0.45);
        }
        .quest-card:hover::before { transform: scaleY(1); }
        .quest-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
        }
        .quest-num {
          font-family: var(--font-syne), sans-serif;
          font-weight: 800;
          font-size: 13px;
          color: rgb(var(--ink-rgb) / 0.35);
        }
        .quest-status {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-courier-prime), monospace;
          font-size: 10.5px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--ink);
          opacity: 0.7;
        }
        .quest-status::before {
          content: "";
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent);
        }
        .quest-status--building::before { background: var(--primary); }
        .quest-title {
          font-family: var(--font-syne), sans-serif;
          font-weight: 700;
          font-size: 19px;
          line-height: 1.15;
          letter-spacing: -0.01em;
          color: var(--ink);
          margin-bottom: 8px;
        }
        .quest-body {
          font-family: var(--font-courier-prime), monospace;
          font-size: 12.5px;
          line-height: 1.65;
          color: var(--ink);
          opacity: 0.8;
          margin-bottom: 14px;
        }
        .quest-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: auto;
        }
        .quest-tag {
          font-family: var(--font-courier-prime), monospace;
          font-size: 10.5px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 3px 9px;
          border-radius: 100px;
          color: var(--ink);
          background: rgb(var(--ink-rgb) / 0.06);
          border: 1px solid rgb(var(--ink-rgb) / 0.1);
        }
        @keyframes commitPulse {
          0%, 100% { opacity: 1; r: 5.5; }
          50% { opacity: 0.35; r: 7; }
        }
        .commit-node--active {
          animation: commitPulse 1.6s ease-in-out infinite;
          transform-origin: center;
        }
        @media (max-width: 980px) {
          .sq-layout { grid-template-columns: 1fr; gap: 24px; }
          .sq-intro { max-width: 560px; }
        }
        @media (max-width: 560px) {
          .sq-grid { grid-template-columns: 1fr; }
        }
      `}</style>
      <div className="sq-layout">
        <div>
          <p className="scene-head-eyebrow">
            <span>06</span>
            <span className="scene-head-rule" />
            off the main path
          </p>
          <h2 className="sq-title">
            Side<br />Quests<em>.</em>
          </h2>
          <p className="sq-intro">
            I’m building outside the main path too — learning AI hands-on,
            shipping small systems, and exploring the infrastructure that makes
            the rest of the stack work better.
          </p>
          <div className="sq-meta">
            <span className="sq-live" />
            {QUESTS.length} in progress · queue never stops
          </div>
        </div>
        <div className="sq-grid">
          {QUESTS.map((quest, i) => (
            <article key={quest.title} className="quest-card">
              <div className="quest-top">
                <span className="quest-num">Q.{String(i + 1).padStart(2, "0")}</span>
                <span
                  className={`quest-status${quest.status === "Building" ? " quest-status--building" : ""}`}
                >
                  {quest.status}
                </span>
              </div>
              <h3 className="quest-title">{quest.title}</h3>
              <p className="quest-body">{quest.body}</p>
              <div className="quest-tags">
                {quest.tag.map((t) => (
                  <span key={t} className="quest-tag">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
      <svg
        style={{ position: "absolute", bottom: 54, left: 0, width: "100%", overflow: "visible" }}
        viewBox="0 0 1400 315"
        preserveAspectRatio="xMidYMax meet"
      >
        <Plant x={40} y={182} scale={0.8} />
        <line
          x1={COMMITS_X[0]}
          y1={296}
          x2={COMMITS_X[COMMITS_X.length - 1]}
          y2={296}
          stroke={INK}
          strokeWidth={1.4}
          opacity={0.3}
        />
        {COMMITS_X.map((cx, i) => {
          const isLast = i === COMMITS_X.length - 1;
          return (
            <circle
              key={cx}
              cx={cx}
              cy={296}
              r={isLast ? 5.5 : 4}
              fill={isLast ? INK : "var(--bg)"}
              stroke={INK}
              strokeWidth={1.6}
              className={isLast ? "commit-node--active" : undefined}
              opacity={isLast ? 1 : 0.55}
            />
          );
        })}
        <text
          x={COMMITS_X[COMMITS_X.length - 1] + 14}
          y={300}
          fill={INK}
          fontFamily="monospace"
          fontSize="10"
          opacity={0.55}
        >
          building
        </text>
        <FloorLine />
      </svg>
    </div>
  );
}
