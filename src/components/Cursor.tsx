"use client";

import { useEffect, useRef } from "react";

const INTERACTIVE = "[data-cursor], a, button, [role='button']";
const TEXT_INPUT = "input, textarea, [contenteditable='true']";

export default function Cursor() {
  const lensRef = useRef<HTMLDivElement | null>(null);
  const bubbleRef = useRef<HTMLDivElement | null>(null);
  const labelRef = useRef<HTMLSpanElement | null>(null);
  const subRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!mq.matches) return;
    const lens = lensRef.current;
    const bubble = bubbleRef.current;
    if (!lens || !bubble) return;
    const els = [lens, bubble];
    const toggle = (cls: string, on: boolean) => els.forEach((e) => e.classList.toggle(cls, on));

    const root = document.documentElement;
    root.classList.add("has-cursor");

    const target = { x: -100, y: -100 };
    const pos = { x: -100, y: -100 };
    let raf = 0;
    let lastHit: Element | null = null;

    const setState = (hit: Element | null, overText: boolean) => {
      toggle("is-hidden", overText);
      if (hit === lastHit) return;
      lastHit = hit;
      const label = hit?.getAttribute("data-cursor") ?? "";
      const sub = hit?.getAttribute("data-cursor-sub") ?? "";
      toggle("is-label", !!label);
      toggle("is-link", !!hit && !label);
      if (labelRef.current) labelRef.current.textContent = label;
      if (subRef.current) subRef.current.textContent = sub;
    };

    const onMove = (e: PointerEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      toggle("is-away", false);
      const t = e.target as Element | null;
      const hit = t?.closest?.(INTERACTIVE) ?? null;
      const disabled = hit instanceof HTMLButtonElement && hit.disabled;
      setState(disabled ? null : hit, !!t?.closest?.(TEXT_INPUT));
    };
    const onDown = () => toggle("is-down", true);
    const onUp = () => toggle("is-down", false);
    const onLeave = () => toggle("is-away", true);

    const tick = () => {
      // ease toward the pointer for a soft trailing feel
      pos.x += (target.x - pos.x) * 0.22;
      pos.y += (target.y - pos.y) * 0.22;
      const t = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      lens.style.transform = t;
      bubble.style.transform = t;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    document.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      root.classList.remove("has-cursor");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <>
      {/* two separate fixed layers: a blend mode only reaches the page from
          a top-level element, and the data bubble must stay solid to be readable */}
      <div ref={lensRef} className="cursor cursor--lens is-away" aria-hidden>
        <div className="cursor-blob" />
      </div>
      <div ref={bubbleRef} className="cursor is-away" aria-hidden>
        <div className="cursor-bubble">
          <span ref={labelRef} className="cursor-label" />
          <span ref={subRef} className="cursor-sub" />
        </div>
      </div>
    </>
  );
}
