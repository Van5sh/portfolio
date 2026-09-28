interface SceneHeadingProps {
  index: number;
  eyebrow: string;
  title: string;
  hint?: string;
  /** Hide on narrower desktops where it would collide with centered scene art */
  side?: boolean;
}

export default function SceneHeading({ index, eyebrow, title, hint, side }: SceneHeadingProps) {
  return (
    <header className={`scene-head${side ? " scene-head--side" : ""}`}>
      <p className="scene-head-eyebrow">
        <span>{String(index).padStart(2, "0")}</span>
        <span className="scene-head-rule" />
        {eyebrow}
      </p>
      <h2 className="scene-head-title">{title}</h2>
      {hint && <p className="scene-head-hint">{hint}</p>}
    </header>
  );
}
