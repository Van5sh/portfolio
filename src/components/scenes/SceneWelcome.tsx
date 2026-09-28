import { Cloud } from "@/components/SvgPrimitives";

const INK = "var(--ink)";

const FACTS = [
  { k: "Studying", v: "CSE @ VIT Vellore" },
  { k: "Stack", v: "React · Python · Go" },
  { k: "Exploring", v: "DevOps & Cloud" },
  { k: "Off-screen", v: "State-level cricket" },
];

export default function SceneWelcome() {
  return (
    <div className="scene">
      <style>{`
        .wl-layout {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 1100px;
          display: grid;
          grid-template-columns: 0.9fr 1.3fr;
          gap: clamp(32px, 5vw, 80px);
          align-items: center;
        }
        .wl-title {
          margin-top: 14px;
          font-family: var(--font-syne), sans-serif;
          font-weight: 800;
          font-size: clamp(44px, 6vw, 84px);
          line-height: 0.95;
          letter-spacing: -0.02em;
          color: var(--ink);
        }
        .wl-title em { font-style: normal; color: var(--primary); }
        .wl-body p {
          font-family: var(--font-courier-prime), monospace;
          font-size: clamp(14px, 1.3vw, 16.5px);
          line-height: 1.8;
          color: var(--ink);
          margin-bottom: 14px;
        }
        .wl-body p:first-child {
          font-size: clamp(16px, 1.6vw, 20px);
          line-height: 1.6;
        }
        .wl-facts {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
          margin-top: 22px;
        }
        .wl-fact {
          border: 1px solid rgb(var(--ink-rgb) / 0.16);
          border-radius: 12px;
          padding: 10px 14px;
          background: rgb(var(--bg-rgb) / 0.6);
          font-family: var(--font-courier-prime), monospace;
        }
        .wl-fact-k {
          font-size: 10.5px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          opacity: 0.55;
        }
        .wl-fact-v {
          margin-top: 2px;
          font-size: 14px;
          font-weight: 700;
        }
        @media (max-height: 760px) and (min-width: 901px) {
          .wl-title { font-size: clamp(40px, 4.6vw, 64px); }
          .wl-body p { font-size: 14px; line-height: 1.65; margin-bottom: 10px; }
          .wl-body p:first-child { font-size: 16px; line-height: 1.55; }
          .wl-facts { grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 8px; margin-top: 14px; }
          .wl-fact { padding: 8px 10px; }
          .wl-fact-v { font-size: 12.5px; }
        }
        @media (max-width: 900px) {
          .wl-layout { grid-template-columns: 1fr; gap: 20px; }
        }
        @media (max-width: 460px) {
          .wl-facts { grid-template-columns: 1fr; }
        }
      `}</style>
      <div className="wl-layout">
        <div>
          <p className="scene-head-eyebrow">
            <span>02</span>
            <span className="scene-head-rule" />
            welcome in
          </p>
          <h2 className="wl-title">
            Hello,<br />I&apos;m Vansh<em>.</em>
          </h2>
        </div>
        <div className="wl-body" style={{ color: INK }}>
          <p>
            I’m a third-year Computer Science and Engineering student at Vellore Institute of Technology, with a strong interest in building impactful software and continuously learning new technologies.
          </p>
          <p>
            As a full-stack developer, I have experience working with React, Python, and Golang, and I’m currently exploring DevOps and cloud technologies to broaden my skill set.
          </p>
          <p>
            Outside of tech, I’m a passionate cricket enthusiast and have competed at the state level. I’m always looking for opportunities to learn, grow, and contribute to meaningful projects.
          </p>
          <div className="wl-facts">
            {FACTS.map((f) => (
              <div key={f.k} className="wl-fact">
                <div className="wl-fact-k">{f.k}</div>
                <div className="wl-fact-v">{f.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <svg
        style={{ position: "absolute", right: "8%", top: "11%", opacity: 0.65 }}
        width={130} height={55} viewBox="0 0 200 70"
      >
        <Cloud x={10} y={10} scale={0.85} />
      </svg>
      <svg
        style={{ position: "absolute", left: "4%", bottom: "16%", opacity: 0.6 }}
        width={150} height={60} viewBox="0 0 200 70"
      >
        <Cloud x={10} y={10} scale={1} />
      </svg>
    </div>
  );
}
