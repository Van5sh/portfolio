import { Cloud } from "@/components/SvgPrimitives";

const INK = "var(--ink)";

export default function SceneHero() {
  return (
    <div className="scene">
      <div style={{ textAlign: "center", zIndex: 10, position: "relative" }}>
        <h1
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontWeight: 800,
            fontSize: "clamp(72px,14vw,180px)",
            color: INK,
            lineHeight: 1,
            letterSpacing: "-0.02em",
          }}
        >
          VANSH.
        </h1>
        {/* <p
          style={{
            fontFamily: "var(--font-courier-prime), monospace",
            fontSize: 14,
            color: INK,
            opacity: 0.52,
            marginTop: 16,
            letterSpacing: "0.12em",
          }}
        >
          (a hack-shaped portfolio)
        </p> */}
        <p
          style={{
            fontFamily: "var(--font-courier-prime), monospace",
            color: INK,
            marginTop: 28,
            letterSpacing: "0.08em",
          }}
          className="font-2xl"
        >
          navigate with arrows or ← → keys
        </p>
      </div>
      <svg
        style={{ position: "absolute", left: "7%", bottom: "20%", opacity: 0.75 }}
        width={180} height={68} viewBox="0 0 200 70"
      >
        <Cloud x={10} y={8} scale={1.2} />
      </svg>
      <svg
        style={{ position: "absolute", right: "9%", bottom: "28%", opacity: 0.7 }}
        width={148} height={58} viewBox="0 0 200 70"
      >
        <Cloud x={10} y={12} scale={0.98} />
      </svg>
    </div>
  );
}
