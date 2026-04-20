import { Cloud } from "@/components/SvgPrimitives";

const INK = "var(--ink)";

export default function SceneWelcome() {
  return (
    <div className="scene">
      <div
        style={{
          textAlign: "center",
          zIndex: 10,
          maxWidth: 620,
          padding: "0 32px",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-courier-prime), monospace",
            fontSize: "clamp(16px,2.2vw,22px)",
            color: INK,
            letterSpacing: "0.04em",
            lineHeight: 1.75,
          }}
        >
          Less of a résumé, more of an adventure
        </p>
        <p
          style={{
            fontFamily: "var(--font-courier-prime), monospace",
            fontSize: "clamp(16px,2.2vw,22px)",
            color: INK,
            letterSpacing: "0.04em",
            lineHeight: 1.75,
            marginTop: 10,
          }}
        >
          Pull up a chair, stay a while
        </p>
      </div>
      <svg
        style={{ position: "absolute", right: "6%", top: "28%", opacity: 0.65 }}
        width={130} height={55} viewBox="0 0 200 70"
      >
        <Cloud x={10} y={10} scale={0.85} />
      </svg>
      <svg
        style={{ position: "absolute", left: "3%", bottom: "36%" }}
        width={90} height={42} viewBox="0 0 200 70"
      >
        <Cloud x={10} y={10} scale={0.6} />
      </svg>
    </div>
  );
}
