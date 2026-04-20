"use client";

import { useState } from "react";
import { Plant, Keyboard, FloorLine } from "@/components/SvgPrimitives";

const INK = "var(--ink)";
const BG = "var(--bg)";

export default function SceneTerminal() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const send = () => {
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 1500);
  };

  return (
    <div className="scene">
      <p className="slabel">GET IN TOUCH — THE TERMINAL</p>
      <div style={{ position: "relative", zIndex: 10, width: "100%", maxWidth: 540, padding: "0 24px" }}>
        <div
          style={{
            background: INK,
            color: BG,
            padding: "24px 28px",
            borderRadius: 6,
            fontFamily: "var(--font-courier-prime), monospace",
            fontSize: 13,
            lineHeight: 1.9,
          }}
        >
          <div style={{ marginBottom: 12, opacity: 0.5, fontSize: 11, letterSpacing: "0.1em" }}>
            VANSH.SH — v2.0.0
          </div>
          <div>
            $ <span style={{ opacity: 0.65 }}>whoami</span>
          </div>
          <div style={{ paddingLeft: 14, marginBottom: 8 }}>→ Vansh · Full Stack Developer</div>
          <div>
            $ <span style={{ opacity: 0.65 }}>contact --send</span>
          </div>
          <div style={{ paddingLeft: 14, marginBottom: 16 }}>→ Fill below to ping me ↓</div>
          {!sent ? (
            <>
              {[
                { p: "your name", v: name, s: setName },
                { p: "your email", v: email, s: setEmail },
              ].map(({ p, v, s }) => (
                <input
                  key={p}
                  placeholder={p}
                  value={v}
                  onChange={e => s(e.target.value)}
                  className="terminal-input"
                />
              ))}
              <textarea
                placeholder="your message"
                value={msg}
                onChange={e => setMsg(e.target.value)}
                rows={3}
                style={{
                  width: "100%",
                  background: "transparent",
                  border: "none",
                  borderBottom: "1px solid rgb(var(--bg-rgb) / 0.28)",
                  color: BG,
                  fontFamily: "var(--font-courier-prime), monospace",
                  fontSize: 13,
                  padding: "4px 0",
                  marginBottom: 16,
                  outline: "none",
                  resize: "none",
                }}
              />
              <button
                onClick={send}
                style={{
                  background: BG,
                  color: INK,
                  border: "none",
                  padding: "8px 22px",
                  fontFamily: "var(--font-courier-prime), monospace",
                  fontSize: 12,
                  cursor: "pointer",
                  letterSpacing: "0.1em",
                }}
              >
                {sending ? "SENDING..." : "$ SEND MESSAGE"}
              </button>
            </>
          ) : (
            <div>
              <div>→ Message received! Talk soon ✓</div>
              <div style={{ opacity: 0.4, fontSize: 11, marginTop: 8 }}>$ _▌</div>
            </div>
          )}
        </div>
      </div>
      <svg
        style={{ position: "absolute", bottom: 54, left: 0, width: "100%", overflow: "visible" }}
        viewBox="0 0 1400 315"
        preserveAspectRatio="xMidYMax meet"
      >
        <Plant x={1250} y={182} scale={0.8} />
        <Keyboard x={80} y={248} w={265} h={58} />
        <FloorLine />
      </svg>
    </div>
  );
}
