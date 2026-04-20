import { Cloud } from "@/components/SvgPrimitives";

const INK = "#3B0D12";

export default function SceneFinal() {
  return (
    <div className="scene">
      <div style={{ textAlign: "center", position: "relative", zIndex: 10 }}>
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
            fontSize: "clamp(44px,8vw,108px)",
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
          style={{
            fontFamily: "var(--font-courier-prime), monospace",
            fontSize: 14,
            marginTop: 20,
            opacity: 0.5,
            letterSpacing: "0.06em",
            color: INK,
          }}
        >
          vansh@dev.io · github.com/vansh · @vanshdev
        </p>
        <div
          style={{
            marginTop: 28,
            fontFamily: "var(--font-courier-prime), monospace",
            fontSize: 11,
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
