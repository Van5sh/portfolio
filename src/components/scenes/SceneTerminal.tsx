"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { PROJECTS, SCENE_NAMES } from "@/lib/data";
import { Plant, Keyboard, FloorLine } from "@/components/SvgPrimitives";

const INK = "var(--ink)";
const BG = "var(--bg)";

type TerminalLineKind = "sys" | "in" | "out" | "err";

interface TerminalLine {
  id: string;
  kind: TerminalLineKind;
  text: string;
}

export interface SceneTerminalProps {
  onNavigate?: (scene: number) => void;
}

function makeId() {
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function formatSceneName(name: string) {
  return name.toLowerCase().replace(/\s+/g, "");
}

export default function SceneTerminal({ onNavigate }: SceneTerminalProps) {
  const [lines, setLines] = useState<TerminalLine[]>(() => [
    { id: makeId(), kind: "sys", text: "VANSH.SH — TERMINAL" },
    {
      id: makeId(),
      kind: "out",
      text: "Type `help` to see available commands.",
    },
  ]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyCursor, setHistoryCursor] = useState<number | null>(null);

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const scenesByKey = useMemo(() => {
    return new Map(
      SCENE_NAMES.map((name, idx) => [formatSceneName(name), idx] as const),
    );
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [lines.length]);

  const pushLines = useCallback((next: TerminalLine[]) => {
    setLines((prev) => [...prev, ...next]);
  }, []);

  const clearTerminal = useCallback(() => {
    setLines([
      { id: makeId(), kind: "sys", text: "VANSH.SH — TERMINAL" },
      { id: makeId(), kind: "out", text: "Cleared. Type `help`." },
    ]);
  }, []);

  const runCommand = useCallback(
    async (raw: string) => {
      const cmdline = raw.trim();
      if (!cmdline) return;

      pushLines([{ id: makeId(), kind: "in", text: `$ ${cmdline}` }]);

      const [cmd, ...args] = cmdline.split(/\s+/);
      const c = (cmd ?? "").toLowerCase();

      if (c === "help") {
        pushLines([
          { id: makeId(), kind: "out", text: "Commands:" },
          { id: makeId(), kind: "out", text: "  help              Show commands" },
          { id: makeId(), kind: "out", text: "  whoami            About me" },
          { id: makeId(), kind: "out", text: "  projects          List projects" },
          { id: makeId(), kind: "out", text: "  scenes            List scenes" },
          { id: makeId(), kind: "out", text: "  goto <n|name>     Navigate (if enabled)" },
          { id: makeId(), kind: "out", text: "  clear             Clear terminal" },
          { id: makeId(), kind: "out", text: "  date              Current time" },
          { id: makeId(), kind: "out", text: "  echo <text>       Print text" },
        ]);
        return;
      }

      if (c === "clear" || (c === "cls" && args.length === 0)) {
        clearTerminal();
        return;
      }

      if (c === "whoami") {
        pushLines([
          { id: makeId(), kind: "out", text: "Vansh — Full Stack Developer" },
          { id: makeId(), kind: "out", text: "Builder · React/Next · RN · Systems" },
        ]);
        return;
      }

      if (c === "projects") {
        pushLines([
          { id: makeId(), kind: "out", text: "Projects:" },
          ...PROJECTS.map((p) => ({
            id: makeId(),
            kind: "out" as const,
            text: `  - ${p.name} (${p.status})`,
          })),
        ]);
        return;
      }
      if (c === "scenes") {
        pushLines([
          { id: makeId(), kind: "out", text: "Scenes:" },
          ...SCENE_NAMES.map((name, idx) => ({
            id: makeId(),
            kind: "out" as const,
            text: `  ${idx}: ${name}`,
          })),
        ]);
        return;
      }

      if (c === "goto") {
        const target = (args[0] ?? "").trim();
        if (!target) {
          pushLines([{ id: makeId(), kind: "err", text: "Usage: goto <n|name>" }]);
          return;
        }

        const parsed = Number.isFinite(Number(target)) ? Number(target) : null;
        const scene =
          parsed !== null && !Number.isNaN(parsed)
            ? parsed
            : scenesByKey.get(formatSceneName(target)) ?? null;

        if (scene === null) {
          pushLines([
            {
              id: makeId(),
              kind: "err",
              text: "Unknown scene. Run `scenes` to list.",
            },
          ]);
          return;
        }

        if (!onNavigate) {
          pushLines([
            {
              id: makeId(),
              kind: "err",
              text: "`goto` is not enabled (missing onNavigate).",
            },
          ]);
          return;
        }

        onNavigate(scene);
        pushLines([{ id: makeId(), kind: "out", text: `Navigating to scene ${scene}…` }]);
        return;
      }

      if (c === "date") {
        pushLines([{ id: makeId(), kind: "out", text: new Date().toString() }]);
        return;
      }

      if (c === "echo") {
        pushLines([{ id: makeId(), kind: "out", text: args.join(" ") }]);
        return;
      }

      pushLines([
        {
          id: makeId(),
          kind: "err",
          text: `Command not found: ${cmd}. Type \`help\`.`,
        },
      ]);
    },
    [clearTerminal, onNavigate, pushLines, scenesByKey],
  );

  const onSubmit = useCallback(async () => {
    const cmd = input;
    setInput("");
    setHistory((h) => [...h, cmd]);
    setHistoryCursor(null);
    await runCommand(cmd);
  }, [input, runCommand]);

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        e.preventDefault();
        void onSubmit();
        return;
      }

      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "l") {
        e.preventDefault();
        clearTerminal();
        return;
      }

      if (e.key === "ArrowUp") {
        e.preventDefault();
        if (history.length === 0) return;
        setHistoryCursor((cur) => {
          const next = cur === null ? history.length - 1 : Math.max(0, cur - 1);
          setInput(history[next] ?? "");
          return next;
        });
        return;
      }

      if (e.key === "ArrowDown") {
        e.preventDefault();
        if (history.length === 0) return;
        setHistoryCursor((cur) => {
          if (cur === null) return null;
          const next = cur + 1;
          if (next >= history.length) {
            setInput("");
            return null;
          }
          setInput(history[next] ?? "");
          return next;
        });
      }
    },
    [clearTerminal, history, onSubmit],
  );

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="scene">
      <p className="slabel">GET IN TOUCH — THE TERMINAL</p>

      <div style={{ position: "relative", zIndex: 10, width: "100%", maxWidth: 900, padding: "0 28px" }}>
        <div
          style={{
            background: INK,
            color: BG,
            padding: "38px 42px",
            borderRadius: 8,
            fontFamily: "var(--font-courier-prime), monospace",
            fontSize: 15,
            lineHeight: 2.05,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 20 }}>
            <div style={{ width: 11, height: 11, borderRadius: "50%", background: BG, opacity: 0.25 }} />
            <div style={{ width: 11, height: 11, borderRadius: "50%", background: BG, opacity: 0.25 }} />
            <div style={{ width: 11, height: 11, borderRadius: "50%", background: BG, opacity: 0.25 }} />
            <span style={{ marginLeft: 12, fontSize: 11, letterSpacing: "0.12em", opacity: 0.4 }}>
              VANSH.SH — TERMINAL
            </span>
          </div>
          <div
            ref={scrollRef}
            style={{
              maxHeight: 450,
              overflowY: "auto",
              paddingRight: 8,
              marginBottom: 16,
            }}
          >
            {lines.map((l) => (
              <div
                key={l.id}
                style={{
                  opacity: l.kind === "sys" ? 0 : l.kind === "err" ? 0.85 : 1,
                  color: l.kind === "err" ? "rgb(var(--bg-rgb) / 0.92)" : BG,
                  fontSize: l.kind === "sys" ? 11 : 14,
                  letterSpacing: l.kind === "sys" ? "0.1em" : undefined,
                  marginBottom: l.kind === "sys" ? 10 : 0,
                }}
              >
                {l.text}
              </div>
            ))}
          </div>

          {/* Input row */}
          <div
            style={{
              borderTop: `1px solid rgb(var(--bg-rgb) / 0.15)`,
              paddingTop: 14,
              display: "flex",
              gap: 10,
              alignItems: "center",
            }}
          >
            <div style={{ opacity: 0.7, fontSize: 15 }}>$</div>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              className="terminal-input"
              placeholder="help"
              style={{ marginBottom: 0, fontSize: 15 }}
              spellCheck={false}
              autoCapitalize="none"
              autoCorrect="off"
            />
          </div>
        </div>
      </div>

      <svg
        style={{ position: "absolute", bottom: 40, left: 0, width: "100%", overflow: "visible" }}
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