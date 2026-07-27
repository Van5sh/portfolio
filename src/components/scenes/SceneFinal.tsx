import { Cloud } from "@/components/SvgPrimitives";

const INK = "var(--ink)";

export default function SceneFinal() {
  return (
    <div className="scene">
      <div
        style={{
          textAlign: "center",
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: 860,
          padding: "0 20px",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-courier-prime), monospace",
            fontSize: 11,
            letterSpacing: "0.15em",
            opacity: 0.35,
            marginBottom: 20,
            color: INK,
          }}
        >
          THANK YOU FOR SCROLLING
        </div>
        <h2
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontWeight: 800,
            fontSize: "clamp(36px,6.5vw,84px)",
            color: INK,
            lineHeight: 1,
            letterSpacing: "-0.02em",
          }}
        >
          LET&apos;S BUILD
          <br />
          SOMETHING.
        </h2>
        <p
          className="final-links"
          style={{
            fontFamily: "var(--font-courier-prime), monospace",
            fontSize: 14,
            marginTop: 20,
            opacity: 0.5,
            letterSpacing: "0.06em",
            color: INK,
          }}
        >
          <a href="mailto:vansh05dhir@gmail.com" target="_blank" rel="noopener noreferrer">
            vansh05dhir@gmail.com
          </a>{"  "}
          <a href="https://github.com/Van5sh" target="_blank" rel="noopener noreferrer">
            Van5sh
          </a>{"  "}
          <a href="https://www.linkedin.com/in/vansh-dhir-686b5028b/" target="_blank" rel="noopener noreferrer">
            Vansh
          </a>
        </p>
        <div
          style={{
            marginTop: 28,
            fontFamily: "var(--font-courier-prime), monospace",
            fontSize: "clamp(10px, 2.3vw, 11px)",
            opacity: 0.28,
            letterSpacing: "0.1em",
            color: INK,
          }}
        >
          ← go back and explore more rooms
        </div>
      </div>
      <svg
        style={{ position: "absolute", left: "5%", bottom: "18%", opacity: 0.6 }}
        width={165} height={65} viewBox="0 0 200 70"
      >
        <Cloud x={10} y={8} scale={1.2} />
      </svg>
      <svg
        style={{ position: "absolute", right: "8%", top: "30%", opacity: 0.5 }}
        width={120} height={50} viewBox="0 0 200 70"
      >
        <Cloud x={10} y={12} scale={0.88} />
      </svg>
    </div>
  );
}
